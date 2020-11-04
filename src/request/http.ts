import axios from 'axios'

const http = axios.create({
  baseURL: `${process.env.VUE_APP_API_DOMAIN}/homework`,
  timeout: 60000,
  responseType: 'json',
  withCredentials: true, // 允许带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  }
})

export default http
