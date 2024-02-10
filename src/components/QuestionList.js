import React,{useEffect,useState} from "react";


function QuestionList() {
  const[question,setQuestion] = useState([]);

  const questionList = question.map((quiz) => {
     return <li key={quiz.prompt}>{quiz.prompt}</li>;
  })


  useEffect(() =>{
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((ques) => setQuestion(ques))
  },[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionList}
      </ul>
    </section>
  );
}

export default QuestionList;
