import React from 'react'

import { array, boolean, number, object, select } from '@storybook/addon-knobs'

import { createMetadata } from '@/__private__/storybook'
import { getLegend } from '@/__private__/utils/legend'

import { data } from '../__mocks__/mock.data'
import { DualAxes, DualAxesProps } from '../DualAxes'

import mdx from './DualAxes.docs.mdx'

const sliderCfg = {
  start: 0,
  end: 1,
  height: 20,
  trendCfg: {
    smooth: true,
    isArea: true,
  },
}

const getKnobs = () => ({
  xField: select('xField', ['value', 'count', 'year', 'age'], 'year'),
  yField: array('yField', ['value', 'count']),
  smooth: boolean('smooth', false),
  geometry: select('geometry', ['line', 'column'], 'line'),
  colors: array('colors', ['#F38B00', '#22C38E']),
  pointSize: number('pointSize', 0),
  isGroup: boolean('isGroup', false),
  isStack: boolean('isStack', false),
  isRange: boolean('isRange', false),
  isPercent: boolean('isPercent', false),
  withSlider: boolean('withSlider', false),
  slider: object('slider', sliderCfg),
  data: object('data', data),
})

export function Playground() {
  const {
    data,
    xField,
    yField,
    smooth,
    geometry,
    pointSize,
    isGroup,
    isPercent,
    isRange,
    isStack,
    colors,
    withSlider,
    slider,
  } = getKnobs()

  const options: DualAxesProps = {
    data: [data, data],
    xField,
    yField,
    legend: getLegend({}),
    geometryOptions: [
      {
        geometry,
        color: colors[0],
        smooth,
        seriesField: 'value',
        connectNulls: true,
        isGroup,
        isPercent,
        isRange,
        isStack,
        point: {
          size: pointSize,
        },
      },
      {
        geometry,
        color: colors[1],
        smooth,
        connectNulls: true,
        seriesField: 'count',
        isGroup,
        isPercent,
        isRange,
        isStack,
        point: {
          size: pointSize,
        },
      },
    ],
    slider: withSlider && slider,
  }

  return (
    <DualAxes
      style={{
        width: 800,
        height: '100%',
      }}
      {...options}
    />
  )
}

export default createMetadata({
  title: 'Компоненты|/DualAxes',
  id: 'components/DualAxes',
  parameters: {
    docs: {
      page: mdx,
    },
  },
})
