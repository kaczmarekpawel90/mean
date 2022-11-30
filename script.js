function myfunction(){
    
    let numbers=[];
    var sum=0;
    let mean;

    var amount=parseInt(prompt("Enter ammount of random numbers you want."));
        for(i=0;i<amount;i++){
        numbers[i]=parseInt(prompt("Enter number"+(i+1)));
        }

        document.getElementById("numbers").innerHTML=numbers.toString();

        for(i=0;i<numbers.length;i++){
            sum+=numbers[i];
        }
            mean=sum/numbers.length;  
            document.getElementById("return").innerHTML="Mean of those numbers: "+mean+"</br> Sum of them will be: "+sum;
}