document.addEventListener('DOMContentLoaded', () => {
    const choices = ['rock', 'paper', 'scissors'];
    const buttons = document.querySelectorAll('.choices button');
    const userChoiceDisplay = document.getElementById('user-choice');
    const computerChoiceDisplay = document.getElementById('computer-choice');
    const winnerDisplay = document.getElementById('winner');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const userChoice = button.id;
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const winner = determineWinner(userChoice, computerChoice);

            userChoiceDisplay.textContent = `You chose: ${capitalize(userChoice)}`;
            computerChoiceDisplay.textContent = `Computer chose: ${capitalize(computerChoice)}`;
            winnerDisplay.textContent = `Winner: ${winner}`;
        });
    });

    function determineWinner(user, computer) {
        if (user === computer) {
            return 'It\'s a tie!';
        }
        if ((user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')) {
            return 'You win!';
        }
        return 'Computer wins!';
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
