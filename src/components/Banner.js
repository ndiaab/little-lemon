import slider from "../slider-1.png"

const Banner = () => {
  return (
    <section style={{ backgroundImage: `url(${slider})`, backgroundSize: 'cover'}}>
      <article className="offWeekend">
        <h1>Vente à emporter du vendredi au dimanche et vente en livraison 7/7</h1>
      </article>
    </section>
  );
};

export default Banner;
