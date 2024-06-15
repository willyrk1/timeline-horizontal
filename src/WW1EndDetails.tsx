import HorizontalTimeline, { pointEvent, rangeEvent, spacer, spacers, top } from "./HorizontalTimeline";

export default function WW1() {
  return (
    <HorizontalTimeline
      startYear={1911}
      endYear={1922}
      centerYear={1915}
      pixelsPerYear={350}
      events={[
        pointEvent("Assassination of Archduke Franz Ferdinand", [1914, 6, 28]),
        pointEvent("Austria-Hungary declares war on Serbia", [1914, 7, 28]),
        pointEvent("Austria-Hungary declares war on Russia", [1914, 8, 6]),
        pointEvent("Lwów pogrom (Russian) (TBD)", [1914, 9, 27]),
        pointEvent("Black Sea raid (Russia/Ottomans)", [1914, 10, 29], `
          The Ottoman Empire joins World War I on the German side by launching a surprise attack on
          Russian ports in the Black Sea. Russia declares war a few days later despite the Ottomans
          expressing regret at the Navy's action. The British Empire and France followed suit soon
          after.
        `),
        ...spacers(15),
        rangeEvent("Gallipoli campaign", [1915, 2, 19], [1916, 1, 9], `
          Allies fail in an attempt to invade the Ottoman Empire via the Gallipoli peninsula
          (modern-day Turkey).
        `),
        pointEvent("Ottoman deportation of Armenians", [1915, 4, 24], `
          Ottoman Turks deport hundreds of Armenian intellectuals, most of which are presumed killed.
          It is considered the beginning of the Armenian genocide.
        `),
        top(),
        rangeEvent("Battle of Loos (TBD)", [1915, 9, 25], [1915, 10, 8]),
        rangeEvent("Third Battle of Artois (TBD)", [1915, 9, 25], [1915, 11, 4]),
        rangeEvent("Second Battle of Champagne (TBD)", [1915, 9, 25], [1915, 11, 6]),
        rangeEvent("Battle of Verdun (TBD)", [1916, 2, 21], [1916, 12, 18]),
        pointEvent("Sykes-Picot Agreement", [1916, 5, 16], `
          The Allies sign an infamous secret agreement for the eventual partitioning of the Ottoman
          Empire. The agreement reneges on British promises to give Arabs control of most of the Middle
          East if they support the Allies.
        `),
        rangeEvent("Arab Revolt", [1916, 6, 10], [1918, 10, 25], `
          Arabs revolt against the ruling Turks contributing to the fall of the Ottoman Empire. The
          involvement of British Captain T.E. Lawrence is depicted in the famous film \"Lawrence of
          Arabia\".
        `),
        rangeEvent("Battle of the Somme (TBD)", [1916, 7, 1], [1916, 11, 18]),
        pointEvent("Struma operation (Bulgaria/Greece) (TBD)", [1916, 8, 20]),
        rangeEvent("Romanian Campaign (TBD)", [1916, 8, 27], [1917, 1, 10]),
        pointEvent("Romania declares war on Austria-Hungary (TBD)", [1916, 8, 27]),
        pointEvent("Kingdom of Poland proclaimed (TBD)", [1916, 11, 5]),
        pointEvent("Austrian Emperor Franz Joseph I dies", [1916, 11, 21], `
          Austrian Emperor and Hungarian King Franz Joseph I dies at age 86. His nephew becomes
          Emperor Karl I.
        `),
        pointEvent("End of the Russian Empire", [1917, 3, 15], `
          A revolution in Russia forces Tsar Nicholas II to abdicate and puts an end to the Russian
          Empire. Unwanted participation in World War I is a key element of the popular discontent
          and a communist revolution and civil war later in the year would cause their withdrawal from
          the larger war.
        `),
        top(),
        // ...spacers(2),
        rangeEvent("Battle of Caporetto (TBD)", [1917, 10, 24], [1917, 11, 19]),
        pointEvent("October Revolution/Russian Civil War", [1917, 11, 7], `
          A second 1917 Russian revolution topples the provisional government from the first 1917
          revolution and triggers a civil war which effectively knocks Russia out of World War I.
        `),
        pointEvent("Armistice of Focșani (Romania) (TBD)", [1917, 12, 9]),
        pointEvent("Ukraine independence (TBD)", [1918, 1, 22]),
        pointEvent("Romania invades Bessarabia (TBD)", [1918, 1, 23]),
        spacer(),
        pointEvent("Moldavian Democratic Republic (TBD)", [1918, 2, 6]),
        pointEvent("Treaty of Brest-Litovsk (Soviet Union)", [1918, 3, 3], `
          The newly-formed Soviet Union, in the aftermath of the Russian Revolution and now in civil
          war, signs a treaty with the Central Powers removing itself from World War I. The freed up
          German resources soon result in the German spring offensive on the Western Front.
        `),
        pointEvent("Bessarabia union with Romania (TBD)", [1918, 4, 9]),
        rangeEvent("German spring offensive", [1918, 3, 21], [1918, 7, 18], `
          Germany makes relatively large gains on the Western Front capitalizing on Russia's leaving
          the war and in advance of American soldiers arriving on the continent.
        `),
        pointEvent("Treaty of Bucharest (TBD)", [1918, 5, 7]),
        pointEvent("Spa Conference of 1918 (TBD)", [1918, 5, 12]),
        pointEvent("Second Battle of the Piave River (TBD)", [1918, 6, 19]),
        rangeEvent("Hundred Days Offensive", [1918, 8, 8], [1918, 11, 11], `
          The Allies launch an offensive on the Western Front that reverses recent German gains
          and puts an end to major fighting in World War I.
        `),
        pointEvent("Armistice of Salonica (Bulgaria) (TBD)", [1918, 9, 29]),
        pointEvent("Tsar Ferdinand I of Bulgaria abdicates (TBD)", [1918, 10, 3]),
        pointEvent("Second Polish Republic (TBD)", [1918, 10, 7]),
        pointEvent("Republic of Zakopane (TBD)", [1918, 10, 13]),
        pointEvent("Czechoslovak Declaration of Independence", [1918, 10, 18], `
          Czechoslovakia declares independence as the Austro-Hungarian Empire nears collapse.
        `),
        pointEvent("Kiel mutiny starts German Revolution", [1918, 10, 29], `
          Sailors unwilling to risk their lives in a last-ditch naval offensive foil the offensive with
          a mutiny. The mutiny spreads to other ports and becomes a revolution that topples the German
          Empire.
        `),
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
        pointEvent("Banat Republic (TBD)", [1918, 11, 1]),
        pointEvent("Polish-Ukrainian War (TBD)", [1918, 11, 1], `
          Also November Uprising and start of Polish-Ukrainian War. Confusion about Old/New calendars so
          something may have happened 13 Nov.
        `),
        pointEvent("Armistice of Villa Giusti (Austria-Hungary)", [1918, 11, 3], `
          The war ends on the Italian Front with Italy's victory over Austria-Hungary in the Battle of
          Vittorio Veneto. The resulting Armistice of Villa Giusti ends all warfare between the Allies
          and Austria-Hungary.
        `),
        pointEvent("Republic of Tarnobrzeg (TBD)", [1918, 11, 6]),
        pointEvent("German Republic/Kaiser Wilhelm abdicates", [1918, 11, 9], `
          German Kaiser Wilhelm II abdicates from exile, ending the German Empire and monarchical
          rule of Germany. In its place, a democratic German Republic (later referred to
          as the Weimar Republic) is proclaimed by the leaders of two political parties.
        `),
        pointEvent("Republic of Ostrów (TBD)", [1918, 11, 10]),
        pointEvent("ARMISTICE ENDS FIGHTING IN WORLD WAR I", [1918, 11, 11], `
          An armistice between the Allies and Germany is signed ending all fighting in World War I.
        `),
        pointEvent("Armistice of Belgrade (Hungary)", [1918, 11, 13]),
        pointEvent("Hungarian People's Republic", [1918, 11, 16], `
          Days after Austrian Charles I dissolves the Austro-Hungarian Empire, Hungary declares itself
          the Hungarian People's Republic.
        `),
        pointEvent("Lwów pogrom (Polish) (TBD)", [1918, 11, 23]),
        pointEvent("Bukovina union with Romania (TBD)", [1918, 11, 28]),
        pointEvent("Transylvania union with Romania (TBD)", [1918, 12, 1]),
        pointEvent("Greater Poland uprising (TBD)", [1918, 12, 27]),
        pointEvent("Hutsul Republic (TBD)", [1919, 1, 8]),
        pointEvent("Ukraine Unification Act (TBD)", [1919, 1, 22]),
        pointEvent("Polish-Czechoslovak War (TBD)", [1919, 1, 27]),
        top(),
        pointEvent("Treaty of Versailles (TBD)", [1919, 6, 28]),
        pointEvent("Treaty of Neuilly-sur-Seine (Bulgaria) (TBD)", [1919, 11, 27]),
        pointEvent("Treaty of Trianon", [1920, 6, 4], `
          War between the Allies and the Kingdom of Hungary officially ends with the signing of the
          Treaty of Trianon.
        `),
        pointEvent("Spa Conference of 1920 (TBD)", [1920, 7, 11]),
      ]}
    />
  )
}
