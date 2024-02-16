
// ASSINGNMENT1


const userList = ['user1','user2','user3','user4']

function isUsernamePresent(username){
    if(userList.includes(username))
    {
        return `${username} is present in the list of users`;
    }
    else {
        return `${username} is not present in the list of users.`;
    }
}
console.log(isUsernamePresent(`user2`));
console.log(isUsernamePresent(`user5`));

//ASSIGNMENT2

function calculationtotal(cart){
    let total =0 ;
    for(let price of cart) {
        total+=price;
    }
    return  total;
}
const cart = [10,20,30,40];
const total = calculationtotal(cart);
console.log(`total sum of product prices:`,total);

// ASSIGNMENT3

function checkResults(students){
    const passedStudents =students.filter(student =>student.marks >90);
    passedStudents.forEach(student => {
        console.log(`congratulations ${student.name}! You have cleared the exam`);
    });
}
const studentList = [
    {
        name :"mithun",
        marks:95,
    },
    {
        name :"prabir",
        marks:75,
    },
    {
        name:"alka",
        marks:92,
    },
    {
        name:"shivam",
        marks:70,
    },
    {
        name:"farman",
        marks:99
    },
];

checkResults(studentList);

//Assignment4

function findMinMaxProducts(products){
    if(products.length ===0){
        console.log("No products found.")
        return;
    }
    let maxProduct =products[0];
    let minProduct = products[0];
    
    for(let i=1;i<products.length;i++){
        if(products[i].price> maxProduct.price){
            maxProduct=products[i];
        }
        
        if(products[i].price <minProduct.price){
            minProduct = products[i];
        }
    }
    console.log("product with maximum price:", maxProduct);
    console.log("product with minimum price:", minProduct);
}
const products = [
    { name:"laptop",price :12000},
    { name:"mobile", price:70000},
    { name:"laptop bag",price:2000},
    { name:"Watch",price:2000},
    { name:"mobile charger",price:1500},
];
findMinMaxProducts(products);

// Assignment5

function createGuestListSentence(guests) {
    const guestSentence =guests.join(',')
    return `The guest list includes: ${guestSentence}`;
}
const guestsNames =[`ANURAH`,`MITHUN`,`ALKA`,`PRABIR`,`SHIVAM`,`FARMAN`];

const sentence = createGuestListSentence(guestsNames);
console.log(sentence);

// ASSINGNMENT 6

const productDetails = {
    name :"Apple 2020 Macbook Air Laptop",
    price:82000,
    color:"Grey",
    HardDisk : "256 GB"
};
 function printProductInformation(productDetails)
    {
        console.log("Below are the products details.");
        console.log(`Product Name: ${productDetails.name}`);
        console.log(`Price: ${productDetails.price}`);
        console.log(`Color: ${productDetails.color}`);
        console.log(`HardDisk: ${productDetails.HardDisk}`);
    }

printProductInformation(productDetails);


// Assingment7

function generateOTP() {
    
    const otp = Math.floor(Math.random() * 9000) + 1000;
    return otp.toString(); 
}

const otp = generateOTP();
console.log("Generated OTP:", otp);

// Assignment 8
function calculateRemainingDays(eventDate) {
    const currentDate = new Date();
    const eventDateTime = new Date(eventDate);

    const timeDifference = eventDateTime - currentDate;
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}

const eventDate = '2024-08-28'
console.log(calculateRemainingDays(eventDate));

//Assignment 9

function uniqueCharactersCheck(inputString){
    const charSet = new Set();
    for(const char of inputString)
    {
        if(charSet.has(char)){
            console.log("The input string contains duplicates.");

            return false;
        }

        charSet.add(char);
    }
    console.log("The input string contains only unique character.");
    return true;


}

uniqueCharactersCheck("mithun")
uniqueCharactersCheck("anurag")

// ASSIGNMENT10
function wordCounter(sentences) {
    const wordFrequencyMap = new Map();

    const words = sentences.split(/\s+/); // Split the sentence into words using whitespace as separator

    for (const word of words) {
        const cleanWord = word.toLowerCase().replace(',', ''); // Remove non-alphanumeric characters and convert to lowercase

        if (cleanWord.length > 0) {
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

const sentences = "Hey PW, Please check my assignment and give me the updates ASAP! THANK YOU... ";
const result = wordCounter(sentences);

console.log(result);