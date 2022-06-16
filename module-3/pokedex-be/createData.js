const csv = require("csvtojson");
const fs = require("fs")
require("dotenv").config()

const createData = async () => {
    try {
        let db = JSON.parse(fs.readFileSync("pokemons.json"))
        let pokemons = await csv().fromFile("pokemon.csv")
        pokemons = pokemons.map((p, index) => {
            let types = []
            for (let [key, value] of Object.entries(p)) {
                if (key.startsWith("Type")) {
                    types.push(value.toLowerCase())
                }
            }
            return { name: p.Name, types, id: index + 1 }
        })
        let newSet = new Set(pokemons)
        pokemons = Array.from(newSet).map(pokemon => {
            return { ...pokemon, url: `${process.env.BACKEND_URL}/images/${pokemon.id}.png` }
        })
        db.data = pokemons.slice(0, 721)
        db.totalPokemons = db.data.length
        fs.writeFileSync("pokemons.json", JSON.stringify(db))
    } catch (err) {
        console.log(err)
    }
}
createData()