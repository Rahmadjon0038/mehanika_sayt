import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions5 = [
  {
    id: 1,
    question:
      "Qattiq jismning ilgarilanma harakatida qanday xususiyat mavjud?",
    options: [
      "Jismning barcha nuqtalari bir xil tezlik bilan harakatlanadi",
      "Jismning barcha nuqtalari turli tezlik bilan harakatlanadi",
      "Jism faqat bir nuqtasi orqali harakatlanadi",
      "Jism doimo egri chiziq bo‘ylab harakatlanadi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 2,
    question:
      "Ilgarilanma harakatda jismning ixtiyoriy ikkita nuqtasi orasidagi masofa qanday o‘zgaradi?",
    options: [
      "O‘zgarmaydi",
      "Koordinatalar sistemasi o‘zgarishiga bog‘liq",
      "Har doim kamayadi",
      "Harakat traektoriyasiga bog‘liq bo‘ladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 3,
    question:
      "Ilgarilanma harakatda qattiq jism qanday koordinata sistemasida eng qulay tadqiq qilinadi?",
    options: [
      "Harakat yo‘nalishiga parallel bo‘lgan koordinatalar sistemasida",
      "Doimiy radius bilan berilgan tizimda",
      "Tekislikka nisbatan perpendikulyar bo‘lgan tizimda",
      "Koordinatalar tizimiga bog‘liq emas",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 4,
    question:
      "Qattiq jismning qo‘zg‘almas o‘q atrofida aylanma harakati uchun asosiy shart nima?",
    options: [
      "Jismning barcha nuqtalari aylanish markazidan turli masofada harakatlanishi",
      "Jismning harakat markazi bitta nuqtada bo‘lishi",
      "Jismning barcha nuqtalari bir xil radiusda harakat qilishi",
      "Jismning barcha nuqtalari harakatlanmasligi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 5,
    question:
      "Aylanma harakatda burchak tezlik qanday o‘zgarishi mumkin?",
    options: [
      "Faqat ortib borishi mumkin",
      "Faqat kamayib borishi mumkin",
      "Ixtiyoriy o‘zgarishi mumkin",
      "Doimo nolga teng bo‘ladi",
    ],
    correct: 2, // Javob: C
  },
  {
    id: 6,
    question:
      "Agar jism o’zgarmas burchak tezlik bilan harakat qilsa, u qanday harakat turiga kiradi?",
    options: [
      "Tekis aylanma harakat",
      "Tezlanayotgan aylanma harakat",
      "Sekinlashayotgan aylanma harakat",
      "Ilgarilanma harakat",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 7,
    question:
      "Burchak tezlik vektori qanday yo‘nalishda bo‘ladi?",
    options: [
      "Aylanma harakat tekisligiga perpendikulyar",
      "Harakat tekisligiga parallel",
      "Harakat traektoriyasiga teng",
      "Harakat markazi bilan bir xil yo‘nalishda",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 8,
    question:
      "Burchak tezlanish vektori qanday harakatni tavsiflaydi?",
    options: [
      "Burchak tezlikning vaqt bo‘yicha o‘zgarishini",
      "Jismning aylanish markaziga yaqinlashishini",
      "Jismning trayektoriyasini",
      "Jismning tortishish kuchiga bo‘ysunishini",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 9,
    question:
      "Agar jismning burchak tezlanishi nol bo‘lsa, bu qanday harakat ekanligini bildiradi?",
    options: [
      "Tekis aylanma harakat",
      "Tezlanayotgan harakat",
      "Sekinlashayotgan harakat",
      "Ilgarilanma harakat",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 10,
    question:
      "Jismning ixtiyoriy nuqtasi tezligi qanday bog‘liqlikka ega?",
    options: [
      "Aylanish markazidan masofaga bog‘liq",
      "Harakat traektoriyasiga bog‘liq emas",
      "Harakat vaqtiga bog‘liq emas",
      "Jismning og‘irlik markaziga bog‘liq",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 11,
    question:
      "Qattiq jismning ixtiyoriy nuqtasining tezligi qaysi xususiyatga ega?",
    options: [
      "Nuqtaning aylanish markazidan nuqtagacha bo’lgan uzoqlashishi bilan ortadi",
      "Nuqtaning aylanish markaziga yaqinlashishi bilan kamayadi",
      "A va B javob to‘g‘ri",
      "Harakat yo‘nalishiga bog‘liq emas",
    ],
    correct: 2, // Javob: C
  },
  {
    id: 13,
    question:
      "Aylanma harakat qilayotgan jismning ixtiyoriy nuqtasida qanday tezlanish mavjud bo‘ladi?",
    options: [
      "Tangensial va normal tezlanish",
      "Faqat tangensial tezlanish",
      "Faqat normal tezlanish",
      "Doimiy nol tezlanish",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 14,
    question:
      "Qattiq jismning ixtiyoriy nuqtasi uchun normal tezlanish qachon paydo bo‘ladi?",
    options: [
      "Jism aylanma harakat qilganda",
      "Jism faqat ilgarilanma harakat qilganda",
      "Jismning burchak tezligi o‘zgarmaganda",
      "Jismning tezligi nol bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 15,
    question:
      "Tangensial tezlanish qanday holatda nolga teng bo‘ladi?",
    options: [
      "Tekis aylanma harakatda",
      "Jism tezlanayotgan harakatda",
      "Jismning burchak tezligi doimiy o‘zgarib turganda",
      "Jismning markaziy nuqtasida",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 17,
    question:
      "Qaysi holatda jismning barcha nuqtalari bir xil tezlikka ega bo‘ladi?",
    options: [
      "Agar jism ilgarilanma harakat qilayotgan bo‘lsa",
      "Agar jism aylanma harakat qilayotgan bo‘lsa",
      "Agar jism harakatsiz bo‘lsa",
      "Agar jismning massasi bir xil taqsimlangan bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 21,
    question:
      "Jismning ilgarilanma harakatini tavsiflash uchun qaysi tenglama ishlatiladi?",
    options: [
      "Koordinatalar usuli bilan berilgan harakat tenglamasi",
      "Harakat tenglamalari faqat burchak tezlik asosida yoziladi",
      "Harakat traektoriyasi faqat vaqtga bog‘liq bo‘ladi",
      "Jismning harakat tenglamalari nolga teng bo‘ladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 22,
    question:
      "Qutb nuqta metodi qanday vazifani bajaradi?",
    options: [
      "Jismning harakatini nuqtalar tezligi orqali tahlil qilish",
      "Jismning tezlanishini faqat aylanish markazi orqali hisoblash",
      "Harakatni faqat bir nuqtada tavsiflash",
      "Jismning barcha nuqtalarining tezligini bir xil deb hisoblash",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 23,
    question:
      "Qutb nuqtadan foydalanishning asosiy afzalligi nima?",
    options: [
      "Jismning istalgan nuqtasining tezligini hisoblash imkonini beradi",
      "Harakat faqat aylanish markazi orqali tavsiflanadi",
      "Qutb nuqtasi har doim harakat markazida joylashgan bo‘ladi",
      "Jismning faqat massasi bo‘yicha hisoblanadi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 24,
    question:
      "Agar qattiq jism bir tekis harakat qilsa, qutb nuqtasi qanday harakat qiladi?",
    options: [
      "Jismning harakat yo‘nalishi bo‘ylab ilgarilanma harakat qiladi",
      "Jismning aylanish markazida bo‘ladi",
      "Jismning harakatidan mustaqil bo‘ladi",
      "Jismning traektoriyasi bo‘ylab harakat qiladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 26,
    question:
      "Agar jismning burchak tezligi ortsa, qanday tezlanish paydo bo‘ladi?",
    options: [
      "Tangensial tezlanish",
      "Faqat normal tezlanish",
      "Jism tezligi nolga teng bo‘ladi",
      "Tezlanish o‘zgarmaydi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 27,
    question:
      "Jismning nuqtalari orasidagi tezlanish farqi nimaga bog‘liq?",
    options: [
      "Jismning burchak tezligi va nuqtalar orasidagi masofaga",
      "Faqat jismning massasiga",
      "Jismning aylanish markaziga bog‘liq emas",
      "Faqat vaqtga bog‘liq",
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

const QuizBolim5 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions5");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions5;
      }
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions5", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions5.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions5", JSON.stringify(randomizedQuestions));
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
        Test Savollari - Bolim 5
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

export default QuizBolim5;
