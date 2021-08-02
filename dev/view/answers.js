import React from 'React';
import PropTypes from 'prop-types';

class Answers extends React.Component {
  render() {
    let clickHandler = this.props.clickHandler;

    let questAnswers = this.props.answers.map((answer, i) => {
      return (<div key={i}>
                <span onClick={function() {clickHandler(answer)}} className='gameAnswers__answer'>{answer}</span>
              </div>);
    });

    return  (<div className='gameAnswers'>
             {questAnswers}
            </div>);
  }
}

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Answers;