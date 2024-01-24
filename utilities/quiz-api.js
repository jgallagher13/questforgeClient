import sendRequest from './send-request';

const BASE_URL = 'http://localhost:4741/quiz';

export async function createQuiz(quizData, updateQuizzesCallback) {
  try {
    const createdQuiz = await sendRequest(BASE_URL, 'POST', quizData);

    // If an update callback is provided, call it with the newly created quiz
    if (updateQuizzesCallback) {
      updateQuizzesCallback(createdQuiz);
    }

    return createdQuiz;
  } catch (error) {
    console.error('Error creating quiz:', error);
    throw error;
  }
}

export async function fetchQuizzes() {
  try {
    const response = await sendRequest(BASE_URL, 'GET');
    const quizzes = response.data;
    return quizzes;
  } catch (error) {
    console.error('Error fetching quizzes:', error);
    throw error;
  }
}
