import React, {useState} from "react";
import { Link } from "react-router-dom";
import chat from "./utils/comentario.png"
import "./Login.css";


export const Login = () => {
    const [Username, setuserName] = useState('');
    const [Password, setpassword] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        const Username = setuserName;
        const Password = setpassword;
        console.log(Username, Password);
        fetch("http://localhost:5000/login-user",{
            method: "POST",
            crossDomain : true,
            headers: {
                "Content-Type":"application/json",
                    Accept : "application/json",
                    "Access-Control-Allow-Origin":"*",
            },
            body:JSON.stringify({
                Username,
                Password,
            }),
        }).then((res) => res.json())
        .then((data) => {
            console.log(data, "User Ok");
            if(data.status === "ok"){
                alert("Login Successful");
                window.localStorage.setItem("token", data.data);
                window.location.href="../DataMovie/DataMovie";
            }
        });
    }

    return(
        <section className="login">
            <section className="here">
                <section className="ini">
                    <form onSubmit={handleSubmit}>
                        <label className="title">Login Here</label>
                        <div className="user">
                            <label htmlFor="Username" className="label"> Username </label>
                                <br/>
                                <input
                                    id= "username"
                                    name = "Username"
                                    type = "text"
                                    placeholder="Enter Username"
                                    value={Username}
                                    onChange={(e) => setuserName(e.target.value)}
                                />
                        </div>
                        <div className="pass">
                            <label htmlFor="Password"  className="label"> Password </label>
                                <br/>
                                <input
                                    id= "password"
                                    name = "Password"
                                    type = "password"
                                    placeholder="Password"
                                    value={Password}
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                        </div>    
                        <div className="redic">  
                            <Link to="/header" id="login"> Login </Link>
                            <Link to="Sign" id="sign"> Sign in</Link>
                        </div> 
                        <div className="forget">
                            <img src={chat} alt="chat" className="chat"/>
                            <p>If you don't remember your password,<br/> please, contact the administrator</p>
                        </div> 
                    </form>   
                </section>
            </section>
        </section>
    )
} 