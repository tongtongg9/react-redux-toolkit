import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://pokeapi.co/api/v2/'

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    endpoints: (builder) => ({
        getPokemon: builder.query({
            query: () => `pokemon`,
        }),
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const { useGetPokemonQuery, useGetPokemonByNameQuery } = pokemonApi
