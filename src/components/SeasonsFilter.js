export const SeasonsFilter = ({ seasons, setSeasonChoice }) => {
    return <div id="filter-bar">
        <select
          className="filter-box"
          id="season-select"
          onChange={(event) => {
            setSeasonChoice(parseInt(event.target.value))
          }}
        >
          <option key="0" value="0">
            All Seasons
          </option>

          {seasons.map((season) => {
            return (
              <option key={season.id} value={season.id}>
                {season.name}
              </option>
            )
          })}
        </select>
      </div>
}