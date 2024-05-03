import "./Sources.css"; // Make sure to import your CSS file like this

const Sources = () => {
  const usefulUrls = [
    "https://www.visualcapitalist.com/ranked-the-most-popular-ai-tools/",
    "https://www.flexos.work/learn/generative-ai-top-150",
    "https://www.stash.com/learn/top-ai-companies/",
    "https://www.datamation.com/featured/ai-companies/",
    "https://www.synthesia.io/post/ai-tools",
    "https://aiparabellum.com/category/blog/",
    "https://zapier.com/blog/best-ai-productivity-tools/",
    "https://intellipaat.com/blog/top-artificial-intelligence-tools/",
    "https://www.simplilearn.com/tutorials/artificial-intelligence-tutorial/top-generative-ai-tools",
    "https://tech.feedspot.com/ai_blogs/",
    "https://news.mit.edu/topic/artificial-intelligence2",
    "https://www.elegantthemes.com/blog/business/best-ai-tools",
    "https://clickup.com/blog/ai-tools/",
    "https://bootcamp.uxdesign.cc/7-best-ai-tools-to-rank-1-on-google-eb0fd4e7d4ad",
    "https://www.worklife.news/technology/top-ai-tools-2024/",
    "https://www.eweek.com/artificial-intelligence/ai-companies/",
    "https://huyenchip.com/llama-police",
    "https://www.aitimejournal.com/top-ai-tools-for-2021",
  ];

  return (
    <div className="sources">
      <h1>Useful Sources</h1>
      <ul>
        {usefulUrls.map((url, index) => (
          <li key={index}>
            <a href={url} target="_blank" rel="noreferrer">
              {url} {/* Display the URL or some description */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sources;
