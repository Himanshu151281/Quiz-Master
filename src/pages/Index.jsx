import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizData } from "@/lib/api";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [quizState, setQuizState] = useState("welcome");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const { data: questions, isLoading, error } = useQuery({
    queryKey: ["quizData"],
    queryFn: fetchQuizData,
  });

  const handleStart = () => {
    setQuizState("quiz");
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (answer) => {
    if (questions) {
      if (answer === questions[currentQuestion].correctAnswer) {
        setScore((prev) => prev + 1);
        toast({
          title: "Correct!",
          description: "Well done! Keep going!",
          duration: 1500,
        });
      }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
      } else {
        setQuizState("results");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="animate-pulse text-2xl text-gray-600">
          Loading Quiz...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <div className="text-2xl text-red-600">
          Error loading quiz. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-4xl px-4">
        {quizState === "welcome" && (
          <WelcomeScreen onStart={handleStart} />
        )}
        
        {quizState === "quiz" && questions && (
          <QuizQuestion
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            onAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />
        )}
        
        {quizState === "results" && questions && (
          <QuizResults
            score={score}
            totalQuestions={questions.length}
            onRetry={handleStart}
          />
        )}
      </div>
    </div>
  );
};

export default Index;