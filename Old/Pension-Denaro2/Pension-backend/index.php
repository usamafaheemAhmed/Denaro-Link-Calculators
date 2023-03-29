<?php
require_once("connection.php");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Pension Calculator Backend</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <!--     raleway font-->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Poppins', sans-serif;
        }

        .Raleway {
            font-family: 'Raleway', sans-serif;
        }
    </style>
</head>
<body>
<div class="container py-5">
    <div class="row">
        <div class="col-lg-12">
            <h1 class="text-center Raleway">Pension Calculator Backend</h1>
            <h1 class="text-center Raleway mt-3">Actual Payment</h1>
            <table class="table table-bordered table-striped " id="content">
            </table>
        </div>

        <div class="col-lg-12 mt-3">
            <h1 class="text-center Raleway">Assets Test</h1>
            <table class="table table-bordered table-striped " id="content1">
            </table>
        </div>

        <div class="col-lg-12 mt-3">
            <h1 class="text-center Raleway">Reduction Rate</h1>
            <table class="table table-bordered table-striped " id="content6">
            </table>
        </div>
        <div class="col-lg-12 mt-3">
            <h1 class="text-center Raleway">Income Test</h1>
            <table class="table table-bordered table-striped " id="content5">
            </table>
        </div>
        <div class="col-lg-12 mt-3">
            <h1 class="text-center Raleway">Work Bonus</h1>
            <table class="table table-bordered table-striped " id="content2">
            </table>
        </div>
        <div class="col-lg-12 mt-3">
            <h1 class="text-center Raleway">Deemed Income Thresholds</h1>
            <table class="table table-bordered table-striped " id="content3">
            </table>
        </div>
        <div class="col-lg-12 mt-3">
            <h1 class="text-center Raleway">Deeming Rates</h1>
            <table class="table table-bordered table-striped " id="content4">
            </table>
        </div>

    </div>
</div>

<script>
    $(document).ready(function () {
        $.ajax({
            url: "select.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content").html(dataabc);
            }
        });

        $.ajax({
            url: "assets.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content1").html(dataabc);
            }
        });
        $.ajax({
            url: "work_bonus.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content2").html(dataabc);
            }
        });

        $.ajax({
            url: "deemed_income.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content3").html(dataabc);
            }
        });
        $.ajax({
            url: "deeming_rates.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content4").html(dataabc);
            }
        });

        $.ajax({
            url: "income_test.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content5").html(dataabc);
            }
        });
        $.ajax({
            url: "reduced_by.php",
            success: function (dataabc) {
                //console.log(dataabc);
                $("#content6").html(dataabc);
            }
        });


    });

    function updateActualPayment(id1) {
        let per_fortnight = document.getElementById('per_fortnight'+id1).value;
        let pharmaceutical_benefit = document.getElementById('pharmaceutical_benefit'+id1).value;
        let pension_payment1 = document.getElementById('pension_payment'+id1).value;
        let non_home_owner_part_pension = document.getElementById('non_home_owner_part_pension'+id1).value;
        let situation = document.getElementById('situation'+id1).value;
        let clean_energy_supplement = document.getElementById('clean_energy_supplement'+id1).value;
        let primaryKey = id1;
        $.ajax({
            url: "./updateActualPayment.php",
            method: "POST",
            data: {
                primaryKey: primaryKey,
                per_fortnight: per_fortnight,
                pharmaceutical_benefit: pharmaceutical_benefit,
                pension_payment1: pension_payment1,
                non_home_owner_part_pension : non_home_owner_part_pension,
                situation:situation,
                clean_energy_supplement:clean_energy_supplement,
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }




    function updateAssetTest(id1) {


        let home_owner_full_pension = document.getElementById('home_owner_full_pension'+id1).value;
        let home_owner_part_pension = document.getElementById('home_owner_part_pension'+id1).value;
        let non_home_owner_full_pension1 = document.getElementById('non_home_owner_full_pension'+id1).value;
        let non_home_owner_part_pension = document.getElementById('non_home_owner_part_pension'+id1).value;
        let situation = document.getElementById('situation'+id1).value;
        let primaryKey = id1;


        $.ajax({
            url: "./updateAssetTest.php",
            method: "POST",
            data: {
                primaryKey: primaryKey,
                home_owner_full_pension: home_owner_full_pension,
                home_owner_part_pension: home_owner_part_pension,
                non_home_owner_full_pension1: non_home_owner_full_pension1,
                non_home_owner_part_pension : non_home_owner_part_pension,
                situation:situation,
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }

    function updateDeemedIncome(id1) {
        let first_deemed = document.getElementById('first_deemed'+id1).value;
        let first_rate = document.getElementById('first_rate'+id1).value;
        let over_deemed = document.getElementById('over_deemed'+id1).value;
        let over_rate = document.getElementById('over_rate'+id1).value;
        let situation = document.getElementById('situation'+id1).value;
        let primaryKey = id1;

        $.ajax({
            url: "./updateDeemedIncome.php",
            method: "POST",
            data: {
                primaryKey: primaryKey,
                first_deemed: first_deemed,
                first_rate: first_rate,
                over_deemed: over_deemed,
                over_rate : over_rate,
                situation:situation,
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }
    function updateIncomeTest(id1) {
        let income_full_pension = document.getElementById('income_full_pension'+id1).value;
        let income_part_pension = document.getElementById('income_part_pension'+id1).value;
        let reduction_factor = document.getElementById('reduction_factor'+id1).value;

        let situation = document.getElementById('situation'+id1).value;
        let primaryKey = id1;

        $.ajax({
            url: "./updateIncomeTest.php",
            method: "POST",
            data: {
                primaryKey: primaryKey,
                income_full_pension: income_full_pension,
                income_part_pension: income_part_pension,
                reduction_factor: reduction_factor,
                situation:situation,
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }

    function updateDeemingRate() {
        let balance_deeming_rates = document.getElementById('balance_deeming_rates').value;
        let first_deeming_rates = document.getElementById('first_deeming_rates').value;

        $.ajax({
            url: "./updateDeeming.php",
            method: "POST",
            data: {
                balance_deeming_rates: balance_deeming_rates, first_deeming_rates: first_deeming_rates
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }

    function updateReduction() {
        let reduction_rate = document.getElementById('reduction_rate').value;
        let dividing_factor = document.getElementById('dividing_factor').value;

        $.ajax({
            url: "./updateReduction.php",
            method: "POST",
            data: {
                reduction_rate: reduction_rate, dividing_factor: dividing_factor
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }

    function updateBonus() {
        let work_bonus_half_fortnight = document.getElementById('work_bonus_half_fortnight').value;
        let work_bonus_fortnight = document.getElementById('work_bonus_fortnight').value;
        let name = document.getElementById('name').value;


        $.ajax({
            url: "./updateWorkBonus.php",
            method: "POST",
            data: {
                name: name,
                work_bonus_half_fortnight: work_bonus_half_fortnight,
                work_bonus_fortnight: work_bonus_fortnight
            },
            success: function (dataabc) {
                console.log('updated');
                alert('updated');
            }
        });

    }

</script>

</body>
</html>

