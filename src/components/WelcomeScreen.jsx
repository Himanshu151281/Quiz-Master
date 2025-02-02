import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WelcomeScreen = ({ onStart }) => {
  return (
    <Card className="quiz-card text-center">
      <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
        Welcome to QuizMaster
      </h1>
      <p className="text-gray-600 mb-8">
        Test your knowledge with our interactive quiz! Are you ready to begin?
      </p>
      <Button 
        onClick={onStart}
        className="px-8 py-6 text-lg hover:scale-105 transition-transform"
      >
        Start Quiz
      </Button>
    </Card>
  );
};

export default WelcomeScreen;