import React, { useState } from "react";

const AddMovie = () => {
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "price") {
      setPrice(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (price !== "" && title !== "") {
      const newMovie = { id: new Date().getTime(), price, title };
      alert("Submitted");
      console.log(newMovie);
    }
  };

  return (
    <div className="container" style={{ marginTop: "1rem" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Movie title"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="number"
          name="price"
          value={price}
          placeholder="Price of movie"
          onChange={(e) => handleChange(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
