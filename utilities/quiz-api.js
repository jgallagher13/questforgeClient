import sendRequest from './send-request'
const BASE_URL = 'http://localhost:4741/quiz'

export async function createQuiz(quizData) {
    return sendRequest(BASE_URL, 'POST', quizData)
}