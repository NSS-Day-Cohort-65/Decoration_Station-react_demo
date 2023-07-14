import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const NewDecorationForm = ({
 
}) => {
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])
  const [userChoices, setUserChoices] = useState({
    name: '',
    imageUrl: '',
    seasonId: '',
    categoryId: ''
  })

  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:8088/categories')
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData)
      })

    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((seasonsData) => {
        setSeasons(seasonsData)
      })

  }, [])

  const handleSaveDecoration = (evt) => {
    evt.preventDefault()

   
      userChoices.name &&
      userChoices.imageUrl &&
      userChoices.seasonId &&
      userChoices.categoryId
      ?
      fetch('http://localhost:8088/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userChoices),
      })
      .then(
        navigate("/items")
      ) : window.alert("Please finish filling out the form")
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            required
            id="name"
            type="text"
            className="form-control"
            placeholder="Item"
            value={userChoices.name}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.name = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="imgUrl">Image URL:</label>
          <input
            required
            id="imgUrl"
            type="text"
            className="form-control"
            placeholder="https://www.example.com"
            value={userChoices.imageUrl}
            onChange={(event) => {
              const copy = { ...userChoices }
              copy.imageUrl = event.target.value
              setUserChoices(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Season:</div>
          {seasons.map((season) => {
            return (
              <div key={season.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={season.id}
                    checked={userChoices.seasonId === season.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.seasonId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {season.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <div>Category:</div>
          {categories.map((category) => {
            return (
              <div key={category.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={category.id}
                    checked={userChoices.categoryId === category.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.categoryId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {category.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset>
      <button
        className="btn"
        onClick={(event) => {
          handleSaveDecoration(event)
        }}
      >
        Add Decoration
      </button>
    </form>
  )
}