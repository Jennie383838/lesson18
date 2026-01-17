import { useState } from "react";

const faqs = [
  { q: "How do I register for a course?", a: "Go to the Register page, fill out your details, and submit." },
  { q: "Can I select multiple courses?", a: "Currently, you can only select one course per registration." },
  { q: "How do I see my favourites?", a: "Use the Favourites page to view courses you saved." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((item, idx) => (
          <div key={idx} className="faq-item">
            <h4 onClick={() => toggle(idx)} className="faq-question">
              {item.q}
            </h4>
            {openIndex === idx && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
