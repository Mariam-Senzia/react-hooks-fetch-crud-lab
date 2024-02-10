import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleCorrectAnswer() {
    fetch(`http://localhost:4000/questions/${id}`,{
      method:"PATCH",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify({
        "correctIndex": correctIndex
      })
      .then((res) => res.json())
      .then((ans) =>console.log(ans))
    })
    }

  function handleDelete () {
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    .then((res) => res.json())
    .then((deletequest) => console.log(deletequest))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleCorrectAnswer} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
