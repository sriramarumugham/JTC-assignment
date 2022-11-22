const coffeeHouse = {
  items: [
    {
      name: "Espresso",
      total: 0,
      addOn: [
        {
          name: "Milk",
          total: 0,
          price: 60,
        },
        {
          name: "Cream",
          total: 0,
          price: 75,
        },
        {
          name: "Latte",
          total: 0,
          price: 100,
        },
      ],
    },
    {
      name: "Cappuccino",
      total: 0,
      addOn: [
        {
          name: "Milk",
          total: 0,
          price: 80,
        },
        {
          name: "Cream",
          total: 0,
          price: 90,
        },
        {
          name: "Latte",
          total: 0,
          price: 125,
        },
      ],
    },
    {
      name: "Latte",
      total: 0,
      addOn: [
        {
          name: "Milk",
          total: 0,
          price: 100,
        },
        {
          name: "Cream",
          total: 0,
          price: 125,
        },
        {
          name: "Latte",
          total: 0,
          price: 150,
        },
      ],
    },
  ],
};

// global display
const display = document.getElementById("totalDisplay");

// global totla
let total = calculate();
display.innerHTML = total;


// adding event listner to all butons
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

//handling click and validation 

function handleClick(e) {
    const name = parseInt(e.target.name);
    const value = parseInt(e.target.value);
  
    if (isProduct(name)) {
      if (coffeeHouse.items[name].total > 0 || value != -1) {
        coffeeHouse.items[name].total += value;
        console.log(coffeeHouse.items[name].total, "value");
        let old = document.getElementById(`_${name}`).innerHTML;
        document.getElementById(`_${name}`).innerHTML = parseInt(old) + value;
      }
    } else {
      let obj = getObj(name);
      let index = name % 10;
      if (coffeeHouse.items[obj].addOn[index].total > 0 || value != -1) {
        coffeeHouse.items[obj].addOn[index].total += value;
        console.log(coffeeHouse.items[obj].addOn[index].total, "value");
        let old = document.getElementById(`_${name}`).innerHTML;
        document.getElementById(`_${name}`).innerHTML = parseInt(old) + value;
      }
    }
    calculateInvoice();
    display.innerHTML = calculate();
  }
// fucntion to calctulation   
function calculate() {
    let total = 0;
    for (let i = 0; i < coffeeHouse.items.length; i++) {
      let product = coffeeHouse.items[i];
      let addons = product.addOn;
      for (let j = 0; j < addons.length; j++) {
        total += addons[j].price * addons[j].total;
      }
    }
    return total;
  }

//   function to get the detailed invocice calculation
function calculateInvoice() {
  const invoiceDetail = document.getElementById("Detailed-invoice");
  invoiceDetail.innerHTML = detailedInvoice();
}
// check if its a add on or a product
function isProduct(name) {
  if (name >= 0 && name <= 2) {
    return true;
  }
}
// get the index by the name of the button
function getObj(name) {
  if (name < 20) {
    return 0;
  } else if (name < 30) {
    return 1;
  }
  return 2;
}
// created a detailed invoice
function detailedInvoice() {
  let Stringans = "";
  let Espresso = coffeeHouse.items[0].total;
  if (Espresso > 0) {
    Stringans += "Espresso x" + coffeeHouse.items[0].total + "\n";
  }
  let Cappuccino = coffeeHouse.items[1].total;
  if (Cappuccino > 0) {
    Stringans += "Cappuccino x" + coffeeHouse.items[1].total + "\n";
  }
  let Latte = coffeeHouse.items[2].total;
  if (Latte > 0) {
    Stringans += "Latte x" + coffeeHouse.items[2].total + "\n";
  }
  return Stringans;
}
