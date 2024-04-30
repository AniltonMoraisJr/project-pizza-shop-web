import { api } from '@/lib/axios'

export type DispatchOrderRequest = {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderRequest) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
