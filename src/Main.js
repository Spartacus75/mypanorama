import React, {useState, useEffect} from 'react'
import Select from './Components/Select.js'
import Button from './Components/Button.js'
import {Link, useHistory} from 'react-router-dom'
//import axios from 'axios'

function App() {

const [valueDeckName, setValueDeckName] = useState('deck_N2_Bunpo')
const [valueQuestionDuration, setValueQuestionDuration] = useState('1')
const [valueAnswerDuration, setValueAnwserDuration] = useState('1')
const [isCounterHidden,setIsCounterHidden] = useState(false)
const [valueQuestionSize, setValueQuestionSize] = useState('50px')
const [valueAnswerSize, setValueAnswerSize] = useState('30px')
const [valueReview, setValueReview] = useState('no')
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
    },
    {
      value:'deck_Ar_Debutant',
      label: 'Arabe',
      answer: 'okokokok'
    },
    {
      value:'deck_Jp_N1_Kanji',
      label: 'N1 Kanji',
      answer: 'okokokok'
    },
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

const questionFontSize = [
  {
    value: '20px',
    label: '20'
  },
  {
    value: '30px',
    label: '30'
  },
  {
    value: '40px',
    label: '40'
  },
  {
    value: '50px',
    label: '50'
  },
]

const answerFontSize = [
  {
    value: '20px',
    label: '20'
  },
  {
    value: '30px',
    label: '30'
  },
  {
    value: '40px',
    label: '40'
  },
  {
    value: '50px',
    label: '50'
  },
]

const reviewData = [
  {
    value: 'no',
    label: 'No'
  },
  {
    value: 'yes_show',
    label: 'Yes with counter'
  },
  {
    value: 'yes_noShow',
    label: 'Yes w/o counter'
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

const handleChangeQuestionFontSize = (event) => {
  setValueQuestionSize(event.target.value)
}

const handleChangeAnswerFontSize = (event) => {
  setValueAnswerSize(event.target.value)
}

const handleChangeReviewData = (event) => {
  setValueReview(event.target.value)
}

const handleClickButton = () => {

  if (valueDeckName !== ''){

  console.log('on lance le panorama!')
  history.push('/panorama', {
    deckName: valueDeckName,
    //deckData: dataDeck,
    questionDuration: valueQuestionDuration,
    answerDuration: valueAnswerDuration,
    isCounterHidden: isCounterHidden,
    questionFontSize: valueQuestionSize,
    answerFontSize: valueAnswerSize,
    reviewMode: valueReview
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
    <br/>
    OPTIONS
    <br/>
    <div>Show or hide the counter?</div>
    <Select
        label='Counter'
        data={dataIsHidden}
        onChange={handleChangeIsHidden}
        value={isCounterHidden}
    />
    <div>Question: Font size</div>
    <Select
        label='Question Size'
        data={questionFontSize}
        onChange={handleChangeQuestionFontSize}
        value={valueQuestionSize}
    />
    <div>Answer: Font size</div>
    <Select
        label='Answer Size'
        data={answerFontSize}
        onChange={handleChangeAnswerFontSize}
        value={valueAnswerSize}
    />
    <div>Review Mode</div>
    <Select
        label='Review mode'
        data={reviewData}
        onChange={handleChangeReviewData}
        value={valueReview}
    />

    <Button
        label="GO!"
        onClick={handleClickButton}

    />

    </>


  );
}

export default App;
