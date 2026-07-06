document.getElementById("generateButton").addEventListener("click", function () {

    let mitarbeiter = [];
    let wochentage = [];
    let schichten = [];

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
document.getElementById("status").innerHTML =
    "<b>Mitarbeiter:</b> " + mitarbeiter.join(", ") +
    "<br><b>Wochentage:</b> " + wochentage.join(", ") +
    "<br><b>Schichten:</b> " + schichten.join(", ");