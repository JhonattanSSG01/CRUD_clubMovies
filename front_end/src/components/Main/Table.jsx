import React, { useEffect } from "react";
import useMovie from '../../hooks/useMovie';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../../reducers/movies';
import "./table.css";

const Table = () => {
  const dispatch = useDispatch();//funcion que permite traer y ejecutar las acciones del store
  const filters = useSelector(state => state.movie.filters);//trae el estado de la store del objeto filters
  const { data: movies } = useSelector(state => state.movie.movies);//trae el estado de la store del objeto movies
  const { getMovie, deleteMovie } = useMovie();

  useEffect(() => {
    getMovie();
  }, [filters]);

  const addFilter = (key, value) => {
    const defualtSValues = ['All', 'Year', 'Duration'];
    const endValue = defualtSValues.includes(value) ? null : value;

    if (endValue === null) {
      const { [key]: value, ...restFilters } = filters

      dispatch(updateFilters(restFilters));
    } else {
      dispatch(updateFilters({ ...filters, [key]: value }))
    }
  }

  return (
    <>
      <main>
        <div className="container-buttons">
          <div className="container-filter">
            <select class="form-select all" aria-label="Default select example">
              <option selected>All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select
              class="form-select year"
              aria-label="Default select example"
              onChange={e => addFilter('age', e.target.value)}
            >
              <option selected>Year</option>
              <option value="1990">1990</option>
              <option value="2012">2012</option>
              <option value="2022">2022</option>
            </select>
            <select
              class="form-select duration"
              aria-label="Default select example"
              onChange={e => addFilter('duration', e.target.value)}
            >
              <option selected>Duration</option>
              <option value="90">90 minutes</option>
              <option value="120">120 minutes</option>
              <option value="100">100 minutes</option>
            </select>
          </div>
          <div className="add">
            <button type="button" class="btn">
              Add
              <i className="ri-add-line icon"></i>
            </button>
          </div>
        </div>
        <div className="container table">
          <table class="table-head">
            <thead className="head">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Title</th>
                <th scope="col">Age</th>
                <th scope="col">Duration</th>
                <th scope="col">Language</th>
                <th scope="col">Premiere</th>
                <th scope="col">Country</th>
                <th scope="col">Director</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
          </table>
          <table class="table-light table-hover table-striped table-body">
            <tbody>
              {movies.map(item => (
                <tr key={item._id}>
                  <th>{item._id}</th>
                  <td>{item.title}</td>
                  <td>{item.age}</td>
                  <td>{item.duration}</td>
                  <td>{item.language}</td>
                  <td>{item.premiere}</td>
                  <td>{item.country}</td>
                  <td>{item.director}</td>
                  <td>
                    <button>
                      edit
                      <i className="ri-edit-line"></i>
                    </button>
                    <button onClick={() => deleteMovie(item._id)}>
                      delete
                      <i className="ri-delete-bin-5-line"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Table;
