var faker = require("faker");

var randomProduct = faker.commerce.product(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("====================");
console.log(" WELCOME TO MY SHOP!");
console.log("====================");

for (var i = 0; i < 10; i++) {
    console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}
