import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions6 = [
  {
    id: 1,
    question:
      "Absolyut harakat deganda nima tushuniladi?",
    options: [
      "Jismning boshqa jismlarga bog‘liq holda harakatlanishi",
      "Jismning fazoda qo’zg’almas koordinatalar sistemasida harakatlanishi",
      "Jismning nisbiy koordinata tizimida harakatlanishi",
      "Jismning nisbiy harakati nolga teng bo‘lishi",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 2,
    question:
      "Absolyut harakatni aniqlash uchun qanday asosiy tushunchalar qo‘llaniladi?",
    options: [
      "Absolyut tezlik, absolyut tezlanish va trayektoriya",
      "Faqat tezlik va vaqt",
      "Harakat tenglamalari va tortishish kuchi",
      "Masshtabli chizmalar",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 3,
    question:
      "Qanday holatda jismning absolyut harakati boshqa jismlarga bog‘liq bo‘ladi?",
    options: [
      "Agar jism nisbiy harakat qilayotgan bo‘lsa",
      "Agar jism faqat bir koordinata tizimida harakat qilsa",
      "Agar jism butunlay statik holatda bo‘lsa",
      "Agar jism vaqt o‘tishi bilan joylashuvini o‘zgartirmasa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 4,
    question:
      "Murakkab harakatdagi nuqtaning absolyut tezligi qanday hisoblanadi?",
    options: [
      "Nuqtaning nisbiy va ko’chirma tezliklarining vektor yig‘indisi sifatida",
      "Faqat nuqtaning nisbiy tezligi bilan",
      "Faqat tashuvchi tezlik bilan",
      "Massaga bog‘liq holda o‘zgaradi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 5,
    question:
      "Agar jismning ko’chirma harakati to‘xtatilsa, nuqtaning absolyut tezligi qanday bo‘ladi?",
    options: [
      "Faqat nisbiy harakatdan iborat bo‘ladi",
      "To‘liq nolga teng bo‘ladi",
      "O‘zgarishsiz qoladi",
      "Tashuvchi harakat qayta tiklanganda ortadi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 6,
    question:
      "Ko’chirma harakat qanday harakat bo‘lishi mumkin?",
    options: [
      "Ilgarilanma yoki aylanma harakat",
      "Faqat ilgarilanma harakat",
      "Faqat aylanma harakat",
      "Harakat faqat koordinatalar usulida beriladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 7,
    question:
      "Qanday holatda Koriolis tezlanishi paydo bo‘ladi?",
    options: [
      "Agar jism nisbiy harakat qilayotgan bo‘lsa va ko’chirma harakat ham mavjud bo‘lsa",
      "Agar jism faqat ilgarilanma harakat qilayotgan bo‘lsa",
      "Agar jism faqat bitta koordinata tizimida harakat qilsa",
      "Agar jism mutlaq harakatsiz bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 8,
    question:
      "Koriolis tezlanishining yo‘nalishi qanday aniqlanadi?",
    options: [
      "Jukovskiy qoidasi bo’yicha",
      "Har doim nisbiy harakat yo‘nalishiga parallel bo‘ladi",
      "Jismning og‘irlik markaziga yo‘nalgan bo‘ladi",
      "Faqat vaqtga bog‘liq bo‘ladi",
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
    [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
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

const QuizBolim6 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions6");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions6;
      }
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions6", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions6.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions6", JSON.stringify(randomizedQuestions));
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
        Test Savollari - Bolim 6
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

export default QuizBolim6;
