import * as React from 'react';
import './App.css';
import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

export default function AustrianToNow() {
  const startYearState = React.useState(1710)
  const endYearState = React.useState(2025)
  return (
    <HorizontalTimeline
      startYear={1710}
      endYear={2025}
      centerYear={1800}
      pixelsPerYear={6}
      events={[
        rangeEvent('War of the Austrian Succession', [1740, 2, 16], [1748, 10, 18], 'The end of the main Habsburg male line results in Prussia, France, Spain, Bavaria, Sweden, etc. going to war with Austria, Great Britain, Russia, the Dutch Republic, etc. Fronts are in Germany, Italy and the Netherlands.'),
        rangeEvent('French and Indian War', [1754, 5, 28], [1763, 2, 10], 'Great Britain (Kings George II, George III) and France (King Louis XV) again go to war in North America, both aided by natives, when colonists from both sides clash over territory. The war is subsumed into the Seven Years\' War.'),
        rangeEvent('Seven Years\' War', [1756, 5, 17], [1763, 2, 15], 'Territorial conflicts and realignment of alliances reignites war in Europe, North America and India between Prussia, Great Britain, Portugal etc. and Austria, France, Spain, Sweden, Russia, etc.'),
        rangeEvent('American Revolutionary War', [1775, 4, 19], [1783, 9, 3], 'British colonists in America revolt against Great Britain for independence. Eventually France, Spain and the Dutch Republic join in attacking Britain around the world.'),
        rangeEvent('French Revolution', [1789, 5, 5], [1799, 11, 9]),
        rangeEvent('French Revolutionary Wars', [1792, 4, 20], [1802, 3, 25]),
        rangeEvent('Napoleonic Wars', [1803, 5, 18], [1815, 11, 20]),
        pointEvent('Dissolution of the Holy Roman Empire', [1806, 8, 6]),
        rangeEvent('Spanish American wars of independence', [1808, 9, 25], [1833, 9, 29]),
        rangeEvent('Revolutions of 1848', [1848, 1, 12], [1849, 10, 4]),
        rangeEvent('Crimean War', [1853, 10, 16], [1856, 3, 30]),
        rangeEvent('American Civil War', [1861, 4, 12], [1865, 5, 26]),
        rangeEvent('Unification of Germany', [1866, 8, 18], [1871, 1, 18]),
        rangeEvent('Franco-Prussian War', [1870, 7, 19], [1871, 1, 28]),
        top(),
        rangeEvent('Russo-Japanese War', [1904, 2, 8], [1905, 9, 5]),
        rangeEvent('Russian Revolution of 1905', [1905, 1, 22], [1907, 6, 16]),
        spacer(),
        rangeEvent('WORLD WAR I', [1914, 7, 28], [1918, 11, 11]),
        spacer(),
        rangeEvent('Russian Revolution', [1917, 3, 8], [1923, 6, 16]),
        pointEvent('October Bolshevik Revolution', [1917, 11, 7]),
        rangeEvent('Russian Civil War', [1917, 11, 7], [1923, 6, 16]),
        spacer(),
        rangeEvent('Spanish Civil War', [1936, 7, 17], [1939, 4, 1]),
        spacer(),
        rangeEvent('WORLD WAR II', [1939, 9, 1], [1945, 9, 2], `
          Nazi Germany, Fascist Italy and the Empire of Japan battle the Soviet Union, United
          Kingdom and Unites States for control of Europe, Asia and Africa.
        `, "WW2"),
        pointEvent('Trinity nuclear weapon test', [1945, 7, 16]),
        spacer(),
        rangeEvent('Chinese Civil War (second phase)', [1945, 8, 10], [1949, 12, 7]),
        pointEvent('India independence', [1947, 8, 15]),
        pointEvent('Israel independence', [1948, 5, 14]),
        rangeEvent('Korean War', [1950, 6, 25], [1953, 7, 27]),
        rangeEvent('Cuban Revolution', [1953, 7, 26], [1959, 1, 1]),
        rangeEvent('Vietnam War', [1955, 11, 1], [1975, 4, 30]),
        pointEvent('Cuban Missile Crisis', [1962, 10, 28]),
        rangeEvent('Soviet-Afghan War', [1979, 12, 24], [1989, 2, 15]),
        rangeEvent('Iran-Iraq War', [1980, 9, 22], [1988, 8, 20]),
        pointEvent('Soviet Union dissolved', [1991, 12, 26]),
        rangeEvent('Yugoslav Wars', [1991, 3, 31], [2001, 11, 12]),
        rangeEvent('Iraq War', [2003, 3, 20], [2011, 12, 15]),
        rangeEvent('Russo-Ukrainian War', [2014, 2, 20], [2023, 9, 26]),
      ]}
    />
  )
}
