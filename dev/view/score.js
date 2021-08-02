import React from 'React';
import PropTypes from 'prop-types';

class Score extends React.Component {
  render() {
    return  <div className='gameScore'>
              <span className="gameScore__winScore">{this.props.wins}</span>
              :
              <span className="gameScore__lostScore">{this.props.losts}</span>
            </div>
  }
}

Score.propTypes = {
  wins: PropTypes.number.isRequired,
  losts: PropTypes.number.isRequired
}

export default Score;