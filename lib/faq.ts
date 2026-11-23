export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: ReadonlyArray<FaqItem> = [
  {
    question: "What type of coffee does the EM200 use?",
    answer:
      "The EM200 is designed for ground coffee. It does not use capsules, pods, or ESE servings.",
  },
  {
    question: "Can the EM200 make iced coffee?",
    answer:
      "Yes. The dedicated Over Ice function is designed for drinks such as iced lattes and iced Americanos.",
  },
  {
    question: "Can I change the cup volume?",
    answer:
      "Yes. Press and hold the One-Cup or Two-Cup control to program a serving volume up to 4 fl oz.",
  },
  {
    question: "How large is the water tank?",
    answer:
      "The removable water tank holds 57 oz, or 1.7 L, and has a foldable lid for easier refilling.",
  },
  {
    question: "How do I care for the machine?",
    answer:
      "The EM200 includes a removable drip tray and a built-in descaling mode. Follow the user manual for the complete cleaning and descaling routine.",
  },
  {
    question: "What is included in the box?",
    answer:
      "The box includes the EM200, a portafilter, one-cup and two-cup filters, a tamper and scoop, a knock box, and the user manual.",
  },
  {
    question: "Does the EM200 turn off automatically?",
    answer: "Yes. The machine powers off after eight minutes of inactivity.",
  },
  {
    question: "What warranty is included?",
    answer: "The EM200 includes a one-year limited warranty.",
  },
  {
    question: "Is the EM200 certified for use in North America?",
    answer: "Yes. The EM200 is ETL Listed for the United States and Canada.",
  },
  {
    question: "Where can I buy the EM200?",
    answer:
      "TORINOVA directs online purchases to Walmart. Current price and availability are shown on Walmart.",
  },
];
