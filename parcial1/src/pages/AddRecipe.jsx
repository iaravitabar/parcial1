import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/AddRecipe.css';

function AddRecipe() {

    const [recipe, setRecipe] = useState({
        name: '',
        description: '',
        type: '',
        image: '',
        preparation: '',
    });

    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({
            ...recipe,
            [name]: value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/dishes', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(recipe), 
            });

            if (response.ok) {
                navigate('/');
            } else {
                console.error('Error al agregar la receta', response.statusText);
            }
        } catch (error) {
            console.error('Error al agregar la receta:', error);
        }
    };

    return (
        <div className="add-recipe-container">
            <h2>Agregar Nueva Receta</h2>
            <form onSubmit={handleSubmit}>
            <input
                    name="image"
                    placeholder="imagen"
                    value={recipe.image}
                    onChange={handleChange}
                />
                <input
                    name="name"
                    placeholder="Receta"
                    value={recipe.name}
                    onChange={handleChange}
                />
                <input
                    name="description"
                    placeholder="Descripción"
                    value={recipe.description}
                    onChange={handleChange}
                />
                <input
                    name="preparation"
                    placeholder="preparacion"
                    value={recipe.preparation}
                    onChange={handleChange}
                />
                <input
                    name="type"
                    placeholder="Comida"
                    value={recipe.type}
                    onChange={handleChange}
                />
                <button className="btn-add" type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default AddRecipe;
