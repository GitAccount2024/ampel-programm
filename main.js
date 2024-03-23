function main() {

    var input = document.getElementById("inputColor");

    var color = input.value;
    
    var lowerColorName = color.toLowerCase();

    if (lowerColorName == "grün") {
        alert("Du darfst fahren");
    } else if (lowerColorName == "orange") {
        alert("Fahren/bremsen");
    } else if (lowerColorName == "rot") {
        alert("Du musst halten");
    } else {
        alert("Keine gültige Ampel-Farbe eingetragen")
    }
}
 
