let menus = [
    {
        "name": "Pizza Pepperoni",
        "price": "9.50 €",
        "description": "Pepperoni und Champignons",
        "amount": "1"
    },
    {
        "name": "Pizza Veggie",
        "price": "8.75 €",
        "description": "Veggie lovers: Pepperoni, Sucuck, Zwiebel, Knoblauch, schwarze oder grüne Oliven, Champignons und Oregano.",
        "amount": "1"
    },
    {
        "name": "Pizza Rolls",
        "price": "7.99 €",
        "description": "6 Mini-Pizza Rolls mit Tomatensauce, Olivenöl, Pepperoni, Schinken und mit Mozzarella überbacken.",
        "amount": "1"
    },
    {
        "name": "Coke",
        "price": "2.40 €",
        "amount": "1",
        "description": "Coca-Cola Getränk 0,33 l"
    },
    {
        "name": "Bier",
        "price": "3,25 €",
        "amount": "1",
        "description": "Herforder  Bockbier 0.33 l"
    },
    {
        "name": "S. Pellegrino medium",
        "price": "4.80 €",
        "amount": "1",
        "description": "Wasser mit Kohlensäure 1 l"
    },
    {
        "name": "S. Pellegrino still",
        "price": "3.80 €",
        "amount": "1",
        "description": "Wasser ohne Kohlensäure 1 l"
    }
]

let shoppingBasket = [
    {
        "names": [],
        "prices": [],
        "quantities": []
    }
];


function render() {
    let index = document.getElementById('index');
    index.innerHTML = '';
    index.innerHTML += generateIndexHTML();

    let menuList = document.getElementById('menuList');
    menuList.innerHTML = '';

    for (let i = 0; i < menus.length; i++) {
        const menu = menus[i];
        menuList.innerHTML += /*html*/`
            <div class="card" onclick="addToBasket('${menu['name']}', ${parseFloat(menu['price'])})">
                <div class="menuDescription">
                    <h2>${menu['name']}</h2>
                    <p>${menu['description']}</p>
                    <h3>${menu['price']}
                </div>
                <img class="addIcon" src="./icon/plus.png">
            </div>
        `;
    }
    updateShoppingBusket();
}

function generateIndexHTML() {
    return /*html*/`
        <div class="header">
            <div class="wp-name" onclick="goToHomepage()">
                <img class="logo" src="./icon/besteck.png" class="AppIcon"><h1>Food2U</h1>
            </div>
        </div>
        <div class="restaurant">
            <h1 class="restName" id="r-Name">Pizzeria Belladona</h1>
        </div>
        <div class="mainArea">
            <div id="menuList" class="menusArea"></div>
            <div id="openBasket" class="basketArea">
                <h3>Warenkorb</h3>
                <div class="basketStyle">
                    <div class="spacer"></div>
                    <div class="items" id="basketContent">
                        <h4>Fülle deinen Warenkorb</h3>
                        <span class="infoBasket">Füge einige leckere Gerichte aus der Speisekarte hinzu und bestelle dein Essen.</span>
                    </div>
                    <div class="spacer"></div>
                    <div id="basketValue">Bestellwert: <span id="totalPrice">0.00</span> €</div>
                    <div class="spacer"></div>
                    <p class="message">Zu deiner Bestellung werden 3,95 € Versandkosten berechnet.</p><br><br>
                    <button type="submit" class="btn btn-primary" onclick="sendOrder()">Bestellen</button>
            
            </div>
        </div>
        <div class="footer">
            &copy; Food2U 2024  <div><a href="#impressum">Impressum</a> |  <a href="#datenschutz">Datenschutzerklärung</a></div>
        </div>
        </div>
    `;
}

function goToHomepage() {
    window.location = "index.html";
}

function addToBasket(name, price) {
    let index = shoppingBasket[0].names.indexOf(name);
    if (index === -1) {
        shoppingBasket[0].names.push(name);
        shoppingBasket[0].prices.push(price);
        shoppingBasket[0].quantities.push(1);
    } else {
        shoppingBasket[0].prices[index] += price;
        shoppingBasket[0].quantities[index]++;
    }
    updateShoppingBusket();
}
function updateShoppingBusket() {
    let sum = 0.00;
    let listHtml = '';
    let items = shoppingBasket[0].names.map((name, index) => {
        let price = shoppingBasket[0].prices[index];
        let quantity = shoppingBasket[0].quantities[index];
        let totalPrice = price;
        sum += totalPrice;
        return `<div class="basketItem">${name} x ${quantity} = ${totalPrice.toFixed(2)} €</div>`;
    });

    let finalSum = sum + 3.95;
    if (shoppingBasket[0].names.length > 0) {
        document.getElementById('totalPrice').innerHTML = finalSum.toFixed(2);
    }
    document.getElementById('basketContent').innerHTML = listHtml.concat(items.join(''));
}

function showBasket() {
    basket = document.getElementById('openBasket');
    let menuList = document.getElementById('menuList');
    basket.style.display = 'block';
    menuList.style.display = 'none';

    let sum = 0.00;
    let listHtml = '';
    let items = shoppingBasket[0].names.map((name, index) => {
        let price = shoppingBasket[0].prices[index];
        let quantity = shoppingBasket[0].quantities[index];
        let totalPrice = price * quantity;
        sum += totalPrice;
        return `<div class="basketItem">${name} x ${quantity} = ${totalPrice.toFixed(2)} €</div>`;
    });

    let finalSum = sum + 3.95;
    if (shoppingBasket[0].names.length > 0) {
        document.getElementById('totalPrice').innerHTML = finalSum.toFixed(2);
    }
    document.getElementById('basketContent').innerHTML = listHtml.concat(items.join(''));
}