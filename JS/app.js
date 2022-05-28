const ft = new fetch();
var ui = new UI();

const search = document.getElementById("searchUser");
const button = document.getElementById("submit");
button.addEventListener("click", () => {
    const currentVal = search.value;

    ft.getCurrent(currentVal).then((data) => {
        UI.populateUI(data);
        UI.saveToLS(data);
    
    });
});

window.addEventListener("DOMContentLoaded", () => {
    const dataSaved = UI.getFromLS();
    UI.populateUI(dataSaved);
});