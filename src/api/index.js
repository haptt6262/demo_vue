import { createApi } from '../ultils/helpers/index';
import ApiScheme from './schema'


export const itemApi = {
    getItem: createApi(ApiScheme.ITEMS.GET),
    addItem: createApi(ApiScheme.ITEMS.ADD),
    updateItem: createApi(ApiScheme.ITEMS.UPDATE),
    deleteItem: createApi(ApiScheme.ITEMS.DELETE),
    searchItem: createApi(ApiScheme.ITEMS.SEARCH)
}
