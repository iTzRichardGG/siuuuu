// esto es un comentario

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
  // Estado para manejar el número de la iteración actual de la rotación del texto
  const [loopNum, setLoopNum] = useState(0);

  // Estado para determinar si se está borrando el texto o escribiéndolo
  const [isDeleting, setIsDeleting] = useState(false);

  // Estado para el texto que se muestra en el banner
  const [text, setText] = useState("");

  // Estado para la velocidad de la animación de escritura
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Array de textos que se rotan en el banner
  const toRotate = ["Desarollador web", "Diseñador web", "Diseñador UI/UX"];

  // Tiempo en milisegundos para mostrar cada palabra
  const period = 2000;

  useEffect(() => {
    // Hook useEffect para gestionar el intervalo de animación
    let ticker = setInterval(() => {
      tick(); // Llama a la función tick cada `delta` milisegundos
    }, delta);

    return () => {
      // Limpia el intervalo cuando el componente se desmonte o `delta` cambie
      clearInterval(ticker);
    };
  }, [text]); // El efecto depende del estado `text`

  const tick = () => {
    // Función para manejar la animación del texto
    let i = loopNum % toRotate.length; // Obtiene el índice del texto actual a mostrar
    let fullText = toRotate[i]; // Obtiene el texto completo para la rotación actual
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // Reduce el texto si se está borrando
      : fullText.substring(0, text.length + 1); // Expande el texto si se está escribiendo

    setText(updatedText); // Actualiza el texto mostrado

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2); // Aumenta la velocidad de borrado
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true); // Comienza a borrar cuando se termina de escribir la palabra
      setDelta(period); // Establece el tiempo de espera antes de comenzar a borrar
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false); // Comienza a escribir la siguiente palabra
      setLoopNum(loopNum + 1); // Avanza al siguiente texto en el array
      setDelta(500); // Establece la velocidad de escritura
    }
  };

  return (
    <section className="banner" id="home">
      {/* Sección principal del banner */}
      <Container>
        {" "}
        {/* Contenedor de Bootstrap para el contenido */}
        <Row className="aligh-items-center">
          {" "}
          {/* Fila de Bootstrap para alinear elementos */}
          <Col xs={12} md={6} xl={7}>
            {" "}
            {/* Columna que ocupa diferentes anchos según el tamaño de pantalla */}
            <div>
              {" "}
              {/* Contenedor para el contenido del banner */}
              <span className="tagline">Bienvenido a mi portafolio</span>{" "}
              {/* Mensaje de bienvenida */}
              <h1>
                ¡Hola! soy Richard <br />
                <span className="txt-rotate">
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>{" "}
              <button onClick={() => console.log("connect")}>
                {" "}
                {/* Botón de contacto */}
                Contactame <ArrowRightCircle size={25} />{" "}
                {/* Ícono de flecha */}
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {" "}
            {/* Segunda columna con la imagen */}
            <div>
              <img src={headerImg} alt="Header Img" /> {/* Imagen del banner */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
