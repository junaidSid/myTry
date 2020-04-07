let q;
const questions = [
    {
        ques: 'Who was responsible for the creation of the Night King?',
        answer:[
            {opt: 'The Children of the Forest', correct: true},
            {opt: 'The Lord of Light', correct: false},
            {opt: 'The First Men', correct: false},
            {opt: 'The Drowned God', correct: false}
        ]
    },
    {
        ques: 'In the TV show, what was Hodor called before he got his tragic door-holding nickname?',
        answer:[
            {opt: 'Redmund', correct: false},
            {opt: 'Bruce', correct: false},
            {opt: 'Wylis', correct: true},
            {opt: 'Gladys', correct: false}
        ]
    },
    {
        ques: 'Iwan Rheon, who played Ramsay Bolton, was almost cast as which character?',
        answer:[
            {opt: 'Robb Stark', correct: false},
            {opt: 'Podrick', correct: false},
            {opt: 'Gendry', correct: false},
            {opt: 'Jon Snow', correct: true}
        ]
    },
    {
        ques: 'Who said: \'I don’t plan on knitting by the fire while men fight for me\'?',
        answer:[
            {opt: 'Lyanna Mormont', correct: true},
            {opt: 'Olena Tyrell', correct: false},
            {opt: 'Cersie Lannister', correct: false},
            {opt: 'Sansa Stark', correct: false}
        ]
    },
    {
        ques: 'What is the name of the giant dragon-slaying crossbow that failed to protect King’s Landing?',
        answer:[
            {opt: 'Dragon\'s Death', correct: false},
            {opt: 'Millepede', correct: false},
            {opt: 'Mantis', correct: false},
            {opt: 'Scorpion', correct: true}
        ]
    },
    {
        ques: 'In which King’s Landing slum did Gendry grow up?',
        answer:[
            {opt: 'Flea Bottom', correct: true},
            {opt: 'Dragonpit', correct: false},
            {opt: 'Blacksmith Lane', correct: false},
            {opt: 'Rhaenys\' Hill', correct: false}
        ]
    },
    {
        ques: 'Cersei visited a fortune teller as a teenager and got some very bad news. What was her name?',
        answer:[
            {opt: 'Maggie the Frog', correct: true},
            {opt: 'Jenny the Newt', correct: false},
            {opt: 'Melisandre', correct: false},
            {opt: 'Winnie the Lizard', correct: false}
        ]
    },
    {
        ques: 'The King Beyond the Wall, Mance Rayder, was roasted alive on whose orders?',
        answer:[
            {opt: 'Cersei Lannister', correct: false},
            {opt: 'Stannis Baratheon', correct: true},
            {opt: 'Roose Bolton', correct: false},
            {opt: 'Jon Snow', correct: false}
        ]
    },
    {
        ques: 'What were the first words King Robert said to Ned Stark in episode one of season one?',
        answer:[
            {opt: 'You’ve got fat.', correct: true},
            {opt: 'You’ve not changed.', correct: false},
            {opt: 'You look old', correct: false},
            {opt: 'Bend the knee', correct: false}
        ]
    },
    {
        ques: 'What\'s the name of Lysa Arryn\'s too-old-to-be-nursing son?',
        answer:[
            {opt: 'Ned', correct: false},
            {opt: 'Jon', correct: false},
            {opt: 'Edmere', correct: false},
            {opt: 'Robin', correct: true}
        ]
    }
]

const sBtn=document.getElementById('start');
const nBtn=document.getElementById('next');
const quesContElem = document.getElementById('q-container')
const q_elem=document.getElementById('question')
const ans_elem=document.getElementById('ans-btn')
const q_collection=questions;
let qNum;


sBtn.addEventListener('click', startGame)
nBtn.addEventListener('click', () => {
    qNum++
    setNextQues()
})

function startGame(){
    sBtn.classList.add('hide')
    quesContElem.classList.remove('hide')
    qNum=0;
    quesContElem.classList.remove('hide')
    setNextQues()
}
function setNextQues(){
    reset()
    showQuestion()
}
function selectAnswer(e){
    let selectedButton=e.target
    correct=selectedButton.dataset.correct;
      setStatusClass(document.body,correct)
      Array.from(ans_elem.children).forEach(button =>{
          setStatusClass(button,button.dataset.correct)
      }
        )
      
      if (questions.length > qNum + 1) {
        nBtn.classList.remove('hide')
      } else {
        sBtn.innerText = 'Restart'
        sBtn.classList.remove('hide')
        q_elem.classList.add('hide')
      }
      nBtn.classList.remove('hide')
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct)
        element.classList.add('correct')
    else
        element.classList.remove('wrong')
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function reset(){
    nBtn.classList.add('hide')
    while (ans_elem.firstChild) {
        ans_elem.removeChild(ans_elem.firstChild)
      }
}

function showQuestion(){
    q=q_collection[qNum]
    q_elem.innerText=q.ques;
    q.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.opt
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        ans_elem.appendChild(button)
      })
}