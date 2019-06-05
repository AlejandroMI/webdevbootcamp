
function average (arr){
    
    var sum = 0;
    
    //arr.forEach(function(score){
    //   
    //});
    
    for(var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    
    var avg = sum/arr.length;
    
    return Math.round(avg);
} 

var scores = [90,98,89, 100, 100, 86, 94];

console.log(average(scores));