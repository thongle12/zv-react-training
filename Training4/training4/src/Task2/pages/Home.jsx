import React, { useCallback, useEffect, useRef, useState } from "react";
import WorldList from "../components/WorldList";
import { throttle } from "lodash";
import { debounce } from "lodash";
import { notification } from "antd";
import axios from "axios";
import Preloader from "../components/PreLoader";
Home.propTypes = {};

function Home() {
  const [world, setWorld] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  const URL = "https://restcountries.eu/rest/v2/";

  useEffect(() => {
    (() => {
      try {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => {
            setWorld(data);
            console.log('world', world)
            setLoading(false);
          });
      } catch (error) {
        console.log("fail to fetch world data", error);
      }
    })();
  }, []);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    debouncedChangeHandler(e.target.value);
    console.log('world', world)
  };

  const searchAPIhandler = async (val) => {
    console.log('world', world)
    setLoading(true);
    try {
      const url = val ? `${URL}name/${val}` : URL;
      const { data } = await axios.get(url);
      setWorld(data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      notification.open(err);
    }
  };

  const debouncedChangeHandler = useCallback(
    debounce((val) => searchAPIhandler(val), 300)
  ,[]);

  //vẫn dùng dataSearch cho vào input as value
  // tách ra 2 hàm
  // 1 hàm handler xử lý update dataSearch ngay lập tức
  // 1 hàm hanlder gọi API với tham số dataSearch
  // hàm số 2 là hàm được debounce
  // rồi onchange kích hoạt hàm 1
  // hàm 1 kích hoạt hàm 2

  return (
    <>
      <h2>Search countries by their name</h2>
      <input
        type="text"
        value={input}
        onChange={onChangeHandler}
        style={{ width: "300px", marginBottom: "30px" }}
      />
      <table>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Area</th>
        </tr>
        {loading ? (
          <Preloader />
        ) : (
          
          world.map((data, index) => (
            <tr key={index}>
              <WorldList data={data} />
            </tr>
          ))
          
        )}
      </table>
    </>
  );
}

export default Home;
