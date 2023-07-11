import slider from "../slider-1.png"

const Banner = () => {
  return (
    <section style={{ backgroundImage: `url(${slider})`, backgroundSize: 'cover'}}>
      <article className="offWeekend">
        <h1>30% discount on Friday</h1>
      </article>
    </section>
  );
};

export default Banner;
