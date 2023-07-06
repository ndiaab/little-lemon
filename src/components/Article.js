const pizzas = require("../pizzas.json");

const Article = () => {
  return (
    <>
      {pizzas.map((pizza,index) => {
        return (
          <article key={index} >
            <h2>{pizza.title}</h2>
            <br />
            <div className="simulationImage">{pizza.image}</div>
            <br />
            <p>{pizza.paragraphe}</p>
          </article>
        );
      })}
    </>
  );
};

export default Article;
