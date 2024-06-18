// https://spbrc.ru/awards/nobel
//create a list of names that contain 'Илья' anywhere in the name

const category = document.querySelector('.view-content');

const names = Array.from(category.querySelectorAll('h3'));

const list = names
              .map(name => name.textContent)
              .filter(name => name.includes('Илья'));