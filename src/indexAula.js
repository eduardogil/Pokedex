const pokeApi = new PokeApi( )

async function buscar( ) {
  const pokemonId = document.getElementById( 'id' )
  let pokemonEspecifico = await pokeApi.buscarEspecifico( pokemonId.value )
  let poke = new Pokemon( pokemonEspecifico )
  renderizacaoPokemon( poke )
}

buscar()

function renderizacaoPokemon( pokemon ) {
  const dadosPokemon = document.getElementById( 'dadosPokemon' )
  const id = dadosPokemon.querySelector( '.id' )
  const nome = dadosPokemon.querySelector( '.nome' )
  const altura = dadosPokemon.querySelector( '.altura' )
  const peso = dadosPokemon.querySelector( '.peso' )
  const img = dadosPokemon.querySelector( '.img' )
  const tipo = dadosPokemon.querySelector( '.tipo' )
  const estatistica = dadosPokemon.querySelector( '.estatistica' )
  const idPok = dadosPokemon.querySelector( '.idPokemon' )
  id.innerHTML = `#: ${ pokemon.id }`
  nome.innerHTML = `${ pokemon.nome }`
  altura.innerHTML = `${ pokemon.conversaoAltura() } Cm`
  peso.innerHTML = `${ pokemon.conversaoPeso() } kg`
  img.src = pokemon.img

  while ( estatistica.hasChildNodes() ) {
    estatistica.removeChild( estatistica.firstChild )
  }
  while ( tipo.hasChildNodes() ) {
    tipo.removeChild( tipo.firstChild )
  }

  pokemon.tipo.forEach( tipos => {
    const li = document.createElement( 'li' )
    const p = document.createElement( 'p' )
    p.textContent = tipos.type.name
    li.appendChild( p )
    tipo.appendChild( li )
  } )
  pokemon.estatistica.forEach( estatisticas => {
    const li = document.createElement( 'li' )
    const p = document.createElement( 'p' )
    p.textContent = `${ estatisticas.stat.name } : ${ estatisticas.base_stat }`

    li.appendChild( p )
    estatistica.appendChild( li )
  } )

  idPok.value = pokemon.id
}
