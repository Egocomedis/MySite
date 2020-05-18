function solver() {
 const a = document.getElementById("aValue").value;
 const b = document.getElementById("bValue").value;
 const x = document.getElementById("xValue").value;
 let y = Math.pow(x,3) * Math.pow(Math.tan(Math.pow(x + b, 2)), 2) + a / Math.sqrt(x + Math.pow(b, 2));
 let s = (a * Math.pow(x, 2) - Math.pow(x, 3)) / (Math.exp(a * x) - b);
 let result_s = document.getElementById("result_s");
 let result_y = document.getElementById("result_y");
 result_y.textContent = "y= " + y;
 result_s.textContent = "s= " + s;
}