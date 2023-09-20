# 12. useRef로 특정 DOM 선택하기

- element의 크기를 가져오거나 스크롤바 위치를 가져오거나 포커스르 설정하는 경우 등과 같은 상황에서는 관련 라이브러리 등의 외부 라이브러리를 사용해야 할 때에도 특정DOM에다 적용하기 때문에 DOM을 선택해야 하는 경우가 발생한다.

```jsx
import React, { useState, useRef } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = e => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

> **`useRef( )`**를 사용하여 Ref 객체를 만들고, 이 객체를 우리가 선택하고 싶은 DOM에 ref값으로 설정하면 Ref 객체의 `**.current**` 값은 우리가 원하는 DOM을 가르키케 된다
>