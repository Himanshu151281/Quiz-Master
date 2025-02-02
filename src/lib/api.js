const fallbackQuizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"],
    correctAnswer: "Da Vinci"
  }
];

export const fetchQuizData = async () => {
  try {
    const response = await fetch('https://api.jsonserve.com/Uw5CrX', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
      mode: 'cors'
    });
    
    if (!response.ok) {
      console.log('API request failed, using fallback data');
      return fallbackQuizData;
    }
    
    return await response.json();
  } catch (error) {
    console.log('Error fetching quiz data, using fallback data:', error);
    return fallbackQuizData;
  }
};