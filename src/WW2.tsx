import React from "react";
import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

export default function WW2() {
  return (
    <HorizontalTimeline
      startYear={1930}
      endYear={1950}
      centerYear={1942.5}
      pixelsPerYear={175}
      events={[
        pointEvent("Nazis win plurality of seats in the Reichstag", [1932, 7, 31]),
        pointEvent("Hitler named German chancellor", [1933, 1, 30]),
        pointEvent("Reichstag Fire", [1933, 2, 27], "...enables Nazi purge of Communists"),
        pointEvent("First concentration camp, Dachau, is opened", [1933, 3, 22]),
        pointEvent("Enabling Act", [1933, 3, 23], "...gives the Nazis full executive power"),
        pointEvent("Law Against the Formation of Parties", [1933, 7, 14], "...outlaws all competition to the Nazi Party"),
        pointEvent("Nazi sterilization law for the disabled", [1933, 7, 14]),
        pointEvent("German-Polish non-aggression pact", [1934, 1, 26]),
        pointEvent("Night of the Long Knives", [1934, 6, 30], "...consolidates Hitler's power"),
        pointEvent("Nuremberg Laws", [1935, 9, 15], "...a set of laws codifying various racist and antisemitic policies"),
        rangeEvent("Second Italo-Ethiopian War", [1935, 10, 3], [1937, 2, 19], "...ends with Italy occupying Ethiopia until 1941"),
        pointEvent("Anglo-Egyptian treaty of 1936", [1936, 8, 26], "...balanced Egyptian desire for independence from Britain with fear that Italy would expand its Ethiopian war into Egypt"),
        spacer(),
        spacer(),
        spacer(),
        spacer(),
        spacer(),
        pointEvent("Germany annexes Austria", [1938, 3, 12]),
        pointEvent("Munich Agreement", [1938, 9, 30], "...gives Germany the Sudetenland."),
        pointEvent("Kristallnacht", [1938, 11, 9], "...pogrom across Germany gains worldwide attention."),
        pointEvent("Hitler speech threatening annihilation of the Jewish race", [1939, 1, 30]),
        pointEvent("Germany invades Czechoslovakia", [1939, 3, 15], "...with little resistance."),
        pointEvent("Italy invades Albania", [1939, 4, 7]),
        spacer(),
        rangeEvent("Spanish Civil War", [1936, 7, 17], [1939, 4, 1]),
        top(),
        rangeEvent("WORLD WAR II", [1939, 9, 1], [1945, 9, 2]),
        pointEvent("Molotov-Ribbentrop Pact", [1939, 8, 23], "...between Germany and the Soviet Union."),
        rangeEvent("Germany invades Poland", [1939, 9, 1], [1939, 10, 6]),
        rangeEvent("Saar Offensive", [1939, 9, 7], [1939, 10, 17], "France attempts an invasion of Germany but soon withdraw."),
        rangeEvent("Soviet Union invades Poland", [1939, 9, 17], [1939, 10, 6]),
        rangeEvent("Winter War", [1939, 11, 30], [1940, 3, 13], "Soviet Union invades Finland"),
        spacer(),
        rangeEvent("Germany invades Norway", [1940, 4, 8], [1940, 6, 10]),
        pointEvent("Germany invades Denmark", [1940, 4, 9]),
        pointEvent("United Kingdom invades Iceland", [1940, 5, 10]),
        rangeEvent("Germany invades Low countries and France", [1940, 5, 10], [1940, 6, 25]),
        pointEvent("Dunkirk evacuation", [1940, 6, 4]),
        pointEvent("Italy declares war on Britain and France", [1940, 6, 10]),
        rangeEvent("Soviet Union invades the Baltic states", [1940, 6, 15], [1940, 8, 6]),
        pointEvent("Soviet Union occupies Bessarabia and North Bukovina", [1940, 6, 28]),
        spacer(),
        rangeEvent("North African campaign", [1940, 6, 10], [1943, 5, 13]),
        rangeEvent("East African campaign against Italy", [1940, 6, 10], [1941, 11, 27], "...liberates the region from Italian occupation."),
        rangeEvent("Western Desert campaign", [1940, 6, 11], [1943, 2, 4]),
        pointEvent("Italy invades Egypt", [1940, 9, 9]),
        spacer(),
        rangeEvent("The Blitz", [1940, 9, 7], [1941, 5, 11]),
        spacer(),
        rangeEvent("Greco-Italian War", [1940, 10, 28], [1941, 4, 23]),
        pointEvent("Yugoslav coup d'état ousts pro-Axis prince", [1941, 3, 27]),
        pointEvent("Axis invades Yugoslavia", [1941, 4, 6]),
        rangeEvent("Germany invades Greece", [1941, 4, 6], [1941, 6, 1]),
        spacer(),
        rangeEvent("Iraq pro-Axis coup d'état", [1941, 4, 1], [1941, 5, 2]),
        rangeEvent("Anglo-Iraqi War", [1941, 5, 2], [1941, 5, 31]),
        rangeEvent("United Kingdom invades Syria and Lebanon", [1941, 6, 8], [1941, 7, 14]),
        pointEvent("United Kingdom and Soviet Union invade Iran", [1941, 8, 25], "Allied invasion of neutral Iran opened supply lines to the SOviet Union."),
        // spacer(),
        top(),
        spacer(),
        rangeEvent("Germany invades the Soviet Union", [1941, 6, 22], [1942, 1, 7]),
        rangeEvent("Continuation War", [1941, 6, 25], [1944, 9, 19], "Finland/Germany vs. Soviet Union in part two of the Winter War"),
        spacer(),
        pointEvent("Japan attacks Pearl Harbor", [1941, 12, 7]),
        pointEvent("Japan invades Thailand", [1941, 12, 8], "After brief fighting, Thailand joins the Axis powers."),
        rangeEvent("Japan invades British Hong Kong", [1941, 12, 8], [1941, 12, 25]),
        rangeEvent("Japan invades Malaya", [1941, 12, 8], [1942, 2, 15], "Japan expels Allied forces from British Malaya."),
        pointEvent("Fall of Singapore", [1942, 2, 15], "Largest surrender in British military history."),
        rangeEvent("Japan invades Dutch East Indies", [1941, 12, 8], [1942, 3, 9]),
        rangeEvent("Japan invades Philippines", [1941, 12, 8], [1942, 5, 8]),
        rangeEvent("Japan invades Burma", [1941, 12, 14], [1942, 5, 28]),
        pointEvent("Battle of Midway", [1942, 6, 4], "Americans defeat Japan in a major Pacific naval battle."),
        spacer(),
        pointEvent("Wannsee Conference", [1942, 1, 20], "Nazi leaders meet to discuss the Final Solution for the murder of all Jews."),
        pointEvent("Japanese-American internment order", [1942, 2, 19]),
        rangeEvent("Battle of Stalingrad", [1942, 8, 23], [1943, 2, 2]),
        top(),
        spacer(),
        spacer(),
        spacer(),
        rangeEvent("Allied Italian campaign", [1943, 7, 9], [1945, 5 , 2]),
        rangeEvent("Allies invade Sicily", [1943, 7, 9], [1943, 8, 17]),
        pointEvent("Italy signs armistice leaving the Axis", [1943, 9, 3]),
        pointEvent("Allies invade mainland Italy", [1943, 9, 3]),
        rangeEvent("Soviet Union invades Romania", [1944, 3, 5], [1944, 9, 24]),
        pointEvent("Romanian pro-Allies coup d'état", [1944, 8, 23]),
        spacer(),
        pointEvent("Germany invades Hungary", [1944, 3, 12], "...as Hungary began negotiations with the allies and considered exiting the war."),
        pointEvent("Allies take Rome", [1944, 6, 4]),
        pointEvent("D-Day - Normandy landings", [1944, 6, 6]),
        pointEvent("July 20 plot against Hitler", [1944, 7, 20], "Failed plot to assassinate Hitler (Valkyrie)"),
        pointEvent("Bulgarian communist coup d'état", [1944, 9, 9]),
        rangeEvent("Soviet Union re-invades the Baltic states", [1944, 9, 14], [1944, 11, 24]),
        pointEvent("Germany evacuates Athens", [1944, 10, 12]),
        rangeEvent("Dekemvriana clashes in Athens", [1944, 12, 3], [1945, 1, 11], "...between communist and royalist forces in post-liberation Greece."),
        pointEvent("Yalta Conference", [1945, 2, 4], "...to discuss post-war reorganization of Europe and Germany."),
        rangeEvent("Battle of Iwo Jima", [1945, 2, 19], [1945, 3, 26]),
        rangeEvent("Japanese coup d'état in French Indochina", [1945, 3, 9], [1945, 5, 15], "Japan expels France and Indochina briefly becomes three independent nations."),
        pointEvent("President Roosevelt dies", [1945, 4, 12]),
        pointEvent("Mussolini executed", [1945, 4, 28], "...with his girlfriend a day after being captured trying escape Italy."),
        pointEvent("Hitler commits suicide", [1945, 4, 30]),
        pointEvent("GERMANY SURRENDERS", [1945, 5, 8]),
        pointEvent("Potsdam Conference", [1945, 7, 17], "...to further discuss post-war policy."),
        pointEvent("Trinity nuclear weapon test", [1945, 7, 16]),
        pointEvent("Hiroshima nuclear bombing", [1945, 8, 6]),
        pointEvent("Nagasaki nuclear bombing", [1945, 8, 9]),
        pointEvent("JAPAN SURRENDERS", [1945, 8, 14]),
        rangeEvent("Soviet-Japanese War", [1945, 8, 7], [1945, 9, 2]),
        top(),
        spacer(),
        rangeEvent("Nuremberg trials", [1945, 11, 20], [1946, 10, 1]),
      ]}
    />
  )
}