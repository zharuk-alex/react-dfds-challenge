import { ReactNode } from "react"

export interface VoyageInterface {
  portOfLoading: string
  portOfDischarge: string
  departureTime: string | Date
  arrivalTime: string | Date
  currentTime?: string | Date
}

export type DotComponentProps = {
  filled: boolean 
  children: ReactNode
  size?: number
  text?: string
  showIcon?: boolean
}