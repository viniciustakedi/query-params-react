import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
            <h1>Query Select</h1>
            <h3>{token}</h3>
            <h4>{name}</h4>

        </div>
    );
}

export default Home;