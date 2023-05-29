
let income_test_annual_income1, income_test_annual_income2,deemed_income_thresholds_first_deemed2,deemed_income_thresholds_first_deemed1
    , deeming_rates_first_deeming_rates, deeming_rates_balance_deeming_rates;

// let wifeHideShow = 1;


$(document).ready(function () {
    $("#progressbar2").hide();
    relationship(1);
    hideSteps();
    rentOptions(0);
    yourOtherIncomeOptions(0);
    otherIncomeOptions(0);
    accountBasedPensionOptions(0);
    workingIncomeOptions(0);
    $("i").tooltip();

    console.log("ready!");

    $.ajax({
        url: "./dataFetch.php",
        type: "GET",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
          console.log(data);

          let a = data.income_test;
          let b = data.deemed_income_thresholds;
          let c = data.deeming_rates;
    
        //   console.log(a, "a");
        //   console.log(b, "b");
        //   console.log(c, "c");

          let a_df1 = a.df1;
        //   console.log(a_df1, "a_df1");
          income_test_annual_income1 = a_df1.annual_income;
        //   console.log(income_test_annual_income1, "income_test_annual_income");
          let a_df2 = a.df2;
        //   console.log(a_df2, "a_df2");
          income_test_annual_income2 = a_df2.annual_income;
        //   console.log(income_test_annual_income2, "income_test_weekly_income2");

    
          let b_df1 = b.df1;
        //   console.log(b_df1, "b_df1");
          deemed_income_thresholds_first_deemed1 = b_df1.first_deemed;
        //   console.log(deemed_income_thresholds_first_deemed1, "deemed_income_thresholds_first_deemed1");
    
          let b_df2 = b.df2;
        //   console.log(b_df2, "b_df2");
          deemed_income_thresholds_first_deemed2 = b_df2.first_deemed;
        //   console.log(deemed_income_thresholds_first_deemed2, "deemed_income_thresholds_first_deemed2");
    
          let c_df1 = c.df1;
        //   console.log(c_df1, "c_df1");
          deeming_rates_first_deeming_rates = c_df1.first_deeming_rates;
        //   console.log(deeming_rates_first_deeming_rates, "deeming_rates_first_deeming_rates");
          deeming_rates_balance_deeming_rates = c_df1.balance_deeming_rates;
        //   console.log(deeming_rates_balance_deeming_rates, "balance_deeming_rates");
    
        //   alert("Data Fetched Successfully");
        //   alert("income_test_annual_income2 =" + income_test_annual_income2); 
        //   alert("deemed_income_thresholds_first_deemed1 =" + deemed_income_thresholds_first_deemed1);
        //   alert("deemed_income_thresholds_first_deemed2 =" + deemed_income_thresholds_first_deemed2);
        //   alert("deeming_rates_first_deeming_rates =" + deeming_rates_first_deeming_rates);
        //   alert("deeming_rates_balance_deeming_rates =" + deeming_rates_balance_deeming_rates);

        },
      });





});

// document.getElementById("results").addEventListener("click", getResults);

function hideSteps() {
    for (let i = 1; i <= 8; i++) {
        $("#step-" + i).hide();
    }
}

function format(input) {
    var nStr = input.value + "";
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    input.value = x1 + x2;
}

function relationship(rValue) {
    if (rValue == 1) {
        $("div.wife").hide(400);
    //    wifeHideShow = 1;

    } else {
        $("div.wife").show(450);
    //    wifeHideShow = 2;
    }
}

function getFormattedDate(inputFormat) {
    function pad(s) {
        return (s < 10) ? '0' + s : s;
    }

    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/')
}
var isEligible,
    isWifeEligible,
    accountBasedPensionHusband = 0,
    accountBasedPensionWife = 0,
    deemedIncomeThreshold = 0,
    incomeThreshold = 0;
let TotalFinancialAssets = 0,
    totalDeemedIncome = 0;

let deemingRatesFirst = 0; //0.25%
let deemingRatesBalance = 0; //2.25%


let incomeTest;

