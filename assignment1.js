
// 1.Calculation of final price after the discount is Taken 

let totalvalue =2000;
let discountPercentage=20;
let discount = (discountPercentage*totalvalue)/100;
let result=totalvalue-discount;
console.log(`The final price after discout is: ${result}`);

// 2. To check the username and password for login system 

 let username = "admin";
 let password = "123452";
 if (username=="admin" && password =="12345")
 {
    console.log("Login Successful");
 }
 else{
    console.log("Invalid Credentials");
 }

//  3.Currency conversion from rupee to dollar 

let rupee=850;
let dollar=850/82;
console.log(`${rupee} Indian rupee is ${dollar} USD`);


// 4.Ticket price calculator
let numberOfChilds=2;
let numberOfAdults=1;
let numberOfSeniors=1;
let totalprice=(numberOfChilds*100)+(numberOfAdults*150)+(numberOfSeniors*120);
console.log(`The total price is ${totalprice}`);



//5. shipping application type
let typeofpackage= "overnight";

switch (typeofpackage){
    case "standard":
        console.log("3-5days ");
        break;
    case "express":
        console.log("1-2days");
        break;
    case "overnight":
        console.log("nextday");
        break;
    default :
       console.log("wrong choice");
}
// 6.Form validation system  
var name = "mithun";
let email="mithun.s@pw.live";
let age="21";
console.log("emails should be a",typeof email);
console.log("age should be a ",typeof age);
console.log("name should be a",typeof name);

// 7 Shopping list list app display 
let shoppingList=["book","chocolate","pen","diary","vegetables"];

for(let i=0;i<shoppingList.length; i++){
    console.log(shoppingList[i]);
    
}

//8.countdown program 
let i =0,n=10;

while(i<=n){
    console.log(i);
    i++;
}

// 9.Find the first string in the array and display It 

const arr =[1,5,5,"array1",84,94,"array2"];

for(let j=0;j<arr.length;j++){
    if(typeof(arr[j])==="string"){
        console.log(`found the first string:  ${arr[j]}`);
        break;

    }
 
}

// 10 finding the postitive number from the given string and print it.

const num=[2,8,9,-9,6,-3,-1,-6,48,34];
for(let k=0;k<num.length;k++){
    if(num[k]>0)
    {
        console.log(num[k]);
    }
}



