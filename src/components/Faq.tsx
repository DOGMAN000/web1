// components/FAQ.tsx
import React from "react";

interface FAQItem {
  question: string;
  answer: string;
  delay: number;
}

const faqs: FAQItem[] = [
  {
    question: "Is there any cost?",
    answer: "No. CSTC is 100% free and always will be.",
    delay: 200,
  },
  {
    question: "What is the time commitment?",
    answer:
      "It's flexible. The more you put in, the more you get out. We recommend checking Slack a few times a week and attending at least one event per month.",
    delay: 400,
  },
  {
    question: "Do I need to be a programming genius to join?",
    answer:
      "Absolutely not. We look for passion, potential, and a collaborative spirit. All skill levels are welcome.",
    delay: 600,
  },
  {
    question: "How long does the application process take?",
    answer:
      "The application takes about 30-45 minutes to complete. We review applications on a rolling basis and typically respond within 1-2 weeks.",
    delay: 800,
  },
];

const Faq: React.FC = () => {
  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          data-aos="fade-up"
          data-aos-delay={faq.delay}
          className="bg-white rounded-lg shadow p-6"
        >
          <h4 className="font-semibold text-gray-900 mb-2">{faq.question}</h4>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
