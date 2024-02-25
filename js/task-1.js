const totalCategories = document.querySelectorAll(".item");
console.log(`Numbers of categories: ${totalCategories.length}`);

totalCategories.forEach(categoryElements => {
  console.log(`Category: ${categoryElements.children[0].textContent}`);
  console.log(`Elements: ${categoryElements.children[1].children.length}`);
});
