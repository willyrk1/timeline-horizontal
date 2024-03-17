import "./App.css";
import HorizontalTimeline, { pointEvent, rangeEvent, spacers, top } from "./HorizontalTimeline";

export default function AustrianSuccession() {
  return (
    <HorizontalTimeline
      startYear={1739}
      endYear={1750}
      centerYear={1743}
      pixelsPerYear={300}
      events={[
        pointEvent("War of Jenkins' Ear begins", [1739, 10, 22], `
          British (King George II) ships attack Venezuela and then declare war on Spain
          (King Philip V) the next day. Years of tension over trade in the Americas lead to
          sporadic naval battles throughout the continents until the war is subsumed into
          the War of the Austrian Succession.
        `),
        pointEvent("Frederick the Great becomes King of Prussia", [1740, 5, 31], `
          Prussia's King Frederick William I dies at age 51 and his son becomes King
          Frederick II, now known as Frederick the Great.
        `),
        pointEvent("HRE Charles VI (Habsburg) dies", [1740, 10, 20], `Charles VI
          (Habsburg), Holy Roman Emperor, dies at age 55 without a male heir leading to the
          War of Austrian Succession.
        `),
        pointEvent("Prussia invades Silesia", [1740, 12, 16], `
          Prussia takes advantage of Austria's succession crisis by invading
          Austrian-held Silesia starting the First Silesian War and the War of the
          Austian Succession.
          With light resistance, Prussia controlled most of Silesia by late
          January 1941.
        `),
        rangeEvent("War of the Austrian Succession", [1740, 12, 16], [1748, 10, 18], `
          The end of the main Habsburg male line results in Prussia, France, Spain,
          Bavaria, Sweden, etc. going to war with Austria, Great Britain, Russia, the
          Dutch Republic, etc. Fronts are in Germany, Italy and the Netherlands.
        `),
        rangeEvent("First Silesian War", [1740, 12, 16], [1742, 6, 11], `
          Prussia (Frederick the Great) seizes most of Silesia from Austria (Maria
          Theresa Habsburg) as part of the War of Austrian Succession.
        `, "../FirstSilesian"),
        pointEvent("Battle of Mollwitz (Silesia)", [1741, 4, 10], `
          Austria tries to break Prussia's control of Silesia and force Frederick II to
          flee but Prussia holds in the end.
        `),
        pointEvent("Treaty of Nymphenburg", [1741, 5, 28], `
          Spain (King Philip V) agrees to support Bavaria's Prince-Elector Charles
          Albert (Wittelsbach) to
          become the next Holy Roman Emperor. Subsequent anti-Austrian treaties with
          France, Saxony and Savoy-Sardinia form what became known as the League of
          Nymphenburg.
        `),
        pointEvent("France/Bavaria capture Linz", [1741, 9, 14], `
          With Austria fighting Prussia in the east, France and Bavaria invade Austria from
          the west capturing Linz, and later Prague, with little resistance.
        `),
        pointEvent("Maria Theresa speech to Hungary", [1741, 9, 21], `
          With defeat looming, heir presumptive Maria Theresa (Habsburg) makes an emotional
          speech to win Hungarian support.
        `),
        pointEvent("Convention of Klein Schnellendorf", [1741, 10, 9], `
          Prussia and Austria come to a secret agreement to stop fighting in Silesia.
          Austria agrees to concede Lower Silesia to Prussia in return for negotiating
          peace after defending the western front from France and Bavaria. In the following
          months Prussia accuses Austria of leaking the secret and the truce dissolves.
        `),
        pointEvent("Battle of Prague", [1741, 11, 26], `
          French, Bavarian and Saxon troops take Prague with little resistance.
        `),
        pointEvent("Charles Albert crowned King of Bohemia", [1741, 12, 19], `
          Bavarian Prince and Holy Roman Emperor claimant Charles Albert is crowned King of
          Bohemia during his occupation of Prague.
        `),
        pointEvent("Battle of St. Pölten (Austria)", [1741, 12, 23], `
          Austria finally registers a victory by defeating French and Bavarian troops at
          St. Pölten.
        `),
        pointEvent("Prussia occupies Olmütz", [1741, 12, 27], `
          Prussia's Bohemian/Moravian campaign captures the city of Olmütz.
        `),
        pointEvent("Battle of Schärding", [1742, 1, 17], `
          Austria continues repelling invaders with a defeat of Bavarian forces.
        `),
        pointEvent("Austria reclaims Linz", [1742, 1, 24], `
          French forces surrender Linz to Austria after 4 months of occupation.
        `),
        pointEvent("Charles Albert elected HRE", [1742, 1, 24], `
          Bavarian Prince-Elector and King of Germany Charles Albert (Wittelsbach) is
          elected Holy Roman Emperor. He becomes the first non-Habsburg Holy Roman
          Emperor in 300 years.
        `),
        pointEvent("Charles Albert crowned HRE Charles VII", [1742, 2, 12]),
        pointEvent("Austria captures Munich", [1742, 2, 12], `
          Austria's move into Bavaria captures its largest city of Munich. By the end of
          February, Austria occupies much of Bavaria and most of Bohemia.
        `),
        pointEvent("Allies capture Iglau (Moravia)", [1742, 2, 15], `
          Prussia, Saxony and France push into Moravia seizing the city
          of Iglau, but reluctant France then breaks off on its own.
        `),
        pointEvent("Moravian campaign withers", [1742, 4, 5], `
          After Saxony also abandons the allied Moravian campaign, Prussia withdraws
          into Bohemia and Upper Silesia.
        `),
        pointEvent("Battle of Chotusitz (Bohemia)", [1742, 5, 17], `
          With Moravia secure, Austria attempts to move towards liberating Prague but are
          intercepted by Frederick the Great with high casualties on both sides.
        `),
        pointEvent("Battle of Sahay (Bohemia)", [1742, 5, 24], `
          France withstands an attack by Austria trying to repel invaders from Bohemia.
        `),
        pointEvent("Treaty of Breslau", [1742, 6, 11], `
          With Britain threatening to pull funding for Austria, Maria Theresa agrees to the
          Treaty of Breslau which ends the First Silesian War. Austria concedes most of
          Silesia and other lands to Prussia.
        `),
        rangeEvent("Siege of Prague", [1742, 6], [1742, 12, 16], `
          Austria lays siege to Prague driving out occupying French troops.
        `),
        pointEvent("Treaty of Berlin", [1742, 7, 28], `
          The Treaty of Breslau is confirmed, ending the First Silesian War, with Prussia
          agreeing to neutrality with Austria and the League of Nymphenburg.
        `),
        top(),
        ...spacers(5),
        pointEvent("Battle of Campo Santo (Italy)", [1743, 2, 8], `
          Spain and allies from Naples attack an Austrian and Sicilian army in northern
          Italy but fight to a standstill.
        `),
        pointEvent("Battle of Simbach (Bavaria)", [1743, 5, 9], `
          Austria decisively defeat Bavaria and German allies en route to occupying most
          of Bavaria.
        `),
        pointEvent("Battle of Dettingen (Mainz)", [1743, 6, 27], `
          France fails to cut off Austrian, British and Hanoverian troops from
          resupplies. The allied troops are commanded by British King George II, the
          last time a British king commands troops in a battle.
        `),
        pointEvent("Treaty of Åbo (Russia/Sweden)", [1743, 8, 18], `
          The Russo-Swedish War comes to an end freeing up Russia to join the War of the
          Austrian Succession.
        `),
        pointEvent("Treaty of Worms", [1743, 9, 13], `
          Sardinia joins an alliance with Austria and Great Britain against France and
          HRE Charles VII. The treaty also shifted land from Austria to Sardinia which
          had previously been promised to Genoa.
        `),
        pointEvent("Treaty of Fontainebleau", [1743, 10, 25], `
          In response to the Treaty of Worms, a second Bourbon family pact (Second Pacte
          de Famille) is signed
          between French King Louis XV and his uncle, King Philip V of Spain. Spain
          agrees to send troops to support France against Austria in return for expansion
          within Italy.
        `),
        pointEvent("Battle of Toulon", [1744, 2, 22], `
          With French support, Spain breaks a two-year-old British naval blockade
          allowing Spain to land troops in northern Italy later in the year.
        `),
        pointEvent("Failed French invasion of Britain", /* circa */ [1744, 2, 25], `
          France plans a naval invasion of Great Britain from Dunkirk but storms destroy
          numerous ships on the planned day and the invasion never happens.
        `),
        pointEvent("Siege of Villafranca (mainland Sardinia)", [1744, 4, 27], `
          France and Spain drive out Sardinian and British troops from the Sardinian
          port town.
        `),
        pointEvent("Battle of Casteldelfino (Italy)", [1744, 7, 18], `
          France advances through northwestern Italy and defeats a Sardinian army led by
          Sardinian King Charles Emmanuel III.
        `),
        pointEvent("Battle of Velletri (Italy)", [1744, 8, 12], `
          Spanish and Naples decisively end Austria's attempt to invade Naples in a
          battle led by Naples' King Charles VII (the future Spanish King Charles III).
        `),
        pointEvent("Battle of Madonna dell'Olmo (Italy)", [1744, 9, 30], `
          France and Spain take the city of Cuneo from Sardinia and Austria but the
          battle is too costly to further the overall invasion and victory proves
          temporary.
        `),
        pointEvent("Battle of Bassignano (PENDING)", [1745, 9, 27], `
          
        `),
        top(),
        ...spacers(5),
        rangeEvent("Second Silesian War", [1744, 8, 7], [1745, 12, 25], `
          Shortly after the First Silesian War, Prussia (Frederick the Great) retains
          most of Silesia after an attack from Austria (Maria Theresa Habsburg) and
          Saxony as part of the War of Austrian Succession.
        `),
        pointEvent("HRE Charles VII dies", [1745, 1, 20], `
          Holy Roman Emperor Charles VII (Wittelsbach) of Bavaria dies at age 47. As
          Elector of Bavaria, he is succeeded by his eldest son, Maximilian III Joseph.
        `),
        pointEvent("Treaty of Füssen", [1745, 4, 22], `
          Bavaria agrees to leave the War of the Austrian Succession after being
          decisively defeated in the Battle of Pfaffenhofen. They also agree to support
          Maria Theresa's husband in the impending election for Holy Roman Emperor.
        `),
        pointEvent("HRE Francis I elected", [1745, 9, 13], `
          Francis (Lorraine), husband of Maria Theresa, is elected the next Holy Roman
          Emperor.
        `),
        top(),
        ...spacers(6),
        pointEvent("Battle of Piacenza (PENDING)", [1746, 6, 16]),
        pointEvent("Battle of Rottofreddo (PENDING)", [1746, 8, 10]),
        pointEvent("Battle of Assietta (PENDING)", [1747, 7, 19]),
      ]}
    />
  )
}
