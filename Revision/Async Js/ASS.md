## Chapter 11( Async Js )

### Assignments

**11.1:** Guess the **Output** And Explain Why?

_[From video lecture 11.7]_

**Html Code**

```html

<!DOCTYPE  html>

<html  lang="en">

<head>

<meta  charset="UTF-8">

<meta  http-equiv="X-UA-Compatible"  content="IE=edge">

<meta  name="viewport"  content="width=device-width, initial-scale=1.0">

<title>JavaScript-CoderDost</title>

<style>

</head>

<body>

<div id="content">



<h2 id = "heading" ></h2>



</div>

<script defer src = "./script.js"></script>

</script>

</body>

</html>

```

**JS Code**

```js
async function greeting() {
  let myPromise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve('I love Programming !!');
    }, 2000);
  });

  document.getElementById('heading').innerHTML = await myPromise;
}

greeting();
```

**11.2:** Find the **Logical Error** in below code. And How can we solve them with **callback** function approach?

_[From video lecture 11.4]_

```js
const movies = [{ title: `Movie 1` }, { title: `Movie 2` }];

function getMovies() {
  setTimeout(() => {
    movies.forEach((movie, index) => {
      console.log(movie.title);
    });
  }, 1000);
}

function createMovies(movie) {
  setTimeout(() => {
    movies.push(movie);
  }, 2000);
}

getMovies();

createMovies({ title: `Movie 3` });
```

**11.3:** What are the **three** possible State of any promise?

**11.4:** Solve **Question 2** again But this time with the help of **promise**

**11.5:** Now re-factor **Question 2** with the help of **async-await** keyword?

**11.6:** Status code starting with **404** represent which type of message/error?

_[From video lecture 11.3]_