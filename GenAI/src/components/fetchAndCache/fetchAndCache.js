const fetchItems = async () => {
  if (
    !localStorage.getItem("data") ||
    localStorage.getItem("timestamp") <
      new Date().getTime() - 1000 * 60 * 60 * 1
  ) {
    try {
      const response = await fetch("http://localhost:3001/ai-info");
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
      console.log("Data fetched and stored in local storage");
      localStorage.setItem("timestamp", new Date().getTime());
      return data;
    } catch (error) {
      console.error("Failed to fetch items:", error);
      return [];
    }
  } else {
    return JSON.parse(localStorage.getItem("data"));
  }
};

export default fetchItems;
