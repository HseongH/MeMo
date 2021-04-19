Memo.createObject('hideShow');

Memo.hideShow.toggleClass = function(elem, apply) {
    elem.classList.toggle(apply);
}

Memo.hideShow.addClass = function(elem, apply) {
    elem.classList.add(apply);
}

Memo.hideShow.removeClass = function(elem, apply) {
    elem.classList.remove(apply);
}

Memo.hideShow.hideElementWhenClickAnywhere = function(elem) {
    const target = event.target;
    const arg = Array.prototype.slice.call(arguments, 1);

    if (target.closest(arg)) return;

    elem.classList.add('hide');
}

// BUTTON
Memo.hideShow.showMenuBtn = document.querySelector('.show-menu-button');
Memo.hideShow.addMemoBtn = document.querySelector('.add-memo-button');
Memo.hideShow.addMemoCloseBtn = document.querySelector('.memo-close-button');
Memo.hideShow.selectCategory = document.querySelector('.select-category');
Memo.hideShow.selectArrow = document.querySelector('.select-arrow');

// ELEMENT
Memo.hideShow.addMemo = document.querySelector('.section__add-memo');
Memo.hideShow.categoryMenuArea = document.querySelector('.category-menu-area');
Memo.hideShow.categoryMenu = document.querySelector('.category-menu');
Memo.hideShow.categoryOptionCon = document.querySelector('.category-option-container');

// CATEGORY MENU CONTROL
Memo.hideShow.showMenuBtn.addEventListener('click', () => {
    Memo.hideShow.toggleClass(Memo.hideShow.categoryMenu, 'hide');
});

// ADD MEMO CONTROL
Memo.hideShow.addMemoBtn.addEventListener('click', () => {
    Memo.hideShow.removeClass(Memo.hideShow.addMemo, 'hide');
});
Memo.hideShow.addMemoCloseBtn.addEventListener('click', () => {
    Memo.hideShow.addClass(Memo.hideShow.addMemo, 'hide');
    Memo.hideShow.addClass(Memo.hideShow.categoryOptionCon, 'hide');
});

// SELECT CATEGORY OPTION CONTROL
Memo.hideShow.selectCategory.addEventListener('click', () => {
    Memo.hideShow.toggleClass(Memo.hideShow.categoryOptionCon, 'hide');
});

// HIDE ELEMENT WHEN CLICKED ANYWHERE
document.addEventListener('click', () => {
    Memo.hideShow.hideElementWhenClickAnywhere(Memo.hideShow.addMemo, '.add-memo__container', '.add-memo-button');
    Memo.hideShow.hideElementWhenClickAnywhere(Memo.hideShow.categoryOptionCon, '.select-category', '.category-option-container');
    Memo.hideShow.hideElementWhenClickAnywhere(Memo.hideShow.categoryMenu, '.category-menu-area');
});
