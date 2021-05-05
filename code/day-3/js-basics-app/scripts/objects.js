//object-literal syntax
//var pname = "Leaf Rake"
var leafRakeProduct =
{
    //productName: pname,
    productName: "Leaf Rake",
    productCode: 'GDN-0011',
    productRating: 4,
    productPrice: 1234,
    productImageUrl: ''
}

var gardenCartProduct =
{
    productName: "Garden Cart",
    productCode: 'GDN-0023',
    productRating: 5,
    productPrice: 123,
    productImageUrl: ''
}

console.log(leafRakeProduct.productName)
//console.log(leafRakeProduct['productCode'])

var arr = [1, 2, 3, 4];
// console.log(leafRakeProduct)
// console.log(arr)

for (var index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for (var propName in leafRakeProduct) {
    var propValue = leafRakeProduct[propName]
    console.log(propName + ':' + propValue)
}

//constructor function
function product(pname, pcode, pprice, prating, pimage) {
    this.productName = pname;
    this.productCode = pcode;
    this.productPrice = pprice;
    this.productRating = prating;
    this.productImageUrl = pimage;
}

var leafProduct = new product('Leaf Rake', 'GDN-0011', 1234, 4, '')
var cartProduct = new product('Garden Cart', 'GDN-0011', 1234, 4, '')

console.log(leafProduct.constructor)
console.log(cartProduct.constructor)