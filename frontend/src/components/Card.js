export function Card({ title, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <a href={"https://your-backend.onrender.com/" + link} target="_blank" rel="noopener noreferrer">View PDF</a>
    </div>
  );
}
