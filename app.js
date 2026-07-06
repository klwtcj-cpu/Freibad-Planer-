document.getElementById("generateButton").addEventListener("click", function () {

    let mitarbeiter = [];

    if (document.getElementById("oli").checked) mitarbeiter.push("Oli");
    if (document.getElementById("andi").checked) mitarbeiter.push("Andi");
    if (document.getElementById("chiara").checked) mitarbeiter.push("Chiara");
    if (document.getElementById("dieter").checked) mitarbeiter.push("Dieter");

    document.getElementById("status").innerHTML =
        "Ausgewählt: " + mitarbeiter.join(", ");

});