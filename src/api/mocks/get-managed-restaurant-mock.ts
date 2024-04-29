import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    managerId: 'custom-manager-id',
    name: 'John Doe',
    description: 'lorem ipsum dolor sit amet, consectetur adip',
    createdAt: new Date(),
    updatedAt: null,
  })
})
