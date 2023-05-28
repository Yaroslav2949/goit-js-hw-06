
// ВАріант 1

// const items = document.querySelectorAll(".item");

// console.log("Number of categories :", items.length);
// Array.prototype.forEach.call(items, (element) => {
//   const title = element.querySelector("h2").innerHTML;
//  const itemsLength = element.querySelectorAll("li").length;
 
//   console.log(`Category: ${title} 
// Elements: ${itemsLength}`);
// });
const categoriesEl = document.getElementById('categories').children.length;
console.log(`Number of categories: ${categoriesEl}`);

const arrayTitlesCategoriesRef = document.querySelectorAll('h2');
arrayTitlesCategoriesRef.forEach((title) => {
  console.log('Category:', title.textContent);
  console.log('Elements:', title.nextElementSibling.children.length);
});