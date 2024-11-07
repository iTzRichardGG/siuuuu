import Carousel from "react-multi-carousel";
import { ProgressBar } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import html5 from "../assets/img/html-5.png";
import css from "../assets/img/css3.svg";
import python from "../assets/img/python.png";
import javascript from "../assets/img/java-script.png";
import react from "../assets/img/react.svg";
import django from "../assets/img/django.png";
import laravel from "../assets/img/laravel.svg";
import tailwind from "../assets/img/tailwind.png";
import bootstrap from "../assets/img/bootstrap.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Stack tecnologico</h2>
              <p>
                "Mis habilidades abarcan todo el ciclo de desarrollo de
                software, desde el <br /> diseño de interfaces de usuario hasta la
                implementación y optimización de paginas web. <br />Trabajo con
                diversas tecnologías, siempre buscando crear soluciones
                eficientes y escalables."
              </p>
              <h4>Lenguajes</h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={html5} alt="Image" />
                  <h5>HTML</h5>
                  <ProgressBar className="progress-html" now={90} />
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                  <ProgressBar className="progress-css" now={75} />
                </div>
                <div className="item">
                  <img src={javascript} alt="Image" />
                  <h5>javascript</h5>
                  <ProgressBar className="progress-js" now={50} />
                </div>
                <div className="item">
                  <img src={python} alt="Image" />
                  <h5>Python</h5>
                  <ProgressBar className="progress-python" now={40} />
                </div>
              </Carousel>

              <h4>Frameworks y librerias</h4>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                  <ProgressBar className="progress-react" now={70} />
                </div>
                <div className="item">
                  <img src={django} alt="Image" />
                  <h5>Django</h5>
                  <ProgressBar className="progress-django" now={50} />
                </div>
                <div className="item">
                  <img src={laravel} alt="Image" />
                  <h5>Laravel</h5>
                  <ProgressBar className="progress-laravel" now={30} />
                </div>
                <div className="item">
                  <img src={tailwind} alt="Image" />
                  <h5>Tailwind</h5>
                  <ProgressBar className="progress-tailwind" now={90} />
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Image" />
                  <h5 className="mt-2">Bootstrap</h5>
                  <ProgressBar className="progress-bootstrap" now={60} />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
