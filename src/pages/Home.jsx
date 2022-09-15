import _ from 'lodash'
import { Fragment } from 'react'

import { useGetPokemonByNameQuery, useGetPokemonQuery } from '../services/pokemon-services'

const Home = () => {
    const { data: pokemonList, error, isLoading } = useGetPokemonQuery()

    if (error) return <p>Oh no, there was an error</p>

    if (isLoading) return <p>Loading</p>

    return (
        <>
            {_.isEmpty(pokemonList) ? (
                <p> No Result !! </p>
            ) : (
                <>
                    {pokemonList.results.map((items, index) => (
                        <div key={index}>{items.name}</div>
                    ))}
                </>
            )}
        </>
    )
}

export default Home
