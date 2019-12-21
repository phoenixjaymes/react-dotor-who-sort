import React from 'react';
import PropTypes from 'prop-types';

const ImgWrap = ({ children, data, handleInfoClick }) => {
  let intial = '';

  if (data.role === "doctors") {
    intial = 'D';
  } else if (data.role === 'companions') {
    intial = 'C';
  } else if (data.role === 'allies') {
    intial = 'A';
  } else if (data.role === 'villains') {
    intial = 'V';
  }

  const infoClass = data.isInfoShown ? 'show' : 'hide';
  const infoObj = { id: data.id, role: data.role };

  return (
    <div className="img-wrap">
      <button type="button" className="img-wrap__btn" onClick={() => handleInfoClick(infoObj)}>
        {intial}
      </button>
      <div className={`img-wrap__info ${infoClass}`}>
        <button type="button" className="img-wrap__btn-close" onClick={() => handleInfoClick(infoObj)}>X</button>
        {data.name}
      </div>
      {children}
    </div>
  );
};

ImgWrap.propTypes = {
  children: PropTypes.element,
  data: PropTypes.shape({
    id: PropTypes.string,
    role: PropTypes.string,
    name: PropTypes.string,
    isInfoShown: PropTypes.bool,
  }),
  handleInfoClick: PropTypes.func,
};

export default ImgWrap;
