import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

// import { Container } from './styles';

const MetricCardSkeleton: React.FC = () => {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="w-53 h-4" />
    </>
  )
}

export default MetricCardSkeleton
