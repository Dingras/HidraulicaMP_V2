import { GET } from './httpr'
import endpoints from '../../assets/Data/APIendPoints.json'

export async function GetCategories(request = null) {
    const resp = await GET(endpoints.categories, request)
    return resp
}

export async function GetCategoryById(id) {
    const resp = await GET(`${endpoints.category_by_ID}${id}/`)
    return resp
}

export async function GetProductsByCategory(id) {
    const resp = await GET(`${endpoints.products_by_category}${id}/`)
    return resp
}