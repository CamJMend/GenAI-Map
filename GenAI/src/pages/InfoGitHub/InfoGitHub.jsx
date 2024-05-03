import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import DOMPurify from "dompurify";
import "./InfoGitHub.css";

const InfoGitHub = () => {
  const { repo, owner } = useParams();
  const [readme, setReadme] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReadme = async () => {
      setLoading(true);
      setError(null);
      try {
        // Update the fetch URL to match the GitHub API for fetching README files
        const url = `http://localhost:3001/git-info/repo/${owner}/${repo}`;
        const response = await fetch(url);
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text(); // Get the raw README content
        const html = marked(text); // Convert Markdown to HTML
        const cleanHtml = DOMPurify.sanitize(html); // Sanitize the HTML
        setReadme(cleanHtml);
      } catch (e) {
        console.error("Fetching README failed", e);
        setError("Failed to fetch README");
      } finally {
        setLoading(false);
      }
    };

    fetchReadme();
  }, [repo, owner]); // Refetch if these parameters change

  return (
    <div>
      <h1 style={{ color: "black" }}>GitHub Repository Information</h1>
      {loading && <p>Loading README...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && (
        <div
          className="info-GitHub"
          dangerouslySetInnerHTML={{ __html: readme }}
        />
      )}
    </div>
  );
};

export default InfoGitHub;
