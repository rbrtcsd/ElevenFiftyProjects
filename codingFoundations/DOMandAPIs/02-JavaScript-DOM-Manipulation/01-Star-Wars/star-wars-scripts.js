let starWarsPeopleList = document.querySelector('ul');

fetch('https://swapi.dev/api/starships')
.then(function(response) {
    return response.json();
})
.then(function(json){
    let ships = json.results;

    for (p of ships) {
        let listItem = document.createElement('li');
        listItem.innerHTML = '<p>' + p.name + '</p>';
        starWarsPeopleList.appendChild(listItem);
    }
});