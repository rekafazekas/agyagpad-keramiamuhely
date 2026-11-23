# Agyagpad Kerámiaműhely – weboldaltervezési brief

Új, magyar nyelvű weboldal Fehér Dóra szentendrei kerámiaműhelyének. A műhely és a meghirdetett programok egy vizsgamunka mintavállalkozásához tartoznak.

## Kötött elemek és tervezői mozgástér

- **Arculat.** A `design-system.md` és az `agyagpad-arculat/` anyagai kötelezőek. A megadott logóváltozatokat, ikonokat, színeket, betűtípusokat és textúrákat az arculati útmutató szerint kell használni.
- **Oldalstruktúra.** Az `oldalstruktura.md` rögzíti az oldaltérképet, a navigációt, az oldalak szakaszait és azok sorrendjét. A három egyéni tanfolyam, a külön céges csapatépítő és a jelentkezéshez vezető út a terv része.
- **Webszövegek és drótváz.** A `weboldal-szovegek.md` és az `agyagpad-drotvaz.pdf` ajánlás. A szöveg, a képkivágás és a szakaszon belüli elrendezés módosítható, ha így jobban szolgálja a `brief-1-keramia.md` céljait. Például rövidíthető a programajánló, ha így a kezdő látogató könnyebben össze tudja vetni az alkalmakat. Az eredeti kiírást a később egyeztetett programkínálattal és a háromórás céges időtartammal együtt kell alkalmazni.

## Pozicionálás

Dóra kezdőket tanít korongozni, és kézzel készített használati kerámiát árul az udvari műhelyboltjában. Az elsődleges látogató olyan 25–45 éves városlakó, aki egyedül, a párjával vagy egy baráttal jönne alkotni. A legfeljebb hatfős csoportban Dórának jut ideje mellé ülni és megmutatni egy mozdulatot. Az első saját tálka kézzelfoghatóvá teszi, mit kap egy délelőtt alatt.

Az oldal fő célja a tanfolyami jelentkezés. Az ajándékot keresők utalványt kérhetnek vagy ellátogathatnak a boltba. A céges szervezők külön útvonalon egyeztethetnek időpontot.

## Márkahang és tónus

Dóra egyes szám első személyben, tegezve szól az olvasóhoz. A hangja közvetlen, türelmes és kissé játékos. Egy mozdulattal vagy hétköznapi tárggyal meséljen a munkájáról. A programválasztásnál az ár, az időigény és a jelentkezés menete legyen rögtön áttekinthető.

## Vizuális identitás

| Elem | Irány |
|---|---|
| Színek | Nyersagyag `#E8DFD3` a fő háttérhez, agyagszürke `#C6B9AD` a másodlagos felületekhez, égetett umbra `#382E2A` a szöveghez, vasoxid `#87574C` a fő gombokhoz. |
| Betű és logó | Georgia címsorok, Jost törzsszöveg és gombfeliratok. Asztali és mobilnézetben egyaránt kétsoros SVG-szólogó. |
| Fotó és textúra | Természetes oldalvilágítás, agyagos kéz, fa munkapad, kézbe vett edény. A nyitóképen a két kéz és az edény pereme mobilkivágásban is jól látszódjon. A matt kőagyag és a barna máz részletképei a műhelyhez tartoznak. |
| Elrendezés | A drótváz egy lehetséges elrendezést mutat. A szöveg az arculati útmutató szerinti egyszínű felületen legyen jól olvasható. Kerülendő a zsúfoltság és a fényes luxusüzletek kirakathatása. |

## Oldaltérkép az induláshoz

| Oldal | Feladat és a szakaszok sorrendje | Tartalom állapota |
|---|---|---|
| Főoldal · `/` | Meghívás a koronghoz, három egyéni program, külön céges sáv, következő alkalom, műhelybolt. | Szöveg és drótváz kész. A két fotó kiválasztandó. |
| Tanfolyamok · `/tanfolyamok` | Programok összevetése, a három egyéni program részletei, csapatépítő, az alkotástól az átvételig, utalvány, gyakori kérdések. | Szöveg, árak, alkalmak és GYIK készen. A program- és folyamatfotók kiválasztandók. |
| Műhely és alkotó · `/muhely-es-alkoto` | Dóra karrierváltása, a készítés lépései, bögrék, tálak és tányérok, személyes látogatás. | Szöveg és két anyagminta kész. A műhelyt és a tárgyakat illusztráló fotók kiválasztandók. |
| Kapcsolat · `/kapcsolat` | Jelentkezési és érdeklődési űrlap, majd megközelítés és nyitvatartás. | A mezők, a visszajelzések és az útleírás szövegjavaslata elkészült. A drótváz udvari útvonalrajza választható kiegészítés. |

