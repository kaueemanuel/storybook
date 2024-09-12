/* eslint-disable @typescript-eslint/no-explicit-any */
import { create, StoreApi, UseBoundStore } from "zustand"

export interface RequestsStoreState {
  AuthStore?: UseBoundStore<StoreApi<any>>
  setAuthStore: (store: UseBoundStore<StoreApi<any>>) => void
}

export const RequestsStore = create<RequestsStoreState>((set) => {
  const setAuthStore = (store: UseBoundStore<StoreApi<any>>) => {
    set(() => ({ AuthStore: store }))
  }

  return {
    setAuthStore,
  }
})

export default RequestsStore
