import { api } from '@/lib/axios'

export interface RegisterRestaurantRequest {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestaurant({
  email,
  managerName,
  phone,
  restaurantName,
}: RegisterRestaurantRequest) {
  await api.post('/restaurants', { email, managerName, phone, restaurantName })
}
