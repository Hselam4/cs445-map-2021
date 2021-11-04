/**
   * testing the number if it is prime or not in Asynchronous(promise)
   * removingDuplicates in Asynchronous(promise)
   */

 const isPrime = (num) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}


               
let promise = new Promise(function(resolve, reject) {
              if (isPrime(7)) {
            setTimeout(() => resolve(`'{prime:true}'`), 1000);
              } else {
                       setTimeout(() => reject(new Error(`'{prime:false}'`)), 1000);
                    }
                  });
         
         console.log('start');
        promise.then(result => console.log(result))
        .catch(error => console.log(error));
         console.log('end');

         
       // #Q2) removes all duplicates for any array using asynchor
         function removeDuplicateAsync(arr){
             let newAarry=[];
             for(let i=0;i<arr.length;i++){
                 if(!newAarry.includes(arr[i])){
                    newAarry.push(arr[i]);
                 }
             }

             console.log(`[${newAarry}]`);
         }

         let arr1=[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2]
         console.log(`start`);
         setTimeout(removeDuplicateAsync,5000,arr1);
         console.log(`end`);
      
