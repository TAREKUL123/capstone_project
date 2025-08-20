const easyQuestions = [
  {
    question: "নিউক্লিয়ার ফিশন বলতে কী বোঝায়?",
    options: [
      "অতিক্ষুদ্র কণার সৃষ্টি",
      "ভারী পরমাণু ভেঙে হালকা পরমাণু তৈরি",
      "দুটি পরমাণুর মিলন",
      "ইলেকট্রনের স্থান পরিবর্তন"
    ],
    answer: 1,
    explanation: "নিউক্লিয়ার ফিশন হলো ভারী পরমাণু (যেমন ইউরেনিয়াম-২৩৫) ভেঙে দুটি বা ততোধিক হালকা পরমাণু তৈরি হওয়া।"
  },
  {
    question: "নিউক্লিয়ার ফিশন সাধারণত কোন কণার দ্বারা শুরু হয়?",
    options: ["প্রোটন", "নিউট্রন", "ইলেকট্রন", "পজিট্রন"],
    answer: 1,
    explanation: "সাধারণত একটি নিউট্রন ইউরেনিয়াম বা প্লুটোনিয়াম পরমাণুর সাথে সংঘর্ষ করলে ফিশন শুরু হয়।"
  },
  {
    question: "ফিশন বিক্রিয়ায় সবচেয়ে গুরুত্বপূর্ণ বিষয় কোনটি?",
    options: ["গরম হওয়া", "শৃঙ্খল বিক্রিয়া (Chain reaction)", "বিকিরণ আলো", "শুধু গামা রশ্মি"],
    answer: 1,
    explanation: "ফিশনের সময় নতুন নিউট্রন উৎপন্ন হয় যা আবার অন্যান্য পরমাণুকে ভাঙে, একে শৃঙ্খল বিক্রিয়া বলে।"
  },
  {
    question: "ফিশন বিক্রিয়ার ফলে কী ধরনের শক্তি মুক্ত হয়?",
    options: ["বিদ্যুৎ শক্তি", "তাপ শক্তি", "রাসায়নিক শক্তি", "শব্দ শক্তি"],
    answer: 1,
    explanation: "ফিশনে মূলত বিপুল পরিমাণ তাপ শক্তি উৎপন্ন হয়, যা বিদ্যুৎ তৈরিতে ব্যবহার করা হয়।"
  },
  {
    question: "কোন উপাদান নিউক্লিয়ার ফিশনে সবচেয়ে বেশি ব্যবহৃত হয়?",
    options: ["হাইড্রোজেন", "কার্বন", "ইউরেনিয়াম-২৩৫", "অক্সিজেন"],
    answer: 2,
    explanation: "ইউরেনিয়াম-২৩৫ এবং প্লুটোনিয়াম-২৩৯ সবচেয়ে প্রচলিত ফিশন জ্বালানি।"
  }
];


