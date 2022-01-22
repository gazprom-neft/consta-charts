import React from 'react'

import { useThemeVars } from '@consta/uikit/useThemeVars'

import { Column } from '@/Column'
import { data } from '@/Column/__mocks__/mock.data'

export function ColumnExampleGroup() {
  const vars = useThemeVars()

  return (
    <Column
      style={{ marginBottom: 'var(--space-m)' }}
      data={data}
      color={[
        vars.color.primary['--color-bg-normal'],
        vars.color.primary['--color-bg-warning'],
        vars.color.primary['--color-bg-success'],
      ]}
      xField="month"
      yField="value"
      seriesField="name"
      isGroup
      label={{
        position: 'middle',
        layout: [
          { type: 'interval-adjust-position' },
          { type: 'interval-hide-overlap' },
          { type: 'adjust-color' },
        ],
      }}
    />
  )
}
