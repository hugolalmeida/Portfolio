let d = new Date();

let year = (document.querySelector(".currentyear").textContent =
  d.getFullYear());

let last_update = (document.querySelector("#jscript").textContent =
  document.lastModified);


// Toggle language switch
const languageSwitch = document.getElementById('languageSwitch');

languageSwitch.addEventListener('change', () => {
    // You can add logic here to change the language of your portfolio
    if (languageSwitch.checked) {
        // Change to language B
        console.log('Switched to Language B');
    } else {
        // Change to language A
        console.log('Switched to Language A');
    }
});