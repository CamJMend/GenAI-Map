import React from 'react';
import './Licencias.css'; // Asegúrate de crear este archivo CSS para estilizar el componente

const LicensesAndSources = () => {
  const licenses = [
    {
      name: 'React',
      version: '17.0.2',
      licenseType: 'MIT',
      source: 'https://reactjs.org/'
    },
    {
      name: 'Axios',
      version: '0.21.1',
      licenseType: 'MIT',
      source: 'https://github.com/axios/axios'
    },
    {
      name: 'AmCharts',
      version: '4.10.0',
      licenseType: 'Commercial',
      source: 'https://www.amcharts.com/'
    },
  ];

  return (
    <div className="licenses-container">
      <h1>Licenses and Sources</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
            <th>License Type</th>
            <th>Source URL</th>
          </tr>
        </thead>
        <tbody>
          {licenses.map((license, index) => (
            <tr key={index}>
              <td>{license.name}</td>
              <td>{license.version}</td>
              <td>{license.licenseType}</td>
              <td>
                <a href={license.source} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicensesAndSources;

