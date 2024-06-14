fetch('http://localhost:3000/posts')
.then(Response => Response.json())
.then(data => console.log(data))