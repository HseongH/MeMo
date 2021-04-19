Memo.category.createCategory = function() {
    const value = this.querySelector('#enter-category-input').value;

    if (!value) return;

    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/category');

    xhr.setRequestHeader('content-type', 'text/plain');

    xhr.send(JSON.stringify({ category_name: value }));
}
