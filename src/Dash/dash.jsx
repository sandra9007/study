import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dash.css";

function Dash() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const [exams, setExams] = useState([]);
  const [examSubject, setExamSubject] = useState("");
  const [examDate, setExamDate] = useState("");

  function addTask() {
    if (taskText.trim() !== "") {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  }

  function addExam() {
    if (examSubject.trim() !== "" && examDate !== "") {
      const newExam = { subject: examSubject, date: examDate };
      setExams([...exams, newExam]);
      setExamSubject("");
      setExamDate("");
    }
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  }

  function deleteExam(indexToDelete) {
    setExams(exams.filter((_, index) => index !== indexToDelete));
  }

  function getRemainingDays(date) {
    const today = new Date();
    const examDay = new Date(date);
    const diffTime = examDay - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? diffDays : 0;
  }

  return (
    <div className="container-fluid p-4">
      {/* Sidebar */}
      <div className="row">
        <div className="col-md-2 bg-light p-3 shadow-sm">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">Dashboard</li>
              <li className="list-group-item">To-do</li>
              <li className="list-group-item">Days Remains</li>
              <li className="list-group-item">AI Chatbot</li>
              <li className="list-group-item">AI Voicebot</li>
            </ul>
          </nav>
          <div className="mt-3">
            <button className="btn btn-outline-danger w-100">Sign-Out</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-10">
          <div className="row">
            {/* To-do Section */}
            <div className="col-md-4">
              <h4>Today's Work</h4>
              <div className="mb-2">
                <label>Add today's work</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter task"
                  value={taskText}
                  onChange={(e) => setTaskText(e.target.value)}
                />
              </div>
              <button className="btn btn-primary mb-3" onClick={addTask}>
                Add
              </button>
              <ul className="list-group">
                {tasks.map((task, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <div>
                      <input type="checkbox" className="me-2" />
                      {task}
                    </div>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteTask(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Examination Section */}
            <div className="col-md-4">
              <h4>Examination</h4>
              <div className="mb-2">
                <label>Exam Subject:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter subject"
                  value={examSubject}
                  onChange={(e) => setExamSubject(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label>Exam Date:</label>
                <input
                  type="date"
                  className="form-control"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                />
              </div>
              <button className="btn btn-success mb-3" onClick={addExam}>
                Add Exam
              </button>
              <ul className="list-group">
                {exams.map((exam, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    {exam.subject} - {exam.date}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteExam(index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Days Remaining Section */}
            <div className="col-md-4">
              <h4>Days Remaining</h4>
              {exams.length === 0 ? (
                <p className="text-muted">No exams added.</p>
              ) : (
                <ul className="list-group">
                  {exams.map((exam, index) => (
                    <li key={index} className="list-group-item">
                      {exam.subject}:{" "}
                      <strong>{getRemainingDays(exam.date)} days left</strong>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
