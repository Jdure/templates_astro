import type { AllProducts } from '../types/allProducts.ts'

const endpoint = import.meta.env.STORE_GRAPHQL_URL
const queryAllProducts = `query Products {
  products {
    edges {
      node {
        id
        ... on SimpleProduct {
          id
          name
          price
        }
        ... on ExternalProduct {
          id
          name
          price
        }
        ... on GroupProduct {
          id
          name
          price
        }
        image {
          sourceUrl
          title
        }
        name
        description
        slug
      }
    }
  }
}`

const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: queryAllProducts }),
}

export const FetchAllProductsQuery = async () => {
    try {
        const response = await fetch(endpoint, options)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data: AllProducts = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
