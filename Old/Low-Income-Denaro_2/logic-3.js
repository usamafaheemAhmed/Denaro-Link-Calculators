$(document).ready(function () {
    $('#progressbar2').hide();
    relationship(1);
    hideSteps();
    homeOptions(0);
    loanOnFunds(0);
    otherPropertyOptions(0);
    rentOptions(0);
    propertyLoan(0);
    gFatherIncomeOptions(0);
    yourOtherIncomeOptions(0);
    otherIncomeOptions(0);
    businessIncomeOptions(0);
    workingIncomeOptions(0);
    // getResults();
    $("i").tooltip();
});


function hideSteps() {

    for (let i=1;i<=10;i++){

        $("#step-"+i).hide();
    }

}

function format(input) {
    var nStr = input.value + '';
    nStr = nStr.replace(/\,/g, "");
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    input.value = x1 + x2;
}

function relationship(rValue){


    if(rValue == 1){
        $("div.wife").hide(400);
    }
    else {
        $("div.wife").show(450);
    }

}


function step(number){

    let husbandDOB = $('input[id="husbandDOB"]').val();

    if (!husbandDOB){
        alert('Your Date of Birth is Required');
        return false;
    }

    let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single
    let wifeDOB = $('input[id="wifeDOB"]').val();
    if (relationshipStatus === '2' && !wifeDOB){

            alert('Partner Date of Birth is Required');
            return false;

    }

    $('#progressbar li').eq(number).addClass("active1");
    $('#progressbar li').eq(number+1).removeClass("active1");

    if (number > 5){
        $('#progressbar2 li').eq(number-6).addClass("active1");
        $('#progressbar2 li').eq(number-5).removeClass("active1");
    }


    $('#step-'+(number+1)).hide();
    $('#step-'+number).show(750);
    $('#step-'+(number-1)).hide();

    if (number == 6){
        $('#progressbar2').show();
        $('#progressbar').hide();
    }
    else if(number == 5){
        $('#progressbar2').hide();
        $('#progressbar').show();
    }



    setProgressBar(number);

}

function homeOptions(number) {


    if (number == 0) {
        $(".home2Acres").hide(500);
        $(".home2Acres2").hide(500);
        $("#home2Acres").val(0);

    } else
        $(".home2Acres").show(500);

}


function homeOptions2(number) {


    if (number == 0) {
        $(".home2Acres2").hide(500);
        $("#home2Acres").val(0);
        $("#homeBTN").show();
    } else{
        $(".home2Acres2").show(500);
        $("#homeBTN").hide();

    }


}

function loanOnFunds(number){


    if (number == 0)
        $("#loanOnFundsDiv").hide(500);
    else
        $("#loanOnFundsDiv").show(500);

}
function otherPropertyOptions(number){


    if (number == 0)
        $(".secondHome").hide(500);
    else
        $(".secondHome").show(500);

}

function propertyLoan(number){


    if (number == 0)
        $(".propertyLoan").hide(500);
    else
        $(".propertyLoan").show(500);

}
function otherIncomeOptions(number){


    if (number == 0)
        $(".otherIncomeOptions").hide(500);
    else
        $(".otherIncomeOptions").show(500);

}

function businessIncomeOptions(number){


    if (number == 0) {
        $(".businessIncomeOptions").hide(500);
        $("#results").show(500);
    }
    else {
        $(".businessIncomeOptions").show(500);
        $("#results").hide(500);
    }
}

