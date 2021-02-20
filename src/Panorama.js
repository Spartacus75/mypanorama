import React, {useState, useEffect} from 'react'
import axios from 'axios'
import deck_N2_Bunpo from './deck_N2_Bunpo.json'
import deck_N1_Bunpo from './deck_N1_Bunpo.json'
import deck_Ar_Debutant from './deck_Ar_Debutant.json'



export default function Panorama(props){

  var deck = props.location.state.deckName
  var questionDuration = props.location.state.questionDuration
  var answerDuration = props.location.state.answerDuration
  var isCounterHidden = props.location.state.isCounterHidden
  var questionFontSize = props.location.state.questionFontSize
  var answerFontSize = props.location.state.answerFontSize

  const styles ={
    questionCSS: {
      fontSize: questionFontSize,
      border: '1px solid',
      padding: 10,
      margin: 10,
      borderRadius: 20,
      backgroundColor: '#F0F8FF'
    },
    answerCSS: {
      fontSize: answerFontSize,
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
    },
    image:{
      height: '100%',
      width: '100%'
    }
  }




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

  case 'deck_Ar_Debutant':
                var myDeck = deck_Ar_Debutant
                var longueur = myDeck.notes.length
                //console.log('la valeur est: ', deck_N2_Bunpo);

                break;

  case 'deck_Jp_N1_Kanji':

                //on va construire un tableau en dur

                var nombreEntree = 23;
                var myDeck = [];

                for (var i = 1; i < nombreEntree+1; i++) {
                  myDeck.push({
                    link: `https://www.maanan.xyz/resources/N1_Kanji/img_${i}.JPG`,
                    id: i
                  });
                }

/*                var myDeck = [
                  {
                    link: 'https://www.maanan.xyz/resources/N1_Kanji/img_1.JPG',
                    id:0
                  },
                  {
                    link: 'https://www.maanan.xyz/resources/N1_Kanji/img_2.JPG',
                    id:1
                  },
                  {
                    link: 'https://www.maanan.xyz/resources/N1_Kanji/img_3.JPG',
                    id:2
                  },
                ]*/

                var longueur = myDeck.length
                //alert(longueur)
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



//console.log(myDeck)


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

console.log('XXX - ', myDeck)


  return (

<>
{/*WHEN FROM ANKI*/}

{deck !=='deck_Jp_N1_Kanji' &&
<div>

        <div style={styles.bouton}>
              <button onClick={handleClick}>
              Back to menu
              </button>
        </div>

        {isCounterHidden &&    <div>
              counter question: {counterQuestion}<br/>
              counter réponse: {counterAnswer}
            </div>}

        {counterQuestion >0 ?
          <div>{/*counterQuestion} second(s) for the questions - Question ID: {Math.round(questionId*longueur)*/}
          <br/>
          <p style={styles.questionCSS} dangerouslySetInnerHTML={{__html:myDeck.notes[Math.round(questionId*longueur)].fields[0]}}></p>
          </div>
          :
          <p style={styles.questionCSS} dangerouslySetInnerHTML={{__html: myDeck.notes[Math.round(questionId*longueur)].fields[0]}}></p>

        }
        <br/>
</div>}

{deck !=='deck_Jp_N1_Kanji' &&
<div style={styles.main}>




        {isAnswer ? <div>{/*On affiche la réponse pendant {counterAnswer}*/}
        <br/>
{true &&       <div style={styles.answerCSS} dangerouslySetInnerHTML={{__html: myDeck.notes[Math.round(questionId*longueur)].fields[1]}}>
        </div>}

{deck==='deck_N2_Bunpo' ? <div style={styles.answerCSS} dangerouslySetInnerHTML={{__html: myDeck.notes[Math.round(questionId*longueur)].fields[2]}}></div> : ''}
{deck==='deck_N2_Bunpo' ? <div style={styles.answerCSS} dangerouslySetInnerHTML={{__html: myDeck.notes[Math.round(questionId*longueur)].fields[3]}}></div> : ''}
        </div> : ' '}

        <br/>



</div>}

{/*WHEN FROM WEB*/}

{deck == 'deck_Jp_N1_Kanji' &&

<div>

    <div style={styles.bouton}>
          <button onClick={handleClick}>
          Back to menu
          </button>
    </div>

    {isCounterHidden &&    <div>
          counter question: {counterQuestion}<br/>
          counter réponse: {counterAnswer}
        </div>}

{counterQuestion >=0 ?
    <div>

    <img
         src={myDeck[Math.round((longueur-1)*questionId)].link}
         alt="Picture not loaded yet..."
         style={styles.image}
         />


    </div> :''}


</div>

}




</>



  )


}
