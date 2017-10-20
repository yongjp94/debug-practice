var solution = document.getElementById('solution');


/*
 * Data sets are often inconsistent.
 * Try your best to pick out your edge cases using
 * various ways to debug javascript
 * 1. use console.log() to your advantage
 * 2. alert(); is useful but will stop your code!
 * 3. debugger; may work
 * 4. Use built-in debuggers in your browsers!
 */

data.forEach(function(movie) {

    let movieChild = document.createElement('li');

    let movieHtml = "<b>id</b>: " + movie.id;
    movieHtml += " * <b>title</b>: " + movie.title;
    movieHtml += " * <b>details</b>: " + movie.details;
    movieChild.innerHTML = movieHtml;

    solution.appendChild(movieChild);
});
