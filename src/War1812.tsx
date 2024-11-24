import HorizontalTimeline, { pointEvent, rangeEvent, spacer, spacers, top } from "./HorizontalTimeline";

export default function War1812() {
  return (
    <HorizontalTimeline
      startYear={1809}
      endYear={1817}
      centerYear={1813}
      pixelsPerYear={180}
      events={[
        pointEvent("British naval policy clashes with the U.S.", [1811, 5, 8], `
          The United Kingdom's Orders in Council from 1807, passed to block naval commerce with Napoleon during the Napoleonic wars,
          cause multiple clashes with ships from the United States in May 1911. On May 1, Britain's HMS Guerriere stops the American
          USS Spitfire off of New Jersey and forces its apprentice sailing
          master into British military service. 15 days later, the American frigate USS President attacks the British ship Little Belt,
          misidentifying it as the HMS Guerriere, with the idea of rescuing that sailor. President routs Little Belt, nearly destroying
          her, further enflaming tensions and helping lead to war.
        `),
        pointEvent("Tecumseh's confederacy ruined at Tippecanoe", [1811, 11, 7], `
          Indiana Territorial Governor (and future President) William Henry Harrison marches on Prophetstown, the headquarters of the
          confederacy of natives assembled by the Shawnee leader, Tecumseh, as anti-American tensions mount. Harrison plans negotiation
          with Tecumseh's brother, Tenskwatawa, in Tecumseh's absence, but the confederacy instead attacks Harrison's army and is
          dealt a defeat from which
          it never fully recovers. Tecumseh joins the British forces in the area when war breaks out the following year.
        `),
        pointEvent("British Prime Minister assassinated", [1812, 5, 11], `
          British Prime Minister Spencer Perceval is assassinated by an English merchant, the only Prime Minister to be assassinated in
          British history. The merchant had been angry at having spent much of the prior decade in Russian prisons and believed the British
          government should compensate him. He is executed a week later. The British public support for war in America decreases.
        `),
        pointEvent("Madison war message to Congress", [1812, 6, 1]),
        pointEvent("British 1807 Orders of Council repealed", [1812, 6, 16]),
        pointEvent("U.S. DECLARES WAR ON THE U.K.", [1812, 6, 18]),
        pointEvent("Thousands of Americans captured at Detroit", [1812, 8, 16], `
          British and native forces lay siege to the town and fort of Detroit and intimidate the American general into surrendering,
          resulting in several thousand soldiers being captured.
        `),
        pointEvent("British win first major battle in Upper Canada", [1812, 10, 13], `
          American forces cross the Niagara River from New York into modern-day Ontario in the Battle of Queenston Heights, the first major
          fighting of the war. British Major General Brock is killed, as well as his aide-to-camp who tried to replace him, but another
          commander secures victory in defending the town.
        `),
        pointEvent("Madison re-elected", [1812, 11, 5]),
        pointEvent("Americans capture Upper Canadian capital", [1813, 4, 27], `
          American ships attack the Upper Canadian capital of York (modern-day Toronto) from Lake Ontario. Britain had unknowingly
          abandoned the main fort and left an explosive trap that explodes and kills dozens of Americans, including Brigadier
          General Zebulon Pike. Americans burn the fort and take supplies before leaving town.
        `),
        pointEvent("Creek War erupts among natives and U.S. in the south", [1813, 7, 22], `
          Native tribes in the southern United States begin warring with each other, and soon with American militias, as anti-American
          pressure is applied by Tecumseh and the British.
        `),
        pointEvent("Creek Indians take Alabama fort", [1813, 8, 30], `
          Anti-American Creek Indians known as Red Sticks storm Fort Mims in modern-day Alabama massacring hundreds of inhabitants and
          taking African slaves. Panic spread throughout southeast Americans clamoring for military protection.
        `),
        pointEvent("America seizes Lake Erie", [1813, 9, 10], `
          The U.S. Navy defeats and captures six British ships in the Battle of Lake Erie giving America control of the Great Lake for
          the first time since the start of the war. America retains control for the rest of the war, enabling it to recover Detroit and
          subsequently break up the Tecumseh confederacy.
        `),
        pointEvent("Tecumseh killed in Ontario battle", [1813, 10, 5], `
          Americans gaining control of Lake Erie forced Britain and Tecumseh's confederacy to withdraw from Detroit to Ontario. General
          and future President William Henry Harrison attacked them near the Indian settlement of Moraviantown on Ontario's Thames River.
          American forces were victorious in the Battle of the Thames and Tecumseh himself is killed during the battle which forces the
          British out of southwestern
          Ontario and effectively ends Indian involvement in the war's northern front.
        `),
        pointEvent("Americans abandon St. Lawrence campaign", [1813, 11, 11], `
          The Battle of Crysler's Farm in modern-day eastern Ontario forces the Americans to abandon the St. Lawrence campaign, an attempt
          to capture Montreal and divide British Canada in two. Initial attack from the Americans is disorderly and a brigadier general and
          his 2nd are both killed.
        `),
        top(),
        pointEvent("Creek War ends in American victory", [1814, 3, 27], `
          General Andrew Jackson leads Americans and pro-American natives in an assault on a stronghold of anti-American Creek Indians
          known as Red Sticks in modern-day central Alabama. The decisive victory in the Battle of Horseshoe Bend effectively ends the
          Creek War and forces the Red Sticks
          into Pensacola in Spanish West Florida.
        `),
        pointEvent("Napoleon abdicates", [1814, 4, 4], `
          The United Kingdom is freed from the Napoleonic wars when Napoleon abdicates and is exiled to the island of Elba. It is
          then able to redirect resources to America for the war in the United States.
        `),
        pointEvent("Creek War ends", [1814, 8, 9], `
          American General Andrew Jackson's crushing defeats of Creek Indians in the south forces the Creeks to sign the Treaty of
          Fort Jackson 
        `),
        pointEvent("BURNING OF WASHINGTON, D.C.", [1814, 8, 24], `
          American forces are overwhelmed and humiliated in Bladensburg, Maryland and British troops are burning buildings in
          Washington, D.C. the same night. It is the only time since the Revolution that a foreign army is in the American capital.
        `),
        pointEvent("British northern invasion thwarted", [1814, 9, 11], `
          Americans defend a combined land and naval attack at the Battle of Plattsburgh, New York on Lake Champlain, killing the
          naval squadron's captain and forcing the British out of the northern states.
        `),
        pointEvent("Americans defend Baltimore/Star Spangled Banner", [1814, 9, 14], `
          The British Navy attempts an attack on Baltimore but an invasion force is slowed by fierce resistance which manages to kill
          the British Major General. As a result, the main
          defense of Fort McHenry is able to prepare a defense and repel the ensuing naval attack. Francis Scott Key witnesses the
          bombardment on Fort McHenry and is inspired to write a poem which becomes The Star-Spangled Banner national anthem.
        `),
        pointEvent("Americans push British out of Pensacola", [1814, 11, 9], `
          Hearing that the British are in Spanish West Florida's Pensacola, arming anti-American Creek and other natives,
          General Andrew Jackson leads an army into
          the Battle of Pensacola. Britain abandons the area and Spain surrenders to the Americans which occupies Pensacola.
        `),
        pointEvent("TREATY ENDS THE WAR OF 1812", [1814, 12, 24], `
          The Treaty of Ghent (Belgium) is signed by the United States and United Kingdom, ending the War of 1812. The treaty restores
          borders to pre-war status. News of the treaty is too slow to prevent the Battle of New Orleans weeks later.
        `),
        pointEvent("U.S. defends New Orleans after treaty signed", [1815, 1, 8], `
          News of the Treaty of Ghent does not reach the American south in time to stop Britain from launching a failed attack on
          New Orleans. British failure on one bank of the Mississippi River leads to mass overall casualties, including at least two major
          generals and numerous British officers being killed. The final British casualty count is more than 20 times that of the Americans
          led by General Andrew Jackson.
        `),
        pointEvent("Last land battle between U.K. and U.S.", [1815, 2, 12], `
          British forces retreating from the disastrous Battle of New Orleans take Fort Bowyer near Mobile, Alabama, in the last land battle
          of the war. A planned attack on Mobile itself is stopped when British forces get word that the Treaty of Ghent had been signed the
          previous December. Britain withdraws entirely when news of final ratification eventually arrives.
        `),
        pointEvent("Treaty of Ghent ratified", [1815, 2, 17], `
          Final ratified copies of the Treaty of Ghent are exchanged between President Madison and the British ambassador.
        `),
        pointEvent("Treaty between natives and British ignored", [1815, 3, 10], `
          British Colonel Nicolls signs a treaty with Red Stick Creek Indians in Florida claiming to make the Creek subjects of Britain.
          The unauthorized treaty is never ratified and Nicolls is chastised by his commanders.
        `),
        pointEvent("Last land battle of the war", [1815, 5, 24], `
          Sauk Indians approach an American fort in modern-day Missouri, having never heard that the war had ended. American rangers
          intercept the tribes in what turns out to be the last land battle of the war.
        `),
      ]}
    />
  )
}
