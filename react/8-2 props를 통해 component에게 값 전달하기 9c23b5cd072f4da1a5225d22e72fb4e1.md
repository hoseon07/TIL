# 8-2. props를 통해 component에게 값 전달하기

## props의 기본 사용법

### App.js

```jsx
import React from 'react';
import styled from 'styled-components';

function App () {
	return (
		<>
			//html코드 작성
		</>
```

### Hello.js

```jsx
import React from 'react';

function Hello(props) {
	return <div>hello {props.name}</div>
}

export default Hello;
```

컴포넌트에게 전달되는 props는 파라미터를 통하여 조회할 수 있다. props는 객체 형태로 전환되며 `name`값을 조회하려면 `props.name`을 조회하면 된다.