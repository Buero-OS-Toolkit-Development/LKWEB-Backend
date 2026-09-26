function logout() {
    // logs out the user
    let sessionid = getCookie("sessionid");
    window.location.href = "https://lkunited.pythonanywhere.com/bank/logout?sessionid=" + sessionid;
}