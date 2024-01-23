# Mentoring 2

- 과제
    
    RDB 기초, ORM & 이벤트 루프
    
- **제어권(자신의 함수를 실행시킬 권리)**
    - **블로킹** - 제어권을 넘겨줘서 a함수가 b 함수에게 제어권을 넘겨주고 b가 실행됨(b가 실행되는 중에는 a함수가 실행되지 않음)
    - **논블로킹** - 제어권을 넘겨주지 않고 a가 가지고 있으므로 a함수와 b함수가 동시에 실행됨
    - **동기** - b함수의 return 값이 중요하기 때문에 계속 확인이 필요 b함수의 return값을 가지고 a함수를 실행시킴
    - **비동기** - b에게 실행을 시키고 b의 callback 값을 가지고 a를 실행시킴
    

# RDB 기초

### RDB(Relational Database)

- 관계형 데이터 모델에 기초를 둔 Database이다.
    
    > **Database model**
    > 
    > - 데이터를 구성하느데 필요한 방법 중 하나
    > - 모든 데이터를 2차원의 테이블 형태로 표현한다.
    
    > **관계형 데이터 모델의 개념**
    > 
    > - 표현 개체의 외부 개념 관례를 적용한 것
    > - 데이터 간의 상관관계에서 개체 간의 관계를 표현한 것이라고 할 수 있다.
- 데이터의 독립성이 높음
- 고수준의 데이터 조작언어(DML-Data Manipulation Language)을 사용하여 결합, 제약, 투영 등의 관계 조작에 의해 비약적으로 표현능력을 높일 수 있음
- 이들의 관계 조작에 의해 자유롭게 구조를 변경할 수 있음

### RDBMS(Relation Database Management System)

- 관계형 데이터베이스를 생성하고 수정하고 관리할 수 있는 소프트웨어라고 정의
    
    > **특징**
    > 
    > - 모든 데이터를 2차원 테이블로 연결
    > - 테이블은 row(Record, Tuple)과 column(Field, Item)으로 이루어진 기본 데이터 저장 단위
    > - 상호관련성을 가진 테이블(Tabel)의 집합
    > - 만들거나 이용하기도 비교적 간단, 무엇보다 확장이 용이함
    > - 데이터베이스의 설계도를 ER(Entity Relationship) 모델
- DB - 데이터베이스의 일종의 데이터 저장소(Storage)라고 이해
    - 정보를 단순하고 규칙적인 모양새로 구성한 저장소
- MS
DB의 레코드들을 삽입(Insert), 탐색(Select), 수정(Update), 삭제(Delete)할 수 있도록
해주는 소프트웨어를 지칭
    - 즉, 데이터를 처리할 수 있는 기능을 의미하는데, 많은 DBMS가 이러한 일들은 SQL을 지원함으로 가능함

# ORM(Object Relation Mapping)

- “객체로 연결을 해준다”의 의미로, 어플리케이션과 데이터베이스 연결 시 SQL 언어가 아닌 어플리케이션 개발 언어로 데이터베이스를 접근할 수 있게 해주는 툴
- 개발 언어의 일관성과 가독성을 높여준다는 장점이 존재
    
    ```jsx
    // DEFINE MODELS
    import {Sequelize, DataTypes} from "sequelize";
    
    const sequelize = new Sequelize("sqlite:memory");
    const User = sequelize.define("User", {
    	username: DataTypes.STRING.
    	birthdat: DataTypes.DATE, 
    });
    
    //PERSIST AND QUERY
    const jane = await User.create({
      username: 'janedoe',
      birthday: new Date(1980, 6, 20),
    });
    
    const users = await User.findAll();
    ```
    

# 이벤트 루프

![Untitled](Mentoring%202%2020b875ca45414adf839b156cc77ed3b0/Untitled.png)

- Node.js가 여러 **비동기 작업**을 관리하기 위한 구현체다.
- console.log(”Hello World”)와 같은 동기 작업이 아닌
”file.readFile(”test.txt”, callback)”과 같은 비동기 작업을 모아서 관리, 실행시킴
    
    ```jsx
    request('http://www.google.com', function(error, response, body) {
      console.log(body);
    });
    
    console.log('Done!');
    ```
    
    1. request 함수가 호출되어 call stack에 push 되고, 실행되어 call stack에서 pop
    2. request 함수가 호출되면서 Request Web API가 실행됩니다. 해당 API 처리가 완료되면 callBack 함수로 전달한 익명 함수가 Callback queue에 올라가게 됩니다.
    3. console.log('Done!')이 call stack 에 쌓이게 됩니다.
    4. call stack에 아무 것도 없고, callback queue에 task가 존재한다면 Event-loop은 해당 task를 callStack에 올려서 해당 callback 함수를 실행합니다.
    5. call stack과 callback queue에 아무 것도 없다면 프로그램을 종료합니다.