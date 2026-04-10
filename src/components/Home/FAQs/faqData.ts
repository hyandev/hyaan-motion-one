export type FAQ = {
  id: string | number;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How can AI automation help my business?",
    answer:
      "AI automation eliminates repetitive tasks, improves efficiency, and reduces errors. It allows your team to focus on high-value work while increasing productivity and lowering operational costs.",
  },
  {
    id: 2,
    question: "Is AI automation difficult to integrate?",
    answer:
      "No! Our AI solutions are designed for seamless integration with your existing tools and workflows. We provide step-by-step guidance to ensure a smooth and hassle-free setup.",
  },
  {
    id: 3,
    question: "What industries can benefit from AI automation?",
    answer:
      "AI automation is beneficial across various industries, including marketing, sales, finance, healthcare, customer support, and operations. Any business looking to improve efficiency can leverage AI.",
  },
  {
    id: 4,
    question: "Do I need technical knowledge to use AI automation?",
    answer:
      "Not at all! Our platform is user-friendly and built for all skill levels. We provide onboarding, tutorials, and customer support to ensure you can easily navigate and use the system.",
  },
  {
    id: 5,
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support, including onboarding assistance, troubleshooting, and ongoing updates. Our team is available to help with any questions or technical issues you may have.",
  },
];
