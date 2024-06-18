function firstChar(text) {

    for (let i = 0; i < s.length; i++) {
        
        if (text[i] !== ' ') {
           
            return text[i];
        }
	}
   return '';

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
