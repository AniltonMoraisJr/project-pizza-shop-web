import { Utensils } from 'lucide-react'
import React from 'react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// import { Container } from './styles';

export const DayOrdersAmountCard: React.FC = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">246</span>
        <span className="text-xs text-muted-foreground">
          <span className="text-rose-500 dark:text-rose-400">-4%</span>
          em relação a ontem
        </span>
      </CardContent>
    </Card>
  )
}
