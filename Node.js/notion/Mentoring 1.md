# Mentoring 1

npm 고치기…

node에 대해서 알아오기

node.js의 개념

# What is Node.js?

# Node.js란?

> *Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임이다.*
> 
> - 런타임: **프로그램들을 실행할 수 있는 환경**

## 1. 이벤트 기반

> **이벤트 기반 : 이벤트가 발생할 때 미리 저장해둔 작업을 수행하는 방식**
> 
> - 클릭이나 네트워크 요청 등
- Node.js도 이벤트가 발생하면 이벤트 리스너에 등록해둔 콜백 함수를 호출한다.

### Node.js 내부 구조

- **이벤트 루프(Event Loop)**
    - 여러 이벤트가 동시 발생 시 어떤 순서로 콜백 함수를 호출할지 판단하는 역할 담당
    - 노드가 종료될 때까지 이벤트 처리를 위한 작업을 반복하므로 Loop라고 불림
- **Task Queue(= CallBack Queue)**
    - 이벤트 발생 후 호출되어야 할 콜백 함수들이 기다리는 공간.
    - 콜백들이 이벤트 루프가 정한 순서대로 줄을 서 있으므로 콜백 큐라고도 불림
        - API에 따라 마이크로 Task Queue를 사용하거나, Macro Tast Queue를 사용
        - **Micro Task Queue(= EventQueue)**
            - RequestAnimationFrame, I/O, UI rendering, seteTimeOut, setInterval, setImmediate
        - **Macro Task Queue(= Job Queue)**
            - process.nextTick, Promises, queueMicrotask(f), MutationObserver
        - **Background :** 타이머나 I/O 작업 콜백 또는 이벤트 리스너들이 대기하는 곳

## 2. 논블로킹 I/O 모델

> **논블로킹** : 이전 작업이 완료될 때까지 **멈추기 않고 다음 작업을 수행함**을 뜻함
> 

![Untitled](Mentoring%201%20b088561bb14245c5b6d17bc0444083e7/Untitled.png)

- 블로킹보다 논블로킹 방식이 같은 작업을 더 짧은 시간 동안 처리할 수 있다.
- **싱글 스레드라는 한계** 때문에 JS의 모든 코드가 이 방식으로 시간적 이득을 볼 수 있는 것은 아니다. ⇒ 노드 프로세스 이외 **다른 컴퓨팅 자원을 사용할 수 있는 I/O 작업**이 주로 시간적 이득을 많이 보기 때문에 이를 고려할 것.
- **논블로킹, 블로킹/ 동기, 비동기에 대한 정리 링크**
    
    [https://inpa.tistory.com/entry/👩‍💻-동기비동기-블로킹논블로킹-개념-정리](https://inpa.tistory.com/entry/%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-%EB%8F%99%EA%B8%B0%EB%B9%84%EB%8F%99%EA%B8%B0-%EB%B8%94%EB%A1%9C%ED%82%B9%EB%85%BC%EB%B8%94%EB%A1%9C%ED%82%B9-%EA%B0%9C%EB%85%90-%EC%A0%95%EB%A6%AC)
    

## 3. 싱글 스레드

> **스레드(Thread)**
> 
> - 프로세스 내에서 실행되는 **흐름의 단위**
> - 하나의 프로세스는 스레드를 여러 개 가질 수 있음
> - 스레드들은 부모 **프로세스의 자원을 공유**

> **프로세스(Process)**
> 
> - 운영체제에서 할당하는 **작업의 단위**
> - Node.js나 인터넷 브라우저 같은 프로그램은 개별적인 프로세스
> - 프로세스 간 **메모리 자원 공유 X**
- 노드 프로세스는 내부적으로 스레드를 여러 개 가지고 있지만
직접 제어할 수 있는 스레드는 하나 뿐 → **싱글 스레드**라고 부름

# Why use Node.js?

## Node.js를 사용하는 이유

- Google Javascirpt 엔진 - 빠르고 확장 가능한 웹 · 앱이다
- 서버 측 애플리케이션 - 노드는 특정 이벤트에 의해 흐름이 결정되는 이벤트 기반 프로그래밍 모델이다.
- 쉽게 확장 가능하다.
- 각 프로세스마다 개별 프로세스 기반으로 확장되어 멀티 코어 서버에 부하를 분산시킨다.

1. JS는 배우기 간단하고 수많은 프레임워크를 가지고 있다. 
2. 데이터를 JSON으로 관리할 수 있다.
3. 여러 모듈이 공유되어 있다.
4. 데이터 스트리밍에 좋다.