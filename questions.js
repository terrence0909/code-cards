const questions = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Trainer Marking Language"],
    answerIndex: 0
  },
  {
    question: "Which tag is used for creating a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answerIndex: 0
  },
  {
    question: "Which HTML element defines the title of a document?",
    options: ["<meta>", "<head>", "<title>", "<header>"],
    answerIndex: 2
  },
  {
    question: "What does CSS stand for?",
    options: ["Computer Style Sheets", "Creative Style Syntax", "Cascading Style Sheets", "Colorful Style Sheets"],
    answerIndex: 2
  },
  {
    question: "How do you apply styles to an element with ID 'main'?",
    options: ["#main", ".main", "*main", "$main"],
    answerIndex: 0
  },
  {
    question: "Which property is used to change background color in CSS?",
    options: ["bgcolor", "color", "background-color", "background"],
    answerIndex: 2
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answerIndex: 0
  },
  {
    question: "How can you include JavaScript in a webpage?",
    options: ["<js>", "<script>", "<javascript>", "<code>"],
    answerIndex: 1
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["<!-- -->", "//", "/* */", "##"],
    answerIndex: 1
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    answerIndex: 3
  },
  {
    question: "Which method adds a new element to the end of an array?",
    options: ["push()", "add()", "append()", "insert()"],
    answerIndex: 0
  },
  {
    question: "How do you write 'Hello' in an alert box?",
    options: ["msg('Hello')", "alertBox('Hello')", "alert('Hello')", "prompt('Hello')"],
    answerIndex: 2
  },
  {
    question: "Which HTML element is used to display a scalar measurement?",
    options: ["<scale>", "<measure>", "<progress>", "<meter>"],
    answerIndex: 3
  },
  {
    question: "Which tag creates a table row?",
    options: ["<td>", "<th>", "<tr>", "<table>"],
    answerIndex: 2
  },
  {
    question: "What is the default position in CSS?",
    options: ["relative", "absolute", "static", "fixed"],
    answerIndex: 2
  },
  {
    question: "Which CSS unit is relative to the root element?",
    options: ["em", "rem", "%", "vw"],
    answerIndex: 1
  },
  {
    question: "Which operator is used to assign a value?",
    options: ["=", "==", "===", ":"],
    answerIndex: 0
  },
  {
    question: "What is the output of typeof null?",
    options: ["object", "null", "undefined", "string"],
    answerIndex: 0
  },
  {
    question: "Which HTML element is used for emphasized text?",
    options: ["<strong>", "<b>", "<em>", "<italic>"],
    answerIndex: 2
  },
  {
    question: "What is a semantic HTML element?",
    options: ["Element that has no meaning", "Element with styling only", "Element with meaningful tag name", "Element with animation"],
    answerIndex: 2
  },
  {
    question: "Which of these is not a JavaScript data type?",
    options: ["boolean", "undefined", "float", "object"],
    answerIndex: 2
  },
  {
    question: "What does NaN stand for in JavaScript?",
    options: ["No any Number", "Not a Name", "Not a Number", "Null and None"],
    answerIndex: 2
  },
  {
    question: "Which method is used to round a number?",
    options: ["round()", "Math.round()", "Math.up()", "rnd()"],
    answerIndex: 1
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "text-style", "font-style", "weight"],
    answerIndex: 0
  },
  {
    question: "How do you add a comment in HTML?",
    options: ["// comment", "<!-- comment -->", "# comment", "/* comment */"],
    answerIndex: 1
  },
  {
    question: "Which HTML tag is used for line break?",
    options: ["<br>", "<lb>", "<break>", "<newline>"],
    answerIndex: 0
  },
  {
    question: "What’s the correct way to reference an external CSS?",
    options: ["<css href='style.css'>", "<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<stylesheet>style.css</stylesheet>"],
    answerIndex: 2
  },
  {
    question: "Which method converts a string to a number?",
    options: ["parseInt()", "Number()", "parseFloat()", "All of the above"],
    answerIndex: 3
  },
  {
    question: "Which JavaScript event occurs when the user clicks on an HTML element?",
    options: ["onmouseover", "onchange", "onclick", "onsubmit"],
    answerIndex: 2
  },
  {
    question: "Which attribute is used in HTML to make a field required?",
    options: ["required", "validate", "compulsory", "mandatory"],
    answerIndex: 0
  },
  {
    question: "Which CSS value makes an element invisible but still takes space?",
    options: ["hidden", "invisible", "visibility: hidden", "display: none"],
    answerIndex: 2
  },
  {
    question: "How do you create a function in JavaScript?",
    options: ["function myFunc()", "func = myFunc()", "create myFunc()", "def myFunc()"],
    answerIndex: 0
  },
  {
    question: "Which input type defines a slider?",
    options: ["range", "slider", "scroll", "input-slider"],
    answerIndex: 0
  },
  {
    question: "Which selector selects all elements with class 'card'?",
    options: [".card", "#card", "card", "*card"],
    answerIndex: 0
  },
  {
    question: "How do you select the first child in CSS?",
    options: [":first", "::first", ":first-child", "::first-child"],
    answerIndex: 2
  },
  {
    question: "What is DOM in JavaScript?",
    options: ["Document Object Model", "Data Object Method", "Display Output Machine", "Design Oriented Model"],
    answerIndex: 0
  },
  {
    question: "Which method removes the last item from an array?",
    options: ["shift()", "pop()", "remove()", "splice()"],
    answerIndex: 1
  },
  {
    question: "What does '===' mean in JavaScript?",
    options: ["Assignment", "Equals", "Strict Equality", "Loose Equality"],
    answerIndex: 2
  },
  {
    question: "Which tag is used to insert an image in HTML?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answerIndex: 1
  },
  {
    question: "Which property changes text color in CSS?",
    options: ["font-color", "text-color", "color", "font-style"],
    answerIndex: 2
  },
  {
    question: "Which is a correct JavaScript array?",
    options: ["[1, 2, 3]", "[\"1\", \"2\", \"3\"]", "(1, 2, 3)", "{1,2,3}"],
    answerIndex: 0
  },
  {
    question: "Which function runs after a time delay?",
    options: ["setTimeout()", "delay()", "sleep()", "timeout()"],
    answerIndex: 0
  },
  {
    question: "What does JSON stand for?",
    options: ["JavaScript Object Notation", "Java Serialized Object Network", "JavaScript Oriented Notation", "Java Source Object Notation"],
    answerIndex: 0
  },
  {
    question: "Which input type is used for email validation?",
    options: ["text", "input", "email", "validate"],
    answerIndex: 2
  },
  {
    question: "Which HTML5 element is used for navigation links?",
    options: ["<nav>", "<links>", "<navigate>", "<menu>"],
    answerIndex: 0
  },
  {
    question: "How do you make a list with bullets?",
    options: ["<ol>", "<ul>", "<list>", "<li>"],
    answerIndex: 1
  },
  {
    question: "Which method is used to join array elements?",
    options: ["concat()", "join()", "merge()", "append()"],
    answerIndex: 1
  },
  {
    question: "How can you get the number of elements in an array?",
    options: ["count()", "size()", "length", "total()"],
    answerIndex: 2
  },
  {
    question: "What does localStorage allow you to do?",
    options: ["Store data permanently in user's browser", "Access server storage", "Encrypt browser data", "Create cookies"],
    answerIndex: 0
  },
  {
    question: "Which tag is used to create a form?",
    options: ["<form>", "<input>", "<submit>", "<section>"],
    answerIndex: 0
  }
];

