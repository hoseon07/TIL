# Running TypeScript

# tsc

- `tsc`TypeScript 컴파일러용 명령줄 도구임
- TypeScript 코드를 JS 코드로 컴파일하여 브라우저 또는 JS 런타임 환경과 호환됨
- `tsc`터미널이나 명령 프롬프트에서 다음 명령을 실행하여 TypeScript 코드를 컴파일하는 명령어 사용 가능
    
    ```tsx
    tsc
    ```
    
    > 해당 명령어는 파일에 지정된 프로젝트의 모든TypeScript 파일을 컴파일 함 `tsconfig.json`
    > 
    > 
    > 특정 TypeScript 파일을 컴파일하려면 `tsc` 다음과 같이 명령 뒤에 파일 이름을 지정
    > 
    > ```tsx
    > tcs index.ts
    > ```
    > 
    > 이 tsc 명령에는 컴파일 프로세스를 사용자 정의하는데 사용할 수 있는 여러 옵션과 플래그가 있다`--target`
    > 
    >  예를 들어 옵션을 사용하여 컴파일할 JS 버전을 지정하거나 `--outDir`컴파일된 JS 파일의 출력 디렉터리를 지정하는 옵션을 사용할 수 있다.
    >