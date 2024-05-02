import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./UpdateAiTool.css";

const UpdateAITechnology = () => {
  const { aiTechnologyId } = useParams();
  const [name, setName] = useState("");
  const [referenceURL, setReferenceURL] = useState("");
  const [pricingModel, setPricingModel] = useState("");
  const [licensingType, setLicensingType] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [urlLogo, setUrlLogo] = useState("");
  const [aiTasks, setAiTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentTask, setCurrentTask] = useState("");
  const [categoriesLoaded, setCategoriesLoaded] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/ai-category");
        if (!response.ok) throw new Error("Failed to fetch categories");
        const data = await response.json();
        setAllCategories(data);
        setCategoriesLoaded(true);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setError("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `http://localhost:3001/ai-info/${aiTechnologyId}`
      );
      const responseArr = await response.json();
      const data = responseArr[0];
      console.log(data);
      setName(data.name);
      setReferenceURL(data.referenceURL);
      setPricingModel(data.pricingModel);
      setLicensingType(data.licensingType);
      setDescription(data.description);
      setShortDescription(data.shortDescription);
      setUrlLogo(data.urlLogo);
      setAiTasks(data.tasks);
      setCategories(data.categories);
      categoriesLoaded ? setLoading(false) : setCategoriesLoaded(true);
    };
    fetchDetails();
  }, [aiTechnologyId, categoriesLoaded]);

  const handleAddTask = () => {
    if (!aiTasks.includes(currentTask) && currentTask && aiTasks.length < 5) {
      setAiTasks([...aiTasks, currentTask]);
      setCurrentTask("");
    }
  };

  const handleRemoveTask = (task) => {
    setAiTasks(aiTasks.filter((t) => t !== task));
  };

  const handleAddCategory = () => {
    if (
      !categories.includes(currentCategory) &&
      currentCategory &&
      categories.length < 6
    ) {
      setCategories([...categories, currentCategory]);
      setCurrentCategory("");
    }
  };

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((c) => c !== category));
  };

  const handleUpdate = async (event) => {
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
      const response = await fetch(
        `http://localhost:3001/ai-info/${aiTechnologyId}`,
        {
          method: "PUT",
          body: JSON.stringify(payload),
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok)
        throw new Error(
          `Failed to update AI Technology, status code: ${response.status}`
        );
      alert("AI Technology updated successfully!");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const test = (event) => {
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
    console.log(payload);
  };
  return (
    <>
      <div className="sidebar-content" style={{ display: "flex" }}>
        <Sidebar />
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="form-container">
            <h1 style={{ color: "black", fontSize: "30px" }}>
              Update AI Technology
            </h1>
            <form onSubmit={handleUpdate}>
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
                <label>AI Tasks</label>
                <input
                  type="text"
                  value={currentTask}
                  onChange={(e) => setCurrentTask(e.target.value)}
                  placeholder="Enter a task"
                />
                <button type="button" onClick={handleAddTask}>
                  Add Task
                </button>
                {aiTasks.map((task) => (
                  <div key={task}>
                    <p style={{ color: "black" }}>{task} </p>
                    <button
                      className="third"
                      onClick={() => handleRemoveTask(task)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
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
                {categories.map((category) => (
                  <div key={category}>
                    <p style={{ color: "black" }}>{category} </p>
                    <button
                      className="third"
                      onClick={() => handleRemoveCategory(category)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button type="submit">Update AI Technology</button>
            </form>
            {error && <p className="error">{error}</p>}
          </div>
        )}
      </div>
    </>
  );
};

export default UpdateAITechnology;
