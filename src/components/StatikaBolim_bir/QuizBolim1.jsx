import React, { useState, useEffect, useCallback } from "react";

const defaultQuestions = [
  {
    id: 1,
    question:
      "Jismga ta’sir qiluvchi kuch qaysi belgilarga ko’ra aniqlanadi?",
    options: [
      "Kuchning qo’yilish nuqtasi, miqdori va yo’nalishi",
      "Faqat jismlarning hajmi bilan",
      "Jismning massasi va og‘irlik markazi orqali",
      "Faqat tashqi kuchlar bilan",
    ],
    correct: 0,
  },
  {
    id: 2,
    question: "Teng ta’sir etuvchi kuch deganda nimani tushunamiz?",
    options: [
      "Berilgan barcha kuchlarning natijaviy ta’sirini ifodalovchi kuch",
      "Faqat og‘irlik kuchining natijasi",
      "Faqat bir tekislikdagi kuchlarning ta’sir etuvchi kuchi",
      "Kuchlarning ichki ta’sir etuvchi momentlari",
    ],
    correct: 0,
  },
  {
    id: 3,
    question:
      "Agar ikki kuch bir nuqtaga ta’sir qilsa va teng ta’sir etuvchi kuch nolga teng bo‘lsa, bu nimani bildiradi?",
    options: [
      "Jism muvozanatda",
      "Jism tezlik bilan harakat qiladi",
      "Jism faqat og‘irlik kuchi ta’sirida harakat qiladi",
      "Jism faqat tortishish kuchi bilan bog‘liq",
    ],
    correct: 0,
  },
  {
    id: 4,
    question: "Statikaning asosiy aksiomalari qanday ma’noga ega?",
    options: [
      "Harakat va muvozanatni tavsiflaydi",
      "Faqat tezlik va tezlanish o‘rtasidagi bog‘liqlikni aniqlaydi",
      "Jismlarning faqat deformatsiyasini o‘rganadi",
      "Massalar taqsimotini ifodalaydi",
    ],
    correct: 0,
  },
  {
    id: 5,
    question:
      "Quyidagilardan qaysi biri Nyuton qonunlari tarkibiga kiradi?",
    options: [
      "Teng ta’sir etuvchi kuch aksiomasi",
      "Massalar markazi qonuni",
      "Kinetik energiya saqlanish qonuni",
      "Ishqalanish qonuni",
    ],
    correct: 0,
  },
  {
    id: 7,
    question: "Uch kuch muvozanat sharti qanday?",
    options: [
      "Uch kuch bir tekislikda yotishi va ta’sir chiziqlari bitta nuqtada kesishishi kerak",
      "Uch kuch o‘zaro parallel bo‘lishi kerak",
      "Uch kuch faqat burchak hosil qilishi kerak",
      "Kuchlarning faqat kattaliklari bir xil bo‘lishi kerak",
    ],
    correct: 0,
  },
  {
    id: 8,
    question:
      "Agar uchta kuch muvozanatda bo‘lsa, ularning hosil qilgan uchburchagi qanday bo‘lishi kerak?",
    options: [
      "Yopiq uchburchak hosil qilishi kerak",
      "Bitta nuqtada kesishishi kerak",
      "To‘g‘ri burchakli bo‘lishi kerak",
      "Faqat massalar markazi atrofida joylashgan bo‘lishi kerak",
    ],
    correct: 0,
  },
  {
    id: 9,
    question:
      "Uch kuch muvozanati teoremasi qaysi shart bajarilganda ishlatiladi?",
    options: [
      "Kuchlar bir tekislikda joylashganda",
      "Kuchlar parallel bo‘lganda",
      "Kuchlar bir-biriga teng bo‘lganda",
      "Faqat bitta kuch mavjud bo‘lganda",
    ],
    correct: 0,
  },
  {
    id: 10,
    question: "Kuchning o‘qdagi proyeksiyasi nimani bildiradi?",
    options: [
      "Kuchning berilgan yo‘nalishdagi ta’sirini",
      "Kuchning butun hajmiy ta’sirini",
      "Kuchning faqat bir tekislikdagi qismini",
      "Kuchning vaqt bo‘yicha o‘zgarishini",
    ],
    correct: 0,
  },
  {
    id: 11,
    question: "Qanday holatda kuch proyeksiyasi nol bo‘ladi?",
    options: [
      "Agar kuch berilgan o‘qqa perpendikulyar bo‘lsa",
      "Agar kuch nolga teng bo‘lsa",
      "Agar jism muvozanatda bo‘lsa",
      "Agar faqat bitta kuch ta’sir etsa",
    ],
    correct: 0,
  },
  {
    id: 12,
    question: "Proyeksiyalash qaysi holatlarda qo‘llaniladi?",
    options: [
      "Harakat tenglamalarini soddalashtirishda",
      "Faqat og‘irlik markazini aniqlashda",
      "Faqat bitta tekislikda harakatni tavsiflashda",
      "Faqat tortishish kuchini aniqlashda",
    ],
    correct: 0,
  },
  {
    id: 13,
    question:
      "Nuqtaga nisbatan kuch momenti nimani anglatadi?",
    options: [
      "Kuchning ma’lum nuqtaga nisbatan aylantirish ta’sirini",
      "Jismning og‘irlik markaziga ta’sir qiluvchi kuchni",
      "Jismning muvozanatini buzmaydigan kuchni",
      "Harakatning tezlashishini",
    ],
    correct: 0,
  },
  {
    id: 14,
    question: "Qachon kuchning momenti nolga teng bo‘ladi?",
    options: [
      "Agar kuchning ta’sir chizig‘i moment markazidan o‘tgan bo‘lsa",
      "Agar kuchning ta’siri faqat aylanish markazida bo‘lsa",
      "Agar jism faqat tekis harakat qilayotgan bo‘lsa",
      "Agar jism muvozanatda bo‘lsa",
    ],
    correct: 0,
  },
  {
    id: 15,
    question: "Kuch momentining o‘lchov birligi qanday?",
    options: [
      "N·m (Nyuton-metr)",
      "J (Joul)",
      "kg·m/s²",
      "N/m",
    ],
    correct: 0,
  },
  {
    id: 16,
    question: "Kuch momentining vektori qanday aniqlanadi?",
    options: [
      "Kuch vektori va radius vektori o‘rtasidagi vektor ko‘paytma sifatida",
      "Kuchning koordinata tizimidagi proyeksiyasiga qarab",
      "Jismning faqat og‘irlik markaziga bog‘liq holda",
      "Faqat jismning massasi orqali",
    ],
    correct: 0,
  },
  {
    id: 17,
    question:
      "Agar kuch momentining yo‘nalishi aylanish o‘qiga parallel bo‘lsa, bu nimani anglatadi?",
    options: [
      "Jism faqat aylanish harakatini bajaradi",
      "Jism ilgarilanma harakat qiladi",
      "Jismning og‘irlik markazi o‘zgaradi",
      "Jismning tezligi ortib boradi",
    ],
    correct: 0,
  },
  {
    id: 19,
    question: "Varinon teoremasi nimani anglatadi?",
    options: [
      "Kuchlar momentlarining yig‘indisi, natijaviy kuchning momentiga teng",
      "Kuchlarning faqat aylanish markaziga bog‘liqligini",
      "Jismlarning muvozanatini aniqlash usulini",
      "Harakat tenglamalarini hisoblash usulini",
    ],
    correct: 0,
  },
  {
    id: 20,
    question: "Varinon teoremasi qachon qo‘llaniladi?",
    options: [
      "Kuch momentlarini hisoblashda",
      "Harakat yo‘nalishini aniqlashda",
      "Jismning og‘irlik markazini hisoblashda",
      "Jismning faqat massaviy markazini aniqlashda",
    ],
    correct: 0,
  },
  {
    id: 21,
    question:
      "Agar barcha kuchlar bitta nuqtada kesishsa, Varinon teoremasi qanday ishlaydi?",
    options: [
      "Barcha kuchlarning momentlari yig‘indisi nolga teng bo‘ladi",
      "Natijaviy moment faqat eng katta kuchga bog‘liq bo‘ladi",
      "Kuchlar faqat muvozanat sharoitida bo‘lsa ishlaydi",
      "Jismning harakat tenglamalari bevosita momentlarga bog‘liq bo‘ladi",
    ],
    correct: 0,
  },
  {
    id: 22,
    question:
      "O‘qqa nisbatan kuch momenti qanday aniqlanadi?",
    options: [
      "Jismning aylanish o‘qiga perpendikulyar yo‘nalishda ta’sir etuvchi kuch momentlari yig‘indisi sifatida",
      "Faqat kuch va lever qo‘shilishidan",
      "Faqat jismning massasi bilan",
      "Faqat koordinatalar tizimi orqali",
    ],
    correct: 0,
  },
  {
    id: 23,
    question:
      "Agar jism muvozanatda bo‘lsa, unga ta’sir qiluvchi momentlar qanday bo‘lishi kerak?",
    options: [
      "Momentlar yig’indisi nolga teng bo‘lishi kerak",
      "Doimiy va parallel bo‘lishi kerak",
      "Faqat bitta kuch momenti mavjud bo‘lishi kerak",
      "Kuch momentlari faqat tashqi kuchlarga bog‘liq bo‘lishi kerak",
    ],
    correct: 0,
  },
  {
    id: 25,
    question: "Juft kuch deganda nimani tushunamiz?",
    options: [
      "Kattaligi teng, lekin qarama-qarshi yo‘nalishdagi parallel ikkita kuch",
      "Massasi bir xil bo‘lgan jismlar o‘rtasidagi kuchlar",
      "Jismning tezligini belgilovchi kuchlar",
      "Faqat og‘irlik markazi bo‘yicha aniqlanadigan kuchlar",
    ],
    correct: 0,
  },
  {
    id: 26,
    question: "Juft momenti qachon hosil bo‘ladi?",
    options: [
      "Miqdorlari teng va qarama-qarshi yo‘nalishdagi ikkita parallel kuchlar jismga ta’sir qilsa",
      "Agar jism og‘irlik markazidan o‘tuvchi kuchga ega bo‘lsa",
      "Agar jism faqat ilgarilanma harakat qilsa",
      "Agar jismning harakati nol bo‘lsa",
    ],
    correct: 0,
  },
  {
    id: 27,
    question: "Juft momenti qanday o‘lchanadi?",
    options: [
      "N·m (Nyuton-metr)",
      "J (Joul)",
      "kg·m/s²",
      "N/m",
    ],
    correct: 0,
  },
  {
    id: 28,
    question: "Reaksiya kuchi deganda nimani tushunamiz?",
    options: [
      "Jismga bog‘lanish orqali ta’sir qiluvchi kuchni",
      "Jismning faqat o‘ziga ta’sir qiluvchi kuchni",
      "Jismning og‘irlik kuchi bilan bog‘liq kuchni",
      "Jismning harakat yo‘nalishini belgilovchi kuchni",
    ],
    correct: 0,
  },
  {
    id: 29,
    question: "Bog‘lanish kuchlari qaysi holatlarda vujudga keladi?",
    options: [
      "Jismning harakatini chegaralovchi omillar bo‘lganda",
      "Jism erkin harakat qilganda",
      "Jismda faqat og‘irlik kuchi mavjud bo‘lganda",
      "Faqat bir nuqtaga ta’sir etganda",
    ],
    correct: 0,
  },
  {
    id: 30,
    question:
      "Qanday sharoitda reaksiya kuchlari nolga teng bo‘ladi?",
    options: [
      "Agar jism erkin harakat qilayotgan bo‘lsa",
      "Agar jism biror sirtga bog‘langan bo‘lsa",
      "Agar tashqi kuchlar faqat aylanish markaziga ta’sir etsa",
      "Agar faqat bitta kuch mavjud bo‘lsa",
    ],
    correct: 0,
  },
];

