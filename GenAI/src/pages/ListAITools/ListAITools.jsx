import React, { useState, useEffect } from 'react'
import './ListAITools.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const ListAITools = () => {
    const[allAITools, setAllAITools] = useState([]);

    const fetchAITools = async () => {
        const response = await fetch('http://localhost:3001/ai-info');
        const data = await response.json();
        setAllAITools(data);
    }

    useEffect(() => {
        fetchAITools();
    }, []);

    // const updateAITool = async (id) => {
    //     const response = await fetch(`http://localhost:3001/ai-info/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             trending: false
    //         })
    //     });
    //     if (response.ok) {
    //         fetchAITools();
    //     }
    // }

    const deleteAITool = async (id) => {
        const response = await fetch(`http://localhost:3001/ai-info/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            fetchAITools();
        }
    }



  return (
    <div className='list-aitools'>
        <div className="main-content">
            
        </div>
        <Sidebar />
        <h1>List of all AI Tools</h1>
        <div className="list-format-main">
            <p>Logo</p>
            <p>Name</p>
            <p>Categories</p>
            <p>Edit</p>
            <p>Remove</p>
        </div>
        <div className="list-allaitools">
            <hr />
            {allAITools.map((tool) => (
                <div key={tool.id} className="list-format list-format-main">
                    <img src={tool.urlLogo} alt="Logo"/>
                    <p>{tool.name}</p>
                    <p>{tool.categories.join(', ')}</p>
                    <button onClick={() => updateAITool(tool.id)}>Edit</button>
                    <button onClick={() => deleteAITool(tool.id)}>Remove</button>
                </div>
            ))}
            <hr />
        </div>
    </div>
  )
}

export default ListAITools
