import request from '@/utils/request'
import { removeToken } from '@/utils/auth'

export function login(data) {
  return request({
    url: '/api/Auth/GoogleLogin',
    method: 'get',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  removeToken()
  return request({
    url: '/api/Auth/Logout/',
    method: 'post'
  })
}
