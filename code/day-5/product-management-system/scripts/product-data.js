//AJAX: Asynchronous JavaScript and XML
// function XMLHttpRequest() {
//this.readyState
//this.onreadystatechange=function(){}
// }

function getProducts() {
    var reqeust = new XMLHttpRequest();

    //readystatechange --> event
    //onreadystatechange --> property to which you can a pass function which will be executed everytime 'readystatechange' event gets fired because of the change of value in 'readystate' property of XMLHttpRequest object
    reqeust.onreadystatechange = function () {
        if (reqeust.readyState == 4 && reqeust.status == 200) {
            var allProducts = JSON.parse(reqeust.responseText);
            showData(allProducts)
        }
        //else {
        //     console.log("Ready State: " + reqeust.readyState)           
        // }
    }

    reqeust.open('GET', 'http://127.0.0.1:8081/productservice', true)
    reqeust.send();
}

function showData(products) {
    var productTblBody = document.getElementById('productTblBody')
    if (productTblBody != undefined && productTblBody != null) {

        var countHeader = document.getElementById('countHeader')
        countHeader.innerText += products.length + ' Record(s) found';

        for (var i = 0; i < products.length; i++) {
            var product = products[i]

            //image column
            var tdImage = document.createElement('td')

            var tdDivImg = document.createElement('div')
            tdDivImg.setAttribute('class', 'img-responsive')

            var imgAnchor = document.createElement('a');
            imgAnchor.setAttribute('href', './product-details.html')

            var imgObj = document.createElement('img')
            imgObj.setAttribute('src', product.imageUrl)
            imgObj.setAttribute('alt', 'NA')
            imgObj.setAttribute('style', 'margin:2px;width:50px')

            imgAnchor.appendChild(imgObj)
            tdDivImg.appendChild(imgAnchor)
            tdImage.appendChild(tdDivImg)

            var tdName = document.createElement('td')
            var nameAnchor = document.createElement('a');
            nameAnchor.setAttribute('href', './updateproduct-form.html')
            nameAnchor.innerText = product.productName
            tdName.appendChild(nameAnchor)

            var tdCode = document.createElement('td')
            tdCode.innerText = product.productCode

            var tdPrice = document.createElement('td')
            tdPrice.innerText = product.price

            var tdRating = document.createElement('td')
            tdRating.innerText = product.starRating

            var tdDelete = document.createElement('td')
            var deleteBtn = document.createElement('button')
            deleteBtn.setAttribute('class', 'btn btn-danger')
            deleteBtn.innerText = 'Delete'
            tdDelete.appendChild(deleteBtn)

            var newRow = document.createElement('tr')
            newRow.appendChild(tdImage)
            newRow.appendChild(tdName)
            newRow.appendChild(tdCode)
            newRow.appendChild(tdPrice)
            newRow.appendChild(tdRating)
            newRow.appendChild(tdDelete)

            productTblBody.appendChild(newRow)
        }
    }
}

//showData()
//debugger
/*
getProducts()
var jsonParameters =
{
    "x": 10
}
var jsData = [{
    name: "Joydip",
    id: 20,
    isTrainer: true,
    address: {
        city: "Bangalore",
        state: "KA",
        pin: 560101
    },
    subject: ["HTML", "CSS", "JS"],
    salary: 1234.56
}, {
    name: "Joydip",
    id: 20,
    isTrainer: true,
    address: {
        city: "Bangalore",
        state: "KA",
        pin: 560101
    },
    subject: ["HTML", "CSS", "JS"],
    salary: 1234.56
}];

var jsonData = JSON.stringify(jsData);
console.log(jsonData)
var data = JSON.parse(jsonData)
console.log(data)

var jsonStringifiedObj = '[{"name":"anil","id":20}]';
var jsObj = JSON.parse(jsonStringifiedObj);
console.log(jsObj)
*/