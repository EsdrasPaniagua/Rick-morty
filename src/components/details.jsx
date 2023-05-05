import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URl_BASE = "https://be-a-rym.up.railway.app/api/character";
const APY_KEY = "ed425a4b96c7.b4394f78ee82fba658cc";


const Detail = () => {
    const { id } = useParams;
    const [character,setCharacter] = useState({});

    useEffect(() => {
        axios(`${URl_BASE}/${id}?key=${APY_KEY}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);


    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail;