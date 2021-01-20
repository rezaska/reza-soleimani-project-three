$(document).ready(function () {

  let choices = [];
  let numberOfChoices = 0;

  // randomizer function
  $(function () {
    const parent = $('.cards');
    const divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });
  // keep the selected card face up when we are selecting the next card
  const selectedCard = $('.flip-card').on('click', function () {
    let $this = $(this);
    if ($this.hasClass('active')) return;

    $this.addClass('active');
    choices.push($this.attr('id'));
    numberOfChoices++;
    if (numberOfChoices > 2) {
      numberOfChoices = 0;
      choices = [];
    };

    // implement game rules
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
        $('.flip-card').off('click');

      } else {
        numberOfChoices = 0,
        choices = []

        const loserMessage = `
      <p class="result-text">
        Game Over!
      </p>`
        $('.result').empty();
        $('.result').append(loserMessage);
        $('.flip-card').off('click');
      }
    }
  });
  // play again button function
  const resetGame = $('.button').on('click', function () {
    location.reload()
  });
});