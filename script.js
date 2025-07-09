let currentIndex = 0;
let score = 0;

const container = document.getElementById('card-container');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restart-btn');
const quitBtn = document.getElementById('quit-btn');
const controls = document.getElementById('controls');

function createCard(questionObj) {
  const card = document.createElement('div');
  card.className = 'card';

  const front = document.createElement('div');
  front.className = 'card-face card-front';

  const questionText = document.createElement('div');
  questionText.className = 'question-text';
  questionText.textContent = questionObj.question;
  front.appendChild(questionText);

  const back = document.createElement('div');
  back.className = 'card-face card-back';

  const backQuestion = document.createElement('p');
  backQuestion.className = 'question-text';
  backQuestion.textContent = questionObj.question;
  back.appendChild(backQuestion);

  const backMessage = document.createElement('p');
  backMessage.className = 'feedback-message';
  back.appendChild(backMessage);

  const backAnswer = document.createElement('p');
  backAnswer.className = 'correct-answer';
  back.appendChild(backAnswer);

  questionObj.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.className = 'option-btn';

    btn.onclick = () => {
      const isCorrect = idx === questionObj.answerIndex;

      // Disable all buttons
      const allBtns = front.querySelectorAll('button');
      allBtns.forEach(b => b.disabled = true);

      if (isCorrect) {
        btn.classList.add('correct');
        updateScore(true);
        setTimeout(() => {
          nextCard();
        }, 1000);
      } else {
        btn.classList.add('wrong');
        backMessage.textContent = "❌ Incorrect";
        backAnswer.textContent = `✅ Correct answer: ${questionObj.options[questionObj.answerIndex]}`;
        card.classList.add('flipped');
        updateScore(false);
        setTimeout(() => {
          nextCard();
        }, 2000);
      }
    };

    front.appendChild(btn);
  });

  card.appendChild(front);
  card.appendChild(back);
  return card;
}

function updateScore(isCorrect) {
  if (isCorrect) score++;
  scoreDisplay.textContent = `Score: ${score}`;
}

function renderCard() {
  container.innerHTML = '';
  const card = createCard(questions[currentIndex]);
  container.appendChild(card);
}

function nextCard() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderCard();
  } else {
    showFinalScore();
  }
}

function showFinalScore() {
  container.innerHTML = `
    <div class="card final-card">
      <h2>✅ Quiz Completed!</h2>
      <p>Your final score: ${score} / ${questions.length}</p>
    </div>
  `;
  controls.classList.remove('hidden');
}

restartBtn.onclick = () => {
  currentIndex = 0;
  score = 0;
  controls.classList.add('hidden');
  scoreDisplay.textContent = 'Score: 0';
  renderCard();
};

quitBtn.onclick = () => {
  container.innerHTML = '<h2>Thanks for playing!</h2>';
  scoreDisplay.textContent = '';
  controls.classList.add('hidden');
};

// Start the quiz
renderCard();
