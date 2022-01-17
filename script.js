const params = new URLSearchParams(window.location.search);
const redirectLink = params.get("url");



location.replace(redirectLink);
