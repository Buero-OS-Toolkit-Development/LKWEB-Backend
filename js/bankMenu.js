function logout() {
    // logs out the user
    let sessionid = getCookie("sessionid");
    window.location.href = "https://lkunited.pythonanywhere.com/bank/logout?sessionid=" + sessionid;
}

function sessionIdCookie(sessionid) {
    // sets the sessionid cookie
    if (getCookie("sessionid", document.cookie) == "") {
        setCookie("sessionid", sessionid, 7);
    } else {
        renewCookie("sessionid", 7)
    }
}