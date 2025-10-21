async function loadData() {
    const response = await fetch('travel_recommendation_api.json')
    return response.json();
}
//add variable to setupEventListeners function
const SearchQuery = document.getElementById('search_text');
const SearchBtn = document.getElementById('search_btn');
const ClearBtn = document.getElementById('clear_btn');

//use init to initialize other functions
async function init() {
    const destinations = await loadData();
    console.log(destinations);
}

//add to setupEventListeners function as well
SearchBtn.addEventListener('click', () => {
    console.log(SearchQuery.value)
    // for (let i = 0; i > destinations.length; i++) {

    // }
})

init();