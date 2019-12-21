import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
} from 'react-bootstrap';

import ImgWrap from './ImgWrap';

const Main = ({ heading, modifiedCharList, handlePicClick, handleInfoClick }) => {
  const characters = modifiedCharList.map(char => (
    <li key={`${char.role}${char.id}`} className={char.role}>
      <ImgWrap data={char} handleInfoClick={handleInfoClick}>
        <img
          src={char.img}
          alt={char.name}
          role="button"
          onClick={() => handlePicClick(char.role, char.id, char.name)}
          onKeyPress={() => handlePicClick(char.role, char.id, char.name)}
        />
      </ImgWrap>
    </li>
  ));

  return (
    <Container as="main" className="pb-2">
      <h1>{heading}</h1>
      <ul className="character-list list-unstyled">
        {characters}
      </ul>
    </Container>
  );
};

Main.propTypes = {
  heading: PropTypes.string,
  modifiedCharList: PropTypes.arrayOf(PropTypes.object),
  handlePicClick: PropTypes.func,
  handleInfoClick: PropTypes.func,
};

export default Main;
