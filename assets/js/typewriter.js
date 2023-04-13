const carouselText = [
  {text: "growth", color: "white"},
  {text: "product", color: "white"},
  {text: "users' advocate", color: "white"},
  {text: "business", color: "white"},
  {text: "problem solving", color: "white"}
]


$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 80) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    if (letters.length > 8){
      await waitForMs(50);
      $(eleRef).append(letters[i]);
      i++
    }else{
      await waitForMs(80);
      $(eleRef).append(letters[i]);
      i++
    }
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    if (letters.length > 8){
    await waitForMs(30);
    letters.pop();
    $(eleRef).html(letters.join(""));
    }else{
    await waitForMs(50);
    letters.pop();
    $(eleRef).html(letters.join(""));
    }
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1200);
      await deleteSentence(eleRef);
      await waitForMs(250);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}