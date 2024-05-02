import "./AddAiTool.css";
import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
const CreateAITechnology = () => {
  const [name, setName] = useState("");
  const [referenceURL, setReferenceURL] = useState("");
  const [pricingModel, setPricingModel] = useState("FREE");
  const [licensingType, setLicensingType] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [urlLogo, setUrlLogo] = useState("");
  const [aiTasks, setAiTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState("");
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [allCategories, setAllCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/ai-category");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setAllCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  const handleAddTask = () => {
    if (aiTasks.length < 5 && !aiTasks.includes(currentTask) && currentTask) {
      setAiTasks([...aiTasks, currentTask]);
      setCurrentTask(""); // Reset current task input
    }
  };

  const handleAddCategory = () => {
    if (
      categories.length < 6 &&
      !categories.includes(currentCategory) &&
      currentCategory
    ) {
      setCategories([...categories, currentCategory]);
      setCurrentCategory(""); // Reset current category select
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name,
      referenceURL,
      pricingModel,
      licensingType,
      description,
      shortDescription,
      urlLogo,
      AITasks: aiTasks,
      Categories: categories,
    };

    try {

      const response = await fetch("http://localhost:3001/ai-info", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok)
        throw new Error(
          `Failed to create AI Technology, status code: ${response.status}`
        );
      const responseData = await response.json();
      alert(responseData.message);
      setName("");
      setReferenceURL("");
      setPricingModel("FREE");
      setLicensingType("");
      setDescription("");
      setShortDescription("");
      setUrlLogo("");
      setAiTasks([]);
      setCategories([]);
      setCurrentTask("");
      setCurrentCategory("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="sidebar-content" style={{ display: "flex" }}>
        <Sidebar />
        <div className="form-container">
          <h1 style={{ color: "black", fontSize: "30px" }}>Add an AI</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Reference URL</label>
              <input
                type="url"
                value={referenceURL}
                onChange={(e) => setReferenceURL(e.target.value)}
                placeholder="Reference URL"
              />
            </div>
            <div className="form-group">
              <label>Pricing Model</label>
              <select
                value={pricingModel}
                onChange={(e) => setPricingModel(e.target.value)}
              >
                <option value="FREE">FREE</option>
                <option value="FREEMIUM">FREEMIUM</option>
                <option value="PAID">PAID</option>
              </select>
            </div>
            <div className="form-group">
              <label>Licensing Type</label>
              <input
                type="text"
                value={licensingType}
                onChange={(e) => setLicensingType(e.target.value)}
                placeholder="Licensing Type"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              ></textarea>
            </div>
            <div className="form-group">
              <label>Short Description</label>
              <input
                type="text"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                placeholder="Short Description"
              />
            </div>
            <div className="form-group">
              <label>URL Logo</label>
              <input
                type="url"
                value={urlLogo}
                onChange={(e) => setUrlLogo(e.target.value)}
                placeholder="URL Logo"
              />
            </div>
            <div className="form-group">
              <label>Categories</label>
              <select
                value={currentCategory}
                onChange={(e) => setCurrentCategory(e.target.value)}
              >
                <option value="">Select a category</option>
                {allCategories.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.value}
                  </option>
                ))}
              </select>
              <button type="button" onClick={handleAddCategory}>
                Add Category
              </button>
            </div>
            <div className="form-group">
              {categories.map((cat) => (
                <span key={cat}>{cat} </span>
              ))}
            </div>
            <div className="form-group">
              <label>AI Tasks</label>
              <input
                type="text"
                value={currentTask}
                onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                placeholder="Enter a task"
                onChange={(e) => setCurrentTask(e.target.value)}
              />
              <button type="button" onClick={handleAddTask}>
                Add Task
              </button>
            </div>
            <div className="form-group">
              {aiTasks.map((task) => (
                <span key={task}>{task} </span>
              ))}
            </div>
            <div className="form-group">
              <button className="primary " type="submit">
                Create AI Technology
              </button>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateAITechnology;
