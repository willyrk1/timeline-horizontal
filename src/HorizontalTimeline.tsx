import * as React from 'react';
import './App.css';
import { Event } from './events';
import { getDateNumber } from './utility';

export * from './events';

const topMargin = 25;

interface HorizontalTimelineProps {
  events: Event[]
  startYear: number
  endYear: number
  centerYear: number
  pixelsPerYear: number
}

export default function HorizontalTimeline(props: HorizontalTimelineProps) {
  const { events, startYear, endYear, pixelsPerYear } = props

  const totalWidth = (endYear - startYear) * pixelsPerYear;

  interface DetailState {
    x: number
    y: number
    detail: string
  }
  
  const [detailState, setDetailState] = React.useState<DetailState>()

  const yearLines: Array<number> = []
  const interval = endYear - startYear < 30 ? 1 : 10;
  const startIntervals = Math.ceil(startYear / interval) * interval;
  const endIntervals = Math.ceil(endYear / interval) * interval;
  for (let year = startIntervals; year < endIntervals; year += interval) {
    yearLines.push(year);
  }

  let svgHeight = 0;
  let currentY = 65;
  events.forEach(event => {
    currentY = event.eventType === 'top' ? 65 : currentY + 25
    if (currentY > svgHeight) {
      svgHeight = currentY;
    }
  })
  svgHeight += 30;

  let yIndex = 0;

  return (
    <div className='container'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${totalWidth} ${svgHeight}`}
        onClick={() => {
          setDetailState(undefined);
        }}
      >
        {yearLines.map(year => {
          const x = totalWidth * (year - startYear) / (endYear - startYear);
          const yearLineProps = {
            x,
            textAnchor: 'middle',
            fontFamily: 'serif',
            fontSize: 20,
          }
          return (
            <React.Fragment key={year}>
              <line
                x1={x}
                y1='24'
                x2={x}
                y2={svgHeight - 22}
                stroke='black'
                strokeOpacity='0.3'
                strokeWidth='1'
              />
              <text {...yearLineProps} y='20'>{year}</text>
              <text {...yearLineProps} y={svgHeight - 5}>{year}</text>
            </React.Fragment>
          );
        })}

        {events.map(event => {
          yIndex++;
          const boxHeight = 25;
          function detailProps(detail?: string) {
            return {
              className: detail ? 'detail-link' : undefined,
              onClick: (e: React.MouseEvent) => {
                setDetailState(undefined);
                if (detail) {
                  setDetailState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, detail});
                }
                e.stopPropagation();
              },
            }
          }
          switch (event.eventType) {
            case 'range': {
              const { title, startDate, endDate, detail } = event;
              const boxLeft = totalWidth * (getDateNumber(startDate) - startYear) / (endYear - startYear);
              const right = totalWidth * (getDateNumber(endDate) - startYear) / (endYear - startYear);
              const y = topMargin + yIndex * boxHeight + 10;
              return (
                <g {...detailProps(detail)} key={title}>
                  <line
                    x1={boxLeft}
                    x2={right}
                    y1={y}
                    y2={y}
                    stroke='black'
                    strokeWidth='20'
                  />
                  <text
                    x={boxLeft - 5}
                    y={y + 5}
                    textAnchor='end'
                    fontFamily='serif'
                    fontSize='14'
                  >
                    {title}
                  </text>
                </g>
              );
            }
            case 'point': {
              const { date, title, detail } = event;
              const top = topMargin + yIndex * boxHeight
              const x = totalWidth * (getDateNumber(date) - startYear) / (endYear - startYear);
              const y = top + boxHeight / 2 - 2.5;
              return (
                <g {...detailProps(detail)} key={title}>
                  <polygon
                    points={`${x - 5},${y} ${x},${y + 5} ${x + 5},${y} ${x},${y - 5}`}
                  />
                  <text
                    x={x - 10}
                    y={y + 5}
                    textAnchor='end'
                    fontFamily='serif'
                    fontSize='14'
                  >
                    {title}
                  </text>
                </g>
              )
            }
            case 'top':
              yIndex = 0;
              break;
          }
        })}
      </svg>
      {detailState && (
        <div style={{ left: detailState.x + 20, top: detailState.y + 20 }} className='detail'>
          {detailState.detail}
        </div>
      )}
    </div>
  );
}
