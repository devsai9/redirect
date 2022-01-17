document.getElementById("status").innerHTML = "Status: Getting URL Redirect Link Parameters";
const params = new URLSearchParams(window.location.search);
const redirectLink = params.get("url");



location.replace(redirectLink);