function ajaxRequest() {

//putting value of deeming_rates_first_deeming_rates into deemingRatesFirst from data base table deeming_rates
     deemingRatesFirst = deeming_rates_first_deeming_rates/100; //0.25%
//putting value of deeming_rates_balance_deeming_rates into deemingRatesFirst from data base table deeming_rates
     deemingRatesBalance = deeming_rates_balance_deeming_rates/100; //2.25%

    //  alert ("deemingRatesFirst = " + deemingRatesFirst);
    //  alert ("deemingRatesBalance = " + deemingRatesBalance);
    


    // $.ajax({
    //     url: "deemed_income2.php",
    //     success: function (dataabc) {
    //         console.log(dataabc);
    //         let values = JSON.parse(dataabc);
    //         deemedIncomeThreshold = (values.first_deemed);
    //     }
    // });
    // $.ajax({
    //     url: "deeming_rates.php",
    //     success: function (dataabc) {
    //         //console.log(dataabc);
    //         $("#content4").html(dataabc);
    //     }
    // });

    // $.ajax({
    //     url: "income_test.php",
    //     success: function (dataabc) {
    //         //console.log(dataabc);
    //         $("#content5").html(dataabc);
    //     }
    // });
}

function step(number) {
    let husbandDOB = $('input[id="husbandDOB"]').val();

    if (!husbandDOB) {
        alert("Your Date of Birth is Required");
        return false;
    }

    let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single
    let wifeDOB = $('input[id="wifeDOB"]').val();
    if (relationshipStatus === "2" && !wifeDOB) {
        alert("Partner Date of Birth is Required");
        return false;
    }
    $('#DOB').text(getFormattedDate(husbandDOB));
    $('#DOB2').text(getFormattedDate(wifeDOB));

    if (number == 1) {
        ajaxRequest();
    }

    $("#progressbar li").eq(number).addClass("active1");
    $("#progressbar li")
        .eq(number + 1)
        .removeClass("active1");


    if (number > 5) {

        $("#progressbar2 li")
            .eq(number - 6)
            .addClass("active1");
        $("#progressbar2 li")
            .eq(number - 5)
            .removeClass("active1");
    }

    $("#step-" + (number + 1)).hide();
    $("#step-" + number).show(750);
    $("#step-" + (number - 1)).hide();

    if (number == 6) {
        $("#progressbar2").show();
        $("#progressbar").hide();
    } else if (number == 5) {
        $("#progressbar2").hide();
        $("#progressbar").show();
    }

    setProgressBar(number);
}

function otherIncomeOptions(number) {
    if (number == 0) $(".otherIncomeOptions").hide(500);
    else $(".otherIncomeOptions").show(500);
}

function rentOptions(number) {
    if (number == 0) $(".rentOptions").hide(500);
    else $(".rentOptions").show(500);
}

function accountBasedPensionOptions(number) {
    if (number == 0) $(".accountBasedPensionOptions").hide(500);
    else $(".accountBasedPensionOptions").show(500);
}

function yourOtherIncomeOptions(number) {
    if (number == 0) $(".yourOtherIncomeOptions").hide(500);
    else $(".yourOtherIncomeOptions").show(500);
}

function workingIncomeOptions(number) {
    if (number == 0) $(".workingIncomeOptions").hide(500);
    else $(".workingIncomeOptions").show(500);
}


