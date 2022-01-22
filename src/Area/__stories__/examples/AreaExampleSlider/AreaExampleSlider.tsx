import React from 'react'

import { Area } from '@/Area'
import { colorMapLine, data } from '@/Area/__mocks__/mock.data'

export function AreaExampleSlider() {
  return (
    <Area
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      xField="date"
      yField="value"
      seriesField="country"
      color={Object.keys(colorMapLine).map(key => colorMapLine[key])}
      slider={{
        start: 0,
        end: 0.5,
      }}
    />
  )
}
