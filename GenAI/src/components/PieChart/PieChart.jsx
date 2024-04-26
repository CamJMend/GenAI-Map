import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import './PieChart.css';

const PieChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    let root = am5.Root.new(chartRef.current);

    // Aplicar temas
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // Crear el gráfico de pastel
    let chart = root.container.children.push(am5percent.PieChart.new(root, {
      layout: root.verticalLayout,
      innerRadius: am5.percent(50)
    }));

    // Crear serie para el gráfico
    let series = chart.series.push(am5percent.PieSeries.new(root, {
      valueField: "value",
      categoryField: "category",
    }));

    series.data.setAll([
      { category: "Text", value: 1000 },
      { category: "Video", value: 200 },
      { category: "Image", value: 300 },
      { category: "Code", value: 300 },
      { category: "Music", value: 300 },
    ]);

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

    // Agregar leyenda
    let legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.percent(50),
      x: am5.percent(50),
      marginTop: 15,
      marginBottom: 15,
    }));


    legend.data.setAll(series.dataItems);

    // Limpieza al desmontar el componente
    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
};

export default PieChart;

//lineas entre charts negras 

// texto activo blanco y desasctivado meno opacidad






// import React, { useEffect, useRef } from 'react';
// import * as d3 from 'd3';
// import './PieChart.css';

// function PieChart() {
//     const ref = useRef();
//     const width = 960;
//     const height = 500;
//     const radius = Math.min(width, height) / 2;

//     // Definición de la escala de colores
//     const color = d3.scaleOrdinal()
//         .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
//         .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

//     // Generar datos aleatorios
//     const randomData = () => {
//         return color.domain().map(label => ({
//             label: label,
//             value: Math.random()
//         }));
//     };

//     // Dibujar el gráfico de pastel
//     const drawChart = (data) => {
//         // Limpiar el contenedor antes de redibujar
//         d3.select(ref.current).select('svg').remove();

//         const svg = d3.select(ref.current)
//             .append('svg')
//             .attr('width', width)
//             .attr('height', height)
//             .append('g')
//             .attr('transform', `translate(${width / 2}, ${height / 2})`);

//         const pie = d3.pie()
//             .sort(null)
//             .value(d => d.value)(data);

//         const arc = d3.arc()
//             .innerRadius(0)
//             .outerRadius(radius);

//         svg.selectAll('path')
//             .data(pie)
//             .join('path')
//             .attr('d', arc)
//             .attr('fill', d => color(d.data.label))
//             .attr('stroke', 'white')
//             .style('stroke-width', '2px');
//     };

//     useEffect(() => {
//         // Inicializar el gráfico
//         drawChart(randomData());
//     }, []);

//     return (
//         <div>
//             <button onClick={() => drawChart(randomData())}>Randomize</button>
//             <div ref={ref} />
//         </div>
//     );
// }

// export default PieChart;
