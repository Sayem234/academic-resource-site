import React, { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const [resources, setResources] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://your-backend.onrender.com/api/resources")
      .then(res => res.json())
      .then(setResources);
    fetch("https://your-backend.onrender.com/api/subjects")
      .then(res => res.json())
      .then(setSubjects);
  }, []);

  const filteredResources = resources.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredSubjects = subjects.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Academic Resource Center</h1>
      <Input value={search} onChange={e => setSearch(e.target.value)} />
      <h2>Previous Questions</h2>
      {filteredResources.map((item, idx) => (
        <Card key={idx} title={item.title} link={item.file} />
      ))}
      <h2>Subjects</h2>
      {filteredSubjects.map((item, idx) => (
        <Card key={idx} title={item.title} link={item.file} />
      ))}
    </div>
  );
}

export default App;
