/* eslint-disable no-useless-constructor */
class PokeApi { // eslint-disable-line no-unused-vars
  constructor( ){} // eslint-disable-line

 // eslint-disable-line
  buscarTodos( ) {
    const pokemon = fetch( 'https://pokeapi.co/api/v2/pokemon/' )
    return pokemon.then( data => data.json() )
  }

  buscarEspecifico( id ) {
    const pokemon = fetch( `https://pokeapi.co/api/v2/pokemon/${ id }` )
    return pokemon.then( data => data.json() )
  }
}
