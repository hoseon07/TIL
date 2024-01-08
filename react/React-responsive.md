# React-responsive

# useMediaQuery 문법

```jsx
const 변수명 = useMediaQuery ({
	query : "(최소 or 최대-width:px)"
})

const isPc = useMediaQuery ({
	query : "(min-width : 1024px) and (max-width : 1920px)"
});
//width값이 최소 1024 ~ 1920px 까지의 범위는 isPc가 출력된다.
```

# Hooks

react-responsive에서는 useMediaQuery 라는 Hook을 제공한다.

작동 되는 방식은 useMediaQuery에 media-query조건을 넣어주면 해당 조건에 따라 `true`, `false`를 return해 준다.

```jsx
import React from "react"
import { useMediaQuery } from "react-responsive"

function App() {
	const isPc = useMediaQuery ({
		query : "(min-width:1024px)"
	});
	const isTablet = useMediaQuery ({
		query : "(min-width: 768px) and (max-width: 1023px)"
	});
	const isMobile = useMediaQuery ({
		query : "(max-width: 767px)"
	});

	return(
		<>
			<div>
				{isPc && <p>HI PC</p>}
				{isTablet && <p>HI Tablet</p>}
				{isMobile && <p>HI Mobile</p>}
			</div>
		</>
	);
}

export default App;
```

[Media Query](https://www.notion.so/Media-Query-fc5e09ec15ee48308c4c5f0ad74c84a6?pvs=21)

### Hooks가 필요한 이유

`Hooks`가 필요한 이유는 아래와 같은 상황에서 유용하게 사용된다.

- PC에서는 “웹페이지”라는 텍스트를, 모바일에서는 “모바일” 이라는 텍스트를 보여주려고 할 때 단순 CSS Media-Query로 작성 하려면 매번 두 가지 케이스를 작성해서 display : none, block; 으로 나눠서 처리를 해야하는 번거로움이 있다.
    
    ```jsx
    import React from "react"
    import { useMediaQuery } from "react-responsive"
    
    const isPc = useMediaQuery ({
    	query: "(min-width:768px)"
    });
    
    	const languageText = isPc ? "웹페이지" : "모바일"
    
    	return (
    		<>
    			<div>
    				{languageText}
    			</div>
    		</>
    	)
    }
    
    export default App;
    ```