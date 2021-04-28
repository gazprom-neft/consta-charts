import { StyleSheet } from '@antv/g2/lib/interface'
import { createThemeByStyleSheet } from '@antv/g2/lib/theme/util/create-by-style-sheet'
import { useThemeVars } from '@consta/uikit/useThemeVars'

import { ThemeVars } from '@/__private__/utils/types/ThemeVars'

export const getChartTheme = (vars: ThemeVars) => {
  const styleSheet: StyleSheet = {
    backgroundColor: 'transparent',
    brandColor: vars.color.primary['--color-typo-brand'],
    paletteQualitative10: [
      vars.color.primary['--color-typo-brand'],
      vars.color.primary['--color-typo-alert'],
      vars.color.primary['--color-typo-success'],
      vars.color.primary['--color-typo-warning'],
      vars.color.primary['--color-typo-normal'],
      vars.color.primary['--color-typo-brand'],
      vars.color.primary['--color-typo-alert'],
      vars.color.primary['--color-typo-success'],
      vars.color.primary['--color-typo-warning'],
      vars.color.primary['--color-typo-normal'],
    ],
    paletteQualitative20: [
      vars.color.primary['--color-typo-brand'],
      vars.color.primary['--color-typo-alert'],
      vars.color.primary['--color-typo-success'],
      vars.color.primary['--color-typo-warning'],
      vars.color.primary['--color-typo-normal'],
      vars.color.primary['--color-typo-brand'],
      vars.color.primary['--color-typo-alert'],
      vars.color.primary['--color-typo-success'],
      vars.color.primary['--color-typo-warning'],
      vars.color.primary['--color-typo-normal'],
      vars.color.primary['--color-typo-brand'],
      vars.color.primary['--color-typo-alert'],
      vars.color.primary['--color-typo-success'],
      vars.color.primary['--color-typo-warning'],
      vars.color.primary['--color-typo-normal'],
      vars.color.primary['--color-typo-brand'],
      vars.color.primary['--color-typo-alert'],
      vars.color.primary['--color-typo-success'],
      vars.color.primary['--color-typo-warning'],
      vars.color.primary['--color-typo-normal'],
    ],
    paletteSemanticRed: vars.color.primary['--color-typo-alert'],
    paletteSemanticGreen: vars.color.primary['--color-typo-success'],
    paletteSemanticYellow: vars.color.primary['--color-typo-warning'],
    fontFamily: vars.font['--font-primary'],
    axisLineBorderColor: vars.color.primary['--color-bg-system'],
    axisLineBorder: 1,
    axisLineDash: [],
    axisTitleTextFillColor: '#ff00d0',
    axisTitleTextFontSize: 12,
    axisTitleTextLineHeight: 12,
    axisTitleTextFontWeight: 'normal',
    axisTitleSpacing: 12,
    axisTickLineBorderColor: vars.color.primary['--color-bg-system'],
    axisTickLineLength: 4,
    axisTickLineBorder: 1,
    axisSubTickLineBorderColor: vars.color.primary['--color-bg-system'],
    axisSubTickLineLength: 2,
    axisSubTickLineBorder: 1,
    axisLabelFillColor: vars.color.primary['--color-typo-secondary'],
    axisLabelFontSize: 12,
    axisLabelLineHeight: 12,
    axisLabelFontWeight: 'normal',
    axisLabelOffset: 8,
    axisGridBorderColor: vars.color.primary['--color-bg-system'],
    axisGridBorder: 1,
    axisGridLineDash: [],
    legendTitleTextFillColor: vars.color.primary['--color-typo-secondary'],
    legendTitleTextFontSize: 12,
    legendTitleTextLineHeight: 21,
    legendTitleTextFontWeight: 'normal',
    legendMarkerColor: vars.color.primary['--color-typo-brand'],
    legendMarkerSpacing: 8,
    legendMarkerSize: 4,
    legendCircleMarkerSize: 4,
    legendSquareMarkerSize: 4,
    legendLineMarkerSize: 5,
    legendItemNameFillColor: vars.color.primary['--color-typo-primary'],
    legendItemNameFontSize: 12,
    legendItemNameLineHeight: 12,
    legendItemNameFontWeight: 'normal',
    legendItemSpacing: 24,
    legendItemMarginBottom: 12,
    legendPadding: [8, 8, 8, 8],
    legendHorizontalPadding: [8, 0, 8, 0],
    legendVerticalPadding: [0, 8, 0, 8],
    legendPageNavigatorMarkerSize: 12,
    legendPageNavigatorMarkerInactiveFillColor: vars.color.primary['--color-typo-primary'],
    legendPageNavigatorMarkerInactiveFillOpacity: 0.45,
    legendPageNavigatorMarkerFillColor: vars.color.primary['--color-typo-primary'],
    legendPageNavigatorMarkerFillOpacity: 1,
    legendPageNavigatorTextFillColor: vars.color.primary['--color-typo-secondary'],
    legendPageNavigatorTextFontSize: 12,
    sliderRailFillColor: vars.color.primary['--color-bg-system'],
    sliderRailBorder: 0,
    sliderRailBorderColor: 'transparent',
    sliderRailWidth: 100,
    sliderRailHeight: 12,
    sliderLabelTextFillColor: vars.color.primary['--color-typo-secondary'],
    sliderLabelTextFontSize: 12,
    sliderLabelTextLineHeight: 12,
    sliderLabelTextFontWeight: 'normal',
    sliderHandlerFillColor: vars.color.primary['--color-scroll-bg'],
    sliderHandlerWidth: 10,
    sliderHandlerHeight: 14,
    sliderHandlerBorder: 1,
    sliderHandlerBorderColor: vars.color.primary['--color-bg-system'],
    annotationArcBorderColor: vars.color.primary['--color-bg-system'],
    annotationArcBorder: 1,
    annotationLineBorderColor: vars.color.primary['--color-bg-system'],
    annotationLineBorder: 1,
    annotationLineDash: [],
    annotationTextFillColor: vars.color.primary['--color-typo-primary'],
    annotationTextFontSize: 12,
    annotationTextLineHeight: 12,
    annotationTextFontWeight: 'normal',
    annotationTextBorderColor: 'transparent',
    annotationTextBorder: 0,
    annotationRegionFillColor: vars.color.primary['--color-typo-primary'],
    annotationRegionFillOpacity: 0.06,
    annotationRegionBorder: 0,
    annotationRegionBorderColor: 'transparent',
    annotationDataMarkerLineLength: 16,
    tooltipCrosshairsBorderColor: vars.color.primary['--color-bg-border'],
    tooltipCrosshairsBorder: 1,
    tooltipCrosshairsLineDash: [],
    tooltipContainerFillColor: vars.color.invert['--color-bg-default'],
    tooltipContainerFillOpacity: 1,
    // тень
    tooltipContainerShadow: '0px 0px 10px #aeaeae',
    tooltipContainerBorderRadius: 3,
    tooltipTextFillColor: vars.color.invert['--color-typo-primary'],
    tooltipTextFontSize: 12,
    tooltipTextLineHeight: 12,
    tooltipTextFontWeight: 'bold',
    labelFillColor: vars.color.primary['--color-typo-primary'],
    labelFillColorDark: vars.color.primary['--color-typo-primary'],
    labelFillColorLight: vars.color.primary['--color-typo-primary'],
    labelFontSize: 12,
    labelLineHeight: 12,
    labelFontWeight: 'normal',
    labelBorderColor: 'transparent',
    labelBorder: 0,
    innerLabelFillColor: vars.color.primary['--color-bg-default'],
    innerLabelFontSize: 12,
    innerLabelLineHeight: 12,
    innerLabelFontWeight: 'normal',
    innerLabelBorderColor: 'transparent',
    innerLabelBorder: 0,
    overflowLabelFillColor: '#ff00d0',
    overflowLabelFontSize: 12,
    overflowLabelLineHeight: 12,
    overflowLabelFontWeight: 'normal',
    overflowLabelBorderColor: '#ff00d0',
    overflowLabelBorder: 1,
    labelLineBorder: 1,
    labelLineBorderColor: vars.color.primary['--color-bg-system'],
    pointFillColor: vars.color.primary['--color-typo-brand'],
    pointFillOpacity: 0.95,
    pointSize: 4,
    pointBorder: 1,
    pointBorderColor: '#ff00d0',
    pointBorderOpacity: 1,
    pointActiveBorderColor: vars.color.primary['--color-typo-primary'],
    pointSelectedBorder: 2,
    pointSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    pointInactiveFillOpacity: 0.3,
    pointInactiveBorderOpacity: 0.3,
    hollowPointSize: 4,
    hollowPointBorder: 1,
    hollowPointBorderColor: vars.color.primary['--color-typo-brand'],
    hollowPointBorderOpacity: 0.95,
    hollowPointFillColor: '#ff00d0',
    hollowPointActiveBorder: 1,
    hollowPointActiveBorderColor: vars.color.primary['--color-typo-primary'],
    hollowPointActiveBorderOpacity: 1,
    hollowPointSelectedBorder: 2,
    hollowPointSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    hollowPointSelectedBorderOpacity: 1,
    hollowPointInactiveBorderOpacity: 0.3,
    lineBorder: 2,
    lineBorderColor: vars.color.primary['--color-typo-brand'],
    lineBorderOpacity: 1,
    lineActiveBorder: 3,
    lineSelectedBorder: 3,
    lineInactiveBorderOpacity: 0.3,
    areaFillColor: vars.color.primary['--color-typo-brand'],
    areaFillOpacity: 0.25,
    areaActiveFillColor: vars.color.primary['--color-typo-brand'],
    areaActiveFillOpacity: 0.5,
    areaSelectedFillColor: vars.color.primary['--color-typo-brand'],
    areaSelectedFillOpacity: 0.5,
    areaInactiveFillOpacity: 0.3,
    hollowAreaBorderColor: vars.color.primary['--color-typo-brand'],
    hollowAreaBorder: 2,
    hollowAreaBorderOpacity: 1,
    hollowAreaActiveBorder: 3,
    hollowAreaActiveBorderColor: vars.color.primary['--color-typo-primary'],
    hollowAreaSelectedBorder: 3,
    hollowAreaSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    hollowAreaInactiveBorderOpacity: 0.3,
    intervalFillColor: vars.color.primary['--color-typo-brand'],
    intervalFillOpacity: 0.95,
    intervalActiveBorder: 1,
    intervalActiveBorderColor: vars.color.primary['--color-typo-primary'],
    intervalActiveBorderOpacity: 1,
    intervalSelectedBorder: 2,
    intervalSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    intervalSelectedBorderOpacity: 1,
    intervalInactiveBorderOpacity: 0.3,
    intervalInactiveFillOpacity: 0.3,
    hollowIntervalBorder: 2,
    hollowIntervalBorderColor: vars.color.primary['--color-typo-brand'],
    hollowIntervalBorderOpacity: 1,
    hollowIntervalFillColor: '#ff00d0',
    hollowIntervalActiveBorder: 2,
    hollowIntervalActiveBorderColor: vars.color.primary['--color-typo-primary'],
    hollowIntervalSelectedBorder: 3,
    hollowIntervalSelectedBorderColor: vars.color.primary['--color-typo-primary'],
    hollowIntervalSelectedBorderOpacity: 1,
    hollowIntervalInactiveBorderOpacity: 0.3,
  }

  return createThemeByStyleSheet(styleSheet)
}

export const useChartTheme = () => getChartTheme(useThemeVars())
