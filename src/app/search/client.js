import { HTTP } from 'services/http/Http'
import { searchSerializer } from './serializers'

function search(query) {
  return HTTP.get(`search?q=${query}&type=track%2Cartist%2Calbum&market=US`)
  .then(results => searchSerializer(results.data))
}

export const SearchClient = {
  search,
}