function getResults() {
    step(7);
    let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single
    let husbandDOB = $('input[id="husbandDOB"]').val();
    let wifeDOB = $('input[id="wifeDOB"]').val();

    //if single
    if (relationshipStatus === "1") {
        let rel;
        rel = "Single";
        //putting deemed_income_thresholds_first_deemed1 form database table deemed_income_thresholds
        // deemedIncomeThreshold = 53600;
        deemedIncomeThreshold = deemed_income_thresholds_first_deemed1;
        // alert(deemedIncomeThreshold+" = deemedIncomeThreshold");

        isEligible = verifyAge(husbandDOB);

        if (isEligible === "Yes") {
            incomeThreshold = income_test_annual_income1;
        } 
        else {
            
            incomeThreshold = income_test_annual_income1;
        }

        accountBasedPensionHusband = parseFloat(document.getElementById("husbandPensionAccountBased").value.replace(/,/g, "")) || Number(0);

        TotalFinancialAssets = accountBasedPensionHusband;

        totalDeemedIncome = (TotalFinancialAssets < deemedIncomeThreshold) ? TotalFinancialAssets * deemingRatesFirst : deemedIncomeThreshold * deemingRatesFirst + (TotalFinancialAssets - deemedIncomeThreshold) * deemingRatesBalance;

        let incomeSingle = getIncome(relationshipStatus);

        incomeTest = (incomeSingle + totalDeemedIncome) <= incomeThreshold ? 'Yes' : 'No';


        if (incomeTest === 'Yes' && isEligible === 'Yes') {
            document.getElementById("husbandEligible").innerHTML = 'You are eligible for the Commonwealth Seniors Health Care Card';
        } else {
            document.getElementById("husbandEligible").innerHTML = 'You are not eligible for the Commonwealth Seniors Health Care Card';
        }
        let incomeTest3 = (incomeSingle + totalDeemedIncome) <= incomeThreshold ? 'You meet the relevant income test' : 'You don’t meet the relevant income test';


        // document.getElementById("relationship").innerHTML = rel;
        document.getElementById("totalIncome").innerHTML = toComma(incomeSingle + totalDeemedIncome);

        document.getElementById("threshold").innerHTML = toComma(incomeThreshold);
        document.getElementById("incomeTest").innerHTML = incomeTest3;
        $('#wifeEligible').hide();
        document.getElementById("wifeEligible").innerHTML = "Your Partner is not eligible for the Commonwealth Seniors Health Care Card";
    } else {


        //putting deemed_income_thresholds_first_deemed2 from database into incomeThreshold variable
        // deemedIncomeThreshold = 89000;
        deemedIncomeThreshold = deemed_income_thresholds_first_deemed2;
        // alert(deemedIncomeThreshold+" = deemedIncomeThreshold");
        //putting value of income_test_annual_income2 from database into income_test variable
        // incomeThreshold = 92416;
        incomeThreshold = income_test_annual_income2;
        // alert(incomeThreshold+" = incomeThreshold");

        let rel2;
        rel2 = "Couple";

        isEligible = verifyAge(husbandDOB);
        isWifeEligible = verifyAge(wifeDOB);

        accountBasedPensionHusband = parseFloat(document.getElementById("husbandPensionAccountBased").value.replace(/,/g, "")) || Number(0);
        accountBasedPensionWife = parseFloat(document.getElementById("wifePensionAccountBased").value.replace(/,/g, "")) || Number(0);

        TotalFinancialAssets = accountBasedPensionHusband + accountBasedPensionWife;

        totalDeemedIncome = TotalFinancialAssets < deemedIncomeThreshold ? TotalFinancialAssets * deemingRatesFirst : deemedIncomeThreshold * deemingRatesFirst + (TotalFinancialAssets - deemedIncomeThreshold) * deemingRatesBalance;

        let incomeCouple = getIncome(relationshipStatus);

        // document.getElementById("relationship").innerHTML = rel2;
        incomeTest = (incomeCouple + totalDeemedIncome) <= incomeThreshold ? 'Yes' : 'No';
        let incomeTest2 = (incomeCouple + totalDeemedIncome) <= incomeThreshold ? 'You meet the relevant income test' : 'You don’t meet the relevant income test';

        if (incomeTest === 'Yes' && isEligible === 'Yes') {
            document.getElementById("husbandEligible").innerHTML = 'You are eligible for the Commonwealth Seniors Health Care Card';
        } else {
            document.getElementById("husbandEligible").innerHTML = 'You are not eligible for the Commonwealth Seniors Health Care Card';
        }
        if (incomeTest === 'Yes' && isWifeEligible === 'Yes') {
            $('#wifeEligible').show();
            document.getElementById("wifeEligible").innerHTML = "Your Partner is eligible for the Commonwealth Seniors Health Care Card";

        } else {
            $('#wifeEligible').show();
            document.getElementById("wifeEligible").innerHTML = "Your Partner is not eligible for the Commonwealth Seniors Health Care Card";

        }

        document.getElementById("totalIncome").innerHTML = toComma(incomeCouple + totalDeemedIncome);
        document.getElementById("incomeTest").innerHTML = incomeTest2;
        document.getElementById("threshold").innerHTML = toComma(incomeThreshold);

    }
}

