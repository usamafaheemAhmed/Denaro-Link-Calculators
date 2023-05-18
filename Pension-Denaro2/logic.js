

let shof, shop, snhof, snhop, chof, chop, cnhof, cnhop, db_sfd, db_sfr, db_sod, db_sor, db_cfd, db_cfr, db_cod, db_cor, divFactor, redRate, sfort, sphar, spen, sclean, cfort, cphar, cpen, cclean;
let sifp, sipp, srf, cifp, cipp, crf, wfn, whfn;

$(document).ready(function () {
    $("#progressbar2").hide();
    $("#step-2").hide();
    hideSteps();
    relationship(1);
    homeOptions(0);
    homeloan(0);
    loanOnFunds(0);
    otherPropertyOptions(0);
    rentOptions(0);
    propertyLoan(0);
    giftOptions(0);
    giftOptionsExtended(0);
    gFatherIncomeOptions(0);
    yourOtherIncomeOptions(0);
    otherIncomeOptions(0);
    businessIncomeOptions(0);
    workingIncomeOptions(0);
    $("i").tooltip();

    $.ajax({
        url: 'get.php',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            console.log(result,"result");
            let a = result.a;
            let s = a.a1;
            let c = a.a2;
            shof = parseFloat(s.homeOwnerFull), shop = parseFloat(s.homeOwnerPart), snhof = parseFloat(s.nonHomeOwnerFull), snhop = parseFloat(s.nonHomeOwnerPart);
            chof = parseFloat(c.homeOwnerFull), chop = parseFloat(c.homeOwnerPart), cnhof = parseFloat(c.nonHomeOwnerFull), cnhop = parseFloat(c.nonHomeOwnerPart);

            // alert(chof+":chof\n"+chop+"chop\n"+cnhof+"cnhof\n"+cnhop+"cnhop\n");

            let fd = result.d;
            s = fd.a1
            c = fd.a2
            db_sfd = parseFloat(s.fd), db_sfr = parseFloat(s.fr), db_sod = parseFloat(s.od), db_sor = parseFloat(s.or);
            db_cfd = parseFloat(c.fd), db_cfr = parseFloat(c.fr), db_cod = parseFloat(c.od), db_cor = parseFloat(c.or);
            
            let rB = result.reduced_by;
            divFactor = parseFloat(rB.factor);
            redRate = parseFloat(rB.rate);

            let AP = result.actual_payment;
            s = AP.a1;
            c = AP.a2;
            sfort = parseFloat(s.fort), sphar = parseFloat(s.phar), spen = parseFloat(s.pen), sclean = parseFloat(s.clean);
            cfort = parseFloat(c.fort), cphar = parseFloat(c.phar), cpen = parseFloat(c.pen), cclean = parseFloat(c.clean);

            let IT = result.income_test;
            s = IT.a1;
            c = IT.a2;
            sifp = parseFloat(s.ifp), sipp = parseFloat(s.ipp), srf = parseFloat(s.rf), cifp = parseFloat(c.ifp), cipp = parseFloat(c.ipp), crf = parseFloat(c.rf);

            let wB = result.work_bonus;
            wfn = parseFloat(wB.fn);
            whfn = parseFloat(wB.hfn);
        }
    });
});


