import { useNavigate } from "react-router-dom";

export default function Testing() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
}
