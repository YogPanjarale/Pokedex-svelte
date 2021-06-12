// eslint-disable-next-line no-unused-vars
export async function get({ params }) {
	const id = params.id;
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`
	const res = await fetch(url)
	const result = await res.json()
	const pokemon ={
		name:result.name,
		type:result.types[0].type.name,
		height:result.height,
		weight:result.weight,
		image:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
	}
	return { status: 200, body: pokemon };
}
