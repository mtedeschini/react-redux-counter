import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../reducers/counter";

const CounterToolkit = () => {
	const counter = useSelector((state) => state.counter.counter);
	const visibility = useSelector((state) => state.counter.visibility);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		dispatch(counterActions.increment(12));
	};
	const decrementHandler = () => {
		dispatch(counterActions.decrement(25));
	};
	const showCounterHandler = () => {
		dispatch(counterActions.showCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Redux Toolkit </h1>
			<div className={classes.value}>-- COUNTER VALUE --</div>
			<button onClick={showCounterHandler}>Toggle Counter</button>
			{visibility && (
				<div>
					<button onClick={incrementHandler}>Increment 12 </button>
					<button onClick={decrementHandler}>Decrement 25 </button>
					<p className={classes.value}>{counter}</p>
				</div>
			)}
		</main>
	);
};

export default CounterToolkit;
