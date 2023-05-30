const categoryCount = document.querySelectorAll('li.item');
console.log('Number of categories:', categoryCount.length);
console.log('');
const list = document.querySelector('#categories');

const array = [...list.children];

array.forEach(element => {
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
    console.log('');
 });





































