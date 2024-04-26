import React, { useState } from 'react';

function AddAITool() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Adding new AI Tool:', name, description);
        // Aquí agregarías la lógica para enviar los datos al servidor
    };

    return (
        <div>
            <h2>Agregar AI Tool</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre de la AI Tool"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Descripción"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default AddAITool;
