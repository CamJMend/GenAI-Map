
import React from 'react';
import AddAITool from '../../components/AddAITool/AddAITool';
import AIToolsList from '../../components/AIToolsList/AIToolsList';
import UpdateAITool from '../../components/UpdateAITool/UpdateAITool';


function Admin() {
    return (
        <div>
            <h1>Panel de Administración de AI Tools</h1>
            <AddAITool />
            <AIToolsList />
            <UpdateAITool />
        </div>
    );
}

export default Admin;
