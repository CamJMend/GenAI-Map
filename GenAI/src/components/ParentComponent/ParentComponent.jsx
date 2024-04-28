import React, { useState } from 'react';
import PieChart from './PieChart';
import ToolList from './ToolList';
import mockData from '../../assets/data';

const ParentComponent = () => {
  const [activeCategories, setActiveCategories] = useState([]);

  const handleCategoryClick = category => {
    setActiveCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const chartData = countCategories(mockData); // Assuming countCategories is defined elsewhere

  return (
    <div>
      <PieChart data={chartData} onCategoryClick={handleCategoryClick} />
      <ToolList activeCategories={activeCategories} />
    </div>
  );
};

export default ParentComponent;

