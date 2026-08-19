const heroes = [
    {
        id: 1,
        name: 'Ironman',
        owner: 'Marvel'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Batman',
        owner: 'DC'
    },
];

const findHeroById = (id: number) => {
    return heroes.find( (heroe) => heroe.id === id);
}

const hero = findHeroById(5);
console.log(hero?.name ?? 'Heroe no existe'); // hero.name si es igual a herro.undefined == a error