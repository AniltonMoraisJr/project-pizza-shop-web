import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 100,
    },
    { date: '01/02/2024', receipt: 200 },
    { date: '01/03/2024', receipt: 150 },
    { date: '01/04/2024', receipt: 350 },
  ])
})
