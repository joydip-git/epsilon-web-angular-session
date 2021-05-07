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
            console.log(reqeust.responseText)
            console.log(JSON.parse(reqeust.responseText))
        }
        //else {
        //     console.log("Ready State: " + reqeust.readyState)           
        // }
    }

    reqeust.open('GET', 'http://127.0.0.1:8081/productservice', true)
    reqeust.send();
}
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