import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRetry: () => void;
}

const QuizResults = ({ score, totalQuestions, onRetry }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <Card className="quiz-card text-center">
      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
      
      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      
      <div className="text-6xl font-bold text-primary mb-6">
        {percentage}%
      </div>
      
      <p className="text-gray-600 mb-4">
        You got {score} out of {totalQuestions} questions correct
      </p>
      
      <div className="mt-8">
        <Button onClick={onRetry} variant="outline" className="hover:scale-105 transition-transform">
          Try Again
        </Button>
      </div>
    </Card>
  );
};

export default QuizResults;