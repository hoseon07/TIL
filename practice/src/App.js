import { useState } from 'react';

function Useexample() {
	const [time, setTime] = useState(1);
	
	const onClick = () => {
		setTime(time + 1);
	}

	console.log("time update -> ', time");

	return (
		<>
			<div className="App">
			   <header className="App-header">
		       <span>현재시간: {time}시</span>
	        <button onClick={onClick}>update</button>
		     </header>
		  </div>
		</>
	);
}

export default Useexample