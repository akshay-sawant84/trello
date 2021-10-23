import axios from "axios";
import React, { useState, useEffect } from "react";
import { peopleApi, planetApi } from "../Constants/Constants";
import ReactAutocomplete from "react-autocomplete";
import style from "../../styles/Autocomplete.module.css";

const Filtering = () => {
  const [data, setdata] = useState([]);
  const [searchedValue, setsearchedValue] = useState("");

  let people = () => axios.get(peopleApi);
  let planet = () => axios.get(planetApi);

  useEffect(() => {
    setdata([]);

    Promise.all([people(), planet()])
      .then(([peopleData, planetData]) => {
        if (planetData.status === 200 && planetData.status === 200) {
          let { results } = peopleData.data;

          let finalPeopleData = results.map((val) => ({
            ...val,
            type: "People",
          }));

          let finalPlanetData = planetData.data.results.map((val) => ({
            ...val,
            type: "Planet",
          }));
          setdata([...data, ...finalPeopleData, ...finalPlanetData]);
        } else {
          alert("something went wrong");
        }
      })
      .catch((err) => {
        alert("something went wrong");
      });
  }, []);

  return (
    <div className={`row mx-0 ${style.reactAutocomplete}`}>
      <div className="offset-md-4 col-md-4">
        <ReactAutocomplete
          inputProps={{ placeholder: "Search..." }}
          items={data}
          shouldItemRender={(item, value) =>
            item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
          }
          getItemValue={(item) => item.name}
          renderItem={(item, highlighted) => (
            <div
              key={item.url}
              style={{
                backgroundColor: highlighted ? "#4FD5D6" : "transparent",
              }}
            >
              <p className="mb-0">
                {item.name} <span className="float-right">({item.type})</span>{" "}
              </p>
            </div>
          )}
          value={searchedValue}
          onChange={(e) => setsearchedValue(e.target.value)}
          onSelect={(value) => setsearchedValue(value)}
        />
      </div>
    </div>
  );
};

export default Filtering;
