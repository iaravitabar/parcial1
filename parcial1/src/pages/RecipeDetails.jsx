import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import '../styles/RecipeDetails.css';



const getRecipeByID = async (id) => {
    const recipeFetch = await fetch(`http://localhost:3000/dishes/${id}`); 
    const recipe = await recipeFetch.json()
    return recipe;
};

function RecipeDetails(){
    const {id} = useParams(); 
    const [recipe, setRecipe] = useState(null); 

    useEffect(() => {
        getRecipeByID(id).then((recipe) => setRecipe(recipe));
    }, [id]);

    if (!recipe) {
        return <p>Cargando...</p>;
    }


    return (
        <div className="details-container">
            <p>{recipe.image}</p>
            <h2>Receta: {recipe.name}</h2>
            <p>Descripcion: {recipe.description}</p>
            <p>Preparacion: {recipe.preparation}</p>
            <p>Categoria: {recipe.type}</p>
            <Link to="/">
            <button className="btn-atras">Atrás</button>
            </Link>
        </div>
    );
}

export default RecipeDetails;