# React Axios Interceptors

- interceptors를 이용하면 `**then**` or `**catch**`로 처리되기 전에 요청과 응답을 가로챌 수 있다.

> 언제 사용하는가?
> 
> - API 요청마다 해줘야 하는 반복적인 작업이 있을 때 (Ex. 헤더에 토큰 싣기)
> - 에러 관리를 한 곳에서 하고 싶을 때

### request interceptors (클라이언트 → 서버)

```jsx
instance.interceptors.request.use(
	function(config) {
		const accessToken = getCookie("accessToken");
		const refreshToken = getCookie("refreshToken");

		if(accessToken && refreshToken) {
			config.headers.common["Authorization"] = `${accessToken}`;
			config.headers.common["Refresh-Token"] = `${refreshToken}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);
```

> cookie에 토큰을 저장하는 방식으로 로그인을 구현했기 때문에
> 
> 
> 쿠키에 엑세스 토큰과 리프레시 토큰 값이 있다면 헤더에 넣어주었다.
> 
> if, axios create를 한 적이 없다면 instance 대신 axios를 넣으면 된다.
> 

```jsx
expost const instance = axios.create({
	BaseUrl: process.env.REACT_APP_API, <- 요청 보낼 서버 주소 적는 곳
	headers: {
		"Content-Type" : "application/json", <- 헤더 기본 설정
		withCredentials: true,
	},
});
```

### response 인터셉터(서버 → 클라이언트)

```jsx
instance.interceptors.response.use(
	function (response) {
		console.log("interceptor >", response);
		return response;
	},
	function (error) {
		console.log("interceptor >", error);
		return Promise.reject(error);
	}
);
```

> 단순하게 console에 응답을 찍어주는 식으로만 코드를 작성하였지만 if 여기서 에러 관리를 하고 싶다면
> 
> 
> ```jsx
> function(error) {
> 	if(error.status === 401) {
> 		alert("로그인이 필요합니다.")
> 	}
> }
> ```
> 
> if, error code가 401번이면 alert 를 이용하여 메시지를 띄워주는 방식으로 처리 가능하다.
> 

---

## 요약

### Axios interceptors는 요청과 응답을 가로챈다

→ 요청과 응답에 반복되는 로직을 매번 넣기 귀찮을 때 사용하면 좋음

### Axios interceptors는 인스턴스와 같이 쓰면 좋다

→ 만약 헤더에 실어 줘야 하는 값이 다르면서 반복된다면 새 인스턴스 하나 만들어서 인터셉터를 각각 설정해주면 된다

### Axios interceptors는 요청 interceptors와 응답 interceptors로 나뉜다

→ 요청 인터셉터 = 서버에 보낼 데이터 처리

→ 응답 인터셉터 = 서버에서 준 데이터 처리