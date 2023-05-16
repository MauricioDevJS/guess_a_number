// Gerar um número aleatório entre 1 e 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    // Obter o valor digitado pelo jogador
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    // Verificar se o palpite é igual, maior ou menor que o número aleatório
    if (guess === randomNumber) {
        showMessage("Parabéns! Você acertou!");
    } else if (guess < randomNumber) {
        showMessage("Tente um número maior.");
    } else {
        showMessage("Tente um número menor.");
    }
}

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}