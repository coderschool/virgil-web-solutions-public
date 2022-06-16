# NodeJS and Express

## Pokédex
In the pokemon world, there are hundreds of pokemon species. In this world, a trainer's best friend is the Pokedex - a pocket wiki about all pokemon where they could find, categorize, and search for a pokemon. 

We are going to create a web application Pokedex that helps trainers around the world learn more about their favorite pokemon.

![image alt](https://cdn.helpex.vn/upload/2020/09/13/05-00-00-000-a6d21e95-eed2-457c-b048-f74476ccbe29.jpg)

### Back-end: API Requirements

- Download and transform data as needed from [kaggle](https://www.kaggle.com/datasets)
    - You can take the csv file from [this](https://www.kaggle.com/datasets/abcsds/pokemon?select=Pokemon.csv)
    - And high quality images from this [set](https://www.kaggle.com/datasets/kvpratama/pokemon-images-dataset)
    - Transform data to the given form:
    - <details>
        <summary><code>pokemons.json</code></summary> 
    
            { "data": [
                    {
                        "id": 1,
                        "name": "bulbasaur",
                        "types": [
                            "grass",
                            "poison"
                        ],
                        "url": "http://localhost:5000/images/1.png"
                    },...
                ],
                "totalPokemons": 721
            }
        
    </details>
        
    - Note: The given CSV file contains the data of 809 pokemon. However, the images are about 721 png images. Your job is to cut off the pokemon that we don't have an image source for.
        
- API for getting all Pokémons
    - Search Pokémons by Type
    - Search Pokémons by Name
- API for getting a single Pokémon information together with information of the previous and the next pokemon.
    - `/api/pokemons/2` return the pokemon with id `2`, `1` and `2`
    - `/api/pokemons/1` return the pokemon with id `1`, `721` and `2`
    - `/api/pokemons/721` return the pokemon with id `721`, `720` and `1`
    - Example: 
        <details><summary>the API <code>/api/pokemons/25</code> will return:</summary> 
    
            {
              "pokemon": {
                "name": "pikachu",
                "types": [
                  "electric"
                ],
                "id": 25,
                "url": "http://localhost:5000/images/25.png"
              },
              "previousPokemon": {
                "name": "arbok",
                "types": [
                  "poison"
                ],
                "id": 24,
                "url": "http://localhost:5000/images/24.png"
              },
              "nextPokemon": {
                "name": "raichu",
                "types": [
                  "electric"
                ],
                "id": 26,
                "url": "http://localhost:5000/images/26.png"
              }
            }
        
    </details> 
        
    
- API for creating new Pokémon (you can use the existing data set or [faker](https://fakerjs.dev/)). Handle error for the cases below:
    - "Missing required data." (`name`, `id`, `types` or `URL`)
    - "Pokémon can only have one or two types." (if the `types`'s length is greater than `2`)
    - "Pokémon's type is invalid." (if the types of Pokémon are not included in the valid given `PokémonTypes` array)
    - "The Pokémon is exist." (if `id` or `name` exists in the database)
- :rocket:  API for updating a Pokémon
- :rocket:  API for deleting a Pokémon by Id 


```javascript=
const pekemonTypes = [
    "bug", "dragon", "fairy", "fire", "ghost", 
    "ground", "normal", "psychic", "steel", "dark", 
    "electric", "fighting", "flyingText", "grass", "ice", 
    "poison", "rock", "water"
]
```
### Front-end: UI Requirements
- User sees all the Pokémons
- User sees a single detail page for a Pokémon
- User sees filter UI and can filter Pokémons with Type
- User sees search UI and can search Pokémons by Name
- :rocket: User sees Infinite scroll (you can use this [library](https://www.npmjs.com/package/react-infinite-scroll-component) for the feature)
**For this assignment, you will be provided with a front-end codebase. But feel free to make your own and create your first full-stack web.*
## Marking Guide
### Demo
Have a look at the [demo]() website

### Marking Guide
Everyone will start at 100 scores.
|   Requirement|Grade   |
|---|---|
|   Missing any user story that is not rocket|-5   |
|   Made rocket| +10  |


This assignment's minimum pass score is 80/100

--- 
**Good luck have fun!**