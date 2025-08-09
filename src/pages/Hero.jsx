import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex justify-center items-center gap-8">
        <h1 className="text-9xl">From</h1>
        <div className="flex flex-col justify-center items-center gap-1">
          <p className="text-4xl">code to solutions,</p>
          <p className="text-4xl">data to decisions.</p>
        </div>
      </section>
      <p
        className="lato font-light text-2xl mt-2"
        style={{ letterSpacing: "0.20em" }}
      >
        delivered with clarity, quality, and impact.
      </p>
    </div>
  );
};

export default Hero;
