const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start() 

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    const chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div class="voce-disse">Você disse:</div>
    <span class="box" style="color: #EBF400;">${chute.replace('.','')}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())