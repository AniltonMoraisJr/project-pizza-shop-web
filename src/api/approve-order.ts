import { api } from '@/lib/axios'

export type ApproveOrderRequest = {
  orderId: string
}

export async function approveOrder({ orderId }: ApproveOrderRequest) {
  await api.patch(`/orders/${orderId}/approve`)
}
