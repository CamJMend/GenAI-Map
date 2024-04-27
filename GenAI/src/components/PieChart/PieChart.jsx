import { useState, useEffect, useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import "./PieChart.css";

function countCategories(data) {
  const categoryCount = {};

  // Iterate over each item in the array
  data.forEach((item) => {
    item.categories.forEach((category) => {
      if (categoryCount[category]) {
        categoryCount[category] += 1;
      } else {
        categoryCount[category] = 1;
      }
    });
  });

  // Convert the counts into the desired array format
  const result = Object.keys(categoryCount).map((category) => ({
    category: category,
    value: categoryCount[category],
  }));

  return result;
}

const PieChart = () => {
  const chartRef = useRef(null);
  const [data, setData] = useState(null); // State to hold API data
  const [isLoading, setIsLoading] = useState(true); // State to manage loading indicator

  // Fetch data from an API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/ai-info");
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setIsLoading(false); // Ensure loading is disabled in case of error
      }
    };

    fetchData();
  }, []);

  // Initialize and update chart
  useLayoutEffect(() => {
    if (!data) return; // Do not initialize the chart if data is not yet available
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

    return () => {
      root.dispose();
    };
  }, [data]); // Dependency on data ensures chart re-initialization when data updates

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      id="chartdiv"
      ref={chartRef}
      style={{ width: "100%", height: "500px" }}
    ></div>
  );
};

export default PieChart;
