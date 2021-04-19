Memo.createObject('category');

Memo.category.addCategory = document.querySelector('.add-category');

Memo.category.createEnterArea = function() {
    if (this.parentNode.parentNode.querySelector('#enter-category-form')) return;

    const categoryMenu = document.querySelector('.memo-category');

    const categoryList = document.createElement('li');
    const categoryFrom = document.createElement('form');
    const categoryInput = document.createElement('input');

    categoryList.className = 'category';
    categoryFrom.id = 'enter-category-form';
    categoryInput.id = 'enter-category-input';
    categoryInput.className = 'input-text';
    categoryInput.type = 'text';

    categoryFrom.appendChild(categoryInput);
    categoryList.appendChild(categoryFrom);
    categoryMenu.insertBefore(categoryList, categoryMenu.lastElementChild);

    categoryInput.focus();
    categoryFrom.addEventListener('submit', Memo.category.createCategory);
}

Memo.category.addCategory.addEventListener('click', Memo.category.createEnterArea);
