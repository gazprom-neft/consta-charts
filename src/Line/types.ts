import { LineOptions as G2plotLineProps, ShapeStyle } from '@antv/g2plot'

import { ContainerProps, Tooltip } from '@/__private__/hooks/useChart'
import { ChartRefOptions } from '@/__private__/utils/types/ChartRefOptions'

type ExcludeProps =
  | 'tooltip'
  | 'children'
  | 'theme'
  | 'data'
  | 'lineStyle'
  | 'xField'
  | 'yField'
  | 'seriesField'

export type LineProps<Item> = Omit<G2plotLineProps, ExcludeProps> & {
  tooltip?: Tooltip
  theme?: never
  children?: never
  data: Item[]
  lineStyle?: ShapeStyle | ((item: Item) => ShapeStyle)
  xField: keyof Item
  yField: keyof Item
  seriesField?: keyof Item
} & ContainerProps &
  React.RefAttributes<HTMLDivElement> & { chartRef?: ChartRefOptions }

export type Line = <Item>(props: LineProps<Item>) => React.ReactElement | null
