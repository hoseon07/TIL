const myURL = new URL(
  "https://user:pass@sub.example.com:8080/p/a/t/h?query=string&test=aaaa#hash"
);

// console.log(myURL);
console.log(myURL.pathname);
console.log(myURL.search);
console.log(myURL.password);
console.log(myURL.searchParams);

myURL.pathname = '/aaaa/bb/ccc'
console.log(myURL.pathname);