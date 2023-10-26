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
  const { events, startYear, endYear, centerYear, pixelsPerYear } = props

  const totalWidth = (endYear - startYear) * pixelsPerYear;

  interface HoverState {
    x: number
    y: number
    detail: string
  }
  
  const [hoverState, setHoverState] = React.useState<HoverState>()

  const yearLines: Array<number> = []
  const interval = endYear - startYear < 30 ? 1 : 10;
  const startIntervals = Math.ceil(startYear / interval) * interval;
  const endIntervals = Math.ceil(endYear / interval) * interval;
  for (let year = startIntervals; year < endIntervals; year += interval) {
    yearLines.push(year);
  }


  let yIndex = 0;

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const containerHeight = containerRef?.current?.clientHeight || window.innerHeight;

  const [, setForceRefresh] = React.useState<boolean>()
  const handleWindowResize = () => {
    setForceRefresh(x => !x);
  }
  React.useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])

  return (
    <div className='container' ref={containerRef}
     >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={1000}
        width={totalWidth}
        onMouseMove={() => {
          setHoverState(undefined);
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
                y2={containerHeight - 22}
                stroke='black'
                strokeOpacity='0.3'
                strokeWidth='1'
              />
              <text {...yearLineProps} y='20'>{year}</text>
              <text {...yearLineProps} y={containerHeight - 5}>{year}</text>
            </React.Fragment>
          );
        })}


        {events.map(event => {
          yIndex++;
          const boxHeight = 25;
          function hoverProps(detail?: string) {
            return {
              onMouseMove: (e: React.MouseEvent) => {
                setHoverState(undefined);
                if (detail) {
                  setHoverState({x: e.clientX, y: e.clientY, detail});
                }
                e.stopPropagation();
              },
              onMouseLeave: () => {
                setHoverState(undefined);
              }
            }
          }
          switch (event.eventType) {
            case 'range': {
              const { title, startDate, endDate, detail } = event;
              const boxLeft = totalWidth * (getDateNumber(startDate) - startYear) / (endYear - startYear);
              const right = totalWidth * (getDateNumber(endDate) - startYear) / (endYear - startYear);
              const y = topMargin + yIndex * boxHeight + 10;
              return (
                <g {...hoverProps(detail)} key={title}>
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
                <g {...hoverProps(detail)} key={title}>
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
      {hoverState && (
        <div style={{ left: hoverState.x + 20, top: hoverState.y + 20 }}>
          {hoverState.detail}
        </div>
      )}
    </div>
  );
}
