
const totalCategories = document.querySelectorAll(".item");

console.log(`Numbers of categories: ${totalCategories.length}`);

const categoryTitle = document.querySelectorAll(".item > h2");

console.log(`Category: ${categoryTitle[0].textContent}`);

const categoryElements = document.querySelectorAll(".item > ul");

console.log(`Elements: ${categoryElements[0].children.length}`);
console.log(`Category: ${categoryTitle[1].textContent}`);
console.log(`Elements: ${categoryElements[1].children.length}`);
console.log(`Category: ${categoryTitle[2].textContent}`);
console.log(`Elements: ${categoryElements[2].children.length}`);






