// Mimozemský život
// Podívejte se na stránku existuje-mimozemsky-zivot.cz. Podle toho, v jakém období toto zadání čtete, se dozvíte, zda jsme již objevili život mimo planetu Zemi. Stránka zobrazuje pouze jednoduchou zprávu. Podobných stránek lze na internetu najít vícero. Například

// -sediuzbabis.cz
// -uzjepatek.cz
// 1. Vytvořte podobnou stránku s vaším vlastním tématem.

// 2. Vytvořte prázdnou stránku, do které vložte knihovnu Day.js.
// Vyberte si nějakou budoucí událost, jejíž datum je pevně určeno. Za pomoci knihovny Day.js vytvořte stránku zobrazující velké ANO nebo NE případně krátkou zprávu podle toho, zda už událost nastala či nikoliv.
// Bonus
// 1. Publikuje vaši stránku přes GitHub Pages (případně Netlify drop či jinou alternativu, pokud je znáte).

const dnes = dayjs();
const datumVanoc = dayjs('2024-12-24');
const odpoved = document.querySelector('h1');

if (dnes.isAfter(datumVanoc)) {
    odpoved.textContent = "Už je po Vánocích :-( ..musíš počkat na další..";
} else {
    odpoved.textContent = 'Jupí..Vánoce se blíží, můžeš se těšit na dárečky :-)'
}
