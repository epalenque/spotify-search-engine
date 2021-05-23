import axios from 'axios'
import { token } from './constants'

export const HTTP = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
  timeout: 1000,
  headers: { Authorization: `Bearer ${token}` }
})