import "../styles/About.css";
import Picture from "../assets/lanz.jpg";

const About = () => {
  return (
    <div className="about h-[100dvh]">
      <div className="mx-12 h-[100dvh] flex justify-center items-center">
        <section className="w-1/3 flex justify-center items-center">
          <img src={Picture} height="300" width="300" className="person"></img>
        </section>
        <section className="flex flex-col justify-center items-start gap-3 w-2/3">
          <h3 className="text-3xl">Hey there! My name’s Lanz Alexander.</h3>
          <p className="text-lg lato font-light leading-8">
            I’m a Computer Science major at Silliman University, with a passion
            for programming, data, and mathematics. I thoroughly enjoy exploring
            new ideas, recognizing patterns in complex problems, and building
            things with code. I put a lot of care in the little things of my
            work—neat code, logical structure, and clear documentation are
            things I strive for every time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
