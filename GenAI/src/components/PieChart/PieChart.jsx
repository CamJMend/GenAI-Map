import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import './PieChart.css';

function PieChart() {
    const ref = useRef();
    const width = 960;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    // Definición de la escala de colores
    const color = d3.scaleOrdinal()
        .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

    // Generar datos aleatorios
    const randomData = () => {
        return color.domain().map(label => ({
            label: label,
            value: Math.random()
        }));
    };

    // Dibujar el gráfico de pastel
    const drawChart = (data) => {
        // Limpiar el contenedor antes de redibujar
        d3.select(ref.current).select('svg').remove();

        const svg = d3.select(ref.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
            .attr('transform', `translate(${width / 2}, ${height / 2})`);

        const pie = d3.pie()
            .sort(null)
            .value(d => d.value)(data);

        const arc = d3.arc()
            .innerRadius(0)
            .outerRadius(radius);

        svg.selectAll('path')
            .data(pie)
            .join('path')
            .attr('d', arc)
            .attr('fill', d => color(d.data.label))
            .attr('stroke', 'white')
            .style('stroke-width', '2px');
    };

    useEffect(() => {
        // Inicializar el gráfico
        drawChart(randomData());
    }, []);

    return (
        <div>
            <button onClick={() => drawChart(randomData())}>Randomize</button>
            <div ref={ref} />
        </div>
    );
}

export default PieChart;
