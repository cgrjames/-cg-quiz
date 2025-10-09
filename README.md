# CG Certification Practice Quiz – README

This interactive quiz app lets you practise Consumer Goods Cloud certification questions in your browser. All questions are stored in a single JavaScript array for easy editing.

---

## How to Use

1. **Open the HTML file** (e.g., `cg-quiz.html`) in any web browser.
2. Practise answering the questions. Your score and explanations are shown as you go.

---

## How to Add or Edit Questions

All questions are stored in the `questions` array at the top of the HTML file’s `<script>` section.

Each question looks like this:


{
  question: "Your question text here?",
  options: [
    "Option A",
    "Option B",
    "Option C",
    "Option D"
  ],
  answer: 1, // 0 for A, 1 for B, etc.
  explanation: "Brief explanation for the correct answer."
},
