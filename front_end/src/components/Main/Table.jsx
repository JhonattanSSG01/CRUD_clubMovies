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
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <i className="ri-edit-line"></i>
                  <i className="ri-delete-bin-5-line"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <i className="ri-edit-line"></i>
                  <i className="ri-delete-bin-5-line"></i>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <i className="ri-edit-line"></i>
                  <i className="ri-delete-bin-5-line"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Table;
