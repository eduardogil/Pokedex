const pokeApi = new PokeApi( )
const pokemonId = document.getElementById( 'id' )
let pokemonEspecifico = pokeApi.buscarEspecifico( pokemonId.value )
let ehIgual = 0
const alertaMsg = alert


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

  idPok.value = pokemon.id;
}


function validarId( id ) {
  if ( ( id.length <= 0 ) || ( pokemonId.value > 807 || pokemonId.value < 1 ) ) {
    document.getElementById( 'erro' ).innerHTML = 'Preencha o campo com um ID entre 1 e 807!'
  } else if ( ehIgual === pokemonId.value ) {
    document.getElementById( 'erro' ).innerHTML = 'Este pokemon ja está sendo exibido!'
  } else {
    document.getElementById( 'erro' ).innerHTML = ''
    pokemonEspecifico = pokeApi.buscarEspecifico( pokemonId.value )
    pokemonEspecifico.then( pokemon => {
      const poke = new Pokemon( pokemon )
      renderizacaoPokemon( poke )
      ehIgual = pokemonId.value
    } )
  }
}

pokemonId.addEventListener( 'onclick', () => validarId( pokemonId.value ) )

let memoriaUsuario = document.cookie
let memoria = [pokemonId.value, pokemonId.value]
memoriaUsuario = memoria.join( ',' )
memoria = memoriaUsuario.split( ',' )
/* 
document.cookie = `${pokemonId.value} = ${pokemonId.value}; expires=Thu, 18 Dec 2019 12:00:00 UTC`
 */
// eslint-disable-next-line no-unused-vars
function estouComSorte( ) {
  const min = Math.ceil( 1 )
  const max = Math.floor( 804 )
  const numeroSorteado = Math.floor( Math.random( ) * ( max - min ) ) + min
  if ( memoria.includes( numeroSorteado ) ) {
    document.getElementById( 'erro' ).innerHTML = `O número ${ numeroSorteado } já foi sorteado.`
  } else {
    document.getElementById( 'erro' ).innerHTML = ''
    memoria.push( numeroSorteado, numeroSorteado );
    pokemonEspecifico = pokeApi.buscarEspecifico( numeroSorteado )
    pokemonEspecifico.then( pokemon => {
      const poke = new Pokemon( pokemon )
      renderizacaoPokemon( poke )
    } )
  }
}

// eslint-disable-next-line no-unused-vars
function somar( value ) {
  let num = parseInt( pokemonId.value, 10 )
  num += parseInt( value, 10 )
  if ( num > 807 ) {
    num = 1
  }
  pokemonEspecifico = pokeApi.buscarEspecifico( num )
  pokemonEspecifico.then( pokemon => {
    const poke = new Pokemon( pokemon )
    renderizacaoPokemon( poke )
  } )
}

// eslint-disable-next-line no-unused-vars
function menos( value ) {
  pokemonId.value -= value
  if ( pokemonId.value < 1 ) {
    pokemonId.value = 807
  }
  pokemonEspecifico = pokeApi.buscarEspecifico( pokemonId.value )
  pokemonEspecifico.then( pokemon => {
    const poke = new Pokemon( pokemon )
    renderizacaoPokemon( poke )
  } )
}
