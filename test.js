var solution = document.getElementById("table-body");


/*
 * Data sets are often inconsistent.
 * Try your best to pick out your edge cases using
 * various ways to debug javascript
 * 1. use console.log() to your advantage
 * 2. alert(); is useful but will stop your code!
 * 3. debugger; may work
 * 4. Use built-in debuggers in your browsers!
 */

DATA.forEach(function(movie) {
    let movieChild = createMovieElement(movie.id, movie.title, movie.details);
        
    solution.appendChild(movieChild);
});

function createMovieElement(id, title, details) {
    let movierow = createElem("tr");
    
    movierow.appendChild(createElem("td", id));
    movierow.appendChild(createElem("td", title));
    movierow.appendChild(createElem("td", details));
    return movierow;

}

function createElem(name, value, className) {
    let newElem = document.createElement("name");
    newElem.textContent = value;
    if (className) {
        newElem.className = className;
    }
    return newElem;
}

function render(state) {
    let tbody = 
    tbody.textContent = "";
    

}