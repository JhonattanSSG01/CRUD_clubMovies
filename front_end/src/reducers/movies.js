import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {},//objeto filters para guardar las peliculas que se van filtrando
  movies: {//objeto movies que obtiene la informacion de la base de datos y se guarda en la data
    data: [],
    isLoading: false,//estado en el que no está cargando
    isError: false,//estado en el que no hay un error
  }
}

export const movieSlice = createSlice({//Estos objetos son los estados que no van a ser mutables, se tomaran, pero no se cambiaran
  name: 'movie',//Se nombra
  initialState,//y se llama su estados iniciales
  reducers: {
    updateFilters(state, action) {
      state.filters = action.payload//funcion donde el estado de filter, ejecute la accion de enviar este estado que se modifico osea un estado que se filtró
    },
    setMovies(state, action){
      state.movies = {//Funcion donde sus acciones se guardan en un array, porque va a tener muchos que van a estar enviandose
        ...state.movies,
        ...action.payload
      };
    },
    setLoadingMovies(state, action) {
      state.movies.isLoading = action.payload;//Funcion donde la accion de recarga se va a enviar
    },
    resetMovies(state){
      state.movies = initialState.movies//Funcion donde la accion será el inicial.
    }
  },
})

// Los creadores de acciones se generan para cada función de reducción de casos.
export const { updateFilters, setMovies, resetMovies, setLoadingMovies } = movieSlice.actions

export default movieSlice.reducer