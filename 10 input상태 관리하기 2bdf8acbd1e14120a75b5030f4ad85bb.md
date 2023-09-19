# 10. input상태 관리하기

## InputSample.js

```jsx
import React from 'react';

function InputSample() {
	return (
		<>
			<div>
      <input />
      <button>초기화</button>
      <div>
        <b>값: </b>
      </div>
    </div>
		</>
	);
}

export default InputSample;
```

## App.js

```jsx
import React from 'react';
import InputSample from './InputSample';

function App() {
	return (
		<>
			<InputSample />
		</>
	);
}

export default App;
```

## InputSample.js

```jsx
import React, { useState } from 'react';

function InputSample() {
	const [text, setText] = useState('');

	const onChange = (e) => {
		seeText('');
	};

	return (
		<>
			<div>
				<input onChange={onChange} value={text} />
				<button onClick={onReset}>초기화</button>
				<div>
					<b>값:{text}</b>
				</div>
			</div>
		</>
	);
}

export default InputSample;
```

input의 상태를 관리할 때에는 input태그의 `value`값도 설정해주는 것이 중요하다.

상태가 바뀌었을 때 input의 내용도 업데이트 된다.