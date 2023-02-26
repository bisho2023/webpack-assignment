import './style.css';
import logo from "./asset/4.jpg";

const message = 'Hello, World!';
console.log(message);

const img = new Image();
img.src = logo;
document.body.appendChild(img);
