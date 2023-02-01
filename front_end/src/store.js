import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './reducers/movies';

export const store = configureStore({//Trae los estados de los objetos inmutables
  reducer: {
    movie: movieReducer,//Se especifica cual es el objeto que se va a traer
  },
})