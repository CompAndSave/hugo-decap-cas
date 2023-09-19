const SEARCH_FORM = document.getElementById('searchForm');
const INPUT_BOX = document.getElementById('searchInput');
const INPUT_ERR = document.getElementById('searchError');

// Helper Functions
const show= (elem) => {
    elem.style.display = 'block';
}
const hide= (elem) => {
    elem.style.display = 'none';
}
const param = (name) => {
    return decodeURIComponent((location.search.split(name + '=')[1] || '').split('&')[0]).replace(/\+/g, ' ');
}
SEARCH_FORM.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        console.log(INPUT_BOX.value.trim());
        if (INPUT_BOX.value.trim() !== "") {
            hide(INPUT_ERR);
            SEARCH_FORM.submit();
        } else {
            show(INPUT_ERR);
        }
    }
});