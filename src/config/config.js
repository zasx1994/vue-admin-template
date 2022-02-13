const baseRouter = '/'
const baseUrl = `${window.location.protocol}//${window.location.host}`
const baseApiURL = `${baseUrl}/api`
const AuthUrl = `${baseApiURL}/Auth/GoogleLogin`
const logOutUrl = `${baseApiURL}/Auth/Logout/`
const permissionMap = {
  USER: 1,
  ROLE: 2,
  INSTANCE: 3,
  SYSTEM: 4,
  VIEW: 5
}
export { baseRouter, baseApiURL, AuthUrl, permissionMap, baseUrl, logOutUrl }
