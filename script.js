$(document).ready(function () {

  let choices = [];
  let numberOfChoices = 0;

  $(function () {
    const parent = $('.cards');
    const divs = parent.children();
    while (divs.length) {
      parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
  });

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

  let resetGame = $('.button').on('click', function () {
    location.reload()
  });

});