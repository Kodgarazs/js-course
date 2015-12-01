# Lesson 4 - HTML

## Tools
It is easy to use [Cloud9](https://c9.io/) for editor instead of using any desktop application. It is easy to register with a github account.

## Create a simple HTML page
Covered elements:
- `<!doctype>`
- `<html>`
- `<head>`
- `<body>`
- `<p>`
- `<img>` (only with images hosted by other sites, using "copy imag url" feature in Chrome)
If feels too much you can ommit the the usual HTML boilerplate (doctype, html, head, body) and only add the content elements.

Additional things:
- embeding a youtube video
- `style="color: red"`

## Canvas example
The aim is, create the same setup as it is in the simple practice environment [http://kodgarazs.github.io/](http://kodgarazs.github.io/).
- Create a simple HTML page with a `<canvas>` element.
- Add a JS file add link it with a `<script>` element.
- Try the JS file with a simple `alert('something')` example.
- Show them, that they are able to create an annoying site with calling `alert` several times in a `for`-loop, also they can send it to somebody as a VIRUS! :)
- Add the boilerplate code for geting the drawing context for the `<canvas>`. (Don't forget to add an id for it)
- Try the same simple functions that we used in the practice environment, example: `fillRect`

## Functions
If there is time that is a great point to practice functions. Showing the input arguments with a simple examples:
```js
function greet(name) {
  alert('Hi ' + name + '!');
  alert('How are you?');
}

greet('Ann');
greet('Steve');
```

```js
function print(number) {
  if (number === 1) {
    alert('one');
  } else if (number === 2) {
    alert('two');  
  } else {
    alert('many');
  }
}
  
print(1);
print(2);
print(12);
```

## Homework
Create your own website.
