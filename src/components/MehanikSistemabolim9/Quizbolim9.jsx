import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions9 = [
  {
    id: 1,
    question:
      "Sistema massalar markazining harakati qanday qonunga bo‘ysunadi?",
    options: [
      "Nyutonning ikkinchi qonuniga",
      "Faol kuchlar tenglamasiga",
      "Faqat to‘g‘ri chiziqli harakat qonunlariga",
      "Nyutonning uchinchi qonuniga",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 2,
    question:
      "Sistema massalar markazining tezlanishi nimaga bog‘liq?",
    options: [
      "Sistema massalarining tashqi kuchlar ta’siridagi natijaviy tezlanishiga",
      "Harakat qilayotgan jismlarning ichki kuchlariga",
      "Jismlarning faqat hajmiga",
      "Sistema hajm va massalar nisbatiga",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 3,
    question:
      "Qanday sharoitda sistema massalar markazi tinch holatda bo‘ladi?",
    options: [
      "Agar unga hech qanday tashqi kuch ta’sir qilmasa",
      "Agar sistemaning ichki kuchlari noldan farqli bo‘lsa",
      "Agar sistemadagi jismlar harakatlanayotgan bo‘lsa",
      "Agar sistemadagi jismlar faqat aylanish harakati qilayotgan bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 4,
    question:
      "Qattiq jismning differensial tenglamalari qaysi qonunga asoslanadi?",
    options: [
      "Nyutonning ikkinchi qonuniga",
      "Energiya saqlanish qonuniga",
      "Faqat impulsning o‘zgarish qonuniga",
      "Faqat massalar markazi teoremasiga",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 5,
    question:
      "Mexanik sistema harakat miqdori qachon saqlanadi?",
    options: [
      "Agar unga hech qanday tashqi kuch ta’sir qilmasa",
      "Agar ichki kuchlar noldan farqli bo‘lsa",
      "Agar sistema tezlanish bilan harakat qilsa",
      "Agar sistema faqat aylanma harakatda bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 6,
    question:
      "Harakat miqdorining o‘zgarishi qanday sababga bog‘liq?",
    options: [
      "Tashqi kuchlarning mavjudligiga",
      "Ichki kuchlarning o‘zgarishiga",
      "Jismning massasi o‘zgarishiga",
      "Faqat tortishish kuchiga",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 7,
    question:
      "Harakat miqdorining bosh vektori qanday sharoitda o‘zgarmas bo‘lib qoladi?",
    options: [
      "Agar sistemaga ta’sir qiluvchi tashqi kuchlar yo‘q bo‘lsa",
      "Agar ichki kuchlar yetarli darajada katta bo‘lsa",
      "Agar jism faqat aylanish harakati bajarsa",
      "Agar sistemadagi jismlar bir xil massaga ega bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 8,
    question:
      "Harakat miqdorining bosh vektori qanday fizik ma’noga ega?",
    options: [
      "Sistema umumiy impulsining yo‘nalishi va miqdorini ifodalaydi",
      "Faqat jismning tortishish kuchi bilan bog‘liq bo‘ladi",
      "Faqat inersiya momentini ifodalaydi",
      "Faqat harakat koordinatalari bilan bog‘liq",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 9,
    question:
      "Kinetik moment qanday hollarda saqlanadi?",
    options: [
      "Agar unga tashqi moment ta’sir qilmasa",
      "Agar jism faqat to‘g‘ri chiziqli harakat qilsa",
      "Agar sistemada faqat ichki kuchlar mavjud bo‘lsa",
      "Agar jismning massasi doimiy bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 10,
    question:
      "Qaysi omillar kinetik momentga ta’sir qiladi?",
    options: [
      "Massaning taqsimlanishi va burchak tezligi",
      "Faqat jismning massasi",
      "Faqat tashqi kuchlar",
      "Jismning tezlanish qiymati",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 11,
    question:
      "Kinetik moment qanday o‘zgaradi?",
    options: [
      "Tashqi moment ta’sirida vaqt bo‘yicha o‘zgaradi",
      "Faqat jismning massasi oshganda o‘zgaradi",
      "Faqat ichki kuchlar ta’sirida o‘zgaradi",
      "Doimiy saqlanadi, hech qachon o‘zgarmaydi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 12,
    question:
      "Qachon kinetik moment o‘zgarmas bo‘lib qoladi?",
    options: [
      "Agar sistemaga ta’sir qiluvchi tashqi momentlar nolga teng bo‘lsa",
      "Agar sistemada faqat ichki kuchlar mavjud bo‘lsa",
      "Agar sistema faqat ilgarilanma harakat qilsagina",
      "Agar sistemadagi jismlar massasi teng bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 13,
    question:
      "Jismning burchak tezlanishi qanday faktorlar bilan bog‘liq?",
    options: [
      "Tashqi moment va jismning inersiya momenti bilan",
      "Jismning faqat tezligi bilan",
      "Jismning faqat og‘irlik markazi bilan",
      "Jismning tekis ilgarilanma harakati bilan",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 14,
    question:
      "Agar jismga ta’sir qiluvchi tashqi moment nolga teng bo‘lsa, uning burchak tezligi qanday bo‘ladi?",
    options: [
      "O‘zgarmas qoladi",
      "Sekinlashib boradi",
      "Massaning taqsimlanishiga bog‘liq holda o‘zgaradi",
      "To‘liq nolga aylanadi",
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

const QuizBolim9 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions9");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions9;
      }
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions9", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions9.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions9", JSON.stringify(randomizedQuestions));
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
        Test Savollari - Bolim 9
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

export default QuizBolim9;
