var express = require('express');
var router = express.Router();
const pokemonType = require("../pokemonType")
const fs = require("fs")

router.get('/pokemons', function (req, res, next) {
  try {
    let pokemons = JSON.parse(fs.readFileSync("pokemons.json"))

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const { search, type } = req.query

    pokemons.data = pokemons.data.filter(pokemon => {
      const hasSearch = search ? pokemon.name.includes(search.toLowerCase()) : true
      const hasType = type ? pokemon.types.includes(type.toLowerCase()) : true
      return hasSearch && hasType
    })
    const count = pokemons.data.length
    const totalPages = Math.ceil(count / limit);
    const offset = limit * (page - 1);

    pokemons.data = pokemons.data.slice(offset, offset + limit)
    res.status(200).send({ ...pokemons, count, totalPages })
  } catch (err) {
    err.statusCode = 500
    next(err)
  }
});

router.get('/pokemons/:id', function (req, res, next) {
  try {
    let pokemons = JSON.parse(fs.readFileSync("pokemons.json"))
    const { id } = req.params
    const pokemon = pokemons.data.filter(p => p.id === parseInt(id))
    if (!pokemon.length) {
      throw new Error("Pokemon is not found.")
    }
    const currentIndex = pokemons.data.findIndex((p) => p.id === pokemon[0].id)
    let previousPokemon
    let nextPokemon
    if (currentIndex === 0) {
      previousPokemon = pokemons.data[pokemons.data.length - 1]
    } else {
      previousPokemon = pokemons.data[currentIndex - 2]
    }
    if (currentIndex === pokemons.data.length - 1) {
      nextPokemon = pokemons.data[0]
    } else {
      nextPokemon = pokemons.data[currentIndex + 1]
    }

    res.status(200).send({ data: { pokemon: pokemon[0], previousPokemon, nextPokemon } })
  } catch (err) {
    err.statusCode = 500
    next(err)
  }
});

router.post('/pokemons', function (req, res, next) {
  try {
    let pokemons = JSON.parse(fs.readFileSync("pokemons.json"))
    let { name, id, types, url } = req.body
    if (!name || !id || !types?.length || !url) {
      throw new Error("Missing required data")
    }
    if (types.length > 2) {
      throw new Error("Pokémon can only have one or two types.")
    }
    const existTypes = types.every(type => pokemonType.includes(type))
    if (!existTypes) {
      throw new Error("Pokémon's type is invalid.")
    }
    const exist = pokemons.data.filter(pokemon => {
      const existId = pokemon.id === parseInt(id)
      const existName = pokemon.name === name
      return existId || existName
    })
    if (exist.length) {
      throw new Error("The Pokémon is exist.")
    }
    pokemons.data.push({ name, id: parseInt(id), types, url })
    pokemons.totalPokemons++
    fs.writeFileSync("pokemons.json", JSON.stringify(pokemons))
    res.status(200).send({ message: "The Pokémon is created!" })
  } catch (err) {
    err.statusCode = 500
    next(err)
  }
});

router.put('/pokemons/:id', function (req, res, next) {
  try {
    let pokemons = JSON.parse(fs.readFileSync("pokemons.json"))
    let { id } = req.params
    let { name, types, url } = req.body
    if (!name || !id || !types?.length || !url) {
      throw new Error("Missing required data")
    }
    if (types.length > 2) {
      throw new Error("Pokémon can only have one or two types.")
    }
    const existTypes = types.every(type => pokemonType.includes(type))
    if (!existTypes) {
      throw new Error("Pokémon's type is invalid.")
    }
    const exist = pokemons.data.filter(pokemon => pokemon.id === parseInt(id))
    if (!exist.length) {
      throw new Error("The Pokémon is not exist.")
    }

    pokemons.data = pokemons.data.map(pokemon => {
      if (pokemon.id === parseInt(id)) return { name, id, types, url }
      return pokemon
    })
    fs.writeFileSync("pokemons.json", JSON.stringify(pokemons))
    res.status(200).send({ message: "The Pokémon is updated." })
  } catch (err) {
    err.statusCode = 500
    next(err)
  }
});

router.delete('/pokemons/:id', function (req, res, next) {
  try {
    let pokemons = JSON.parse(fs.readFileSync("pokemons.json"))
    let { id } = req.params
    const exist = pokemons.data.filter(pokemon => pokemon.id === parseInt(id))
    if (!exist.length) {
      throw new Error("The Pokémon is not exist.")
    }
    pokemons.data = pokemons.data.filter(pokemon => pokemon.id !== parseInt(id))
    fs.writeFileSync("pokemons.json", JSON.stringify(pokemons))
    res.status(200).send({ message: "The Pokémon is deleted." })
  } catch (err) {
    err.statusCode = 500
    next(err)
  }
});



module.exports = router;
