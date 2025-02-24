import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions8 = [
  {
    id: 1,
    question:
      "Qaysi holatda mexanik sistemaning massalar markazi o‘zgarishi mumkin?",
    options: [
      "Tashqi kuch ta’sir qilganda",
      "Jism muvozanatda bo‘lganda",
      "Faqat jism erkin tushayotganda",
      "Agar sistemadagi jismlar og‘irligi bir xil bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 2,
    question:
      "Mexanik sistemaning umumiy massasi qanday aniqlanadi?",
    options: [
      "Barcha jismlar massalarining yig‘indisi sifatida",
      "Faqat eng katta massali jism og‘irligi orqali",
      "Jismlarning massasi va hajmi nisbatiga qarab",
      "Jismlarning tortishish kuchi bilan bog‘liq holda",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 3,
    question:
      "Ichki va tashqi kuchlar o‘rtasidagi asosiy farq nima?",
    options: [
      "Ichki kuchlar sistemaning o‘z ichida ta’sir qiladi, tashqi kuchlar esa tashqaridan keladi",
      "Ichki kuchlar faqat jismning og‘irligiga bog‘liq",
      "Tashqi kuchlar har doim sistemani harakatga keltiradi",
      "Ichki kuchlar sistemaga hech qanday ta’sir ko‘rsatmaydi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 4,
    question:
      "Qanday holatda ichki kuchlar sistemaning umumiy harakatiga ta’sir qilmaydi?",
    options: [
      "Agar barcha ichki kuchlar bir-biriga teng va qarama-qarshi bo‘lsa",
      "Agar sistemada tashqi kuchlar mavjud bo‘lsa",
      "Agar sistemada hech qanday kuch bo‘lmasa",
      "Agar sistemadagi jismlar harakatsiz bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 5,
    question:
      "Qaysi kuch tashqi kuch hisoblanadi?",
    options: [
      "Gravitatsiya kuchi",
      "Jismlar orasidagi tortishish kuchi",
      "Jismning deformatsiyalanish kuchi",
      "Sistemadagi jismlar o‘zaro ta’sir qiladigan kuch",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 6,
    question: "Inersiya momenti nima?",
    options: [
      "Jismning aylanishga nisbatan qarshiligi",
      "Jismning og‘irligi",
      "Jismning tezligi",
      "Jismning massasi va hajmi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 7,
    question: "Inersiya momenti qanday omillarga bog‘liq?",
    options: [
      "Massaning taqsimlanishiga va aylanish markaziga bo‘lgan masofaga",
      "Jismning faqat massasi bilan bog‘liq",
      "Jismning og‘irlik kuchi bilan bog‘liq",
      "Faqat jismning tezligiga bog‘liq",
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

const QuizBolim8 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions8");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions8;
      }
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions8", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions8.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions8", JSON.stringify(randomizedQuestions));
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
        Test Savollari - Bolim 8
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

export default QuizBolim8;
