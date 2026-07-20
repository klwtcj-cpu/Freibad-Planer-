document.getElementById("generateButton").addEventListener("click", function () {

    // Mitarbeiter
    let mitarbeiter = [];

if (document.getElementById("oli").checked) {
    mitarbeiter.push({
        name: "Oli",
        prozent: 100,
        schichten: 0,
        arbeitstage: 0,
        freiBis: null,
        wochenenden: 0,
        letzteSchicht: ""
    });
}

if (document.getElementById("andi").checked) {
    mitarbeiter.push({
        name: "Andi",
        prozent: 100,
        schichten: 0,
        arbeitstage: 0,
        freiBis: null,
        wochenenden: 0,
        letzteSchicht: ""
    });
}

if (document.getElementById("chiara").checked) {
    mitarbeiter.push({
        name: "Chiara",
        prozent: 100,
        schichten: 0,
        arbeitstage: 0,
        freiBis: null,
        wochenenden: 0,
        letzteSchicht: ""
    });
}

if (document.getElementById("dieter").checked) {
    mitarbeiter.push({
        name: "Dieter",
        prozent: 100,
        schichten: 0,
        arbeitstage: 0,
        freiBis: null,
        wochenenden: 0,
        letzteSchicht: ""
    });
}

    if (document.getElementById("oli").checked) mitarbeiter.push("Oli");
    if (document.getElementById("andi").checked) mitarbeiter.push("Andi");
    if (document.getElementById("chiara").checked) mitarbeiter.push("Chiara");
    if (document.getElementById("dieter").checked) mitarbeiter.push("Dieter");

    // Schichten
    let schichten = [];

    if (document.getElementById("frueh").checked) schichten.push("Frühschicht");
    if (document.getElementById("spaet").checked) schichten.push("Spätschicht");

    let urlaubText = document.getElementById("urlaub").value;

let urlaub = {};

let zeilen = urlaubText.split("\n");

for (let zeile of zeilen) {

    if (!zeile.includes(":")) continue;

    let teile = zeile.split(":");

    let name = teile[0].trim();
    let datum = teile[1].trim();

    if (!urlaub[name]) {
        urlaub[name] = [];
    }

    urlaub[name].push(datum);
}

    // Saison
    let start = new Date(2027, 4, 1);
    let ende = new Date(2027, 8, 10);

    let saison = [];
    let datum = new Date(start);

    while (datum <= ende) {
        saison.push(new Date(datum));
        datum.setDate(datum.getDate() + 1);
    }
function findeMitarbeiter(mitarbeiter) {

    let bester = null;

    for (let person of mitarbeiter) {

        if (bester === null) {
            bester = person;
            continue;
        }

        if (person.schichten < bester.schichten) {
            bester = person;
        }
    }

    return bester;
}
    // Dienstplan
    let dienstplan = [];

    for (let tag of saison) {

        let heuteVergeben = [];

        for (let schicht of schichten) {

            if (mitarbeiter.length === 0) break;

            let person = findeMitarbeiter(mitarbeiter);
            let datumText = tag.toLocaleDateString("de-DE");



            dienstplan.push({
    datum: tag.toLocaleDateString("de-DE"),
    wochentag: tag.toLocaleDateString("de-DE", { weekday: "long" }),
    schicht: schicht,
    person: person
});

            if (person !== "Keine Person verfügbar") {

                heuteVergeben.push(person);
                person.schichten++;
person.arbeitstage++;

}

            }

        }

    }

    let html = `
<h3>Dienstplan (${dienstplan.length} Schichten)</h3>

<table>
<tr>
    <th>Datum</th>
<th>Wochentag</th>
<th>Schicht</th>
<th>Mitarbeiter</th>
</tr>
`;

for (let eintrag of dienstplan) {

    html += `
    <tr>
        <td>${eintrag.datum}</td>
<td>${eintrag.wochentag}</td>
<td>${eintrag.schicht}</td>
<td>${eintrag.person}</td>
    </tr>
    `;
}

html += "</table>";

document.getElementById("status").innerHTML = html;

});