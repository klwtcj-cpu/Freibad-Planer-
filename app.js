document.getElementById("generateButton").addEventListener("click", function () {

    let mitarbeiter = [];
let prozente = {};
    let wochentage = [];
    let schichten = [];
    let start = new Date(2027, 4, 1);   // 01.05.2027
let ende = new Date(2027, 8, 10);   // 10.09.2027

let saison = [];
let datum = new Date(start);

while (datum <= ende) {

    saison.push(new Date(datum));

    datum.setDate(datum.getDate() + 1);
}

    // Mitarbeiter
    if (document.getElementById("oli").checked) mitarbeiter.push("Oli");
    if (document.getElementById("andi").checked) mitarbeiter.push("Andi");
    if (document.getElementById("chiara").checked) mitarbeiter.push("Chiara");
    if (document.getElementById("dieter").checked) mitarbeiter.push("Dieter");

    // Wochentage
    if (document.getElementById("montag").checked) wochentage.push("Montag");
    if (document.getElementById("dienstag").checked) wochentage.push("Dienstag");
    if (document.getElementById("mittwoch").checked) wochentage.push("Mittwoch");
    if (document.getElementById("donnerstag").checked) wochentage.push("Donnerstag");
    if (document.getElementById("freitag").checked) wochentage.push("Freitag");
    if (document.getElementById("samstag").checked) wochentage.push("Samstag");
    if (document.getElementById("sonntag").checked) wochentage.push("Sonntag");

    // Schichten
    if (document.getElementById("frueh").checked) schichten.push("Frühschicht");
    if (document.getElementById("spaet").checked) schichten.push("Spätschicht");

    // Ausgabe
let text = "";

for (let tag of saison) {
    text += tag.toLocaleDateString("de-DE") + "<br>";
}

document.getElementById("status").innerHTML = text;

    // Dienstplan erzeugen
let dienstplan = [];
let index = 0;

for (let tag of saison) {

    let heuteVergeben = [];

    for (let schicht of schichten) {

        let person = mitarbeiter[index];

        while (heuteVergeben.includes(person)) {
            index++;

            if (index >= mitarbeiter.length) {
                index = 0;
            }

            person = mitarbeiter[index];

            if (heuteVergeben.length >= mitarbeiter.length) {
                person = "Keine Person verfügbar";
                break;
            }
        }

        let datum = tag.toLocaleDateString("de-DE");

dienstplan.push(datum + " - " + schicht + ": " + person);

        if (person !== "Keine Person verfügbar") {
            heuteVergeben.push(person);

            index++;

            if (index >= mitarbeiter.length) {
                index = 0;
            }
        }
    }
}
document.getElementById("status").innerHTML +=
    "<br><br><b>Dienstplan:</b><br>" +
    dienstplan.join("<br>");
});