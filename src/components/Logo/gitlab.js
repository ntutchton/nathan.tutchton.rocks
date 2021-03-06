import React from 'react';
import PropTypes from 'prop-types';

function Gitlab(props) {
  return (
    <svg height={`${props.size}px`} viewBox="0 0 430 397" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="stacked_wm_grayscale">
                <path d="M429.05,226.61 L405.05,152.61 L357.36,6 C356.264388,2.62420598 353.119134,0.338240495 349.57,0.338240495 C346.020866,0.338240495 342.875612,2.62420598 341.78,6 L294.12,152.62 L135.88,152.62 L88.22,6 C87.1243878,2.62420598 83.9791339,0.338240495 80.43,0.338240495 C76.8808661,0.338240495 73.7356122,2.62420598 72.64,6 L25,152.62 L1,226.62 C-1.18075917,233.378674 1.24219186,240.772713 7,244.93 L215,396.09 L423.1,244.92 C428.857808,240.762713 431.280759,233.368674 429.1,226.61" id="path46" fill="#A1A1A1"></path>
                <polygon id="path50" fill="#5C5C5C" points="215 396.09 215 396.09 294.12 152.62 135.88 152.62"></polygon>
                <polygon id="path58" fill="#787878" points="215 396.09 135.88 152.62 25 152.62"></polygon>
                <path d="M25,152.62 L1,226.62 C-1.18407767,233.378681 1.23951269,240.774671 7,244.93 L215,396.09 L25,152.62 Z" id="path66" fill="#A1A1A1"></path>
                <path d="M25,152.62 L135.88,152.62 L88.22,6 C87.1243878,2.62420598 83.9791339,0.338240495 80.43,0.338240495 C76.8808661,0.338240495 73.7356122,2.62420598 72.64,6 L25,152.62 Z" id="path74" fill="#5C5C5C"></path>
                <polygon id="path78" fill="#787878" points="215 396.09 294.12 152.62 405 152.62"></polygon>
                <path d="M405,152.62 L429,226.62 C431.184078,233.378681 428.760487,240.774671 423,244.93 L215,396.09 L405,152.62 Z" id="path82" fill="#A1A1A1"></path>
                <path d="M405,152.62 L294.12,152.62 L341.78,6 C342.875612,2.62420598 346.020866,0.338240495 349.57,0.338240495 C353.119134,0.338240495 356.264388,2.62420598 357.36,6 L405,152.62 Z" id="path86" fill="#5C5C5C"></path>
            </g>
        </g>
    </svg>
  );
}

Gitlab.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Gitlab;
