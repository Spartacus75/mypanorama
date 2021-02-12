import React, {useState, useEffect} from 'react'
import axios from 'axios'
import deck_N2_Bunpo from './deck_N2_Bunpo.json'
import deck_N1_Bunpo from './deck_N1_Bunpo.json'

const styles ={
  questionCSS: {
    fontSize: '50px',
    border: '1px solid',
    padding: 10,
    margin: 10,
    borderRadius: 20,
    backgroundColor: '#F0F8FF'
  },
  answerCSS: {
    fontSize: '25px',
    border: '1px solid',
    backgroundColor: '#FAEBD7',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  main:{
    display: 'flex',
    flexDirection: 'column',
    //background: 'red',
    height: 'auto',
    padding:'10px'
  },
  bouton: {
    //background:'blue',
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end'

  }
}

export default function Panorama(props){

var deck = props.location.state.deckName
var questionDuration = props.location.state.questionDuration
var answerDuration = props.location.state.answerDuration
var isCounterHidden = props.location.state.isCounterHidden

switch (deck) {

  case 'deck_N1_Bunpo':
                var myDeck = deck_N1_Bunpo
                var longueur = myDeck.notes.length
                //console.log('la valeur est: ', deck_N1_Bunpo);

                break;

  case 'deck_N2_Bunpo':
                var myDeck = deck_N2_Bunpo
                var longueur = myDeck.notes.length
                //console.log('la valeur est: ', deck_N2_Bunpo);

                break;

  default:
                var myDeck = deck_N2_Bunpo
                var longueur = myDeck.notes.length
                //console.log('la valeur est: ', deck_N2_Bunpo);

}


const [counterQuestion, setCounterQuestion] =useState(questionDuration)
const [questionId, setQuestionId] =useState(0)
const [isAnswer, setIsAnswer] = useState(false)
const [counterAnswer, setCounterAnswer] =useState(answerDuration)

if (counterQuestion ==0 && !isAnswer) {
  setIsAnswer(true)
  setCounterAnswer(answerDuration)

}

if (counterQuestion ==0 && isAnswer && counterAnswer ==0){
  setQuestionId(Math.random())
  setCounterQuestion(questionDuration)
  setIsAnswer(false)
}




const handleClick = () => {
  window.history.back()
}


useEffect(() => {
//console.log('1 - component rendu!')
const timerQuestion =
  counterQuestion > 0 && setInterval(() => setCounterQuestion(counterQuestion - 1), 1000);
/*
const timerAnswer =
  counterAnswer > 0 && setInterval(() => setCounterAnswer(counterAnswer - 1), 1000);
*/
return () => {
  clearInterval(timerQuestion);
  //fetchData();
  //clearInterval(timerAnswer);
  };

},[counterQuestion])


useEffect(() => {
//console.log('1 - component rendu!')
/*const timerQuestion =
  counterQuestion > 0 && setInterval(() => setCounterQuestion(counterQuestion - 1), 1000);
*/
const timerAnswer =
  counterAnswer > 0 && setInterval(() => setCounterAnswer(counterAnswer - 1), 1000);






return () => {
  //clearInterval(timerQuestion);
  //fetchData();
  clearInterval(timerAnswer);
  };

},[counterAnswer])

console.log(
{
  deck: deck,
  counterQuestion: counterQuestion,
  counterAnswer: counterQuestion,
  isAnswer: isAnswer,
  questionId:questionId
}

)


  return (

<>
<div>

        {isCounterHidden &&    <div>
              counter question: {counterQuestion}<br/>
              counter réponse: {counterAnswer}
            </div>}

        {counterQuestion >0 ?
          <div>{/*counterQuestion} second(s) for the questions - Question ID: {Math.round(questionId*longueur)*/}
          <br/>
          <p style={styles.questionCSS}>{myDeck.notes[Math.round(questionId*longueur)].fields[0]}</p>
          </div>
          :
          <p style={styles.questionCSS}>{myDeck.notes[Math.round(questionId*longueur)].fields[0]}</p>

        }
        <br/>
        </div>

        <div style={styles.main}>




        {isAnswer ? <div>{/*On affiche la réponse pendant {counterAnswer}*/}
        <br/>
        <div style={styles.answerCSS}>{myDeck.notes[Math.round(questionId*longueur)].fields[1]}</div>
{deck==='deck_N2_Bunpo' ? <div style={styles.answerCSS}>{myDeck.notes[Math.round(questionId*longueur)].fields[2]}</div> : ''}
{deck==='deck_N2_Bunpo' ? <div style={styles.answerCSS}>{myDeck.notes[Math.round(questionId*longueur)].fields[3]}</div> : ''}
        </div> : ' '}

        <br/>

        <div style={styles.bouton}>
              <button onClick={handleClick}>
              Back to menu
              </button>
        </div>

</div>
</>

  )


}
