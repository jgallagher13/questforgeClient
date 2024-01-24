import React from 'react';
import { useParams } from 'react-router-dom';

function PlayQuizPage() {
  const { quizId } = useParams();

  // Fetch quiz data based on quizId and render the quiz for playing

  return (
    <div>
      <h2>Play Quiz</h2>
      {/* Render quiz questions and logic for playing the quiz */}
    </div>
  );
}

export default PlayQuizPage;
