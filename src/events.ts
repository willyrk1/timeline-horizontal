interface RangeEvent {
  eventType: 'range'
  title: string
  startDate: number[]
  endDate: number[]
  detail?: string
}

export function rangeEvent(title: string, startDate: number[], endDate: number[], detail?: string) : RangeEvent {
  return { eventType: 'range', title, startDate, endDate, detail }
}

interface PointEvent {
  eventType: 'point'
  title: string
  date: number[]
  detail?: string
}

export function pointEvent(title: string, date: number[], detail?: string) : PointEvent {
  return { eventType: 'point', title, date, detail }
}

interface Spacer {
  eventType: 'spacer'
}

export function spacer() : Spacer {
  return { eventType: 'spacer' }
}

interface Top {
  eventType: 'top'
}

export function top() : Top {
  return { eventType: 'top' }
}

export type Event = RangeEvent | PointEvent | Spacer | Top
