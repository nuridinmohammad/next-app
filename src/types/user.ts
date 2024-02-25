export interface User {
  id: number
  email: string
  username: string
  password: string // Consider using a more secure type like `SecureString` (implementation details vary depending on your framework/library)
  name: {
    firstName: string
    lastName: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: number
      long: number // Consider using a more descriptive type like `GeoLocation` for clarity
    }
  }
  phone: string
}
