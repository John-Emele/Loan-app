let points = document.getElementById("points");
let accnt_bal_amnt = document.getElementById("accnt-bal-amnt");
let view = document.getElementById("view");
let hide = document.getElementById("hide");
let top_up = document.getElementById("top-up");
let loan = document.getElementById("loan");
let period = document.getElementById("period");
let period_1 = document.getElementById("period-1");
let period_2 = document.getElementById("period-2");
let test = document.getElementById("test");
let test4 = document.getElementById("test4");
let test5 = document.getElementById("test5");
let test6 = document.getElementById("test6");
let test7 = document.getElementById("test7");
let test8 = document.getElementById("test8");
let accnt_slct = document.getElementById("accnt-slct");
let Current = document.getElementById("Current");
let Savings = document.getElementById("Savings");
let sub_btn = document.getElementById("sub-btn");
let full_name =  document.getElementById("full-name");
let repay_date = document.getElementById("repay-date");
let loan_amount = document.getElementById("loan-amount");
let reward = 0;



period.addEventListener("change", function repayment() {
      let date_current_3 = new Date();
    // console.log(date_current.getMonth());
    month_current_3 = date_current_3.getMonth();
    current_year_3 = date_current_3.getFullYear();
    console.log(current_year_3);
    console.log(month_current_3)
    let date_3 = new Date(period.value);
    month_3 = date_3.getMonth();
    year_3 = date_3.getFullYear();
    console.log(year_3);
    console.log(month_3);
    let Valid_month_3 = month_current_3 - month_3;
    console.log(Valid_month_3);

    if ( current_year_3 == year_3 &&  Valid_month_3 < 6) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
   else{
    points.innerHTML = reward += 0;
   }

});


period_1.addEventListener("change", function last_credit() {
    let date_current_1 = new Date();
    // console.log(date_current.getMonth());
    month_current_1 = date_current_1.getMonth();
    current_year_1 = date_current_1.getFullYear();
    console.log(month_current_1)
    let date_1 = new Date(period_1.value);
    month_1 = date_1.getMonth();
    console.log(current_year_1);
    year_1 = date_1.getFullYear();
    console.log(year_1);
    console.log(month_1);
    let Valid_month_1 = month_current_1 - month_1;
    console.log(Valid_month_1);

    if (Valid_month_1 > 6) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
     if ( current_year_1 != year_1 &&  month_current_1 == month_1) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
     if (Valid_month_1 < 0) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
    if(  current_year_1 == year_1 && Valid_month_1 < 6){
        points.innerHTML = reward += 0;
        console.log(Valid_month_1);
    }
});

period_2.addEventListener("change", function last_loan() {
    let date_current_2 = new Date();
    // console.log(date_current.getMonth());
    month_current_2 = date_current_2.getMonth();
    current_year_2 = date_current_2.getFullYear();
    // console.log(month_current)
    let date_2 = new Date(period_2.value);
    month_2 = date_2.getMonth();
    year_2 = date_2.getFullYear();
    // console.log(month)
    let Valid_month_2 = month_current_2 - month_2;
    console.log(Valid_month_2);
    
    if (Valid_month_2 > 6) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
     if ( current_year_2 != year_2 &&  month_current_2 == month_2) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
     if (Valid_month_2 < 0) {
        points.innerHTML = reward += 10;
        // console.log(valid_mths)

    }
    if(  current_year_2 == year_2 && Valid_month_2 < 6){
        points.innerHTML = reward += 0;
        console.log(Valid_month_2);
    }

   
});

test4.addEventListener("change", function last_deposit() {
    let date_current = new Date();
    // console.log(date_current.getMonth());
    month_current = date_current.getMonth();
    year_current = date_current.getFullYear();
    // console.log(month_current)
    let date = new Date(test4.value);
    month = date.getMonth();
    year = date.getFullYear();
    // console.log(month)
    let Valid_month = month_current - month;
    console.log(Valid_month)

    if ( year_current == year && Valid_month == 0) {
        points.innerHTML = reward += 5;
        // console.log(valid_mths)

    }
    else{
        points.innerHTML = reward += 0;
    }


});


accnt_slct.addEventListener("change", function account_type() {
    if (accnt_slct.value == "Current") {
        points.innerHTML = reward += 10;
    }
    else if (accnt_slct.value == "savings") {
        // points.innerHTML = reward -= 10;
        points.innerHTML = reward += 5;
    }
  

})

test8.addEventListener("change", function Balance() {
    accnt_bal_amnt.innerHTML = Number(test8.value) + 0 + ".00";
    if(test8.value > test6.value){
        points.innerHTML = reward +=  10;

    }
    else{
        points.innerHTML = reward +=  0;
    }
});


sub_btn.addEventListener("click", function () {
    if (reward > 30) {
        alert("Loan approved! score:" + reward + "points")
        points.innerHTML = reward;
        accnt_bal_amnt.innerHTML = Number(test8.value) + Number(test6.value);
    }
    else {
        alert("Loan Denied! Score:" + reward + "points");
        points.innerHTML = reward;
    } 
    
})













