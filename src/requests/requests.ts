/* eslint-disable @typescript-eslint/no-explicit-any */
import forEach from "lodash/forEach"
import getL from "lodash/get"
import isEmpty from "lodash/isEmpty"
import size from "lodash/size"
import toLower from "lodash/toLower"
import { closeSnackbar, SnackbarKey } from "notistack"

import i18n from "../locales/i18n"
import {
  OpenSnackbarOptionsProps,
  openSnackbar,
} from "../providers/snackbar/SnackbarFunctions"
import * as HttpService from "./http"
import RequestsStore from "./RequestsStore"

const getAuthStore = () => RequestsStore.getState().AuthStore
const getIsDevelopment = () => getAuthStore()?.getState().isDevelopment
const { t } = i18n

function getUrl({
  endpoint = "",
  protocol = "http",
  port = true,
  apiVersion = true,
  domain = "",
  host = "",
}: {
  endpoint: string
  domain?: string
  apiVersion?: number | boolean
  protocol?: string
  port?: number | boolean
  host?: string
}) {
  let url = ""
  const hostAux = host && host !== "" ? host : getAuthStore()?.getState().host

  if (hostAux.split("://").length > 1) {
    // host já tem protocolo concatenado
    url = hostAux
  } else {
    url = `${protocol}://${hostAux}`
  }

  if (domain) {
    url += domain
  }

  if (isEmpty(hostAux.split(":")[2]) && port) {
    if (typeof port === "boolean") {
      port = 45701
    }

    // se o host não possuir porta na string, e tiver porta setada
    url += `:${port}`
  }

  if (apiVersion) {
    url = `${url}/api`
  }

  return `${url}/${endpoint}`
}

function getHeaders({ headers = {}, guest = false }) {
  if (!guest && getAuthStore()?.getState().isAuthenticated()) {
    headers = {
      ...headers,
      Authorization: `Bearer ${getAuthStore()?.getState().token()}`,
    }
  }
  return {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    ...headers,
  }
}

/**
 * @name typeReturnMessage
 * @description Lista contendo os tipos de mensagens que devem ser exibidas na snackbar
 * Só irá exibir quando a propriedade showMessages estiver true
 */
const typeReturnMessage = {
  ERROR: "error",
  SUCCESS: "success",
  WARNING: "warning",
}

interface RequestProps {
  domain?: string
  endpoint: string
  data?: object | string
  headers?: object
  apiVersion?: number | boolean
  protocol?: string
  port?: number | boolean
  fetchOptions?: object
  guest?: boolean
  serializeConfig?: object
  json?: any
  showSnackbarProcessing?: boolean
  showModalMessages?: boolean
  showMessages?: boolean
  snackbarOptions?: OpenSnackbarOptionsProps
  signal?: any
  showMessagesTypes?: any
  host?: string
}

async function request(
  service: any,
  {
    apiVersion,
    domain,
    endpoint,
    data,
    headers,
    protocol,
    port,
    fetchOptions,
    guest,
    serializeConfig,
    json,
    showSnackbarProcessing = false,
    showModalMessages = false,
    showMessages = true,
    snackbarOptions = {},
    signal = null,
    showMessagesTypes = [
      typeReturnMessage.ERROR,
      typeReturnMessage.SUCCESS,
      typeReturnMessage.WARNING,
    ],
    host = "",
  }: RequestProps,
) {
  let snackbarProcessing: SnackbarKey

  const stopSnack = () => {
    if (showSnackbarProcessing) {
      setTimeout(() => closeSnackbar(snackbarProcessing), 500)
    }
  }

  const checkMessages = (response: any) => {
    const { body } = response

    const { messages } = body

    if (showMessages) {
      if (showModalMessages && size(messages) > 1) {
        // mostra o modal de notificações
        // initModalMessages(showModalMessages, messages)
      } else if (!isEmpty(messages)) {
        // mostra snackbars de resposta se tiver pelo menos uma mensagem vinda da API
        forEach(messages, (content) => {
          const { type, message, code } = content
          const typeLower: OpenSnackbarOptionsProps["variant"] =
            type && type?.toLowerCase() ? type.toLowerCase() : undefined

          // Se o tipo não foi solicitado para ser exibido, deve ignorar a mensagem em questão
          if (!!typeLower && !showMessagesTypes.includes(toLower(type))) {
            return
          }

          const formattedMessage = code ? `#${code}: ${message}` : `${message}`

          openSnackbar(formattedMessage, {
            anchorOrigin: {
              horizontal: "left",
              vertical: "top",
            },
            ...snackbarOptions,
            variant: typeLower,
          })
        })
      }
    }

    if (`${response?.status}` !== "200" && !guest) {
      throw body
    }
  }

  try {
    /*
     * caso a rota seja autenticada e o usuário está logado mas seu token já expirou,
     * pegamos um novo token com a API para prosseguir com a solicitação original
     * */
    if (
      !guest &&
      getAuthStore()?.getState().isAuthenticated() &&
      getAuthStore()?.getState().hasExpired() &&
      !getAuthStore()?.getState().refreshTokenLoading
    ) {
      await getAuthStore()?.getState().refreshToken()
    }

    const methodOptions = {
      endpoint: getUrl({
        host,
        domain,
        endpoint,
        protocol,
        port,
        apiVersion,
      }),
      headers: getHeaders({
        headers,
        guest,
      }),
      data,
      fetchOptions,
      serializeConfig,
      json,
      signal,
    }

    const method = getL(service, "name", "get")

    if (showSnackbarProcessing) {
      if (method === "get") {
        setTimeout(() => {
          snackbarProcessing = openSnackbar(t("http_processing"), {
            variant: "info",
            persist: true,
            preventDuplicate: true,
            ...snackbarOptions,
          })
        }, 500)
      } else {
        setTimeout(() => {
          snackbarProcessing = openSnackbar(t("http_working"), {
            variant: "info",
            persist: true,
            preventDuplicate: true,
            ...snackbarOptions,
          })
        }, 20000)
      }
    }

    const response = await service(methodOptions)
    stopSnack()

    if (response) {
      checkMessages(response)
    }

    return response
  } catch (e: any) {
    stopSnack()
    // logout user if status = not authorized
    if (e.status === 401) {
      if (!getIsDevelopment()) {
        getAuthStore()?.getState().logout()
      }
    }

    if (e.response?.data) {
      checkMessages({ body: e.response?.data })
      throw e.response
    }
    throw e
  }
}

