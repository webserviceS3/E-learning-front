import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddQCM = () => {



  const questionCount = 1; // Number of questions
  const choicesCount = 4; // Number of choices

  const categories = ['Grammer', 'Conjugation', 'Orthography', 'Writing'];
  const choiceOptions = ['The First Choice', 'The Second Choice', 'The Third Choice', 'The Fourth Choice'];

  const [formData, setFormData] = useState({
    category: '',
    qcm: Array.from({ length: questionCount }, (_, i) => ({
      [`question${i + 1}`]: '',
      choices: Array.from({ length: choicesCount }, (_, j) => `choice ${j + 1} for question${i + 1}`),
      right: '',
      explanation: '',
    })),
  });

  const handleInputChange = (e, questionIndex, choiceIndex) => {
    const { id, value } = e.target;

    setFormData((prevFormData) => {
      if (id.includes('choice')) {
        // Update choices
        const updatedQCM = [...prevFormData.qcm];
        updatedQCM[questionIndex].choices[choiceIndex] = value;
        return { ...prevFormData, qcm: updatedQCM };
      }

      if (id.includes('right')) {
        // Update right choice
        const updatedQCM = [...prevFormData.qcm];
        updatedQCM[questionIndex].right = value;
        return { ...prevFormData, qcm: updatedQCM };
      }

      if (id.includes('explanation')) {
        // Update explanation
        const updatedQCM = [...prevFormData.qcm];
        updatedQCM[questionIndex].explanation = value;
        return { ...prevFormData, qcm: updatedQCM };
      }

      if (id === 'category') {
        // Update category
        return { ...prevFormData, category: value };
      }

      // Update question
      const questionKey = `question${questionIndex + 1}`;
      const updatedQCM = [...prevFormData.qcm];
      updatedQCM[questionIndex][questionKey] = value;

      return { ...prevFormData, qcm: updatedQCM };
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créer l'objet final
    const resultObject = {
      category: formData.category,
      qcm: formData.qcm.map((question, index) => {
        const questionKey = `question${index + 1}`;
        const rightChoiceIndex = choiceOptions.indexOf(question.right);

        return {
          [questionKey]: question[questionKey],
          choices: question.choices,
          right: rightChoiceIndex !== -1 ? question.choices[rightChoiceIndex] : undefined,
          explanation: question.explanation,
        };
      }),
    };

    console.log(resultObject.qcm[0]); // Journal de l'objet final dans la console
    const response = await axios.post('http://localhost:8080/api/test/addQCM', resultObject.qcm[0]);
    console.log(resultObject.qcm[0]);

    alert('Les données ont été ajoutées avec succès!');
    navigate("/")
  };






  const renderChoices = (questionIndex) => {
    const choices = [];

    for (let i = 1; i <= choicesCount; i++) {
      choices.push(
        <div key={`q${questionIndex}choice${i}`} className='sm:w-full flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
          <label htmlFor={`q${questionIndex}choice${i}`} className={`flex-1 bg-[#ffc500] text-white p-2 rounded-full text-center`}>
            Choice {i}:
          </label>
          <input
            id={`q${questionIndex}choice${i}`}
            type='text'
            placeholder={`Choice ${i}...`}
            className='flex-[5_5_0%] border border-slate-gray p-3 rounded-xl sm:w-full'
            onChange={(e) => handleInputChange(e, questionIndex, i - 1)}
          />
        </div>
      );
    }

    return choices;
  };

  const renderQuestions = () => {
    const questions = [];

    for (let i = 1; i <= questionCount; i++) {
      questions.push(
        <div key={`q${i}`}>
          <div className='sm:w-full flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
            <label htmlFor={`q${i}`} className='flex-1 bg-coral-red text-white p-2 rounded-full text-center'>
              Question {i}:
            </label>
            <input
              id={`q${i}`}
              type='text'
              placeholder={`Question ${i}...`}
              className='flex-[5_5_0%] border border-slate-gray p-3 rounded-xl sm:w-full'
              onChange={(e) => handleInputChange(e, i - 1)}
            />
          </div>
          {renderChoices(i - 1)}
          <div className='sm:w-full flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
            <label htmlFor={`q${i}rightchoice`} className='flex-1 bg-green-500 text-white p-2 rounded-full text-center'>
              Right Choice:
            </label>
            <select
              id={`q${i}right`}
              type='text'
              className='flex-[5_5_0%] border border-slate-gray p-3 rounded-xl sm:w-full'
              onChange={(e) => handleInputChange(e, i - 1)}
            >
              {choiceOptions.map((option, index) => (
                <option key={`q${i}rightchoice${index}`}>{option}</option>
              ))}
            </select>
          </div>
          <div className='sm:w-full flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
            <label htmlFor={`explanation${i}`} className='flex-1 bg-blue-500 text-white p-2 rounded-full text-center'>
              Explanation:
            </label>
            <textarea
              id={`explanation${i}`}
              type='text'
              placeholder='Explanation...'
              className='flex-[5_5_0%] border border-slate-gray p-3 rounded-xl sm:w-full'
              rows={2}
              onChange={(e) => handleInputChange(e, i - 1)}
            />
          </div>
          <hr className='text-slate-gray border-[1px] mb-8' />
        </div>
      );
    }

    return questions;
  };

  return (
    <form onSubmit={handleSubmit} className='w-full mt-10 font-montserrat'>
      <div className='flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
        <h2 className='flex-1 text-slate-gray font-bold text-xl p-2 rounded-full text-center'>
          New <span className='text-coral-red'>QCM</span> Section
        </h2>
      </div>

      <div className='sm:w-full flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
        <label htmlFor='category' className='flex-1 bg-violet-500 text-white p-2 rounded-full text-center'>
          Category:
        </label>
        <select
          id='category'
          type='text'
          className='flex-[5_5_0%] border border-slate-gray p-3 rounded-xl sm:w-full'
          onChange={(e) => handleInputChange(e)}
        >
          {categories.map((category, index) => (
            <option key={`category${index}`}>{category}</option>
          ))}
        </select>
      </div>

      {renderQuestions()}

      <div className='sm:w-full flex flex-col md:flex-row gap-2 sm:gap-4 justify-center items-center mb-8'>
        <button
          type='submit'
          className='flex-1 bg-coral-red text-white p-2 rounded-full text-center hover:bg-red-600 transition-all duration-300'
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddQCM;
