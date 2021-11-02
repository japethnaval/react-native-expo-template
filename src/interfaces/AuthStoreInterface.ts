export interface AuthStoreInterface {
  accessToken: string
  isAuthenticated: boolean
  expiry?: Date

  login(): Promise<void>
  logout(): Promise<void>
}
