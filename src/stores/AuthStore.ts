/* eslint-disable no-useless-constructor */
import { action, computed, makeObservable, observable, runInAction } from 'mobx'
import add from 'date-fns/add'
import isAfter from 'date-fns/isAfter'
import { RootStore } from '../interfaces/RootStore'
import StoreBase from './StoreBase'

class AuthStore extends StoreBase {
  public accessToken?: string

  public expiry?: Date

  public constructor(rootStore: RootStore) {
    super(rootStore)
    this.expiry = undefined
    this.accessToken = undefined

    makeObservable(this, {
      isAuthenticated: computed,
      accessToken: observable,
      expiry: observable,
      login: action,
    })
  }

  public get isAuthenticated(): boolean {
    if (this.expiry) {
      if (isAfter(new Date(), this.expiry)) {
        return false
      }
      return true
    }
    return false
  }

  public login = async (): Promise<void> => {
    try {
      await new Promise((r) => setTimeout(r, 2000))
      runInAction(() => {
        this.expiry = add(new Date(), { minutes: 10 })
        this.accessToken = 'ACCESS_TOKEN'
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export default AuthStore
