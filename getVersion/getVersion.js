async function getVersionLKWEB() {
    let version = await fetch("https://lkunited.pythonanywhere.com/version");
    let versionText = await version.text();
    return versionText;
}

async function getVersionLKWEBAgent() {
    document.getElementById("LKWEBversionText").innerText = await getVersionLKWEB();
    console.log("LKWEB version fetched successfully.");
}