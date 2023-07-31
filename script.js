var spanText = function spanText(text) {
    var string = text.innerText;
    var spaned = '';
    for (var i = 0; i < string.length; i++) {
      if(string.substring(i, i + 1) === ' ') spaned += string.substring(i, i + 1);
      else spaned += '<i>' + string.substring(i, i + 1) + '</i>';
    }
    text.innerHTML = spaned;
  }
  
  var headline = document.querySelector("#animated");
  
  spanText(headline);
  
  let animations = document.querySelectorAll('.animation');
  
  animations.forEach(animation => {
    let letters = animation.querySelectorAll('.textColor1 span');
    letters.forEach((letter, i) => {
      letter.style.animationDelay = (i * 0.1) + 's';
    })
  })