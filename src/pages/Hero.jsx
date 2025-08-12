import "../styles/Hero.css";
import Header from "../components/Header";
import NextSectionBtn from "../components/NextSectionBtn";

const Hero = () => {
  return (
    <div className="bubbles min-h-screen flex flex-col animated-blob">
      <Header />
      <main className="flex flex-col justify-center items-center">
        <section className="flex flex-col justify-center items-center h-[92dvh]">
          <div className="flex justify-center items-center gap-8">
            <h1 className="text-9xl">From</h1>
            <div className="flex flex-col justify-center items-center gap-1 text-4xl">
              <p>code to solutions,</p>
              <p>data to decisions.</p>
            </div>
          </div>
          <p
            className="lato font-light text-2xl mt-2"
            style={{ letterSpacing: "0.20em" }}
          >
            delivered with clarity, quality, and impact.
          </p>
        </section>
        <NextSectionBtn section="about" />
      </main>
    </div>
  );
};

export default Hero;
