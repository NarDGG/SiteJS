'use strict';

// day 1

// Переменные
const btnBurger = document.querySelector('.btn-burger');
const btnClose = document.querySelector('.btn-close');
const catalog = document.querySelector('.catalog');
const subCatalog = document.querySelector('.subcatalog');
const subCatalogHeader = document.querySelector('.subcatalog-header');
const btnReturn = document.querySelector('.btn-return');

const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);

// Переменная с функцией. Для открытия меню.
const openMenu = function() {
	catalog.classList.add('open'); // Открывает меню
	overlay.classList.add('active'); // Затемнение при нажатии на меню
};

// Переменная с функцией. Для закрытия меню.
const closeMenu = () => {
	catalog.classList.remove('open'); // Закрывает меню
	overlay.classList.remove('active'); // Удаляет затемнение при нажатии на меню
	closeSubMenu(); // Закрывает подменю
};

const openSubMenu = (event) => { // Открытие подменю
	event.preventDefault();
	const itemList = event.target.closest('.catalog-list__item');
	if (itemList) {
		subCatalogHeader.innerHTML = itemList.innerHTML;
		subCatalog.classList.add('subopen');
	};
};

const closeSubMenu = () => { // Закрытие подменю
	subCatalog.classList.remove('subopen');
}

// Вызов функции при действии
btnBurger.addEventListener('click', openMenu); // Вызов функции открытия меню
btnClose.addEventListener('click', closeMenu); // Вызов функции закрытия меню
overlay.addEventListener('click', closeMenu); // Вызов функции закрытия меню при нажатии не на меню
document.addEventListener('keydown', (event) => { // Вызов функции закрытия меню при нажатии ESC
	if (event.code === "Escape") {
		closeMenu();
	};
});
catalog.addEventListener('click', openSubMenu); // Вызов функции открытия подменю
btnReturn.addEventListener('click', closeSubMenu); // Вызов функции закрытия подменю