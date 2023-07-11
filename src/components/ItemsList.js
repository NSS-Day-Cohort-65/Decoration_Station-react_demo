export const ItemsList = ({ filteredItems }) => {

    return <div className="item-container">
        {filteredItems.map((item) => {
            return (
                <div key={item.id} className="item-card">
                    <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="item-img"
                        onClick={() =>
                            window.alert(`You clicked the ${item.name} image`)
                        }
                    />
                    <div className="item-name">{item.name}</div>
                </div>
            )
        })}
    </div>
}
