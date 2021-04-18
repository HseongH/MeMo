Memo.createObject('hideShow');

Memo.hideShow.toggleClass = (elem, apply) => {
    elem.classList.toggle(apply);
}

Memo.hideShow.addClass = (elem, apply) => {
    elem.classList.add(apply);
}

Memo.hideShow.removeClass = (elem, apply) => {
    elem.classList.remove(apply);
}

// BUTTON
Memo.hideShow.showMenuBtn = document.querySelector('.show-menu-button');
Memo.hideShow.addMemoBtn = document.querySelector('.add-memo-button');
Memo.hideShow.addMemoCloseBtn = document.querySelector('.memo-close-button');
Memo.hideShow.selectCategory = document.querySelector('.select-category');
Memo.hideShow.selectArrow = document.querySelector('.select-arrow');

// ELEMENT
Memo.hideShow.addMemo = document.querySelector('.section__add-memo');

// CATEGORY MENU CONTROL
if (window.innerWidth > 700) {
    Memo.categoryMenuArea.addEventListener('mouseover', () => {
        Memo.hideShow.removeClass(Memo.categoryMenu, 'hide');
    });
    Memo.categoryMenuArea.addEventListener('mouseout', () => {
        Memo.hideShow.addClass(Memo.categoryMenu, 'hide');
    });
} else {
    Memo.hideShow.showMenuBtn.addEventListener('click', () => {
        Memo.hideShow.toggleClass(Memo.categoryMenu, 'hide');
    });
}

// ADD MEMO CONTROL
Memo.hideShow.addMemoBtn.addEventListener('click', () => {
    Memo.hideShow.removeClass(Memo.hideShow.addMemo, 'hide');
});
Memo.hideShow.addMemoCloseBtn.addEventListener('click', () => {
    Memo.hideShow.addClass(Memo.hideShow.addMemo, 'hide');
    Memo.hideShow.addClass(Memo.categoryOptionCon, 'hide');
    Memo.hideShow.removeClass(Memo.hideShow.selectArrow, 'select--activate');
});

// SELECT CATEGORY OPTION CONTROL
Memo.hideShow.selectCategory.addEventListener('click', () => {
    Memo.hideShow.toggleClass(Memo.categoryOptionCon, 'hide');
    Memo.hideShow.toggleClass(Memo.hideShow.selectArrow, 'select--activate');
});