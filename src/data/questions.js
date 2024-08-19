export default [
  {
    "id": 1,
    "subject": "html",
    "question": "What does HTML stand for?",
    "answer": "HyperText Markup Language",
    "difficulty": "easy"
  },
  {
    "id": 2,
    "subject": "html",
    "question": "What is the correct HTML element for inserting a line break?",
    "answer": "<br>",
    "difficulty": "easy"
  },
  {
    "id": 3,
    "subject": "css",
    "question": "What does CSS stand for?",
    "answer": "Cascading Style Sheets",
    "difficulty": "easy"
  },
  {
    "id": 4,
    "subject": "jquery",
    "question": "What symbol is used to access jQuery?",
    "answer": "$",
    "difficulty": "easy"
  },
  {
    "id": 5,
    "subject": "javascript",
    "question": "What is the output of the following JavaScript code? `console.log(1 + '2' + '2');`",
    "answer": "122",
    "difficulty": "moderate"
  },
  {
    "id": 6,
    "subject": "javascript",
    "question": "What is a closure in JavaScript?",
    "answer": "A closure is a function that remembers its lexical scope even when the function is executed outside that lexical scope.",
    "difficulty": "moderate"
  },
  {
    "id": 7,
    "subject": "javascript",
    "question": "What is the purpose of the 'use strict' directive in JavaScript?",
    "answer": "It enforces stricter parsing and error handling in JavaScript, making it easier to write cleaner code.",
    "difficulty": "moderate"
  },
  {
    "id": 8,
    "subject": "react",
    "question": "What is React?",
    "answer": "React is a JavaScript library for building user interfaces.",
    "difficulty": "moderate"
  },
  {
    "id": 9,
    "subject": "react",
    "question": "Explain the concept of virtual DOM in React.",
    "answer": "Virtual DOM is a lightweight copy of the actual DOM, maintained by React to improve performance by minimizing direct manipulations of the DOM.",
    "difficulty": "hard"
  },
  {
    "id": 10,
    "subject": "react",
    "question": "What are hooks in React?",
    "answer": "Hooks are functions that let you 'hook into' React state and lifecycle features from function components.",
    "difficulty": "hard"
  },
  {
    "id": 11,
    "subject": "php",
    "question": "What does PHP stand for?",
    "answer": "PHP: Hypertext Preprocessor",
    "difficulty": "easy"
  },
  {
    "id": 12,
    "subject": "php",
    "question": "How do you start a PHP script?",
    "answer": "You start a PHP script with the `<?php` tag.",
    "difficulty": "easy"
  },
  {
    "id": 13,
    "subject": "sql",
    "question": "What does SQL stand for?",
    "answer": "Structured Query Language",
    "difficulty": "easy"
  },
  {
    "id": 14,
    "subject": "sql",
    "question": "What is the purpose of the SELECT statement in SQL?",
    "answer": "The SELECT statement is used to retrieve data from a database.",
    "difficulty": "easy"
  },
  {
    "id": 15,
    "subject": "php",
    "question": "What is the difference between GET and POST methods in PHP?",
    "answer": "GET method sends data via URL and has limits on the amount of data, while POST method sends data via HTTP header and has no limits on the amount of data.",
    "difficulty": "moderate"
  },
  {
    "id": 16,
    "subject": "php",
    "question": "Explain the difference between mysqli and PDO in PHP.",
    "answer": "mysqli is a PHP extension used to access MySQL databases, while PDO (PHP Data Objects) is a more generic database access layer that supports multiple databases.",
    "difficulty": "moderate"
  },
  {
    "id": 17,
    "subject": "sql",
    "question": "What is a primary key in SQL?",
    "answer": "A primary key is a unique identifier for a record in a database table.",
    "difficulty": "moderate"
  },
  {
    "id": 18,
    "subject": "sql",
    "question": "What are the different types of JOIN clauses in SQL?",
    "answer": "The main types of JOIN clauses are INNER JOIN, LEFT JOIN (or LEFT OUTER JOIN), RIGHT JOIN (or RIGHT OUTER JOIN), and FULL JOIN (or FULL OUTER JOIN).",
    "difficulty": "moderate"
  },
  {
    "id": 19,
    "subject": "sql",
    "question": "What is the purpose of the WHERE clause in SQL?",
    "answer": "The WHERE clause is used to specify a condition while fetching the data from a single table or joining multiple tables in SQL.",
    "difficulty": "hard"
  },
  {
    "id": 20,
    "subject": "sql",
    "question": "Explain the concept of prepared statements in SQL.",
    "answer": "Prepared statements are SQL statements that are precompiled by the database server and stored for later use, improving performance and security by preventing SQL injection attacks.",
    "difficulty": "hard"
  },
  {
    "id": 21,
    "subject": "react",
    "question": "What is the purpose of React's useEffect hook?",
    "answer": "The useEffect hook is used to perform side effects in function components. If you provide an empty array ([]), it runs only once after the initial render. If you provide specific dependencies, it runs whenever any of those dependencies change.",
    "difficulty": "moderate"
  },
  {
    "id": 22,
    "subject": "react",
    "question": "Explain the concept of \"props\" in React.",
    "answer": "Props (short for properties) are used to pass data from a parent component to a child component. They are read-only and help in making components reusable by configuring them with different data.",
    "difficulty": "easy"
  },
  {
    "id": 23,
    "subject": "react",
    "question": "How does React's virtual DOM differ from the real DOM?",
    "answer": "The virtual DOM is a lightweight copy of the real DOM. React uses it to determine what changes need to be made to the real DOM. Instead of updating the real DOM directly, React updates the virtual DOM first, calculates the difference (or \"diff\"), and then applies the necessary changes to the real DOM efficiently.",
    "difficulty": "moderate"
  },
  {
    "id": 24,
    "subject": "react",
    "question": "What is a \"controlled component\" in React?",
    "answer": "A controlled component's form data is controlled by React state, meaning the state is the single source of truth for the form inputs. Uncontrolled components, on the other hand, use refs to access form values directly from the DOM.",
    "difficulty": "moderate"
  },
  {
    "id": 25,
    "subject": "react",
    "question": "Describe three lifecycle methods available in a class component in React.",
    "answer": "componentDidMount: Called once, immediately after the component is added to the DOM. - componentDidUpdate: Called after the component updates due to state or props changes. - componentDidCatch: Used for error handling in components.",
    "difficulty": "hard"
  },
];