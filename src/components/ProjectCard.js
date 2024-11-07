import { Col } from "react-bootstrap";
import { useState } from "react";


export const ProjectCard = ({ title, description, imgUrl }) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Col size={12} sm={6} md={4} onClick={() => setOpenModal(true)} >
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
    
    
  )
}
