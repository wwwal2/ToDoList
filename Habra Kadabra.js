
// helping functions
function createButton (text, className, arrayPush) {
  var butt = document.createElement("button");
  var t = document.createTextNode(text);
  butt.className = className;
  butt.appendChild(t);
  listElement.appendChild(butt);
  arrayPush.push(butt);
}