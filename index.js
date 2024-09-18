const velociy = document.querySelector("#velocity")

velociy.addEventListener('change', () => {
    document.querySelector("#velocidade").textContent = velociy.value
})


const speakButton = document.querySelector("#speakButton")
speakButton.addEventListener("click", () => {

    const text = document.querySelector("#word").value
    const utterance = new SpeechSynthesisUtterance(text)

    utterance.lang = 'en'
    utterance.rate = ((velociy.value) / 10)

    window.speechSynthesis.speak(utterance)

})