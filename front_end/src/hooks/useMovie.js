import axios from 'axios';//Permite traer la base de datos
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../reducers/movies';

const useMovie = () => {
  const dispatch = useDispatch();//Se guarda en una constante
  const filters = useSelector(state => state.movie.filters);//trae el estado de la store del objeto filters
  const { data: movies } = useSelector(state => state.movie.movies);//trae el estado de la store del objeto movies

  const params = () => {//Constante para guardar los parametros de consulta
    console.log(filters);
    const keysFilters = Object.keys(filters);//Esta constante trae el name o el nombre de los atributos que se guardan dentro del objeto filters
    console.log(keysFilters);
    let params = '';
    if (keysFilters.length > 0) {//si es mayor a 0 entonces se recorre los objetos que estan en el filters
      keysFilters.forEach((key, index) => {//Se recorre por parametro que es la clave y el index del objeto
        console.log(key, index);
        const limiter = (index === 0) ? '?' : '&';/*Si está en 0 entonces se coloca en la url el "?" sino el "&", lo que indica es que cuando haga la
        consulta se anexanera el objeto en la url*/
        console.log(limiter, 'limiter');
        params += `${limiter}${key}=${filters[key]}`; //se le suma a uno el index y el key va cambiando
        console.log(params, 'limiter');
      })
    }

    console.log(params, 'end');
    return params;
  }
  
  const getMovie = async () => {
    dispatch(setMovies({ data: [], isLoading: true, isError: false }));//Trae la funcion setMovies y pasa el nuevo estado que va a tener
    //y lo guarda estos nuevos estados en el array. Se guarda la informacion en la data y se recargara.

    try {
      const { data } = await axios.get(`http://localhost:5000/movies${params()}`);//Trae la data y el params de la url del filters que se van obteniendo se guardan.

      dispatch(setMovies({ data, isLoading: false, isError: false }));//pasando el nuevo estado cuando se obtiene el objeto filtrado no se recarga
    } catch (error) {
      console.error(error);

      dispatch(setMovies({ data: [], isLoading: false, isError: true }));//si no muestra el error
    }
  }

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/movie/${id}`);//espera hasta que algo detenga la promesa 

      const itemsMovies = movies.filter(item => item?._id !== id);//filtra los objetos pormedio de item y si encuentra el id
      dispatch(setMovies({ data: itemsMovies, isLoading: false, isError: false }));//pasando el nuevo estado cuando se obtiene el objeto filtrado no se recarga
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