A kerámiákat a látogató a műhelyboltban veheti kézbe. A látogatáshoz a helyszín és a nyitvatartás szükséges. Webshop és online fizetés nem része az indulásnak. Későbbi ütemre nincs kijelölt új oldal.

## A főoldal szakaszai

A szakaszok sorrendje rögzített. A táblázatban szereplő címek, gombfeliratok és képleírások a megvalósításhoz adnak kiindulópontot.

| Szakasz | Mit lát a látogató? | Továbblépés |
|---|---|---|
| Korongozás kezdőknek Szentendrén | Dóra rövid meghívása, legfeljebb hatfős csoport, kézközeli korongozásfotó. | Megnézem a tanfolyamokat |
| Melyik program illik hozzád? | Három szöveges ajánló egységes sorrendben az időigény és a cél megjelölésével. Mobilon egymás alá kerülnek. | A választott program részletei |
| Csapatépítőt szervezel? | Külön sáv a céges szervezőnek. Három óra közös korongozás legfeljebb hat főnek. | Megnézem a céges csapatépítőt |
| Következő alkalom | A legközelebbi meghirdetett foglalkozás neve, időpontja és ára. | Jelentkezem erre az alkalomra |
| Látogass el a műhelybe! | Bögre kézben, cím és nyitvatartás. | Körülnézek a műhelyben vagy Megnézem, hogyan jutok oda |

## Programkínálat

| Program | Időigény | Díj és időpont |
|---|---|---|
| Korongozó kóstoló | 1 × 3 óra | 18 000 Ft/fő. 2026. november 28. vagy december 5., 10–13 óra. |
| 3 alkalmas tanfolyam | 3 × 2,5 óra | 45 000 Ft/fő. 2027. január 12., 19. és 26., 18.00–20.30. |
| 4 hetes kezdő kurzus | 4 × 2,5 óra | 58 000 Ft/fő. 2027. január 14., 21., 28. és február 4., 18.00–20.30. |
| Céges csapatépítő | **3 óra**, alkalmanként legfeljebb 6 fő | **Egyeztetett kezdés és egyedi csoportdíj.** Két vagy több hatfős csapat külön alkalmakra kedvezményt kap. Rövid bemutató után mindenki saját tálkát korongoz. |

A részvételi díj tartalmazza az agyagot, a mázat és a két égetést. A kész darab az utolsó foglalkozás után két héttel vehető át, Dóra értesítése után. A jelentkezés, a fizetés, a lemondás, az utalvány és az átvétel részletes tudnivalói a Tanfolyamok oldal gyakori kérdései közé kerülnek.

## Jelentkezés és továbblépés

- A fejléc **Jelentkezés** gombja a Kapcsolat oldal űrlapjához visz. A főoldali **Megnézem a tanfolyamokat** gomb a választást segíti.
- A program részleteinél a választott tanfolyam, konkrét alkalomnál az időpont is kitöltve jelenik meg. A látogató módosíthatja a választást. Az űrlap nevet, e-mail-címet és létszámot kér. A beküldést az oldal azonnal jelzi, a helyet Dóra e-mailben igazolja vissza.
- A **Céges időpontot egyeztetek** gomb a céges űrlaphoz vezet. Az űrlap a kapcsolattartó nevét, e-mail-címét, a kívánt időpontot és a tervezett létszámot kéri.
- Az utalványt és a kerámiát külön témaként lehet kiválasztani. A látogatáshoz vezető hivatkozások közvetlenül a megközelítéshez ugranak. A mintaoldal címe 2000 Szentendre, Bogdányi út 32. A bolt csütörtöktől vasárnapig 10–18 óra között tart nyitva.

## Tartalomleltár és források

A szerkesztett webszövegek mind a négy oldalhoz rendelkezésre állnak. A képválogatás alapja az öt drótvázlap képszerkesztői jegyzete. A stockfotók munkafázist, hangulatot vagy tárgytípust szemléltetnek. Dóra bemutatásához az ablak melletti munkapad illik. Felismerhető stockszereplőt ne azonosítsunk Dóraként.

- [Eredeti feladatkiírás](../brief-1-keramia.md)
- [Oldaltérkép és szakaszok](../oldalstruktura.md)
- [Weboldalszövegek és űrlapfeliratok](../weboldal-szovegek.md)
- [Drótváz és képszerkesztői jegyzetek](../agyagpad-drotvaz.pdf)
- [Webes arculat, logóváltozatok, ikonok és anyagminták](../design-system.md)
