/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

export const colors = {
  main: "#345370",
  main_lighten: "#83a2c0",
  grey: '#e5e5e5'
}

export const VoyageProgressWrapperCss = css({
  backgroundColor: colors.grey,
  padding: '20px 40px',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'end'
})

export const VoyageProgressCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  width: 'auto',
})