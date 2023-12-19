
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/DataAnalysisList/')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
