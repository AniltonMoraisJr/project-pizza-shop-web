import { api } from '@/lib/axios'

export type CancelOrderRequest = {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderRequest) {
  await api.patch(`/orders/${orderId}/cancel`)
}