let toComma = (x) =>
    "$" +
    Math.ceil(x)
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function hideSteps() {
    for (let i = 1; i <= 11; i++) {
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

function showStep() {
    $("#step-2").show(750);
    $("#step-1").hide();
    $("#step-3").hide();
}

function hideStep() {

    step(2);
    $("#step-2").hide();
}

function hideStep2() {
    $("#step-1").show(750);
    $("#step-2").hide();
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

    let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single
    let wifeDOB = $('input[id="wifeDOB"]').val();
    if (relationshipStatus === "2" && !wifeDOB) {
        alert("Partner Date of Birth is Required");
        return false;
    }
    $("#DOB").text(getFormattedDate(husbandDOB));
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

function homeOptions(number) {
    if (number == 0) {
        $(".home2Acres").hide(500);
        $(".home2Acres2").hide(500);
        $("#home2Acres").val(0);
        $("#homeOwner").text("No");
    } else {
        $(".home2Acres").show(500);

        $("#homeOwner").text("Yes");
    }
}

function homeloan(number) {
    if (number == 0) {
        $(".homeLoanOptions").hide(500);
        $("#homeLoan").val(0);
    } else {
        $(".homeLoanOptions").show(500);
    }
}

function giftOptions(number) {
    if (number == 0) {
        $(".giftOptionsExtended").hide(500);
        $("#giftBTN").show(500);
        $("#giftedAsset").text("No");
    } else {
        $(".giftOptionsExtended").show(500);
        $("#giftBTN").show(500);
        $("#giftedAsset").text("Yes");
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

function homeOptions2(number) {
    if (number == 0) {
        $(".home2Acres2").hide(500);
        $("#home2Acres").val(0);
        $("#homeBTN").show();

        $("#greaterThan2Acre").text("No");
    } else {
        $(".home2Acres2").show(500);
        $("#homeBTN").hide();
        $("#greaterThan2Acre").text("Yes");
    }
}

function loanOnFunds(number) {
    if (number == 0) $("#loanOnFundsDiv").hide(500);
    else $("#loanOnFundsDiv").show(500);
}
function otherPropertyOptions(number) {
    if (number == 0) $(".secondHome").hide(500);
    else $(".secondHome").show(500);
}

function propertyLoan(number) {
    if (number == 0) $(".propertyLoan").hide(500);
    else $(".propertyLoan").show(500);
}
function otherIncomeOptions(number) {
    if (number == 0) $(".otherIncomeOptions").hide(500);
    else $(".otherIncomeOptions").show(500);
}

function businessIncomeOptions(number) {
    if (number == 0) $(".businessIncomeOptions").hide(500);
    else $(".businessIncomeOptions").show(500);
}

function rentOptions(number) {
    if (number == 0) $(".rentOptions").hide(500);
    else $(".rentOptions").show(500);
}
function gFatherIncomeOptions(number) {
    if (number == 0) $(".gfatherIncomeOptions").hide(500);
    else $(".gfatherIncomeOptions").show(500);
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
    clientWorkBonus = 0,
    partnerWorkBonus = 0;
function getResults() {
    var assetLowerLimit = 0,
        incomeLowerLimit = 0,
        incomeHigherLimit = 0,
        assetHigherLimit = 0,
        pensionPayment = 0,
        pensionSupplement = 0,
        cleanEnergy = 0;
    var dividingFactor = divFactor,
        excessIncome = 0,
        excessIncomeCombined = 0,
        totalIncome = 0,
        totalIncomeCombined = 0,
        totalAssets = 0,
        totalAssetsCombined = 0,
        excessAssets = 0,
        excessAssetsCombined = 0,
        allPayment = 0,
        fortnightPayment = sfort,
        fortnightPaymentCombined = cfort,
        reductionRate = redRate,
        underAssetTest = 0,
        clientPayment = 0,
        pensionReductionPA = 0,
        incomeReductionPA = 0;
 

    let homeLoanAmount = document.getElementById("homeLoan").value;
    $("#homeLoanAmount").text("$" + homeLoanAmount);

    let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); 
    let husbandDOB = $('input[id="husbandDOB"]').val();
    let wifeDOB = $('input[id="wifeDOB"]').val();
    let homeOwner = $('input[name="home"]:checked').val(); 

    if (relationshipStatus === "1") {
        let rel, hOwner;
        rel = "Single";
        pensionSupplement = sphar * 26;
        pensionPayment = spen * 26;
        cleanEnergy = sclean * 26;

        isEligible = verifyAge(husbandDOB);

          if (homeOwner === "1") {
            assetLowerLimit = shof;
              assetHigherLimit = shop;
            hOwner = "Yes";
        } else {
            assetLowerLimit = snhof;
                assetHigherLimit = snhop;
            hOwner = "No";
        }

        incomeLowerLimit = sifp * 26;
        incomeHigherLimit = sipp * 26;
        
        // alert(incomeLowerLimit);
        // alert(incomeHigherLimit);
        
        totalAssets = getSinglePersonAssets(relationshipStatus);
        totalIncome = getSinglePersonIncome(relationshipStatus);

        excessAssets = totalAssets <= assetLowerLimit ? 0 : totalAssets - assetLowerLimit;
        excessIncome = totalIncome <= incomeLowerLimit ? 0 : totalIncome - incomeLowerLimit;

        clientPayment = pensionPayment;
        pensionReductionPA = (excessAssets / dividingFactor) * (reductionRate * 26);
        incomeReductionPA = excessIncome * srf;

        let AssetTestReduction = pensionReductionPA;
        let IncomeTestReduction = incomeReductionPA;

        underAssetTest = clientPayment - AssetTestReduction < 0 ? 0 : clientPayment - AssetTestReduction;

        var underIncomeTestSingle = clientPayment - IncomeTestReduction < 0 ? 0 : clientPayment - IncomeTestReduction;

        allPayment = underAssetTest > underIncomeTestSingle ? underIncomeTestSingle : underAssetTest;

        allPayment += cleanEnergy;

        fortnightPayment = allPayment / 26;

        document.getElementById("isHomeOwner").innerHTML = hOwner;
        document.getElementById("relationship").innerHTML = rel;

        document.getElementById("ALower").innerHTML = toComma(assetLowerLimit);
        document.getElementById("ILower").innerHTML = toComma(incomeLowerLimit);
        document.getElementById("AHigher").innerHTML = toComma(assetHigherLimit);
        document.getElementById("IHigher").innerHTML = toComma(incomeHigherLimit);

        document.getElementById("AExcess").innerHTML = toComma(excessAssets);
        document.getElementById("AAssessable").innerHTML = toComma(totalAssets);

        document.getElementById("IAssessable").innerHTML = toComma(totalIncome);
        document.getElementById("IExcess").innerHTML = toComma(excessIncome);
        
        // --------------------------------TesT--------------------------------
                document.getElementById("isHomeOwner2").innerHTML = hOwner;
        document.getElementById("relationship2").innerHTML = rel;

        document.getElementById("ALower2").innerHTML = toComma(assetLowerLimit);
        document.getElementById("ILower2").innerHTML = toComma(incomeLowerLimit);
        document.getElementById("AHigher2").innerHTML = toComma(assetHigherLimit);
        document.getElementById("IHigher2").innerHTML = toComma(incomeHigherLimit);

        document.getElementById("AExcess2").innerHTML = toComma(excessAssets);
        document.getElementById("AAssessable2").innerHTML = toComma(totalAssets);

        document.getElementById("IAssessable2").innerHTML = toComma(totalIncome);
        document.getElementById("IExcess2").innerHTML = toComma(excessIncome);
        
        
        // --------------------------------------------------------------------
        
        

        if (isEligible === "Yes") {
                $(".fortnight").text(toComma(fortnightPayment));
            $(".fortnightAnnual").text(toComma(fortnightPayment * 26));
            $("#optionalContent").hide();
        } else {
               $(".fortnight").text(0);
            $(".fortnightAnnual").text(0);
            $("#optionalContent").hide();
        }
    } else {
        let assetLowerLimitCombined = 0,
            assetHigherLimitCombined = 0;

        let rel2, hOwner2;
        rel2 = "Couple";

        pensionSupplement = cphar * 26;
        pensionPayment = cpen * 26;
        cleanEnergy = cclean * 26;

        isEligible = verifyAge(husbandDOB);
        isWifeEligible = verifyAge(wifeDOB);

        if (homeOwner === "1") {
            assetLowerLimitCombined = chof;
               assetHigherLimitCombined = chop;
            hOwner2 = "Yes";
        } else {
            assetLowerLimitCombined = cnhof;
               assetHigherLimitCombined = cnhop;
            hOwner2 = "No";
        }

        let incomeLowerLimitCombined = cifp * 26;
        let incomeHigherLimitCombined = cipp * 26;

        // alert(incomeHigherLimitCombined);
        // alert(incomeLowerLimitCombined);


        totalAssetsCombined = getSinglePersonAssets(relationshipStatus);
        totalIncomeCombined = getSinglePersonIncome(relationshipStatus);

        excessAssetsCombined = totalAssetsCombined <= assetLowerLimitCombined ? 0 : totalAssetsCombined - assetLowerLimitCombined;
        excessIncomeCombined = totalIncomeCombined <= incomeLowerLimitCombined ? 0 : totalIncomeCombined - incomeLowerLimitCombined;

        clientPayment = pensionPayment;

        pensionReductionPA = (excessAssetsCombined / dividingFactor) * reductionRate * 26;
        pensionReductionPA = pensionReductionPA / 2;

        incomeReductionPA = (excessIncomeCombined * crf) / 2;

        let IncomeTestReduction = incomeReductionPA;

        let AssetTestReduction = pensionReductionPA;

        underAssetTest = clientPayment - AssetTestReduction < 0 ? 0 : clientPayment - AssetTestReduction;

        let underIncomeTest = clientPayment - IncomeTestReduction < 0 ? 0 : clientPayment - IncomeTestReduction;

        allPayment = underAssetTest > underIncomeTest ? underIncomeTest : underAssetTest;

        allPayment += cleanEnergy;

        fortnightPaymentCombined = allPayment;

        document.getElementById("relationship").innerHTML = rel2;
        document.getElementById("isHomeOwner").innerHTML = hOwner2;

        document.getElementById("relationship2").innerHTML = rel2;
        document.getElementById("isHomeOwner2").innerHTML = hOwner2;

        document.getElementById("ALower").innerHTML = toComma(assetLowerLimitCombined);
        document.getElementById("ILower").innerHTML = toComma(incomeLowerLimitCombined);
        document.getElementById("AHigher").innerHTML = toComma(assetHigherLimitCombined);
        document.getElementById("IHigher").innerHTML = toComma(incomeHigherLimitCombined);

        document.getElementById("ALower2").innerHTML = toComma(assetLowerLimitCombined);
        document.getElementById("ILower2").innerHTML = toComma(incomeLowerLimitCombined);
        document.getElementById("AHigher2").innerHTML = toComma(assetHigherLimitCombined);
        document.getElementById("IHigher2").innerHTML = toComma(incomeHigherLimitCombined);

        document.getElementById("AExcess").innerHTML = toComma(excessAssetsCombined);
        document.getElementById("AAssessable").innerHTML = toComma(totalAssetsCombined);

        document.getElementById("IAssessable").innerHTML = toComma(totalIncomeCombined);
        document.getElementById("IExcess").innerHTML = toComma(excessIncomeCombined);

        document.getElementById("AExcess2").innerHTML = toComma(excessAssetsCombined);
        document.getElementById("AAssessable2").innerHTML = toComma(totalAssetsCombined);

        document.getElementById("IAssessable2").innerHTML = toComma(totalIncomeCombined);
        document.getElementById("IExcess2").innerHTML = toComma(excessIncomeCombined);

        if (isEligible === "Yes" && isWifeEligible === "Yes") {
                 $(".fortnight").text(toComma((fortnightPaymentCombined / 26) * 2));
            $(".fortnightAnnual").text(toComma(fortnightPaymentCombined * 2));
            $("#optionalContent").hide();
        } else if (isEligible === "Yes" || isWifeEligible === "Yes") {
                $(".fortnight").text(toComma(fortnightPaymentCombined / 26));
            $(".fortnightAnnual").text(toComma(fortnightPaymentCombined));
            $("#optionalContent").hide();
        } else {
               $(".fortnight").text(toComma(0));
            $(".fortnightAnnual").text(toComma(0));
            $("#optionalContent").hide();
        }
    }
}

let financialAssets = 0,
    wifeFinancialAssets = 0;
let superAssets = 0,
    wifeSuperAssets = 0;
function getSinglePersonAssets(status) {
    let cars = parseFloat(document.getElementById("husbandCars").value.replace("$", "").replace(/,/g, "")) || 0;
    let wifeCars = parseFloat(document.getElementById("wifeCars").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#car").text(toComma(cars));
    $("#car2").text(toComma(wifeCars));

    let houseHold = parseFloat(document.getElementById("husbandHousehold").value.replace("$", "").replace(/,/g, "")) || 0;
    let boat = parseFloat(document.getElementById("husbandBoat").value.replace("$", "").replace(/,/g, "")) || 0;
    let caravan = parseFloat(document.getElementById("husbandCaravan").value.replace("$", "").replace(/,/g, "")) || 0;
    let otherAsset = parseFloat(document.getElementById("husbandOtherAssets").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#content").text(toComma(houseHold));
    $("#boat").text(toComma(boat));
    $("#caravan").text(toComma(caravan));
    $("#others").text(toComma(otherAsset));

    let lifestyleAssets = cars + houseHold + boat + caravan + otherAsset; //personalAsset in sheet

    let savingsAccounts = parseFloat(document.getElementById("husbandSavingsAccounts").value.replace("$", "").replace(/,/g, "")) || 0;
    let portfolio = parseFloat(document.getElementById("husbandPortfolio").value.replace("$", "").replace(/,/g, "")) || 0;
    let funds = parseFloat(document.getElementById("husbandFunds").value.replace("$", "").replace(/,/g, "")) || 0;

    let wifeSavingsAccounts = parseFloat(document.getElementById("wifeSavingsAccounts").value.replace("$", "").replace(/,/g, "")) || 0;
    let wifePortfolio = parseFloat(document.getElementById("wifePortfolio").value.replace("$", "").replace(/,/g, "")) || 0;
    let wifeFunds = parseFloat(document.getElementById("wifeFunds").value.replace("$", "").replace(/,/g, "")) || 0;

    financialAssets = funds + portfolio + savingsAccounts;

    wifeFinancialAssets = wifeFunds + wifePortfolio + wifeSavingsAccounts;

    let superAnnaution = parseFloat(document.getElementById("husbandSuperAnnaution").value.replace("$", "").replace(/,/g, "")) || 0;
    let pension = parseFloat(document.getElementById("husbandPension").value.replace("$", "").replace(/,/g, "")) || 0;

    let wifeSuperAnnaution = parseFloat(document.getElementById("wifeSuperAnnaution").value.replace("$", "").replace(/,/g, "")) || 0;
    let wifePension = parseFloat(document.getElementById("wifePension").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#savings").text(toComma(savingsAccounts));
    $("#savings2").text(toComma(wifeSavingsAccounts));

    $("#Superannuation").text(toComma(superAnnaution));
    $("#Superannuation2").text(toComma(wifeSuperAnnaution));

    $("#managedFunds").text(toComma(funds));
    $("#managedFunds2").text(toComma(wifeFunds));

    $("#sharePortfolio").text(toComma(portfolio));
    $("#sharePortfolio2").text(toComma(wifePortfolio));

    $("#ABP").text(toComma(pension));
    $("#ABP2").text(toComma(wifePension));

    if (isEligible === "Yes") {
        superAssets = superAnnaution + pension;
    } else {
        superAssets = 0 + pension;
    }
    if (isWifeEligible === "Yes") {
        wifeSuperAssets = wifeSuperAnnaution + wifePension;
    } else {
        wifeSuperAssets = 0 + wifePension;
    }

    let gFatherPensions = parseFloat(document.getElementById("gFatherCurrentAccountValue").value.replace("$", "").replace(/,/g, "")) || 0;
    let wifeGFatherPensions = parseFloat(document.getElementById("wifeGFatherCurrentAccountValue").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#ab").text(toComma(gFatherPensions));
    $("#ab2").text(toComma(wifeGFatherPensions));

    let propertyValue = parseFloat(document.getElementById("secondPropertyValue").value.replace("$", "").replace(/,/g, "")) || 0;
    let home2Acres = parseFloat(document.getElementById("home2Acres").value.replace("$", "").replace(/,/g, "")) || 0;
    // alert(propertyValue);
    $("#marketValue").text(toComma(propertyValue));
    let rentalProperty = propertyValue + home2Acres;

    let companyAssets = parseFloat(document.getElementById("netAssets").value.replace("$", "").replace(/,/g, "")) || 0;
    let companyAssetsWife = parseFloat(document.getElementById("netAssetsWife").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#netAssets1").text(toComma(companyAssets));
    $("#netAssets2").text(toComma(companyAssetsWife));

    let investmentLoan = parseFloat(document.getElementById("husbandInvestmentLoan").value.replace("$", "").replace(/,/g, "")) || 0;
    let wifeInvestmentLoan = parseFloat(document.getElementById("wifeInvestmentLoan").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#investmentLoan").text(toComma(investmentLoan));
    $("#investmentLoan2").text(toComma(wifeInvestmentLoan));

    let propertyLoan = parseFloat(document.getElementById("secondPropertyLoan").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#loanBalance").text(toComma(propertyLoan));

    let combinedAssets = 0,
        totalAssetsSinglePerson = 0;
    totalAssetsSinglePerson = lifestyleAssets + financialAssets + superAssets + gFatherPensions + rentalProperty + companyAssets - (investmentLoan + propertyLoan);
    combinedAssets = totalAssetsSinglePerson + wifeCars + wifeFinancialAssets + companyAssetsWife + wifeGFatherPensions + wifeSuperAssets - wifeInvestmentLoan;

    if (status === "1") {
        return totalAssetsSinglePerson;
    } else {
        return combinedAssets;
    }
}

function getSinglePersonIncome(status) {
    let propertyRentalIncomeAnnual = 0;
    let secondPropertyRentFrequency = document.getElementById("secondPropertyRentFrequency").value;
    let propertyRentalIncome = parseFloat(document.getElementById("secondPropertyRentalIncome").value.replace("$", "").replace(/,/g, "")) || 0;
    let propertyAnnualExpense = parseFloat(document.getElementById("secondPropertyAnnualExpense").value.replace("$", "").replace(/,/g, "")) || 0;

    if (secondPropertyRentFrequency == "weekly") {
        propertyRentalIncomeAnnual = propertyRentalIncome * 52;
    } else {
        propertyRentalIncomeAnnual = propertyRentalIncome * 12;
    }

    console.log(propertyRentalIncomeAnnual);

    $("#rent").text(toComma(propertyRentalIncomeAnnual));
    $("#frequency").text(secondPropertyRentFrequency);
    $("#annualExpense").text(toComma(propertyAnnualExpense));

    let salaryIncome = parseFloat(document.getElementById("grossSalary").value.replace("$", "").replace(/,/g, "")) || 0;
    let grossSalaryWife = parseFloat(document.getElementById("grossSalaryWife").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#grossSalary1").text(toComma(salaryIncome));
    $("#grossSalary2").text(toComma(grossSalaryWife));

    if (salaryIncome < 7800 && grossSalaryWife < 7800) {
        salaryIncome = 0;
        grossSalaryWife = 0;
    } else if (salaryIncome < 7800) {
        salaryIncome = 0;
    } else if (grossSalaryWife < 7800) {
        grossSalaryWife = 0;
    }

    let otherIncome = parseFloat(document.getElementById("overseasIncome").value.replace("$", "").replace(/,/g, "")) || 0;
    let otherIncomeWife = parseFloat(document.getElementById("overseasIncomeWife").value.replace("$", "").replace(/,/g, "")) || 0;

    $("#overseasIncome1").text(toComma(otherIncome));
    $("#overseasIncome2").text(toComma(otherIncomeWife));

    let netProfit = parseFloat(document.getElementById("netProfit").value.replace("$", "").replace(/,/g, "")) || 0;
    let netProfitWife = parseFloat(document.getElementById("netProfitWife").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#netProfit1").text(toComma(netProfit));
    $("#netProfit2").text(toComma(netProfitWife));

    let yourAnnualPension = parseFloat(document.getElementById("yourAnnualPension").value.replace("$", "").replace(/,/g, "")) || 0; //b40 income other
    let yourAnnualPensionWife = parseFloat(document.getElementById("yourAnnualPensionWife").value.replace("$", "").replace(/,/g, "")) || 0; //b40 income other
    let gFatherAnnualPensionWife = parseFloat(document.getElementById("gFatherAnnualPensionWife").value.replace("$", "").replace(/,/g, "")) || 0; //b37 other
    let gFatherAnnualPension = parseFloat(document.getElementById("gFatherAnnualPension").value.replace("$", "").replace(/,/g, "")) || 0; //b37 other

    $("#app").text(toComma(yourAnnualPension));
    $("#app2").text(toComma(yourAnnualPensionWife));

    $("#apa2").text(toComma(gFatherAnnualPensionWife));
    $("#apa").text(toComma(gFatherAnnualPension));

    let netRental = propertyRentalIncomeAnnual - propertyAnnualExpense;
    netRental = netRental <= 0 ? 0 : netRental;

    let totalIncome = netRental + salaryIncome + otherIncome + netProfit + yourAnnualPension + gFatherAnnualPension;
    let totalIncomeWife = gFatherAnnualPensionWife + yourAnnualPensionWife + otherIncomeWife + netProfitWife + grossSalaryWife;

    let yourAnnualDeductible = parseFloat(document.getElementById("yourAnnualDeductible").value.replace("$", "").replace(/,/g, "")) || 0; //
    let yourAnnualDeductibleWife = parseFloat(document.getElementById("yourAnnualDeductibleWife").value.replace("$", "").replace(/,/g, "")) || 0; //

    let gFatherAnnualDeductible = parseFloat(document.getElementById("gFatherAnnualDeductible").value.replace("$", "").replace(/,/g, "")) || 0; //
    let gFatherAnnualDeductibleWife = parseFloat(document.getElementById("gFatherAnnualDeductibleWife").value.replace("$", "").replace(/,/g, "")) || 0; //

    $("#ada").text(toComma(yourAnnualDeductible));
    $("#adaG").text(toComma(gFatherAnnualDeductible));
    $("#ada2").text(toComma(yourAnnualDeductibleWife));
    $("#adaG2").text(toComma(gFatherAnnualDeductibleWife));

    //deductible pension income
    let deductiblePension1 = yourAnnualPension - yourAnnualDeductible <= 0 ? yourAnnualPension : yourAnnualDeductible;
    let deductiblePension2 = gFatherAnnualPension - gFatherAnnualDeductible <= 0 ? gFatherAnnualPension : gFatherAnnualDeductible;

    let deductiblePensionWife1 = yourAnnualPensionWife - yourAnnualDeductibleWife <= 0 ? yourAnnualPensionWife : yourAnnualDeductibleWife;

    let deductiblePensionWife2 = gFatherAnnualPensionWife - gFatherAnnualDeductibleWife <= 0 ? gFatherAnnualPensionWife : gFatherAnnualDeductibleWife;

    let deductiblePension = deductiblePension1 + deductiblePension2;
    let deductiblePensionWife = deductiblePensionWife1 + deductiblePensionWife2;

    if (salaryIncome > 0 && isEligible === "Yes") {
        clientWorkBonus = whfn * 26;
    } else {
        clientWorkBonus = 0;
    }

    if (grossSalaryWife > 0 && isWifeEligible === "Yes") {
        partnerWorkBonus = whfn * 26;
    } else {
        partnerWorkBonus = 0;
    }

    if (status === "1") {
        let totalFinancialAssets = financialAssets + superAssets;
        let allowanceThreshold = db_sfd;
        let deemedIncome = totalFinancialAssets < allowanceThreshold ? totalFinancialAssets * (db_sfr / 100) : allowanceThreshold * (db_sfr / 100) + (totalFinancialAssets - allowanceThreshold) * (db_sor / 100);

        let totalIncomeSinglePerson = totalIncome + deemedIncome - (clientWorkBonus + deductiblePension);
        return totalIncomeSinglePerson;
    } else {
        let totalFinancialAssets = financialAssets + superAssets + wifeSuperAssets + wifeFinancialAssets;
        let allowanceThreshold = db_cfd;
        let deemedIncome = totalFinancialAssets < allowanceThreshold ? totalFinancialAssets * (db_cfr / 100) : allowanceThreshold * (db_cfr / 100) + (totalFinancialAssets - allowanceThreshold) * (db_cor / 100);
        let totalIncomeCombined = totalIncome + totalIncomeWife + deemedIncome - (clientWorkBonus + deductiblePension + deductiblePensionWife + partnerWorkBonus);
        return totalIncomeCombined;
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
    step(11);

    $("#PDF-content").hide();
    $("#optionalContent").hide();
}

function getPDF() {
    
    document.getElementById("emailSubmit").innerHTML= "Sending...";
    setTimeout(function(){ emailSending(); }, 500);
}

function emailSending(){
    let nameClient = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let emailClient = document.getElementById("email").value;

      $("#result").addClass("active1");
    

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
    step(11);
    $("#PDF-content").hide();
    getResults();
    $("#staticBackdrop").modal("hide");

    
    $("#loaderDiv").show();
    $("#progressbarDiv").hide();
    $("#optionalContent").hide();
    $("#buttons").show();
    
    $(".title").hide();


        let newData = {
        name : nameClient,
        lastName: lastName,
        email: emailClient,
        CalName: 'Pension-Denaro',
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
                // alert(error+" "+mailChimpErrorFlag);
            },
        });
        
            // alert("usama faheem ahemd");

            $("html, body").animate(
                {
                    scrollTop: $("#loaderDiv").offset().top,
                },
                300
            );

            let pdf = PDFFile();
            // alert(pdf);
            
            // alert("usama faheem ahemd");
            
            
            let data = {
                nameClient: nameClient,
                emailClient: emailClient,
                pdfFile: pdf, 
            };


                $.ajax({
                    type: "POST",
                    url: "mail.php",
                    data: data,
                    success: function (data) {
                        console.log(data);
                        alert("Email has been sent successfully!");
                        $("#loaderDiv").hide();
                        $("#progressbarDiv").show();
                        $("#optionalContent").hide();
                        $("#buttons").show();
                        $("#PDF-content").hide();
                        $(".title").hide();
                        document.getElementById("emailSubmit").innerHTML= "Send";
                    },
                    error: function (error) {
                        console.log("Error");
                        alert(error.responseText);
                        $("#loaderDiv").hide();
                        $("#progressbarDiv").show();
                        $("#optionalContent").hide();
                        $("#buttons").show();
                        $("#PDF-content").hide();
                        $(".title").hide();
                        document.getElementById("emailSubmit").innerHTML= "Send";
                    },
                });

}

function setProgressBar(curStep) {
    var percent = parseFloat(100 / 9) * curStep;
    percent = percent.toFixed();
    $(".progress-bar").css("width", percent + "%");
}





function mainCalculate(){
    document.getElementById("frontPage").classList.add("d-none");
    document.getElementById("mainCalculator").classList.remove("d-none");
}



    
    
    
    