import React from 'React';
import PropTypes from 'prop-types';

class Quest extends React.Component {
  render() {
    return <div className='gameQuest'>{this.props.quest}</div>;
  }
}

Quest.propTypes = {
  quest: PropTypes.string.isRequired
}

export default Quest;