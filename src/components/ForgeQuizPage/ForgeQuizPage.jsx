import { useState } from 'react'
export default function ForgeQuiz() {
    const [quizData, setQuizData] = useState({
        questions: [{ question: '', options: ['', '', ''], correctAnswer: 0 }],
      });
    
      const handleQuestionChange = (index, event) => {
        const { name, value } = event.target;
        const updatedQuestions = [...quizData.questions];
        if (name === 'question') {
          updatedQuestions[index].question = value;
        } else if (name.includes('option')) {
          const optionIndex = parseInt(name.slice(-1), 10);
          updatedQuestions[index].options[optionIndex] = value;
        } else if (name === 'correctAnswer') {
          updatedQuestions[index].correctAnswer = parseInt(value, 10);
        }
        setQuizData({ ...quizData, questions: updatedQuestions });
      };
    
      const handleAddQuestion = () => {
        setQuizData({
          ...quizData,
          questions: [
            ...quizData.questions,
            { question: '', options: ['', '', ''], correctAnswer: 0 },
          ],
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Quiz:', quizData);
        // You can add code here to send 'quizData' to your backend for storage
      };
    
      return (
        <div>
          <h2>Forge Quiz</h2>
          <form onSubmit={handleSubmit}>
            {quizData.questions.map((question, index) => (
              <div key={index}>
                <h3>Question {index + 1}</h3>
                <input
                  type="text"
                  name="question"
                  value={question.question}
                  onChange={(e) => handleQuestionChange(index, e)}
                  placeholder="Enter your question"
                />
                <br />
                {[0, 1, 2].map((optionIndex) => (
                  <div key={optionIndex}>
                    <input
                      type="text"
                      name={`option${optionIndex}`}
                      value={question.options[optionIndex]}
                      onChange={(e) => handleQuestionChange(index, e)}
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                  </div>
                ))}
                <label>
                  Correct Answer:
                  <select
                    name="correctAnswer"
                    value={question.correctAnswer}
                    onChange={(e) => handleQuestionChange(index, e)}
                  >
                    {question.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={optionIndex}>
                        {`Option ${optionIndex + 1}`}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ))}
            <button type="button" onClick={handleAddQuestion}>
              Add Question
            </button>
            <button type="submit">Create Quiz</button>
          </form>
        </div>
      );
    }
