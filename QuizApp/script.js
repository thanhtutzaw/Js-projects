const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex // shuffle and currentIndex
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-buttons')
startButton.addEventListener('click',startGame) // click event1 // function call
nextButton.addEventListener('click',() => {  // click event2 

    currentQuestionIndex++
    setNextQuestion() // function call
}) 

function startGame(){ //start the game
    
    console.log('started game!') //just test
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')

    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    
    setNextQuestion() // function call
}

function setNextQuestion(){ // set next question
    resetState() // function call
    showQuestion(shuffledQuestions[currentQuestionIndex]) // function call
}


function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerElement.firstChild){
        answerElement.removeChild
        (answerElement.firstChild)
    }
}


function showQuestion(question){ // show question
    questionElement.innerHTML = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn') // for btn style and color
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer) // function call
        answerElement.appendChild(button)
    })
}


function selectAnswer(e){ // select answer
    const selectedButton = e.target  // e   for click 
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerElement.children).forEach(button => {
        setStatusClass(button,button.dataset.correct) // this is function call
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){   
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}



function setStatusClass(element,correct){
    clearStatusClass(element) // function call
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const question = [
    {
      question: 'What is 2 + 2?',
      answer: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answer: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answer: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answer: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]
