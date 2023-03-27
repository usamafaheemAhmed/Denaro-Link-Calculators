let shof, shop, snhof, snhop, chof, chop, cnhof, cnhop, db_sfd, db_sfr, db_sod, db_sor, db_cfd, db_cfr, db_cod, db_cor;

$(document).ready(function() {
    $.ajax({
        url: 'get.php',
        type: 'GET',
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        success: function(result) {
            console.log(result);
            let a = result.a;
            let s = a.a1;
            let c = a.a2;
            shof = parseFloat(s.homeOwnerFull), shop = parseFloat(s.homeOwnerPart), snhof = parseFloat(s.nonHomeOwnerFull), snhop = parseFloat(s.nonHomeOwnerPart);
            chof = parseFloat(c.homeOwnerFull), chop = parseFloat(c.homeOwnerPart), snhof = parseFloat(c.nonHomeOwnerFull), cnhop = parseFloat(c.nonHomeOwnerPart);

            let fd = result.d;
            s = fd.a1
            c = fd.a2
            db_sfd = parseFloat(s.fd), db_sfr = parseFloat(s.fr), db_sod = parseFloat(s.od), db_sor = parseFloat(s.or);
            db_cfd = parseFloat(c.fd), db_cfr = parseFloat(c.fr), db_cod = parseFloat(c.od), db_cor = parseFloat(c.or);
            
        }
    });
    $("#progressbar2").hide(), $("#step-o2").hide(), hideSteps(), relationship(1), homeOptions(0), homeloan(0), loanOnFunds(0), otherPropertyOptions(0), rentOptions(0), propertyLoan(0), giftOptions(0), giftOptionsExtended(0), gFatherIncomeOptions(0), yourOtherIncomeOptions(0), otherIncomeOptions(0), businessIncomeOptions(0), workingIncomeOptions(0), $("i").tooltip()
});
let toComma = e => "$" + Math.ceil(e).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

function hideSteps() {
    for (let e = 1; e <= 10; e++) $("#step-" + e).hide()
}

function format(e) {
    var t = e.value + "";
    t = t.replace(/\,/g, ""), x = t.split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
    for (var o = /(\d+)(\d{3})/; o.test(x1);) x1 = x1.replace(o, "$1,$2");
    e.value = x1 + x2
}

function relationship(e) {
    1 == e ? $("div.wife").hide(400) : $("div.wife").show(450)
}

function showStep() {
    $("#step-o2").show(750), $("#step-1").hide(), $("#step-2").hide()
}

function hideStep() {
    step(2), $("#step-o2").hide()
}

function hideStep2() {
    $("#step-1").show(750), $("#step-o2").hide()
}

function getFormattedDate(e) {
    function t(e) {
        return e < 10 ? "0" + e : e
    }
    var o = new Date(e);
    return [t(o.getDate()), t(o.getMonth() + 1), o.getFullYear()].join("/")
}

function step(e) {
    let t = $('input[id="husbandDOB"]').val();
    if (!t) return alert("Your Date of Birth is Required"), !1;
    let o = $('input[name="relationshipStatus"]:checked').val(),
        n = $('input[id="wifeDOB"]').val();
    if ("2" === o && !n) return alert("Partner Date of Birth is Required"), !1;
    $("#DOB").text(getFormattedDate(t)), $("#DOB2").text(getFormattedDate(n)), $("#progressbar li").eq(e).addClass("active1"), $("#progressbar li").eq(e + 1).removeClass("active1"), e > 5 && ($("#progressbar2 li").eq(e - 6).addClass("active1"), $("#progressbar2 li").eq(e - 5).removeClass("active1")), $("#step-" + (e + 1)).hide(), $("#step-" + e).show(750), $("#step-" + (e - 1)).hide(), 6 == e ? ($("#progressbar2").show(), $("#progressbar").hide()) : 5 == e && ($("#progressbar2").hide(), $("#progressbar").show()), setProgressBar(e)
}

function homeOptions(e) {
    0 == e ? ($(".home2Acres").hide(500), $(".home2Acres2").hide(500), $("#home2Acres").val(0), $("#homeOwner").text("No")) : ($(".home2Acres").show(500), $("#homeOwner").text("Yes"))
}

function homeloan(e) {
    0 == e ? ($(".homeLoanOptions").hide(500), $("#homeLoan").val(0)) : $(".homeLoanOptions").show(500)
}

