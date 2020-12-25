//const TodoTitle = "Todo App";
//const Desc = "loren ipsum ...";
const date = "21/2020";

function Card(props) {
    const { titleText, desc } = props;
    return (
        <div className="card">
            <h3 className="card-title">{titleText}</h3>
            <p className="card-desc">{desc}</p>
            <p className="card-footer">{date}</p>
        </div>
    )
}

export default Card