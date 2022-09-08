let currentPage = 1;
const dataPerPage = 7;

//Pagination buttons
let prevBtn = document.querySelector(".prev-btn");
let nextBtn = document.querySelector(".next-btn");
let button1 = document.querySelector(".button-1");
let button2 = document.querySelector(".button-2");
let button3 = document.querySelector(".button-3");
let buttons  = document.querySelectorAll(".buttons-digit");

//Sorting Data in Table

let products = [];
let filteredProducts = [];
fetch('https://northwind.vercel.app/api/products')
.then(res => res.json())
.then(data => {
    products = data;
    fillTable(data);
})
        
HasPrev();
HasNext();

document.getElementById('search').addEventListener('keyup', function () {
    currentPage = 1;
    let searchValue = document.getElementById('search').value.toLowerCase();
    let filteredData = products.filter(q => q.name.toLowerCase().includes(searchValue));
    fillTable(filteredData);
    filteredProducts = filteredData;
    ButtonInner(filteredData.length);
    HasNext(filteredData.length);
    HasPrev();
});

    const fillTable = (data) => {
        let count = (currentPage-1)*dataPerPage;
        let currentData = data.slice((currentPage-1)*dataPerPage,dataPerPage*currentPage);
        document.getElementsByTagName('tbody')[0].innerHTML = "";

        currentData.forEach(element => {
            var trElement = document.createElement('tr');
            
            count++;
            var trCount = document.createElement('th');
            trCount.setAttribute("scope","row");
            trCount.innerHTML = count;

            var tdIdElement = document.createElement('td');
            tdIdElement.innerHTML = element.id;

            var tdNameElement = document.createElement('td');
            tdNameElement.innerHTML = element.name;

            var tdPriceElement = document.createElement('td');
            tdPriceElement.innerHTML = element.unitPrice;

            var tdStockElement = document.createElement('td');
            tdStockElement.innerHTML = element.unitsInStock;

            trElement.append(trCount,tdIdElement,tdNameElement,tdPriceElement,tdStockElement);
            document.getElementsByTagName('tbody')[0].appendChild(trElement);
        });
    }

function HasPrev(){
    if (currentPage == 1) {
        prevBtn.style.display = "none";
        return false;
    }
    else{
        prevBtn.style.display = "block";
        return true;
    }
}

function HasNext(arrayLength){
    if (currentPage == Math.floor(arrayLength/dataPerPage) || arrayLength==0) {
        nextBtn.style.display = "none";
        return false;
    }
    else{
        nextBtn.style.display = "block";
        return true;
    }
}

function ButtonInner(arrayLength){

    if (currentPage==1) {
        if (arrayLength<=dataPerPage*2 && arrayLength>dataPerPage) {
            document.querySelector(".pagination").style.display = 'flex';
            button1.style.display = 'inline-block';
            button2.style.display = 'inline-block';
            button3.style.display = 'none';
            nextBtn.style.display = 'none';
            return;
        }
        if(arrayLength==0 || arrayLength/dataPerPage<=1){
            document.querySelector(".pagination").style.display = 'none';
            return;
        }
        else{
            document.querySelector(".pagination").style.display = 'flex';
            button2.style.display = 'inline-block';
            button3.style.display = 'inline-block';
            button1.textContent = Number(currentPage);
            button2.textContent = Number(currentPage)+1;
            button3.textContent = Number(currentPage)+2;
            return;
        }
    }
    else if(currentPage == Math.floor(arrayLength/dataPerPage)){
        button1.textContent = Number(currentPage)-2;
        button2.textContent = Number(currentPage)-1;
        button3.textContent = Number(currentPage);
    }
    else{
        button1.textContent = Number(currentPage)-1;
        button2.textContent = Number(currentPage);
        button3.textContent = Number(currentPage)+1;
    }
}

buttons.forEach((button)=>{
    button.addEventListener("click",function(e){
        currentPage = e.target.innerText;
       
        HasPrev();
        if (filteredProducts.length>0) {
            fillTable(filteredProducts);
            ButtonInner(filteredProducts.length);
            HasNext(filteredProducts.length);
        }
        else{
            fillTable(products);
            ButtonInner(products.length);
            HasNext(products.length);
        }
    })
})

nextBtn.addEventListener("click",function(){
    currentPage = Number(currentPage) + 1;
    HasPrev();
    if (filteredProducts.length>0) {
        fillTable(filteredProducts);
        ButtonInner(filteredProducts.length);
        HasNext(filteredProducts.length);
    }
    else{
        fillTable(products);
        ButtonInner(products.length);
        HasNext(products.length);
    }
});

prevBtn.addEventListener("click",function(){
    currentPage = Number(currentPage) - 1;
    HasPrev();
    if (filteredProducts.length>0) {
        fillTable(filteredProducts);
        ButtonInner(filteredProducts.length);
        HasNext(filteredProducts.length);
    }
    else{
        fillTable(products);
        ButtonInner(products.length);
        HasNext(products.length);
    }
});
