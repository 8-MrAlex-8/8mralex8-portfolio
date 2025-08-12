import { ChevronsDown } from "lucide-react";

const nextSection = (props) => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="h-[5dvh] flex justify-center items-center">
      <button
        id="section-down"
        className="animate-bounce animate-infinite animate-ease-in"
        onClick={() => scrollToSection(`${props.section}`)}
      >
        <ChevronsDown size={28} className="chevron-down" />
      </button>
    </section>
  );
};

export default nextSection;
