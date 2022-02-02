import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './style.css';

const Home = () => {

    const { search } = useLocation();
    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    
    useEffect(() => {
        const searchParams = new URLSearchParams(search);
        const tokenParam = searchParams.get("token") as any;
        const nameParam = searchParams.get("name") as any;
        localStorage.setItem('token', tokenParam);
        setToken(tokenParam);
        setName(nameParam);
    }, [])

    return (
        <div className="home">
            <h1>Query Parameters</h1>
            <br />
            <h2>{token}</h2>
            <br />
            <h3>{name}</h3>
        </div>
    );
}

export default Home;