// src/pages/AdminPanel/UpdateAITool.js
import React, { useState } from 'react';

function UpdateAITool() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log('Updating AI Tool:', id, name, description);
        // Aquí agregarías la lógica para actualizar la herramienta en el servidor
    };

    return (
        <div>
            <h2>Actualizar AI Tool</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="ID de la AI Tool"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Nuevo nombre de la AI Tool"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Nueva descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Actualizar</button>
            </form>
        </div>
    );
}

export default UpdateAITool;
