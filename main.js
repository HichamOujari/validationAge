var province = [
		{
			name:"Ontario",
			age:19
		},{
			name:"Quebec",
			age:18
		},{
			name:"New Brunswick",
			age:19
		},{
			name:"Nova Scotia",
			age:19
		},{
			name:"Newfoundland and Labrador",
			age:19
		},{
			name:"PEI",
			age:21
		},{
			name:"Manitoba",
			age:18
		},{
			name:"Saskatchewan",
			age:18
		},{
			name:"Alberta",
			age:18
		},{
			name:"British Columbia",
			age:19
		},{
			name:"Yukon",
			age:19
		},{
			name:"NWT",
			age:19
		},{
			name:"Nunavut",
			age:19
		},

	]
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById('IdForm').addEventListener("submit",(e)=>{
	e.preventDefault();
	var day = document.getElementById("IdDD").value;
	var month = document.getElementById("IdMM").value;
	var year = document.getElementById("IdYY").value;
	var SelectError = document.getElementById("IdSelectError");
	var BirthError = document.getElementById("IdBirthError");
	var Selectedcity = document.getElementById("Selectedcity");

	if(Selectedcity.value=="-1") SelectError.style.display="block";
	else if(day.length!=2 || month.length!=2 || year.length!=4 ) {
		BirthError.style.display="block";
		SelectError.style.display="none";
	}else{
		SelectError.style.display="none";
		BirthError.style.display="none";
		var date = month+"/"+day+"/"+year;
		var dt = new Date(date);
		if(dt.getMonth()!=null && parseInt(dt.getMonth())+1==parseInt(month)){
			if(calculate_age(new Date(year,month,day))>=province[parseInt(Selectedcity.value)].age){
				alert("you can pass")
			}else{
				document.location.href="./error.html";
			}
		} else{
			BirthError.style.display="block";
		}
	}
});

function listCities(){
	var select = document.getElementById("Selectedcity");
	var opt;
	province.map((ele,index)=>{
		opt = document.createElement('option');
		opt.appendChild( document.createTextNode(ele.name) );
		opt.value = index; 
		select.appendChild(opt);
	}) 
}


listCities();