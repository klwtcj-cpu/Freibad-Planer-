document.getElementById("generateButton").addEventListener("click", function () {

    // Mitarbeiter
    let mitarbeiter = [];

    if (document.getElementById("oli").checked) mitarbeiter.push("Oli");
    if (document.getElementById("andi").checked) mitarbeiter.push("Andi");
    if (document.getElementById("chiara").checked) mitarbeiter.push("Chiara");
    if (document.getElementById("dieter").checked) mitarbeiter.push("Dieter");

    // Schichten
    let schichten = [];

    if (document.getElementById("frueh").checked) schichten.push("Frühschicht");
    if (document.getElementById("spaet").checked) schichten.push("Spätschicht");

    // Saison
    let start = new Date(2027, 4, 1);
    let ende = new Date(2027, 8, 10);

    let saison = [];
    let datum = new Date(start);

    while (datum <= ende) {
        saison.push(new Date(datum));
        datum.setDate(datum.getDate() + 1);
    }

    // Dienstplan
    let dienstplan = [];
    let index = 0;

    for (let tag of saison) {

        let heuteVergeben = [];

        for (let schicht of schichten) {

            if (mitarbeiter.length === 0) break;

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

            dienstplan.push({
    datum: tag.toLocaleDateString("de-DE"),
    schicht: schicht,
    person: person
});

            if (person !== "Keine Person verfügbar") {

                heuteVergeben.push(person);

                index++;

                if (index >= mitarbeiter.length) {
                    index = 0;
                }

            }

        }

    }

    let html = `
<h3>Dienstplan (${dienstplan.length} Schichten)</h3>

<table>
<tr>
    <th>Datum</th>
    <th>Schicht</th>
    <th>Mitarbeiter</th>
</tr>
`;

for (let eintrag of dienstplan) {

    html += `
    <tr>
        <td>${eintrag.datum}</td>
        <td>${eintrag.schicht}</td>
        <td>${eintrag.person}</td>
    </tr>
    `;
}

html += "</table>";

document.getElementById("status").innerHTML = html;

});