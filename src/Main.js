import React, {useState} from 'react'
import Select from './Components/Select.js'
import Button from './Components/Button.js'
import {Link, useHistory} from 'react-router-dom'

function App() {

const [valueDeckName, setValueDeckName] = useState('N2_Bumpo')
const [valueQuestionDuration, setValueQuestionDuration] = useState('1')
const [valueAnswerDuration, setValueAnwserDuration] = useState('1')

const history = useHistory()

const dataTable = [
    {
      value:'N1_Bumpo',
      label: 'fdfds',
      answer: 'fdsgdfgfd'
    },
    {
      value:'N2_Bumpo',
      label: 'AAA',
      answer: 'okokokok'
    }
  ]

const valueDuration = [
    {
      value: 1,
      label: '1 second'
    },
    {
      value: 2,
      label: '2 seconds'
    },
    {
      value: 3,
      label: '3 seconds'
    },
    {
      value: 4,
      label: '4 seconds'
    },
    {
      value: 5,
      label: '5 seconds'
    }
  ]

const handleChangeDeck = (event) => {
  setValueDeckName(event.target.value)
}

const handleChangeQuestionDuration = (event) => {
  setValueQuestionDuration(event.target.value)
}

const handleChangeAnswerDuration = (event) => {
  setValueAnwserDuration(event.target.value)
}

const handleClickButton = () => {

  if (valueDeckName !== ''){

  console.log('on lance le panorama!')
  history.push('/panorama', {
    deckName: valueDeckName,
    questionDuration: valueQuestionDuration,
    answerDuration: valueAnswerDuration})

  } else {console.log('error...')}

}
console.log(valueDeckName)
/*
console.log({
  'deck':valueDeckName,
  'question': valueQuestionDuration,
  'answer': valueAnswerDuration
})*/

  return (

    <>
    <div>Select the deck to review</div>
    <Select
        label='test'
        data={dataTable}
        onChange={handleChangeDeck}
        value={valueDeckName}

    />
    <div>Select the duration for each question slide</div>
    <Select
        label='Duration'
        data={valueDuration}
        onChange={handleChangeQuestionDuration}
        value={valueQuestionDuration}
    />
    <div>Select the duration for each answer slide</div>
    <Select
        label='Duration'
        data={valueDuration}
        onChange={handleChangeAnswerDuration}
        value={valueAnswerDuration}
    />
    <Button
        label="GO!"
        onClick={handleClickButton}

    />
    </>


  );
}

export default App;
