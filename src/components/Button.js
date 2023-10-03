import "./Button.css";

function Button({ content, func }) {
    return (
        <div className="Plane" onClick={() => func(content)}>
            <div className="Num">{content}</div>
        </div>
    );
}

export default Button;
