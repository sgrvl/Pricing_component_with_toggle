const btn = document.getElementsByClassName('switchBtn')[0];
const price = document.getElementsByClassName('price');
var b = 0;

function myBtn(){

	//Annually
	if (b == 0) {	
		btn.classList.add('switchAnim');		
		price[0].innerHTML = "199.99";	//Basic
		price[1].innerHTML = "249.99";	//Professional
		price[2].innerHTML = "399.99";	//Master
		b++;
	} 

	//Monthly
	else { 
		btn.classList.remove('switchAnim');
		price[0].innerHTML = "19.99";	//Basic
		price[1].innerHTML = "24.99";	//Professional
		price[2].innerHTML = "39.99";	//Master
		b--;		
	}

}