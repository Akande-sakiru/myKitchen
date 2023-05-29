const Kitchen = [
  {
    Foodname: "Chinese ",
    all: [
      {
        Price: "$25",
        Quantity: "2",
        Location: "Chinese",
        Total: "$50",
        Status: "",
      },
    ],
  },
  {
    Foodname: "Doughnut & Ice-cream",
    all: [
      { Price: "$15", Quantity: "2", Location: "UK", Total: "$25", Status: "" },
    ],
  },
  {
    Foodname: "Coffee",
    all: [
      {
        Price: "$5",
        Quantity: "2",
        Location: "Turkey",
        Total: "$10",
        Status: "",
      },
    ],
  },
  {
    Foodname: "Moi Moi",
    all: [
      {
        Price: "$10",
        Quantity: "2",
        Location: "Nigeria",
        Total: "$20",
        Status: "",
      },
    ],
  },
  {
    Foodname: "Chicken & Chips",
    all: [
      {
        Price: "$12",
        Quantity: "2",
        Location: "London",
        Total: "$24",
        Status: "",
      },
    ],
  },
  {
    Foodname: "Assorted Fish",
    all: [
      {
        Price: "$10",
        Quantity: "2",
        Location: "japan",
        Total: "$20",
        Status: "",
      },
    ],
  },
];
let SelectFood = document.getElementById("SelectFood");
let SelectLocation = document.getElementById("SelectLocation");
let table = document.getElementById("food-table");
let modal_data = document.getElementById("myModal");

// for (let i = 0; i < Kitchen.length; i++) {
//   SelectFood.innerHTML += `<option  value = "${Kitchen[i].Foodname}">${Kitchen[i].Foodname}</option>`;
// }
// let locations = ["Chinese", "UK", "Turkey", "Nigeria", "London", "Japan"];
// for (let i = 0; i < locations.length; i++) {
//   let option = document.createElement("option");
//   option.text = locations[i];
//   SelectLocation.add(option);
// }
    // populate the SelectFood dropdown with options from the Kitchen array
    Kitchen.forEach(food => {
        let option = document.createElement('option');
        option.text = food.Foodname;
        SelectFood.add(option);
    });

    // populate the SelectLocation dropdown with unique location options from the Kitchen array
    let locationSet = new Set(Kitchen.flatMap(food => food.all.map(a => a.Location)));
    locationSet.forEach(location => {
        let option = document.createElement('option');
        option.text = location;
        SelectLocation.add(option);
    });

    function add() {
        // get the selected food and location
        let selectedFood = SelectFood.options[SelectFood.selectedIndex].text;
        let selectedLocation = SelectLocation.options[SelectLocation.selectedIndex].text;

        // find the selected food in the Kitchen array
        let food = Kitchen.find(food => food.Foodname === selectedFood);

        // create a new table row with the selected food and location
        let table = document.getElementById('food-table');
        let row = table.insertRow();
        let snCell = row.insertCell(0);
        let nameCell = row.insertCell(1);
        let priceCell = row.insertCell(2);
        let quantityCell = row.insertCell(3);
        let locationCell = row.insertCell(4);
        let totalCell = row.insertCell(5);
        let statusCell = row.insertCell(6);
        nameCell.innerHTML = food.Foodname;
        priceCell.innerHTML = food.all[0].Price;
        quantityCell.innerHTML = food.all[0].Quantity;
        locationCell.innerHTML = selectedLocation;
        totalCell.innerHTML = food.all[0].Total;
        statusCell.innerHTML = food.all[0].Status;
        snCell.innerHTML = table.rows.length - 1;
    }

// Define a function to add a new row to the table
// function add() {
//     // Get the selected food, location, and price
//     let food = SelectFood.value;
//     let location = SelectLocation.value;
//     let price = getPrice(food);
    
//     // Get the current number of rows in the table
//     let numRows = document.getElementById('food-table').rows.length;
    
//     // Create a new row and cells
//     let row = document.createElement('tr');
//     let snCell = document.createElement('td');
//     let nameCell = document.createElement('td');
//     let priceCell = document.createElement('td');
//     let quantityCell = document.createElement('td');
//     let locationCell = document.createElement('td');
//     let totalCell = document.createElement('td');
//     let statusCell = document.createElement('td');
    
//     // Set the values of the cells
//     snCell.innerText = numRows;
//     nameCell.innerText = food;
//     priceCell.innerText = price;
//     quantityCell.innerHTML = '<input type="number" min="1" value="1" onchange="calculateTotal(this)">';
//     locationCell.innerText = location;
//     totalCell.innerText = price;
//     statusCell.innerText = '';
    
//     // Add the cells to the row
//     row.appendChild(snCell);
//     row.appendChild(nameCell);
//     row.appendChild(priceCell);
//     row.appendChild(quantityCell);
//     row.appendChild(locationCell);
//     row.appendChild(totalCell);
//     row.appendChild(statusCell);
    
//     // Add the row to the table
//     document.getElementById('food-table').appendChild(row);
    
//     // Reset the dropdowns
//     SelectFood.selectedIndex = 0;
//     SelectLocation.selectedIndex = 0;
// }

// // Define a function to get the price of a given food
// function getPrice(food) {
//     for (let i = 0; i < Kitchen.length; i++) {
//         if (Kitchen[i].Foodname === food) {
//             return Kitchen[i].all[0].Price;
//         }
//     }
// }

// // Define a function to calculate the total for a row
// function calculateTotal(input) {
//     let row = input.parentNode.parentNode;
//     let price = row.cells[2].innerText;
//     let quantity = input.value;
//     let total = parseFloat(price.substring(1)) * parseInt(quantity);
//     row.cells[5].innerText = '$' + total;
// }

// // Call the populateDropdowns function to initialize the page
// populateDropdowns();
// <!-- <select class="location" name="" id="SelectLocation">
// <option value="">SelectLocation</option>
// <!-- <option value="">Chinese</option>
// <option value="">UK</option>
// <option value="">Turkey</option>
// <option value="">Nigeria</option>
// <option value="">London</option>
// <option value="">Japan</option> -->
// </select>
// <!-- <select name="" id="price" >
// <option value="">$25</option readonly>
// <option value="">$15</option>
// <option value="">$5</option>
// <option value="">$10</option>
// <option value="">$12</option>
// <option value="">$10</option>

// </select    readonly> --> -->
