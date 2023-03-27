
var income_test_weekly_income1,income_test_weekly_income2,income_test_eight_week_income1,income_test_eight_week_income2,deemed_income_thresholds_first_deemed1,
deemed_income_thresholds_first_deemed2,deeming_rates_first_deeming_rates,deeming_rates_balance_deeming_rates;
$(document).ready(function () {
  $("#progressbar2").hide();
  relationship(1);
  hideSteps();
  giftOptions(0);
  giftOptionsExtended(0);
  rentOptions(0);
  yourOtherIncomeOptions(0);
  otherIncomeOptions(0);
  accountBasedPensionOptions(0);
  workingIncomeOptions(0);
  businessIncomeOptions(0);
  gFatherIncomeOptions(0);
  benefits(0);
  $("i").tooltip();

  //   console.log("dataFetch get");
  // let urlLink = "http://localhost/financial/27-oct-denaro-work/Low-Income-Denaro/dataFetch.php";

  $.ajax({
    url: "dataFetch.php",
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      console.log(data);

      let a = data.income_test;

      let b = data.deemed_income_thresholds;
      let c = data.deeming_rates;

      // console.log(a, "a");
      // console.log(b, "b");
      // console.log(c, "c");

      let a_df1 = a.df1;
      console.log(a_df1, "a_df1");

      income_test_weekly_income1 = a_df1.weekly_income;
      // console.log(income_test_weekly_income1, "income_test_weekly_income1");
      income_test_eight_week_income1 = a_df1.eight_week_income;
      // console.log(income_test_eight_week_income1, "income_test_eight_week_income1");

      let a_df2 = a.df2;
      // console.log(a_df2, "a_df2");
      income_test_weekly_income2 = a_df2.weekly_income;
      // console.log(income_test_weekly_income2, "income_test_weekly_income2");
      income_test_eight_week_income2 = a_df2.eight_week_income;
      // console.log(income_test_eight_week_income2, "income_test_eight_week_income2");

      let b_df1 = b.df1;
      // console.log(b_df1, "b_df1");
      deemed_income_thresholds_first_deemed1 = b_df1.first_deemed;
      // console.log(deemed_income_thresholds_first_deemed1, "deemed_income_thresholds_first_deemed1");

      let b_df2 = b.df2;
      // console.log(b_df2, "b_df2");
      deemed_income_thresholds_first_deemed2 = b_df2.first_deemed;
      // console.log(deemed_income_thresholds_first_deemed2, "deemed_income_thresholds_first_deemed2");

      let c_df1 = c.df1;
      // console.log(c_df1, "c_df1");
      deeming_rates_first_deeming_rates = c_df1.first_deeming_rates;
      // console.log(deeming_rates_first_deeming_rates, "deeming_rates_first_deeming_rates");
      deeming_rates_balance_deeming_rates = c_df1.balance_deeming_rates;
      // console.log(deeming_rates_balance_deeming_rates, "balance_deeming_rates");

      // alert("Data Fetched Successfully");
      // alert("income_test_weekly_income1 =" + income_test_weekly_income1);
      // alert("income_test_eight_week_income1 =" + income_test_eight_week_income1);  
      // alert("income_test_weekly_income2 =" + income_test_weekly_income2); 
      // alert("income_test_eight_week_income2 =" + income_test_eight_week_income2);
      // alert("deemed_income_thresholds_first_deemed1 =" + deemed_income_thresholds_first_deemed1);
      // alert("deemed_income_thresholds_first_deemed2 =" + deemed_income_thresholds_first_deemed2);
      // alert("deeming_rates_first_deeming_rates =" + deeming_rates_first_deeming_rates);
      // alert("deeming_rates_balance_deeming_rates =" + deeming_rates_balance_deeming_rates);


    },
  });
});

function hideSteps() {
  for (let i = 1; i <= 9; i++) {
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
  } else {
    $("div.wife").show(450);
  }
}

function getFormattedDate(inputFormat) {
  function pad(s) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join("/");
}

