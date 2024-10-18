import React from 'react';
import Insights from '../Atoms';

const QuestionSection = () => {
  const questions_answers = [
    {
      question: 'How do I register as a land buyer or land seller?',
      answer: 'Registration process details would go here.',
    },
    {
      question: 'How can I search for available land?',
      answer: 'Buyers can search for available land using our detailed search functionality. Once the listing interests you, you can view all the necessary details before expressing interest to the seller.',
    },
    {
      question: 'What happens after I express interest?',
      answer: 'After expressing interest, you will enter a secure chat room with the seller to negotiate the terms. Once both parties agree, lawyers are assigned to draft a contract.',
    },
    {
      question: 'How is the payment process handled?',
      answer: 'Payments are initiated by the buyer, who uploads receipts. Google Cloud Vision extracts and verifies payment details, which are matched with the sellers records before storing in our database.',
    },
    {
      question: 'What if the payment details do not match?',
      answer: 'If the payment details do not match, the transaction is rejected. Both parties are notified to review and correct the discrepancy before proceeding.',
    },
    {
      question: 'How secure is the transaction process?',
      answer: 'Our platform ensures high security through encrypted communications, verified payment processes, and secure data storage, providing transparency and trust in every transaction.',
    },
  ];

  return (
    <div className="max-w-full md:mx-10 lg:mx-20 p-4 font-jost">
        <div id='Insights'> </div>

        <div className="flex items-center justify-center mb-8">
          <hr className="w-1/4 sm:w-1/2 border-t-2 ml-4 border-[#3E1C00] mb-3" />
          <h1 className="mx-6 text-[30px] sm:text-[30px] md:text-[35px] font-bold lg:text-[35px] text-center">Insights</h1>
          <hr className="w-1/4 sm:w-1/2 border-t-2 border-[#3E1C00] mb-3" />
        </div>
      <h2 className="text-center text-black mb-8 text-[18px] sm:text-[20px] md:text-3xl lg:text-[25px] mt-[4px]">
        Answers to questions about Shawazi
      </h2>
      {questions_answers.map((insight, index) => (
        <Insights key={index} question={insight.question} answer={insight.answer} />
      ))}
    </div>
  );
};

export default QuestionSection;