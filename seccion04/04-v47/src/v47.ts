console.clear();


import { findHeroById } from "./services/hero.service";


const hero = findHeroById(1);

console.log(hero?.name ?? 'Heroe no existe'); // hero.name si es igual a herro.undefined == a error