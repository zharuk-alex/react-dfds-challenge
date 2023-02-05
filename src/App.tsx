import './App.css';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { VoyageProgress } from './components/VoyageProgress';
import { VoyageInterface } from './components/VoyageProgress/types';
import { Fragment } from 'react';



function App() {
  
  const Cases: VoyageInterface[] = [
    {
      portOfLoading: 'Karlshamn',
      portOfDischarge: 'Klaipeda',
      departureTime: new Date("02/02/2023 8:30Z"),
      arrivalTime: new Date("02/02/2023 16:00Z"),
      currentTime: new Date("02/02/2023 12:40Z"),
    },
    {
      portOfLoading: 'Lorem Ipsum',
      portOfDischarge: 'Dolor Sit Amet',
      departureTime: "02/02/2023 8:30",
      arrivalTime: "02/02/2023 16:00",
      currentTime: "02/02/2023 12:40",
    },
    {
      portOfLoading: 'Karlshamn',
      portOfDischarge: 'Klaipeda',
      departureTime: "2023-02-03T10:10:00.000Z",
      arrivalTime: "2023-02-03T16:20:00.000Z",
      currentTime: "2023-02-03T13:50:21.000Z"
    },
    {
      portOfLoading: 'Karlshamn',
      portOfDischarge: 'Klaipeda',
      departureTime: "2023-02-02T08:00:00",
      arrivalTime: "2023-02-03T16:00:00",
      currentTime: "2023-02-03T16:00:21"
    },
    {
      portOfLoading: 'Karlshamn',
      portOfDischarge: 'Klaipeda',
      departureTime: "2023-02-02T08:00:00.817Z",
      arrivalTime: "2023-02-02T16:00:00.817Z",
      currentTime: "2023-02-02T07:00:00.817Z",
    }
  ]
  
  return (
    <div className="App">
      {
        Cases.map((item:VoyageInterface, index)=>{ 
          return (
            <Fragment key={index}>
              <div css={css`
                display: flex;
              `}>
                <VoyageProgress {...item}/>
                <pre css={css`
                  text-align: start;
                  padding: 20px;
                `}>{JSON.stringify(item, null, 2)}</pre>
              </div>
              <hr />
            </Fragment>
            )
        })
      }
    </div>
  );
}

export default App;
