export interface EventBase {
  title: string
  detail?: React.ReactNode
  link?: string
}

interface RangeEvent extends EventBase {
  eventType: 'range'
  startDate: number[]
  endDate: number[]
}

export function rangeEvent(
  title: string, startDate: number[], endDate: number[], detail?: string, link?: string
) : RangeEvent {
  return { eventType: 'range', title, startDate, endDate, detail, link }
}

interface PointEvent extends EventBase {
  eventType: 'point'
  date: number[]
}

export function pointEvent(
  title: string, date: number[], detail?: React.ReactNode, link?: string) : PointEvent {
  return { eventType: 'point', title, date, detail, link }
}

interface Spacer {
  eventType: 'spacer'
}

export function spacer() : Spacer {
  return { eventType: 'spacer' }
}

export function spacers(count: number) : Spacer[] {
  return new Array(count).fill({ eventType: 'spacer' })
}

interface Top {
  eventType: 'top'
}

export function top() : Top {
  return { eventType: 'top' }
}

export type Event = RangeEvent | PointEvent | Spacer | Top
