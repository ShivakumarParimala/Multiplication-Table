// 3. Generate a multiplication table using a while loop by taking the input from users


/* JavaScript program to generate a multiplication table of a particular range */
function multiplicationTable(number){
    // initilising the lop counter
    let i=1;
    // create a while lop that will continue untill 1 is greater than 10.
    while (i <= 10) {
        // calculate the product of i and number.
        const product = i *number;
        //  console
        console.log(`${number} * ${i} = ${product}`);
        // incrementing the loop
        i++;
    
    } 
}
multiplicationTable(5);