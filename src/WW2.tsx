import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

export default function WW2() {
  return (
    <HorizontalTimeline
      startYear={1930}
      endYear={1947}
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
        rangeEvent("France aborted invasion of Germany", [1939, 9, 7], [1939, 10, 17], "France's Saar Offensive attempts an invasion of Germany but soon withdraws."),
        rangeEvent("Soviet Union invades Poland", [1939, 9, 17], [1939, 10, 6]),
        rangeEvent("Soviet invasion of Finland goes poorly", [1939, 11, 30], [1940, 3, 13], `
          The Soviet Union invades Finland starting the Winter War (and causing their expulsion from the League of Nations). They are
          quickly met with disastrous results and heavy losses, and disband
          their puppet government. With the tide turning, Finland agrees to the Moscow Peace Treaty giving away a small percentage of
          territory, but avoiding total occupation.
        `),
        spacer(),
        rangeEvent("Germany invades Norway", [1940, 4, 8], [1940, 6, 10], `
          Germany launches Operation Weserübung, invading Norway and Denmark. While Denmark surrenders within hours, Britain and
          France support Norway in resisting for over two months. Norway remains under German occupation for the remainder of the
          war.
        `),
        pointEvent("Germany invades Denmark", [1940, 4, 9], `
          Germany launches Operation Weserübung, invading Denmark and Norway. While Norway resists for several months, Denmark surrenders
          within hours. German occupation lasts the rest of the war but treatment of the Danes is relatively lenient.
        `),
        pointEvent("United Kingdom invades Iceland", [1940, 5, 10]),
        rangeEvent("Germany invades Low countries and France", [1940, 5, 10], [1940, 6, 25]),
        pointEvent("Dunkirk evacuation", [1940, 6, 4]),
        pointEvent("Italy declares war on Britain and France", [1940, 6, 10]),
        rangeEvent("North African campaign", [1940, 6, 10], [1943, 5, 13], `
          The European allies, and eventually the United States, battle Italy and Germany in northern Africa.
        `, "Africa"),
        rangeEvent("East African campaign against Italy", [1940, 6, 10], [1941, 11, 27], "...liberates the region from Italian occupation.", "Africa"),
        rangeEvent("Western Desert campaign", [1940, 6, 11], [1943, 2, 4], "", "Africa"),
        rangeEvent("Soviet Union invades the Baltic states", [1940, 6, 15], [1940, 8, 6]),
        pointEvent("Soviet Union occupies Bessarabia, etc.", [1940, 6, 28]),
        pointEvent("Italy invades Egypt", [1940, 9, 9]),
        rangeEvent("The Blitz", [1940, 9, 7], [1941, 5, 11]),
        rangeEvent("Greco-Italian War", [1940, 10, 28], [1941, 4, 23]),
        pointEvent("Hungary, Romania, Slovakia join Axis", [1940, 11, 22], `
          Hungary (November 20), Romania (November 23) and Slovakia (November 24) officially join the Axis by signing the Tripartite
          Pact.
        `),
        pointEvent("Bulgaria joins Axis", [1941, 3, 1], `Bulgaria officially join the Axis by signing the Tripartite Pact.`),
        pointEvent("Yugoslavia joining Axis causes coup d'état", [1941, 3, 27], `
          Bulgaria officially joins the Axis by signing the Tripartite Pact, but a coup d'état ousts a prominent pro-Axis prince
          two days later.
        `),
        rangeEvent("Axis invades Yugoslavia", [1941, 4, 6], [1941, 4, 18], `
          A week after a coup d'état pulled Yugoslavia out the Axis (just two days after joining), Axis members Germany, Italy and
          Hungary invade Yugoslavia. In short order, Yugoslavia unconditionally surrenders and is partitioned among the participants
          and the formation of the puppet Independent State of Croatia which soon signs the Tripartite Pact to become an official Axis
          member.
        `),
        rangeEvent("Germany invades Greece", [1941, 4, 6], [1941, 6, 1]),
        spacer(),
        rangeEvent("Iraq pro-Axis coup d'état", [1941, 4, 1], [1941, 5, 2]),
        rangeEvent("Anglo-Iraqi War", [1941, 5, 2], [1941, 5, 31]),
        rangeEvent("United Kingdom invades Syria and Lebanon", [1941, 6, 8], [1941, 7, 14]),
        top(),
        spacer(),
        rangeEvent("Germany invades the Soviet Union", [1941, 6, 22], [1942, 1, 7]),
        rangeEvent("Soviet/Finnish War resumes", [1941, 6, 25], [1944, 9, 19], `
          The Soviet Union conducts air raids in Finland in response to Germany invading the Soviet Union, after which Finland declares
          war (Continuation War). Finland and Germany had joined forces against their common enemy in the run-up to the German invasion.
          Finland, wanting to reverse its territorial losses from the Winter War the previous year, first invades the territory and
          reaches past towards Leningrad. After years of fighting, Finland finally sues for peace and signs the Moscow Armistice, ceding
          more territory to the Soviet Union and promising to break ties with Germany. They are then forced to fight the Lapland War to
          expel Germany from northern Finland.
        `),
        rangeEvent("Siege of Leningrad", [1941, 9, 8], [1944, 1, 27], `
          The Soviet Union successfully defend Leningrad, near the Finnish border, from a Finnish and German siege, one of the most
          destructive and deadly sieges in world history.
        `),
        pointEvent("United Kingdom and Soviet Union invade Iran", [1941, 8, 25], "Allied invasion of neutral Iran opened supply lines to the Soviet Union."),
        spacer(),
        pointEvent("Japan attacks Pearl Harbor", [1941, 12, 7]),
        pointEvent("Japan invades Thailand", [1941, 12, 8], "After brief fighting, Thailand joins the Axis powers."),
        rangeEvent("Japan invades British Hong Kong", [1941, 12, 8], [1941, 12, 25]),
        rangeEvent("Japan invades Malaya", [1941, 12, 8], [1942, 2, 15], "Japan expels Allied forces from British Malaya."),
        rangeEvent("Japan invades Dutch East Indies", [1941, 12, 8], [1942, 3, 9]),
        rangeEvent("Japan invades Philippines", [1941, 12, 8], [1942, 5, 8]),
        rangeEvent("Japan invades Burma", [1941, 12, 14], [1942, 5, 28]),
        spacer(),
        spacer(),
        spacer(),
        pointEvent("Wannsee Conference", [1942, 1, 20], "Nazi leaders meet to discuss the Final Solution for the murder of all Jews."),
        pointEvent("Fall of Singapore", [1942, 2, 15], "Largest surrender in British military history."),
        pointEvent("Japanese-American internment order", [1942, 2, 19]),
        pointEvent("Battle of Midway", [1942, 6, 4], "Americans defeat Japan in a major Pacific naval battle."),
        spacer(),
        rangeEvent("Battle of Stalingrad", [1942, 8, 23], [1943, 2, 2]),
        top(),
        spacer(),
        spacer(),
        spacer(),
        spacer(),
        rangeEvent("Allied Italian campaign", [1943, 7, 9], [1945, 5 , 2]),
        rangeEvent("Allies invade Sicily", [1943, 7, 9], [1943, 8, 17]),
        pointEvent("Italy signs armistice leaving the Axis", [1943, 9, 3]),
        pointEvent("Allies invade mainland Italy", [1943, 9, 3]),
        rangeEvent("Soviet Union invades Romania", [1944, 3, 5], [1944, 9, 24]),
        pointEvent("Germany invades Hungary", [1944, 3, 12], "...as Hungary began negotiations with the allies and considered exiting the war."),
        pointEvent("Allies take Rome", [1944, 6, 4]),
        pointEvent("D-Day - Normandy landings", [1944, 6, 6]),
        pointEvent("July 20 plot against Hitler", [1944, 7, 20], "Failed plot to assassinate Hitler (Valkyrie)"),
        pointEvent("Romanian pro-Allies coup d'état", [1944, 8, 23]),
        pointEvent("Bulgarian communist coup d'état", [1944, 9, 9]),
        rangeEvent("Soviet Union re-invades the Baltic states", [1944, 9, 14], [1944, 11, 24]),
        rangeEvent("Finland expels Germany from Lapland", [1944, 9, 15], [1945, 4, 27], `
          Finland turns on its partners, Germany, after signing an armistice with the Soviet Union ending the Continuation War earlier in
          the week. Part of the armistice requires Finland to break all ties with Germany so they are forced to take military action to
          expel the remaining Germans from Lapland in the far north.
        `),
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
