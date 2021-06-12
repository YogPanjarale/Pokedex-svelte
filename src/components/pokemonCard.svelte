<script>
	import { fade,fly } from "svelte/transition";
	export let pokemon;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${pokemon.id}`}
	transition:fly="{{ x: window.innerWidth, duration: 2000 }}"
>
	<img class="h-40 w-40" src={pokemon.image} alt={pokemon.name} />
	<h2 class="uppercase text-xl">{pokemon.id}.{pokemon.name}</h2>
</a>
