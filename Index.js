const express=require("express");   //Importing Express Framework

const port=3004;        //Setting up the variable or port

const app=express();    //Creating an express application instance

function sum(n){        //Function to calculate the sum of the numbers based upon the 'n' in the query.
    let ans=0;
    for(let i=0;i<n;i++){
        ans=ans+i;
    }
    return ans;
}

function SumOfTwoNumbers(a,b){          //Simply writes sum of the two numbers based on the input of 'a' and 'b' in the query.
    return a+b;
}

//Here '/SumOfN' is a route, it can be written after port number 3001 in the browser and the second parameter is the function which has respond and request
app.get('/SumOfN', function(req,res){           
    const n=req.query.n;                //asking value of n from user
    const answer=sum(n);                //calling the function sum
    res.send("Hey your answer where the value of n is "+n+" is "+answer.toString());         //It will be printed in the browser.
    console.log("Successfully executed the sum of N numbers");                              //it will be printed in the console.
})

//Another example.
app.get('/SumOfTwoNumbers', function(req,res){     
    const a=req.query.a;
    const b=req.query.b;
    const answer=SumOfTwoNumbers(a,b);
    res.send("The sum of the two numbers "+a+" and "+b+" is "+answer.toString());
    console.log("Successfully executed the sum of the two numbers.")        //it will be printed in the console.
})

app.listen(port); //Starting the Express Server.

// this is for SumOfN Get Method: http://localhost:3004/SumOfN?n=30

// this is for SumOfTwoNumbers Get Method: http://localhost:3004/SumOfTwoNumbers?a=30&b=40

// Write the above line into your browser where /?n=30 is a query that you have asked.
