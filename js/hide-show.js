Memo.createObject('hideShow');

Memo.hideShow.showOrHideElements = elem => {
    elem.classList.toggle('hide');
}

Memo.hideShow.hideElements = elem => {
    elem.classList.add('hide');
}

Memo.hideShow.showElements = elem => {
    elem.classList.remove('hide');
}

// BUTTON
Memo.hideShow.showMenuBtn = document.querySelector('.show-menu-button');
Memo.hideShow.addMemoBtn = document.querySelector('.add-memo-button');
Memo.hideShow.addMemoCloseBtn = document.querySelector('.memo-close-button');
Memo.selectCategory = document.querySelector('.select-category');

// ELEMENT
Memo.hideShow.addMemo = document.querySelector('.section__add-memo');

// CATEGORY MENU CONTROL
Memo.categoryMenuArea.addEventListener('mouseover', () => {
    Memo.hideShow.showElements(Memo.categoryMenu);
});
Memo.categoryMenuArea.addEventListener('mouseout', () => {
    Memo.hideShow.hideElements(Memo.categoryMenu);
});

// ADD MEMO CONTROL
Memo.hideShow.addMemoBtn.addEventListener('click', () => {
    Memo.hideShow.showElements(Memo.hideShow.addMemo);
});
Memo.hideShow.addMemoCloseBtn.addEventListener('click', () => {
    Memo.hideShow.hideElements(Memo.hideShow.addMemo);
    Memo.hideShow.hideElements(Memo.categoryOptionCon);
});

// SELECT CATEGORY OPTION CONTROL
Memo.selectCategory.addEventListener('click', () => {
    Memo.hideShow.showOrHideElements(Memo.categoryOptionCon);
});
