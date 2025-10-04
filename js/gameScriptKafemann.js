function removeGame(game) {
  window.location.href = "https://lkunited.pythonanywhere.com/private/gameRemoving?game=" + game + "&name=" + getCookie("nameGame", document.cookie) + "&code=" + getCookie("passwordGame", document.cookie);
}

function addGame() {
    let game = prompt("Welches Spiel moechtest du hinzufuegen?");
    window.location.href = "https://lkunited.pythonanywhere.com/private/gameAdding?game=" + game + "&name=" + getCookie("nameGame", document.cookie) + "&code=" + getCookie("passwordGame", document.cookie);
}