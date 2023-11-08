const summaryInclude = 120;
const fuseOptions = {
    shouldSort: true,
    includeMatches: true,
    includeScore: true,
    tokenize: true,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
        {name: "title", weight: 0.45},
        {name: "contents", weight: 0.4},
        {name: "tags", weight: 0.1}
    ]
};

const RES_INCREASE = 9;
const SERP_CONTAINER = document.getElementById('searchResults');
const LOADING_WRAPPER = document.querySelector('.search-loading');
const SEARCH_TITLE = document.getElementById('searchTitle');
const LOAD_MORE_BTN = document.getElementById("loadMore");


let currentPage = resLimit = pageCount =1;

// =============================
// Search
// =============================
const executeSearch = (searchQuery) => {
    hide(SEARCH_TITLE);
    show(LOADING_WRAPPER);

    fetch('/blog/index.json').then(function (response) {
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
        }
        // Examine the text in the response
        response.json().then(function (pages) {
            const fuse = new Fuse(pages, fuseOptions);
            let result = fuse.search(searchQuery);
            result = result.filter(res => res.item.title !== "Search Results");
            resLimit = result.length;
            pageCount = Math.ceil(resLimit / RES_INCREASE);

            const title = `Search Result for "<span class='font-italic'>${searchQuery}</span>" (${resLimit} ${resLimit > 1? 'Results' : 'Result'})`;

            if (resLimit > 0) {
                addCards(currentPage, result);
                if( LOAD_MORE_BTN.style.display === "none") {
                    show(LOAD_MORE_BTN);
                }
                LOAD_MORE_BTN.addEventListener("click", () => {
                    addCards(currentPage + 1, result);
                });
            } else {
                SERP_CONTAINER.innerHTML = '<p class=\"search-results-empty\">There\'s no post matching the keyword above.</p>';
                hide(LOAD_MORE_BTN);
            }
            SEARCH_TITLE.innerHTML = title;
            show(SEARCH_TITLE);
            hide(LOADING_WRAPPER);
        })
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    });
}


if (INPUT_BOX !== null) {
    const searchQuery = param("q");
    if (searchQuery) {
        INPUT_BOX.value = searchQuery || "";
        executeSearch(searchQuery, false);
    } else {
        SERP_CONTAINER.innerHTML = '<div class="callout alert">Please enter at least one keyword.</div>';
        SEARCH_TITLE.innerText = 'No Result Found';
        show(SEARCH_TITLE);
        hide(LOADING_WRAPPER);
    }
}

const setLoadBtnStatus = () => {
    if (pageCount === currentPage) {
        hide(LOAD_MORE_BTN)
    }
};

const addCards = (pageIndex, results) => {
    currentPage = pageIndex;
    setLoadBtnStatus();
    const startRange = (pageIndex - 1) * RES_INCREASE;
    const endRange = (pageIndex * RES_INCREASE > resLimit)? resLimit : pageIndex * RES_INCREASE;

    for (let i = startRange; i < endRange; i++) {
        createSerpCard(results[i], i);
    }
}

const createSerpCard = (value, key) => {
    // pull template from hugo template definition

    const searchQuery = INPUT_BOX.value;
    const templateDefinition = document.getElementById("serpCardTemplate").innerHTML;

    const contents = value.item.contents;
        let snippet = "";
        let snippetHighlights = [];

        snippetHighlights.push(searchQuery);
        snippet = contents.substring(0, summaryInclude * 2) + '&hellip;';

    //replace values
    const output = render(templateDefinition, {
        key: key,
        title: value.item.title,
        author: value.item.author,
        featured_image: value.item.featured_image,
        link: value.item.permalink,
        date: value.item.date,
        readingTime: value.item.readingTime,
        snippet: snippet
    });
    SERP_CONTAINER.innerHTML += output;

    snippetHighlights.forEach(function (snipvalue, snipkey) {
        var instance = new Mark(document.getElementById('summary-' + key));
        instance.mark(snipvalue);
    });
}

const render= (templateString, data) => {
    let conditionalMatches, conditionalPattern, copy;
    conditionalPattern = /\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g;
    //since loop below depends on re.lastInxdex, we use a copy to capture any manipulations whilst inside the loop
    copy = templateString;
    while ((conditionalMatches = conditionalPattern.exec(templateString)) !== null) {
        if (data[conditionalMatches[1]]) {
            //valid key, remove conditionals, leave contents.
            copy = copy.replace(conditionalMatches[0], conditionalMatches[2]);
        } else {
            //not valid, remove entire section
            copy = copy.replace(conditionalMatches[0], '');
        }
    }
    templateString = copy;
    //now any conditionals removed we can do simple substitution
    let key, find, re;
    for (key in data) {
        find = '\\$\\{\\s*' + key + '\\s*\\}';
        re = new RegExp(find, 'g');
        templateString = templateString.replace(re, data[key]);
    }
    return templateString;
}
