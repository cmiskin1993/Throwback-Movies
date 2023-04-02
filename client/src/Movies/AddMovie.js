import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = ({ onMovieAdded }) => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    description: "",
    image:
      "https://www.pngitem.com/pimgs/m/269-2692978_clapper-board-png-download-clapperboard-clipart-transparent-png.png",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    fetch("/movies", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...formData, ongoing: true }),
    }).then(async (res) => {
      if (res.ok) {
        onMovieAdded();
        navigate("/movies");
      } else {
        res.json().then((data) => {
          setErrors(Object.entries(data.errors));
        });
      }
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Add New Movie </h2>
      <h3>
        {errors
          ? Object.entries(errors).map((error, i) => (
              <div key={i}> {`${error[1]}`} </div>
            ))
          : null}
      </h3>
      <form className="form-container" onSubmit={onSubmit}>
        <label> Movie Title: </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>
          <p>Movie Genre:</p>
          <select
            name="genre"
            onChange={handleChange}
            value={formData.genre || ""}
          >
            <option value="">--Please choose a genre--</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="romantic-comedy">Romantic Comedy</option>
            <option value="thriller">Thriller</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="sports">Sports</option>
          </select>
        </label>

        <label> Description: </label>
        <textarea
          type="text"
          rows="4"
          cols="50"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label> Image: </label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddMovie;
