import axios from 'axios'

let development = process.env.NODE_ENV !== 'production'

export const api = axios.create({
  baseURL: development ? 'http://localhost:3000' : 'https://domain/api'
})