function rentOptions(number){


    if (number == 0)
        $(".rentOptions").hide(500);
    else
        $(".rentOptions").show(500);

}
function gFatherIncomeOptions(number){


    if (number == 0)
        $(".gfatherIncomeOptions").hide(500);
    else
        $(".gfatherIncomeOptions").show(500);

}
function yourOtherIncomeOptions(number){


    if (number == 0)
        $(".yourOtherIncomeOptions").hide(500);
    else
        $(".yourOtherIncomeOptions").show(500);

}
function workingIncomeOptions(number){


    if (number == 0)
        $(".workingIncomeOptions").hide(500);
    else
        $(".workingIncomeOptions").show(500);

}
var isEligible,isWifeEligible,clientWorkBonus = 0,partnerWorkBonus = 0;
function getResults() {

    var assetLowerLimit = 0, incomeLowerLimit = 0, incomeHigherLimit = 0, assetHigherLimit = 0,pensionPayment = 0,pensionSupplement = 0 , cleanEnergy = 0;
    var dividingFactor = 1000, excessIncome=0,excessIncomeCombined=0,totalIncome=0,totalIncomeCombined=0,totalAssets=0,totalAssetsCombined=0,excessAssets = 0,excessAssetsCombined = 0, allPayment = 0,
        fortnightPayment = 0,fortnightPaymentCombined=0,reductionRate = 3,underAssetTest = 0,clientPayment = 0,pensionReductionPA = 0,incomeReductionPA = 0;
    //asset test

    let relationshipStatus = $('input[name="relationshipStatus"]:checked').val(); //1 is single
    let husbandDOB = $('input[id="husbandDOB"]').val();
    let wifeDOB = $('input[id="wifeDOB"]').val();
    let homeOwner = $('input[name="home"]:checked').val(); //1 is home-owner

    //if single
    if (relationshipStatus === "1"){

        let rel,hOwner;
        rel = 'Single';
        //check elig
        pensionSupplement = 72.70 * 26;
        pensionPayment = 973.5 * 26;
        cleanEnergy = 13.9 * 26;

        isEligible = verifyAge(husbandDOB);


        // if (isEligible === 'Yes') {
            //homeowner or not
            if (homeOwner === "1") {
                assetLowerLimit = 270500;
                assetHigherLimit = 599750;
                hOwner = 'Yes';
            } else {
                assetLowerLimit = 487000;
                assetHigherLimit = 816250;
                hOwner = 'No';
            }


            incomeLowerLimit = 180 * 26;
            incomeHigherLimit = 2155.20 * 26;

            totalAssets = getSinglePersonAssets(relationshipStatus);
            totalIncome= getSinglePersonIncome(relationshipStatus);

            excessAssets = (totalAssets <= assetLowerLimit) ? 0 : totalAssets - assetLowerLimit;
            excessIncome = (totalIncome <= incomeLowerLimit) ? 0 :  totalIncome - incomeLowerLimit;


            clientPayment = pensionPayment;
            pensionReductionPA =  (excessAssets/dividingFactor) * (reductionRate * 26);
            incomeReductionPA =  excessIncome * 0.50;

            let AssetTestReduction = pensionReductionPA;
            let IncomeTestReduction = incomeReductionPA;

            underAssetTest = clientPayment - AssetTestReduction < 0 ? 0 : clientPayment - AssetTestReduction;

            var underIncomeTestSingle = clientPayment - IncomeTestReduction < 0 ? 0 : clientPayment - IncomeTestReduction;

            allPayment = underAssetTest > underIncomeTestSingle ?   underIncomeTestSingle : underAssetTest;


            allPayment += cleanEnergy;

            fortnightPayment = allPayment/26;


        document.getElementById('isHomeOwner').innerHTML = hOwner;
        document.getElementById('relationship').innerHTML = rel;

        document.getElementById('ALower').innerHTML = toComma(assetLowerLimit);
        document.getElementById('ILower').innerHTML = toComma(incomeLowerLimit);
        document.getElementById('AHigher').innerHTML = toComma(assetHigherLimit);
        document.getElementById('IHigher').innerHTML = toComma(incomeHigherLimit);

        document.getElementById('AExcess').innerHTML = toComma(excessAssets);
        document.getElementById('AAssessable').innerHTML = toComma(totalAssets);

        document.getElementById('IAssessable').innerHTML = toComma(totalIncome);
        document.getElementById('IExcess').innerHTML = toComma(excessIncome);

        if (isEligible === 'Yes') {
            document.getElementById('fortnight').innerHTML = toComma(fortnightPayment);
            document.getElementById('fortnightAnnual').innerHTML = toComma(fortnightPayment * 26);
            $('#optionalContent').show();
        }
        else {
            document.getElementById('fortnight').innerHTML = toComma(0);
            document.getElementById('fortnightAnnual').innerHTML = toComma(0);
            $('#optionalContent').hide();
        }


    }
    else{

        let assetLowerLimitCombined = 0, assetHigherLimitCombined = 0;

        let rel2,hOwner2;
        rel2 = 'Couple';
        //check elig
        pensionSupplement = 54.8 * 26;
        pensionPayment = 733.800 * 26;
        cleanEnergy = 10.5 * 26;

        isEligible = verifyAge(husbandDOB);
        isWifeEligible = verifyAge(wifeDOB);

        // if (isEligible === 'Yes' || isWifeEligible === 'Yes'){
            //homeowner or not
            if (homeOwner === "1"){
                assetLowerLimitCombined = 405000;
                assetHigherLimitCombined = 901500;
                hOwner2 = 'Yes';
            }
            else {
                assetLowerLimitCombined = 621500;
                assetHigherLimitCombined = 1118000;
                hOwner2 = 'No';
            }

           let incomeLowerLimitCombined = 320 * 26;
           let incomeHigherLimitCombined = 3297.60 * 26;

            totalAssetsCombined = getSinglePersonAssets(relationshipStatus);
            totalIncomeCombined= getSinglePersonIncome(relationshipStatus);

            excessAssetsCombined = (totalAssetsCombined <= assetLowerLimitCombined) ? 0 : totalAssetsCombined - assetLowerLimitCombined;
            excessIncomeCombined = (totalIncomeCombined <= incomeLowerLimitCombined) ? 0 :  totalIncomeCombined - incomeLowerLimitCombined;

            clientPayment = pensionPayment;

            pensionReductionPA =  (excessAssetsCombined/dividingFactor) * reductionRate * 26;
            pensionReductionPA =  pensionReductionPA/2;

            incomeReductionPA =  ((excessIncomeCombined * 0.5))/2;

            let IncomeTestReduction = incomeReductionPA;


            let AssetTestReduction = pensionReductionPA;

            underAssetTest = (clientPayment - AssetTestReduction) < 0 ? 0 : clientPayment - AssetTestReduction;

            let underIncomeTest =  (clientPayment - IncomeTestReduction) < 0 ? 0 : clientPayment - IncomeTestReduction;


             allPayment = underAssetTest > underIncomeTest ? underIncomeTest : underAssetTest ;

            allPayment += cleanEnergy


            fortnightPaymentCombined = allPayment;



            document.getElementById('relationship').innerHTML = rel2;
            document.getElementById('isHomeOwner').innerHTML = hOwner2;

            document.getElementById('ALower').innerHTML = toComma(assetLowerLimitCombined);
            document.getElementById('ILower').innerHTML = toComma(incomeLowerLimitCombined);
            document.getElementById('AHigher').innerHTML = toComma(assetHigherLimitCombined);
            document.getElementById('IHigher').innerHTML = toComma(incomeHigherLimitCombined);

            document.getElementById('AExcess').innerHTML = toComma(excessAssetsCombined);
            document.getElementById('AAssessable').innerHTML = toComma(totalAssetsCombined);

            document.getElementById('IAssessable').innerHTML = toComma(totalIncomeCombined);
            document.getElementById('IExcess').innerHTML = toComma(excessIncomeCombined);


                if (isEligible === 'Yes' && isWifeEligible === 'Yes'){
                    document.getElementById('fortnight').innerHTML = toComma((fortnightPaymentCombined/26) * 2);
                    document.getElementById('fortnightAnnual').innerHTML = toComma(fortnightPaymentCombined *2 );
                    $('#optionalContent').show();
                }
                else if (isEligible === 'Yes' || isWifeEligible === 'Yes'){
                    document.getElementById('fortnight').innerHTML = toComma(fortnightPaymentCombined/26);
                    document.getElementById('fortnightAnnual').innerHTML = toComma(fortnightPaymentCombined);
                    $('#optionalContent').show();
                }
                else {
                    document.getElementById('fortnight').innerHTML = toComma(0);
                    document.getElementById('fortnightAnnual').innerHTML = toComma(0 );
                    $('#optionalContent').hide();
                }



        }

}
let toComma = (x) => "$" + Math.ceil(x).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

