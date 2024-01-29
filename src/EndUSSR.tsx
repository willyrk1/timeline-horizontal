import "./App.css";
import HorizontalTimeline, { pointEvent, rangeEvent, spacer, spacers, top } from "./HorizontalTimeline";

export default function EndUSSR() {
  return (
    <HorizontalTimeline
      startYear={1984}
      endYear={1993}
      centerYear={1990}
      pixelsPerYear={400}
      events={[
        pointEvent("Gorbachev named General Secretary", [1985, 3, 11]),
        top(),
        pointEvent("Chernobyl disaster", [1986, 4, 26]),
        top(),
        pointEvent("Jeltoqsan (Kazakhstan)", [1986, 12, 17], `
          Protests and riots erupt in the Kazakh SSR after Gorbachev replaces an ethnic
          Kazakh with an ethnic Russian as the First Secretary of the Communist Party.
        `),
        top(),
        pointEvent("Brașov rebellion (Romania)", [1987, 11, 15], `
          A year of strikes and demonstrations in Romania lead to over 20,000 workers
          storming and ransacking government buildings until military forces disperse
          the crowd and arrest hundreds.
        `),
        top(),
        rangeEvent("Polish worker strikes", [1988, 4, 21], [1988, 5, 10], `
          Polish Workers and activists go on strike and stage protests and
          demonstrations in various cities demanding better wages and an end to
          repressions against Solidarity. Government violence or threats of violence
          temporarily end the activity.
        `),
        rangeEvent("Polish strikes resume", [1988, 8, 15], [1988, 9, 3], `
          More strikes unexpectedly break out across Poland. Communist authorities
          consider more violent repression but worker determination forces them to
          negotiate with Lech Wałęsa, the head of Solidarity.
        `),
        spacer(),
        pointEvent("Geneva Accords (Afghanistan)", [1988, 4, 14], `
          An agreement between Afghanistan, Soviet Union, Pakistan and the United
          States sets a timetable for the Soviet withdrawal from its occupation of
          Afghanistan.
        `),
        pointEvent("Soviets begin Afghan withdrawal", [1988, 5, 15], `
          As agreed the previous month, Soviet troops begin withdrawal of their
          years-long invasion of Afghanistan in support of the communist party
          there. Afghan troops continue attacking the Soviet troops even as they
          withdraw.
        `),
        top(),
        pointEvent("Soviets finish Afghan withdrawal", [1989, 2, 15], `
          The last Soviet troops leave Afghanistan in defeat. The Afghan communist party
          stands alone against Islamic forces in a resulting Afghan Civil War which
          continues for another three years.
        `),
        rangeEvent("Polish Round Table Talks", [1989, 2, 6], [1989, 4, 5], `
          In the wake of unrest in Poland, leaders of the communist government and
          Solidarity trade union negotiate an agreement whereby trade unions are
          legalized, a senate and office of President created, increased election
          freedom and freedom of the press.
        `),
        pointEvent("Tbilisi tragedy", [1989, 4, 9], `
          In the Georgian SSR capital of Tbilisi, five days of anti-Soviet protests by
          tens of thousands of people lead to a Soviet Army crackdown with 21
          protesters killed.
        `),
        pointEvent("Chinese protests begin", [1989, 4, 15], `
          In China, when a pro-reform official dies, students begin protesting in the
          belief that his death is related to his forced resignation. Over the
          following weeks, protests turn to rioting and hunger strikes until a brutal
          crackdown in June.
        `),
        pointEvent("Solidarity legalized", [1989, 4, 17], `
          In Poland, the non-governmental trade union Solidarity is legalized after
          months of worker strikes and negotiations forced communists to share power.
        `),
        pointEvent("Hungary starts removing border fence", [1989, 5, 2], `
          Hungary opens the first holes in the border around the Iron Curtain by removing
          sections of its border fence with Austria. Liberal Hungarian officials hoped
          the public display would encourage East Germans to escape, but few did.
        `),
        pointEvent("Gazeta Wyborcza (Solidarity)", [1989, 5, 8], `
          With new freedoms in Polish media, Solidarity launches its first newspaper,
          Gazeta Wyborcza.
        `),
        pointEvent("Tiananmen Square massacre (China)", [1989, 6, 4], `
          After weeks of protests and riots and hunger strikes, the Chinese military
          unleashes a brutal crackdown with death tolls varying from hundreds to
          tens of thousands.
        `),
        pointEvent("Polish parliamentary election", [1989, 6, 18], `
          Solidarity wins almost every freely contested election in the first Polish
          election since non-communist approved parties were legalized.
        `),
        pointEvent("Pan-European Picnic", [1989, 8, 19], `
          As a peace demonstration, and to test Soviet response, a gate is opened in the
          Iron Curtain between communist Hungary and non-communist Austria. Unlike
          similar border openings in May, this demonstration gains the attention of
          East German citizens and hundreds escape into Austria with no resistance.
        `),
        pointEvent("Baltic Way", [1989, 8, 23], `
          Approximately two million people form a human chain across the Baltic states of
          Estonia, Latvia and Lithuania in a peaceful demonstration for freedom from the
          Soviet Union. The day was the 50-year anniversary of the Molotov-Ribbentrop
          pact which divided the three countries (and others) between Nazi Germany and
          the Soviet Union.
        `),
        pointEvent("Non-communist Prime Minister in Poland", [1989, 8, 24], `
          After Solidarity defeats communists in an election, Tadeusz Mazowiecki is named
          the first non-communist Prime Minister in Poland (and all of eastern Europe) in
          over 40 years.
        `),
        pointEvent("Monday demonstrations begin (East Germany)", [1989, 9, 4], `
          The first in a series of Monday demonstrations (which spread to other days of
          the week) is held in Leipzig, East Germany. The non-violent protest organized by a prominent local pastor took over city squares and drew the ire of the
          Stasi secret police. Similar and larger protests spread to other East German
          cities and contributed to the fall of the Berlin Wall two months later. They continued until March 1990 when free elections took place.
        `),
        pointEvent("Honecher ousted (East Germany)", [1989, 10, 18], `
          East Germany's dictator since 1971, Erich Honecher, is blamed for all of its
          recent problems and is voted out by the ruling party, and resigns. In ensuing months, Honecher is arrested and prosecuted, flees to Chile and dies in exile
          from cancer.
        `),
        pointEvent("Sinatra Doctrine coined", [1989, 10, 25], `
          Soviet Foreign Ministry spokesperson Gerasimov tells Finnish reporters that the
          Soviet Union has replaced the Eastern Bloc-controlling Brezhnev Doctrine with a
          foreign policy that lets satellite states determine their own domestic policy.
          He jokingly references Frank Sinatra's song "My Way" as the doctrine Eastern
          Bloc countries should take.
        `),
        pointEvent("Alexanderplatz demonstration (East Berlin)", [1989, 11, 4], `
          Over half a million protesters gather in a large public square in East
          Berlin to call for freedom in one of the largest demonstrations in East
          German history. Even members of the East German government speak at the
          demonstration. The Berlin Wall falls just five days later.
        `),
        pointEvent("FALL OF THE BERLIN WALL", [1989, 11, 9], `
          The Berlin Wall, since 1961 one of the most important symbols of the Iron
          Curtain and the
          divide between communist eastern Europe and democratic western Europe, is
          toppled as part of the Soviet liberalization and German reunification of the
          late 1980s.
        `),
        pointEvent("Malta Summit/end of the Cold War", [1989, 12, 3], `
          American and Soviet leaders Bush and Gorbachev meet in Malta and declare
          the end of the Cold War. It is seen as a major factor in reducing East/West
          tensions. Bush presents each attendee with a piece of the recently-fallen
          Berlin Wall.
        `),
        pointEvent("East German Round Table talks begin", [1989, 12, 7], `
          As East German repression, including the Berlin Wall, collapse, government
          and non-government groups initiate "Round Table" talks for the future of
          the country (similar to recent talks in Poland). Initial results are the end
          of the secret police and the first and only East German free elections.
        `),
        top(),
        pointEvent("Romanian Revolution", [1989, 12, 16], `
          A protest over the Romanian government's eviction of a dissident pastor results
          in a government crackdown that starts the brief Romanian Revolution. Just nine
          days later, thousands of civilians are dead from rioting and street fighting,
          Romania's leader is executed and communist rule is ended in Romania.
        `),
        pointEvent("Romania's Ceaușescu trial and execution", [1989, 12, 25], `
          Romanian Communist Party General Secretary Nicolae Ceaușescu and his wife
          are executed on charges of genocide immediately after a hasty trial. The
          Ceaușescus' deaths bring an end to the Romanian Revolution and to communist
          rule in Romania.
        `),
        pointEvent("East German secret police dissolved", [1990, 1, 13], `
          In East Germany, the Office for National Security (formerly Stasi) are
          dissolved per the Round Table talks of the previous month. Citizens rush to
          former Stasi buildings and offices to stop the destruction of secret documents
          accumulated over the decades.
        `),
        pointEvent("Black January (Azerbaijan)", [1990, 1, 20], `
          In Baku, Azerbaijan, Soviet troops violently put down an anti-Soviet movement,
          killing over 100 civilans and injuring hundreds more.
        `),
        pointEvent("Polish communist party dissolved", [1990, 1, 30], `
          The communist Polish United Workers' Party (PZPR) is dissolved with new
          social-democratic parties soon created in its place. The PZPR withered
          in the wake of worker strikes and the re-establishment of Solidarity in
          prior years.
        `),
        pointEvent("Afghan coup attempt", [1990, 3, 6], `
          An Afghan general, and member of the more hardline wing of the socialist
          government, fails in an attempt to overthrow the president, and is forced
          to flee the country.          
        `),
        pointEvent("Lithuania declares independence", [1990, 3, 11], `
          Lithuania becomes the first of the 15 Soviet republics to declare itself
          independent from the Soviet Union.
        `),
        pointEvent("East German free election", [1990, 3, 18], `
          East Germany has its first and only free elections. 
        `),
        pointEvent("Latvia declares transitional independence", [1990, 5, 4], `
          Latvia declares its independence from the Soviet Union stating that the 1940
          annexation was unconstitutional. The Soviet Union recognized Latvia's
          independence in September 1991.
        `),
        // top(),
        pointEvent("Declaration of State Sovereignty of Armenia", [1990, 8, 23], `
          Armenia declares itself independent from the Soviet Union. Actual
          independence is achieved in September 1991.
        `),
        pointEvent("Two Plus Four Agreement (Germany)", [1990, 9, 12], `
          East and West Germany (Two) and the occupying forces since World War II,
          France, the Soviet Union, the United Kingdom and the United States (Four)
          agree to the unification of East and West Germany into one nation and to
          end the post-war occupation, effective the following March.
        `),
        pointEvent("Germany reunification", [1990, 10, 3], `
          East Germany dissolves itself by re-establishing its constituent states and
          East Berlin as part of a unified Germany.
        `),
        pointEvent("Wałęsa wins Polish presidency", [1990, 12, 9], `
          In the second round of voting, Solidarity leader wins Poland's first
          presidential election.
        `),
        pointEvent("Soviet foreign minister resigns", [1990, 12, 20], `
          Soviet foreign minister Eduard Shevardnadze resigns stating that a dictatorship
          is imminent. This brings fears that Soviet troops will start cracking down on
          growing dissident movements.
        `),
        pointEvent("January Events (Lithuania)", [1991, 1, 11], `
          Soviet armed forces attack Lithuanian citizens and infrastructure amid growing
          support for independence. 14 citizens are killed before the Soviets retreat as
          tens of thousands of people gather.
        `),
        pointEvent("The Barricades (Latvia)", [1991, 1, 13], `
          In Latvia, citizens respond to Soviet aggression by building barricades to
          defend strategic objectives. Several civilians are killed in the ensuing
          weeks.
        `),
        top(),
        pointEvent("Independence referendum in Lithuania", [1991, 2, 9], `
          Lithuanians approve the first of several independence referendums in the
          dwindling Soviet Union.
        `),
        pointEvent("Warsaw Pact declared disbanded", [1991, 2, 25], `
          Defense and foreign ministers meeting in Hungary declare the Warsaw Pact to be
          disbanded.
        `),
        pointEvent("Independence referendums in Estonia and Latvia", [1991, 3, 3]),
        pointEvent("Soviet Union referendum", [1991, 3, 17], `
          A referendum passes in nine of the fifteen Soviet republics to keep the Soviet
          Union together, but treating the republics as soveriegn entities. The remaining
          six republics are already on paths to independence and therefore boycott the
          referendum.
        `),
        pointEvent("Independence referendum in Georgia", [1991, 3, 31]),
        // top(),
        pointEvent("Warsaw Pact formally ends", [1991, 7, 1], `
          Czechoslovak President Václav Havel formally disestablishes the Warsaw Treaty.
        `),
        pointEvent("AUGUST COUP", [1991, 8, 19], `
          Soviet Communist Party hardliners fail in an attempt to overthrow
          Soviet President Gorbachev leaving the party in shambles and leading to the
          fall of the Soviet Union. The coup pre-empts a vote on the New Union Treaty
          which was intended to keep the Soviet Union together but with less central
          authority.
        `),
        pointEvent("Latvia declares immediate independence", [1991, 8, 21], `
          During the August coup attempt, Latvia ends the transitional period of
          independence and declares itself immediately independent.
        `),
        pointEvent("Gorbachev resigns as General Secretary", [1991, 8, 24], `
          Mikhail Gorbachev resigns as General Secretary of the Communist Party of the
          Soviet Union. Vladimir Ivashko replaces him for five days.
        `),
        pointEvent("Numerous Soviet states declare independence", [1991, 8, 27], (
          <>
            24 August - Ukraine<br/>
            25 August - Belarus<br/>
            27 August - Moldova<br/>
            30 August - Azerbaijan<br/>
            31 August - Kyrgyzstan<br/>
            31 August - Uzbekistan<br/>
          </>
        )),
        // pointEvent("Ukraine declares independence", [1991, 8, 24]),
        // pointEvent("Belarus declares independence", [1991, 8, 25]),
        // pointEvent("Moldova declares independence", [1991, 8, 27]),
        pointEvent("CPSU suspended", [1991, 8, 29], `
          All activity of the Communist Party of the Soviet Union is suspended. Vladimir
          Ivashko resigns as General Secretary.
        `),
        // pointEvent("Azerbaijan declares independence", [1991, 8, 30]),
        // pointEvent("Kyrgyzstan declares independence", [1991, 8, 31]),
        pointEvent("Soviet Union recognizes Baltic States", [1991, 9, 6], `
          The Soviet Union recognizes the independence of Estonia, Latvia and Lithuania.
        `),
        pointEvent("Tajikistan declares independence", [1991, 9, 9]),
        pointEvent("Independence referendum in Armenia", [1991, 9, 21], `
          Armenia overwhelmingly passes an independence referendum and becomes
          officially independent 2 days later. They had declared themselves
          independent in August 1990.
        `),
        pointEvent("Azerbaijan declares independence", [1991, 10, 18]),
        pointEvent("Independence referendum in Turkmenistan", [1991, 10, 26]),
        pointEvent("CPSU banished from Russia", [1991, 11, 6], `
          Russian president Boris Yeltsin issues a decree banning the Communist Party of
          the Soviet Union in Russia.
        `),
        pointEvent("Independence referendums in Ukraine and Transnistria", [1991, 12, 1]),
        pointEvent("Belovezha Accords", [1991, 12, 8], `
          Presidents of Russia, Ukraine and Belarus agree to end the Soviet Union and form
          the Commonwealth of Independent States.
        `),
        pointEvent("Alma-Ata Protocol", [1991, 12, 21], `
          Most of the remaining former Soviet republics join the three Belovezha Accords
          nations in the Commonwealth of Independent States.
        `),
        pointEvent("Gorbachev resigns as President", [1991, 12, 25], `
          As the Commonwealth of Independent States takes shape, the Soviet Union's last
          president, Mikhail Gorbachev, fulfills his promise to resign.
        `),
        pointEvent("Soviet flag replaced at the Kremlin", [1991, 12, 25], `
          The hammer and sickle flag of the Soviet Union is lowered for the last time at
          the Kremlin and replaced by the flag of Russia.
        `),
        pointEvent("END OF THE SOVIET UNION", [1991, 12, 26], `
          The Supreme Soviet of the Soviet Union votes itself out of existence officially
          ending the Soviet Union.
        `),
        pointEvent("Independence referendums in Azerbaijan and Uzbekistan", [1991, 12, 29]),
      ]}
    />
  )
}
