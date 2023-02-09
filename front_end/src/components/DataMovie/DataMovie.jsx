import React from "react";

export const DataMovie = () =>{
    const componentDidMount = ()=>{
        fetch("http://localhost:5000/dataMovie",{
            method: "POST",
            crossDomain : true,
            headers: {
                "Content-Type":"application/json",
                    Accept : "application/json",
                    "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "User Data");
        });
    }
    return(
        <section>
            <h1>Hola</h1>
        </section>
    )
}