async function loadData() {
    const response = await fetch('travel_recommendation_api.json')
    return response.json();
}

//use init to initialize other functions
async function init() {
    const destinations = await loadData();
    eventListeners(destinations);
}

function eventListeners(destinations) {
    const SearchQuery = document.getElementById('search_text');
    const Results = document.getElementById('results');
    const SearchBtn = document.getElementById('search_btn');
    const ClearBtn = document.getElementById('clear_btn');

    SearchBtn.addEventListener('click', () => {

        const validQueries = {
            countries: ['australia', 'japan', 'brazil'],
            temples: ['temple', 'temples'],
            beaches: ['beach', 'beaches'],
        };
        let query = SearchQuery.value.toLowerCase();
        let found = false

        Object.keys(validQueries).forEach(key => {

            if (validQueries[key].some((value) => value === query)) {

                Results.replaceChildren();
                found = true

                switch (key) {
                    case 'countries':
                        const country = destinations[key].find(q => q.name.toLowerCase() === query);
                        country.cities.forEach(cities => {showResults(cities, Results)});
                        break;
                    case 'temples':
                        destinations[key].forEach(cities => {showResults(cities, Results)});
                        break;
                    case 'beaches':
                        destinations[key].forEach(cities => {showResults(cities, Results)});
                        break;
                };

            };

        });
        //Invalid search statement
        if (!found) {alert('Invalid')};

    });

    ClearBtn.addEventListener('click', () => SearchQuery.value = '');

}

function showResults (cities, results) {

    const Option = document.createElement('article');
    const OptionName = document.createElement('h3');
    const OptionImg = document.createElement('img');
    const OptionDesc = document.createElement('p');
    Option.classList.add('each_result');

    results.appendChild(Option);
    Option.append(OptionName, OptionImg, OptionDesc);

    OptionName.textContent = cities.name;
    OptionImg.src = cities.imageUrl;
    OptionDesc.textContent = cities.description;

}

init();