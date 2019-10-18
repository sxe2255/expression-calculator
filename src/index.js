function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    let strs = expr.split("");
    let bracketsLeft = 0;
    let bracketsRight = 0;
    for(let x=0; x<=strs.length;x++){
        if(strs[x] === "("){
            bracketsLeft +=1;
        }
        else if(strs[x] ===")"){
            bracketsRight +=1;
        }
    }
    
    if(bracketsLeft == bracketsRight){
		var reg = /*/[0-9]/*//^\d+$/;
		var s ="";
		var a=0,b=0,res=0;
		var arrStr=[],arrStrBrack=[];
		var arr=[];
		var str =expr;
		var num = 0;
		var n = new Number()
		arr = str.split("");
		for(let x=0;x<=arr.length;x++){
			if(arr[x]===" "){
				arr.splice(x,1);
			}	
		}
		str = arr.join('');
		
		var myBrack =str.substring(str.lastIndexOf("("), str.lastIndexOf(")")+1);
		var myBrackArr= myBrack.split("");
		
		myBrackArr.forEach((x,y)=> {
			if(reg.exec(myBrackArr[y])){
				s = s+x;
				
			}
			else if(myBrackArr[y] === "*" || myBrackArr[y] === "/" || myBrackArr[y] === "-" || myBrackArr[y] === "+"){
			n =Number(s);
			s="";
			arrStr.push(n);
			arrStr.push(x);
			}
			else if(myBrackArr.length-2 === y){
			n =Number(s);
			s="";
			arrStr.push(n);
			}
		})
		
		for(let x=0;x<=arrStr.length;x++){
			if(arrStr[x] === "*" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				res = a*b;
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			else if(arrStr[x] === "/" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				if(b === 0){throw "TypeError: Division by zero.";}
						else{res = a/b};
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			
		}
		for(let x=0;x<=arrStr.length;x++){
			if(arrStr[x] === "+" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				res = a+b;
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			else if(arrStr[x] === "-" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				res = a-b;
				
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			
		}
		
		var bracketsStr = arrStr.join("");
		str = str.replace(myBrack, bracketsStr)
		arrStrBrack = str.split("");
		arrStr =[];
		
		for(let x=0; x<=arrStrBrack.length;x++) {
			if(reg.exec(arrStrBrack[x]) || arrStrBrack[x] === "."){
				s = s+arrStrBrack[x];
	
			}
			else if(arrStrBrack[x] === "/" && arrStrBrack[x+1] === "-" || arrStrBrack[x] === "*" && arrStrBrack[x+1] === "-" || arrStrBrack[x] === "+" && arrStrBrack[x+1] === "-" || arrStrBrack[x] === "-" && arrStrBrack[x+1] === "-"){
				 n =Number(s);
					s="";
					arrStr.push(n);
					arrStr.push(arrStrBrack[x]);
				s = s+arrStrBrack[x+1];
				arrStrBrack.splice(x+1,1);
				
			}
			else if(arrStrBrack[x] === "*" || arrStrBrack[x] === "/" || arrStrBrack[x] === "-" || arrStrBrack[x] === "+"){
			n =Number(s);
			s="";
			arrStr.push(n);
			arrStr.push(arrStrBrack[x]);
	
			}
			if(arrStrBrack.length-1 === x){
			n =Number(s);
			s="";
	
			arrStr.push(n);
			}
	}
		
		for(let x=0;x<=arrStr.length;x++){
			if(arrStr[x] === "*" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				res = a*b;
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			else if(arrStr[x] === "/" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				if(b === 0){throw "TypeError: Division by zero.";}
						else{res = a/b};
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			
		}
		for(let x=0;x<=arrStr.length;x++){
			if(arrStr[x] === "+" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				res = a+b;
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			else if(arrStr[x] === "-" ){
				a = arrStr[x-1];
				b = arrStr[x+1];
				res = a-b;
				
				arrStr.splice(x-1,3,res);
				x-=1;
			}
			
		}
		return res;
	}
    else {
        throw "ExpressionError: Brackets must be paired";
    }
}
	
module.exports = {
    expressionCalculator
}