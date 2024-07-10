/**
 * 
 * @returns 모듈화
 */

// 학생 목록을 생성하여 반환한다.
function createList(files) {
  let list = "";
  for (i = 0; i < files.length; i++) {
    list += `
      <tr>
        <th>${i}</th>
        <th><a href='/student/${files[i]}'>${files[i]}</a></th>
        <th><a href="/update?name=${files[i]}">수정</a>
        <form action="/process_delete" method="post">
          <input type="hidden" name="name" value="${files[i]}">
          <input type="submit" value="삭제">
        </form>
      </tr>
      `;
  }

  return list;
}

function bodyHtml(list, studentName, data) {
  let html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <style>
          table, th, td {
            border:1px solid black;
            border-collapse: collapse;
          }
        </style>
      <body>

      <h2>학생</h2>

      <table style="width:100%">
        <tr>
          <th>id</th>
          <th>이름</th>
        </tr>
        ${list}
      </table>

      <h2>${studentName}</h2>
      <p>${data}</p>

      </body>
      </html>
`;
// 함수에서 html을 반환해줘야 하므로 return 해준다
return html 
}

module.exports = { createList, bodyHtml };
