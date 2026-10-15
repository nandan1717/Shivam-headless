'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 14-day return policy for most unworn and unaltered items. Custom-tailored and clearance items are final sale. Please visit our Returns & Exchanges page for detailed information."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide! Shipping costs and delivery times vary by destination. You can see the exact shipping cost at checkout before completing your purchase."
    },
    {
      question: "How long does shipping take?",
      answer: "Orders are typically processed within 1-2 business days. Standard shipping within North America takes 3-5 business days. International shipping can take 7-14 business days depending on customs."
    },
    {
      question: "Can I customize the fit of an outfit?",
      answer: "Yes, many of our pieces can be custom-tailored to your exact measurements. Please contact us via email or WhatsApp before placing your order to discuss customization options."
    },
    {
      question: "How do I care for my Indian wear?",
      answer: "We recommend dry cleaning for all our heavily embroidered and silk garments to maintain their intricate detailing and color. For cotton items, gentle hand washing in cold water is advised."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. For specific regional payment methods, please check the options available at checkout."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.pageLayout}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={`${styles.title} serif`}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>Got questions? We've got answers.</p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-bento ${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.questionWrapper}>
                <h3 className={`${styles.question} serif`}>{faq.question}</h3>
                <span className={styles.icon}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className={styles.answerWrapper}>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`glass-bento ${styles.helpCard}`}>
          <h3 className={`${styles.helpTitle} serif`}>Still have questions?</h3>
          <p className={styles.helpText}>Contact us and we'll get back to you as soon as possible.</p>
          <a href="mailto:support@shivamstore.com" className="btn-primary">Email Support</a>
        </div>
      </div>
    </div>
  );
}
