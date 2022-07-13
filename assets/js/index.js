let counter = 75
let countdown = function() {
    console.log(counter);
    counter--;
        if(counter === 0){
            console.log("Quiz Over");
            clearInterval(startCountdown);
        };
}

let startCountdown = setInterval(countdown, 1000)

buttonEl.addEventListener("click", function() {
    alert("button clicked");
  });