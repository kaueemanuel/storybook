/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLayoutEffect } from "react"

import { StoreApi, UseBoundStore } from "zustand"

import RequestsStore from "./RequestsStore"

export interface RequestsProviderProps {
  useAuthStore: UseBoundStore<StoreApi<any>>
  children: React.ReactNode
}

export const RequestsProvider: React.FC<RequestsProviderProps> = ({
  useAuthStore,
  children,
}) => {
  const { setAuthStore, AuthStore } = RequestsStore()

  useLayoutEffect(() => {
    setAuthStore(useAuthStore)
  }, [])

  if (!AuthStore) return null

  return children
}
