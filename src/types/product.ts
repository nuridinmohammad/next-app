 export interface Product {
  id?: number
  title?: string
  price?: number
  description?: string
  category?: string
  image?: string
  rating?: Rating // Referencing a separate interface for the rating object
}

interface Rating {
  rate: number
  count: number
}
