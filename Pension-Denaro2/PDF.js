 function PDFFile(){
// alert("Joni");



    var doc = new jsPDF('p', 'pt', 'letter');
    
    var pageHeight = 0;
    pageHeight = doc.internal.pageSize.height;
    specialElementHandlers = {
      // element with id of "bypass" - jQuery style selector  
      '#bypassme': function (element, renderer) {
          // true = "handled elsewhere, bypass text extraction"  
          return true
      }
    };
    margins = {
      top: 150,
      bottom: 60,
      left: 40,
      right: 40,
      width: 600
    };



    doc.setLineWidth(2);

    // page 1 start
    doc.setTextColor(54, 180, 70);
 

    let img = new Image()
  
    img.src = "./logo-1.png"
    
    doc.addImage(img,210,100, 200, 200);
    // doc.addImage(img, 'PNG', 210, 100, 200, 200,'','slow');
    // doc.addImage({ imageData: canvas.toDataURL('image/logo-1.png', 0.6),format: 'PNG', x: 2, y: 100, width: newImageWidth, height: newImageHeight});
    // alert("jahoor Deen");
    
    doc.setFontSize(35);
    doc.setFontStyle('bold');
    doc.text(190, 400, "AGE PENSION");
    doc.text(100, 440, "CALCULATOR REPORT");
    doc.setFillColor(54, 180, 70);
    doc.rect(70, 450, 470, 2, "F");

    
        //  footer of pdf
    doc.setTextColor(101, 101, 101);
    doc.setFontSize(8);
    doc.setFontStyle('normal');
    doc.text(265, 700,'www.denarolink.com.au');
    doc.text(220, 710,'Denaro Link is a service of Denaro Wealth Pty Ltd');
    doc.text(221,720,'2023 Denaro Wealth Pty Ltd. All Rights Reserved');
    doc.text(115,730,'Denaro Wealth Pty Ltd is an authorised representative of Lifespan Financial Planning Pty Ltd ASFL 229892');

    // doc.setFillColor(54, 180, 70);
    // doc.rect(0, 735, 613, 2, "F");
    // doc.rect(306, 0, 2, 795, "F");

    // page 1 end


    // page 2 start
    doc.addPage();
    doc.setTextColor(54, 180, 70);
    doc.setFontSize(22);
    doc.setFontStyle('bold');
    doc.text(245, 70,'Your Results');

    doc.setTextColor(46, 62, 63);
    doc.setFontSize(12); 
    doc.setFontStyle('bold');
    let fortnight = document.getElementById("fortnight").innerHTML;
    doc.text(60, 100,'Your estimated Age Pension entitlements is '+fortnight+' per fortnight based upon your scenario.');
    let fortnightAnnual = document.getElementById("fortnightAnnual").innerHTML;
    doc.text(110, 120,'This will provide you with an annual amount of '+fortnightAnnual+' from Centrelink.');


    // let img = new Image()
  
    img.src = "./assets_1/pensioner-2.png"
    
    doc.addImage(img, 245, 135, 120, 120);
    

    doc.text(60, 280,'Centrelink will assess you both under the Asset Test and Income Test and the one that');
    doc.text(67, 300,'provides the lower result will be the actual payment you receive. The payments above');
    doc.text(155, 320,'include any supplements (pension and energy).');
    
    doc.text(70, 350,'The estimated entitlements are based on the Information you have entered into this');
    doc.text(170, 370,'calculator and should only be used as a guide.');

    doc.setTextColor(54, 180, 70);
    doc.setFontSize(20);
    doc.setFontStyle('bold');
    doc.text(180, 405,'Pension Concession Card');

    // let img2 = new Image()

    img.src = "./assets_1/pcc-front.jpg"
    doc.addImage(img, 73, 415, 225, 130);
    
    // let img3 = new Image()

    img.src = "./assets_1/pcc-rear.png"
    doc.addImage(img, 313, 415, 225, 130);

    doc.setTextColor(101, 101, 101);
    doc.setFontSize(13);
    doc.setFontStyle('normal');
    doc.text(60, 570,'As long as you qualify for $1 of age pension you will be entitled to the Pensioners');
    doc.text(60, 590,'Concession Card. This entitles you to the following:');

    doc.text(80, 610,'•  Cheaper medicine under the Pharmaceutical Benefits Scheme (PBS)');
    doc.text(80, 630,'•  Bulk billed doctor visits - this is up to your doctor');
    doc.text(80, 650,'•  A bigger refund for medical costs when you reach the Medicare Safety Net.');
    doc.text(80, 670,'•  The additional concessions may include reductions on your:');
    doc.setFillColor(101, 101, 101);
    doc.ellipse(120, 686, 4, 4, 'F');
    doc.setFillColor(250, 250, 250);
    doc.ellipse(120, 686, 3, 3, 'F');

    doc.text(130, 690,'electricity and gas bills');

    doc.setFillColor(101, 101, 101);
    doc.ellipse(120, 706, 4, 4, 'F');
    doc.setFillColor(250, 250, 250);
    doc.ellipse(120, 706, 3, 3, 'F');

    doc.text(130, 710,'property and water rates');

    doc.setFillColor(101, 101, 101);
    doc.ellipse(120, 726, 4, 4, 'F');
    doc.setFillColor(250, 250, 250);
    doc.ellipse(120, 726, 3, 3, 'F');

    doc.text(130, 730,'public transport fare');

    doc.setFillColor(101, 101, 101);
    doc.ellipse(120, 746, 4, 4, 'F');
    doc.setFillColor(250, 250, 250);
    doc.ellipse(120, 746, 3, 3, 'F');

    doc.text(130, 750,'motor vehicle registration');

    doc.setFillColor(54, 180, 70);
    doc.rect(55, 765, 505, 2, "F");
    // doc.rect(306, 0, 2, 795, "F");


    // Page 2 end 
    // Page 3 start 


    doc.addPage();



    doc.setTextColor(54, 180, 70);
    doc.setFontSize(22);
    doc.setFontStyle('bold');
    doc.text(170, 70,'Let Denaro Link Help You.');

    doc.setTextColor(46, 62, 63);
    doc.setFontSize(20);
    doc.setFontStyle('bold');
    doc.text(150, 120,'WE DON’T JUST FILL IN FORMS.');
    doc.text(85, 145,'WE GO TO BAT FOR YOU WITH CENTRELINK');
    
    doc.setTextColor(46, 62, 63);
    doc.setFontSize(11);
    doc.setFontStyle('bold');
    doc.text(105, 170,'we’ll guide you through the process and deal with Centrelink on your behalf');
    
    // let img4 = new Image()
  
    img.src = "./svgtopng/3.png"
    doc.addImage(img, 100, 200, 60, 60);

    doc.setTextColor(54, 180, 70);
    doc.setFontSize(15);
    doc.setFontStyle('bold');
    doc.text(80, 270,'CONVENIENCE');

    // let img5 = new Image()
  
    img.src = "./svgtopng/2.png"
    doc.addImage(img, 275, 200, 60, 60);

    doc.text(255, 270,'CONFIDENCE');
    
    
    
    // let img6 = new Image()
    
    img.src = "./svgtopng/1.png"
    doc.addImage(img, 435, 200, 60, 60);
    
    doc.text(405, 270,'PEACE OF MIND');
    
    doc.setTextColor(101, 101, 101);
    doc.setFontSize(9);
    doc.setFontStyle('normal');

    doc.text(80, 290,'We’ll look after all the face-to-');
    doc.text(79, 302,'face and phone conversations');
    doc.text(77, 314,'with Centrelink and submit your');
    doc.text(115, 326,'paperwork.');


    doc.text(253, 290,'Be certain you’re getting the ');
    doc.text(242, 302,'maximum Centrelink entitlements ');
    doc.text(253, 314,'and seniors discounts you’re ');
    doc.text(285, 326,'eligible for.');




    doc.text(398, 290,'Go on and enjoy this exciting time ');
    doc.text(405, 302,'of your life. Rest easy knowing');
    doc.text(411, 314,'that an experienced team of');
    doc.text(419, 326,'specialists has your back.');



    doc.setTextColor(54, 180, 70);
    doc.setFontSize(14);
    doc.setFontStyle('bold');
    doc.text(310, 360,'At Denaro Link we will do everything we can to get you your maximum Age \nPension and concession card Entitlements. And we make the whole process as \neasy as possible for you.', 'center' );
    
    doc.setTextColor(101, 101, 101);
    doc.setFontSize(13);
    doc.text(310, 425,'If you have any questions you can email us at denarolink@denarowealth.com.au or \nphone us on 0435535513 and one of our Centrelink Experts will be able to assist you \nfurther.', 'center' );
   
   
    doc.setTextColor(54, 180, 70);
    doc.setFontSize(20);
    doc.setFontStyle('bold');
    doc.textWithLink('www.denarolink.com.au',185, 495,{url:'https://www.denarolink.com.au'});    







    doc.setFillColor(54, 180, 70);
    doc.rect(55, 765, 505, 2, "F");

    // page 3 end 


    // page 4 start 
    
    doc.addPage();

    doc.setFillColor(54, 180, 70);
    // doc.rect(55, 50, 505, 2, "F");
    doc.rect(55, 765, 505, 2, "F");

    doc.setTextColor(54, 180, 70);
    doc.setFontSize(18);
    doc.setFontStyle('bold');
    doc.text(55, 70,'AGE PENSION');
    doc.setTextColor(101, 101, 101);
    doc.setFontSize(13);
    doc.setFontStyle('normal');
    doc.text(55, 100,'To qualify for the Age Pension a person must reach age pension age. The age of when' );
    doc.text(55, 118,'this occurs will be based upon the person’s date of birth. The Following table can help');
    doc.text(55, 136,'to demonstrate this:');


    doc.autoTable({
      html: '#table1',
      margin: { left: 55 },
      startY: 160,
      theme: 'grid',
      columnStyles: {
          0: {
              cellWidth: 252,
              // cellPadding:{top:10 , left:5},
              valign: 'middle',
           },
          1: {
              cellWidth: 253, 
              // cellPadding: 10,
              // cellPadding:{top:10, left:5},
              valign: 'middle',
          }
         
      },
      headStyles: {
      fillColor: [54, 180, 70],
      // cellPadding:{top:10, left:5},
      valign: 'middle',
      fontSize: 12,
        },
      styles: {
          minCellHeight: 40,
      }
    })

    doc.setFontSize(11);
    doc.text( 55, 320,'The person claiming  the  Age Pension must be  in  Australia  and an Australian resident. To be eligible for Age Pension you must satisfy residence requirements. You must be: ',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'} );
    doc.text(77, 375,'•  An  Australian  resident  on  the  day  you  lodge  your  claim,  and');
    doc.text(77, 390,'•  Be  physically  present  in  Australia  on  the  day  you  lodge  your  claim');

    doc.text(55, 425,'You  also  need  to  have  been  an  Australian resident for a  continuous period of at least 10 years,  or for a number of periods that total more than ten years, with one of the periods being at least five years, unless you:',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'} );

    doc.text(77, 480,'•  are a refugee or former refugee, or');
    doc.text(77, 500,'•  were getting Partner Allowance, Widow Allowance or Widow B Pension');
    doc.text(77, 515,'   immediately before turning Age Pension age, or');
    doc.text(77, 535,'•  are a woman whose partner died while you were both Australian residents, and \tyou have been an Australian resident for two years immediately before claiming \tAge Pension' ,{ maxWidth: 410, lineHeightFactor: 1.5, align: 'justify'} );



    doc.text(55, 600,'If you have lived or worked in a country with which Australia has an international social security agreement, it may help you meet these residence requirements.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );

    doc.text(55, 650,'A person’s Age Pension entitlement is calculated by Centrelink after applying an income and asset test. The test that produces the lowest entitlement will  determine the amount of  Age Pension a person will receive. The Centrelink rules provide specific definitions of what they assessed to be an asset and income under both tests.security agreement, it may help you meet these residence requirements.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );


    // doc.setFillColor(54, 180, 70);
    // doc.rect(0, 735, 613, 2, "F");
    // doc.rect(306, 0, 2, 795, "F");
    // doc.rect(53, 0, 2, 795, "F");
    // doc.rect(560, 0, 2, 795, "F");
    // doc.rect(462, 0, 2, 795, "F");
    // doc.rect(162, 0, 2, 795, "F");



    // page 4 end
    
    

    // page 5 start 
    
    doc.addPage();

    doc.setFillColor(54, 180, 70);
    // doc.rect(55, 50, 505, 2, "F");
    doc.rect(55, 765, 505, 2, "F");


    doc.setTextColor(54, 180, 70);
    doc.setFontSize(18);
    doc.setFontStyle('bold');
    doc.text(55, 70,'HOW MUCH PENSION DO I GET?');




    doc.setTextColor(101, 101, 101);
    doc.setFontStyle('normal');
    doc.setFontSize(13);
    doc.text(55, 100,'The maximum rate of age pension is based upon the following table. Refer to: ',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
    doc.setTextColor(0, 78, 153);
    
    doc.textWithLink('https://www.humanservices.gov.au/individuals/services/centrelink/age-pension\n/eligibility/payment-rates',55, 130,{url:'https://www.humanservices.gov.au/individuals/services/centrelink/age-pension/eligibility/payment-rates'});  
    doc.textWithLink('https://www.humanservices.gov.au/individuals/enablers/assets/30621',115, 340,{url:'https://www.humanservices.gov.au/individuals/enablers/assets/30621'});  
    
    doc.setTextColor(101, 101, 101);
    doc.text(55, 180,'These figures are currently adjusted for CPI on twice a year (every 6 months) and occur on the 20th of March and 20th September.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );


    doc.setTextColor(54, 180, 70);
    doc.setFontSize(18);
    doc.setFontStyle('bold');
    doc.text(55, 255,'THE ASSETS TEST');
    
    doc.setFontSize(13);
    doc.setTextColor(101, 101, 101);
    doc.setFontStyle('normal');
    doc.text(55, 285,'The assets test thresholds are shown in the table below For every $1,000 of assets above the lower limits, your fortnightly pension reduces by $3.00 per fortnight.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
    doc.text(55, 340,'Refer to:',{lineHeightFactor: 1.5, align: 'justify'}  );
    doc.text(55, 380,'Assets can include:'  );

    doc.text(77, 420,'•  Home contents, cars, boats and caravans');
    doc.text(77, 440,'•  Antiques, stamp or coin collections');
    doc.text(77, 460,'•  Superannuation over age pension age');
    doc.text(77, 480,'•  Account Based Pensions');
    doc.text(77, 500,'•  Real property');
    doc.text(77, 520,'•  Shares in private companies, discretionary trusts');
    doc.text(77, 540,'•  Long-term Annuities');
    doc.text(77, 560,'•  Licenses, for example fishing or taxi');
    doc.text(77, 580,'•  Surrender value of life insurance policies');
    doc.text(77, 600,'•  Collections for trading, investment or hobby purposes, and');
    doc.text(77, 620,'•   Generally, any debt secured against an asset is deducted from the value of that      \tasset.' ,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});


    // doc.setFillColor(54, 180, 70);
    // // doc.rect(0, 735, 613, 2, "F");
    // doc.rect(306, 0, 2, 795, "F");
    // doc.rect(53, 0, 2, 795, "F");
    // doc.rect(560, 0, 2, 795, "F");


        // page 5 end
        
        


        // page 6 start 
    
        doc.addPage();

        doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");

        doc.setTextColor(54, 180, 70);
        doc.setFontSize(18);
        doc.setFontStyle('bold');
        doc.text(55, 70,'GIFTING');
        
        doc.setFontSize(13);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        doc.text(55, 100,'In order to prevent you from simply giving away your assets to qualify for age pension and other income support payments , Centrelink and DVA have introduced rules that impact income support recipients who “gift” away their assets.These gifting rules can be summarised as follows:',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        doc.text(77, 200,'•  Two tests apply in respect of asset gifting:');

        doc.text(130, 220,'a maximum of $10,000 in gifts is allowed in a single financial year (for both singles and couples combined), and', { maxWidth: 420, lineHeightFactor: 1.5, align: 'justify'} );
        doc.setFillColor(101, 101, 101);
        doc.ellipse(122, 216, 4, 4, 'F');
        doc.setFillColor(250, 250, 250);
        doc.ellipse(122, 216, 3, 3, 'F');

        doc.text(130, 270,'a maximum of $30,000 in gifts is allowed over a five-year rolling period (singles or couples combined).', { maxWidth: 420, lineHeightFactor: 1.5, align: 'justify'} );
        doc.setFillColor(101, 101, 101);
        doc.ellipse(122, 266, 4, 4, 'F');
        doc.setFillColor(250, 250, 250);
        doc.ellipse(122, 266, 3, 3, 'F');
        

        doc.text(77, 310,'•  Gifts outside this limit will be class as \'deprived assets\'.');

        doc.text(77, 330,'•  The deprived assets will count under the assets test for five years from the date\tof gift and will be subject to deeming under the income test for the same period.', { maxWidth: 480, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(55, 380,'From a practical sense, the gifting rules carried out by Centrelink and DVA will involve two tests. Firstly, they will look at whether the gift is within the $10,000 per financial year that is allowable. Secondly, they will also test whether the $30,000 limit over a five-year rolling period is satisfied. The combination of these tests will determine whether the client has any deprived assets for a period of 5 years.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        doc.text(55, 500,'The $30,000 limit over a 5-year rolling period is also extended to include the 5-year pre-pension period. That is, the 5 years in the lead up to a client first being entitled to a Centrelink benefit.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );



        // page 6 end 
        
        // page 7 start 
        doc.addPage();

        doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");



        doc.setTextColor(54, 180, 70);
        doc.setFontSize(18);
        doc.setFontStyle('bold');
        doc.text(55, 70,'THE INCOME TEST');


        doc.setFontSize(13);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        doc.text(55, 100,'The income thresholds are shown in the table below. Income above the lower threshold reduces the pension by 50 cents in the dollar (single) and 25 cents in the dollar each (for couple).',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        
        doc.text(55, 180,'The maximum rate of age pension is based upon the following table. Refer to:',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        
        doc.setTextColor(0, 78, 153);
        doc.textWithLink('https://www.humanservices.gov.au/individuals/enablers/income-test-pensions/30406',55, 200,{url:'https://www.humanservices.gov.au/individuals/enablers/income-test-pensions/30406'});  
        
        doc.setTextColor(101, 101, 101);
        doc.text(55, 220,'Examples of assessable income include:',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        
        doc.text(110, 250,'Deemed income from financial investments, including money in superannuation funds if you have reached age pension age', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 245, 2, 2, 'F');

        doc.text(110, 290,'Money in Account based pensions', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 285, 2, 2, 'F');

        doc.text(110, 310,'Gross employment income- earnings for work performed including wages, salaries, bonuses, penalty rates, overtime, commission or honoraria, and stipends including fringe benefits and amounts salary sacrificed into superannuation', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 308, 2, 2, 'F');

        doc.text(110, 390,'Net business income', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 385, 2, 2, 'F');

        doc.text(110, 410,'Distributions or dividends from private trusts and private companies', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 405, 2, 2, 'F');

        doc.text(110, 410,'Distributions or dividends from private trusts and private companies', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 405, 2, 2, 'F');

        doc.text(110, 430,'Real estate income (including net income or losses from rental property), and income from boarders and lodgers', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 425, 2, 2, 'F');

        doc.text(110, 470,'Reportable superannuation contributions', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 465, 2, 2, 'F');

        doc.text(110, 490,'Income from outside Australia (including non-Australian pensions) and other income from sources outside Australia', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 485, 2, 2, 'F');

        doc.text(110, 530,'Some lump sums', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 525, 2, 2, 'F');



        // page 7 end 


        // page 8 start 
        doc.addPage();


        doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");



        doc.setTextColor(54, 180, 70);
        doc.setFontSize(18);
        doc.setFontStyle('bold');
        doc.text(55, 70,'DEEMING');
        
        doc.setFontSize(16);
        doc.text(55, 100,'What is deeming?');
        
        doc.setFontSize(13);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        doc.text(55, 130,'Deeming is the term which describes the method used by Centrelink and Veteran’s Affairs to calculate your assessable income from certain investments when determining the level of entitlement to be paid. Deeming means that you are assumed to earn a certain return on ‘financial’ investments, irrespective of the actual rate of interest or capital growth you earn.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        doc.text(55, 240,'If you earn more than the deemed rate on your investments, the excess will not be included in the income test and will not affect your Centrelink payment. However, if the investment earns less than the deemed rate, you will still be assessed as earning income at the deemed rate.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        doc.text(55, 330,'The income test then combines the deemed income with income earned from other sources you receive to work out your entitlements under the income test.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );


        doc.setTextColor(54, 180, 70);
        doc.setFontSize(18);
        doc.setFontStyle('bold');
        doc.text(55, 385,'How does deeming work?');

        doc.setFontSize(13);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        doc.text(55, 415,'To work out the level of deemed income that your financial investments earn you simply apply the following rates in regards to the amount of total financial assets you hold. For the current deeming rates refer to :',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        doc.setTextColor(0, 78, 153);
        doc.textWithLink('https://www.humanservices.gov.au/individuals/enablers/deeming',55, 475,{url:'https://www.humanservices.gov.au/individuals/enablers/deeming'});  
        
        doc.setTextColor(101, 101, 101);
        doc.text(55, 505,'The Government changes the deeming rate from time to time to reflect market conditions and most financial institutions offer special accounts that pay interest at the deeming rate.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        doc.text(55, 570,'For pensioner couples (where at least one partner is receiving a pension), the financial assets are combined, for non-pensioner couples (where neither partner is receiving a pension) financial assets are assessed individually.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        

        // page 8 end
        
        


        // page 9 start 
        doc.addPage();
        

        doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");



        doc.setTextColor(54, 180, 70);
        doc.setFontSize(20);
        doc.setFontStyle('bold');
        doc.text(55, 70,'Which assets are assessed using deeming?');

        doc.setFontSize(13);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        doc.text(55, 100,'Deeming applies to financial investments, which include:',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
        
        
        doc.text(110, 130,'Cash', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 125, 2, 2, 'F');

        doc.text(110, 150,'Bank, building society, credit union accounts and term deposits', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 145, 2, 2, 'F');

        doc.text(110, 170,'Most friendly society bonds and insurance bonds', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 165, 2, 2, 'F');

        doc.text(110, 190,'Managed investments and shares in public companies', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 185, 2, 2, 'F');

        doc.text(110, 210,'Superannuation in accumulation after age pension age', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 205, 2, 2, 'F');
        
        doc.text(110, 230,'Bonds, debentures and loans, including private loans', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 225, 2, 2, 'F');

        doc.text(110, 250,'Gifts above the allowed amount', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 245, 2, 2, 'F');

        doc.text(110, 270,'Gold and other bullion', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 265, 2, 2, 'F');

        doc.text(110, 290,'Account based pension purchased from 1 January 2015. Other ones maybe exempt.', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 285, 2, 2, 'F');


        doc.text(55, 345,'Financial investments do not include:',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );


        doc.text(110, 380,'Your home and its contents, cars, boats and caravans', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 375, 2, 2, 'F');

        doc.text(110, 400,'Antiques, stamp or coin collections', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 395, 2, 2, 'F');

        doc.text(110, 420,'Superannuation under age pension age', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 415, 2, 2, 'F');

        doc.text(110, 440,'Standard life insurance policies', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 435, 2, 2, 'F');

        doc.text(110, 460,'Funeral bonds', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 455, 2, 2, 'F');

        doc.text(110, 480,'Real property', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 475, 2, 2, 'F');
        
        doc.text(110, 500,'Shares in private companies, discretionary trusts', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 495, 2, 2, 'F');

        doc.text(110, 520,'Long-term Annuities', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
        doc.setFillColor(101, 101, 101);
        doc.ellipse(100, 515, 2, 2, 'F');

        // page 9 end 

        // page 10 start
        doc.addPage();
        

        doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");

        doc.setTextColor(54, 180, 70);
        doc.setFontSize(19);
        doc.setFontStyle('bold');
        doc.text(145, 70,'Assets and Income Test Summary', {maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});


        // page 10 images start

        //left images 
        
        // let img7 = new Image()
        img.src = "./assets_1/609749.png"
        doc.addImage(img, 175, 100, 34, 34);
        
        // let img9 = new Image()
        img.src = "./assets_1/down.png"
        doc.addImage(img, 165, 210, 50, 50);

        // let img11 = new Image()
        img.src = "./assets_1/down.png"
        doc.addImage(img, 165, 320, 50, 50);

        // let img13 = new Image()
        img.src = "./assets_1/1907675.png"
        doc.addImage(img, 165, 430, 50, 50);

        // let img15 = new Image()
        img.src = "./assets_1/1728914.png"
        doc.addImage(img, 165, 540, 50, 50);

        //left images end
        
        //right images start
        // let img8 = new Image()
        img.src = "./assets_1/relationship-love-heart-valentine-romance-couple.png"
        doc.addImage(img, 390, 100, 34, 34);
        
        // let img10 = new Image()
        img.src = "./assets_1/2e42b7aac5554e35423e3f0df1307255.png"
        doc.addImage(img, 385, 210, 50, 50);
        
        // let img12 = new Image()
        img.src = "./svgtopng/depositphotos_211850546-stock-illustration-coin-icon-vector-isolated-white.jpg"
        doc.addImage(img, 385, 320, 50, 50);

        // let img14 = new Image()
        img.src = "./svgtopng/download.png"
        doc.addImage(img, 385, 430, 50, 50);
        
        // let img16 = new Image()
        img.src = "./assets_1/1101624.png"
        doc.addImage(img, 385, 540, 50, 50);
        
        //right images end
        
        // page 10 images end




        doc.setFontSize(15);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        // left
        doc.text(155, 150,'Homeowner',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(155, 200,'Assets Test',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(142, 280,'Lower Threshold',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(142, 390,'Upper Threshold',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(137, 500,'Assessable Assets',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(150, 610,'Excess Assets',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});


      // right
        doc.text(365, 150,'Relationship',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(365, 200,'Income Test',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(355, 280,'Lower Threshold',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(355, 390,'Upper Threshold',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(353, 500,'Assessable Income',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        doc.text(370, 610,'Excess Income',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});




        //put resulting values of calculator here start
        doc.setFontSize(12);
        doc.setFontStyle('bold');
        
        
        
        // left
        let isHomeOwner2 = document.getElementById("isHomeOwner2").innerHTML;
        doc.text(185, 170,isHomeOwner2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        let ALower2 = document.getElementById("ALower2").innerHTML;
        doc.text(175, 300,ALower2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        let AHigher2 = document.getElementById("AHigher2").innerHTML;
        doc.text(175, 410,AHigher2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        let AAssessable2 = document.getElementById("AAssessable2").innerHTML;
        doc.text(175, 520,AAssessable2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        let AExcess2 = document.getElementById("AExcess2").innerHTML;
        doc.text(175, 630,AExcess2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        
        
        
        // right
        let relationship2 = document.getElementById("relationship2").innerHTML;
        doc.text(385, 170,relationship2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}); 
        
        let ILower2 = document.getElementById("ILower2").innerHTML;
        doc.text(390, 300,ILower2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}); 
        
        let IHigher2 = document.getElementById("IHigher2").innerHTML;
        doc.text(390, 410,IHigher2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}); 
        
        let IAssessable2 = document.getElementById("IAssessable2").innerHTML;
        doc.text(390, 520,IAssessable2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}); 
        
        let IExcess2 = document.getElementById("IExcess2").innerHTML;
        doc.text(390, 630,IExcess2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}); 
        
        //put resulting values of calculator here end


        // page 10 end 




         // page 11 start 
         doc.addPage();
         
         
         doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");



        doc.setTextColor(54, 180, 70);
        doc.setFontSize(22);
        doc.setFontStyle('bold');
        doc.text(55, 70,'Your Information');

        doc.setFontSize(13);
        doc.setTextColor(101, 101, 101);
        doc.setFontStyle('normal');
        doc.text(55, 100,'Below is a summary of the information that you have entered in the Age Pension Calculator to arrive at your estimated entitlements.',{maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
        // table 1
        doc.autoTable({
          html: '#resultTable1',
          margin: { left: 55 },
          startY: 130,
          theme: 'grid',
          columnStyles: {
              0: {
                  cellWidth: 253,
                  valign: 'middle',
               },

              1: {
                  cellWidth: 126, 
                  valign: 'middle',
              },

              2:{
                  cellWidth: 126, 
                  valign: 'middle',
              }
             
          },
          headStyles: {
          fillColor: [54, 180, 70],
          // cellPadding:{top:10, left:5},
          valign: 'middle',
          fontSize: 12,
            },
          styles: {
              minCellHeight: 40,
          }
        })

          // table 2
          doc.autoTable({
            html: '#resultTable2',
            margin: { left: 55 },
            startY: 400,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
  
                1: {
                    cellWidth: 126, 
                    valign: 'middle',
                },
  
                2:{
                    cellWidth: 126, 
                    valign: 'middle',
                }
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            // cellPadding:{top:10, left:5},
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            }
          })

        // page 11 end 


        // page 12 start 
        doc.addPage();
        
        
         doc.setFillColor(54, 180, 70);
        // doc.rect(55, 50, 505, 2, "F");
        doc.rect(55, 765, 505, 2, "F");

          // table 3
          doc.autoTable({
            html: '#resultTable3',
            margin: { left: 55 },
            startY: 70,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
  
                1: {
                    cellWidth: 126, 
                    valign: 'middle',
                },
  
                2:{
                    cellWidth: 126, 
                    valign: 'middle',
                }
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            // cellPadding:{top:10, left:5},
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            }
          })

          // table 4
          doc.autoTable({
            html: '#resultTable4',
            margin: { left: 55 },
            startY: 370,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
                1: {
                    cellWidth: 253, 
                    valign: 'middle',
                },
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            },
          })

        // page 12 end 

        // page 13 start 
          doc.addPage();
  
  
          doc.setFillColor(54, 180, 70);
          // doc.rect(55, 50, 505, 2, "F");
          doc.rect(55, 765, 505, 2, "F");


          // table 5
          doc.autoTable({
            html: '#resultTable5',
            margin: { left: 55 },
            startY: 50,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
                 1: {
                  cellWidth: 126, 
                  valign: 'middle',
              },

              2:{
                  cellWidth: 126, 
                  valign: 'middle',
              }
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            },
          })



          // table 6
          doc.autoTable({
            html: '#resultTable6',
            margin: { left: 55 },
            startY: 230,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
                 1: {
                  cellWidth: 126, 
                  valign: 'middle',
              },

              2:{
                  cellWidth: 126, 
                  valign: 'middle',
              }
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            },
          })

          // table 7
          doc.autoTable({
            html: '#resultTable7',
            margin: { left: 55 },
            startY: 370,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
                 1: {
                  cellWidth: 126, 
                  valign: 'middle',
              },

              2:{
                  cellWidth: 126, 
                  valign: 'middle',
              }
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            },
          })

           // table 8
           doc.autoTable({
            html: '#resultTable8',
            margin: { left: 55 },
            startY: 470,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                 },
                 1: {
                  cellWidth: 126, 
                  valign: 'middle',
              },

              2:{
                  cellWidth: 126, 
                  valign: 'middle',
              }
               
            },
            headStyles: {
            fillColor: [54, 180, 70],
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            },
          })


          // table 9
          doc.autoTable({
            html: '#resultTable9',
            margin: { left: 55 },
            startY: 570,
            theme: 'grid',
            columnStyles: {
                0: {
                    cellWidth: 253,
                    valign: 'middle',
                },
                1: {
                  cellWidth: 126, 
                  valign: 'middle',
              },

              2:{
                  cellWidth: 126, 
                  valign: 'middle',
              }
              
            },
            headStyles: {
            fillColor: [54, 180, 70],
            valign: 'middle',
            fontSize: 12,
              },
            styles: {
                minCellHeight: 40,
            },
          })

       
        // doc.setFillColor(54, 180, 70);
        // // doc.rect(0, 735, 613, 2, "F");
        // doc.rect(306, 0, 2, 795, "F");
        // doc.rect(53, 0, 2, 795, "F");
        // doc.rect(560, 0, 2, 795, "F");









    //   doc.save('Your_Estimated_Quote.pdf');

    // var pdfData = doc.output('datauristring'); 
    // window.open(pdfData);


   var pdfData = doc.output('datauristring');
   
        return pdfData;

}



