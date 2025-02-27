import React, { useState } from "react";
import Question from "../components/Question";

export default function Quiz() {
  const [topic, setTopic] = useState("golang");
  const [expertise, setExpertise] = useState("Beginner");
  const [numQuestions, setNumQuestions] = useState("5");
  const [style, setStyle] = useState("Master Oogway");
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ topic, expertise, numQuestions, style });

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ topic, expertise, numQuestions, style }),
      });
      const data = await response.json();
      console.log(data);
      setQuestions(data.questions);
    } catch (error) {
      console.error("Error fetching questions:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container p-4 min-h-[80vh] h-full w-full flex justify-center items-center">
      <div className="w-full w-auto">
        {questions.length === 0 ? (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-4 text-left">
              Quiz Generation Options
            </h1>
            <p className="mb-4 text-left">
              Please choose your preferences below to generate your personalized
              quiz
            </p>

            {/* Topic Selection */}
            <div>
              <label
                htmlFor="topic"
                className="block mb-2 text-gray-400 text-left"
              >
                Topic
              </label>
              <select
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full p-2 border-b-2 border-teal-600 rounded-none"
                disabled={loading}
              >
                <option value="golang">golang</option>
                <option value="aws">aws</option>
                <option value="javascript">javascript</option>
                <option value="CI/CD">CI/CD</option>
                <option value="home gardens">home gardens</option>
                <option value="coffee">coffee</option>
                <option value="finger foods">finger foods</option>
              </select>
            </div>

            {/* Expertise Selection */}
            <div>
              <label
                htmlFor="expertise"
                className="block mb-2 text-gray-400 text-left"
              >
                Expertise
              </label>
              <select
                id="expertise"
                value={expertise}
                onChange={(e) => setExpertise(e.target.value)}
                className="w-full p-2 border-b-2 border-teal-600 rounded-none"
                disabled={loading}
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>

            {/* Number of Questions Selection */}
            <div>
              <label
                htmlFor="numQuestions"
                className="block mb-2 text-gray-400 text-left"
              >
                Number of Questions
              </label>
              <select
                id="numQuestions"
                value={numQuestions}
                onChange={(e) => setNumQuestions(e.target.value)}
                className="w-full p-2 border-b-2 border-teal-600 rounded-none"
                disabled={loading}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </div>

            {/* Style Selection */}
            <div>
              <label
                htmlFor="style"
                className="block mb-2 text-gray-400 text-left"
              >
                Style of Questions
              </label>
              <select
                id="style"
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                className="w-full p-2 border-b-2 border-teal-600 rounded-none"
                disabled={loading}
              >
                <option value="Master Oogway">Master Oogway</option>
                <option value="1940's gangster">1940's gangster</option>
                <option value="Like I'm an 8-year old">
                  Like I'm an 8-year old
                </option>
                <option value="Jedi">Jedi</option>
                <option value="Captain Jack Sparrow">
                  Captain Jack Sparrow
                </option>
                <option value="Matthew Mcconaughey">Matthew Mcconaughey</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-teal-600 text-white font-medium py-3 px-4 rounded w-full sm:w-auto hover:cursor-pointer"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </form>
        ) : (
          <div data-testid="question-container">
            <h2 className="text-3xl font-bold mb-4 text-left">
              Quiz Questions:
            </h2>
            {questions.map((question, index) => (
              <p
                key={index}
                data-testid={`question-${index}`}
                className="text-lg mb-2"
              >
                {question}
              </p>
            ))}
            <Question questions={questions} />
          </div>
        )}
      </div>
    </main>
  );
}
