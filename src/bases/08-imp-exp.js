//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";

//console.log(owners)

export const getHeroById = (id) => {
    return heroes.find(heroes => heroes.id === id);
}

//console.log(getHeroById(3));

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

//console.log(getHeroesByOwner('Marvel'));
