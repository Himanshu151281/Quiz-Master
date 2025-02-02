import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const QuizQuestion = ({
  question,
  options,
  onAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  
  const handleAnswerSubmit = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
      setSelectedAnswer("");
    }
  };

  return (
    <Card className="quiz-card">
      <div className="progress-bar mb-6">
        <div 
          className="progress-fill" 
          style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
        />
      </div>
      
      <p className="text-sm text-gray-500 mb-4">
        Question {currentQuestion} of {totalQuestions}
      </p>
      
      <h2 className="text-2xl font-semibold mb-6">{question}</h2>
      
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => setSelectedAnswer(option)}
            className={cn(
              "answer-option",
              selectedAnswer === option && "selected"
            )}
          >
            {option}
          </button>
        ))}
      </div>
      
      <Button
        onClick={handleAnswerSubmit}
        disabled={!selectedAnswer}
        className="w-full mt-6"
      >
        Next Question
      </Button>
    </Card>
  );
};

export default QuizQuestion;