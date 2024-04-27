
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './Admin.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import AddAITool from '../../components/AddAITool/AddAITool';
import AIToolsList from '../../components/AIToolsList/AIToolsList';
import UpdateAITool from '../../components/UpdateAITool/UpdateAITool';


function Admin() {
    return (
        <div className='admin'>
            <h1>Panel de Administración de AI Tools</h1>
            <Sidebar />
            <Routes>
                <Route path='/addaitool' element={<AddAITool/>}/>
                <Route path='/aitoolslist' element={<AIToolsList/>}/>
                <Route path='/updateaitool' element={<UpdateAITool/>}/>
            </Routes>
        </div>
    );
}

export default Admin;
