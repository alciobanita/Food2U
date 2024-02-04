let menus = [
    {
        "name": "Pizza 1",
        "price": "9.50 €",
        "description": "Pepperoni und Champignons",
        "amount": "1"
    },
    {
        "name": "Pizza 2",
        "price": "7.75 €",
        "description": "Veggie lovers: Pepperoni, Sucuck, Zwiebel, Knoblauch, schwarze oder grüne Oliven, Champignons und Oregano.",
        "amount": "1"
    },
    {
        "name": "Pizza Rolls",
        "price": "6.99 €",
        "description": "Mini-Pizza's mit Tomatensauce, Olivenöl und Mozzarella.",
        "amount": "1"
    }
]

let shoppingBasket = [];
let prices = [];


function render() {
    let index = document.getElementById('index');
    index.innerHTML = '';
    index.innerHTML += generateIndexHTML();

    let menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        menuList.innerHTML += /*html*/`
            <div class="card" onclick="addToBasket()">
                <h2>${menu['name']}</h2>
                <p>${menu['description']}</p>
                <h3>${menu['price']}
            </div>
        `;
    }
}

function generateIndexHTML() {
    return /*html*/`
        <div class="header"><img class="logo" src="./icon/besteck.png" onclick="goToHomepage()" class="AppIcon"><h1>Food4U</h1></div>
        <div class="mainArea">
            <div id="menuList" class="menusArea"></div>
            <div id="basket" class="basketArea"></div>
        </div>
        `;
}

function navigateToHome() {
    window.location.href = "./index.html";
}

function addToBasket(name, price) {
    names.push(name);
}

function updateShoppingBusket() {
    let sum = 0;
    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }

    let finalSum = sum + 3.95;
    document.getElementById().innerHTML = finalSum;
}