const shuffleOptions = (question) => {
  // Har bir variantga uning asl indeksini qo‘shamiz
  const optionsWithIndex = question.options.map((option, index) => ({
    option,
    originalIndex: index,
  }));
  // Fisher-Yates algoritmi yordamida aralashtiramiz
  for (let i = optionsWithIndex.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [optionsWithIndex[i], optionsWithIndex[j]] = [
      optionsWithIndex[j],
      optionsWithIndex[i],
    ];
  }
  // Asl to‘g‘ri javob indeksiga ega bo‘lgan variantning yangi indeksini topamiz
  const newCorrectIndex = optionsWithIndex.findIndex(
    (opt) => opt.originalIndex === question.correct
  );
  return {
    ...question,
    options: optionsWithIndex.map((opt) => opt.option),
    correct: newCorrectIndex,
  };
};

const QuestionCard = React.memo(
  ({ question, selectedAnswer, onSelect }) => {
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
  }
);

const QuizBolim1 = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(null);

  useEffect(() => {
    try {
      let stored = localStorage.getItem("quizQuestions");
      let loadedQuestions;
      if (stored) {
        loadedQuestions = JSON.parse(stored);
      } else {
        loadedQuestions = defaultQuestions;
      }
      // Har safar variantlar tasodifiy tartibda aralashtirilsin
      const randomizedQuestions = loadedQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions", JSON.stringify(randomizedQuestions));
    } catch (error) {
      console.error("Quiz savollarini o‘qishda xatolik:", error);
      const randomizedQuestions = defaultQuestions.map((q) => shuffleOptions(q));
      setQuestions(randomizedQuestions);
      localStorage.setItem("quizQuestions", JSON.stringify(randomizedQuestions));
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
      <h1 className="text-2xl font-bold text-center mb-6">Test Savollari</h1>
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

export default QuizBolim1;