const mediumQuestions = [
  {
    question: "নিউক্লিয়ার ফিশন বিক্রিয়ায় মুক্তিপ্রাপ্ত শক্তি কোথা থেকে আসে?",
    options: [
      "ইলেকট্রন থেকে",
      "ভর-শক্তি রূপান্তর (E = mc²) থেকে",
      "গামা রশ্মি থেকে",
      "রাসায়নিক বন্ধন থেকে"
    ],
    answer: 1,
    explanation: "ভর-শক্তি রূপান্তরের (Einstein’s equation) কারণে সামান্য ভর থেকে বিপুল শক্তি উৎপন্ন হয়।"
  },
  {
    question: "শৃঙ্খল বিক্রিয়া নিয়ন্ত্রণে কোন বস্তু ব্যবহৃত হয়?",
    options: ["সিসা রড", "গ্রাফাইট রড", "কন্ট্রোল রড (বোরন বা ক্যাডমিয়াম)", "অ্যালুমিনিয়াম রড"],
    answer: 2,
    explanation: "কন্ট্রোল রড নিউট্রন শোষণ করে বিক্রিয়ার গতি নিয়ন্ত্রণ করে।"
  },
  {
    question: "একটি পরমাণু বিদ্যুৎকেন্দ্রে ফিশন থেকে উৎপন্ন শক্তি কীভাবে বিদ্যুতে রূপান্তরিত হয়?",
    options: [
      "সরাসরি আলোর মাধ্যমে",
      "তাপ দিয়ে পানি ফুটিয়ে বাষ্প তৈরি হয়",
      "রাসায়নিক বিক্রিয়ার মাধ্যমে",
      "গামা রশ্মি সংগ্রহ করে"
    ],
    answer: 1,
    explanation: "ফিশনে উৎপন্ন তাপ পানি গরম করে বাষ্প তৈরি করে, যা টারবাইন ঘোরায় এবং বিদ্যুৎ উৎপন্ন করে।"
  },
  {
    question: "ফিশন বিক্রিয়ার সময় কোন কণাগুলো বেশি উৎপন্ন হয়?",
    options: ["প্রোটন", "নিউট্রন", "ইলেকট্রন", "ফোটন"],
    answer: 1,
    explanation: "নতুন নিউট্রন বের হয়ে আসে যা আবার শৃঙ্খল বিক্রিয়াকে ত্বরান্বিত করে।"
  },
  {
    question: "ফিশন বিক্রিয়া কোন ধরনের শক্তি উৎপাদনে ব্যবহৃত হয়?",
    options: ["পারমাণবিক শক্তি", "সৌর শক্তি", "বায়ুশক্তি", "রাসায়নিক শক্তি"],
    answer: 0,
    explanation: "ফিশন পারমাণবিক শক্তি উৎপাদনের মূল উৎস।"
  }
];


const hardQuestions = [
  {
    question: "একটি ইউরেনিয়াম-২৩৫ নিউক্লিয়াস ফিশন হলে গড়ে কত নিউট্রন উৎপন্ন হয়?",
    options: ["১", "২ থেকে ৩", "৪ থেকে ৫", "১০"],
    answer: 1,
    explanation: "প্রতি ইউ-২৩৫ ফিশনে গড়ে ২ থেকে ৩টি নিউট্রন উৎপন্ন হয়।"
  },
  {
    question: "‘ক্রিটিকাল মাস’ বলতে কী বোঝায়?",
    options: [
      "পরমাণুর ভর",
      "ফিশন শুরু করার জন্য ন্যূনতম জ্বালানি ভর",
      "কোনো কণার গতি",
      "শক্তির সর্বোচ্চ মান"
    ],
    answer: 1,
    explanation: "ক্রিটিকাল মাস হলো সেই ন্যূনতম জ্বালানি ভর যেখানে স্বয়ংক্রিয় শৃঙ্খল বিক্রিয়া টিকে থাকতে পারে।"
  },
  {
    question: "একটি ফিশন বিক্রিয়ায় সাধারণত কোন দুটি হালকা নিউক্লিয়াস তৈরি হয়?",
    options: [
      "বেরিলিয়াম ও কার্বন",
      "বেরিয়াম ও ক্রিপ্টন",
      "অক্সিজেন ও নাইট্রোজেন",
      "হাইড্রোজেন ও হিলিয়াম"
    ],
    answer: 1,
    explanation: "ইউ-২৩৫ ফিশনে সাধারণত বেরিয়াম (Ba) ও ক্রিপ্টন (Kr) এর মতো হালকা নিউক্লিয়াস তৈরি হয়।"
  },
  {
    question: "ফিশন বিক্রিয়ায় গামা রশ্মি কেন উৎপন্ন হয়?",
    options: [
      "ইলেকট্রনের কারণে",
      "প্রোটন সংঘর্ষের কারণে",
      "নিউক্লিয়াসের অতিরিক্ত শক্তি নিঃসরণের ফলে",
      "রাসায়নিক বিক্রিয়ার কারণে"
    ],
    answer: 2,
    explanation: "ভাঙা নিউক্লিয়াসের অতিরিক্ত শক্তি গামা রশ্মি আকারে বের হয়ে আসে।"
  },
  {
    question: "কোন পরিস্থিতিতে ফিশন বিক্রিয়া বিস্ফোরণ ঘটাতে পারে?",
    options: [
      "ক্রিটিকাল মাস কম হলে",
      "ক্রিটিকাল মাস বেশি হলে এবং নিয়ন্ত্রণ না থাকলে",
      "শুধু একটি নিউট্রন থাকলে",
      "নিউট্রন না থাকলে"
    ],
    answer: 1,
    explanation: "ক্রিটিকাল ভরের চেয়ে বেশি পরিমাণ জ্বালানি নিয়ন্ত্রণ ছাড়া থাকলে অতি দ্রুত শৃঙ্খল বিক্রিয়া হয়ে বিস্ফোরণ ঘটে।"
  }
];


