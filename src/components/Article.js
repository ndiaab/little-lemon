import React from 'react';
import boursin from '../boursin.png';

const pizzas = require("../pizzas.json");

const price = {
    pizzaprice1:'Junior 9€ | Sénior 15€ | Méga 21€',
    pizzaprice2:'Junior 9€ | Sénior 16€ | Méga 22€',
    calzone:'Junior 9€ | Sénior 15€ | Méga 20€'
}

const Article = () => {
    
  return (
    <>
      {pizzas.map((pizza,index) => {
        //const boursin = require(`${pizza.image}`);
        return (
          <article key={index} >
            <h2>{pizza.title}</h2>
            <br />
            <img className="simulationImage" src={boursin}/>
            <br />
            <p className='pizza'>{pizza.paragraphe}</p>
            <p className='pizza'>{price[pizza.price]}</p>
          </article>
        );
      })}
    </>
  );
};

export default Article;
