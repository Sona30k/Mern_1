/*const { JSDOM } = require('jsdom');

// Create a new JSDOM instance to mock the document object
const { window } = new JSDOM(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>DOM Selectors</title>
    </head>
    <body>
        <div id="container">
            <h1 class="title">Hello, World!</h1>
            <p class="description">This is a paragraph.</p>
            <p class="description">This is another paragraph.</p>
            <ul class="list">
                <li class="item">Item 1</li>
                <li class="item">Item 2</li>
                <li class="item">Item 3</li>
            </ul>
        </div>
    </body>
    </html>
`);

// Now you can access the document and window objects as if you were in a browser
const document = window.document;

// Select by ID
let container = document.getElementById('container');
console.log(container.outerHTML);

// Select by class name
let descriptions = document.getElementsByClassName('description');
console.log(descriptions);

// Select by tag name
let paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

// Select the first element with the class 'title'
let title = document.querySelector('.title');
console.log(title);

// Select all elements with the class 'item'
let items = document.querySelectorAll('.item');
console.log(items);*/

//const document= 26.document
document.getElementsByTagName('li')
console.log(document)