function giftOptions(e) {
    0 == e ? ($(".giftOptionsExtended").hide(500), $("#giftBTN").show(500), $("#giftedAsset").text("No")) : ($(".giftOptionsExtended").show(500), $("#giftBTN").show(500), $("#giftedAsset").text("Yes"))
}

function giftOptionsExtended(e) {
    0 == e ? ($(".giftOptionsExtendedEnds").hide(500), $("#giftBTN").show(500)) : ($(".giftOptionsExtendedEnds").show(500), $("#giftBTN").hide(500))
}

function homeOptions2(e) {
    0 == e ? ($(".home2Acres2").hide(500), $("#home2Acres").val(0), $("#homeBTN").show(), $("#greaterThan2Acre").text("No")) : ($(".home2Acres2").show(500), $("#homeBTN").hide(), $("#greaterThan2Acre").text("Yes"))
}

function loanOnFunds(e) {
    0 == e ? $("#loanOnFundsDiv").hide(500) : $("#loanOnFundsDiv").show(500)
}

function otherPropertyOptions(e) {
    0 == e ? $(".secondHome").hide(500) : $(".secondHome").show(500)
}

function propertyLoan(e) {
    0 == e ? $(".propertyLoan").hide(500) : $(".propertyLoan").show(500)
}

function otherIncomeOptions(e) {
    0 == e ? $(".otherIncomeOptions").hide(500) : $(".otherIncomeOptions").show(500)
}

function businessIncomeOptions(e) {
    0 == e ? $(".businessIncomeOptions").hide(500) : $(".businessIncomeOptions").show(500)
}

function rentOptions(e) {
    0 == e ? $(".rentOptions").hide(500) : $(".rentOptions").show(500)
}

function gFatherIncomeOptions(e) {
    0 == e ? $(".gfatherIncomeOptions").hide(500) : $(".gfatherIncomeOptions").show(500)
}

function yourOtherIncomeOptions(e) {
    0 == e ? $(".yourOtherIncomeOptions").hide(500) : $(".yourOtherIncomeOptions").show(500)
}

function workingIncomeOptions(e) {
    0 == e ? $(".workingIncomeOptions").hide(500) : $(".workingIncomeOptions").show(500)
}
var isEligible, isWifeEligible, clientWorkBonus = 0,
    partnerWorkBonus = 0;