let selectedAnswers = {};
let timerInterval;
let timeLeft = 60;
let userAnswers = [];

document.getElementById('startBtn').addEventListener('click', () => {
  document.getElementById('start-screen').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  generateQuiz();
  startTimer();
});

function generateQuiz() {
  const quiz = document.getElementById('quiz');
  quiz.innerHTML = '';
  selectedAnswers = {};
  userAnswers = [];

  const difficulty = document.getElementById('difficulty').value;
  let selectedQuestions;
  if (difficulty === 'easy') selectedQuestions = easyQuestions;
  else if (difficulty === 'medium') selectedQuestions = mediumQuestions;
  else selectedQuestions = hardQuestions;

  const shuffled = selectedQuestions.sort(() => 0.5 - Math.random());

  shuffled.forEach((q, i) => {
    const qDiv = document.createElement('div');
    qDiv.classList.add('question');

    qDiv.innerHTML = `
      <p>${i + 1}. ${q.question}</p>
      ${q.options.map((opt, idx) =>
        `<label>
          <input type="radio" name="q${i}" value="${idx}" onchange="recordAnswer(${i}, ${idx})">
          ${opt}
        </label><br>`
      ).join('')}
    `;

    quiz.appendChild(qDiv);
  });

  window.currentQuestions = shuffled;
}

function recordAnswer(questionIndex, selectedOption) {
  userAnswers[questionIndex] = selectedOption;
}

function startTimer() {
  timeLeft = 30;
  document.getElementById('time').textContent = timeLeft;
  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('time').textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      submitQuiz();
    }
  }, 1000);
}

document.getElementById('submitBtn').addEventListener('click', () => {
  submitQuiz();
});

function submitQuiz() {
  const inputs = document.querySelectorAll('input[type="radio"]:checked');

  clearInterval(timerInterval);

  let score = 0;
  const qDivs = document.querySelectorAll('.question');
  qDivs.forEach((div, i) => {
    const selected = div.querySelector('input[type="radio"]:checked');
    const selectedValue = selected ? parseInt(selected.value) : null;
    userAnswers[i] = selectedValue;
    if (selectedValue === window.currentQuestions[i].answer) {
      score++;
    }
  });

  document.getElementById('scoreText').textContent = `${score} / ${window.currentQuestions.length}`;
  let feedback = "Try again";
  if (score === window.currentQuestions.length) feedback = "Excellent!";
  else if (score >= 3) feedback = "Good!";
  document.getElementById('feedback').textContent = feedback;

  document.getElementById('resultModal').style.display = 'block';
}

document.getElementById('restartBtn').addEventListener('click', () => {
  document.getElementById('resultModal').style.display = 'none';
  document.getElementById('quiz-container').style.display = 'none';
  document.getElementById('start-screen').style.display = 'block';
});

document.getElementById("reviewBtn").addEventListener("click", showReview);

function showReview() {
  const reviewModal = document.getElementById("reviewModal");
  const reviewContent = document.getElementById("reviewContent");
  reviewContent.innerHTML = "";

  window.currentQuestions.forEach((q, i) => {
    const userAnswer = userAnswers[i];
    const isCorrect = userAnswer === q.answer;

    const reviewBlock = document.createElement("div");
    reviewBlock.classList.add("review-question");

    reviewBlock.innerHTML = `
      <p><strong>Q${i + 1}:</strong> ${q.question}</p>
      <p>Your Answer: ${userAnswer !== undefined ? q.options[userAnswer] : "Not Answered"} ${isCorrect ? "✅" : "❌"}</p>
      <p>Correct Answer: ${q.options[q.answer]}</p>
      <p><em>Explanation:</em> ${q.explanation}</p>
      <hr>
    `;

    reviewContent.appendChild(reviewBlock);
  });

  reviewModal.style.display = "block";
}

function closeReview() {
  document.getElementById("reviewModal").style.display = "none";
}
