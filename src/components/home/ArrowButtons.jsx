import React from 'react';
import { useNavigate } from 'react-router-dom';
import { rootdata } from '../../utils/RootData';

function ArrowButtons({ pathname }) {
  const nav = useNavigate();

  const nextLesson = () => {
    const currentLesson = rootdata.find((lesson) => lesson.path === pathname);
    if (!currentLesson) return;

    const nextLesson = rootdata.find((lesson) => lesson.id === currentLesson.id + 1);
    if (nextLesson) {
      nav(nextLesson.path);
    }
  };

  const oldLesson = () => {
    const currentLesson = rootdata.find((lesson) => lesson.path === pathname);
    if (!currentLesson) return;

    const previousLesson = rootdata.find((lesson) => lesson.id === currentLesson.id - 1);
    if (previousLesson) {
      nav(previousLesson.path);
    }
  };

  return (
    <div className="py-12 flex justify-center">
      <div className="flex gap-12">
        <button
          onClick={oldLesson}
          className="active:bg-blue-800 bg-blue-600 text-white text-xl px-6 py-3 rounded-sm"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={nextLesson}
          className="active:bg-blue-800 bg-blue-600 text-white text-xl px-6 py-3 rounded-sm"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ArrowButtons;
