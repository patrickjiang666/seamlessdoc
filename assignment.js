const bowling = (str)=>{
	let frames = str.replace(/-/g, '0').split(' ');
	let score = 0;
	let queue = [];
/*---------------------------*/
  const oneAhead = () =>{
    if(queue.length==1){
      if(queue[0]=='spare'){
        score += 20;
        queue.pop(0);
      }
      queue.push('strike');
    }
  }
  const twoAhead = (ele) =>{
    let first = ele.charAt(0);
    let second = ele.charAt(1);
    if(second!='/'){
      score += parseInt(first) + parseInt(second);
    }
    else{
      queue.push('spare');
    }
  }
  const calcPrev = (ele)=>{
    let first = ele.charAt(0);
    let second = ele.charAt(1);
    if(queue[0]=='spare'){
      score += parseInt(first) + 10;
      queue.pop(0);
    }
    else if(queue[0] == 'strike'){
      score += parseInt(first) + parseInt(second) + 10;
      queue.pop(0);
    }
  }
  const calc2Prev = (ele)=>{
    let first = ele.charAt(0);
    let second = ele.charAt(1);
    first=='X'?score += 30:score += parseInt(first) + 20
    queue.pop(0);
  }
/*---------------------------*/
	frames.map((ele, index)=>{
		if(ele=='X'){
			if(queue.length==0){
        queue.push('strike'); 
      }
      else if(queue.length==1){ // ... 81 5/ X 
      	oneAhead();
      }
      else if(queue.length==2){
        calc2Prev(ele);
        oneAhead();
      }
		}
		else if(ele.length == 2){
    	if(queue.length==0){
    		twoAhead(ele);
      }
	    else if(queue.length==1){
	    	calcPrev(ele);
        twoAhead(ele);
	    }
	    else if(queue.length==2){ // ... 81 5/ X 
	    	calc2Prev(ele);
        calcPrev(ele);
        twoAhead(ele);
	    }
		}
		if(ele.length == 3 && index==frames.length-1){
			let first = ele.charAt(0);
      let second = ele.charAt(1);
      let third = ele.charAt(2);
      if(queue.length==0){
      	if(second!='/' && third!=='/'){
          score += (parseInt(second) + parseInt(third))*2 + 10;
        }
        else{
          third=='X'?score += 30:score += (10+parseInt(third));
        }
      }
      else if(queue.length==1){
      	if(queue[0]=='spare'){
          score += parseInt(first) + 20;
          third=='X'?score += 10:score += parseInt(third);
        }
        else{
          score += parseInt(first) + 30;
          third=='X'?score += 20:score += (10+parseInt(third)*3);
        }
      }
      else if(queue.length==2){
        score += parseInt(first) + 40;
        third=='X'?score += 20:score += (10+parseInt(third));
      }
		}
		console.log(score,queue);
		return score;
	});
}
console.log(bowling('9- 9- 9- 9- 9- 9- 9- 9- 9- 9-'));
console.log(bowling('5/ 5/ 26 X 81 5/ X 71 7/ 7/X'));
console.log(bowling('5/ 5/ 26 X 81 5/ 72 X X 3/8'));
console.log(bowling('X X X X X X X X X X X X'));