function getResults() {
    var e = 0,
        t = 0,
        o = 0,
        n = 0,
        a = 0,
        s = 0,
        l = 0,
        r = 0,
        i = 0,
        m = 0,
        c = 0,
        d = 0,
        u = 0,
        p = 0,
        g = 0,
        h = 0,
        f = 0,
        I = 0,
        y = 0,
        E = 0,
        B = 0;
    let v = document.getElementById("homeLoan").value;
    $("#homeLoanAmount").text("$" + v);
    let C = $('input[name="relationshipStatus"]:checked').val(),
        x = $('input[id="husbandDOB"]').val(),
        A = $('input[id="wifeDOB"]').val(),
        F = $('input[name="home"]:checked').val();
    if ("1" === C) {
        let r, m;
        // e = Single/HomeOwner/Full
        // n = Single/HomeOwner/Part
        //
        r = "Single", 1890.2, a = 25311, s = 13.9 * 26, isEligible = verifyAge(x), "1" === F ? (e = shof, n = shop, m = "Yes") : (e = snhof, n = snhop, m = "No"), t = 4680, o = 56035.2;
        E = (u = (c = getSinglePersonAssets(C)) <= e ? 0 : c - e) / 1e3 * 78, B = .5 * (l = (i = getSinglePersonIncome(C)) <= t ? 0 : i - t);
        var w = (y = a) - B < 0 ? 0 : y - B;
        g = (I = y - E < 0 ? 0 : y - E) > w ? w : I, h = (g += s) / 26, document.getElementById("isHomeOwner").innerHTML = m, document.getElementById("relationship").innerHTML = r, document.getElementById("ALower").innerHTML = toComma(e), document.getElementById("ILower").innerHTML = toComma(t), document.getElementById("AHigher").innerHTML = toComma(n), document.getElementById("IHigher").innerHTML = toComma(o), document.getElementById("AExcess").innerHTML = toComma(u), document.getElementById("AAssessable").innerHTML = toComma(c), document.getElementById("IAssessable").innerHTML = toComma(i), document.getElementById("IExcess").innerHTML = toComma(l), "Yes" === isEligible ? ($(".fortnight").text(toComma(h)), $(".fortnightAnnual").text(toComma(26 * h)), $("#optionalContent").hide()) : ($(".fortnight").text(0), $(".fortnightAnnual").text(0), $("#optionalContent").hide())
    } else {
        let e, t, o = 0,
            n = 0;
            // o = Partner/HomeOwner/Full
            // n = Partner/HomeOwner/Part
        e = "Couple", 1424.8, a = 19078.8, s = 273, isEligible = verifyAge(x), isWifeEligible = verifyAge(A), "1" === F ? (o = chof, n = chop, t = "Yes") : (o = cnhof, n = cnhop, t = "No");
        let l = 8320,
            i = 3297.6 * 26;
        E = (p = (d = getSinglePersonAssets(C)) <= o ? 0 : d - o) / 1e3 * 3 * 26;
        B = .5 * (r = (m = getSinglePersonIncome(C)) <= l ? 0 : m - l) / 2, E /= 2;
        let c = (y = a) - B < 0 ? 0 : y - B;
        g = (I = y - E < 0 ? 0 : y - E) > c ? c : I, f = g += s, document.getElementById("relationship").innerHTML = e, document.getElementById("isHomeOwner").innerHTML = t, document.getElementById("relationship2").innerHTML = e, document.getElementById("isHomeOwner2").innerHTML = t, document.getElementById("ALower").innerHTML = toComma(o), document.getElementById("ILower").innerHTML = toComma(l), document.getElementById("AHigher").innerHTML = toComma(n), document.getElementById("IHigher").innerHTML = toComma(i), document.getElementById("ALower2").innerHTML = toComma(o), document.getElementById("ILower2").innerHTML = toComma(l), document.getElementById("AHigher2").innerHTML = toComma(n), document.getElementById("IHigher2").innerHTML = toComma(i), document.getElementById("AExcess").innerHTML = toComma(p), document.getElementById("AAssessable").innerHTML = toComma(d), document.getElementById("IAssessable").innerHTML = toComma(m), document.getElementById("IExcess").innerHTML = toComma(r), document.getElementById("AExcess2").innerHTML = toComma(p), document.getElementById("AAssessable2").innerHTML = toComma(d), document.getElementById("IAssessable2").innerHTML = toComma(m), document.getElementById("IExcess2").innerHTML = toComma(r), "Yes" === isEligible && "Yes" === isWifeEligible ? ($(".fortnight").text(toComma(f / 26 * 2)), $(".fortnightAnnual").text(toComma(2 * f)), $("#optionalContent").hide()) : "Yes" === isEligible || "Yes" === isWifeEligible ? ($(".fortnight").text(toComma(f / 26)), $(".fortnightAnnual").text(toComma(f)), $("#optionalContent").hide()) : ($(".fortnight").text(toComma(0)), $(".fortnightAnnual").text(toComma(0)), $("#optionalContent").hide())
    }
}
let financialAssets = 0,
    wifeFinancialAssets = 0,
    superAssets = 0,
    wifeSuperAssets = 0;

