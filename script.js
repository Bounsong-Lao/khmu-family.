document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Quiz Logic
    const questions = [
        {
            question: "ປະໂຫຍກ 'ສຶມມ່າຍເລິ' (Smmaay le'.) ໃນພາສາກຶມມຸ ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂອບໃຈ",
                "ສະບາຍດີ",
                "ລາກ່ອນ",
                "ເຈົ້າຊື່ຫຍັງ?"
            ],
            answer: "ສະບາຍດີ",
            explanation: "ສຶມມ່າຍເລິ ເປັນຄຳທັກທາຍພື້ນຖານ ໝາຍເຖິງ ສະບາຍດີ."
        },
        {
            question: "ຄຳວ່າ 'ໂອຣັກບາ' (O-rak-ba.) ໝາຍຄວາມວ່າແນວໃດ?",
            options: [
                "ຂ້ອຍກິນເຂົ້າ",
                "ຂ້ອຍຮັກເຈົ້າ",
                "ຂ້ອຍໄປ",
                "ຂ້ອຍເຈັບຫົວ"
            ],
            answer: "ຂ້ອຍຮັກເຈົ້າ",
            explanation: "ໂອຣັກບາ ໝາຍເຖິງ ຂ້ອຍຮັກເຈົ້າ."
        },
        {
            question: "ໃນປະໂຫຍກ 'ບາ ເບິຫມາະ' (Ba bəʔ mɑʔ.), 'ບາ' (ba) ໃຊ້ແທນໃຜ?",
            options: [
                "ຂ້ອຍ (I)",
                "ລາວ (ຜູ້ຊາຍ)",
                "ລາວ (ຜູ້ຍິງ)",
                "ພວກເຂົາ"
            ],
            answer: "ລາວ (ຜູ້ຍິງ)",
            explanation: "ບາ (ba) ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຍິງ (third person feminine)."
        },
        {
            question: "ຄຳໃດໃນພາສາກຶມມຸທີ່ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຊາຍ?",
            options: [
                "ໂອະ (ʔoʔ)",
                "ບາ (ba)",
                "ເມ (mɛ)",
                "ນາ (na)"
            ],
            answer: "ເມ (mɛ)",
            explanation: "ເມ (mɛ) ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຊາຍ (third person masculine)."
        },
        {
            question: "ຄຳວ່າ 'ຢົງ' ໃນພາສາກຶມມຸ ໝາຍເຖິງຫຍັງ?",
            options: [
                "ແມ່",
                "ພໍ່",
                "ລູກ",
                "ອ້າຍ"
            ],
            answer: "ພໍ່",
            explanation: "ຢົງ ໝາຍເຖິງ ພໍ່."
        },
        {
            question: "ຖ້າຕ້ອງການເວົ້າວ່າ 'ແມ່' ໃນພາສາກຶມມຸ ຄວນເວົ້າຄຳໃດ?",
            options: [
                "ຢົງ",
                "ມະ",
                "ກຼົນ",
                "ໂຣກ"
            ],
            answer: "ມະ",
            explanation: "ມະ ໝາຍເຖິງ ແມ່."
        },
        {
            question: "ຄຳວ່າ 'ຄິດຮອດພໍ່ແມ່' ໃນພາສາກຶມມຸ ແມ່ນຄຳໃດ?",
            options: [
                "ສຼືເອງ",
                "ສຼືເອງຢົງມະ",
                "ຢົງມະ",
                "ໂອຣັກບາ"
            ],
            answer: "ສຼືເອງຢົງມະ",
            explanation: "ສຼືເອງຢົງມະ ໝາຍເຖິງ ຄິດຮອດພໍ່ແມ່."
        },
        {
            question: "ຄຳວ່າ 'ຄົນຈົນ' ໃນພາສາກຶມມຸ ແມ່ນຄຳໃດ?",
            options: [
                "ກຼົນ",
                "ໂຣກ",
                "ກຼົນໂຣກ",
                "ອຳອາ"
            ],
            answer: "ກຼົນໂຣກ",
            explanation: "ກຼົນ ໝາຍເຖິງ ຄົນ, ໂຣກ ໝາຍເຖິງ ຈົນ. ສະນັ້ນ, ກຼົນໂຣກ ໝາຍເຖິງ ຄົນຈົນ."
        },
        {
            question: "ຖ້າທ່ານມີບາງສິ່ງບາງຢ່າງ 'ບໍ່ມີ' ໃນພາສາກຶມມຸ ທ່ານຈະເວົ້າຄຳໃດ?",
            options: [
                "ອາ",
                "ອຳ",
                "ອຳອາ",
                "ມີອາ"
            ],
            answer: "ອຳອາ",
            explanation: "ອຳ ໝາຍເຖິງ ບໍ່, ອາ ໝາຍເຖິງ ມີ. ສະນັ້ນ, ອຳອາ ໝາຍເຖິງ ບໍ່ມີ."
        },
        {
            question: "ປະໂຫຍກ 'ໂອະ ຫຍໍະໂຫຣງຫຣຽນ' ຈະເປັນປະໂຫຍກທີ່ຖືກຕ້ອງໃນພາສາກຶມມຸ ຖ້າຫາກ 'ຂ້ອຍ' ໄປໂຮງຮຽນ, ແຕ່ຖ້າ 'ລາວ (ຍິງ)' ໄປໂຮງຮຽນ ຈະເວົ້າແນວໃດ?",
            options: [
                "ເມ ຫຍໍະໂຫຣງຫຣຽນ",
                "ນາ ຫຍໍະໂຫຣງຫຣຽນ",
                "ບາ ຫຍໍະໂຫຣງຫຣຽນ",
                "ໂອະ ຫຍໍະຫລາະ"
            ],
            answer: "ບາ ຫຍໍະໂຫຣງຫຣຽນ",
            explanation: "ບາ (ba) ໃຊ້ແທນຄຳວ່າ 'ລາວ' ທີ່ເປັນຜູ້ຍິງ, ສະນັ້ນ ບາ ຫຍໍະໂຫຣງຫຣຽນ ໝາຍເຖິງ ລາວ(ຍິງ) ໄປໂຮງຮຽນ."
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const quizContainer = document.getElementById('quiz-container');
    const quizResults = document.getElementById('quiz-results');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const restartQuizBtn = document.getElementById('restart-quiz-btn');
    const scoreSpan = document.getElementById('score');
    const totalQuestionsSpan = document.getElementById('total-questions');

    startQuizBtn.addEventListener('click', startQuiz);
    restartQuizBtn.addEventListener('click', startQuiz);

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        quizResults.style.display = 'none';
        quizContainer.style.display = 'block';
        totalQuestionsSpan.textContent = questions.length;
        displayQuestion();
    }

    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            const q = questions
            quizContainer.innerHTML = `
                <div class="quiz-question">
                    <h3>${q.question}</h3>
                    <ul class="quiz-options">
                        ${q.options.map(option => `<button>${option}</button>`).join('')}
                    </ul>
                    <div class="feedback"></div>
                    <button id="next-question-btn" style="display:none;">ຄຳຖາມຕໍ່ໄປ</button>
                </div>
            `;
            const optionButtons = quizContainer.querySelectorAll('.quiz-options button');
            optionButtons.forEach(button => {
                button.addEventListener('click', selectAnswer);
            });
        } else {
            showResults();
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const userAnswer = selectedButton.textContent;
        const currentQuestion = questions
        const feedbackDiv = quizContainer.querySelector('.feedback');
        const nextBtn = document.getElementById('next-question-btn');
        const optionButtons = quizContainer.querySelectorAll('.quiz-options button');

        optionButtons.forEach(button => {
            button.disabled = true;
            if (button.textContent === currentQuestion.answer) {
                button.classList.add('correct');
            } else {
                button.classList.add('wrong');
            }
        });

        if (userAnswer === currentQuestion.answer) {
            score++;
            feedbackDiv.textContent = "ຖືກຕ້ອງ! 👍";
            feedbackDiv.classList.remove('wrong');
            feedbackDiv.classList.add('correct');
        } else {
            feedbackDiv.textContent = `ຜິດ! ຄຳຕອບທີ່ຖືກຕ້ອງແມ່ນ: "${currentQuestion.answer}". ${currentQuestion.explanation}`;
            feedbackDiv.classList.remove('correct');
            feedbackDiv.classList.add('wrong');
        }
        nextBtn.style.display = 'block';
        nextBtn.addEventListener('click', nextQuestion);
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizContainer.style.display = 'none';
        quizResults.style.display = 'block';
        scoreSpan.textContent = score;
    }

    // Initial load: show start button
    document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
});
