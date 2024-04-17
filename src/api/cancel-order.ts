import { api } from '@/lib/axios'

type GetOrdersDetailsRequest = {
  orderId: string
}

export async function cancelOrder({ orderId }: GetOrdersDetailsRequest) {
  await api.patch(`/orders/${orderId}/cancel`)
}
