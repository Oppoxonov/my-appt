import React from "react";
import { Container,Button,Main,} from "./Style";
import { useState, useEffect } from "react";
import Malumot from "./Malumot";
import { Grid, Paper } from "@mui/material";


const App =()=>{

  const [count, setCount]=useState(0);
  const [student, setStudent]=useState([
    {id:1, name: 'Bobur', surname: '1 Boburov', tel: 123456, img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg", },
    {id:2, name: 'Begzod', surname: '2 Boburov', tel: 12351456,img:  'https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg',},
    {id:3, name: 'Burxon', surname: '3 Boburov', tel: 123455556,img:  "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:4, name: 'Begoyim', surname: '4 Boburov', tel: 126653456,img:  "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:5, name: 'Baxrom', surname: '5 Boburov', tel: 123455566,img:  "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:6, name: 'Baxodir', surname: '6 Boburov', tel: 123455126,img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:7, name: 'Alisher', surname: '7 Boburov', tel: 123456496,img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:8, name: 'Atxam', surname: '8 Boburov', tel: 1234584856,img:  "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:9, name: 'Aziz', surname: '9 Boburov', tel: 123455946,img:  "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:10, name: 'Akobir', surname: '10 Boburov', tel: 12345216,img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:11, name: 'Akbarali', surname: '11 Boburov', tel: 123456446,img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
    {id:12, name: 'Azizbek', surname: '12 Boburov', tel: 1234564686,img: "https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",},
  
  ]);
  const increment=()=>{
    setCount(count+1);
  }
  const decrement=()=>{
    setCount(count-1);
  }
  
  return (
    <Main>
      <Container>
        <Button onClick={increment}> + </Button>
        <h1>{count}</h1>
        <Button onClick={decrement}> - </Button>
      </Container>
      <Malumot data={student}/>
    </Main>
  
  );
}

export default App;
