import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

export default function WW2Africa() {
  return (
    <HorizontalTimeline
      startYear={1930}
      endYear={1947}
      centerYear={1942.5}
      pixelsPerYear={115}
      events={[
        rangeEvent("Second Italo-Ethiopian War", [1935, 10, 3], [1937, 2, 19], "...ends with Italy occupying Ethiopia until 1941"),
        pointEvent("Anglo-Egyptian treaty of 1936", [1936, 8, 26], "...balanced Egyptian desire for independence from Britain with fear that Italy would expand its Ethiopian war into Egypt"),
        top(),
        rangeEvent("WORLD WAR II", [1939, 9, 1], [1945, 9, 2]),
        rangeEvent("Germany invades the Soviet Union", [1941, 6, 22], [1942, 1, 7]),
        pointEvent("Italy declares war on Britain and France", [1940, 6, 10]),
        pointEvent("Britain invades Italian Libya", [1940, 6, 14], `
          Four days after war with Italy is declared, Britain crosses from Egypt into the Italian colony of Libya capturing a
          fort near the border which is used for border raids for several months.
        `),
        pointEvent("Italy invades Egypt", [1940, 9, 9], `
          Italy launches a large invasion from Italian Libya into Egypt near the coast. In a week, it succeeds in occupying nearly 50
          miles of Egyptian coastline to Sidi Barrani.
        `),
        rangeEvent("British recover western Egypt", [1940, 12, 9], [1941, 2, 9], `
          Britain's Operation Compass pushes Italy back out of western Egypt and occupies hundreds of miles of Libyan coastline, destroying
          Italy's 10th army.
        `),
        // pointEvent("Britain and India defeat Italy at Nibeiwa", [1940, 12, 9]),
        rangeEvent("Germany and Italy recover most of Libya", [1941, 2, 12], [1941, 5, 3], `
          Germany's Operation Sonnenblume, headed by Rommel, pushes the Allies back from Libya into Egypt except for a mostly-Australian
          division besieged in Tobruk until late November. The operation is in response to Britain destroying Italy's 10th army but
          then redirecting its resources to defend Greece.
        `),
        rangeEvent("Australia besieged in Libya", [1941, 4, 10], [1941, 11, 27], `
          A mostly-Australian division of troops are trapped in the Libyan port of Tobruk, 100 miles from Allied forces pushed back into
          Egypt.
        `),
        pointEvent("Britain fails to re-enter Libya", [1941, 5, 16], `
          Britain launches Operation Brevity in an attempt to re-establish a foothold on the Egypt/Libya border but the offensive
          quickly stalls and is abandoned after just a day. The Halfaya Pass is captured in Egypt but Germany re-captures it a couple
          weeks later.
        `),
        pointEvent("Germany re-captures an Egyptian pass", [1941, 5, 27], `
          Germany's Operation Skorpion re-captures the Halfaya Pass in Egypt which Britain had captured weeks earlier.
        `),
        pointEvent("Britain fails to raise siege in Libya", [1941, 6, 17], `
          Britain launches Operation Battleaxe with the hope of rescuing beseiged Australians in Tobruk, Libya. After three days of mixed
          results, the operation is ended with Tobruk still under siege leading to the British commander being replaced.
        `),
        rangeEvent("Allies reclaim most of eastern Libya", [1941, 11, 18], [1941, 12, 30], `
          The Allies' Operation Crusader pushes Germany and Italy back towards El Aghelia, relieving the Siege of Tobruk and taking control
          of most of northeastern Libya, ending any Axis threat against Egypt and the Suez Canal.
        `),
        pointEvent("Japan attacks Pearl Harbor", [1941, 12, 7]),
        pointEvent("Germany withdraws from Libya", [1943, 2, 4], `German troops, including Rommel, withdraw from Libya into Tunisia`),
        rangeEvent("Allied Italian campaign", [1943, 7, 9], [1945, 5 , 2]),
        rangeEvent("Allies invade Sicily", [1943, 7, 9], [1943, 8, 17]),
        pointEvent("Italy signs armistice leaving the Axis", [1943, 9, 3]),
        pointEvent("D-Day - Normandy landings", [1944, 6, 6]),
        pointEvent("President Roosevelt dies", [1945, 4, 12]),
        pointEvent("Mussolini executed", [1945, 4, 28], "...with his girlfriend a day after being captured trying escape Italy."),
        pointEvent("Hitler commits suicide", [1945, 4, 30]),
        pointEvent("GERMANY SURRENDERS", [1945, 5, 8]),
        pointEvent("JAPAN SURRENDERS", [1945, 8, 14]),
      ]}
    />
  )
}
