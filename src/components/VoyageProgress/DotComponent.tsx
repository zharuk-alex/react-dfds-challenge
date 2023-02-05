/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FC } from "react"
import { colors } from './css'
import { PinComponent } from './PinComponent'
import { DotComponentProps } from './types'

export const DotComponent: FC<DotComponentProps> = ({size=20, filled, text, showIcon})=>{
  const formatedContent = text?.replaceAll(' ','\\a0 ') // prevent content-text line break

  const afterPseudo =  text ?  ` &:after {
    content: "${formatedContent}";
    display: block;
    transform: translate(calc(-50% + ${size/2}px), ${size}px);
    position: absolute;
    width: auto;
    font-weight: 500;
  }` : '';

  return (
    <div css={css`
      ${{
        position: 'relative',
        borderRadius: '50%',
        margin: '10px',
        backgroundColor: `${filled ? colors.main : colors.main_lighten}`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      ${afterPseudo}
    `}>
      { (showIcon) ? <PinComponent size={size}/> : null}
    </div>
  )
}