import { useState, useEffect, useContext } from "react";
import "./Dropdown.css";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const Dropdown = () => {
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingTasks, setLoadingTasks] = useState(true);
  const { updateState } = useContext(GlobalContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/ai-category");
        const data = await response.json();
        setCategories(data);
        setLoadingCategories(false);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setLoadingCategories(false);
      }
    };

    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:3001/ai-task");
        const data = await response.json();
        setTasks(data);
        setLoadingTasks(false);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
        setLoadingTasks(false);
      }
    };

    fetchCategories();
    fetchTasks();
  }, []);
  const updateTask = (e) => {
    updateState("task", e.target.value);
  };

  const updateCategory = (e) => {
    updateState("category", e.target.value);
  };

  const updateSort = (e) => {
    console.log(e.target.value);
    updateState("sortBy", e.target.value);
  };
  return (
    <>
      <select
        className="search-sort"
        onChange={(e) => {
          updateSort(e);
        }}
      >
        <option disabled selected value="">
          Sort by
        </option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <div className="search-dropdown">
        <select
          className="category-dropdown"
          defaultValue="all"
          onChange={(e) => updateCategory(e)}
        >
          <option disabled value="">
            Categories
          </option>
          <option value="all">All Categories</option>
          {loadingCategories ? (
            <option>Loading categories...</option>
          ) : (
            categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.value}
              </option>
            ))
          )}
        </select>
        <select
          className="task-dropdown"
          defaultValue=""
          onChange={(e) => updateTask(e)}
        >
          <option disabled value="">
            Tasks
          </option>
          <option value="all">All Tasks</option>
          {loadingTasks ? (
            <option disabled>Loading tasks...</option>
          ) : (
            tasks.map((task) => (
              <option key={task.id} value={task.name}>
                {task.value}
              </option>
            ))
          )}
        </select>
      </div>
    </>
  );
};
export default Dropdown;
