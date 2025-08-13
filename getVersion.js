async function getVersionLKWEB() {
    let version = await fetch("https://lkunited.pythonanywhere.com/version");
    let versionText = await version.text();
    return versionText;
}

document.getElementById("LKWEBversionText").innerText = await getVersionLKWEB();