import React, { useState, useEffect } from 'react';
import fetchItems from '../fetchAndCache'; // Asegúrate de que la ruta al archivo es correcta
import PieChart from './PieChart';
import ToolList from './ToolList';

const ParentComponent = () => {
  const [tools, setTools] = useState([]);
  const [activeCategories, setActiveCategories] = useState([]);

  useEffect(() => {
    fetchItems().then(fetchedItems => {
      setTools(fetchedItems);
    });
  }, []);

  const handleCategoryToggle = (category) => {
    setActiveCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  return (
    <div>
      <PieChart data={tools} onCategoryToggle={handleCategoryToggle} />
      <ToolList tools={tools} activeCategories={activeCategories} />
    </div>
  );
};

export default ParentComponent;


