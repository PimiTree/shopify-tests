(() => {

  function closeSignUpAnnouncement () {
     const signUpAnnouncement = document.querySelector('.sign-up-announcement');

     if (signUpAnnouncement !== null) {
       signUpAnnouncement.querySelector('.x-mark').addEventListener("click", (e) => {
         signUpAnnouncement.remove();
       }, {once: true})

     }
  }

  function numberCounter() {
     const scoreElement = document.querySelectorAll('.main-hero-section__achievements-item [data-score]');

    scoreElement.forEach((score) => {

      const time = 3000;
      const step = 20;
      const maxSteps = time/step | 0;
      let current = 1;
      const numberStep = score.dataset.score / maxSteps;

      const interval = setInterval(() => {
        score.textContent = `${(numberStep * current) | 0}+`;

        current += 1;

         if (current > maxSteps) {
           clearInterval(interval);
         }
       }, step)
    })
  }


  closeSignUpAnnouncement();
  numberCounter();

})()