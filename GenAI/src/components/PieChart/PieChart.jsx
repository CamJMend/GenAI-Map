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

    series.labels.template.setup = function(label, dataItem) {
      label.events.on("dataitemchanged", function(ev) {
        label.set("background", am5.RoundedRectangle.new(root, {
          fill: ev.target.dataItem.get("slice").get("fill")
        }));
      });
    }

    

    

    // Limpieza al desmontar el componente
    return () => {
      root.dispose();
    };
  }, []);

  return (
  <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }}></div>);
};

export default PieChart;

//lineas entre charts negras 

// texto activo blanco y desasctivado meno opacidad
