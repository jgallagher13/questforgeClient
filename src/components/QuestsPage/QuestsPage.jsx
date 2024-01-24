import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchQuizzes } from '../../../utilities/quiz-api';

export default function QuestsPage() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    // Fetch the initial list of quizzes when the component mounts
    fetchQuizzes().then((quizzes) => setQuizzes(quizzes));
  }, []); // The empty dependency array ensures the effect runs only once

  return (
    <div>
      <h2>Quests Page</h2>

      {/* Render existing quizzes with links to play each quiz */}
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz._id}>
            {/* Use Link to create a link to the quiz play page */}
            <Link to={`/play-quiz/${quiz._id}`}>{quiz.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
