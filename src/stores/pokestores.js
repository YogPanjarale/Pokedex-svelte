/* eslint-disable no-unused-vars */
import { writable } from 'svelte/store';

export const pokemons = writable([]);

const fetchPokemon = async (limit=150) => {

	const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((data, index) => {
		return {
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		};
	});
    pokemons.set(loadedPokemon)
};
fetchPokemon()