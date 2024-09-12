/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosHeaders, AxiosRequestConfig, AxiosResponse } from "axios"
import isEmpty from "lodash/isEmpty"
import isObject from "lodash/isObject"
import set from "lodash/set"

import { serialize } from "../functions/serialize"

const isFormData = (data: any) => {
  return data instanceof FormData
}

interface Response extends Omit<AxiosResponse<any, any>, "data"> {
  body: any
}

export interface RequestProps {
  domain?: string
  method?: string
  endpoint?: string
  data?: BodyInit
  headers?: HeadersInit
  protocol?: string
  port?: number
  fetchOptions?: object
  json?: boolean
  signal?: null
  apiVersion?: boolean
  guest?: boolean
}

function getUrl({ domain = "", endpoint = "", protocol = "", port = 0 }) {
  let url = ""
  if (protocol) {
    url = `${protocol}://`
  }
  if (domain) {
    url += domain
  }
  if (port) {
    url = `${url}:${port}`
  }

  return `${url}${endpoint}`
}

function getConfig({
  method = "",
  data,
  headers = {},
  fetchOptions = {},
}: {
  method?: string
  data?: BodyInit
  headers?: HeadersInit
  fetchOptions?: object
}): AxiosRequestConfig<any> {
  return {
    method,
    headers: !isEmpty(headers) ? (headers as AxiosHeaders) : {},
    data: data || undefined,
    ...fetchOptions,
  }
}

async function request({
  domain,
  method,
  endpoint,
  data,
  headers,
  protocol,
  port,
  fetchOptions,
  // json = false,
  signal = null,
}: RequestProps) {
  const url = getUrl({
    domain,
    endpoint,
    protocol,
    port,
  })

  const w: any = window

  if (!w.requests) {
    w.requests = {}
  }

  let controller: AbortController | null = null

  if (method?.toLocaleLowerCase() === "get" && signal === null) {
    w.requests[url]?.abort()

    delete w.requests[url]

    controller = new AbortController()

    w.requests[url] = controller
  }

  const config = getConfig({
    method,
    data,
    headers,
    fetchOptions,
  })

  if (signal !== null) {
    set(config, "signal", signal)
  } else {
    set(config, "signal", controller?.signal)
  }

  // const response = await fetch(url, { ...config, mode: "cors" })
  const response = await axios({
    url,
    ...config,
  })

  if (response.statusText.toLocaleUpperCase() === "OK") {
    const { data: body } = response
    delete response.data

    delete w.requests[url]

    return {
      ...response,
      body,
    } as Response
  }

  delete w.requests[url]

  throw response
}

interface GetProps extends Partial<RequestProps> {
  serializeConfig?: { clean: boolean }
}

async function get({
  domain,
  endpoint,
  data,
  headers,
  protocol,
  port,
  fetchOptions,
  json = false,
  signal = null,
  serializeConfig = { clean: false },
}: GetProps) {
  if (data) {
    endpoint += `?${serialize(data, serializeConfig)}`
  }
  return request({
    domain,
    fetchOptions,
    method: "GET",
    endpoint,
    data: undefined,
    headers,
    protocol,
    port,
    json,
    signal,
  })
}

async function post({
  domain,
  endpoint,
  data,
  headers,
  protocol,
  port,
  fetchOptions,
  json = false,
}: RequestProps) {
  if (isObject(data)) {
    data = JSON.stringify(data)
  }
  return request({
    domain,
    fetchOptions,
    method: "POST",
    endpoint,
    data,
    headers,
    protocol,
    port,
    json,
  })
}

async function put({
  domain,
  endpoint,
  data,
  headers,
  protocol,
  port,
  fetchOptions,
  json,
}: RequestProps) {
  if (data && !isFormData(data)) {
    data = JSON.stringify(data)
  }
  return request({
    domain,
    fetchOptions,
    method: "PUT",
    endpoint,
    data,
    headers,
    protocol,
    port,
    json,
  })
}

async function patch({
  domain,
  endpoint,
  data,
  headers,
  protocol,
  port,
  fetchOptions,
  json,
}: RequestProps) {
  if (data && !isFormData(data)) {
    data = JSON.stringify(data)
  }
  return request({
    domain,
    fetchOptions,
    method: "PATCH",
    endpoint,
    data,
    headers,
    protocol,
    port,
    json,
  })
}

async function del({
  domain,
  endpoint,
  data,
  headers,
  protocol,
  port,
  fetchOptions,
  json,
}: RequestProps) {
  if (data && !isFormData(data)) {
    data = JSON.stringify(data)
  }
  return request({
    domain,
    fetchOptions,
    method: "DELETE",
    endpoint,
    data,
    headers,
    protocol,
    port,
    json,
  })
}

export { get, post, put, patch, del }
