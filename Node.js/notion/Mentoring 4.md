# Mentoring 4 (2/1)

## 이벤트 루프

- Heap - Object
- Queue - Message
    
    Message Queue = 통로
    
    Message = 속
    
- Stack - Frame
    
    ```jsx
    const a = async (a,b) => {
    	const c = Math.sqrt(a) + b;
    	return c
    }
    
    const b = async (c,d) => {
    	const ab = a(c,d);
    	return ab + c + d;
    }
    
    // Math.sqrt => root(a)
    // a => Math.sqrt(a) + b
    // b => 계산 실행
    ```
    

# DI(Dependency injection)란?

- “의존성 주입” 이라는 뜻을 가진다.
- SW에서 말하는 의존성 주입은 **하나의 객체에 다른 객체의 의존성을 제공하는 기술**이라고 표현
- “의존 관계”에 있는 클래스들은 “주입”한다는 뜻
    
    ![Untitled](Mentoring%204%20(2%201)%20bc7cb1ddf58b4451baae4bd37f617a6e/Untitled.png)
    

**의존 관계**

- 왼쪽 그림에서는 `**A객체**`가 `**B,C객체**`를 참조하는 일반적인 의존성 관계의 모양임
- 오른쪽 그림은 외부에서 의존관계에 있는 `**B,C객체**`를 생성한 후, setter or 생성자를 상요하여 `**의존 객체를 조입**`하고 있는 형태

## 코드

### 의존성 주입이 없는 코드

```jsx
class MemoRepository{
	private val db = SQLiteDatabse()

	fun load(id : String){}
}

fun main(){
	val repository = MemoRepository()
	repository.load("8092")

}
```

데이터베이스로부터 저장된 데이터를 불러오는 `MemoRepository` 클래스가 있다.

내부에서 자체적으로 데이터베이스 객체 생성을 하고 있다.

그렇기 때문에 `외부(main)`에서 `MemoRepository`를 참조하여 데이터를 불러오기 위해선 인스턴스를 생성해 주어야 한다.

이런 경우에는 코드의 재활용성이 떨어지고, 만약 `MemoRepository`가 수정될 경우 `main` 도 수정해주어야 한다는 문제점이 생기게 된다.

그럴 경우, `결합도`가 높다고 이야기 한다.

### 의존성 주입이 있는 코드

```jsx
class MemoRepository(private var db:Database) {
	fun load(id : String) {}
}

fun main() {
	val db = SQListeDatabase()
	val repository = MemoRepository(db)
	repository.load("8092")
}
```

위와 다른 점은 데이터베이스 객체 생성에 대한 책임을 MemoRepository에서 가지고 있지 않고 생성자의 매개변수로 데이터베이스를 전달받는 구조임

- 외부(main)에서 데이터베이스 객체를 생성하고 MemoRepository 생성자 매개 변수로 데이터베이스 객체를 전달하는 구조임
- 이 경우에는, 의존하는 클래스를 직접 생성하는 것이 아니라 주입해주기 때문에 결합도도 낮추고 좀 더 유연한 코드를 만들 수 있게 됨

### DI의 특징

1. 코드의 **재활용성**을 높일 수 있기 때문에 유지보수가 용이해짐
2. 클래스 간 **결합도**를 낮출 수 있음
3. 인터페이스 기반으로 설계되며, 코드를 **유연하게** 함
4. **단위 테스트**하기가 더 쉬워짐

# IoC(Inversion of Control)

`**IoC(Inversion of Control)**` 란 “제어의 역전” 이라는 의미로, 말 그대로 **메소드나 객체의 호출작업을 개발자가 결정하는 것이 아닌, 외부에서 결정되는 것을 의미함**

**`IoC`**는 제어의 역전이라고 말하며, 간단히 말해 “**제어의 흐름을 바꾼다**”라고 함

객체의 **의존성을 역전시켜 객체 간의 결합도를 줄이고 유연한 코드를 작성**할 수 있게 하여 **가독성 및 코드 중복, 유지 보수를 편하게** 할 수 있게 됨

> 객체 생성 및 실행
> 
> 1. 객체 생성
> 2. 의존성 객체 생성
>     
>     *클래스 내붕에서 생성*
>     
> 3. 의존성 객체 메소드 호출

> 스프링에서 객체 생성
> 
> 1. 객체 생성
> 2. 의존성 객체 주입
>     
>     *스스로가 만드는 것이 아니라 제어권을 스프링에게 위임하여 스프링이 만들어 놓은 객체를 주입한다.*
>     
> 3. 의존성 객체 메소드 호출

**스프링이 모든 의존성 객체를 스프링이 실행될때 다 만들어주고 필요한곳에 주입**시켜줌으로써 **Bean들은 `싱글턴 패턴`의 특징**을 가지며,

**제어의 흐름을 사용자가 컨트롤 하는 것이 아니라 스프링에게 맡겨 작업을 처리**하게 된다.