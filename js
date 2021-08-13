const NAME_FIELD = document.getElementById('beerName');
const IMG_FIELD = document.getElementById('beerImgSrc');
const DESCR_FIELD = document.getElementById('beerDescription');
const BEER_CONTAINER = document.getElementById('beerContainer');

const ADD_BUTTON = document.getElementById('addBtn');

const BEERS = [];

function clearValues() {
    NAME_FIELD.value = '';
    IMG_FIELD.value = '';
    DESCR_FIELD.value = '';
}

function render() {
    let html = '';

    BEERS.forEach((item) => {
        html += item.getHtml();
    })

    BEER_CONTAINER.innerHTML = html;
}

function Beer(name, imgSrc, description) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.description = description;
}

Beer.prototype.logBeer = function () {
    console.log('BEER: ');
    console.log(this);
}

Beer.prototype.getHtml = function () {
    return `
        <div>
            <span>${this.name}</span>
        </div>
    `
}

ADD_BUTTON.addEventListener('click', function addBeer() {
   

    const newBeer = new Beer(NAME_FIELD.value, IMG_FIELD.value, DESCR_FIELD.value);
    newBeer.logBeer();
    BEERS.push(newBeer)

    console.log('BEER ARRAY: ');
    console.log(BEERS);

    clearValues();
    render();
});

const CLOSE_BTN = document.querySelector('.close-btn');
const CONTAINER = document.querySelector('.container');

CLOSE_BTN.addEventListener('click',function () {
    CLOSE_BTN.classList.toggle('d-none');
    CONTAINER.classList.toggle('d-flex');

});
ADD_BUTTON.addEventListener('click',function () {
    CLOSE_BTN.classList.toggle('d-none');
    CONTAINER.classList.toggle('d-flex');
});
