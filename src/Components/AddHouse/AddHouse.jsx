import axios from "axios";
import { useEffect, useState } from "react";
const initState = {
  name: "",
  ownerName: "",
  address: "",
  areaCode: "",
  rent: "",
  bachelor: false,
  married: false,
  image: "",
};

export const AddHouse = () => {
  const [data, setData] = useState(initState);
  const [td, setTd] = useState([]);
  const handleChange = (e) => {
    let { className, value, type, checked } = e.target;
    value = type === "checkbox" ? checked : value;
    setData({ ...data, [className]: value });
  };

  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setTd(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/houses", data).then((res) => {
      getData();
    });
  };
  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" onChange={handleChange} className="name" required />
        <br />
        <label>ownerName</label>
        <input
          type="text"
          onChange={handleChange}
          className="ownerName"
          required
        />
        <br />
        <label>address</label>
        <input
          type="text"
          onChange={handleChange}
          className="address"
          required
        />
        <br />
        <label>areaCode</label>
        <input
          type="text"
          onChange={handleChange}
          className="areaCode"
          required
        />
        <br />
        <label>rent</label>
        <input type="text" onChange={handleChange} className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input type="checkbox" onChange={handleChange} className="bachelor" />
        <br />
        <label>married</label>
        <input type="checkbox" onChange={handleChange} className="married" />
        <br />
        <label>image</label>
        <input type="text" onChange={handleChange} className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
