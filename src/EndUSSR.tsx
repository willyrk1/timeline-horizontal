import "./App.css";
import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

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
        spacer(),
        pointEvent("Kádár and others resign (Hungary)", [1988, 5, 22], `
          János Kádár, head of Hungary's communist party for over 30 years, is pressured
          to resign along with half a dozen Politburo members as Kádár's health failed
          and the economy faltered.
        `),
        spacer(),
        pointEvent("JBTZ trial (Slovenia)", [1988, 5, 31], `
          Four Slovenians are arrested and tried for criticizing the Yugoslavian army
          and possessing secret military documents. The relatively short sentences
          serve to only enflame growing tensions and calls for freedom in Slovenia.
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
        pointEvent("Nagy reburial (Hungary)", [1989, 6, 16], `
          Imre Nagy, the executed leader of Hungary's 1956 revolution, is reinterred
          with full honors after his political rehabilitation. The funeral organized by
          opponents of the communist government is attended by over 200,000 people.
        `),
        pointEvent("Polish parliamentary election", [1989, 6, 18], `
          Solidarity wins almost every freely contested election in the first Polish
          election since non-communist approved parties were legalized.
        `),
        rangeEvent("Hungarian Round Table Talks", [1989, 6, 13], [1989, 9, 18], `
          Hungarian leaders engage in talks modeled on the Polish Round Table Talks
          as calls for reform increase. The various parties resolve to have free
          elections and various constitutional reforms.
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
          the week) is held in Leipzig, East Germany. The non-violent protest organized by a prominent local pastor takes over city squares and draws the ire of the
          Stasi secret police. Similar and larger protests spread to other East German
          cities and contribute to the fall of the Berlin Wall two months later. They continue until March 1990 when free elections take place.
        `),
        pointEvent("Slovenia multi-party era", [1989, 9, 27], `
          Slovenia's Assembly amends the constitution breaking the monopoly on power
          held by the League of Communists of Slovenia. It also asserts the right to
          leave Yugoslavia.
        `),
        pointEvent("Hungarian one-party rule ends", [1989, 10, 16], `
          The Marxist-Leninist Hungarian Socialist Workers' Party which ruled
          Hungary for over 30 years is dissolved and replaced by the social democratic
          Hungarian Socialist Party. Parliament announces massive constitutional
          changes including free multi-party elections, separation of powers and
          guaranteed human and civil rights.
        `),
        pointEvent("Honecher ousted (East Germany)", [1989, 10, 18], `
          Erich Honecher, East Germany's dictator since 1971, is blamed for all of its
          recent problems, gets voted out by the ruling party, and resigns. In ensuing months,
          Honecher is arrested and prosecuted, flees to Chile and dies in exile
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
        pointEvent("Zhivkov ousted (Bulgaria)", [1989, 11, 10], `
          In Bulgaria, communist hardliner Todor Zhivkov resigns as the de facto leader of the country.
          Violent repression of more liberal factions and a disastrous assimilation campaign against
          Bulgarian Turks
          causes other government leaders and the Politburo to turn against Zhivkov. When threatened
          with not only removal but execution, Zhivkov resigns.
        `),
        pointEvent("Velvet Revolution begins (Czechoslovakia)", [1989, 11, 17], `
          Police crack down on a peaceful student demonstration in Prague. While no
          one is known to have been killed, a story of a fictional student being
          killed circulates and mobilizes a full revolution.
        `),
        pointEvent("Czechoslovakian Presidium resigns", [1989, 11, 24], `
          A week of strikes and demonstrations drive the entire hardline communist
          Presidium to resign in Czechoslovakia. They are replaced by more moderate
          communists days before the communist party is completely removed from power.
        `),
        pointEvent("End of Communism in Czechoslovakia", [1989, 11, 28], `
          The constitution of Czechoslovakia is amended to remove the communist
          party's leading role in the government. The move effectively ends communism
          in Czechoslovakia in the second week of the Velvet Revolution.
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
          of the secret police and a call for the first and only East German free elections.
        `),
        pointEvent("Mongolia pro-democracy demonstration", [1989, 12, 10], `
          The first pro-democracy demonstration breaks out in Mongolia. Protesters demand free elections, universal
          suffrage, religious freedom, private property, etc.
        `),
        pointEvent("End of one-party rule in Bulgaria", [1989, 12, 11], `
          In Bulgaria, a month after hardline communist Todor Zhivkov was ousted, with demonstrations
          sweeping across the country, the new more
          liberal leader Petar Mladenov announces the end of the Communist Party's monopoly on power.
        `),
        top(),
        pointEvent("Romanian Revolution", [1989, 12, 16], `
          A protest over the Romanian government's eviction of a dissident pastor results
          in a government crackdown that starts the brief Romanian Revolution. Just nine
          days later, thousands of civilians are dead from rioting and street fighting,
          Romania's leader is executed and communist rule is ended in Romania.
        `),
        pointEvent("Ceaușescu trial and execution", [1989, 12, 25], `
          Romanian Communist Party General Secretary Nicolae Ceaușescu and his wife
          are executed on charges of genocide immediately after a hasty trial. The
          Ceaușescus' deaths bring an end to the Romanian Revolution and to communist
          rule in Romania.
        `),
        pointEvent("Havel elected President of Czechoslovakia", [1989, 12, 29], `
          Poet and Velvet Revolution activist Václav Havel elected President of
          Czechoslovakia.
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
        pointEvent("14th Congress of the LCY", [1990, 1, 22], `
          The Slovenian and Croatian delegations to the League of Communists of
          Yugoslavia walk out of the 14th Congress of the LCY after being rejected for
          democratic reforms and multi-party elections. After the walk-out, the LCY is
          left effectively powerless.
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
        pointEvent("Mongolian government dissolves", [1990, 3, 12], `
          After months of protests and a hunger strike, Mongolia's leader announces his resignation and the Politburo
          resigns.
        `),
        pointEvent("East German free election", [1990, 3, 18], `
          East Germany has its first and only free elections. 
        `),
        pointEvent("Hungarian parliamentary election", [1990, 3, 25], `
          The first free multi-party election in Hungary since 1945 results in
          resounding defeat for the former communists.
        `),
        pointEvent("Bulgaria abandons Marxism-Leninism", [1990, 4, 3], `
          Bulgaria's ruling Communist Party, having given up monopoly power the previous winter,
          formally abandons Marxism-Leninism and rebrands itself the Bulgarian Socialist Party.
        `),
        pointEvent("Latvia declares transitional independence", [1990, 5, 4], `
          Latvia declares its independence from the Soviet Union stating that the 1940
          annexation was unconstitutional. The Soviet Union recognizes Latvia's
          independence in September 1991.
        `),
        pointEvent("Czechoslovak parliamentary election", [1990, 6, 9], `
          The first parliamentary election in Czechoslovakia since the Communist
          Party gave up monopoly party results in non-communist majorities in both
          houses.
        `),
        pointEvent("Bulgarian free election", [1990, 6, 10], `
          Bulgaria holds its first free multi-party national election in nearly 60 years, six months
          after the Communist Party relinquished a monopoly on power. The rebranded Bulgarian Socialist
          Party wins a majority of the Constitutional Assembly seats.
        `),
        pointEvent("Mongolian free election", [1990, 6, 22], `
          Mongolia has its first free and multi-party elections since the government collapse several months prior.
          The incumbent Mongolian People's Party wins but ceased to be a communist party since the beginning of anti-
          communist protests.
        `),
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
        pointEvent("Bulgaria renaming and rebranding", [1990, 11, 15], `
          The People's Republic of Bulgaria's Grand National Assmembly votes to rename the country the
          Republic of Bulgaria and to remove the Communist state emblem from the flag.
        `),
        pointEvent("Bulgarian government collapse", [1990, 12, 7], `
          Bulgaria's prime minister resigns leading to a new government following large demonstrations
          and labor strikes.
        `),
        pointEvent("Wałęsa wins Polish presidency", [1990, 12, 9], `
          In the second round of voting, Solidarity leader wins Poland's first
          presidential election.
        `),
        pointEvent("Single-party mandate ends in Albania", [1990, 12, 11], `
          Following a university student strike, Albania legalizes the formation of new political
          parties for the first time since 1923. The first multi-party elections happen the following
          April.
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
        // top(),
        pointEvent("Independence referendum in Lithuania", [1991, 2, 9], `
          Lithuanians approve the first of several independence referendums in the
          dwindling Soviet Union.
        `),
        pointEvent("Hoxha statue toppled (Albania)", [1991, 2, 20], `
          An angry mob of students pull down a statue of Stalinist dictator Enver Hoxha after
          weeks of demonstration and hunger strikes. The protests began after officials refused to
          remove Hoxha's name from the university.
        `),
        pointEvent("Warsaw Pact declared disbanded", [1991, 2, 25], `
          Defense and foreign ministers meeting in Hungary declare the Warsaw Pact to be
          disbanded.
        `),
        pointEvent("Independence referendums in Estonia and Latvia", [1991, 3, 3]),
        top(),
        pointEvent("Soviet Union referendum", [1991, 3, 17], `
          A referendum passes in nine of the fifteen Soviet republics to keep the Soviet
          Union together, but treating the republics as soveriegn entities. The remaining
          six republics are already on paths to independence and therefore boycott the
          referendum.
        `),
        pointEvent("Independence referendum in Georgia", [1991, 3, 31]),
        pointEvent("Socialists win Albanian election", [1991, 3, 31], `
          Albania has its first multi-party elections since 1923 but the result is a landslide victory
          for the incumbent socialist party. With the socialists controlling most media, socialist
          promises for a regulated market economy to stop the rapid deterioration, and rural
          peasants fearing a return of wealthy land barons, the new anti-communist parties won barely
          30% of assembly seats.
        `),
        pointEvent("Slovenia/Croatia independence", [1991, 6, 25], `
          Slovenia and Croatia declare independence from Yugoslavia. By that time,
          Croatia had already been at war for three months vying for independence.
          Two days after declaring, Slovenia also comes under attack in the Ten-Day
          War which comes to an end with the Brioni Accord. Croatia continues fighting
          with Serbia or Serbian-led Yugoslavia for several years.
        `),
        pointEvent("Comecon dissolved", [1991, 6, 28], `
          In Budapest, in its final council session, the Soviet-led Council for Mutual Economic
          Assistance (Comecon) agrees to dissolve itself effective 90 days later.
        `),
        pointEvent("Warsaw Pact formally ends", [1991, 7, 1], `
          Czechoslovak President Václav Havel formally disestablishes the Warsaw Treaty.
        `),
        pointEvent("Albanian Vlora reaches Italy", [1991, 8, 8], `
          As post-communist Albania collapses, tens of thousands of desperate refugees storm the
          cargo ship, Vlora, and set sail for Italy, arriving without warning. Italy reluctantly
          allows them off the ship but ultimately deport most back to Albania.
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
        pointEvent("Socialists lose Bulgarian election", [1991, 10, 13], `
          In Bulgaria's second free election, socialists and former communists finish a close second.
        `),
        pointEvent("Azerbaijan declares independence", [1991, 10, 18]),
        pointEvent("Independence referendum in Turkmenistan", [1991, 10, 26]),
        pointEvent("CPSU banished from Russia", [1991, 11, 6], `
          Russian president Boris Yeltsin issues a decree banning the Communist Party of
          the Soviet Union in Russia.
        `),
        pointEvent("Independence referendum in Ukraine", [1991, 12, 1]),
        pointEvent("Independence referendum in Transnistria", [1991, 12, 1]),
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
        pointEvent("Independence referendum in Azerbaijan", [1991, 12, 29]),
        pointEvent("Independence referendum in Uzbekistan", [1991, 12, 29]),
        top(),
        pointEvent("Anti-communists win Albanian election", [1992, 3, 22], `
          In Albania, the last European country to shed communism, the Democratic Party defeats
          the Socialist Party by wide margins and establish Albania's first non-socialist government
          since World War II. Socialism would not return to Albania until government and economic
          scandals in 1997.
        `),
        pointEvent("Albania bans Communist Party", [1992, 7, 16], `
          The Albanian Parliament votes to ban the Communist Party of Albania which had split from
          the socialist Party of Labour in December 1991.
        `),
      ]}
    />
  )
}
