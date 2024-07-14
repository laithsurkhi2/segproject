import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


const FAQs = () => {
 const [openIndexes, setOpenIndexes] = useState([]);


 const faqData = {
   "Health Topics": [
     {
       question: "What is a balanced diet?",
       answer: "A balanced diet includes a variety of foods in the right proportions to provide the nutrients your body needs."
     },
     {
       question: "How much exercise do I need?",
       answer: "Adults should aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity each week."
     }
   ],
   "Treatments": [
     {
       question: "What is physical therapy?",
       answer: "Physical therapy helps to restore movement and function when someone is affected by injury, illness, or disability."
     },
     {
       question: "How does chemotherapy work?",
       answer: "Chemotherapy works by killing fast-growing cancer cells, but it can also affect healthy fast-growing cells."
     }
   ],
   "Services": [
     {
       question: "What services do you offer?",
       answer: "We offer a range of services including annual physical exams, dental care, mental health counseling, and more."
     },
     {
       question: "How can I book an appointment?",
       answer: "You can book an appointment online through our website or call our customer service."
     }
   ]
 };


 const toggleAnswer = (index) => {
   if (openIndexes.includes(index)) {
     setOpenIndexes(openIndexes.filter(i => i !== index));
   } else {
     setOpenIndexes([...openIndexes, index]);
   }
 };


 return (
   <div className="min-h-screen p-8 lg:p-16">
     <h1 className="text-4xl font-semibold text-center mb-10">Frequently Asked Questions</h1>
     {Object.entries(faqData).map(([category, faqs], catIndex) => (
       <div key={category} className="mb-8">
         <h2 className="text-2xl font-semibold mb-4">{category}</h2>
         <div className="space-y-4">
           {faqs.map((faq, index) => (
             <div key={index} className="p-4 border rounded-lg shadow-md">
               <div
                 className="flex justify-between items-center cursor-pointer"
                 onClick={() => toggleAnswer(`${catIndex}-${index}`)}
               >
                 <h3 className="text-xl font-medium">{faq.question}</h3>
                 <span>
                   {openIndexes.includes(`${catIndex}-${index}`) ? <FaChevronUp /> : <FaChevronDown />}
                 </span>
               </div>
               {openIndexes.includes(`${catIndex}-${index}`) && (
                 <p className="mt-2">{faq.answer}</p>
               )}
             </div>
           ))}
         </div>
       </div>
     ))}
   </div>
 );
};


export default FAQs;