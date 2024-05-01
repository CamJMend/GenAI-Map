import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "./PieChart.css";
import Loading from "../Loading/Loading";

// Helper function to count categories from data
function countCategories(data) {
  const categoryCount = {};
  data.forEach((item) => {
    item.categories.forEach((category) => {
      categoryCount[category] = (categoryCount[category] || 0) + 1;
    });
  });
  return Object.keys(categoryCount).map((category) => ({
    category: category,
    value: categoryCount[category],
  }));
}

const PieChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/ai-info"); // Adjust the URL to your API
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false); // Ensure loading is disabled in case of error
      }
    };
    fetchData();
  }, []);

  // Initialize and update chart
  useLayoutEffect(() => {
    if (isLoading) return; // Do not initialize the chart if data is not yet available
    const dataCategory = countCategories(data);

    let root = am5.Root.new(chartRef.current);
    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
      })
    );

    let series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: "value",
        categoryField: "category",
      })
    );

    series.data.setAll(dataCategory);

    series.slices.template.setAll({
      draggable: true,
      strokeWidth: 3,
      strokeOpacity: 0,
      stroke: am5.color(0xffffff),
      tooltipText: "{category}: {value}",
      cornerRadius: 7,
    });

    series.labels.template.setAll({
      text: "{category}: {value}",
      centerX: am5.percent(50),
      centerY: am5.percent(50),
      fontSize: 20,
      fill: am5.color(0xffffff),
      opacity: 0.75,
    });
    series.ticks.template.setAll({
      stroke: am5.color(0xffffff), // Dark gray color
    });

    let legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
        fill: am5.color(0xff0fff),
      })
    );

    legend.data.setAll(series.dataItems);
    legend.labels.template.setAll({
      fill: am5.color(0xffffff),
    });
    legend.valueLabels.template.setAll({
      fill: am5.color(0xffffff),
    });

    legend.itemContainers.template.events.on("hit", function(ev) {
      onCategoryToggle(ev.target.dataItem.dataContext.category);
    }, this);


    return () => {
      root.dispose();
    };
  }, [isLoading, data]); // Dependency on isLoading and data ensures re-initialization when needed

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }}></div>
  );
};

export default PieChart;

