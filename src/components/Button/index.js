import "./index.scss";

const Button = (props) => {
	return (
		<a href={props.link} target="_blank" className="button">
			{props.children}
		</a>
	);
};

export default Button;
