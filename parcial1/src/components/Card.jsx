import React from "react";
import { Link } from 'react-router-dom';
import './Card.css';


function Card({ id, name, type, image, onRecipeDeleted }) { 


    const deleteRecipe = async () => {
        try {
            const response = await fetch(`http://localhost:3000/dishes/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                onRecipeDeleted(id);
            } else {
                console.error('Error al eliminar la receta', response.statusText);
            }
        } catch (error) {
            console.error('Error al eliminar la receta:', error);
        }
    };

    return (
        <div className="card">
            <h4>{image}</h4>
            <h2>{name}</h2>
            <h3>{type}</h3>
            <Link to={`/recipe/${id}`}>
                <button className="details-btn">Detalles</button>
            </Link>
            <button className="delete-btn" onClick={deleteRecipe}>Borrar</button> 
        </div>
    );
}

export default Card;
