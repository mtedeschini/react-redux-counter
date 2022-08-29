import classes from "./Counter.module.css";
import { increment, decrement, showCounter } from "../actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const counter = useSelector((state) => state.counter);
	const visibility = useSelector((state) => state.visibility);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(increment());
	};
	const decrementHandler = () => {
		dispatch(decrement());
	};
	const showCounterHandler = () => {
		dispatch(showCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>-- COUNTER VALUE --</div>
			<button onClick={showCounterHandler}>Toggle Counter</button>
			{visibility && (
				<div>
					<button onClick={incrementHandler}>Increment 2 </button>
					<button onClick={decrementHandler}>Decrement 1 </button>
					<p className={classes.value}>{counter}</p>
				</div>
			)}
		</main>
	);
};

export default Counter;
