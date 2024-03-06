# TypeScript Types

- number
- string
- boolean
- any
- void
- null and undefined
- never
- object
- symbol
- Enumerated types(Enum)
- Tuple types
- Array types
- Intersection types
- Type aliases
- Type assertions

## Primitive Types

### Boolean

- true or false를 나타내는 TypeScript의 기본 데이터 유형
    
    ```tsx
    let isTrue: boolean = true;
    let isFalse: boolean = false;
    ```
    

### Number

- 숫자 값을 나타내는 TypeScript의 기본 데이터 유형이다.
- 정수값과 소수점 값이 모두 포함됨
    
    ```tsx
    let intValue: number = 42;
    let floatValue: number = 3.14;
    ```
    

### String

- 텍스트 데이터를 나타내는 TypeScript의 기본 데이터 유형임
- 16비트 유니코드 문자 집합의 요소 집합임
    
    ```tsx
    let name: string: "John Doe";
    ```
    

### Void

- Void 값을 반환하지 않는 함수의 반환 값을 나타냄
- 함수에 명령문이 없거나 `return`해당 반환 명령문에서 명시적인 값을 반환하지 않을 때마다 추론된 형식임
    
    ```tsx
    // The inferred return type is void
    function noop() {
    	return;
    }
    ```
    

### Undefined & null

- Js에는 없거나 초기화되지 않은 값을 알리는 데 사용되는 두 가지 기본 값(`null`, `undefined`)이 있음
- TypeScript에는 동일한 이름을 가진 두 가지 해당 유형이 있음
    
    ```tsx
    function doSomething(x: string | null) {
    	if(x === null) {
    		// do nothing
    	} else {
    			console.log("Hello,' + x.toUpperCase());
    		}
    } 
    ```
    

## Object Types

### Interface

- TS를 사용하면 여러 객체에서 재사용할 수 있는 인터페이스를 사용하여 객체를 구체적으로 입력할 수 있음.
    
    ```tsx
    interface Person {
    	name: string;
    	age: number;
    }
    
    function greet(person: Person) {
    	return "Hello" + person.name;
    }
    ```
    

### Class

- TS에서 클래스는 특정 속성과 메서드를 사용하여 객체를 생성하기 위한 blueprint임
- 클래스는 객체지향 프로그래밍의 기본 개념임
    
    ```tsx
    class Car {
    	make: string;
    	model: string;
    	year: number;
    
    	constructor(make: string, model: string, year: number) {
    		this.make = make;
    		this.model = model;
    		this.year = year;
    	}
    	
    	drive() {
    		console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
    	}
    }
    ```
    

### Enum

- Enums는 JS의 유형 수준 확장이 아님
- 개발자는 명명된 상수 집합을 정의할 수 있음.
- 열거형으르 사용하면 의도를 문서화하거나 고유한 사례 집합을 만드는 것이 더 쉬워짐
- TypeScript는 숫자 기반 열거형과 문자열 기반 열거형을 모두 제공함
    
    ```tsx
    enum Direction {
    	Up = 1,
    	Down,
    	Left,
    	Right,
    }
    ```
    
    > up은 1로 초기화되는 숫자 열거형이 있음
    > 
    > 
    > up 이외의 다른 것들은 자동으로 증가됨
    > 
    > Direction.Up =  1, Down = 2, Left = 3, Right = 4
    > 
    

### Arrays

- `[1,2,3]`과 같은 배열 유형을 지정하려면 `number[]`구문을 사용할 수 있음
- 이 구문은 모든 유형에 대해 작동함
    
    ```tsx
    const numbers: number[] = [1,2,3];
    ```
    

### Tuple

- 튜플 유형은 포함된 요소 수와 특정 위치에 포함된 유형을 정확하게 아는 또 다른 종류의 배열 유형임
    
    ```tsx
    typeStringNumberPair = [string, number];
    
    const pair: StringNumberPair = ["hello", 42];
    
    const first = pair[0];
    const second = pair[1];
    
    //Error: Index out of bounds
    
    const third = pair[2];
    ```