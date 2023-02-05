/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { FC } from "react"
import { Codeship } from '@emotion-icons/simple-icons';
import { colors } from './css'

export const PinComponent: FC<{size: number}> = ({size})=><div css={css`
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: ${colors.main};
  border-radius: 20px 20px 20px 1px;
  transform: translate(calc(-50% + ${size/2}px), calc(-100% - 30px)) rotate(-45deg);
`}>
  <Codeship css={css`
    color: #fff;
    transform: rotate(45deg);
    padding: 10px;
  `}></Codeship>
</div>