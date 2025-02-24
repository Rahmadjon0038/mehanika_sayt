import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions7 = [
  {
    id: 1,
    question:
      "Quyidagi kuch turlaridan qaysi biri fundamental kuchlar qatoriga kiradi?",
    options: [
      "Ishqalanish kuchi",
      "Gravitatsiya kuchi",
      "Elastiklik kuchi",
      "Dinamik kuch"
    ],
    correct: 1, // Javob: B
  },
  {
    id: 2,
    question: "Mexanikada kuch qanday aniqlanadi?",
    options: [
      "Jismning massasi va tezlanishining ko‘paytmasi sifatida",
      "Faqat jismning tezligi orqali",
      "Harakat yo‘nalishiga bog‘liq holda",
      "Jismning bosib o‘tgan masofasi orqali"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 3,
    question:
      "Quyidagi kuchlardan qaysi biri konservativ kuch hisoblanadi?",
    options: [
      "Ishqalanish kuchi",
      "Gravitatsiya kuchi",
      "Havo qarshilik kuchi",
      "Dinamik reaksiya kuchi"
    ],
    correct: 1, // Javob: B
  },
  {
    id: 4,
    question:
      "Nyutonning birinchi qonuniga ko‘ra, jism qanday holatda bo‘ladi?",
    options: [
      "Agar unga tashqi kuch ta’sir qilmasa, tinch yoki tekis harakatda bo‘ladi",
      "Jism har doim tezlashgan harakatda bo‘ladi",
      "Jism doimiy o‘zgaruvchan tezlik bilan harakatlanadi",
      "Jism faqat aylanish harakatini bajaradi"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 5,
    question:
      "Nyutonning ikkinchi qonuni qanday bog‘liqlikni bildiradi?",
    options: [
      "Kuch, massa va tezlanish orasidagi bog‘liqlik",
      "Tezlik va masofa orasidagi bog‘liqlik",
      "Og‘irlik va tezlik o‘zgarishi orasidagi bog‘liqlik",
      "Harakat davomiyligi va energiya orasidagi bog‘liqlik"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 6,
    question:
      "Nyutonning uchinchi qonuniga ko‘ra, ikki jism o‘zaro qanday kuchlar bilan ta’sirlanadi?",
    options: [
      "Kattalik jihatdan teng va qarama-qarshi yo‘nalgan kuchlar bilan",
      "Faqat og‘irlik kuchi orqali",
      "Teng bo‘lmagan kuchlar bilan",
      "Faqat gravitatsiya kuchi bilan"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 10,
    question:
      "Harakatning differensial tenglamalari qanday kattaliklarni ifodalaydi?",
    options: [
      "Jismning harakat vaqtida koordinatalarining o‘zgarishini",
      "Jismning massasi va hajmini",
      "Jismning faqat burchak tezlanishini",
      "Jismning tortishish kuchini"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 11,
    question:
      "Qaysi tenglamalar mexanik sistemasining harakati uchun asosiy hisoblanadi?",
    options: [
      "Differensial harakat tenglamalari",
      "Faqat Nyuton qonunlari",
      "Jismning og‘irlik markazi tenglamalari",
      "Faqat to‘g‘ri chiziqli harakat tenglamalari"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 12,
    question:
      "Differensial tenglamalar qanday hollarda qo‘llaniladi?",
    options: [
      "Jismning harakat tenglamalarini aniqlash uchun",
      "Faqat aylanma harakatni tahlil qilish uchun",
      "Jismning bosim kuchini aniqlash uchun",
      "Faqat statik muammolarni hal qilish uchun"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 13,
    question:
      "Moddiy nuqta dinamikasining birinchi asosiy masalasi nimani o‘rganadi?",
    options: [
      "Harakatga olib keluvchi kuchni topish",
      "Jismning o‘z o‘qi atrofida aylanishini",
      "Jismning massasi va tezligini",
      "Jismning shakli va hajmini"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 14,
    question:
      "Ikkinchi asosiy masala nimani anglatadi?",
    options: [
      "Berilgan harakatni yuzaga keltirish kuch kerakligini aniqlash",
      "Jismning faqat gravitatsion kuch ta’sirida harakatlanishini",
      "Jismning muvozanatini",
      "Jismning faqat koordinatalarining o‘zgarishini"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 15,
    question:
      "Dinamikaning asosiy masalalari qanday holatda ishlatiladi?",
    options: [
      "Harakatni tahlil qilish va unga sabab bo‘lgan kuchlarni aniqlashda",
      "Faqat jismning deformatsiyasini tahlil qilishda",
      "Harakat traektoriyasini taxminiy hisoblashda",
      "Jismning shaklini aniqlash uchun"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 16,
    question:
      "Jismning harakat tenglamasidan foydalanib qanday xulosa chiqarish mumkin?",
    options: [
      "Harakatga ta’sir qiluvchi kuchlar haqida",
      "Jismning faqat boshlang‘ich koordinatasi haqida",
      "Jismning massasi va hajmi haqida",
      "Harakat traektoriyasining doimiyligi haqida"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 17,
    question:
      "Dinamik masalalarni yechishda qanday o‘zgaruvchilar muhim ahamiyatga ega?",
    options: [
      "Kuch, tezlik, tezlanish",
      "Faqat massa va hajm",
      "Faqat vaqt va bosib o‘tilgan yo‘l",
      "Jismning faqat burchak tezligi"
    ],
    correct: 0, // Javob: A
  },
  {
    id: 18,
    question:
      "Moddiy nuqtaning dinamikasini tahlil qilishda Nyutonning qaysi qonuni ishlatiladi?",
    options: [
      "Ikkinchi qonuni (kuchning massa va tezlanish bilan bog‘liqligi)",
      "Birinchi qonuni",
      "Uchuvchi jism qonuni",
      "Og‘irlik qonuni"
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

const QuizBolim7 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions7");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions7;
      }
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions7", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions7.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions7", JSON.stringify(randomizedQuestions));
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
        Test Savollari - Bolim 7
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

export default QuizBolim7;
