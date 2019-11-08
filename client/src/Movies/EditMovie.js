import React, { useState, useEffect } from 'react'
import axios from "axios"

function EditMovie(props) {
  const [movie, setMovie] = useState({
    id: "",
    title: "",
    director: "",
    metascore: "",
    stars: []
  })

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${props.match.params.id}`)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [props.match.params.id])

  const handleChange = (event) => {

  }
  return (
    <div>
      <h1>Update Movie</h1>

      <form>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={movie.title}
          onChange={handleChange}
          />
          <input
          type="text"
          name="director"
          placeholder="Director"
          value={movie.director}
          onChange={handleChange}
          />
          <input
          type="number"
          min="0"
          max="100"
          name="metascore"
          placeholder="Title"
          value={movie.metascore}
          onChange={handleChange}
          />
          <input
          type="text"
          name="stars"
          placeholder="Title"
          value={movie.stars}
          onChange={handleChange}
          />

          <button type="submit">Save</button>

      </form>

    </div>
  )
}

export default EditMovie
