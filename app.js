// Store data of the inputs

const article = document.getElementById('item')
const articleAmounts = document.getElementById('total')
const calculateBtn = document.querySelector('button')

let articles = [];
let list = document.getElementById("#article-list");
let amounts = [];

// Display articles and their amounts

calculateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const newArticle = document.getElementById('item').value;
    const newAmount = document.getElementById('total').value;
    
    newArticle.forEach((article) => {
        let li = document.createElement("li");
        li.innerText = article;
        newArticle.append(list);

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
