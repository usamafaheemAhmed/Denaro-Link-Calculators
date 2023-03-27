<?php
require_once("connection.php");
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Low Income Health Care Card Calculator Backend</title>
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
            <h1 class="text-center Raleway">Low Income Health Care Card Calculator Backend</h1>

            <div class="col-lg-12 mt-3">
                <h1 class="text-center Raleway">Income Test</h1>
                <table class="table table-bordered table-striped " id="content5">
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



    });


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
        let eight_week_income = document.getElementById('eight_week_income'+id1).value;
        let weekly_income = document.getElementById('weekly_income'+id1).value;


        let situation = document.getElementById('situation'+id1).value;
        let primaryKey = id1;

        $.ajax({
            url: "./updateIncomeTest.php",
            method: "POST",
            data: {
                primaryKey: primaryKey,
                weekly_income: weekly_income,
                eight_week_income: eight_week_income,
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



</script>
</body>
</html>

