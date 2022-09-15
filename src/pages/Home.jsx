import _ from 'lodash'
import { Fragment } from 'react'

import Pokemon from '../components/Card/Pokemon/Pokemon'
import { useGetPokemonByNameQuery, useGetPokemonQuery } from '../services/pokemon-services'

const Home = () => {
    const { data: pokemonList, error, isLoading } = useGetPokemonQuery()

    // const { data: pokemonDetail } = useGetPokemonByNameQuery()

    if (error) return <p>Oh no, there was an error</p>

    if (isLoading) return <p>Loading</p>

    // const pokemonMap = _.map(pokemonList.results, (poke) => {

    //     const { data, error, isLoading } = useGetPokemonByNameQuery(poke.name)
    
    //     if (error) return null

    //     if (isLoading) return null

    //     return data
    // })

    return (
        <>
            {_.isEmpty(pokemonList) ? (
                <p> No Result !! </p>
            ) : (
                <>
                    {pokemonList.results.map((items, index) => (
                        <Pokemon key={index} name={items.name} imgURL={items.url} />
                    ))}
                </>
            )}
        </>
    )
}

export default Home
