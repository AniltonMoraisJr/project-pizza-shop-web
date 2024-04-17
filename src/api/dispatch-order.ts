import { api } from '@/lib/axios'

type DeliverOrderRequest = {
  orderId: string
}

export async function dispatchOrder({ orderId }: DeliverOrderRequest) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
