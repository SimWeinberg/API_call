async function apiFun() {
    var response = await fetch("https://api.github.com/users/SimWeinberg");
    var coderData = await response.json();
    document.getElementById("response").src = coderData.avatar_url
}