let toComma = (x) => "$" + Math.ceil(x).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let financialAssets = 0;
let superAssets = 0,
    wifeSuperAssets = 0;

function getIncome(status) {
    let propertyRentalIncomeAnnual = 0;
    let rentFrequency = document.getElementById("rentFrequency").value;
    let wifeDividendIncome = parseFloat(document.getElementById("wifeDividendIncome").value.replace(/,/g, "")) || Number(0);
    let wifeFunds = parseFloat(document.getElementById("wifeFunds").value.replace(/,/g, "")) || Number(0);
    let wifeInterest = parseFloat(document.getElementById("wifeInterest").value.replace(/,/g, "")) || Number(0);
    let wifeAnnualPension = parseFloat(document.getElementById("yourAnnualPensionWife").value.replace(/,/g, "")) || Number(0);

    let husbandAnnualPension = parseFloat(document.getElementById("yourAnnualPension").value.replace(/,/g, "")) || Number(0);
    let husbandDividendIncome = parseFloat(document.getElementById("husbandDividendIncome").value.replace(/,/g, "")) || Number(0);
    let husbandFunds = parseFloat(document.getElementById("husbandFunds").value.replace(/,/g, "")) || Number(0);
    let husbandInterest = parseFloat(document.getElementById("husbandInterest").value.replace(/,/g, "")) || Number(0);

    let propertyRentalIncome = parseFloat(document.getElementById("secondPropertyRentalIncome").value.replace("$", "").replace(/,/g, "")) || Number(0);
    let propertyAnnualExpense = parseFloat(document.getElementById("secondPropertyAnnualExpense").value.replace("$", "").replace(/,/g, "")) || Number(0);

    if (rentFrequency == "weekly") {
        propertyRentalIncomeAnnual = propertyRentalIncome * 52;
    } else {
        propertyRentalIncomeAnnual = propertyRentalIncome * 12;
    }

    $("#rent").text(toComma(propertyRentalIncomeAnnual));
    $("#frequency").text(rentFrequency);
    $("#annualExpense").text(toComma(propertyAnnualExpense));


    let salaryIncome = parseFloat(document.getElementById("grossSalary").value.replace("$", "").replace(/,/g, "")) || Number(0);
    let grossSalaryWife = parseFloat(document.getElementById("grossSalaryWife").value.replace("$", "").replace(/,/g, "")) || Number(0);

    let otherIncome = parseFloat(document.getElementById("overseasIncome").value.replace("$", "").replace(/,/g, "")) || Number(0);
    let otherIncomeWife = parseFloat(document.getElementById("overseasIncomeWife").value.replace("$", "").replace(/,/g, "")) || Number(0);

    let netRental = propertyRentalIncomeAnnual - propertyAnnualExpense;
    netRental = netRental <= 0 ? 0 : netRental;

    let totalIncome = otherIncome + salaryIncome + netRental + husbandAnnualPension + husbandInterest + husbandFunds + husbandDividendIncome;
    let totalIncomeWife = totalIncome + otherIncomeWife + grossSalaryWife + wifeAnnualPension + wifeInterest + wifeFunds + wifeDividendIncome;

 $('#ABP').text(toComma(accountBasedPensionHusband));
    $('#AB2P').text(toComma(accountBasedPensionWife));

    $('#dividendIncome').text(toComma(husbandDividendIncome));
    $('#dividendIncome2').text(toComma(wifeDividendIncome));


    $('#managedFunds').text(toComma(husbandFunds));
    $('#managedFunds2').text(toComma(wifeFunds));
    $('#interestIncome').text(toComma(husbandInterest));
    $('#interestIncome2').text(toComma(wifeInterest));
    $('#apa').text(toComma(husbandAnnualPension));
    $('#apa2').text(toComma(wifeAnnualPension));

    $('#grossSalary1').text(toComma(salaryIncome));
    $('#grossSalary2').text(toComma(grossSalaryWife));


    $('#overseasIncome1').text(toComma(otherIncome));
    $('#overseasIncome2').text(toComma(otherIncomeWife));
    
    if (status == "1") {
        return totalIncome;
    } else {
        return totalIncomeWife;
    }

   
}

