import HorizontalTimeline, { pointEvent, rangeEvent, back, spacer, spacers, top } from "./HorizontalTimeline";

export default function PostWW1East() {
  return (
    <HorizontalTimeline
      startYear={1916}
      endYear={1925}
      centerYear={1919}
      pixelsPerYear={250}
      events={[
        rangeEvent("World War I", [1914, 7, 28], [1918, 11, 11], undefined, undefined, true),
        pointEvent("Tsar Nicholas II ousted", [1917, 3, 15], `
          The February Revolution forces Russian Tsar Nicholas II to abdicate and puts an end to the Russian
          Empire. In its place, the Russian Provisional Government is formed, headed by Prince Georgy Lvov, with the
          left represented by the Petrograd Soviet.
        `),
        rangeEvent("Last Russian WWI offensive", [1917, 7, 1], [1917, 7, 19], `
          Russia undertakes the Kerensky offensive at the behest of war minister Alexander Kerensky who wanted to continue Russia's
          alliance..... TBD
        `),
        pointEvent("Failed Bolshevik uprising", [1917, 7, 20], `
          A failed uprising (dubbed the July Days), results in numerous Bolshevik leaders, including
          Trotsky, being arrested, and others, including Lenin, fleeing into exile abroad. Despite the uprising's failure, the
          Provisional Government is left shaken and unpopular, and Prime Minister Lvov resigns, soon replaced by war minister
          Alexander Kerensky.
        `),
        pointEvent("Failed military coup", [1917, 9, 13], `
          The Russian Army, led by General Lavr Kornilov, fails in an attempt (the Kornilov affair) to overthrow the
          Kerensky/Trotsky-led Provisional
          Government and Petrograd Soviet (although some historians claim Kerensky himself planned to overthrow the Bolsheviks).
          The result is Kornilov's imprisonment, another officer's suicide, and Kerensky's proclamation of the Russian Republic.
        `),
        pointEvent("OCTOBER REVOLUTION", [1917, 11, 7], `
          A second 1917 Russian revolution topples the Russian Provisional Government. Civil War breaks
          out almost immediately between the Bolshevik "Reds" and the anti-Bolshevik "Whites".
        `),
        rangeEvent("Russian Civil War", [1917, 11, 7], [1922, 10, 25], `
          The Red Army captured Vladivostok in October 1922, effectively ending the war, although pockets of resistance continued
          into 1923.
        `),
        pointEvent("Transcaucasian separation from Russia", [1917, 11, 11], `
          Armenia, Azerbaijan and Georgia form an independent government, separating from the new Soviet Union, hoping
          to remain separate from the Ottoman Empire.
        `),
        // pointEvent("Transcaucasian armistice with the Ottomans", [1917, 12, 18], `
        //   The Ottoman Empire and the newly-formed Transcaucasian Commissariat agree to the Armistice of Erzincan which lasts
        //   until the following spring. 
        // `),
        pointEvent("Finland declares independence from Russia", [1917, 12, 6]),
        pointEvent("Russian armistice in WWI", [1917, 12, 15]),
        pointEvent("Ukraine declares independence from Russia", [1918, 1, 22], `
          The Ukrainian People's Republic declares its independence from Russia with the Fourth Universal of the Ukrainian Central Rada.
        `),
        rangeEvent("Finnish Civil War", [1918, 1, 27], [1918, 5, 15]),
        pointEvent("Lithuania declares independence from Russia", [1918, 2, 16]),
        rangeEvent("Central Powers resume war in the east", [1918, 2, 18], [1918, 3, 3], `
          The Central Powers' Operation Faustschlag finally forces the Soviet Russia out of World War I.
          After the Bolshevik Revolution, the Russia had agreed to a cease-fire but then withdrew from negotiations. With
          a new Ukrainian peace treaty, the Central Powers push almost unopposed through the Eastern Front until
          the Soviets finally sign the Treaty of Brest-Litovsk, formally withdrawing from the war.
        `),
        pointEvent("Estonia declares independence from Russia", [1918, 2, 24]),
        pointEvent("Treaty of Brest-Litovsk", [1918, 3, 3], `
          The Treaty of Brest-Litovsk is signed by Soviet Russia and the German-led Central Powers whereby Russia withdraws from
          World War I. With civil war raging in Russia and Trotsky stalling on a peace deal, the Central Powers re-started invasion
          into eastern Europe forcing Russia's hand.
        `),
        pointEvent("Armenian-Azerbaijani War begins", [1918, 3, 30], `
          Russian and Armenian socialists battle with Azerbaijani Muslims in Baku (the March Days) in what turns into the
          Armenian-Azerbaijani War. The war also involves the Ottoman Empire and is only resolved two years later when
          the Soviet Red Army invades and turns both sides into Soviet republics.
        `),
        rangeEvent("Independent Armenia, Azerbaijan, Georgia", [1918, 4, 22], [1918, 6, 4], `
          When the Ottomans refuse to negotiate with the Transcaucasian Commisariat, deeming it too close to Russia, it is
          replaced by the independent Transcaucasian Democratic Federative Republic. Only a month later, all three components
          declare themselves individually independent. The Ottomans subsequently sign the Treaty of Batum, recognizing the
          independent states.
        `),
        pointEvent("Anti-socialist coup in Ukraine", [1918, 4, 29], `
          A German-supported coup against the Ukrainian People's Republic topples the Central Council and leads to the formation of the
          anti-socialist Ukrainian State. The new government legalizes private land ownership but quickly becomes unpopular
          and abdicates later in the year, re-establishing the Ukrainian People's Republic.
        `),
        top(),
        spacer(),
        rangeEvent("Spanish flu pandemic", [1918, 3, 4], [1920, 6, 1]),
        pointEvent("Russia's last tsar executed", [1918, 7, 17], `
          The last tsar and emperor of Russia, and his entire family, are executed in the Soviet Union less than a year after the
          Bolshevik revolution.
        `),
        pointEvent("Second Polish Republic", [1918, 10, 7]),
        pointEvent("Czechoslovakia declares independence", [1918, 10, 18], `
          Czechoslovakia declares independence as the Austro-Hungarian Empire nears collapse.
        `),
        rangeEvent("German revolution", [1918, 10, 29], [1919, 8, 11], `
          A revolution to topple the German Empire helps end World War I before turning into a battle against communists ending
          in the creation of the Weimar Republic.
        `),
        spacer(),
        // pointEvent("West Ukraine uprising in Lviv", [1918, 11, 1], `
        //   The West Ukrainian People's Republic is formed as the new Second Polish Republic lays claim to the city of Lviv in Galicia
        //   (known to the Austrian-Hungarian authorities as Lemberg). West Ukraine pre-empts Polish plans by launching the
        //   November Uprising to oust the withering Austria-Hungarian administration and take control of Lviv. Polish troops soon enter
        //   the fray and the Polish-Ukrainian War ensues.
        // `),
        rangeEvent("Polish-Ukrainian War", [1918, 11, 1], [1919, 7, 18], `
          Newly-formed republics of Poland and West Ukraine battle for control of the former Austria-Hungarian territory of Galicia,
          especially the city of Lviv (AKA Lwów, AKA Lemberg). Poland finally forces West Ukraine back into Ukraine, from which its
          leaders go into exile and the West Ukrainian People's Republic dissolves. Poland maintains control of the area for the
          next two decades until World War II.
        `),
        rangeEvent("Hungarian-Romanian War", [1918, 11, 13], [1919, 8, 3]),
        pointEvent("Latvia declares independence", [1918, 11, 18]),
        rangeEvent("Estonian War of Independence", [1918, 11, 28], [1920, 2, 2], `
          Started when the Soviet Red Army attacked a border town. Ended with Treaty of Tartu signed by Estonia and Soviet Russia.
        `),
        spacer(),
        rangeEvent("Latvian War of Independence", [1918, 12, 1], [1920, 8, 11], `
          Started with Soviet Russia invasion of Latvia. Ended with Treaty of Riga between Latvia and Soviet Russia.
        `),
        rangeEvent("Armeno-Georgian War", [1918, 12, 7], [1918, 12, 31], `
          Armenia and Georgia, recently formed from the defeated Ottoman Empire, engage in a brief war over a border dispute.
        `),
        rangeEvent("Lithuanian-Soviet War", [1918, 12, 12], [1919, 8, 31], `
          Started with Soviet Russia invasion. Fighting ended when Soviet Russia was driven into southern Latvia although
          a Soviet-Lithuanian Peace Treaty was not signed until
          mid-1920.
        `),
        back(),
        pointEvent("Soviet-Lithuanian Peace Treaty", [1920, 7, 12]),
        pointEvent("Ukrainian State toppled", [1918, 12, 15], `Control shifts back to the Ukrainian People's Republic.`),
        pointEvent("Greater Poland uprising", [1918, 12, 27]),
        rangeEvent("Ukrainian-Soviet War", [1919, 1, 2], [1921, 11, 17]),
        pointEvent("Ukraine Unification Act", [1919, 1, 22], `
          The Ukrainian People's Republic and the Western Ukrainian People's Republic sign an agreement unifying into one state. In
          mid-1919, the Polish-Ukrainian War forces the Western Ukrainians out the territory and their government-in-exile repeals
          the unification act in December.
        `),
        pointEvent("Polish-Czechoslovak War", [1919, 1, 27]),
        top(),
        ...spacers(2),
        rangeEvent("Polish-Soviet War", [1919, 2, 14], [1921, 3, 18], `
          Poland and Soviet Russia signed the Treaty of Riga ending the war.
        `),
        rangeEvent("Polish-Lithuanian War", [1919, 5], [1920, 11, 29], `
          Poland battles with Lithuania over control of the Vilnius region in the wake of World War I and in the backdrop of the Soviet
          Russian revolutionary wars. With Vilnius in Polish hands, light skirmishes between Poland and Lithuania are reported in April and
          May 1919. Several months later, Poland attempts a coup within Lithuania but the plot is discovered and
          thwarted. Soviet Russia signs a July 1920 peace deal with Lithuania. A
          Russian army is crushed by the Poles in Warsaw the following month and Vilnius is handed to Lithuania. Poland and Lithuania sign
          the Suwałki Agreement in October setting the border near Suwałki which remains to this day. Within hours, a mutiny within Vilnius
          leads to a new state called Central Lithuania, but turns out to be a false flag operation staged by Poland. Lithuania finally
          agrees to a cease fire with Poland and Central Lithuania on November 29 and Vilnius stays in Polish hands until World War II.
        `),
        rangeEvent("Republic of Central Lithuania", [1920, 10, 12], [1922, 4, 18], `
          Polish puppet state formed after the Polish Żeligowski's Mutiny in Vilnius to maintain control of the ethnically divided region.
        `),
        back(),
        rangeEvent("Lithuanian-Bermontian War", [1919, 7], [1919, 12], `
          War between Lithuania and pro-German White Russian forces over the existence of Lithuania ends with the West Russian Volunteer
          Army being expelled from Lithuania.
        `),
        pointEvent("Poland/Ukraine alliance", [1920, 4, 21], `
          Poland and the Ukrainian People's Republic sign the Treaty of Warsaw, forming an alliance against Bolshevik Russia in the Polish-Soviet War.
        `),
        spacer(),
        pointEvent("Finland/Soviet treaty", [1920, 10, 14], `
          Finland and Soviet Russia sign the Treaty of Tartu (Estonia) to confirm the border between the two new nations and maintain peace
          for nearly two decades.
        `),
        top(),
        rangeEvent("Russian famine", [1921, 4, 1], [1922, 12, 31]),
        pointEvent("Kronstadt rebellion fails", [1921, 3, 18]),
        top(),
        spacer(),
        pointEvent("USSR formed", [1922, 12, 30], `
          The Declaration and Treaty on the Formation of the Union of Soviet Socialist Republics forms the Union of Soviet Socialist
          Republics as signed by the Russian SFSR, Transcaucasian SFSR, Ukrainian SFSR and Byelorussian SFSR.
        `),

        top(),
        pointEvent("LENIN DIES", [1924, 1, 21]),
      ]}
    />
  )
}
