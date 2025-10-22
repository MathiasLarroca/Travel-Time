async function loadData() {
    const response = await fetch('travel_recommendation_api.json')
    return response.json();
}

//use init to initialize other functions
async function init() {
    const destinations = await loadData();
    console.log(Object.keys(destinations));
    console.log(destinations);
    eventListeners();
}

function eventListeners() {
    const SearchQuery = document.getElementById('search_text');
    const SearchBtn = document.getElementById('search_btn');
    const ClearBtn = document.getElementById('clear_btn');

    SearchBtn.addEventListener('click', () => {
        const validQueries = {
            countries : [],
            temples : ['temple', 'temples'],
            beaches : ['beach', 'beaches'],
        };
        let query = SearchQuery.value.toLowerCase();
        Object.keys(validQueries).forEach(key => {
            if (validQueries[key].some((value) => value === query)) {
                console.log(key)
            }
        });
    })

}

init();