let  financialAssets =0,wifeFinancialAssets =0;
let superAssets = 0,wifeSuperAssets = 0;



function getSinglePersonAssets(status){

    let cars = parseFloat(document.getElementById('husbandCars').value.replace('$','').replace(/,/g,'')) || 0;
    let wifeCars = parseFloat(document.getElementById('wifeCars').value.replace('$','').replace(/,/g,'')) || 0;


    let houseHold = parseFloat(document.getElementById('husbandHousehold').value.replace('$','').replace(/,/g,'')) || 0;
    let boat = parseFloat(document.getElementById('husbandBoat').value.replace('$','').replace(/,/g,'')) || 0;
    let caravan = parseFloat(document.getElementById('husbandCaravan').value.replace('$','').replace(/,/g,'')) || 0;
    let otherAsset = parseFloat(document.getElementById('husbandOtherAssets').value.replace('$','').replace(/,/g,'')) || 0;

    let lifestyleAssets = cars + houseHold + boat + caravan + otherAsset; //personalAsset in sheet

    let savingsAccounts = parseFloat(document.getElementById('husbandSavingsAccounts').value.replace('$','').replace(/,/g,'')) || 0;
    let portfolio = parseFloat(document.getElementById('husbandPortfolio').value.replace('$','').replace(/,/g,'')) || 0;
    let funds = parseFloat(document.getElementById('husbandFunds').value.replace('$','').replace(/,/g,'')) || 0;


    let wifeSavingsAccounts = parseFloat(document.getElementById('wifeSavingsAccounts').value.replace('$','').replace(/,/g,'')) || 0;
    let wifePortfolio = parseFloat(document.getElementById('wifePortfolio').value.replace('$','').replace(/,/g,'')) || 0;
    let wifeFunds = parseFloat(document.getElementById('wifeFunds').value.replace('$','').replace(/,/g,'')) || 0;

    financialAssets = funds + portfolio + savingsAccounts;

    wifeFinancialAssets = wifeFunds + wifePortfolio + wifeSavingsAccounts;


    let superAnnaution = parseFloat(document.getElementById('husbandSuperAnnaution').value.replace('$','').replace(/,/g,'')) || 0;
    let pension = parseFloat(document.getElementById('husbandPension').value.replace('$','').replace(/,/g,'')) || 0;

    let wifeSuperAnnaution = parseFloat(document.getElementById('wifeSuperAnnaution').value.replace('$','').replace(/,/g,'')) || 0;
    let wifePension = parseFloat(document.getElementById('wifePension').value.replace('$','').replace(/,/g,'')) || 0;


    if (isEligible === 'Yes'){
        superAssets = superAnnaution + pension;

    }
    else {
        superAssets = 0 + pension;

    }
    if (isWifeEligible === 'Yes'){

        wifeSuperAssets = wifeSuperAnnaution + wifePension;
    }
    else {

        wifeSuperAssets = 0 + wifePension;
    }


    let gFatherPensions= parseFloat(document.getElementById('gFatherCurrentAccountValue').value.replace('$','').replace(/,/g,'')) || 0;
    let wifeGFatherPensions= parseFloat(document.getElementById('wifeGFatherCurrentAccountValue').value.replace('$','').replace(/,/g,'')) || 0;

    let propertyValue = parseFloat(document.getElementById('secondPropertyValue').value.replace('$','').replace(/,/g,'')) || 0;
    let home2Acres = parseFloat(document.getElementById('home2Acres').value.replace('$','').replace(/,/g,'')) || 0;

    let rentalProperty = propertyValue + home2Acres;


    let companyAssets = parseFloat(document.getElementById('netAssets').value.replace('$','').replace(/,/g,'')) || 0;
    let companyAssetsWife = parseFloat(document.getElementById('netAssetsWife').value.replace('$','').replace(/,/g,'')) || 0;


    let investmentLoan = parseFloat(document.getElementById('husbandInvestmentLoan').value.replace('$','').replace(/,/g,'')) || 0;
    let wifeInvestmentLoan = parseFloat(document.getElementById('wifeInvestmentLoan').value.replace('$','').replace(/,/g,'')) || 0;


    let propertyLoan = parseFloat(document.getElementById('secondPropertyLoan').value.replace('$','').replace(/,/g,'')) || 0;

    let combinedAssets = 0, totalAssetsSinglePerson = 0;
    totalAssetsSinglePerson = (lifestyleAssets + financialAssets + superAssets + gFatherPensions + rentalProperty + companyAssets) - (investmentLoan + propertyLoan);
    combinedAssets = (totalAssetsSinglePerson + wifeCars + wifeFinancialAssets + companyAssetsWife + wifeGFatherPensions + wifeSuperAssets) - wifeInvestmentLoan;

    if (status === "1") {
         return totalAssetsSinglePerson;
    }
    else{

         return combinedAssets;
    }

}

