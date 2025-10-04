function removeGame(game) {
  window.location.href = "https://lkunited.pythonanywhere.com/private/gameRemoving?game=" + game +\
                         "&name=" + getCookie("nameGame") + "&password=" + getCookie("passwordGame");
}

function addGame() {
    let game = prompt("Welches Spiel möchtest du hinzufügen?");
    window.location.href = "https://lkunited.pythonanywhere.com/private/gameAdding?game=" + game +\
                           "&name=" + getCookie("nameGame") + "&password=" + getCookie("passwordGame");
}