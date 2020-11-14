$(document).ready(function () {

  let choices = [];
  let numberOfChoices = 0;

  // I need to shuffle cards
  //random generator
  //array with joker and not joker

  // function shuffleCards() {
  //   const ;
  //   return ;
  // }

  $(function () {
    const parent = $('.cards');
    const divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });




  const selectedCard = $('.flip-card').on('click', function () {

    choices.push($(this).attr('id'));
    numberOfChoices++;
    if (numberOfChoices > 2) {
      numberOfChoices = 0;
      choices = [];
    };

    // added the win message
    for (let i = 0; i < choices.length; i++) {

      if (choices[i] === 'not-joker' && numberOfChoices == 1) {
        const secondMessage = `
          <p class="result-text">
            Choose Your Second Card!
          </p>`
        $('.result').empty();
        $('.result').append(secondMessage);

      } else if (choices[i] === 'not-joker' && numberOfChoices == 2) {
          const winnerMessage = `
            <p class="result-text">
              You win!
            </p>`
          $('.result').empty();
          $('.result').append(winnerMessage);

      } else {
        numberOfChoices = 0,
        choices = []

        const loserMessage = `
      <p class="result-text">
        Game Over!
      </p>`
        $('.result').empty();
        $('.result').append(loserMessage);
      }
    }

  });

});

// check whether the document is ready for JS.
// have an event listener for click on one of the cards.
// prevent the default behavior.
// create a loop through the chosen card:
// if the first selected card is joker then the game is over (show "game over" message).
// if the selected card is not joker then let the user choose second card (show "choose the next card" message).
// if the second selected card is joker then the game is over (show "game over" message).
// if the second selected card is not joker then the user win (show "you win" message).
