if (getCookie("nameGame") != "") {
    renewCookie("nameGame", 7);
    renewCookie("passwordGame", 7);
    document.getElementById("message").innerText = "Angemeldet als " + getCookie("nameGame");
} else {
    alert("Bitte melde dich erneut an, da deine Sitzung abgelaufen ist.");
    window.location.href = "https://lkunited.pythonanywhere.com/private/loginGame";
}