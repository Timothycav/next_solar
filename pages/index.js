import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const DataArrayPage = () => {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/data.json');
      const data = await response.json();
      setDataArray(data);
    }

    fetchData();
  }, []);

  return (
    <div>
       <Navbar />
      <h1>Data from JSON Array</h1>
      {dataArray.length > 0 ? (
        dataArray.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
            <p>Content: {item.overview.content}</p>
            <p>Struture: {item.structure.content}</p>
            <p>Geology: {item.geology.content}</p>
            <p>Rotation: {item.rotation}</p>
            <p>Revolution: {item.revolution}</p>
            <p>Radius: {item.radius}</p>
            <p>Temperature: {item.temperature}</p>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default DataArrayPage;

