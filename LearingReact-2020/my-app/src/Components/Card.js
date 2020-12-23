const TodoTitle = "Todo App";
const Desc = "loren ipsum ...";
const date = "21/2020";

function Card() {
    return (
        <div className="card">
            <h3 className="card-title">{TodoTitle}</h3>
            <p className="card-desc">{Desc}</p>
            <p className="card-footer">{date}</p>
        </div>
    )
}

export default Card