import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions4 = [
  {
    id: 1,
    question:
      "Jismning joylashuv vektori vaqt o‘tishi bilan qanday o‘zgaradi?",
    options: [
      "Harakat trayektoriyasiga mos ravishda o‘zgaradi",
      "Har doim bir tekisda harakatlanadi",
      "Jism faqat koordinata o‘qining musbat yo‘nalishida harakat qiladi",
      "Tezlik ortganda o‘zgarishsiz qoladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 2,
    question: "Nuqtaning tezlik vektori qanday xususiyatga ega?",
    options: [
      "U har doim traektoriyaning harakat yo‘nalishiga perpendikulyar bo‘ladi",
      "U harakat yo‘nalishiga doimo parallel bo‘ladi",
      "U faqat boshlang‘ich nuqtaga bog‘liq bo‘ladi",
      "U faqat tezlanishga bog‘liq bo‘ladi",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 3,
    question:
      "Jismning tezlanish vektori qachon tezlik vektori yo‘nalishiga to‘g‘ri keladi?",
    options: [
      "Jism faqat tekis harakat qilganda",
      "Jism o’zgarmas tezlanish bilan harakat qilganda",
      "Jism egri chiziqli harakat qilganda",
      "Jism to‘xtab qolganda",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 4,
    question:
      "Nuqtaning harakat trayektoriyasi qanday aniqlanadi?",
    options: [
      "Harakat davomida koordinatalar o‘zgarishi orqali",
      "Jism harakatining bosib o‘tgan yo‘li orqali",
      "Tezlanishning o‘zgarishi orqali",
      "Faqat vaqt o‘zgarishi orqali",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 5,
    question:
      "Agar nuqta harakati koordinatalar usulida berilgan bo‘lsa, tezlik qanday aniqlanadi?",
    options: [
      "Harakat bosib o‘tgan yo‘lning o‘rtacha qiymati orqali",
      "Harakat koordinatalarining vaqt bo‘yicha hosilasi orqali",
      "Jismning og‘irligi orqali",
      "Harakat davri orqali",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 6,
    question:
      "Qanday holatda nuqtaning tezlanishi noldan farqli bo‘ladi?",
    options: [
      "Agar nuqta harakati tekis va o‘zgaruvchan bo‘lsa",
      "Agar nuqta harakati doimiy tezlikda bo‘lsa",
      "Agar nuqta faqat bitta tekislikda harakat qilsa",
      "Agar jism to‘xtab turgan bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 7,
    question:
      "Tabiiy koordinatalar sistemasida harakat qanday o‘rganiladi?",
    options: [
      "Trayektoriya bo‘ylab harakatlanayotgan nuqtaning egri chiziqlilik darajasi asosida",
      "Nuqtaning vaqt bo‘yicha bosib o‘tgan yo‘liga qarab",
      "Harakat koordinatalarining vaqt bo‘yicha ortishi asosida",
      "Jismning o‘q bo‘ylab harakatlanishiga qarab",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 8,
    question:
      "Tabiiy usulda nuqtaning tezlanishi qanday tarkibiy qismlarga ajratiladi?",
    options: [
      "Normal va tangensial tezlanishlarga",
      "Boshqa harakat qiluvchi jismlar ta’sirida hosil bo‘ladigan tezlanish",
      "Faqat tangensial tezlanish",
      "Faqat normal tezlanish",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 9,
    question:
      "Agar jismning harakat trayektoriyasi to‘g‘ri chiziqli bo‘lsa, tabiiy koordinatalar usulidagi tezlanish qanday bo‘ladi?",
    options: [
      "Faqat tangensial tezlanish bo‘ladi, normal tezlanish esa nolga teng bo‘ladi",
      "Faqat normal tezlanish bo‘ladi, tangensial tezlanish esa nolga teng bo‘ladi",
      "Har ikkala tezlanish noldan farqli bo‘ladi",
      "Jism tezligi nolga teng bo‘ladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 10,
    question:
      "Nuqta harakatining trayektoriyasi qanday belgilanadi?",
    options: [
      "Harakat davomida nuqta egallagan barcha nuqtalar to‘plami",
      "Harakat davomida bosib o‘tilgan masofalar yig‘indisi",
      "Harakat vaqtining o‘zgarishi",
      "Faqat boshlang‘ich va oxirgi holat orasidagi to‘g‘ri chiziq",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 11,
    question:
      "Jismning tezligi harakat davomida doimiy bo‘lib qolsa, uning qanday harakat ekanligini aniqlash mumkin?",
    options: [
      "Tekis harakat",
      "O‘zgaruvchan harakat",
      "Egri chiziqli harakat",
      "Dumalash harakati",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 12,
    question:
      "Nuqta harakatini tadqiq qilish uchun qanday fizik kattaliklar asosiy hisoblanadi?",
    options: [
      "Harakat qonuni, tezlik, tezlanish",
      "Jismning hajmi va massasi",
      "Faqat vaqt va masofa",
      "Harakat yo‘nalishining boshlang‘ich koordinatasi",
    ],
    correct: 0, // Javob: A
  },
];

const shuffleOptions = (question) => {
  const optionsWithIndex = question.options.map((option, index) => ({
    option,
    originalIndex: index,
  }));
  for (let i = optionsWithIndex.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndex[i], optionsWithIndex[j]] = [
      optionsWithIndex[j],
      optionsWithIndex[i],
    ];
  }
  const newCorrectIndex = optionsWithIndex.findIndex(
    (opt) => opt.originalIndex === question.correct
  );
  return {
    ...question,
    options: optionsWithIndex.map((opt) => opt.option),
    correct: newCorrectIndex,
  };
};

const QuestionCard = React.memo(({ question, selectedAnswer, onSelect }) => {
  return (
    <div className="mb-6 p-5 bg-white border rounded-lg shadow-sm">
      <p className="font-semibold mb-3">{question.question}</p>
      {question.options.map((option, index) => (
        <label key={index} className="flex items-center gap-2 mb-2 cursor-pointer">
          <input
            type="radio"
            name={`question-${question.id}`}
            checked={selectedAnswer === index}
            onChange={() => onSelect(question.id, index)}
            className="h-4 w-4 text-blue-500"
          />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  );
});

const QuizBolim4 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions4");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions4;
      }
      const randomizedQuestions = loadedQuestions.map((q) =>
        shuffleOptions(q)
      );
      setQuestions(randomizedQuestions);
      localStorage.setItem(
        "quizQuestions4",
        JSON.stringify(randomizedQuestions)
      );
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions4.map((q) =>
        shuffleOptions(q)
      );
      setQuestions(randomizedQuestions);
      localStorage.setItem(
        "quizQuestions4",
        JSON.stringify(randomizedQuestions)
      );
    }
  }, []);

  const handleAnswerSelect = useCallback((questionId, optionIndex) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, []);

  const checkAnswers = useCallback(() => {
    const correctCount = questions.reduce(
      (acc, q) => acc + (selectedAnswers[q.id] === q.correct ? 1 : 0),
      0
    );
    setScore(correctCount);
  }, [questions, selectedAnswers]);

  return (
    <div className="p-5 pt-24 mx-auto bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-6">
        Test Savollari - Bolim 4
      </h1>
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          question={q}
          selectedAnswer={selectedAnswers[q.id]}
          onSelect={handleAnswerSelect}
        />
      ))}
      <button
        onClick={checkAnswers}
        className="bg-blue-500 text-white px-6 py-3 rounded-full w-full mt-4 hover:bg-blue-600 transition-all"
      >
        Natijani ko‘rish
      </button>
      {score !== null && (
        <p className="mt-4 text-xl font-semibold text-center text-green-600">
          Sizning natijangiz: {score} / {questions.length}
        </p>
      )}
    </div>
  );
};

export default QuizBolim4;
