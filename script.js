//tablica danych o serialach:
// id jest potrzebne by nie odswiezac informacji o kazdym elemencie przy zmianie jednego
var series = [
    {
        id: 1,
        title: 'Breaking Bad',
        desc: 'Serial o historii dilera narkotyków',
        img: './images/bb-v.jpg'
    },
    {
        id: 2,
        title: 'Gra o tron',
        desc: 'Serial o losach siedmiu królestw',
        img: './images/got-v.jpg'
    },
    {
        id: 3,
        title: 'Peaky blinders',
        desc: 'Serial o losach gangsterskiej rodziny z Birmingham',
        img: './images/peaky-v.jpg'

    },
    {
        id: 4,
        title: 'Stranger things',
        desc: 'Serial o przygodach grupy dzieci',
        img: './images/stranger-things.jpg'
    }
];

/* metoda .map() - przyjmuje jako parametr funkcję, przez którą przechodzi każdy z elementów tablicy 
(czyli każdy serial), który następnie jest mapowany do postaci ReactElementu korzystającego 
z informacji o serialu (series.title i series.desc):
*/

var seriesElements = series.map(function(series) {
    return React.createElement('li', {key: series.id}, //dodajemy key
        React.createElement('h2', {}, series.title),
        React.createElement('p', {}, series.desc),
        React.createElement('img', {src: series.img})
    );
});

//odpowiednie umieszczenie powyższych elementów w liście:
var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista seriali'),
        React.createElement('ul', {}, seriesElements)
    );


/*
React.createElement(
  type,  -->nazwa klasy na podstawie której ma zostać stworzony element
            div to nie jest div z htmla
  [props],  -->propsy, czyli właściwości danego elementu (wejścia)
  [...children]  -->dzieci elementu, czyli to co ma się znaleźć wewnątrz. ( np.tekst, kolejny ReactElement)
)
*/

ReactDOM.render(element, document.getElementById('app'));
/*
renderujemy:
element -->to co wyżej
węzeł drzewa DOM -->do którego element ma się 'wpiąć'
*/