function getSinglePersonIncome(status) {

    let propertyRentalIncomeAnnual = 0;
    let secondPropertyRentFrequency  = document.getElementById('secondPropertyRentFrequency').value;
    let propertyRentalIncome = parseFloat(document.getElementById('secondPropertyRentalIncome').value.replace('$', '').replace(/,/g, '')) || 0;
    let propertyAnnualExpense = parseFloat(document.getElementById('secondPropertyAnnualExpense').value.replace('$', '').replace(/,/g, '')) || 0;

    if (secondPropertyRentFrequency === 'weekly'){
        propertyRentalIncomeAnnual = propertyRentalIncome * 52;
    }
    else {
        propertyRentalIncomeAnnual = propertyRentalIncome * 12;
    }

    console.log(propertyRentalIncomeAnnual);

    let salaryIncome = parseFloat(document.getElementById('grossSalary').value.replace('$', '').replace(/,/g, '')) || 0;
    let grossSalaryWife = parseFloat(document.getElementById('grossSalaryWife').value.replace('$', '').replace(/,/g, '')) || 0;


    let otherIncome = parseFloat(document.getElementById('overseasIncome').value.replace('$', '').replace(/,/g, '')) || 0;
    let otherIncomeWife = parseFloat(document.getElementById('overseasIncomeWife').value.replace('$', '').replace(/,/g, '')) || 0;

    let netProfit = parseFloat(document.getElementById('netProfit').value.replace('$', '').replace(/,/g, '')) || 0;
    let netProfitWife = parseFloat(document.getElementById('netProfitWife').value.replace('$', '').replace(/,/g, '')) || 0;


    let yourAnnualPension = parseFloat(document.getElementById('yourAnnualPension').value.replace('$', '').replace(/,/g, '')) || 0; //b40 income other
    let yourAnnualPensionWife = parseFloat(document.getElementById('yourAnnualPensionWife').value.replace('$', '').replace(/,/g, '')) || 0; //b40 income other
    let gFatherAnnualPensionWife = parseFloat(document.getElementById('gFatherAnnualPensionWife').value.replace('$', '').replace(/,/g, '')) || 0; //b37 other
    let gFatherAnnualPension = parseFloat(document.getElementById('gFatherAnnualPension').value.replace('$', '').replace(/,/g, '')) || 0; //b37 other


    let netRental = (propertyRentalIncomeAnnual) - propertyAnnualExpense;
    netRental = (netRental <= 0) ? 0 : netRental;

    let totalIncome = netRental + salaryIncome + otherIncome + netProfit + yourAnnualPension + gFatherAnnualPension;
    let totalIncomeWife = gFatherAnnualPensionWife + yourAnnualPensionWife + otherIncomeWife + netProfitWife + grossSalaryWife;


    let yourAnnualDeductible = parseFloat(document.getElementById('yourAnnualDeductible').value.replace('$', '').replace(/,/g, '')) || 0; //
    let yourAnnualDeductibleWife = parseFloat(document.getElementById('yourAnnualDeductibleWife').value.replace('$', '').replace(/,/g, '')) || 0; //
    let gFatherAnnualDeductible = parseFloat(document.getElementById('gFatherAnnualDeductible').value.replace('$', '').replace(/,/g, '')) || 0; //
    let gFatherAnnualDeductibleWife = parseFloat(document.getElementById('gFatherAnnualDeductibleWife').value.replace('$', '').replace(/,/g, '')) || 0; //

    //deductible pension income
    let deductiblePension1 = yourAnnualPension - yourAnnualDeductible <= 0 ? yourAnnualPension : yourAnnualDeductible;
    let deductiblePension2 = gFatherAnnualPension - gFatherAnnualDeductible <= 0 ? gFatherAnnualPension : gFatherAnnualDeductible;

    let deductiblePensionWife1 = yourAnnualPensionWife - yourAnnualDeductibleWife <= 0 ? yourAnnualPensionWife : yourAnnualDeductibleWife;

    let deductiblePensionWife2 = gFatherAnnualPensionWife - gFatherAnnualDeductibleWife <= 0 ? gFatherAnnualPensionWife : gFatherAnnualDeductibleWife;

    let deductiblePension = deductiblePension1 + deductiblePension2;
    let deductiblePensionWife = deductiblePensionWife1 + deductiblePensionWife2;


    if (salaryIncome > 0 && isEligible === "Yes") {

        clientWorkBonus = 300 * 26

    } else {
        clientWorkBonus = 0;
    }

    if (grossSalaryWife > 0 && isWifeEligible === "Yes") {

        partnerWorkBonus = 300 * 26

    } else {
        partnerWorkBonus = 0;
    }




    if (status === "1") {
        let totalFinancialAssets = financialAssets + superAssets;
        let allowanceThreshold = 53600;
        let deemedIncome = totalFinancialAssets < allowanceThreshold ? totalFinancialAssets * 0.0025 : (allowanceThreshold * 0.0025) + ((totalFinancialAssets - allowanceThreshold) * .0225);

        let totalIncomeSinglePerson = (totalIncome + deemedIncome) - (clientWorkBonus + deductiblePension);
        return totalIncomeSinglePerson;

    }
    else {
        let totalFinancialAssets = financialAssets + superAssets + wifeSuperAssets + wifeFinancialAssets;
        let allowanceThreshold = 89000;
        let deemedIncome = totalFinancialAssets < allowanceThreshold ? totalFinancialAssets * 0.0025 : (allowanceThreshold * 0.0025) + ((totalFinancialAssets - allowanceThreshold) * .0225);
        let totalIncomeCombined = (totalIncome + totalIncomeWife + deemedIncome) - (clientWorkBonus + deductiblePension + deductiblePensionWife + partnerWorkBonus);
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

    if (age >= 65){
        if (dob <= '1952-30-6'){
            return  "Yes";
        }
        else if(dob <= '1953-31-12' && age>= 65.5){
            return  "Yes";
        }
        else if(dob <= '1955-30-6' && age>= 66){
            return  "Yes";
        }
        else if(dob <= '1956-31-12' && age>= 66.5){
            return  "Yes";
        }
        else if(dob >= '1957-1-1' && age>= 67){
            return  "Yes";
        }
        else {
            return 'no';
        }
    }
    else {
        return "No";
    }


}

function getPDF(){

    let nameClient = document.getElementById('name').value;
    let emailClient = document.getElementById('email').value;

    if (!nameClient || !emailClient){
        alert('Please fill name and email correctly.');
        return false;
    }
    $('#loaderDiv').show();
    $('.title').show();
    $('#progressbarDiv').hide();

        $('html, body').animate({
            scrollTop: $("#loaderDiv").offset().top
        }, 300);

    $('#optionalContent').hide();
    $('#buttons').hide();
    $('#PDF-content').show();

    let element = document.getElementById('step-10');
    let opt = {
        margin:       1,
        filename:     'Age-Pension-Calculator-Summary.pdf',
        image:        { type: 'jpeg', quality: 0.90 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'a4',orientation: 'portrait' }
    };
// New Promise-based usage:
    html2pdf().set(opt).from(element).toPdf().output('datauristring').then(function( pdfAsString ) {
        let data = {
            'fileDataURI': pdfAsString,
            'nameClient': nameClient,
            'emailClient': emailClient,
        };
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: data,
            success: function(data) {
                console.log(data);
                alert('Email Has Been Sent Successfully!');
                $('#loaderDiv').hide();
                $('#progressbarDiv').show();
                $('#optionalContent').show();
                $('#buttons').show();
                $('#PDF-content').hide();
                $('.title').hide();
            }
        });

        console.log('second'+ data);

    } );
    // html2pdf().set(opt).from(element).save();




}

function setProgressBar(curStep){
    var percent = parseFloat(100 / 10) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
        .css("width",percent+"%")
}
