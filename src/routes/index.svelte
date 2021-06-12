<script context="module">
	export async function load({ page }) {
		const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
		const res = await fetch(url);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, index) => {
			return {
				name: data.name,
				id: index + 1,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index+1}.png`
			};
		});
		return { props: { pokemons:loadedPokemon } };
	}
</script>

<script>
	// import { pokemons } from '../stores/pokestores';
	import PokemanCard from '../components/pokemonCard.svelte';
	export let pokemons;
	let searchTerm = '';
	let filteredPokemons = [];
	$: {
		// console.log(searchTerm)
		if (searchTerm != '') {
			//search Pokemon
			filteredPokemons = pokemons.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			// console.log(filteredPokemons);
		} else {
			//spread making a copy cause cananot ref
			filteredPokemons = [...pokemons];
		}
	}
</script>

<svelte:head>
	<title>Svelte Kit PokeDex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Svelte Kit PokeDex</h1>

<input
	class="w-full rounded-md text-lg border-2 p-4 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search Pokemon"
/>

<div class="grid py-4 gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemons as pokemon}
		<PokemanCard {pokemon} />
	{/each}
</div>
