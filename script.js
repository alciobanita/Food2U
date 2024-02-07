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
        "name": "Coke4U",
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
        "name": "Gerolsteiner mit Kohlensäure",
        "price": "2.80 €",
        "amount": "1",
        "description": "Wasser mit Kohlensäure 1 l"
    }
]

let shoppingBasket = [
    {
        "names": [],
        "prices": []
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
            <div class="card" onclick="addToBasket()">
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
                <img class="logo" src="./icon/besteck.png" class="AppIcon"><h1>Food4U</h1>
            </div>
            <img class="logoBasket" src="./icon/basket.png" onclick="showBasket()">
        </div>
        <div class="mainArea">
            <div id="menuList" class="menusArea"></div>
            <div id="openBasket" class="basketArea">
                <h3>Warenkorb</h3>
                <div class="spacer"></div>
                <div  id="basketContent">
                    <ul>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi quos recusandae exercitationem. Laborum aliquam, non sunt veniam eos vel odio aperiam in itaque rerum cum blanditiis ipsam fugiat facilis?</ul>
                </div>
                <div class="spacer"></div>
                <div id="basketValue">Bestellwert: <span id="totalPrice"></span> €</div>
                <button type="submit" class="btn btn-primary" onclick="sendOrder()">Bestellen</button>
            </div>
        </div>
        `;
}

function goToHomepage() {
    render();
    updateShoppingBusket();
}

function addToBasket(name, price) {
    for (let j = 0; j < menus['name'].length; j++) {
        let name = menus['name'][j];
        
        shoppingBasket['names'].push(name);
    }

    for (let t = 0; t < menus['price'].length; t++) {
        let price = menus['price'][t];
        
        shoppingBasket['prices'].push(price);
    }
    updateShoppigBasket();
    console.log('Hallo!');
}

function updateShoppingBusket() {
    let sum = 0.00;
    for (let i = 0; i < shoppingBasket['prices'].length; i++) {
        sum += shoppingBasket['prices'][i];
    }

    let finalSum = sum + 3.95;
    document.getElementById('totalPrice').innerHTML = finalSum;
}

function showBasket() {
    addToBasket();
}