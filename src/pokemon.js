class Pokemon { // eslint-disable-line no-unused-vars
  constructor( pokemon ) {
    this.id = pokemon.id
    this.nome = pokemon.name
    this.altura = pokemon.height
    this.peso = pokemon.weight
    this.tipo = pokemon.types
    this.img = pokemon.sprites.front_default
    this.estatistica = pokemon.stats
  }

  conversaoAltura( multiplicador = 10 ) {
    return this.altura * multiplicador
  }

  conversaoPeso( divisor = 10 ) {
    return this.peso / divisor
  }
}
