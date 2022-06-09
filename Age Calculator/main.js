const synth = window.speechSynthesis;
document.querySelector("#calculate").addEventListener("click", getAge);

function getAge() {
  const cYear = document.querySelector("#current-year").value;
  const bYear = document.querySelector("#birth-year").value;
  const age = cYear - bYear;
    document.querySelector("#result").innerText =  age;
    
    let sayAge = new SpeechSynthesisUtterance(age);

    synth.speak(sayAge);
}
