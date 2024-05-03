import { useState } from "react";

const UpdateRanking = ({ aiTechnologyId, rankingS }) => {
  const [ranking, setRanking] = useState(rankingS);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdateRanking = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/ai-info/trending/${aiTechnologyId}`,
        {
          method: "PATCH",
          body: JSON.stringify({ ranking }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok)
        throw new Error(
          `Failed to update ranking, status code: ${response.status}`
        );
      setSuccess("Ranking updated successfully!");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccess("");
    }
  };

  return (
    <div className="form-container" style={{ maxWidth: "40%" }}>
      <h1 style={{ color: "black", fontSize: "20px" }}>
        Update AI Technology Ranking
      </h1>
      <div className="form-group">
        <label>Ranking</label>
        <input
          type="number"
          value={ranking}
          onChange={(e) => setRanking(e.target.value)}
          placeholder="Enter new ranking"
        />
        <button type="button" onClick={handleUpdateRanking}>
          Update Ranking
        </button>
      </div>
      {success && (
        <p className="success" style={{ color: "green" }}>
          {success}
        </p>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default UpdateRanking;