async function get({
  domain,
  endpoint,
  data,
  headers,
  apiVersion,
  protocol,
  port,
  fetchOptions,
  guest,
  serializeConfig,
  json,
  showSnackbarProcessing,
  showModalMessages,
  showMessages,
  snackbarOptions,
  signal,
  showMessagesTypes,
  host,
}: RequestProps) {
  return request(HttpService.get, {
    domain,
    endpoint,
    data,
    headers,
    apiVersion,
    protocol,
    port,
    fetchOptions,
    guest,
    serializeConfig,
    json,
    showSnackbarProcessing,
    showModalMessages,
    showMessages,
    snackbarOptions,
    signal,
    showMessagesTypes,
    host,
  })
}

async function post({
  domain,
  endpoint,
  data,
  headers,
  apiVersion,
  protocol,
  port,
  fetchOptions,
  guest,
  json,
  showSnackbarProcessing,
  showModalMessages,
  showMessages,
  snackbarOptions,
  showMessagesTypes,
  host,
}: RequestProps) {
  return request(HttpService.post, {
    domain,
    endpoint,
    data,
    headers,
    apiVersion,
    protocol,
    port,
    fetchOptions,
    guest,
    json,
    showSnackbarProcessing,
    showModalMessages,
    showMessages,
    snackbarOptions,
    showMessagesTypes,
    host,
  })
}

async function put({
  domain,
  endpoint,
  data,
  headers,
  apiVersion,
  protocol,
  port,
  fetchOptions,
  guest,
  json,
  showSnackbarProcessing,
  showMessages,
  showModalMessages,
  snackbarOptions,
  showMessagesTypes,
  host,
}: RequestProps) {
  return request(HttpService.put, {
    domain,
    endpoint,
    data,
    headers,
    apiVersion,
    protocol,
    port,
    fetchOptions,
    guest,
    json,
    showSnackbarProcessing,
    showModalMessages,
    showMessages,
    snackbarOptions,
    showMessagesTypes,
    host,
  })
}

async function patch({
  domain,
  endpoint,
  data,
  headers,
  apiVersion,
  protocol,
  port,
  fetchOptions,
  guest,
  json,
  showSnackbarProcessing,
  showModalMessages,
  snackbarOptions,
  showMessagesTypes,
  host,
}: RequestProps) {
  return request(HttpService.patch, {
    domain,
    endpoint,
    data,
    headers,
    apiVersion,
    protocol,
    port,
    fetchOptions,
    guest,
    json,
    showSnackbarProcessing,
    showModalMessages,
    snackbarOptions,
    showMessagesTypes,
    host,
  })
}

async function del({
  domain,
  endpoint,
  data,
  headers,
  apiVersion,
  protocol,
  port,
  fetchOptions,
  guest,
  json,
  showSnackbarProcessing,
  showModalMessages,
  snackbarOptions,
  showMessagesTypes,
  host,
  showMessages,
}: RequestProps) {
  return request(HttpService.del, {
    domain,
    endpoint,
    data,
    headers,
    apiVersion,
    protocol,
    port,
    fetchOptions,
    guest,
    json,
    showSnackbarProcessing,
    showModalMessages,
    snackbarOptions,
    showMessagesTypes,
    host,
    showMessages,
  })
}

// async function down(methodConfig: any, method: any = get) {
//   return HttpService.down(methodConfig, method)
// }

export { get, post, put, patch, del, typeReturnMessage }
