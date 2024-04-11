import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: white;
  margin-top: 5px;

  &:hover {
    transform: scale(1.1);
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px,
      rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px,
      rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
  }

  & {
    transition: all 0.3s;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const Description = styled.p`
  margin: 10px 0 0;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Card = ({
  imageSrc,
  title,
  description,
  button1Text,
  button2Text,
  link1,
  link2,
}) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <ButtonContainer>
          <Link className="link" to={link1}>
            {button1Text}
          </Link>
          <Link className="link" to={link2}>
            {button2Text}
          </Link>
        </ButtonContainer>
      </Content>
    </CardContainer>
  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button1Text: PropTypes.string.isRequired,
  button2Text: PropTypes.string.isRequired,
  link1: PropTypes.string.isRequired,
  link2: PropTypes.string.isRequired,
};

export default Card;
