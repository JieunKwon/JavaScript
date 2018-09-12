		
		// global variables
		var node = document.getElementById("num"); 			// get the value of text box
		var result = document.getElementById("result");  		// for result of <p>
		
		// make textbox empty & give mouse-focus
		var initTextbox = function()
		{
			result.innerHTML = "";
			node.value = "";
			node.focus();
		};
		 
		// if textbox's value is not number, alert a message
		var numValue = function(){ 
			 
			if(node.value =="" || isNaN(node.value)){
				//alert("Enter a number for conversion");
				result.innerHTML = "Invalid value.<br>Please enter a number."; 
				//initTextbox();
				return false;
			}else{
				return true;
			}
		};
		 
		// From Celsius to Fahrenheit : T(°F) = T(°C) × 9/5 + 32
		document.getElementById("btn_CF").onclick = function()
		{  
			if(numValue()){
				
				// textbox value
				var num = node.value; 		
				// calculate 
				calValue = ((num * 9/5) + 32).toFixed(2);
				// output 
				//result.innerHTML = num + "°C-> " + calValue + " °F"; 
				result.innerHTML = num + "&deg;C -> " + calValue + "&deg;F"; 			 
			} 
		};

		// From Fahrenheit to Celsius :  T(°C) = (°F - 32) × 5/9   
		document.getElementById("btn_FC").onclick = function()
		{  
			if(numValue()){
				
				// textbox value
				var num = node.value;		
				
				// calculate 
				calValue = ((num - 32) * 5/9).toFixed(2);
			 
				// output 
				result.innerHTML = num + "&deg;F -> " + calValue + "&deg;C" ;  
			} 
		};
		
		//From Feet to Meters : meters = feet / 3.2808 
		var convFt_Mt = function()
		{  
			if(numValue()){
				
				var num = node.value;		// textbox value
			
				// calculate 
				calValue = (num / 3.2808).toFixed(2);
			 
				// output 
				result.innerHTML = num +"ft -> " + calValue + "m" ;  
			} 
		};
		
		//From Meters to Feet: feet = meters * 3.2808 
		var convMt_Ft = function()
		{  
			if(numValue()){
				
				var num = node.value;		// textbox value
			
				// calculate 
				calValue = (num * 3.2808).toFixed(2);
			 
				// output 
				result.innerHTML = num +"m -> " + calValue + "ft" ;  
			} 
		};
		
		// Pass mode param 
		//Conversion between Inches and Centimeters : 1 in = 2.54 cm  
		function convIn_Cm(mode)
		{  
			if(numValue()){
				
				var num = node.value; 	// textbox value
				var inUnit;
				
				// calculate according to mode
				if(mode == "cm")	// convert to cm
				{
					calValue = (num * 2.54 ).toFixed(2);
					inUnit = "in";
				}
				else if(mode == "in")	// convert to in
				{
					calValue = (num / 2.54 ).toFixed(2);
					inUnit = "cm";
				}
				
				// output 
				result.innerHTML = num + inUnit + " -> " + calValue + mode;  
			} 
		}
		 
		// Conversion between Pounds and Kilograms : 1 lb = 2.2046 kg  
		// Pass param : mode
		function convLb_Kg(mode)
		{  
			if(numValue()){
				
				var num = node.value;		// textbox value
				var inUnit;
				
				// calculate according to mode
				if(mode == "lb")		// convert to Pounds
				{
					calValue = (num * 2.2046 ).toFixed(2);
					inUnit = "kg";
				}
				else if(mode == "kg")	// convert to Kilograms
				{
					calValue = (num / 2.2046 ).toFixed(2);
					inUnit = "lb";
				}
				
				// output 
				result.innerHTML = num + inUnit + " -> " + calValue + mode;  
			} 
		}