import React from "react";
import "./table.css";

const Table = () => {
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
            >
              <option selected>Year</option>
              <option value="1">1990</option>
              <option value="2">2012</option>
              <option value="3">2022</option>
            </select>
            <select
              class="form-select duration"
              aria-label="Default select example"
            >
              <option selected>Duration</option>
              <option value="1">90 minutes</option>
              <option value="2">120 minutes</option>
              <option value="3">100 minutes</option>
            </select>
          </div>
          <div className="add">
            <button type="button" class="btn">
              Add
              <i className="ri-add-line icon"></i>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Table;
