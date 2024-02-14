# Mentoring 5(2/6)

### 과제

- git 명령어 공부하기
- testing code 공부해오기
    - jest(framework) 공부하기

# git 기본 명령어

### 현재 상태 확인

`git status`

### git 저장소 생성하기

`git init`

### 저장소 복제 및 다운로드

`git clone [https:~~~~]`

### 저장소에 코드 추가

`git add`

`git add *`

### 커밋에 파일의 변경 사항을 한번에 모두 포함

`git add -A`

### 커밋 생성

`git commit -m "message"`

### 변경 사항 원격 서버 업로드(push)

`git push origin master`

### 변경 내용을 merge하기 전에 바뀐 내용 비교

`git diff [브랜치 이름] [다른 브랜치 이름]` 

# git Branch 관련

### git init을 설정하면 해당 폴더에 .git이라는 파일이 생성됨

`git init`

### github 주소와 연결

`git remote add origin [github 주소]` 

### 브랜치 생성

`git branch [브랜치명]`

### 해당 브랜치로 이동

`git checkout [브랜치명]`

### 브랜치를 생성하고 해당 브랜치로 바로 이동

`git branch -b [브랜치명]`

### 원하는 브랜치로 이동했는지 확인

`git branch`

### 모든 브랜치 확인

`git branch -a`

### 파일 및 폴더 add

`git add .`

### 커밋

`git commit -m "commit message"` 

### 원하는 브랜치로 push하여 원격 서버에 전송

`git push origin [브랜치명]`

### 브랜치 삭제

`git branch -d [브랜치명]`

### 현재 브랜치에 다른 브랜치 수정사항 병합

`git merge [다른 브랜치 이름]`

# git Config 설정 관련

### 전체 config 리스트 확인

`git config --list`

### git config 설정하는 방법

`git config --global user.email "name@~~~.com"`

### git config 삭제

`git config --unset user.email`

# Jest

# Jest란?

---

Jset는 **페이스북**에서 만들어서 React와 더불어 많은 Js 개발자들로부터 좋은 반응을 얻고 있는 테스팅 라이브러리다.

출시 초기에는 FN에서 주로 사용하였지만, 최근에는 BN에서도 기존의 Js 테스팅 라이브러리를 대체하고 있다.

> **Info**
> 
> 
> Jest 이전에는 Js 코드를 테스트하려면 여러가지 테스팅 라이브러리를 조합해서 사용하곤 했다.
> 
> 예를 들어,Mocha, Test Runner로 사용하고, Chai, Expect와 같은 Test Mathcher를 사용했으며, 또한 Sinon과 Testdouble과 같은 Test Mock 라이브러리도 필요했었다.
> 
> 위와 같은 라이브러리는 굉장히 유사하지만 약간씩 다른 API를 가지고 있었기 때문에, 여러 프로젝트에 걸쳐서 일하는 Js 개발자들에게 혼란을 주기도 했다.
> 

하지만 Jest는 라이브러리 하나만 설치하면, Test Runner와 Test Mathcher 그리고 Test Mock 프레임워크까지 제공해주기 때문에 현재 대세라고 할 수 있다.

# Jest 설치

---

`npm i -D jest`

설치를 완료한 뒤에, package.json 파일열 열고 test 스크립트를 jest로 추

`npm start` 처럼 예약어이기 때문에 `npm run test` 대신 바로 `npm test`로 스크립트 실행이 가능

# Jest 기본 문법

---

```jsx
describe('계산 테스트', () => {
   const a = 1, b = 2;

   test('a + b는 3이다.', () => {
      expect(a + b).toEqual(3);
   });
});

/*
describe('그룹 테스트 설명 문자열', () => {
   const a = 1, b = 2; // 테스트에 사용할 일회용 가짜 변수 선언

   test('개별 테스트 설명 문자열', () => {
      expect(검증대상).toXxx(기대결과);
   });
});
*/
```

![Untitled](Mentoring%205(2%206)%201c0d17926ff34966b722d13ee241d126/Untitled.png)

`describe`는 테스트 그룹을 묶어주는 역할을 하고, 그 안의 콜백함수 내에 테스트에 쓰일 변수, 객체들을 선언하여 일회용으로 사용 가능

`toXxx`부분에서 사용되는 함수는 흔히 Test Mathcher라고 하는데, 위에서 사용된 toEqual( ) 함수는 값을 비교할 때 사용함

즉, `expect(a + b).toEqual(3);`이라는 말은 a + b의 기댓값이 3과 같으면 true를 의미함