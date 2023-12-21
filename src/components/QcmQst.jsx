// Import necessary dependencies
import React, { useEffect, useState } from 'react';

// Define the QcmQst component
const QcmQst = ({ number, questionData }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  useEffect(() => {
    const transformData = (data) => {
      const { question1, choices, explanation, right } = data;
      const transformedChoices = choices.map((choice, index) => ({
        letter: String.fromCharCode(65 + index),
        right: right ? choice.trim().toLowerCase() === right.trim().toLowerCase() : false,
        text: choice,
        explanation: explanation,
      }));
      
    
      setQuestion(question1);
      setAnswers(transformedChoices);
    };
    

     

    if (questionData) {
      transformData(questionData);
    }
  }, [questionData]);

  const handleChoice = (selectedChoice) => {
    const answer = answers.find((answer) => {
      const trimmedText = (answer.text || '').trim();
      console.log('Trimmed Text:', trimmedText); // Log the trimmed text
      return trimmedText.toLowerCase() === selectedChoice.trim().toLowerCase();
    });
    console.log('Selected Answer:', answer); // Log the selected answer
    setSelectedAnswer(answer);
  };
  
  

  return (
    <div className='mt-10'>
      <h2 className='font-palanquin text-xl capitalize font-bold lg:max-w-lg lg:mb-6'>
        Question <span className='text-coral-red'>{number}</span>:
      </h2>
      <p className='info-text my-7'>{question}?</p>
      <div className='max-container flex justify-center items-start flex-col gap-6'>
        {answers.map((answer, index) => (
          <div
            key={index}
            className={`${
              selectedAnswer
                ? answer.right
                  ? 'bg-green-200 border-2 border-green-400'
                  : 'bg-red-200 border-2 border-coral-red'
                : 'bg-white border-2 border-pale-blue'
            } rounded-md shadow-sm min-w-[65%] lg:max-w-[1200px] p-5 duration-500`}
            onClick={() => handleChoice(answer.text)}
          >
            <p className='info-text'>
              <span className='text-coral-red font-semibold'>{answer.letter}</span> {answer.text}
            </p>
          </div>
        ))}
        {selectedAnswer && (
          <div className='rounded-md shadow-sm min-w-[65%] lg:max-w-[1200px] bg-cyan-100 border-2 border-cyan-300 p-5 duration-500'>
            <div className='info-text'>
              <p className='font-semibold mb-2'>Explication:</p>
              <p>{selectedAnswer.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Export the QcmQst component
export default QcmQst;
