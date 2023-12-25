import * as React from 'react';
import './App.css';
import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

export default function App() {
  const startYearState = React.useState(1715)
  const endYearState = React.useState(1850)
  return (
    <HorizontalTimeline
      events={[
        pointEvent('HRE Charles VI (Habsburg) dies', [1740, 10, 20], 'Charles VI (Habsburg), Holy Roman Emperor, dies without a male heir leading to the War of Austrian Succession.'),
        rangeEvent('War of the Austrian Succession', [1740, 2, 16], [1748, 10, 18], 'The end of the main Habsburg male line results in Prussia, France, Spain, Bavaria, Sweden, etc. going to war with Austria, Great Britain, Russia, the Dutch Republic, etc. Fronts are in Germany, Italy and the Netherlands.'),
        spacer(),
        rangeEvent('French and Indian War', [1754, 5, 28], [1763, 2, 10], 'Great Britain (Kings George II, George III) and France (King Louis XV) again go to war in North America, both aided by natives, when colonists from both sides clash over territory. The war is subsumed into the Seven Years\' War.'),
        pointEvent('Catherine the Great of Russia overthrows her husband', [1762, 7, 9]),
        rangeEvent('Seven Years\' War', [1756, 5, 17], [1763, 2, 15], 'Territorial conflicts and realignment of alliances reignites war in Europe, North America and India between Prussia, Great Britain, Portugal etc. and Austria, France, Spain, Sweden, Russia, etc.'),
        spacer(),
        pointEvent('Boston Massacre', [1770, 3, 5]),
        pointEvent('Boston Tea Party', [1773, 12, 16]),
        rangeEvent('American Revolutionary War', [1775, 4, 19], [1783, 9, 3], 'British colonists in America revolt against Great Britain for independence. Eventually France, Spain and the Dutch Republic join in attacking Britain around the world.'),
        spacer(),
        pointEvent('Storming of the Bastille', [1789, 7, 14]),
        rangeEvent('French Revolution', [1789, 5, 5], [1799, 11, 9]),
        pointEvent('French King Louis XVI executed', [1793, 1, 21]),
        rangeEvent('French Revolutionary Wars', [1792, 4, 20], [1802, 3, 25]),
        rangeEvent('Reign of Terror', [1793, 9, 5], [1794, 7, 27]),
        pointEvent('Robespierre executed', [1794, 7, 28]),
        rangeEvent('Napoleonic Wars', [1803, 5, 18], [1815, 11, 20]),
        pointEvent('Napoleon crowns himself Emperor', [1804, 12, 2]),
        pointEvent('Dissolution of the Holy Roman Empire', [1806, 8, 6]),
        spacer(),
        rangeEvent('Spanish American wars of independence', [1808, 9, 25], [1833, 9, 29]),
        top(),
        rangeEvent('Revolutions in France, Belgium, Poland, Italy, Portugal and Switzerland', [1830, 7, 26], [1830, 11, 22]),
        pointEvent('Queen Victoria of the United Kingdom inherits', [1837, 6, 20]),
      ]}
      {...{ startYearState, endYearState }}
    />
  )
}
