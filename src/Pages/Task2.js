import {useState} from 'react';
import MotionHoc from "./MotionHoc";

const Task2Component = () => {
  let [count, changeCount] = useState(0);
  return (
    <>
    <h1>Task #2</h1>
    <h1>Using React Hooks</h1>
		<div class="counter">
			<h2>{count}</h2>
			<button onClick={()=>changeCount(count - 1)}>
				<span>-1</span>
			</button>
			<button onClick={()=>changeCount(count + 1)}>
				<span>+1</span>
			</button>
			<button onClick={()=>changeCount(count = 0)}>
				<span>Reset</span>
			</button>
		</div>
    </>
	)
};

const Task2 = MotionHoc(Task2Component);

export default Task2;
