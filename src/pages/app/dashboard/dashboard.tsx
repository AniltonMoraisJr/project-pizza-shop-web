import React from 'react'
import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './components/cards/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './components/cards/month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './components/cards/month-orders-amount-card'
import { MonthRevenueCard } from './components/cards/month-revenue-card'
import { PopularProductsChart } from './components/charts/popular-products-chart'
import { RevenueChart } from './components/charts/revenue-chart'

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </>
  )
}

export default Dashboard
