import HorizontalTimeline, { pointEvent, rangeEvent, spacer, spacers, top } from "./HorizontalTimeline";

export default function WW1() {
  return (
    <HorizontalTimeline
      startYear={1911}
      endYear={1922}
      centerYear={1915}
      pixelsPerYear={400}
      events={[
        pointEvent("Assassination of Archduke Franz Ferdinand", [1914, 6, 28]),
        pointEvent("Austria-Hungary declares war on Serbia", [1914, 7, 28]),
        pointEvent("Germany declares war on Russia", [1914, 8, 1]),
        pointEvent("Germany invades Luxembourg", [1914, 8, 2]),
        pointEvent("German-Ottoman alliance", [1914, 8, 2]),
        pointEvent("Germany declares war on France", [1914, 8, 3]),
        pointEvent("Germany declares war on Belgium", [1914, 8, 4]),
        pointEvent("United Kingdom declares war", [1914, 8, 4]),
        rangeEvent("German invasion of Belgium", [1914, 8, 4], [1914, 10, 31]),
        rangeEvent("Battle of Liège (Belgium)", [1914, 8, 5], [1914, 8, 16]),
        pointEvent("Austria-Hungary declares war on Russia", [1914, 8, 6]),
        rangeEvent("Battle of the Frontiers", [1914, 8, 7], [1914, 9, 6], `
          Fighting on the Western Front is worst in the first months of the war as hundreds of thousands
          are killed in Belgium and northeast France.
        `),
        pointEvent("Ottoman-Bulgarian alliance", [1914, 8, 19]),
        // pointEvent("Battle of the Ardennes", [1914, 8, 21]),
        // pointEvent("Battle of Rossignol", [1914, 8, 22]),
        pointEvent("Japan declares war on Germany", [1914, 8, 23]),
        pointEvent("Japan declares war on Austria-Hungary", [1914, 8, 25]),
        pointEvent("First Battle of the Marne (France)", [1914, 9, 14], `
          Regarded among the most important battles in history, Germany's invasion of France is finally stopped
          at the Marne River near Paris. Over the course of one week, combined casualties are upwards of half a million
          as Germany is forced to abandon its attempts to quickly subdue France.
        `),
        rangeEvent("First Battle of the Aisne (France)", [1914, 9, 13], [1914, 9, 28], `
          Allied forces pursue retreating Germans after the victory at the Marne, again with the high casualty
          numbers typical of the war's opening months.
        `),
        rangeEvent("Siege of Antwerp", [1914, 9, 28], [1914, 10, 10], `
          Germany captures Antwerp as part of their invasion of Belgium.
        `),
        rangeEvent("Japan occupies German Pacific islands", [1914, 9, 29], [1914, 10, 21]),
        // pointEvent("Lwów pogrom (Russian)", [1914, 9, 27]),
        pointEvent("Black Sea raid (Russia/Ottomans)", [1914, 10, 29], `
          The Ottoman Empire joins World War I on the German side by launching a surprise attack on
          Russian ports in the Black Sea. Russia declares war a few days later despite the Ottomans
          expressing regret at the Navy's action. The British Empire and France followed suit soon
          after.
        `),
        pointEvent("Russia declares war on the Ottoman Empire", [1914, 11, 1]),
        pointEvent("Britain declares war on the Ottoman Empire", [1914, 11, 5]),
        pointEvent("France declares war on the Ottoman Empire", [1914, 11, 5]),
        pointEvent("Singapore Mutiny", [1915, 2, 15]),
        pointEvent("Thrasher incident", [1915, 3, 28]),
        pointEvent("Ottoman deportation of Armenians", [1915, 4, 24], `
          Ottoman Turks deport hundreds of Armenian intellectuals, most of which are presumed killed.
          It is considered the beginning of the Armenian genocide.
        `),
        pointEvent("Treaty of London (Italy)", [1915, 4, 26]),
        pointEvent("Lusitania torpedoed by German sub", [1915, 5, 7]),
        pointEvent("Italy declares war on Austria-Hungary", [1915, 5, 23]),
        top(),
        rangeEvent("Gallipoli campaign", [1915, 2, 19], [1916, 1, 9], `
          Allies fail in an attempt to invade the Ottoman Empire via the Gallipoli peninsula
          (modern-day Turkey).
        `),
        rangeEvent("Gorlice-Tarnów offensive (Poland)", [1915, 5, 2], [1915, 7, 13], `
          German troops move into Galicia intending to support Austria-Hungary against Russia, but end up
          forcing Russia to completely retreat out of Poland.
        `),
        rangeEvent("Bug-Narew Offensive (Eastern Front)", [1915, 7, 13], [1915, 8, 27], `
          A German offensive in Poland forces Russia into retreat with tens or hundreds of thousands killed.
        `),
        rangeEvent("Great Russian Retreat", [1915, 7, 13], [1915, 9, 19], `
          Germany reinforcing Austria-Hungary on the Eastern Front forces Russia to evacuate Galicia and Poland
          to avoid encirclement and complete disaster.
        `),
        pointEvent("Bulgarian-Ottoman convention", [1915, 9, 6]),
        pointEvent("Bulgaria-Germany treaty", [1915, 9, 6]),
        rangeEvent("Battle of Loos", [1915, 9, 25], [1915, 10, 8]),
        rangeEvent("Third Battle of Artois", [1915, 9, 25], [1915, 11, 4]),
        rangeEvent("Second Battle of Champagne", [1915, 9, 25], [1915, 11, 6]),
        pointEvent("Bulgaria invades Serbia", [1915, 10, 14]),
        top(),
        ...spacers(2),
        rangeEvent("Battle of Verdun", [1916, 2, 21], [1916, 12, 18]),
        pointEvent("Easter Rising (Ireland/UK)", [1916, 4, 27]),
        pointEvent("Sykes-Picot Agreement", [1916, 5, 16], `
          The Allies sign an infamous secret agreement for the eventual partitioning of the Ottoman
          Empire. The agreement reneges on British promises to give Arabs control of most of the Middle
          East if they support the Allies.
        `),
        pointEvent("Battle of Jutland", [1916, 6, 1]),
        rangeEvent("Battle of the Somme", [1916, 7, 1], [1916, 11, 18]),
        pointEvent("Struma operation (Bulgaria/Greece)", [1916, 8, 20]),
        pointEvent("Romania declares war on Austria-Hungary", [1916, 8, 27]),
        rangeEvent("Romanian Campaign", [1916, 8, 27], [1917, 1, 10]),
        rangeEvent("Monastir offensive (Serbia)", [1916, 9, 12], [1916, 12, 11]),
        pointEvent("Kingdom of Poland proclaimed", [1916, 11, 5]),
        pointEvent("Austrian Emperor Franz Joseph I dies", [1916, 11, 21], `
          Austrian Emperor and Hungarian King Franz Joseph I dies at age 86. His nephew becomes
          Emperor Karl I.
        `),
        pointEvent("Zimmerman Telegram (Germany/Mexico)", [1917, 1, 17]),
        pointEvent("End of the Russian Empire", [1917, 3, 15], `
          A revolution in Russia forces Tsar Nicholas II to abdicate and puts an end to the Russian
          Empire. Unwanted participation in World War I is a key element of the popular discontent
          and a communist revolution and civil war later in the year would cause their withdrawal from
          the larger war.
        `),
        pointEvent("United States declares war on Germany", [1917, 4, 6]),
        pointEvent("Battle of the Crna Bend (Macedonia)", [1917, 5, 7]),
        rangeEvent("Battle of Caporetto", [1917, 10, 24], [1917, 11, 19]),
        pointEvent("October Revolution/Russian Civil War", [1917, 11, 7], `
          A second 1917 Russian revolution topples the provisional government from the first 1917
          revolution and triggers a civil war which effectively knocks Russia out of World War I.
        `),
        pointEvent("United States declares war on Austria-Hungary", [1917, 12, 7]),
        pointEvent("Armistice of Focșani (Romania)", [1917, 12, 9]),
        pointEvent("Ukraine independence", [1918, 1, 22]),
        pointEvent("Romania invades Bessarabia", [1918, 1, 23]),
        top(),
        rangeEvent("Spanish flu pandemic", [1918, 3, 4], [1920, 6, 1]),
        rangeEvent("Arab Revolt", [1916, 6, 10], [1918, 10, 25], `
          Arabs revolt against the ruling Turks contributing to the fall of the Ottoman Empire. The
          involvement of British Captain T.E. Lawrence is depicted in the famous film "Lawrence of
          Arabia".
        `),
        pointEvent("Treaty of Brest-Litovsk (Soviet Union)", [1918, 3, 3], `
          The newly-formed Soviet Union, in the aftermath of the Russian Revolution and now in civil
          war, signs a treaty with the Central Powers removing itself from World War I. The freed up
          German resources soon result in the German spring offensive on the Western Front.
        `),
        rangeEvent("German spring offensive", [1918, 3, 21], [1918, 7, 18], `
          Germany makes relatively large gains on the Western Front capitalizing on Russia's leaving
          the war and in advance of American soldiers arriving on the continent.
        `),
        pointEvent("Bessarabia union with Romania", [1918, 4, 9]),
        pointEvent("Treaty of Bucharest", [1918, 5, 7]),
        pointEvent("Spa Conference of 1918", [1918, 5, 12]),
        pointEvent("Battle of Skra-di-Legen (Greece)", [1918, 5, 31], `
          Allied forces finally break through Bulgarian positions on the Macedonian front. The victory boosts Greece's
          confidence in its French-trained army, and the lack of counterattack showed poor morale in Bulgaria's
          German-trained defenses.
        `),
        pointEvent("Second Battle of the Piave River", [1918, 6, 19]),
        pointEvent("Bulgarian Prime Minister resigns", [1918, 6, 21], `
          Bulgaria's Prime Minister Vasil Radoslavov resigns with military morale low and Bulgaria losing land to Romania
          in the Treaty of Bucharest. After the war, he flees to Germany, is convicted and sentenced to death in absentia
          and dies in exile.
        `),
        rangeEvent("Hundred Days Offensive", [1918, 8, 8], [1918, 11, 11], `
          The Allies launch an offensive on the Western Front that reverses recent German gains
          and puts an end to major fighting in World War I.
        `),
        pointEvent("Battle of Dobro Pole (Serbia)", [1918, 9, 18]),
        rangeEvent("Vardar offensive (North Macedonia)", [1918, 9, 15], [1918, 9, 29]),
        pointEvent("Armistice of Salonica (Bulgaria)", [1918, 9, 29]),
        pointEvent("Battle of Durazzo (Adriatic/Albania)", [1918, 10, 2]),
        pointEvent("Tsar Ferdinand I of Bulgaria abdicates", [1918, 10, 3]),
        pointEvent("Second Polish Republic", [1918, 10, 7]),
        pointEvent("Czechoslovak Declaration of Independence", [1918, 10, 18], `
          Czechoslovakia declares independence as the Austro-Hungarian Empire nears collapse.
        `),
        pointEvent("Kiel mutiny starts German Revolution", [1918, 10, 29], `
          Sailors unwilling to risk their lives in a last-ditch naval offensive foil the offensive with
          a mutiny. The mutiny spreads to other ports and becomes a revolution that topples the German
          Empire.
        `),
        pointEvent("State of Slovenes, Croats and Serbs", [1918, 10, 29]),
        pointEvent("Armistice of Mudros (Ottoman Empire)", [1918, 10, 30], `
          Hostilities in the Middle East are ended when the Ottoman Empire signs the Armistice of
          Mudros with the Allies. The agreement includes Allied occupation of the Ottoman capital.
        `),
        pointEvent("Martin Declaration (Slovaks/Hungary)", [1918, 10, 30], `
          Slovaks reinforce the Czechoslovak declaration of independence by asserting Slovakian
          independence from Hungary and intention to join Czechoslovakia. Hungary attempts to
          militarily block control but Czech troops thwart them.
        `),
        pointEvent("Aster Revolution (Hungary)", [1918, 10, 31], `
          A mob attempts to storm Buda Castle to call for Hungary's independence from the
          Austro-Hungarian Empire. Two days later, Emperor Charles I ignores them and nominates an
          establishment to be the next Prime Minister, so the soldiers opposing the mob switch sides and
          Budapest is taken over. The next day, the Emperor's nominee resigns and he agrees to the
          pro-independence Prime Minister instead.
        `),
        pointEvent("End of the Austro-Hungarian Empire", [1918, 11, 1], `
          In the immediate aftermath of the Aster Revolution, Hungary terminates the personal union with
          Austria, effeectively ending the Austro-Hungarian Empire and 400 years of Habsburg rule.
        `),
        pointEvent("Polish-Ukrainian War", [1918, 11, 1], `
          Also November Uprising and start of Polish-Ukrainian War. Confusion about Old/New calendars so
          something may have happened 13 Nov.
        `),
        pointEvent("Armistice of Villa Giusti (Austria-Hungary)", [1918, 11, 3], `
          The war ends on the Italian Front with Italy's victory over Austria-Hungary in the Battle of
          Vittorio Veneto. The resulting Armistice of Villa Giusti ends all warfare between the Allies
          and Austria-Hungary.
        `),
        pointEvent("German Republic/Kaiser Wilhelm abdicates", [1918, 11, 9], `
          German Kaiser Wilhelm II abdicates from exile, ending the German Empire and monarchical
          rule of Germany. In its place, a democratic German Republic (later referred to
          as the Weimar Republic) is proclaimed by the leaders of two political parties.
        `),
        pointEvent("Romania re-enters the war", [1918, 11, 10]),
        pointEvent("ARMISTICE WITH GERMANY", [1918, 11, 11], `
          An armistice between the Allies and Germany is signed ending all fighting in World War I.
        `),
        pointEvent("Armistice of Belgrade (Hungary)", [1918, 11, 13]),
        pointEvent("Hungarian-Romanian War", [1918, 11, 13]),
        pointEvent("Hungarian People's Republic", [1918, 11, 16], `
          Days after Austrian Charles I dissolves the Austro-Hungarian Empire, Hungary declares itself
          the Hungarian People's Republic.
        `),
        pointEvent("Bulgarian Prime Minister resigns", [1918, 11, 28]),
        pointEvent("Greater Poland uprising", [1918, 12, 27]),
        pointEvent("Ukraine Unification Act", [1919, 1, 22]),
        pointEvent("Polish-Czechoslovak War", [1919, 1, 27]),
        top(),
        spacer(),
        pointEvent("Treaty of Versailles", [1919, 6, 28]),
        pointEvent("Treaty of Neuilly-sur-Seine (Bulgaria)", [1919, 11, 27]),
        pointEvent("Treaty of Trianon", [1920, 6, 4], `
          War between the Allies and the Kingdom of Hungary officially ends with the signing of the
          Treaty of Trianon.
        `),
        pointEvent("Spa Conference of 1920", [1920, 7, 11]),
      ]}
    />
  )
}
