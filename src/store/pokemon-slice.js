import { createSlice } from '@reduxjs/toolkit'

// initial State
const initialState = {
    pokemon: [],
}

const pokemonSlice = createSlice({
    name: 'pokemon_slice',
    initialState,
    reducers: {},
})

export default pokemonSlice.reducer
