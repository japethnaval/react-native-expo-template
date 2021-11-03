export interface AuthStoreInterface {
  isAuthenticated: boolean
  accessToken?: string
  expiry?: Date
  login(username?: string, password?: string): Promise<void>
}
