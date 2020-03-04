import React from 'react';
import './App.css';
import QuizQuestion from './components/QuizQuestion'
import Questions from './questions.json'

const TITLE_STATE = 0
const QUESTION_STATE = 1
const TIME_LIMIT = 10
const FINAL_STATE = 2

class quizQuestion extends React.Component{
  render() {
    return <>
    <h1>{this.props.question}</h1>
    {this.props.answers.map((v, i ) =>
    <input onClick ={() => this.props.nextQuestion()} type="button" key={i} value={v.text} />)}
    </>
  }
}
  
class TitlePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {titleText: "Welcome to our Quiz!",
    currentState: TITLE_STATE,
    counter: 0, 
    currentQuestion: 0}
    this.counter = 0
    this.timeLimit = TIME_LIMIT
  }
  nextQuestion() {
    clearInterval(this.timer)
    this.setState({
      titleText: "You answered early!!!",
      currentState: FINAL_STATE
    })
  }
  countdown(){
    console.log("Handling interval")
    console.log(this.state.counter)
    if(this.state.counter < this.timeLimit){
      this.setState({
        titleText : "Starting the Quiz"
        counter: this.state.counter + 1
      })
    } else {
      this.setState({
        titleText: "Beginning Quiz!",
        currentState = QUESTION_STATE,
        counter: 0
      })
      this.timer = setInterva;(() => this.countdown(), 1000)
      clearInterval(this.timer)
    }
  }
  
  start(){
    console.log("Starting!")
    this.setState({counter:0})
    this.setState({currentState: QUESTION_STATE})
    this.timer = setInterval (() => {
    console.log("INTERVAL CALLED")
    this.setState({counter : this.state.counter+1})
    if(this.state.counter < this.timeLimit) {
      this.setState({titleText: "Begin the Quiz!" + this.state.counter})
    } else {
      this.setState({titleText: "Time's up!"})
      clearInterval(this.Timer)
    }
  }, 1000);
  }
   render(props){
    console.log("RENDER CALLED")
    return(
      <>
        <p>{this.timeLimit - this.state.counter}</p>
        {(this.state.currentState === TITLE_STATE) ? 
        <QuizQuestion answers={questions[this.state.currentQuestion].possibleAnswers}
        question={questions[this.state.currentQuestion].question}
        nextQuestion={() => this.nextQuestion()} />
        : 
        <h1 className='title'>{this.state.titleText}</h1>}
        <input id='startButton' type="button" value="Start" onClick={() => this.start()}></input> 
      </>
    )
  }
}

function App() {
  return (
    <div className="App">
    <TitlePage></TitlePage>
    </div>
  );
}

export default App;
