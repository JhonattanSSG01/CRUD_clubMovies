import React, { useState } from "react";
import "./Sign.css";

export const Sign = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    const body = { setName, setLastname, setEmail, setUsername, setPassword };
    e.preventDefault();
    fetch("http://localhost:5000/signin", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      },
      body: JSON.stringify({ body }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "User Register");
      });
  };
  return (
    <div className="cont">
      <section className="login">
        <section className="here">
          <section className="regi">
            <form onSubmit={handleSubmit}>
              <label className="titles">Sign In</label>
              <div className="name">
                <label htmlFor="name" className="label">
                  {" "}
                  Name{" "}
                </label>
                <br />
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="lastname">
                <label htmlFor="lastname" className="label">
                  {" "}
                  Lastname{" "}
                </label>
                <br />
                <input
                  id="lastname"
                  name="name"
                  type="text"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="email">
                <label htmlFor="email" className="label">
                  {" "}
                  Email{" "}
                </label>
                <br />
                <input
                  id="email"
                  name="email"
                  type="mail"
                  placeholder="examplemail@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="usern">
                <label htmlFor="username" className="label">
                  {" "}
                  Username{" "}
                </label>
                <br />
                <input
                  id="Username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="passw">
                <label htmlFor="Password" className="label">
                  {" "}
                  Password{" "}
                </label>
                <br />
                <input
                  id="Password"
                  name="Password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button id="ok" type="submit">
                {" "}
                Ok{" "}
              </button>
            </form>
          </section>
        </section>
      </section>
    </div>
  );
};
