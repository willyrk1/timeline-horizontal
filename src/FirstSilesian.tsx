import "./App.css";
import HorizontalTimeline, { pointEvent, rangeEvent, spacer, top } from "./HorizontalTimeline";

export default function FirstSilesian() {
  return (
    <HorizontalTimeline
      startYear={1740}
      endYear={1743}
      centerYear={1743}
      pixelsPerYear={500}
      events={[
        pointEvent("HRE Charles VI (Habsburg) dies", [1740, 10, 20], `Charles VI
          (Habsburg), Holy Roman Emperor, dies at age 55 without a male heir leading to the
          War of Austrian Succession.
        `),
        pointEvent("Prussia invades Silesia", [1740, 12, 16], `
          Prussia takes advantage of Austria's succession crisis by invading Austrian-held
          Silesia starting the First Silesian War and the War of the Austian Succession.
          With light resistance, Prussia controlled most of Silesia by late
          January 1941.
        `),
        rangeEvent("First Silesian War", [1740, 12, 16], [1742, 6, 11], "Prussia (Frederick the Great) seizes most of Silesia from Austria (Maria Theresa Habsburg) as part of the War of Austrian Succession."),
        pointEvent("Battle of Mollwitz (Silesia)", [1741, 4, 10], `
          Austria tries to break Prussia's control of Silesia and force Frederick II to flee
          but Prussia holds in the end.
        `),
        pointEvent("Treaty of Nymphenburg", [1741, 5, 28], `
          Spain (King Philip V) agrees to support Bavaria's Prince-Elector Charles Albert to
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
        pointEvent("Charles Albert elected Holy Roman Emperor", [1742, 1, 24], `
          Bavarian Prince-Elector and King of Germany Charles Albert (Wittelsbach) is
          elected Holy Roman Emperor. He becomes the first non-Habsburg Holy Roman
          Emperor in 300 years.
        `),
        pointEvent("Charles Albert crowned Holy Roman Emperor", [1742, 2, 12]),
        pointEvent("Austria captures Munich", [1742, 2, 12], `
          Austria's move into Bavaria captures its largest city of Munich. By the end of
          February, Austria occupies much of Bavaria and most of Bohemia.
        `),
        pointEvent("Allies capture Iglau", [1742, 2, 15], `
          Prussia, Saxony and France push into Moravia seizing the city
          of Iglau, but reluctant France then breaks off on its own.
        `),
        pointEvent("Moravian campaign withers", [1742, 4, 5], `
          After Saxony also abandons the allied Moravian campaign, Prussia withdraws
          into Bohemia and Upper Silesia.
        `),
        pointEvent("Battle of Chotusitz", [1742, 5, 17], `
          With Moravia secure, Austria attempts to move towards liberating Prague but are
          intercepted by Frederick the Great with high casualties on both sides.
        `),
        pointEvent("Battle of Sahay", [1742, 5, 24], `
          France withstands an attack by Austria trying to repel invaders from Bohemia.
        `),
        pointEvent("Treaty of Breslau", [1742, 6, 11], `
          With Britain threatening to pull funding for Austria, Maria Theresa agrees to the
          Treaty of Breslau which ends the First Silesian War. Austria concedes most of
          Silesia and other lands to Prussia.
        `),
        pointEvent("Treaty of Berlin", [1742, 7, 28], `
          The Treaty of Breslau is confirmed, ending the First Silesian War, with Prussia
          agreeing to neutrality with Austria and the League of Nymphenburg.
        `),
      ]}
    />
  )
}
