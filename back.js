let input1 = document.querySelector('input')
let form = document.querySelector('form')
let h1 = document.querySelector('.keyboard')
let playbutton = document.querySelector('.playbutton')
let litxt1 = document.querySelector('.litxt')
let litxt2 = document.querySelector('.litxt1')
let litxt3 = document.querySelector('.litxt2')
let litxt4 = document.querySelector('.litxt3')
let noun1 = document.querySelector('.noun')
let synonym = document.querySelector('.electkeyboard')
let litxt5 = document.querySelector('.Keyboarding')
let noun2 = document.querySelector('.verb')
let purplep = document.querySelector('.purplep')


//                                             ARROW CLICK 

const arrow = document.getElementById('arrow')
const burger = document.querySelector('.hide')


arrow.addEventListener('click' , function(){
    burger.classList.toggle('active5')
})




//                                           BACKEND

async function GetData(){


    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input1.value}`)
    let data = await res.json()
    h1.innerHTML = input1.value
    noun1.innerHTML = data[0].meanings[0].partOfSpeech
    noun2.innerHTML = data[0].meanings[0].partOfSpeech
    litxt1.innerHTML = data[0].meanings[0].definitions[0].definition
    litxt2.innerHTML = data[0].meanings[0].definitions[1].definition
    litxt3.innerHTML = data[0].meanings[0].definitions[2].definition
    synonym.innerHTML = data[0].meanings[0].synonyms
    litxt4.innerHTML = data[0].meanings[1].definitions[0].definition
    litxt5.innerHTML = data[0].meanings[1].definitions[0].example
    purplep.innerHTML = data[0].phonetic

    console.log(data)

    playbutton.addEventListener('click', function(){
        let audio = data[0].phonetics[1].audio
        let audioElement = document.createElement('audio');
        audioElement.setAttribute('src', audio);
        audioElement.play();
    })
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    GetData()
})





//                                         On click change font-family


let text = document.querySelector(".mono")

function changeFont(fontFamily) {
    document.body.style.fontFamily = fontFamily;
    text.textContent = fontFamily;
    
}

