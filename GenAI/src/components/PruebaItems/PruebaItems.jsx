import React from 'react'
import Card from '../Card/Card'
import data from '../../assets/data'

const PruebaItems = () => {
  return (
    <div>
        <div className="item">
            {data.map((item) => {
                return <Card key={item.id} urlLogo={item.urlLogo} name={item.name} description={item.description} />
            }
            )}
        </div>
    </div>
  )
}

export default PruebaItems;
