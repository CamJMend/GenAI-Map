import { useEffect, useState } from "react";
import GitCard from "../../components/GitCard/GitCard";
import Loading from "../../components/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination";
import "./GitHubAI.css"; // Make sure to import the CSS file

const GitHubAi = () => {
  const [gitData, setGitData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(27); // Adjust number of items per page as needed

  useEffect(() => {
    const fetchGitData = async () => {
      try {
        const response = await fetch("http://localhost:3001/git-info");
        const data = await response.json();
        setGitData(data);
        console.log("GitHub AI data fetched:", data);
      } catch (error) {
        console.error("Failed to fetch GitHub AI data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitData();
  }, []);

  // Calculate the current items to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = gitData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="github-ai">
      <h1 style={{ fontSize: "40px" }}>GitHub AI</h1>
      <div className="git-cards">
        {currentItems.map((git) => (
          <GitCard key={git.id} gitData={git} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={gitData.length}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default GitHubAi;
