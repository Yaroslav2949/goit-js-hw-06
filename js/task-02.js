const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const list = document.querySelector("#ingredients")
// for (let i = 0; i <= 5; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = ingredients[i];
//   li.classList.add('item')
//   list.appendChild(li);
// }

// console.log (list)




const list = document.querySelector("#ingredients")
const elementsRef = ingredients.map((ingredient)=>{
  const item = document.createElement('li');
  item .textContent = ingredient
  item .classList.add('item')
 return item 
})
list.append(...elementsRef)



// const li1 = document.createElement('li')
// li1.textContent ='Potatoes';
// li1.classList.add('item') 
// const li2 = document.createElement('li')
// li2.textContent ='Mushrooms';
// li2.classList.add('item') 
// const li3 = document.createElement('li')
// li3.textContent ='Garlic';
// li3.classList.add('item') 
// const li4 = document.createElement('li')
// li4.textContent ='Tomatos';
// li4.classList.add('item') 
// const li5 = document.createElement('li')
// li5.textContent ='Herbs';
// li5.classList.add('item') 

// const li6 = document.createElement('li')
// li6.textContent ='Condiments';
// li6.classList.add('item') 
// list.append(li1,li2,li3,li4,li5,li6)