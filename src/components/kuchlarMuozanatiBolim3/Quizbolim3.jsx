import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions3 = [
  {
    id: 1,
    question:
      "Tekislikda ixtiyoriy joylashgan kuchlar sistemasi muvozanatda bo‘lishi uchun qanday shart bajarilishi kerak?",
    options: [
      "Faqat kuchlarning algebraik yig‘indisi nol bo‘lishi kerak",
      "Kuchlar yig‘indisi va momentlar yig‘indisi nol bo‘lishi kerak",
      "Faqat momentlar yig‘indisi nol bo‘lishi kerak",
      "Kuchlar bitta nuqtada kesishishi kerak",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 2,
    question:
      "Agar tekislikda joylashgan kuchlar sistemasi muvozanatda bo‘lsa, u holda qanday xulosa qilish mumkin?",
    options: [
      "Jism harakatlanadi",
      "Jism aylana boshlaydi",
      "Shu tekislikda jism muvozanatda bo‘ladi",
      "Jism deformatsiyalanadi",
    ],
    correct: 2, // Javob: C
  },
  {
    id: 3,
    question:
      "Yoyilgan kuchlarning muvozanatini aniqlashda qanday asosiy usul ishlatiladi?",
    options: [
      "Masshtabli diagrammalar tuzish",
      "Kuchlarni momentga aylantirish",
      "Yoyilgan kuchni ekvivalent kuch bilan almashtirish",
      "Kuchlarning yo‘nalishini o‘zgartirish",
    ],
    correct: 2, // Javob: C
  },
  {
    id: 4,
    question: "Yoyilgan kuch qanday o‘lchanadi?",
    options: ["N·m", "N/m", "N·m²", "kg·m/s²"],
    correct: 1, // Javob: B
  },
  {
    id: 5,
    question:
      "Agar uchta kuch muvozanatda bo‘lsa, ular qanday bo‘lishi kerak?",
    options: [
      "Bir-biriga parallel bo‘lishi kerak",
      "Bitta nuqtada kesishishi va yopiq uchburchak hosil qilishi kerak",
      "Ularning momenti nol bo‘lishi kerak",
      "Ulardan biri boshqasiga perpendikulyar bo‘lishi kerak",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 6,
    question:
      "Ikkita parallel kuch jismga ta’sir etsa, u qanday harakat qiladi?",
    options: [
      "Aylanishi yoki harakatlanish mumkin",
      "Faqat burilish sodir bo‘ladi",
      "Jism muvozanatda qoladi",
      "Jism faqat yon tomonga harakat qiladi",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 7,
    question:
      "Agar jism muvozanatda bo‘lsa, momentlarning taqsimlanishi qanday bo‘lishi kerak?",
    options: [
      "Har xil nuqtalarda turli momentlar bo‘lishi mumkin",
      "Barcha momentlar noldan katta bo‘lishi kerak",
      "Momentlarning algebraik yig‘indisi nol bo‘lishi kerak",
      "Momentlar bir-biriga teng bo‘lishi kerak",
    ],
    correct: 2, // Javob: C
  },
  {
    id: 8,
    question: "Qachon masala statik aniq deyiladi?",
    options: [
      "Muvozanat tenglamalar soni noma’lumlar soniga teng bo‘lsa",
      "Agar muvozanat shartlari bajarilmasa",
      "Agar momentlar nol bo‘lsa",
      "Agar kuchlar har xil yo‘nalishda bo‘lsa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 9,
    question: "Statik aniqmas masalada qanday muammo bo‘ladi?",
    options: [
      "Ortiqcha noma’lum kuchlar mavjud bo‘ladi",
      "Muvozanat shartlari yetarli bo‘lmaydi",
      "Tenglamalar yetarli bo‘lmaydi",
      "Barcha javoblar to‘g‘ri",
    ],
    correct: 3, // Javob: D
  },
  {
    id: 10,
    question: "Qaysi shartda jism statik aniqmas bo‘ladi?",
    options: [
      "Agar noma’lumlar soni tenglamalar sonidan ko‘p bo‘lsa",
      "Agar kuchlar masshtabda chizilsa",
      "Agar bitta nuqtada barcha kuchlar kesishsa",
      "Agar moment tenglamasi bajarilmasa",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 11,
    question: "Ishqalanish kuchi qanday aniqlanadi?",
    options: ["F = mg", "F_ishq=f[N]", "F = ma", "F = mv"],
    correct: 1, // Javob: B
  },
  {
    id: 12,
    question: "Qaysi holatda sirpanishdagi ishqalanish kuchi paydo bo‘ladi?",
    options: [
      "Jism harakatsiz bo‘lsa",
      "Jism boshqa jism ustida sirpanayotganda",
      "Jism tekis harakat qilayotganda",
      "Jism erkin tushayotganda",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 13,
    question: "Ishqalanish kuchi qaysi omillarga bog‘liq?",
    options: [
      "Faqat jism massasi",
      "Yuzalar orasidagi normal bosim va materiallarning ishqalanish koeffitsienti",
      "Jism tezligi",
      "Faqat joylashish burchagi",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 14,
    question: "Ishqalanish konusi nima?",
    options: [
      "Ishqalanish kuchi ta’sirida jism harakat qiluvchi fazo",
      "Ishqalanish koeffitsienti nol bo‘lgandagi fazo",
      "Harakat traektoriyasi bo‘yicha masshtabli diagramma",
      "Kuchlarning harakat chizig‘i",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 15,
    question: "Ishqalanish burchagi qanday aniqlanadi?",
    options: [
      "α = arctan(f)",
      "α = sin⁻¹(f)",
      "α = cos⁻¹(f)",
      "α = tan(f)",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 16,
    question:
      "Agar jismning ishqalanish burchagi katta bo‘lsa, u qanday harakat qiladi?",
    options: [
      "Oson sirpanadi",
      "Qiyinroq sirpanadi",
      "Ishqalanish kuchi kamayadi",
      "Harakatning tezligi oshadi",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 17,
    question: "Ishqalanish koeffitsienti qanday birlikda o‘lchanadi?",
    options: ["N/m²", "N", "Birliksiz kattalik", "kg·m/s²"],
    correct: 2, // Javob: C
  },
  {
    id: 18,
    question: "Ishqalanish koeffitsienti qanday qiymatlar oralig‘ida bo‘ladi?",
    options: [
      "0 dan 1 gacha",
      "1 dan ∞ gacha",
      "-1 dan 1 gacha",
      "0 dan ∞ gacha",
    ],
    correct: 0, // Javob: A
  },
  {
    id: 19,
    question:
      "Dumalanib ishqalanish kuchi qanday harakat turida paydo bo‘ladi?",
    options: [
      "Sirpanish harakati",
      "Dumalab harakatlanganda",
      "Chiziqli harakat",
      "Harakatsiz turgan jismda",
    ],
    correct: 1, // Javob: B
  },
  {
    id: 20,
    question:
      "Dumalanib ishqalanish sirpanishga nisbatan qanday farqlanadi?",
    options: [
      "Dumalanib ishqalanish har doim kattaroq bo‘ladi",
      "Sirpanish kuchi dumalanishga nisbatan kamroq bo‘ladi",
      "Dumalanib ishqalanish kuchi sirpanish kuchidan kichik bo‘ladi",
      "Har ikkalasi bir xil ta’sir qiladi",
    ],
    correct: 2, // Javob: C
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

const QuizBolim3 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions3");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions3;
      }
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions3", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions3.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions3", JSON.stringify(randomizedQuestions));
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
      <h1 className="text-2xl font-bold text-center mb-6">Test Savollari - Bolim 3</h1>
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

export default QuizBolim3;
