import classes from "./Counter.module.css";
import { increment, decrement, showCounter } from "../actions";
import { connect } from "react-redux";

const Counter = ({ increment, decrement, counter, showCounter, visibility }) => {

  return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>-- COUNTER VALUE --</div>
			<button onClick={showCounter}>Toggle Counter</button>
			<div className={visibility ? classes.visible : classes.hidden}>
				<button onClick={increment}>Increment 2 </button>
				<button onClick={decrement}>Decrement 1 </button>
				<p className={classes.value}>{counter}</p>
			</div>
		</main>
	);
};

const mapStateToProps = (state) => {
	return {
		increment: state.counterReducer.increment,
		counter: state.counterReducer.counter,
		showCounter: state.counterReducer.showCounter,
		visibility: state.counterReducer.visibility
	};
};


export default connect(mapStateToProps, { increment, decrement, showCounter })(Counter);
