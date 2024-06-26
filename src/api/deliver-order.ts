import { api } from '@/lib/axios'

export type DeliverOrderRequest = {
  orderId: string
}

export async function deliverOrder({ orderId }: DeliverOrderRequest) {
  await api.patch(`/orders/${orderId}/deliver`)
}
