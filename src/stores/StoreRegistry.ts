/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootStore } from '../interfaces/RootStore'
import AuthStore from './AuthStore'
import PersistedStore from './PersistedStore'
import StoreBase from './StoreBase'

export interface StoreKeys {
  authStore: AuthStore
  persistedStore: PersistedStore
}

export type StoreConstructor<TStore extends StoreBase = any> = new (rootStore: RootStore) => TStore

export type StoreConstructorWithData<TStoreData = any, TStore extends TStoreData = any> = new (
  initialData: TStoreData,
  rootStore: RootStore
) => TStore

interface StoreIndex {
  [key: string]: StoreConstructor
}

export const StoreIndex: StoreIndex = {
  authStore: AuthStore,
  persistedStore: PersistedStore,
}

export interface StoreData {
  authStore: Partial<{ role: string }>
  persistedStore: Partial<{ defaultLanguage: string }>
}
