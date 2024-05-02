import React, { useState, useEffect } from 'react';
import './ListAITools.css';
import Sidebar from '../../components/Sidebar/Sidebar';

const ListAITools = () => {
    const [allAITools, setAllAITools] = useState([]);
    const [filteredAITools, setFilteredAITools] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchAITools = async () => {
        const response = await fetch('http://localhost:3001/ai-info');
        const data = await response.json();
        setAllAITools(data);
        setFilteredAITools(data);  // Set filtered list to all tools initially
    };

    useEffect(() => {
        fetchAITools();
    }, []);

    useEffect(() => {
        // Filter AI tools based on the search term
        const results = allAITools.filter(tool =>
            tool.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredAITools(results);
    }, [searchTerm, allAITools]);

    const deleteAITool = async (id) => {
        const response = await fetch(`http://localhost:3001/ai-info/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            fetchAITools(); // Refetch the list after deleting an item
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className='list-aitools'>
            <Sidebar />
            <div className="main-content">
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />
            <div className="list-format-main">
                <p>Logo</p>
                <p>Name</p>
                <p>Categories</p>
                <p>Edit</p>
                <p>Remove</p>
            </div>
            <div className="list-allaitools">
                {filteredAITools.map((tool, index) => (
                    <React.Fragment key={tool.id}>
                        <div className="list-format list-format-main">
                            <img src={tool.urlLogo} alt="Logo"/>
                            <p>{tool.name}</p>
                            <p>{tool.categories.join(', ')}</p>
                            <button onClick={() => updateAITool(tool.id)}>Edit</button>
                            <button onClick={() => deleteAITool(tool.id)}>Remove</button>
                        </div>
                        {/* Only render the <hr> if it's not the last item */}
                        {index !== filteredAITools.length - 1 && <hr />}
                    </React.Fragment>
                ))}
            </div>
            </div>
        </div>
    );
};

export default ListAITools;

