// Store data of the inputs

const item = document.getElementById('item')
const itemAmounts = document.getElementById('total')
const calculateBtn = document.querySelector('button')

let items = [];
let list = document.getElementById("#article-list");
let amounts = [];

// Display articles and their amounts

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newItem = item.value;
    const newAmount = itemAmounts.value;
    
        item.forEach((item) => {
        let newItem = document.createElement("li");
        li.innerText = newItem.value;
        newItem.append(list);

    // Calculate total amounts

function calculateReceipt() {
    const finalTotal = document.getElementById('#final-total');
    let sum = 0;
    amounts.forEach(number => sum += number);
    finalTotal.innerHTML = `Total is ${finalTotal}`;
}
})

// Clear forms after data is entered

function clearForm() {
    document.form.reset();
}
}
