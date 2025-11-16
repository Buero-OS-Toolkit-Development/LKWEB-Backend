function checkCoffeePassCookie() {
    let passID = getCookie("coffeePass", document.cookie);
    if (passID != null && passID != "") {
        window.location.href = "https://lkunited.pythonanywhere.com/private/kaffeePass?id=" + passID;
    } else {
        alert("Keinen Kaffee-Pass Cookie gefunden.");
        setCookie("coffeePass", prompt("ID eingeben:"), 30);
    }
}

function setCoffeePassCookie(passID) {
    if (getCookie("coffeePass", document.cookie) == null) {
        setCookie("coffeePass", passID, 30);
    } else {
        renewCookie("coffeePass", 30);
    }
}