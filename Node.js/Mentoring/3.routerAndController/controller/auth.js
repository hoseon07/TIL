const signup = (req, res) => {
  const { id, password} = req.body;

  return res.status(201).json({
    // json 메시지로 작성할 문구
    "id" : id,
    password, // "password" : password와 같다. (생략 가능함)
  });
}

const signin = function(req, res) {
  //DB 연결 이후 수행할 예정
} // 함수 표현식

function signOut(req, res) {
  //DB 연결 이후 수행할 예정
} // 함수 선언식

module.exports = {
  signup,
  signin,
}