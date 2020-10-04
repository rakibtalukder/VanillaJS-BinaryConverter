const result= document.getElementById('result');
 const submit= document.getElementById('submit');
 function convert(e){
 	e.preventDefault();
 	const num= document.getElementById('number').value;
 	if (num==="") {
 		alert("Please Enter A Decimal Number");
 	}
 	else if(num<0){
 		alert("Bhai Positive Number Den");
 	}
 	else{
 		result.style.visibility='visible';
 	}
 	binarynum= Number(num).toString(2);
	result.innerText= binarynum;
}

submit.addEventListener('click',convert);




// Najmul Ahsan Rakib