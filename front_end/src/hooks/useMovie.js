import axios from 'axios';//Permite traer la base de datos
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../reducers/movies';

const useMovie = () => {
  const dispatch = useDispatch();//Se guarda en una constante
  const filters = useSelector(state => state.movie.filters);//trae el estado de la store del objeto filters
  const { data: movies } = useSelector(state => state.movie.movies);//trae el estado de la store del objeto movies

  const params = () => {
    const keysFilters = Object.keys(filters);
    let params = '';
    if (keysFilters.length > 0) {
      keysFilters.forEach((key, index) => {
        const limiter = (index === 0) ? '?' : '&';
        params += `${limiter}${key}=${filters[key]}`;
      })
    }

    return params;
  }

  const getMovie = async () => {
    dispatch(setMovies({ data: [], isLoading: true, isError: false }));//Trae la funcion setMovies y pasa el nuevo estado que va a tener
    //y lo guarda estos nuevos estados en el array. Se guarda la informacion en la data y se recargara.

    try {
      const { data } = await axios.get(`http://localhost:5000/movies${params()}`);

      dispatch(setMovies({ data, isLoading: false, isError: false }));
    } catch (error) {
      console.error(error);

      dispatch(setMovies({ data: [], isLoading: false, isError: true }));
    }
  }

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/movie/${id}`);

      const itemsMovies = movies.filter(item => item?._id !== id);
      dispatch(setMovies({ data: itemsMovies, isLoading: false, isError: false }));
    } catch (error) {
      console.error(error);
    }
  }

  return {
    getMovie,
    deleteMovie,
  }
}

export default useMovie;