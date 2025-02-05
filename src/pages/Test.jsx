import { useState, useEffect } from "react";
import questionsData from "../assets/json/questions.json";
import "../styles/test.css";

const N_QUESTIONS = 7;

const OPTIONS = [
  { text: "Muy en desacuerdo", value: -2 },
  { text: "Desacuerdo", value: -1 },
  { text: "Neutral", value: 0 },
  { text: "De acuerdo", value: 1 },
  { text: "Muy de acuerdo", value: 2 },
];

const Test = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [responses, setResponses] = useState({});
  const [userId] = useState(() => crypto.randomUUID());
  const [startTime] = useState(new Date());
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allQuestions = Object.entries(questionsData);
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    const chosenQuestions = shuffled
      .slice(0, N_QUESTIONS)
      .map(([id, q]) => ({ id, text: q.text }));

    setSelectedQuestions(chosenQuestions);
  }, []);

  const handleAnswer = (questionId, value) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  const submitTest = async () => {
    setLoading(true);
    const endTime = new Date();
    const payload = {
      datetime_start: startTime.toISOString(),
      datetime_end: endTime.toISOString(),
      user_id: userId,
      responses: Object.entries(responses).map(([id, value]) => ({
        ID_question: parseInt(id),
        answer: value,
      })),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxxeqQmyBJZteVNZpo3ThcR4QYudGWKHXdHjB_peQh6-nDrmrm7beqAPRlgR_JoP-9bfg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="test-completed">
        <h2>¡Test terminado!</h2>
        <p>¿Quieres ver tus resultados?</p>
      </div>
    );
  }

  return (
    <div className="test-container">
      <h2>Test Electoral</h2>

      <div className="instructions">
        <p>Responde a cada pregunta seleccionando una de las opciones.</p>
        <p>
          Puedes seleccionar una respuesta por pregunta. Luego, presiona{" "}
          <span>&quot;Enviar&quot;</span>.
        </p>
      </div>

      <div className="test">
        {selectedQuestions.map(({ id, text }) => (
          <div key={id} className="question">
            <p className="question-text">{text}</p>
            <div className="options">
              {OPTIONS.map(({ text, value }) => (
                <button
                  key={value}
                  className={`option-btn ${responses[id] === value ? "selected" : ""}`}
                  onClick={() => handleAnswer(id, value)}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={submitTest}
        disabled={
          submitted || Object.keys(responses).length < N_QUESTIONS || loading
        }
        className="submit-btn"
      >
        {loading ? "Enviando..." : "Enviar Respuestas"}
      </button>
    </div>
  );
};

export default Test;
