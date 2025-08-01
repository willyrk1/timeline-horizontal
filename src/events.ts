export interface EventBase {
  title: string
  detail?: React.ReactNode
  link?: string
}

interface RangeEvent extends EventBase {
  eventType: 'range'
  startDate: number[]
  endDate: number[]
  labelRight: boolean
}

export function rangeEvent(
  title: string, startDate: number[], endDate: number[], detail?: string, link?: string, labelRight = false
) : RangeEvent {
  return { eventType: 'range', title, startDate, endDate, detail, link, labelRight }
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

interface Back {
  eventType: 'back'
}

export function back() : Back {
  return { eventType: 'back' }
}

export type Event = RangeEvent | PointEvent | Spacer | Top | Back
