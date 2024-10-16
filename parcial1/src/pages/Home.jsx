import React, { useState, useEffect } from "react";
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const getRecipe = async () => {
    const recipeFetch = await fetch("http://localhost:3000/dishes"); 
    const data = await recipeFetch.json();
    return data;
};

function Home() {
    const [recipe, setRecipe] = useState([]); 
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchRecipe();
    }, []);

    const fetchRecipe = async () => {
        const recipeData = await getRecipe();
        setRecipe(recipeData);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredRecipe = recipe.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="home-container">
            <h1>Recetas</h1>
            <div className="search-container">
                <label htmlFor="search">Buscar por título:</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Buscar receta..."
                    value={searchTerm} 
                    onChange={handleSearchChange} 
                />
            </div>

            <div className="recipe-list">
                {filteredRecipe.length > 0 ? (
                    filteredRecipe.map((recipe) => (
                        <Card
                            key={recipe.id}
                            id={recipe.id}
                            name={recipe.name}
                            type={recipe.type}
                            image={recipe.image}
                            onRecipeDeleted={() => setRecipe(recipe.filter(g => g.id !== recipe.id))}
                        />
                    ))
                ) : (
                    <p>No se encontraron recetas con ese título</p>
                )}
            </div>
            <Link to="/add">
                <button className="add-receta-btn">Agregar Receta</button>
            </Link>
        </div>
    );
}

export default Home;
