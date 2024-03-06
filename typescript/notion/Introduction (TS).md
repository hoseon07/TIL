# Introduction (TS)

# tsconfig.json

tsconfig.json은 프로젝트 빌드를 위한 컴파일러 옵션을 지정하는 TypeScript의 구성 파일

TypeScript 컴파일러가 프로젝트의 구조와 이를 Js로 컴파일하는 방법을 이해하는 데 도움이 됨

### 예시

- `target`: 컴파일할 JS 버전임
- `module`: 사용할 모듈 시스템임
- `strict`: 엄격한 유형 검사를 활성화/ 비활성화 함
- `outDir`: 컴파일된 JS 파일을 출력할 디렉터리 임
- `rootDir`: TS 파일의 루트 디렉터리 임
- `include`: 컴파일에 포함할 파일/ 디렉터리 패턴의 배열임
- `exclude`: 컴파일에서 제외할 파일/ 디렉터리 패턴의 배열임

```tsx
{
	"compilerOptions" : {
		"target" : "es5",
		"module" : "commonjs",
		"strict" : true,
		"outDir" : "./dist",
		"rootDir" : "./src",
	},
	"exclude" : ["node_modules"],
	"include" : ["src"]
}
```

# Compiler Options

TypeScript 컴파일러는 컴파일 프로세스를 사용자 정의할 수 있는 다양한 명령줄 옵션을 허용

이러한 옵션은 접두사를 사용하여 컴파일러에 전달될 수 있음

```tsx
tsc --target ES5 --module commonjs
```