let mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0402",
  database: "jumpupcamp",
});

// db에 연결
connection.connect();

connection.query("SELECT * FROM students;", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0]);
});

connection.end();



/**
 * DB mysql
 * 
 * CREATE USER 'ahikuya'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '0000'; -> 새로운 계정 생성
 * GRANT ALL PRIVILEGES ON lecture_nodejs.* to 'ahikuya'@'%' WITH GRANT OPTION; flush privileges; -> 접근 권한 부여
 */