import HorizontalTimeline, { pointEvent, rangeEvent, spacer, spacers, top } from "./HorizontalTimeline";

export default function HundredYears() {
  return (
    <HorizontalTimeline
      startYear={1300}
      endYear={1495}
      centerYear={1350}
      pixelsPerYear={10}
      events={[
        pointEvent("England's King Edward II overthrown", [1327, 1, 25], `
          England's King Edward II is overthrown by his wife Isabella, the sister of France's King Charles IV. Their 
          14-year-old son becomes King Edward III but she rules as regent.
        `),
        pointEvent("France's King Charles IV dies", [1328, 2, 1], `
          France's King Charles IV dies at age 33 with no living direct male heirs. His closest living male relative is English King
          Edward III.
        `),
        pointEvent("Count of Valois named French King", [1328, 2, 1], `
          Despite Isabella claiming the French throne for her son, Edward III, France names Count Philip of Valois as King Philip VI.
          This disagreement leads to the Hundred Years' War.
        `),
        // pointEvent("England's Prince Edward born", [1330, 6, 15], `
        //   England's teenage King Edward III and his wife produce his first heir, Prince Edward of Woodstock, later known as The Black
        //   Prince. His birth heightened tensions between the young king and Roger Mortimer, who was acting as the de facto leader in
        //   support of Edward's mother, Isabella.
        // `),
        pointEvent("Edward III overthrows Mortimer", [1330, 10, 19], `
          Around his 18th birthday, England's King Edward III takes his mother and her supporter, Roger Mortimer, by surprise and captures
          them, ending the regency control of England. Isabella is imprisoned but spared while Mortimer is hanged the following month.
        `),
        pointEvent("Edward III agrees to Philip VI's ascendance", [1331]),
        pointEvent("England invades Scotland", [1332, 8, 6], `
          Second War of Scottish Independence begins when English ships land in southern Scotland and English forces win the Battle of
          Kinghorn.
        `),
        pointEvent("England welcomes French lord as refugee", [1334], `
          Robert III of Artois, on the run from a fraudulent scheme to claim the French throne, flees to England and is welcomed by
          England's King Edward III. Robert rises in Edward's court and helps convince him to dispute the French crown and go to war.
        `),
        pointEvent("France welcomes Scotland's king as refugee", [1334, 5, 14], `
          Scotland's King David II takes refuge in France, Scotland's ally, as war with the English intensifies. David is welcomed
          by France's King Philip VI, enraging England's King Edward III.
        `),
        pointEvent("Philip VI insists that Artois be extradited", [1336, 12, 26], `
          France's Philip VI officially insists that England extradite Robert III of Artois, who had been convicted in France of
          fraudulently attempting to claim the French throne.
        `),
        pointEvent("Philip VI seizes Edward III's land in France", [1337, 5, 24], `
          France's Philip VI declares that Edward III has forfeited the Duchy of Aquitaine in France for disobedience and not extraditing
          Philip's "mortal enemy", Robert III of Artois.
        `),
        pointEvent("HUNDRED YEARS WAR BEGINS", [1337, 10], `
          England's Edward III formally lays claim to the throne of France beginning hostilities between England and France that last over
          100 years.
        `),
        // pointEvent("Portsmouth, England burned", [1338, 3, 24], `
        //   A surprise French naval attack burns most of the port town of Portsmouth, England.
        // `),
        // pointEvent("Southampton, England destroyed", [1338, 10, 5]),
        pointEvent("England takes control of the English Channel at Sluys", [1340, 6, 24], `
          England scores a decisive victory in the naval Battle of Sluys (Flanders), killing over 15,000 Frenchmen including both
          commanding officers.
          England gains supremacy over the English Channel which allows them to lay siege to Tournai but fails to achieve strategic
          advantage.
        `),
        pointEvent("England routed at Saint-Omer", [1340, 7, 26], `
          After its decisive win at Sluys, England attempts to take the French town of Saint-Omer but French defenses kill thousands of
          English without even needing reinforcements.
        `),
        pointEvent("Failed English siege leads to truce", [1340, 9, 25], `
          England and a coalition of Holy Roman Empire states fail to outlast French defenses during the Siege of Tournai (modern-day
          Belgium). Instead, England's King Edward III and France's King Philip VI sign the Truce of Espléchin, intended to last nine
          months.
        `),
        rangeEvent("War of the Breton Succession disrupts truce", [1341, 4, 30], [1365, 4, 12], `
          With the Hundred Years War in a truce, the Duke of Brittany, John III, dies with no children triggering a succession crisis and
          civil war. England and France choose different sides in the war in violation of the truce between them. A truce in 1343 is
          short-lived and England wins important victories in 1346 and 1347. The French-supported Charles of Blois is captured in 1347
          but freed after a 1353 treaty was mishandled. The Black Death and the capture of French King John II in 1356 devastates France.
          War resumes in 1363 but effectively ends when the Charles of Blois is killed in a
          decisive 1364 victory for the English-backed John de Montfort in the Battle of Auray. The Treaty of Guérande is signed in 1365.
        `),
        rangeEvent("Black Death", [1346], [1353]),
        pointEvent("Battle of Crécy punctuates successful British invasion", [1346, 8, 26], `
          A French and Bohemian attack of an invading English army turned disastrous in the Battle of Crécy with the King of Bohemia,
          Duke of Lorraine and Counts of Blois and Flanders all being killed and King Philip VI being injured. The losses are so large
          that England then lays siege to the port of Calais, captures it, and controls it for over two centuries.
        `),
        // pointEvent("Robert III of Artois dies after battle", [1342, 11], `
        //   Robert III of Artois, a key figure in starting the Hundred Years' War, is injured during a Siege of Vannes during the War
        //   of the Breton Succession.
        // `),
        pointEvent("France's Philip VI dies, John II inherits", [1350, 8, 22], `France's King Philip VI dies around age 56, leaving two
          sons and his pregnant wife. His eldest son becomes King John II.
        `),
        pointEvent("France's John II captured at Poitiers, son Charles regent", [1356, 9, 19], `
          In the Battle of Poitiers, England's Prince of Wales, Edward (the Black Prince), routs an army led by French King John II. When
          retreat is cut off, John II is taken prisoner and France is left in a state of chaos. John II's eldest son, Charles, takes
          power as regent.
        `),
        pointEvent("Black Monday hail storm helps defeat English invasion", [1360, 4, 14], `
          During another attempt by England's Edward III to invade France, a siege of Chartres quickly failed when a hail and lightning
          storm killed 1,000 English soldiers, more than any previous battle in the war. The Reims campaign, intended to take the throne of
          France, instead ended in a peace treaty soon after.
        `),
        pointEvent("Treaty of Brétigny ends the Edwardian phase", [1360, 10, 24], `
          The Treaty Brétigny brings relative peace between England and France for the first time in decades after Edward III's invasion of
          France stalls out. The sides agree on land exchanges in France and Edward III agrees to rescinds his claim to the French throne.
          France's
          John II remains a prisoner of England but the ransom for him is reduced. Peace lasts for nine years and marks the end of the
          Edwardian phase of the Hundred Years' War.
        `),
        top(),
        pointEvent("France's John II dies in England, Charles V inherits", [1364, 4, 8], `
          The Treaty of Brétigny had allowed France's imprisoned King John II to return home to raise financial ransom with his
          son, Louis of Anjou, taking John's place as collateral. But Louis escaped back to France in 1363. John voluntarily returned
          to England, living a
          comfortable life but falls ill and dies in 1364 at age 44. His son, Charles, who has been acting as regent in John's
           absence becomes King Charles V.
        `),
        pointEvent("Castilian Civil War ends favorably for France", [1369, 3, 14], `
          The Castilian Civil War (modern-day north-central Spain) ends when the English-supported King Peter of Castile loses the Battle
          of Montiel and is captured. France supports Peter's half-brother Henry who kills Peter after the battle and becomes the new King
          of Castille. The war brings heavy losses and debt to England's Edward the Black Prince.
        `),
        pointEvent("War resumes in France", [1369, 4], `
          England's "Black Prince" Edward expends so much soldiers and money in the Castilian Civil War that he tries imposing taxes in
          England's French-side territory of Aquitaine. Leaders there appeal to France's King Charles V triggering resumption of the Hundred
          Years' War.
        `),
        pointEvent("English naval disaster at La Rochelle", [1372, 6, 23], `
          A Castilian fleet traps and destroys an entire English fleet trying to relieve a French siege in La Rochelle, possibly the worst
          defeat in English naval history to date. The commanding English Earl of Pembroke is taken prisoner for three years and dies
          shortly after being released.
        `),
        pointEvent("John of Gaunt's failed raid", [1373, 12], `
          John of Gaunt, the second surviving son of England's King Edward III, finishes a disastrous attempted raid (chevauchée) through
          France with thousands of soldiers and horses dead, sick, and starving.
        `),
        pointEvent("England's Black Prince dies", [1376, 6, 8], `
          England's Edward the Black Prince, the heir to King Edward III and a driving force for England's army in the war, dies from
          dysentery at age 45. His eldest surviving son, Richard of Bordeaux, becomes heir to the English throne.
        `),
        pointEvent("England's Edward III dies, Richard II inherits", [1377, 6, 21], `
          England's King Edward III dies at age 64. Having outlived Edward the Black Prince, his 10-year-old grandson becomes King
          Richard II. Edward leaves numerous children and grandchildren setting the stage for numerous English civil wars.
        `),
        pointEvent("Catholic schism begins", [1378, 9, 20], `
          Dissident Catholic cardinals elect a second pope following the death of Pope Gregory XI earlier in the year. The resulting
          schism in the Catholic church lasts nearly 40 years.
        `),
        pointEvent("France's Charles V dies, Charles VI inherits", [1380, 9, 16], `
          France's King Charles V dies at age 42. His 11-year-old son becomes King Charles VI.
        `),
        pointEvent("English Peasants' Revolt kills numerous officials", [1381, 6, 15], `
          Numerous English officials are murdered when peasants overrun London Tower during a months-long peasants' revolt led by Wat
          Tylor. Teenage King Richard II's teenage cousin and future King Henry IV is nearly one of the victims.
        `),
        pointEvent("England's Richard II marries HRE's daughter", [1382, 1, 20], `
          England's 15-year-old King Richard II marries Anne of Bohemia, the daughter of Holy Roman Emperor Charles IV, creating diplomatic
          ties with central Europe.
        `),
        pointEvent("Harelle revolt in France", [1382, 2, 24], `
          Revolt breaks out in various cities in France as war taxes, plague and an underage king contribute to decline and despair.
        `),
        rangeEvent("Portuguese interregnum", [1383, 10, 22], [1385, 10, 15], `
          Portugal's King Ferdinand I dies without a legitimate son causing another proxy war, with England supporting Ferdinand's
          illegitimate half-brother and France supporting Ferdinand's son-in-law from Castile. After two dominating victories in 1385,
          assisted by English archers,
          Ferdinand's half-brother secures Portugal's independence from Castile and becomes King John I.
        `),
        pointEvent("England invades French-supported Scotland", [1385, 7], `
          England's King Richard II re-ignites fighting with Scotland by invading in retaliation for Scottish border raids and Scotland
          allying with France. The invasion comes during stressful financial times for England and does not go well leading to Richard's
          decreasing popularity. It also deepens division between Richard and his uncle John of Gaunt who preferred to invade France.
        `),
        pointEvent("Richard II's advisors impeached", [1388, 5, 12], `
          Many members of England's King Richard II court are impeached, executed and/or exiled after a schism between Richard and a
          powerful
          group of nobles (including Richard's uncle as well as first cousin and future king Henry Bolingbroke) turns violent months
          earlier.
        `),
        pointEvent("Truce of Leulinghem ends the Caroline phase", [1389, 7, 18], `
          After years of internal struggles in England, King Richard II signs a truce with France's King Charles VI. The truce ends the
          20-year-long Caroline phase of the Hundred Years' War.
        `),
        top(),
        pointEvent("France's Charles VI mental illness", [1392], `
          France's King Charles VI starts showing signs of severe mental illness that recurs for the rest of his life.
        `),
        pointEvent("Richard II arrests his uncle Woodstock", [1397, 9, 9], `
          With the return of Richard II's uncle, John of Gaunt, Richard reverses his losses of the late 1380s and overthrows the nobles
          that wrecked his court in 1388. Among the nobles are his youngest uncle, Thomas of Woodstock, who is arrested by the king
          personally
          and is soon murdered in custody. Richard spares another conspirator, his first cousin, John of Gaunt's son, Henry Bolingbroke.
          Henry would soon overthrow Richard and become king.
        `),
        pointEvent("Heir to the English throne killed", [1398, 7, 20], `
          Roger Mortimer, the 4th Earl of March, and the heir to the throne of England as the grandson of Edward III's second son, is
          killed at age 24 during a skirmish in Ireland. Roger is heir to the throne because
          King Richard II, son of Edward III's first son, has no living siblings or offspring. Roger's 6-year-old son, Edmund,
          is next in line as the head of the Mortimer family.
        `),
        pointEvent("John of Gaunt dies", [1399, 2, 3], `
          England's Prince John of Gaunt, King Richard II's uncle and one of his few allies, dies of natural causes at age 58. 
          The only impediment remaining between John's son, Henry Bolingbroke, and the throne is the Mortimer family, descended
          from Edward III's second son (John is Edward's third son), but currently led by a 7-year-old boy, Edmund, Earl of March. Henry
          would soon bypass Edmund and overthrow Richard to become king.
        `),
        pointEvent("Richard II overthrown by Henry IV", [1399, 10, 1], `
          England's King Richard II relinquishes the crown to his first cousin, Henry Bolingbroke, son of John of Gaunt, who becomes
          King Henry IV. Richard, who has no siblings or children, had overseen poor results from the war for his entire reign, fought
          with parliament and his own family,
          and was viewed as a tyrant in recent years, including the arrest and subsequent death of his own uncle, Thomas of Woodcock.
          With Richard in Ireland avenging the killing of his heir, Roger Mortimer, Henry had returned from exile in France, and arrested
          the king. Despite being the son of Edward III's third son,
          Henry overrides the claim of Mortimer's son Edmund, the great grandson of Edward III's second son, by highlighting
          Edmund's age, the
          female inclusion in Edmund's line and Henry's own descent from the powerful Lancaster line through his mother.
        `),
        pointEvent("Failed rebellion in England", [1400, 1, 7], `
          A plan to restore Richard II to the throne of England by abducting and murdering King Henry IV during an Epiphany feast fails
          when Henry is tipped off to the plot and does not attend the feast. The plotters escape but are rounded up and executed at various
          times in various places. It is believed Henry changes his mind after this attempt and decides to have the captive Richard killed
          the following month.
        `),
        pointEvent("Richard II dies in captivity", [1400, 2, 14], `
          England's deposed former King Richard II dies, possibly from starvation, while held captive. It is believed King Henry IV
          decided Richard was too dangerous to be left alive after a murder and restoration plot failed the prior month.
        `),
        pointEvent("England repels Scottish invasion", [1402, 9, 14], `
          Months after Scotland launches an invasion of northern England, Henry Percy, Earl of Northumberland, and his son, Henry "Hotspur",
          soundly defeat the Scots, taking several nobles prisoner. King Henry IV, 2nd cousin to the Percys, refuses to let them ransom
          their prisoners contributing to them rebelling against him in the following years.
        `),
        pointEvent("English rebel Hotspur killed in battle", [1403, 7, 21], `
          The Percy rebellion against their cousin, King Henry IV, comes to an end in the Battle of Shrewsbury where Henry "Hotspur"
          Percy is killed, his uncle is captured (and soon executed), and other rebel leaders are also captured. The Percys had joined a
          Welsh rebellion against the crown when the king
          refused the Percys wish to ransom captured Scottish prisoners, and refused to pay a Welsh ransom for another cousin and
          Hotspur's brother-in-law, Edmund Mortimer IV (whom Henry bypassed in the line of succession).
        `),
        pointEvent("Duke of Orléans assassinated", [1407, 11, 23], `
          In a battle for the Regency of France in lieu of King Charles VI's insanity, Charles's brother, Louis, the Duke of Orléans is
          assassinated at the direction of his first cousin, John I, Duke of Burgundy. The decades-long Armagnac-Burgundian Civil War
          results from the assassination.
        `),
        pointEvent("England's Henry IV dies, son Henry V inherits", [1413, 3, 20], `
          England's King Henry IV dies of natural causes at age 45 in London. His eldest son, the Prince of Wales, becomes King Henry V.
        `),
        pointEvent("Southampton Plot", [1415, 7, 31]),
        pointEvent("Henry V invades France", [1415, 8, 13], `
          England's King Henry V arrives in France starting the Lancastrian phase of the Hundred Years' War, invading while France is
          in civil war under an insane king.
        `),
        pointEvent("England wins decisively at Agincourt", [1415, 10, 25], `
          England, led by King Henry V, notches a legendary victory in France against enormous odds at the Battle of Agincourt. French
          casualties may exceed
          English by 100 times with their dead including dukes, counts, a viscount, an admiral, thousands of knights and some entire
          noble families. So many French prisoners are taken that Henry orders them killed, likely for fear of them turning
          and overwhelming him before the battle is over. The battle is so decisive that the overall war turns in England's favor and
          boosts its morale for decades.
        `),
        pointEvent("Duke of Burgundy assassinated", [1419, 9, 10], `
          John I, Duke of Burgundy, who had assassinated the Duke of Orléans 12 years earlier triggering a civil war, is himself
          assassinated by counsellors of the king's heir, the Dauphin Charles. The assassination happens during a meeting to discuss
          the civil war, with England sweeping through France since Agincourt four years earlier. Burgundy's heir signs a treaty with
          England the following year disinheriting the Dauphin.
        `),
        pointEvent("Treaty makes Henry V the French heir apparent", [1420, 5, 21], `
          England's King Henry V and France's King Charles VI sign the Treaty of Troyes disinheriting Charles' son from the French throne
          in favor of Henry, and marrying Charles' daughter Catherine to Henry. Henry has been leading England in a
          dominating military campaign through France starting with the crushing victory at Agincourt five years earlier. Eight months
          earlier, Charles' son was implicated in the assassination of the Duke of Burgundy, enflaming the French civil war instead of
          ending it.
        `),
        pointEvent("Henry V's brother killed in battle", [1421, 3, 22], `
          After marriage, England's King Henry V returns to England, leaving his brother and heir apparent, Thomas, Duke of Clarence,
          in charge in France. Clarence conducts successful raids but a surprise attack on French and Scottish forces backfires and
          Clarence and other English nobles are killed in the Battle of Baugé.
        `),
        pointEvent("Henry V dies, infant son Henry VI inherits", [1422, 8, 31], `
          England's King Henry V returns to France where he is heir to the throne, but he becomes ill and dies at age 35. His
          8-month-old son becomes King Henry VI, the youngest king in English history, and a regency council is formed including
          his father's brothers. His mother, the daughter of French King Charles VI, is largely denied a role in his upbringing.
          Henry VI is also made the heir to the French throne per the Treaty of Troyes two years earlier.
        `),
        pointEvent("Charles VI dies, grandson Henry VI inherits", [1422, 10, 21], `
          French King Charles VI dies at age 53 after decades of mental illness. His son, the Dauphin, having been disinherited by the
          Treaty of Troyes two years earlier, is still recognized by some French as King Charles VII, but Charles VI is crowned
          replaced by his 10-month grandson who had become England's King Henry VI just two months earlier. Charles VII continues
          battling England in France to restore himself to the throne.
        `),
        top(),
        pointEvent("France and Scotland devastated at Verneuil", [1424, 8, 17], `
          England's Duke of Bedford, uncle of toddler King Henry VI, scores a decisive victory over France at Verneuil in Normandy
          killing numerous French nobles and virtually knocking Scotland out of the Hundred Years' War entirely. French morale is
          dealt a second major blow after the defeat at Agincourt nine years earlier.
        `),
        pointEvent("Joan of Arc relieves Siege of Orléans", [1429, 4, 29], `
          Devout Catholic French teenaged peasant Joan of Arc arrives at Orléans to boost morale during months of English and
          Burgundian siege. Joan had told of a divine vision and claimed to be a prophetical virgin girl who would lead France to
          victory and restore Dauphin Charles VII to his rightful place on the throne. She finally met and impressed
          Charles, convincing him to send her to Orléans to restore morale to his troops. Less than two weeks later, England
          retreated from Orléans.
        `),
        pointEvent("Charles VII crowned King of France", [1429, 7, 17], `
          Dauphin Charles, son of former King Charles VI, is crowned King Charles VII. Alongside hero Joan of Arc, Charles's army
          routs the English at Patay and makes its way to Reims where he is coronated, with Joan given a place of honor at the
          ceremony.
        `),
        pointEvent("France fails to take back Paris", [1429, 8, 8], `
          New King Charles VII, encouraged by Joan of Arc, fail to take Paris after more than seven years of English/Burgundian
          occupation. Faith in Joan is shaken as her direct leadership leads to heavy French casualties and retreat.
        `),
        pointEvent("Joan of Arc captured during a siege", [1430, 5, 23], `
          Joan of Arc contributes to the defense of the town of Compiègne, under siege by the English-backed Duke of Burgundy, but is
          captured in action and turned over to English custody.
        `),
        pointEvent("Joan of Arc burned at the stake", [1431, 5, 30], `
          French religious and military inspiration, 19-year-old Joan of Arc, is executed by being burned at the stake a year after
          being captured during an Anglo-Burgundian siege in France.
        `),
        pointEvent("English/Burgundy link broken", [1435, 9, 21], `
          Burgundy agrees to recognize French King Charles VII with the Treaty of Arras, severing Burgundy's link with England. The treaty
          comes after the Congress of Arras where England's demands are considered unreasonable. Without Burgundy, England's power in
          France dwindles.
        `),
        pointEvent("Marriage truce for Henry VI", [1444, 5, 28], `
          England and France sign the Treaty of Tours arranging the marriage of England's King Henry VI with Margaret of Anjou, the
          niece (by marriage) of France's King Charles VII. The treaty is viewed poorly by England as the match is poor and France uses
          the time to strengthen its army to push England out of Normandy.
        `),
        pointEvent("England's last Normandy army defeated", [1450, 4, 15], `
          France post-truce sweep through Normandy annihilates the last major English army in Normandy in the Battle of Formigny.
        `),
        pointEvent("English defeat ends Hundred Years' War", [1453, 7, 17], `
          France defeats England at the Battle of Castillon, killing the English commander and his son, effectively ending the
          Hundred Years' War. England is left with almost no landing holdings in France and political instability triggers
          civil war in England.
        `),
        top(),
        pointEvent("Civil War breaks out in England", [1455, 5, 22], `
          Tensions between King Henry VI and his cousin, the Duke of York, launch the War of the Roses when Henry is taken prisoner
          and his closer cousin and favourite, the Duke of Somerset
          is killed by York's army in the Battle of St. Albans. The king and Somerset were en route to a council for how to deal with
          York when intercepted by York's army.
        `),
      ]}
    />
  )
}