function verifyAge(dob) {
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (age >= 65) {
        if (dob <= "1952-30-6") {
            return "Yes";
        } else if (dob <= "1953-31-12" && age >= 65.5) {
            return "Yes";
        } else if (dob <= "1955-30-6" && age >= 66) {
            return "Yes";
        } else if (dob <= "1956-31-12" && age >= 66.5) {
            return "Yes";
        } else if (dob >= "1957-1-1" && age >= 67) {
            return "Yes";
        } else {
            return "no";
        }
    } else {
        return "No";
    }
}


function cancelModal() {
    step(7);
    $("#staticBackdrop").modal("hide");
    $("#frontPage").hide();

}
let mailChimpErrorFlag =0; 

function getPDF() {
    document.getElementById("emailSubmit").innerHTML= "Sending...";
    setTimeout(function(){ SendPDF(); }, 500);
  }
  

function SendPDF() {
    let nameClient = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let emailClient = document.getElementById("email").value;


      if (!nameClient || !emailClient) {
     
        alert("Please fill name and email correctly.");
        document.getElementById("emailSubmit").innerHTML= "Send";
        return false;
      }
      else{
        let validateEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(emailClient.match(validateEmail)){
    
        }else{
          alert("Please Enter Valid Email");
          document.getElementById("emailSubmit").innerHTML= "Send";
          return false;
        }
      }
    $("html, body").animate(
        {
            scrollTop: $("#loaderDiv").show().offset().top,
        },
        300
    );
    $("#staticBackdrop").modal("hide");
    getResults();
    // $(".title").show();
    // $("#progressbarDiv").hide();
    // $("#buttons").hide();
    // $("#PDF-content").show();
    // $(".hid").show();
    // $(".d-hidden").show();
    // $("#optionalContent").show();
    // $('#frontPage').show();

    $("#loaderDiv").show();
    $("#progressbarDiv").hide();
    $("#buttons").show();
    $('#frontPage').hide();
    $("#optionalContent").hide();
    $("#PDF-content").hide();
    $(".title").hide();
    $(".hid").hide();
    $(".d-hidden").hide();
    
    
        let newData = {
            name : nameClient,
            lastName: lastName,
            email: emailClient,
            CalName: 'Health-Card-Denaro',
        }

        $.ajax({
            type: "POST",
            url: "./mailchimp.php",
            data: newData,
            success: function (data) {
                console.log(data);
                // alert(data);
            },
            error: function (error) {
                console.log(error+"  : error");
                mailChimpErrorFlag==1;
                // alert(error+" "+mailChimpErrorFlag);
            },
        });

        let pdf = PDFFile3();
        // alert(pdf);
        console.log(pdf);
        
            let data = {
                nameClient: nameClient,
                emailClient: emailClient,
                pdfFile: pdf,
                subject: "COMMONWEALTH SENIORS HEALTH CARE CARD CALCULATOR REPORT",
            };

            $.ajax({
                type: "POST",
                url: "mail.php",
                data: data,
                success: function (data) {
                    console.log(data);
                    alert("Email Has Been Sent Successfully!");
                    $("#loaderDiv").hide();
                    $("#progressbarDiv").show();
                    $("#buttons").show();
                    $('#frontPage').hide();
                    $("#optionalContent").hide();
                    $("#PDF-content").hide();
                    $(".title").hide();
                    $(".hid").hide();
                    $(".d-hidden").hide();
                    document.getElementById("emailSubmit").innerHTML= "Send";
                },
            });
    
}

function setProgressBar(curStep) {
    let percent = parseFloat(100 / 7) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
}

function mainCalculate(){
  document.getElementById("frontPage").classList.add("d-none");
  document.getElementById("mainCalculator").classList.remove("d-none");
}
