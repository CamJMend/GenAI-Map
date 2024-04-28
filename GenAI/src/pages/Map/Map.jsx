import React from 'react'
import PieChart from '../../components/PieChart/PieChart'
import ToolList from '../../components/ToolList/ToolList'
import './Map.css';

const Map = () => {
  return (
    <div className='mapPage'>
      <PieChart />
      <ToolList />
    </div>
  )
}

export default Map
