alert("Welcome to a Program by STRNGS!");

console.log(alert)

document.getElementById('inputCm').addEventListener('input', function(e){
	var cm = e.target.value;
	console.log(cm);
    document.getElementById('inputIn').value = (cm/2.54).toFixed(3);
    document.getElementById('inputFt').value = (Cm*3.281).toFixed(3);
	document.getElementById('inputM').value = (cm/100).toFixed(3);
});

document.getElementById('inputIn').addEventListener('input', function(e){
	var inches = e.target.value;
	console.log(inches);
	document.getElementById('inputCm').value = (inches/0.3937008).toFixed(3);
    document.getElementById('inputM').value = (inches/39.37008).toFixed(3);
});

document.getElementById('inputFt').addEventListener('input', function(e){
	var inches = e.target.value;
	console.log(Feet);
	document.getElementById('inputCm').value = (feet/30.48).toFixed(3);
    document.getElementById('inputIn').value = (feet/39.37008).toFixed(3);
    document.getElementById('inputM').value = (feet/3.281).toFixed(3);
}); 

document.getElementById('inputM').addEventListener('input', function(e){
	var meters = e.target.value;
	console.log(meters);
	document.getElementById('inputCm').value = (meters/0.01).toFixed(3);
    document.getElementById('inputIn').value = (meters*39.37008).toFixed(3);
    document.getElementById('inputFt').value = (meters/3.281).toFixed(3);
});