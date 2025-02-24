import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions2 = [
  {
    id: 1,
    question:
      "Kesishuvchi kuchlar sistemasida kuchlarni qo‘shish qanday qonunga asoslanadi?",
    options: [
      "Superpozitsiya qonuni",
      "Parallelogramm qoidasi",
      "Varignon teoremasi",
      "Nyutonning ikkinchi qonuni",
    ],
    correct: 1, // Javob: b) Parallelogramm qoidasi
  },
  {
    id: 2,
    question:
      "Ikkita kesishuvchi kuchni qo‘shish uchun qanday geometrik usuldan foydalaniladi?",
    options: [
      "Uchburchak usuli",
      "Koordinata usuli",
      "Moment usuli",
      "Ish usuli",
    ],
    correct: 0, // Javob: a) Uchburchak usuli
  },
  {
    id: 3,
    question:
      "Ixtiyoriy kesishuvchi kuchlar sistemasining natijaviy kuchini qanday aniqlash mumkin?",
    options: [
      "Vektor yig‘indisi orqali",
      "Tayanch reaksiya kuchlari orqali",
      "Kuchlarning aylanish momenti orqali",
      "Nyutonning uchinchi qonuni orqali",
    ],
    correct: 0, // Javob: a) Vektor yig‘indisi orqali
  },
  {
    id: 4,
    question:
      "Kesishuvchi kuchlar sistemasining muvozanat sharti qanday ifodalanadi?",
    options: ["∑F_k = 0", "∑M_0 = 0", "∑F_k ≠ 0", "∑M_0 ≠ 0"],
    correct: 0, // Javob: a) ∑F_k = 0
  },
  {
    id: 5,
    question:
      "Kesishuvchi kuchlar sistemasi uchun muvozanat tenglamalarining soni nechta?",
    options: ["1", "2", "3", "4"],
    correct: 2, // Javob: c) 3
  },
  {
    id: 6,
    question:
      "Kesishuvchi kuchlar sistemasining analitik muvozanati qanday shart bilan ta’minlanadi?",
    options: [
      "Kuchlar sistemasining koordinata o’qlaridagi proeksiyalarining algebraik yig‘indisi nolga teng bo‘lishi kerak",
      "Kuchlarning momentlari teng bo‘lishi kerak",
      "Kuchlar parallelogramm qoidasi bo‘yicha yig‘ilishi kerak",
      "Kuchlarning yo‘nalishi o‘zgarishi kerak",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 7,
    question:
      "Agar ikki parallel kuch qarama-qarshi tomonga yo‘nalgan bo‘lsa, ularning natijaviy kuch miqdori qanday topiladi?",
    options: [
      "Kuchlarning ayirmasi olinadi",
      "Kuchlarning yig‘indisi olinadi",
      "Kuchlar bir-birini to‘liq tenglashtiradi",
      "Kuchlarning momenti hisoblanadi",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 8,
    question: "Natijaviy kuch yo‘nalishi qanday bo‘ladi?",
    options: [
      "Katta kuch yo‘nalishiga qarab",
      "Kichik kuch yo‘nalishiga qarab",
      "Har doim chapga qarab",
      "Har doim o‘ngga qarab",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 9,
    question:
      "Agar ikkita kuchning qiymati teng bo‘lsa va qarama-qarshi tomonga yo‘nalgan bo‘lsa, qanday holat yuzaga keladi?",
    options: [
      "Natijaviy kuch nolga teng bo‘ladi",
      "Kuchlarning momenti oshadi",
      "Jism harakatga keladi",
      "Jism muvozanatdan chiqadi",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 10,
    question:
      "Agar ikkita parallel kuchning qiymati har xil bo‘lsa, markaz qayerda joylashadi?",
    options: [
      "Katta kuchga yaqin joyda",
      "Kichik kuchga yaqin joyda",
      "O‘rtacha nuqtada",
      "Teng taqsimlangan holda",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 11,
    question: "Parallel kuchlar markazi nimaga bog‘liq?",
    options: [
      "Kuchlarning kattaligi va joylashish oralig’idagi masofasiga",
      "Jismning zichligiga",
      "Faqat vaqt o‘tishiga",
      "Jismning massasi va haroratiga",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 12,
    question:
      "Agar jism bir jinsli bo‘lsa, uning og‘irlik markazi qayerda joylashadi?",
    options: [
      "Geometrik markazda",
      "Jismning chetki qismida",
      "Pastki qismida",
      "Istalgan joyda bo‘lishi mumkin",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 13,
    question:
      "Qattiq jismning og‘irlik markazi qanday usullar bilan aniqlanadi?",
    options: [
      "Statik va dinamik usullar bilan",
      "Faqat tajriba yo‘li bilan",
      "Faqat matematik formulalar yordamida",
      "O‘lchov asboblaridan foydalanmasdan",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 14,
    question:
      "Bir jinsli jismlarning og‘irlik markazi qanday aniqlanadi?",
    options: [
      "Jismning shakliga va o‘lchamlariga qarab",
      "Faqat massaga bog‘liq",
      "Kuchlarning yo‘nalishiga bog‘liq",
      "Jismning harakatlanish tezligiga bog‘liq",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 15,
    question:
      "Doira shaklidagi jismning og‘irlik markazi qayerda bo‘ladi?",
    options: [
      "Doiraning markazida",
      "Doiraning chetida",
      "Doira bo‘ylab har qanday joyda",
      "Doiraning radiusining yarmida",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 16,
    question:
      "Uchburchak shaklidagi jismning og‘irlik markazi qanday topiladi?",
    options: [
      "Barcha uchlarining koordinatalarining o‘rtacha qiymati orqali",
      "Uchlarining yig‘indisiga bog‘liq",
      "Jismning hajmiga bog‘liq",
      "Og‘irlik markazi har doim pastki qismida bo‘ladi",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 17,
    question:
      "Lui Puanso teoremasi nimani ifodalaydi?",
    options: [
      "Fazoda ixtiyoriy kuchlar sistemasining natijaviy momentini",
      "Kuchlarning koordinatalar o‘qidagi ta’sirini",
      "Jismning inersiya momentini",
      "Og‘irlik markazining siljishini",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 18,
    question:
      "Lui Puanso teoremasiga ko‘ra, har qanday kuchlar sistemasini qanday sodda ko‘rinishga keltirish mumkin?",
    options: [
      "Bitta kuch va bitta momentga",
      "Faqat bitta kuchga",
      "Jismning geometrik markaziga",
      "Faqat massaga bog‘liq",
    ],
    correct: 0, // Javob: a)
  },
  {
    id: 19,
    question:
      "Lui Puanso teoremasining amaliy ahamiyati nimada?",
    options: [
      "Kuchlar sistemasining ta’sirini soddalashtirishda",
      "Jismning harakatlanishini tezlashtirishda",
      "Kuchlarni to‘g‘ri yo‘nalishga yo‘naltirishda",
      "Faqat statik muvozanatni o‘rganishda",
    ],
    correct: 0, // Javob: a)
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
        <label
          key={index}
          className="flex items-center gap-2 mb-2 cursor-pointer"
        >
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

const QuizBolim2 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions2");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions2;
      }
      const randomizedQuestions = loadedQuestions.map((q) =>
        shuffleOptions(q)
      );
      setQuestions(randomizedQuestions);
      localStorage.setItem(
        "quizQuestions2",
        JSON.stringify(randomizedQuestions)
      );
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions2.map((q) =>
        shuffleOptions(q)
      );
      setQuestions(randomizedQuestions);
      localStorage.setItem(
        "quizQuestions2",
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
        Test Savollari - Bolim 2
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

export default QuizBolim2;
