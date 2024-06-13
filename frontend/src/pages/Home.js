import React, { useEffect, useState } from "react";
import Refecto from "../components/Refecto";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);

  const getData = async () => {
    axios
      .get("http://localhost:5000/api/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Hi Developer</h1>

      {data &&
        typeof data === "object" &&
        Object.keys(data).length > 0 &&
        data.map((item, index) => <Refecto key={index} data={item} />)}
    </div>
  );
}
