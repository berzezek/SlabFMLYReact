import { useState, useEffect } from 'react';
import axios from 'axios';

function UseGetApi() {

  const [apiArray, setApiArray] = useState([]);
  const Authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIyMTMuMjMwLjEwMi4zNiIsImlhdCI6MTYzODU1MzY3NywiZXhwIjoxNzM4NTUzNjc3LCJzdWIiOiJzbGFiLmVjb21tZXJjZXNheXQifQ.Qq6OKJaM0GZ6j6Wiq_eIJFSYRuYBn08usQmacUzqb8s'
  let data = {
    "jsonrpc": "2.0",
    "method": 'products.get'
  }
  useEffect(() => {
    async function fetchData() {
      await axios({
        method: 'post',
        url: 'https://api.billz.uz/v1/',
        data,
        headers: {Authorization},

      }).then(response => {
        setApiArray(response.data);
      });
    }
    fetchData();
  }, []);

  return apiArray;
}

export default UseGetApi;