import * as React from 'react';
import './App.css';
import { Event, EventBase } from './events';
import { getDateNumber } from './utility';
import { Link } from 'react-router-dom';

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

  interface DetailState {
    x: number
    y: number
    event: EventBase
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

  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const svgRef = React.useRef<SVGSVGElement | null>(null);
  React.useEffect(() => {
    if (containerRef.current && svgRef.current) {
      const centerX = svgRef.current.clientWidth * (centerYear - startYear) / (endYear - startYear)
      containerRef.current.scrollLeft = centerX - window.innerWidth / 2;
    }
  }, [])

  return (
    <div className='container' ref={containerRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${totalWidth} ${svgHeight}`}
        onClick={() => {
          setDetailState(undefined);
        }}
        ref={svgRef}
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
          function detailProps(event: EventBase) {
            return {
              className: event.detail ? 'detail-link' : undefined,
              onClick: (e: React.MouseEvent) => {
                setDetailState(undefined);
                if (event.detail) {
                  setDetailState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, event});
                }
                e.stopPropagation();
              },
            }
          }
          switch (event.eventType) {
            case 'range': {
              const { title, startDate, endDate, labelRight } = event;
              const boxLeft = totalWidth * (getDateNumber(startDate) - startYear) / (endYear - startYear);
              const boxRight = totalWidth * (getDateNumber(endDate) - startYear) / (endYear - startYear);
              const y = topMargin + yIndex * boxHeight + 10;
              return (
                <g {...detailProps(event)} key={title}>
                  <line
                    x1={boxLeft}
                    x2={boxRight}
                    y1={y}
                    y2={y}
                    stroke='black'
                    strokeWidth='20'
                  />
                  <text
                    x={labelRight ? boxRight + 5 : boxLeft - 5}
                    y={y + 5}
                    textAnchor={labelRight ? 'start' : 'end'}
                    fontFamily='serif'
                    fontSize='14'
                  >
                    {title}
                  </text>
                </g>
              );
            }
            case 'point': {
              const { date, title } = event;
              const top = topMargin + yIndex * boxHeight
              const x = totalWidth * (getDateNumber(date) - startYear) / (endYear - startYear);
              const y = top + boxHeight / 2 - 2.5;
              return (
                <g {...detailProps(event)} key={title}>
                  <polygon
                    points={`${x},${y} ${x + 5},${y + 5} ${x + 10},${y} ${x + 5},${y - 5}`}
                  />
                  <text
                    x={x - 5}
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
            case 'back':
              yIndex -= 2;
              break;
          }
        })}
      </svg>
      {detailState && (
        <div style={{ left: detailState.x + 20, top: detailState.y + 20 }} className='detail'>
          <h1>{detailState.event.title}</h1>
          <hr />
          {detailState.event.detail}
          {detailState.event.link && (
            <Link
              to={detailState.event.link}
              relative='path'
              className='detail-timeline-link'
            >
              timeline
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
