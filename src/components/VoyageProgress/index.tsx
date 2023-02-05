/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { FC } from "react";

import { VoyageInterface } from './types';
import { DotComponent } from './DotComponent';
import { timeDiffMls } from '../../helpers';

import {VoyageProgressWrapperCss, VoyageProgressCss}  from './css'


const VoyageProgress: FC<VoyageInterface> = ({
  portOfLoading,
  portOfDischarge,
  departureTime,
  arrivalTime,
  currentTime = new Date()
  })=>{
    const dots = [...Array(14)];
    
    const totalTripTime = timeDiffMls(arrivalTime, departureTime); 
    const mlsCurrDiff = timeDiffMls(currentTime, departureTime);
    const progressPerc = mlsCurrDiff / totalTripTime * 100; 

    const progressIndex = Math.floor((dots.length-1) / 100 * progressPerc)    
    const isWaitingForVoyage = (index: number): boolean => index===0 && progressIndex < 0    

    return (
      <div css={VoyageProgressWrapperCss}>
        <div css={VoyageProgressCss}>
          {dots.map((item,index)=>{
            const text = index === 0 ? portOfLoading : index === dots.length-1 ? portOfDischarge : undefined;
            const size = index === 0 || index === dots.length-1 ? 40 : undefined;

            return (
              <div css={css`${{position: 'relative'}}`} key={index}>
                <DotComponent 
                  filled={index <= progressIndex || isWaitingForVoyage(index)} 
                  key={index} 
                  showIcon={index === progressIndex || isWaitingForVoyage(index)}
                  size={size} 
                  text={text}
                >
                </DotComponent>
              </div>
              )
          })}
        </div>
      </div>
    )
  }
    
export { VoyageProgress }