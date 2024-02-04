const menus = ['Pizza Rolls', 'Pizza 4U&Me'];
const prices = [1.99, 13.00];
const amounts = [6, 2];

function render() {
    let index = document.getElementById('index');
    index.innerHTML = '';
    index.innerHTML += generateIndexHTML();
}

function generateIndexHTML() {
    return /*html*/`
        <div class="header"><img class="logo" src="./icon/besteck.png" onclick="goToHomepage()" class="AppIcon"><h1>Food2U</h1></div>
        <div class="mainArea">
            <div id="menuList" class="menusArea"></div>
            <div id="basket" class="basketArea"></div>
        </div>
        `;
}

function navigateToHome() {
    window.location.href = "./index.html";
}