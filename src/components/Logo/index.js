import React from 'react';
import PropTypes from 'prop-types'
import LogoDark from './logo-dark'
import LogoLight from './logo-light'
import LogoGreyscale from './logo-greyscale'
import Github from './github'

function SvgLogo(props) {
  if (props.type === 'dark'){
    return (<LogoDark size={props.size}></LogoDark>)
  }
  else if (props.type === 'light'){
    return (<LogoLight size={props.size}></LogoLight>)
  }
  else if (props.type === 'greyscale'){
    return ( <LogoGreyscale size={props.size}></LogoGreyscale> )
  }
  else if (props.type === 'github'){
    return ( <Github size={props.size} /> )
  }
  else return ( <LogoDark size={props.size}></LogoDark> )
}

SvgLogo.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number.isRequired,
};

export default SvgLogo;
