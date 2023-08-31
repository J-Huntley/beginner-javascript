// const p = document.querySelector('p');
// const divs = document.querySelectorAll('div');
// console.log(p);
// console.log(divs);

// const heading = document.querySelector('h2');
// console.dir(heading.textContent);

// const pizzaList = document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} emojiPlaceholder`;
// pizzaList.insertAdjacentText('beforeend', 'emojiPlaceholder');

const pic = document.querySelector('.nice');
pic.classList.add("open");
pic.classList.toggle('round');
pic.classList.remove("cool");
console.log(pic.classList);