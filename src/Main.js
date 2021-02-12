import React, {useState, useEffect} from 'react'
import Select from './Components/Select.js'
import Button from './Components/Button.js'
import {Link, useHistory} from 'react-router-dom'
//import axios from 'axios'

function App() {

const [valueDeckName, setValueDeckName] = useState('N2_Bumpo')
const [valueQuestionDuration, setValueQuestionDuration] = useState('1')
const [valueAnswerDuration, setValueAnwserDuration] = useState('1')
const [isCounterHidden,setIsCounterHidden] = useState(false)
//const [dataDeck, setDataDeck] = useState([])

var lien = 'https://maanan.xyz/panorama/deck_N2_Bunpo.json'

const history = useHistory()

const dataTable = [
    {
      value:'deck_N1_Bunpo',
      label: 'N1 Bunpo',
      //answer: 'fdsgdfgfd'
    },
    {
      value:'deck_N2_Bunpo',
      label: 'N2 Bunpo',
      answer: 'okokokok'
    }
  ]

const dataIsHidden =[
  {
    value: false,
    label: 'Hide'
  },
  {
    value: true,
    label: 'Show'
  },
]

const valueDuration = [
    {
      value: 1,
      label: '1 second'
    },
    {
      value: 3,
      label: '3 seconds'
    },
    {
      value: 5,
      label: '5 seconds'
    },
    {
      value: 7,
      label: '7 seconds'
    },
    {
      value: 9,
      label: '9 seconds'
    },
    {
      value: 11,
      label: '11 seconds'
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

const handleChangeIsHidden = (event) => {
  setIsCounterHidden(event.target.value)
}

const handleClickButton = () => {

  if (valueDeckName !== ''){

  console.log('on lance le panorama!')
  history.push('/panorama', {
    deckName: valueDeckName,
    //deckData: dataDeck,
    questionDuration: valueQuestionDuration,
    answerDuration: valueAnswerDuration,
    isCounterHidden: isCounterHidden
  })

  } else {console.log('error...')}

}
//console.log(valueDeckName)
/*
console.log({
  'deck':valueDeckName,
  'question': valueQuestionDuration,
  'answer': valueAnswerDuration
})*/
/*
useEffect(()=>{
  console.log('3 - component rendu!')
  //IL FAUDRAIT RESSORTIR LE FETCH DATA CA PAS DE SENS DE FETCH TOUTES LES SECONDES...
  async function fetchData(){
      await axios.get(lien)
          //.then(response => response.json())
          //.then(response => console.log(response))
          .then(response => setDataDeck(response))
          .catch(error => console.log(error))
  }
  fetchData()
}, [])
*/


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
    <div>Show or hide the counter?</div>
    <Select
        label='Counter'
        data={dataIsHidden}
        onChange={handleChangeIsHidden}
        value={isCounterHidden}
    />
    <Button
        label="GO!"
        onClick={handleClickButton}

    />
    </>


  );
}

export default App;
