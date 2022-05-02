import axios from 'axios'

let development = process.env.NODE_ENV !== 'production'

export const api = axios.create({
  baseURL: development
    ? process.env.BASE_URL_DEVELOPMENT
    : process.env.BASE_URL_PRODUCTION
})
