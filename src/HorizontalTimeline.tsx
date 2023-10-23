import * as React from 'react';
import './App.css';
import { Event } from './events';
import { getDateNumber } from './utility';

export * from './events';

const topMargin = 50;

export interface HorizontalTimelineProps {
  events: Event[]
  startYear: number
  endYear: number
  onForwardButton?: () => void
  onBackButton?: () => void
}

interface HoverCheck {
  top: number
  bottom: number
  left: number
  right: number
  detail: string
}

interface HoverState {
  x: number
  y: number
  detail: string
}

export default function HorizontalTimeline(props: HorizontalTimelineProps) {
  const { events, startYear, endYear, onForwardButton = () => {}, onBackButton = () => {} } = props

  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  const [hoverState, setHoverState] = React.useState<HoverState>()

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;

        /////////////////////
        // Draw year lines //
        /////////////////////
        const interval = endYear - startYear < 30 ? 1 : 10;
        const startIntervals = Math.ceil(startYear / interval) * interval;
        const endIntervals = Math.ceil(endYear / interval) * interval;
        for (let year = startIntervals; year < endIntervals; year += interval) {
          const x = canvas.width * (year - startYear) / (endYear - startYear);
      
          ctx.font = "20px serif";
          const textMetrics = ctx.measureText(year.toString());
      
          ctx.save();
          ctx.beginPath();
          ctx.globalAlpha = 0.3;
          ctx.moveTo(x, 10 + textMetrics.actualBoundingBoxAscent);
          ctx.lineTo(x, canvas.height - 10 - textMetrics.actualBoundingBoxAscent);
          ctx.stroke();
          ctx.restore();
      
          ctx.fillText(year.toString(), x - textMetrics.width / 2, 5 + textMetrics.actualBoundingBoxAscent);
          ctx.fillText(year.toString(), x - textMetrics.width / 2, canvas.height - 5);
        }

        //////////////////////////
        // Forward/back buttons //
        //////////////////////////
        const backButton = new Path2D();
        backButton.arc(20, canvas.height / 2, 10, 0, 2 * Math.PI);
        ctx.stroke(backButton);

        const forwardButton = new Path2D();
        forwardButton.arc(canvas.width - 20, canvas.height / 2, 10, 0, 2 * Math.PI);
        ctx.stroke(forwardButton);

        const handleCanvasClick = ({ x, y }: MouseEvent) => {
          if (ctx.isPointInPath(backButton, x, y)) {
            onBackButton();
          }
          else if (ctx.isPointInPath(forwardButton, x, y)) {
            onForwardButton();
          }
        }

        canvas.addEventListener('click', handleCanvasClick);

        ///////////////////////
        // Historical Events //
        ///////////////////////
        const hoverChecks: Array<HoverCheck> = []
        let yIndex = 0;
        events.forEach((event) => {
          switch (event.eventType) {
            case 'range': {
              const { title, startDate, endDate, detail } = event;
            
              ctx.font = "14px serif";
              const textMetrics = ctx.measureText(title);
            
              const boxLeft = canvas.width * (getDateNumber(startDate) - startYear) / (endYear - startYear);
              const right = canvas.width * (getDateNumber(endDate) - startYear) / (endYear - startYear);
            
              const boxHeight = textMetrics.actualBoundingBoxAscent + 10;

              const top = topMargin + yIndex * (boxHeight + 5);
              const left = boxLeft - 5 - textMetrics.width;
            
              ctx.fillRect(boxLeft, top, right - boxLeft, boxHeight);
              ctx.fillText(title, left, top + 5 + textMetrics.actualBoundingBoxAscent);

              if (detail) {
                hoverChecks.push({ top, bottom: top + boxHeight, left, right, detail });
              }
              break;
            }
            case 'point': {
              const { date, title, detail } = event;
            
              ctx.font = "14px serif";
              const textMetrics = ctx.measureText(title);
            
              const boxHeight = textMetrics.actualBoundingBoxAscent + 10;
            
              const top = topMargin + yIndex * (boxHeight + 5)

              const x = canvas.width * (getDateNumber(date) - startYear) / (endYear - startYear);
              const y = top + boxHeight / 2;

              const left = x - 10 - textMetrics.width;
            
              ctx.beginPath();
              ctx.moveTo(x - 5, y);
              ctx.lineTo(x, y + 5);
              ctx.lineTo(x + 5, y);
              ctx.lineTo(x, y - 5);
              ctx.fill();
            
              ctx.fillText(title, left, top + 5 + textMetrics.actualBoundingBoxAscent);

              if (detail) {
                hoverChecks.push({ top, bottom: top + boxHeight, left, right: x + 5, detail });
              }
              break;
            }
          }
          if (event.eventType === 'top') {
            yIndex = 0;
          }
          else {
            yIndex++;
          }
        });

        ////////////////////
        // Hover handling //
        ////////////////////
        const handleCanvasHover = ({ x, y }: MouseEvent) => {
          setHoverState(undefined);
          hoverChecks.forEach(({ top, bottom, left, right, detail }) => {
            if (x >= left && x <= right && y >= top && y <= bottom) {
              setHoverState({ x, y, detail });
            }
          })
        }

        window.addEventListener('mousemove', handleCanvasHover)

        return () => {
          canvas.removeEventListener('click', handleCanvasClick);
          window.removeEventListener('mousemove', handleCanvasHover);
        }
      }
    }
  }, [startYear, endYear])

  return (
    <div className='canvas-container'>
      <canvas ref={canvasRef} />
      {hoverState && (
        <div style={{ left: hoverState.x + 20, top: hoverState.y + 20 }}>
          {hoverState.detail}
        </div>
      )}
    </div>
  );
}
