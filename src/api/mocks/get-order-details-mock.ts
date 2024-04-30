import { http, HttpResponse } from 'msw'

import {
  GetOrdersDetailsRequest,
  GetOrdersDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrdersDetailsRequest,
  never,
  GetOrdersDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@mail.com',
      phone: '152465456',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: 1000,
        product: { name: 'Pizza Pepperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: 2000,
        product: { name: 'Pizza Calabresa' },
        quantity: 1,
      },
    ],
    totalInCents: 3000,
  })
})
