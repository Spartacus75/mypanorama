import React, {useState, useEffect} from 'react'

export default function Panorama(props){


var nameDeck = props.location.state.deckName
var questionDuration = props.location.state.questionDuration
var answerDuration = props.location.state.answerDuration

const [counterQuestion, setCounterQuestion] =useState(questionDuration)
const [counterAnswer, setCounterAnswer] =useState(answerDuration)

useEffect(() => {
  const timer = setTimeout(() => {
    setCounterQuestion('Timeout called!');
  }, questionDuration*1000);
  return () => clearTimeout(timer);
}, []);



console.log('counter question: ', counterQuestion )
console.log('counter answer: ', counterAnswer )

  return (
    <>

    <div>{nameDeck}</div>
    <div>{questionDuration} second(s) for the questions</div>
    <div>{answerDuration} second(s) for the answer</div>





    </>
  )


}
