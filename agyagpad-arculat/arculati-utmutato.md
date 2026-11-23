# Agyagpad Kerámiaműhely

## Szólogó

Az „Agyagpad” felirat íves A-ja és a g betűk visszaforduló hurkai a puha agyagba húzott vonalat idézik. A betűrajz mindkét elrendezésben azonos. Az SVG-fájlok átlátszó hátterűek, a betűk vektoros görbékből állnak.

| Felhasználás | Javasolt változat |
| --- | --- |
| Széles webes fejléc | Egysoros logó, legalább 245 px szélességben |
| Keskeny fejléc, ajándékutalvány, műhelytábla | Kétsoros logó, legalább 150 px szélességben |
| Nyersagyagszínű alap | Színes logó umbra névvel és vasoxid színű „Kerámiaműhely” felirattal |
| Agyagszürke alap | Sötét, umbra színű logó |
| Sötétbarna alap | Világos, nyersagyagszínű logó |
| Egy festékkel készülő nyomat, bélyegző | Egyszínű fekete mesterrajz |

Hagyj a logó körül legalább fél nagy A-nyi szabad helyet. Az ikonhoz a szólogó első betűjét használd.

## Színek és felületek

| Szín | HEX | Szerep |
| --- | --- | --- |
| Nyersagyag | `#E8DFD3` | Fő háttér, felirat sötét gombon |
| Agyagszürke | `#C6B9AD` | Másodlagos háttér, például a tanfolyamkártyák közös sávja |
| Vasoxid | `#87574C` | Jelentkezési gomb, kétszínű logó második szava |
| Égetett umbra | `#382E2A` | Törzsszöveg, címsor, sötét háttér |

A nagy felületeket a nyersagyag és az agyagszürke ossza meg. A vasoxidot egy-egy hangsúlyra tartogasd. A nyersagyag és az umbra kontrasztaránya 10,00:1. A vasoxid gombon a nyersagyagszínű feliraté 4,55:1.

A matt, kiégetett kőagyag bordáiból széles képsáv vágható a műhely bemutatásához. A fényes, barna máz jól működik kisebb részletképként a kész tárgyak mellett. Hosszabb szöveghez használj sima nyersagyag hátteret. A csomagban szereplő két képfájl generált anyagtanulmány.

## Betűhasználat

| Elem | Betűcsalád | Javasolt webes beállítás |
| --- | --- | --- |
| Főcím | Georgia Regular | 36–60 px, 1,12-es sormagasság |
| Szakaszcím | Georgia Regular | 28–40 px, 1,18-as sormagasság |
| Törzsszöveg | Trebuchet MS Regular | 17–19 px, 1,55-ös sormagasság |
| Gomb, navigáció | Trebuchet MS Bold | 16–18 px, 1,3-as sormagasság |

A betűk megjelenítéséhez a látogató gépén elérhető készleteket használhatod. A kézzel rajzolt szólogót az SVG-ből illeszd be.

```css
:root {
  --nyersagyag: #e8dfd3;
  --agyagszurke: #c6b9ad;
  --vasoxid: #87574c;
  --egetett-umbra: #382e2a;
  --cimsor: Georgia, "Times New Roman", serif;
  --torzsszoveg: "Trebuchet MS", Arial, sans-serif;
}
```

## Böngészőikon és iPhone

Másold az `ikonok` mappát a webhely gyökerébe. A HTML-oldalak `head` részébe az alábbi hivatkozások kerüljenek. Az iPhone főképernyőjéhez készült PNG 180 × 180 képpontos, tömör umbra háttérrel. A lekerekítést az operációs rendszer adja hozzá.

```html
<link rel="icon" href="/ikonok/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/ikonok/favicon.svg" type="image/svg+xml" sizes="any">
<link rel="apple-touch-icon" sizes="180x180" href="/ikonok/apple-touch-icon.png">
```
