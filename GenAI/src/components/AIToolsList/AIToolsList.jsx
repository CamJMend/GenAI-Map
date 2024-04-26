// src/pages/AdminPanel/AIToolsList.js
import React from 'react';

function AIToolsList() {
    const tools = [
        { id: 1, name: 'AI Tool 1', description: 'Descripción 1' },
        { id: 2, name: 'AI Tool 2', description: 'Descripción 2' }
    ];

    return (
        <div>
            <h2>Lista de AI Tools</h2>
            {tools.map(tool => (
                <div key={tool.id}>
                    <h3>{tool.name}</h3>
                    <p>{tool.description}</p>
                    <button onClick={() => console.log('Deleting', tool.id)}>Eliminar</button>
                    <button onClick={() => console.log('Updating', tool.id)}>Actualizar</button>
                </div>
            ))}
        </div>
    );
}

export default AIToolsList;

