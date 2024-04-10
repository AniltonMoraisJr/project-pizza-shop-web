import { BarChart } from 'lucide-react'
import React from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import colors from 'tailwindcss/colors'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// import { Container } from './styles';

const data = [
  {
    product: 'Produto 0',
    amount: 120,
  },
  {
    product: 'Produto 1',
    amount: 80,
  },
  {
    product: 'Produto 2',
    amount: 90,
  },
  {
    product: 'Produto 3',
    amount: 43,
  },
  {
    product: 'Produto 4',
    amount: 230,
  },
  {
    product: 'Produto 5',
    amount: 64,
  },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
  colors.fuchsia[500],
]

export const PopularProductsChart: React.FC = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <CardTitle className="text-base font-medium">
          Produtos populares
        </CardTitle>
        <BarChart className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <PieChart style={{ fontSize: 12 }}>
            <Pie
              dataKey={'amount'}
              nameKey={'product'}
              data={data}
              cx="60%"
              cy="50%"
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)

                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {data[index].product.length > 12
                      ? data[index].product.substring(0, 12).concat('...')
                      : data[index].product}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                )
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