function step(number) {
  let husbandDOB = $('input[id="husbandDOB"]').val();

  if (!husbandDOB) {
    alert("Your Date of Birth is Required");
    return false;
  }
  $("#DOB").text(getFormattedDate(husbandDOB));

  let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single

  let wifeDOB = $('input[id="wifeDOB"]').val();
  if (relationshipStatus === "2" && !wifeDOB) {
    alert("Partner Date of Birth is Required");
    return false;
  }
  $("#DOB2").text(getFormattedDate(wifeDOB));

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

function giftOptions(number) {
  if (number == 0) {
    $(".giftOptionsExtended").hide(500);
    $("#giftBTN").show(500);
  } else {
    $(".giftOptionsExtended").show(500);
    $("#giftBTN").show(500);
  }
}

function giftOptionsExtended(number) {
  if (number == 0) {
    $(".giftOptionsExtendedEnds").hide(500);
    $("#giftBTN").show(500);
  } else {
    $(".giftOptionsExtendedEnds").show(500);
    $("#giftBTN").hide(500);
  }
}
function businessIncomeOptions(number) {
  if (number == 0) {
    $(".businessIncomeOptions").hide(500);
    $("#results").show(500);
  } else {
    $(".businessIncomeOptions").show(500);
    $("#results").hide(500);
  }
}

function gFatherIncomeOptions(number) {
  if (number == 0) $(".gfatherIncomeOptions").hide(500);
  else $(".gfatherIncomeOptions").show(500);
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

function benefits(number) {
  if (number == 0) $(".benefits").hide(500);
  else $(".benefits").show(500);
}

function yourOtherIncomeOptions(number) {
  if (number == 0) $(".yourOtherIncomeOptions").hide(500);
  else $(".yourOtherIncomeOptions").show(500);
}

function workingIncomeOptions(number) {
  if (number == 0) $(".workingIncomeOptions").hide(500);
  else $(".workingIncomeOptions").show(500);
}

var isEligible,
  isWifeEligible,
  accountBasedPensionHusband = 0,
  accountBasedPensionWife = 0,
  deemedIncomeThreshold = 0,
  incomeThreshold = 0;
let TotalFinancialAssets = 0,
  totalDeemedIncome = 0;

// putting first_rate entry one from deeming_rates table
// let deemingRatesFirst = 0.0025; //0.25%
let deemingRatesFirst = 0; //0.25%
let deemingRatesBalance = 0; //2.25%


function getResults() {
  

 deemingRatesFirst = Number(deeming_rates_first_deeming_rates/100); //0.25%
//  alert (deemingRatesFirst+'= deemingRatesFirst');
// putting 	over_rate entry one from deeming_rates table
// let deemingRatesBalance = 0.0225; //2.25%

deemingRatesBalance = Number(deeming_rates_balance_deeming_rates/100); //2.25%
// alert (deemingRatesBalance+'= deemingRatesBalance');
  step(9);
  let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single
  let husbandDOB = $('input[id="husbandDOB"]').val();
  let wifeDOB = $('input[id="wifeDOB"]').val();

  //if single
  if (relationshipStatus === "1") {
    // putting first_deemed entry one from deemed_income_thresholds table
    // deemedIncomeThreshold = 53600;
    deemedIncomeThreshold = deemed_income_thresholds_first_deemed1;
    // alert (deemedIncomeThreshold + "= deemedIncomeThreshold");

    isEligible = verifyAge(husbandDOB);

    if (isEligible === "Yes") {
      incomeThreshold = 57761;
    } else {
      incomeThreshold = 92416;
    }

    getIncome(relationshipStatus, husbandDOB, wifeDOB, deemedIncomeThreshold);
  } else {
    
    // putting first_deemed entry two from deemed_income_thresholds table
    deemedIncomeThreshold = 89000;
    // deemedIncomeThreshold = deemed_income_thresholds_first_deemed2;
    incomeThreshold = 92416;

    getIncome(relationshipStatus, husbandDOB, wifeDOB, deemedIncomeThreshold);
  }
}

let toComma = (x) =>
  "$" +
  Math.ceil(x)
    .toFixed(0)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let financialAssets = 0;
let superAssets = 0,
  wifeSuperAssets = 0;

function getIncome(status, hDOB, wDOB, deemedIncomeThold) {
  let propertyRentalIncomeAnnual = 0;
  let rentFrequency = document.getElementById("rentFrequency").value;

  let wifeFunds =
    parseFloat(document.getElementById("wifeFunds").value.replace(/,/g, "")) ||
    0;
  let wifePortfolio =
    parseFloat(
      document.getElementById("wifePortfolio").value.replace(/,/g, "")
    ) || 0;
  let wifeSavingsAccounts =
    parseFloat(
      document.getElementById("wifeSavingsAccounts").value.replace(/,/g, "")
    ) || 0;
  let overseasIncomeWife =
    parseFloat(
      document.getElementById("overseasIncomeWife").value.replace(/,/g, "")
    ) || 0;
  let centreLinkBenefitsWife =
    parseFloat(
      document.getElementById("centreLinkBenefitsWife").value.replace(/,/g, "")
    ) || 0;

  let gFatherAnnualPensionWife = 0;
  // parseFloat(document.getElementById("gFatherAnnualPensionWife").value.replace(/,/g, "")) || 0;

  let yourAnnualPensionWife =
    parseFloat(
      document.getElementById("yourAnnualPensionWife").value.replace(/,/g, "")
    ) || 0;
  let wifePension =
    parseFloat(
      document.getElementById("wifePension").value.replace(/,/g, "")
    ) || 0;
  let wifeSuperAnnaution =
    parseFloat(
      document.getElementById("wifeSuperAnnaution").value.replace(/,/g, "")
    ) || 0;

  let husbandPortfolio =
    parseFloat(
      document.getElementById("husbandPortfolio").value.replace(/,/g, "")
    ) || 0;
  let husbandSavingsAccounts =
    parseFloat(
      document.getElementById("husbandSavingsAccounts").value.replace(/,/g, "")
    ) || 0;
  let husbandFunds =
    parseFloat(
      document.getElementById("husbandFunds").value.replace(/,/g, "")
    ) || 0;
  let husbandOverseasIncome =
    parseFloat(
      document.getElementById("overseasIncome").value.replace(/,/g, "")
    ) || 0;
  let husbandCentreLinkBenefits =
    parseFloat(
      document.getElementById("centreLinkBenefits").value.replace(/,/g, "")
    ) || 0;

  let husbandgFatherAnnualPension = 0;
  // parseFloat(document.getElementById("gFatherAnnualPension").value.replace(/,/g, "")) || 0;

  let husbandyourAnnualPension =
    parseFloat(
      document.getElementById("yourAnnualPension").value.replace(/,/g, "")
    ) || 0;
  let husbandPension =
    parseFloat(
      document.getElementById("husbandPension").value.replace(/,/g, "")
    ) || 0;
  let husbandSuperAnnaution =
    parseFloat(
      document.getElementById("husbandSuperAnnaution").value.replace(/,/g, "")
    ) || 0;

  let propertyRentalIncome =
    parseFloat(
      document
        .getElementById("secondPropertyRentalIncome")
        .value.replace("$", "")
        .replace(/,/g, "")
    ) || 0;
  let propertyAnnualExpense =
    parseFloat(
      document
        .getElementById("secondPropertyAnnualExpense")
        .value.replace("$", "")
        .replace(/,/g, "")
    ) || 0;

  if (rentFrequency === "weekly") {
    propertyRentalIncomeAnnual = propertyRentalIncome * 52;
  } else {
    propertyRentalIncomeAnnual = propertyRentalIncome * 12;
  }

  $("#rent").text(toComma(propertyRentalIncomeAnnual));
  $("#frequency").text(rentFrequency);
  $("#annualExpense").text(toComma(propertyAnnualExpense));

  let clientFinancialAssets =
    husbandFunds + husbandSavingsAccounts + husbandPortfolio;
  let clientSuperPension = husbandPension;

  let wifeFinancialAssets = wifeFunds + wifeSavingsAccounts + wifePortfolio;
  let wifeSuperPension = wifePension;

  let isEligible = verifyAge(hDOB);
  let isWifeEligible = verifyAge(wDOB);

  if (status === "1" && isEligible === "Yes") {
    clientSuperPension += husbandSuperAnnaution;
  } else if (
    status === "2" &&
    isEligible === "Yes" &&
    isWifeEligible === "Yes"
  ) {
    clientSuperPension += husbandSuperAnnaution;
    wifeSuperPension += wifeSuperAnnaution;
  } else if (status === "2" && isEligible === "Yes") {
    clientSuperPension += husbandSuperAnnaution;
  } else if (status === "2" && isWifeEligible === "Yes") {
    wifeSuperPension += wifeSuperAnnaution;
  }
  let financialAssetsClient = 0;
  let financialAssetsWife = 0;

  if (status === "1") {
    financialAssetsClient = clientFinancialAssets + clientSuperPension;
    totalDeemedIncome =
      financialAssetsClient < deemedIncomeThold
        ? financialAssetsClient * deemingRatesFirst
        : deemedIncomeThold * deemingRatesFirst +
          (financialAssetsClient - deemedIncomeThold) * deemingRatesBalance;
  } else {
    financialAssetsWife =
      clientFinancialAssets +
      +clientSuperPension +
      wifeFinancialAssets +
      wifeSuperPension;
    totalDeemedIncome =
      financialAssetsWife < deemedIncomeThold
        ? financialAssetsWife * deemingRatesFirst
        : deemedIncomeThold * deemingRatesFirst +
          (financialAssetsWife - deemedIncomeThold) * deemingRatesBalance;
  }

  let salaryIncome =
    parseFloat(
      document
        .getElementById("grossSalary")
        .value.replace("$", "")
        .replace(/,/g, "")
    ) || 0;
  let grossSalaryWife =
    parseFloat(
      document
        .getElementById("grossSalaryWife")
        .value.replace("$", "")
        .replace(/,/g, "")
    ) || 0;

  // let otherIncome = parseFloat(document.getElementById("overseasIncome").value.replace("$", "").replace(/,/g, "")) || 0;
  // let otherIncomeWife = parseFloat(document.getElementById("overseasIncomeWife").value.replace("$", "").replace(/,/g, "")) || 0;

  let gFatherAnnualDeductibleHusband = 0;
  // parseFloat(document.getElementById("gFatherAnnualDeductible").value.replace("$", "").replace(/,/g, "")) || 0;
  let yourAnnualDeductibleHusband =
    parseFloat(
      document
        .getElementById("yourAnnualDeductible")
        .value.replace("$", "")
        .replace(/,/g, "")
    ) || 0;
  let gFatherAnnualDeductibleWife = 0;
  // parseFloat(document.getElementById("gFatherAnnualDeductibleWife").value.replace("$", "").replace(/,/g, "")) || 0;
  let yourAnnualDeductibleWife =
    parseFloat(
      document
        .getElementById("yourAnnualDeductibleWife")
        .value.replace("$", "")
        .replace(/,/g, "")
    ) || 0;

  let netRental = propertyRentalIncomeAnnual - propertyAnnualExpense;
  netRental = netRental <= 0 ? 0 : netRental;

  let totalIncome =
    totalDeemedIncome +
    salaryIncome +
    netRental +
    husbandOverseasIncome +
    husbandCentreLinkBenefits +
    husbandgFatherAnnualPension +
    husbandyourAnnualPension;

  let totalIncomeWife =
    totalIncome +
    grossSalaryWife +
    overseasIncomeWife +
    centreLinkBenefitsWife +
    gFatherAnnualPensionWife +
    yourAnnualPensionWife;

  let clientDeductiblePensionIncome = 0;
  let wifeDeductiblePensionIncome = 0;

  if (status === "1") {
    let clientDeductiblePensionIncome1 =
      husbandgFatherAnnualPension - gFatherAnnualDeductibleHusband <= 0
        ? husbandgFatherAnnualPension
        : gFatherAnnualDeductibleHusband;
    let clientDeductiblePensionIncome2 =
      husbandyourAnnualPension - yourAnnualDeductibleHusband <= 0
        ? husbandyourAnnualPension
        : yourAnnualDeductibleHusband;
    clientDeductiblePensionIncome =
      clientDeductiblePensionIncome1 + clientDeductiblePensionIncome2;

    let finalIncome = totalIncome - clientDeductiblePensionIncome;
    let weeklyIncome = finalIncome / 52;
    //putting weekly income from the income_test table
    // let thold = 656;
    let thold = income_test_weekly_income1;

    let actualIncomeOf8Weeks = weeklyIncome * 8;
    let actualIncomeThold = thold * 8;

    let incomeOverOrUnder = actualIncomeOf8Weeks - actualIncomeThold;

    // document.getElementById('relationship').innerHTML = 'Single';
    document.getElementById("totalIncome1").innerHTML =
      toComma(actualIncomeOf8Weeks);
    document.getElementById("totalIncome").innerHTML =
      toComma(actualIncomeOf8Weeks);
    document.getElementById("incomeThreshold").innerHTML =
      toComma(actualIncomeThold);
    document.getElementById("incomeThreshold1").innerHTML =
      toComma(actualIncomeThold);
    document.getElementById("incomeOverORUnder").innerHTML =
      toComma(incomeOverOrUnder);
    document.getElementById("incomeOverORUnder1").innerHTML =
      toComma(incomeOverOrUnder);
    if (incomeOverOrUnder > 0) {
      $(".verdict").text("You don’t meet the relevant income test");

      // document.getElementById('verdict').innerHTML = 'You don’t meet the relevant income test';
    } else {
      $(".verdict").text("You meet the relevant income test");
      // document.getElementById('verdict').innerHTML = 'You meet the relevant income test';
    }
  } else {
    let wifeDeductiblePensionIncome1 =
      gFatherAnnualPensionWife - gFatherAnnualDeductibleWife <= 0
        ? gFatherAnnualPensionWife
        : gFatherAnnualDeductibleWife;
    let wifeDeductiblePensionIncome2 =
      yourAnnualPensionWife - yourAnnualDeductibleWife <= 0
        ? yourAnnualPensionWife
        : yourAnnualDeductibleWife;
    let clientDeductiblePensionIncome2 =
      husbandyourAnnualPension - yourAnnualDeductibleHusband <= 0
        ? husbandyourAnnualPension
        : yourAnnualDeductibleHusband;

    wifeDeductiblePensionIncome =
      wifeDeductiblePensionIncome1 +
      wifeDeductiblePensionIncome2 +
      clientDeductiblePensionIncome2;

    let finalIncomeCombined = totalIncomeWife - wifeDeductiblePensionIncome;
    let weeklyIncomeCombined = finalIncomeCombined / 52;
    //putting weekly income from the income_test table
    // let tholdCombined = 1127;
    let tholdCombined = income_test_weekly_income2;
    // alert(tholdCombined + " = tholdCombined");
    let actualIncomeOf8WeeksCombined = weeklyIncomeCombined * 8;
    let actualIncomeTholdCombined = tholdCombined * 8;

    let incomeOverOrUnderCombined =
      actualIncomeOf8WeeksCombined - actualIncomeTholdCombined;

    // old
    // let incomeOverOrUnderCombined = actualIncomeTholdCombined - actualIncomeOf8WeeksCombined;

    // document.getElementById('relationship').innerHTML = 'Couple';
    document.getElementById("totalIncome1").innerHTML = toComma(
      actualIncomeOf8WeeksCombined
    );
    document.getElementById("totalIncome").innerHTML = toComma(
      actualIncomeOf8WeeksCombined
    );
    document.getElementById("incomeThreshold").innerHTML = toComma(
      actualIncomeTholdCombined
    );
    document.getElementById("incomeThreshold1").innerHTML = toComma(
      actualIncomeTholdCombined
    );
    document.getElementById("incomeOverORUnder1").innerHTML = toComma(
      incomeOverOrUnderCombined
    );
    document.getElementById("incomeOverORUnder").innerHTML = toComma(
      incomeOverOrUnderCombined
    );

    if (incomeOverOrUnderCombined > 0) {
      $(".verdict").text("You don’t meet the relevant income test");
      // document.getElementById('verdict').innerHTML = 'You don’t meet the relevant income test';
    } else {
      $(".verdict").text("You meet the relevant income test");
      // document.getElementById('verdict').innerHTML = 'You meet the relevant income test';
    }
  }

  $("#savings2").text(toComma(wifeSavingsAccounts));
  $("#superBalance2").text(toComma(wifeSuperAnnaution));
  $("#ABP2").text(toComma(wifePension));
  $("#directShare2").text(toComma(wifePortfolio));
  $("#managedFunds2").text(toComma(wifeFunds));
  $("#CPB2").text(toComma(centreLinkBenefitsWife));
  $("#OI2").text(toComma(overseasIncomeWife));

  $("#savings").text(toComma(husbandSavingsAccounts));
  $("#superBalance").text(toComma(husbandSuperAnnaution));
  $("#ABP").text(toComma(husbandPension));
  $("#directShare").text(toComma(husbandPortfolio));
  $("#managedFunds").text(toComma(husbandFunds));

  $("#app").text(toComma(husbandyourAnnualPension));
  $("#app2").text(toComma(yourAnnualPensionWife));
  $("#CPB").text(toComma(husbandCentreLinkBenefits));
  $("#OI").text(toComma(husbandOverseasIncome));

  $("#grossSalary1").text(toComma(salaryIncome));
  $("#grossSalary2").text(toComma(grossSalaryWife));
  $("#ada").text(toComma(yourAnnualDeductibleHusband));

  $("#ada2").text(toComma(yourAnnualDeductibleWife));
}

// results

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
  $("#staticBackdrop").modal("hide");
  step(9);
  $("#frontPage").hide();
}


let mailChimpErrorFlag =0; 

function getPDF() {
  document.getElementById("emailSubmit").innerHTML= "Sending...";
  setTimeout(function(){ SendPDF(); }, 500);
}


function SendPDF(){
  let nameClient = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let emailClient = document.getElementById("email").value;

  if (!nameClient || !emailClient) {
    alert("Please fill name and email correctly.");
    return false;
  }
  $("html, body").animate(
    {
      scrollTop: $("#loaderDiv").show().offset().top,
    },
    300
  );

  $("#staticBackdrop").modal("hide");
  getResults();

      $("#loaderDiv").show();
      $("#progressbarDiv").hide();
      $("#buttons").show();
      $("#frontPage").hide();
      $("#PDF-content").hide();
      $(".title").hide();
      $("#optionalContent").hide();
      $(".results-main").show();
      document.getElementById("loaderDiv").classList.remove("d-none");
      document.getElementById("ResultsClass2").classList.add("d-none");
      document.getElementById("ResultsClass1").classList.add("d-none");
      document.getElementById("ResultsClass").classList.add("d-none");


   let newData = {
        name : nameClient,
        lastName: lastName,
        email: emailClient,
        CalName: 'Low-Income-Denaro',
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
            // alert(error);
        },
    });
    
  // New Promise-based usage:
  
  let pdf = PDFFile2();
  // alert(pdf);
  console.log(pdf);
  
  let data = {
    nameClient: nameClient,
    emailClient: emailClient,
    pdfFile: pdf,
    subject: "LOW INCOME HEALTH CARE CARD CALCULATOR REPORT"
  };
      $.ajax({
        type: "POST",
        url: "./mail.php",
        data: data,
        success: function (data) {
          console.log(data);
          alert("Email Has Been Sent Successfully!");
        //   $("#loaderDiv").hide();
          $("#progressbarDiv").show();
          $("#buttons").show();
          $("#frontPage").hide();
          $("#PDF-content").hide();
          $(".title").hide();
          $("#optionalContent").hide();
          $(".results-main").show();
          document.getElementById("loaderDiv").classList.add("d-none");
          document.getElementById("ResultsClass2").classList.add("d-none");
          document.getElementById("ResultsClass1").classList.add("d-none");
          document.getElementById("ResultsClass").classList.add("d-none");
        },
        error: function (error) {
          console.log("Error",error.responseText);
          alert(error.responseText);
          $("#loaderDiv").hide();
          $("#progressbarDiv").show();
          $("#buttons").show();
          $("#frontPage").hide();
          $("#PDF-content").hide();
          $(".title").hide();
          $("#optionalContent").hide();
          $(".results-main").show();
          $(".results").hide();
      },
      });

      console.log("second" + data);

  // html2pdf().set(opt).from(element).save();
 
}
function setProgressBar(curStep) {
  let percent = parseFloat(100 / 9) * curStep;
  percent = percent.toFixed();
  $(".progress-bar").css("width", percent + "%");
}


function mainCalculate(){
  document.getElementById("frontPage").classList.add("d-none");
  document.getElementById("mainCalculator").classList.remove("d-none");
}
