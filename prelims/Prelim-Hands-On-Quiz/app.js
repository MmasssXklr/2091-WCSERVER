//Author: Maniago, Charmagne Dale G.
//Date 01/30/23       6WCSERVER

var comp = require('./calculations.js');
var rate = 300; var hours = 4; var days = 6; var taxRate = 0.1;
var sss = 1200; var pagIbig = 300; var philHealth = 400;
var groIncome1 = comp.mul(rate, hours);
var groIncome2 = comp.mul(groIncome1, days);
var tax = comp.mul(groIncome2, taxRate);
var dduct1 = comp.add(tax, sss);
var dduct2 = comp.add(pagIbig, philHealth);
var dduct3 = comp.add(dduct1, dduct2);
var nSal = comp.sub(groIncome2, dduct3);

console.log('The Gross Income is: ' + groIncome2);
console.log('Tax: ' + tax);
console.log('SSS: ' + sss);
console.log('Pag-ibig fund: ' + pagIbig);
console.log('PhilHealth: ' + philHealth);
console.log('Total Deductions: ' + dduct3);
console.log('The Net Salary is: ' + nSal);
