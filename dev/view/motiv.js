import React from 'React';
import PropTypes from 'prop-types';

class Motiv extends React.Component {
  render() {
    return (<div className='gameMotiv'>
              <span>{this.props.mString}</span>
            </div>);
  }
}

Motiv.propTypes = {
  mString: PropTypes.string.isRequired
}

export default Motiv;