function getSinglePersonAssets(e) {
    let t = parseFloat(document.getElementById("husbandCars").value.replace("$", "").replace(/,/g, "")) || 0,
        o = parseFloat(document.getElementById("wifeCars").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#car").text(toComma(t)), $("#car2").text(toComma(o));
    let n = parseFloat(document.getElementById("husbandHousehold").value.replace("$", "").replace(/,/g, "")) || 0,
        a = parseFloat(document.getElementById("husbandBoat").value.replace("$", "").replace(/,/g, "")) || 0,
        s = parseFloat(document.getElementById("husbandCaravan").value.replace("$", "").replace(/,/g, "")) || 0,
        l = parseFloat(document.getElementById("husbandOtherAssets").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#content").text(toComma(n)), $("#boat").text(toComma(a)), $("#caravan").text(toComma(s)), $("#others").text(toComma(l));
    let r = t + n + a + s + l,
        i = parseFloat(document.getElementById("husbandSavingsAccounts").value.replace("$", "").replace(/,/g, "")) || 0,
        m = parseFloat(document.getElementById("husbandPortfolio").value.replace("$", "").replace(/,/g, "")) || 0,
        c = parseFloat(document.getElementById("husbandFunds").value.replace("$", "").replace(/,/g, "")) || 0,
        d = parseFloat(document.getElementById("wifeSavingsAccounts").value.replace("$", "").replace(/,/g, "")) || 0,
        u = parseFloat(document.getElementById("wifePortfolio").value.replace("$", "").replace(/,/g, "")) || 0,
        p = parseFloat(document.getElementById("wifeFunds").value.replace("$", "").replace(/,/g, "")) || 0;
    financialAssets = c + m + i, wifeFinancialAssets = p + u + d;
    let g = parseFloat(document.getElementById("husbandSuperAnnaution").value.replace("$", "").replace(/,/g, "")) || 0,
        h = parseFloat(document.getElementById("husbandPension").value.replace("$", "").replace(/,/g, "")) || 0,
        f = parseFloat(document.getElementById("wifeSuperAnnaution").value.replace("$", "").replace(/,/g, "")) || 0,
        I = parseFloat(document.getElementById("wifePension").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#savings").text(toComma(i)), $("#savings2").text(toComma(d)), $("#Superannuation").text(toComma(g)), $("#Superannuation2").text(toComma(f)), $("#managedFunds").text(toComma(c)), $("#managedFunds2").text(toComma(p)), $("#sharePortfolio").text(toComma(m)), $("#sharePortfolio2").text(toComma(u)), $("#ABP").text(toComma(h)), $("#ABP2").text(toComma(I)), superAssets = "Yes" === isEligible ? g + h : 0 + h, wifeSuperAssets = "Yes" === isWifeEligible ? f + I : 0 + I;
    let y = parseFloat(document.getElementById("gFatherCurrentAccountValue").value.replace("$", "").replace(/,/g, "")) || 0,
        E = parseFloat(document.getElementById("wifeGFatherCurrentAccountValue").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#ab").text(toComma(y)), $("#ab2").text(toComma(E));
    let B = parseFloat(document.getElementById("secondPropertyValue").value.replace("$", "").replace(/,/g, "")) || 0,
        v = parseFloat(document.getElementById("home2Acres").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#marketValue").text(toComma(B));
    let C = B + v,
        x = parseFloat(document.getElementById("netAssets").value.replace("$", "").replace(/,/g, "")) || 0,
        A = parseFloat(document.getElementById("netAssetsWife").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#netAssets1").text(toComma(x)), $("#netAssets2").text(toComma(A));
    let F = parseFloat(document.getElementById("husbandInvestmentLoan").value.replace("$", "").replace(/,/g, "")) || 0,
        w = parseFloat(document.getElementById("wifeInvestmentLoan").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#investmentLoan").text(toComma(F)), $("#investmentLoan2").text(toComma(w));
    let b = parseFloat(document.getElementById("secondPropertyLoan").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#loanBalance").text(toComma(b));
    let O = 0,
        L = 0;
    return L = r + financialAssets + superAssets + y + C + x - (F + b), "1" === e ? L : O = L + o + wifeFinancialAssets + A + E + wifeSuperAssets - w
}

function getSinglePersonIncome(e) {
    let t = 0,
        o = document.getElementById("secondPropertyRentFrequency").value,
        n = parseFloat(document.getElementById("secondPropertyRentalIncome").value.replace("$", "").replace(/,/g, "")) || 0,
        a = parseFloat(document.getElementById("secondPropertyAnnualExpense").value.replace("$", "").replace(/,/g, "")) || 0;
    t = "weekly" == o ? 52 * n : 12 * n, console.log(t), $("#rent").text(toComma(t)), $("#frequency").text(o), $("#annualExpense").text(toComma(a));
    let s = parseFloat(document.getElementById("grossSalary").value.replace("$", "").replace(/,/g, "")) || 0,
        l = parseFloat(document.getElementById("grossSalaryWife").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#grossSalary1").text(toComma(s)), $("#grossSalary2").text(toComma(l)), s < 7800 && l < 7800 ? (s = 0, l = 0) : s < 7800 ? s = 0 : l < 7800 && (l = 0);
    let r = parseFloat(document.getElementById("overseasIncome").value.replace("$", "").replace(/,/g, "")) || 0,
        i = parseFloat(document.getElementById("overseasIncomeWife").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#overseasIncome1").text(toComma(r)), $("#overseasIncome2").text(toComma(i));
    let m = parseFloat(document.getElementById("netProfit").value.replace("$", "").replace(/,/g, "")) || 0,
        c = parseFloat(document.getElementById("netProfitWife").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#netProfit1").text(toComma(m)), $("#netProfit2").text(toComma(c));
    let d = parseFloat(document.getElementById("yourAnnualPension").value.replace("$", "").replace(/,/g, "")) || 0,
        u = parseFloat(document.getElementById("yourAnnualPensionWife").value.replace("$", "").replace(/,/g, "")) || 0,
        p = parseFloat(document.getElementById("gFatherAnnualPensionWife").value.replace("$", "").replace(/,/g, "")) || 0,
        g = parseFloat(document.getElementById("gFatherAnnualPension").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#app").text(toComma(d)), $("#app2").text(toComma(u));
    let h = t - a,
        f = (h = h <= 0 ? 0 : h) + s + r + m + d + g,
        I = p + u + i + c + l,
        y = parseFloat(document.getElementById("yourAnnualDeductible").value.replace("$", "").replace(/,/g, "")) || 0,
        E = parseFloat(document.getElementById("yourAnnualDeductibleWife").value.replace("$", "").replace(/,/g, "")) || 0,
        B = parseFloat(document.getElementById("gFatherAnnualDeductible").value.replace("$", "").replace(/,/g, "")) || 0,
        v = parseFloat(document.getElementById("gFatherAnnualDeductibleWife").value.replace("$", "").replace(/,/g, "")) || 0;
    $("#ada").text(toComma(y)), $("#adaG").text(toComma(B)), $("#ada2").text(toComma(E)), $("#adaG2").text(toComma(v));
    let C = (d - y <= 0 ? d : y) + (g - B <= 0 ? g : B);
    if (clientWorkBonus = s > 0 && "Yes" === isEligible ? 7800 : 0, partnerWorkBonus = l > 0 && "Yes" === isWifeEligible ? 7800 : 0, "1" === e) {
        let e = financialAssets + superAssets,
            t = 53600;
            // t = Deemed Income Thresholds/Age Pension/Single
        return f + (e < t ? .0025 * e : .0025 * t + .0225 * (e - t)) - (clientWorkBonus + C)
        // .0025 = first deeming rates
        // .0225 = balance deeming rates
    } {
        let e = financialAssets + superAssets + wifeSuperAssets + wifeFinancialAssets,
            t = 89e3;
            // t = Deemed Income Thresholds/Age Pension/PArtner
        return f + I + (e < t ? .0025 * e : .0025 * t + .0225 * (e - t)) - (clientWorkBonus + C + ((u - E <= 0 ? u : E) + (p - v <= 0 ? p : v)) + partnerWorkBonus)
        // .0025 = first deeming rates
        // .0225 = balance deeming rates
    }
}

function verifyAge(e) {
    var t = new Date,
        o = new Date(e),
        n = t.getFullYear() - o.getFullYear(),
        a = t.getMonth() - o.getMonth();
    return (a < 0 || 0 === a && t.getDate() < o.getDate()) && n--, n >= 65 ? e <= "1952-30-6" ? "Yes" : e <= "1953-31-12" && n >= 65.5 ? "Yes" : e <= "1955-30-6" && n >= 66 ? "Yes" : e <= "1956-31-12" && n >= 66.5 ? "Yes" : e >= "1957-1-1" && n >= 67 ? "Yes" : "no" : "No"
}

function cancelModal() {
    step(10), $("#PDF-content").hide(), $("#optionalContent").hide()
}

function getPDF() {
    let e = document.getElementById("name").value,
        t = document.getElementById("email").value;
    if (!e || !t) return alert("Please fill name and email correctly."), !1;
    step(10), getResults(), $("#staticBackdrop").modal("hide"), $("#loaderDiv").show(), $(".title").show(), $("#progressbarDiv").hide(), $("html, body").animate({
        scrollTop: $("#loaderDiv").offset().top
    }, 300), $("#optionalContent").hide(), $("#buttons").hide(), $("#PDF-content").show();
    let o = document.getElementById("PDF-content");
    html2pdf().set({
        margin: 1,
        filename: "Age-Pension-Calculator-Summary.pdf",
        image: {
            type: "jpeg",
            quality: .9
        },
        html2canvas: {
            scale: 2
        },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    }).from(o).toPdf().output("datauristring").then(function(o) {
        let n = {
            fileDataURI: o,
            nameClient: e,
            emailClient: t
        };
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: n,
            success: function(e) {
                console.log(e), alert("Email has been sent successfully!"), $("#loaderDiv").hide(), $("#progressbarDiv").show(), $("#optionalContent").hide(), $("#buttons").show(), $("#PDF-content").hide(), $(".title").hide()
            },
            error: function(e) {
                console.log("Error"), alert(e.responseText), $("#loaderDiv").hide(), $("#progressbarDiv").show(), $("#optionalContent").hide(), $("#buttons").show(), $("#PDF-content").hide(), $(".title").hide()
            }
        }), console.log("second" + n)
    })
}

function setProgressBar(e) {
    var t = parseFloat(100 / 9) * e;
    t = t.toFixed(), $(".progress-bar").css("width", t + "%")
}