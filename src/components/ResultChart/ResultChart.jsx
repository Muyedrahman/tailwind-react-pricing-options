import React from 'react';
import { Line, LineChart } from 'recharts';

const resultData = [

  {
    "id": 1,
    "name": "muyed",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "kamal",
    "physics": 74,
    "chemistry": 81,
    "math": 88
  },
  {
    "id": 3,
    "name": "abir",
    "physics": 90,
    "chemistry": 85,
    "math": 80
  },
  {
    "id": 4,
    "name": "raihan",
    "physics": 69,
    "chemistry": 72,
    "math": 77
  },
  {
    "id": 5,
    "name": "sadia",
    "physics": 95,
    "chemistry": 89,
    "math": 91
  },
  {
    "id": 6,
    "name": "jahid",
    "physics": 72,
    "chemistry": 65,
    "math": 70
  },
  {
    "id": 7,
    "name": "nabila",
    "physics": 88,
    "chemistry": 90,
    "math": 84
  },
  {
    "id": 8,
    "name": "tanvir",
    "physics": 60,
    "chemistry": 68,
    "math": 75
  },
  {
    "id": 9,
    "name": "farhana",
    "physics": 82,
    "chemistry": 79,
    "math": 87
  },
  {
    "id": 10,
    "name": "akash",
    "physics": 77,
    "chemistry": 73,
    "math": 80
  }
]





const ResultChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data = {resultData}>

              <Line dataKey="math"></Line>
              <Line dataKey={'chemistry'} stroke='red'></Line>
              <Line dataKey={'physics'} stroke='teal'></Line>

            </LineChart>
        </div>
    );
};

export default ResultChart;