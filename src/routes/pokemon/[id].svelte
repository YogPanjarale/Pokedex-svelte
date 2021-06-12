<script context="module">
	export async function load({ page }) {
        const id = page.params.id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const res = await fetch(url)
        const pokemon = await res.json()
        return {props:{pokemon:pokemon,id:id}} 
    }
</script>
<script>
    import { fade } from "svelte/transition";
    export let pokemon;
    export let id;
    const type=  pokemon.types[0].type.name
    const image =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
</script>
<div class="flex flex-col items-center" transition:fade="{{duration:2000}}">

    <h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
    <p>Type: <strong>{type}</strong> | Height: <strong>{pokemon.height}</strong>
        | Weight: <strong>{pokemon.weight}</strong>
    </p>
    <img class="card-image" src={image} 
    alt={pokemon.name}
    />
</div>