function PDFFile2(){
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
      
      doc.setFontSize(25);
      doc.setFontStyle('bold');
      doc.text(310, 400, "LOW INCOME HEALTH CARE CARD CALCULATOR REPORT",{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});
      // doc.text(100, 440, "CALCULATOR REPORT");
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
      doc.text(235, 70,'Your Results');
  
      doc.setTextColor(101, 101, 101);
      doc.setFontSize(14); 
      doc.setFontStyle('bold');
      doc.text(190, 125,'You meet the relevant income test');
      

      let totalIncome1PDF = document.getElementById("totalIncome1").innerHTML;
      let incomeThreshold1PDF = document.getElementById("incomeThreshold1").innerHTML;
      let incomeOverORUnder1d1PDF = document.getElementById("incomeOverORUnder1").innerHTML;

      doc.text(290, 185,totalIncome1PDF);
      
      doc.text(290, 235,incomeThreshold1PDF);
      
      doc.text(290, 290,incomeOverORUnder1d1PDF);

      
      doc.setTextColor(101, 101, 101);
      doc.setFontSize(13);
      doc.setFontStyle('normal');
      doc.text(230, 160,'Actual Income over 8 Weeks');
      
      doc.text(195, 210,'Income Threshold for the 8 Weeks period');
      
      doc.text(140, 265,' Income over/under over 8 Weeks for income test purposes');





      doc.setTextColor(54, 180, 70);
      doc.setFontSize(20);
      doc.setFontStyle('bold');
      doc.text(170, 320,'Low income Health Care Card');
  
      img.src = "./lowincome-card.jpg"
      doc.addImage(img, 130, 340, 370, 130);
  
      doc.setTextColor(101, 101, 101);
      doc.setFontSize(13);
      doc.setFontStyle('normal');
      doc.text(60, 500,'The Low-income Health Care Card entitles you to the following:');
  
      doc.text(80, 540,'•  Cheaper medicine under the Pharmaceutical Benefits Scheme');
      doc.text(80, 560,'•  Bulk billed doctor visits - this is up to your doctor');
      doc.text(80, 580,'•  A bigger refund for medical costs when you reach the Medicare Safety Net.');
      
      doc.setFillColor(101, 101, 101);
      doc.ellipse(82.5, 596, 2, 2, 'F');
      doc.text(90, 600,'Your state or territory government and local council may offer you more. You will need to check with the relevant agencies. They additional concessions may include:', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      
      doc.setFillColor(101, 101, 101);
      doc.ellipse(120, 666, 4, 4, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(120, 666, 3, 3, 'F');
  
      doc.text(130, 670,'electricity and gas bills');
  
      doc.setFillColor(101, 101, 101);
      doc.ellipse(120, 686, 4, 4, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(120, 686, 3, 3, 'F');
  
      doc.text(130, 690,'property and water rates');
  
      doc.setFillColor(101, 101, 101);
      doc.ellipse(120, 706, 4, 4, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(120, 706, 3, 3, 'F');
  
      doc.text(130, 710,'public transport fare');
  
      doc.setFillColor(101, 101, 101);
      doc.ellipse(120, 726, 4, 4, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(120, 726, 3, 3, 'F');
  
      doc.text(130, 730,'motor vehicle registration');
  
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
  
      doc.text(135, 290,'We’ll look after all the face-to-face and phone conversations with Centrelink and submit your paperwork.',{maxWidth: 150, lineHeightFactor: 1.5, align: 'center'});

  
  
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
      doc.text(55, 70,'Things you should know');

      doc.setTextColor(101, 101, 101);
      doc.setFontSize(13);
      doc.setFontStyle('normal');

      doc.text(100, 100,'To qualify you must meet the income test above and be in Australia', { maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(90, 95, 2, 2, 'F');

      doc.text(100, 120,'The current income test thresholds are determined by legislation which could change in the future', { maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(90, 115, 2, 2, 'F');

      doc.text(100, 160,'You will be required to notify Centrelink of any changes in your circumstances both personal and financial within 14 days of the change occurring. This is an ongoing obligation.', { maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(90, 155, 2, 2, 'F');

      doc.text(100, 220,'If eligible, you need to submit an application to Centrelink and will need to then keep Centrelink updated with all changes to your financial circumstances and living arrangements', { maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(90, 215, 2, 2, 'F');

      doc.text(100, 280,'Example of the income types Centrelink Assess are as follows:', { maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(90, 275, 2, 2, 'F');

      doc.text(132, 300,'Employment income, such as wages, salary and self employment income',{ maxWidth: 440, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 296, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 296, 2, 2, 'F');

      doc.text(132, 320,'Employer provided fringe benefits',{ maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 316, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 316, 2, 2, 'F');


      doc.text(132, 340,'Rental income', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 336, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 336, 2, 2, 'F');

      doc.text(132, 360,'Reportable super contributions, salary sacrifice', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 356, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 356, 2, 2, 'F');

      doc.text(132, 380,'Centrelink pensions, benefits and some supplementary payments', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 376, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 376, 2, 2, 'F');

      doc.text(132, 400,'Paid Parental Leave payments',{maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 396, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 396, 2, 2, 'F');

      doc.text(132, 420,'Department of Veterans Affairs payments.', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 414, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 414, 2, 2, 'F');

      doc.text(132, 440,'Deemed income from financial investments, such as bank accounts, managed investments and shares', {maxWidth: 420, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 434, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 434, 2, 2, 'F');

      doc.text(132, 480,'Deemed income from account-based income streams', {maxWidth: 430, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 474, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 474, 2, 2, 'F');

      doc.text(132, 500,'Income from income stream products, such as super pensions and defined benefit income streams', {maxWidth: 420, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 494, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 494, 2, 2, 'F');

      doc.text(132, 540,'Foreign income', {maxWidth: 430, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 534, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 534, 2, 2, 'F');

      doc.text(132, 560,'Private trusts and companies', {maxWidth: 430, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 554, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 554, 2, 2, 'F');

      doc.text(132, 580,'Compensation payments, including periodical and lump sum lump sum payments, such as redundancy, leave, or termination payments.', {maxWidth: 420, lineHeightFactor: 1.5, align: 'justify'});
      doc.setTextColor(101, 101, 101);
      doc.ellipse(122, 577, 3, 3, 'F');
      doc.setFillColor(250, 250, 250);
      doc.ellipse(122, 577, 2, 2, 'F');

      // page 4 end
      
      
  
      // page 5 start  
          doc.addPage();
  
  
          doc.setFillColor(54, 180, 70);
          // doc.rect(55, 50, 505, 2, "F");
          doc.rect(55, 765, 505, 2, "F");
  
  
          doc.setFontStyle('bold');
          doc.setTextColor(54, 180, 70);
          doc.setFontSize(16);
          doc.text(55, 70,'What is deeming?');
          
          doc.setFontSize(13);
          doc.setTextColor(101, 101, 101);
          doc.setFontStyle('normal');
          doc.text(55, 100,'Deeming is the term which describes the method used by Centrelink and Veteran’s Affairs to calculate your assessable income from certain investments when determining the level of entitlement to be paid. Deeming means that you are assumed to earn a certain return on ‘financial’ investments, irrespective of the actual rate of interest or capital growth you earn. If you earn more than the deemed rate on your investments, the excess will not be included in the income test and will not affect your Centrelink payment. However, if the investment earns less than the deemed rate, you will still be assessed as earning income at the deemed rate. The income test then combines the deemed income with income earned from other sources you receive to work out your entitlements under the income test.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
          
          // doc.text(55, 240,'If you earn more than the deemed rate on your investments, the excess will not be included in the income test and will not affect your Centrelink payment. However, if the investment earns less than the deemed rate, you will still be assessed as earning income at the deemed rate.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
          
          // doc.text(55, 330,'The income test then combines the deemed income with income earned from other sources you receive to work out your entitlements under the income test.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
  
  
          doc.setTextColor(54, 180, 70);
          doc.setFontSize(18);
          doc.setFontStyle('bold');
          doc.text(55, 310,'How does deeming work?');
  
          doc.setFontSize(13);
          doc.setTextColor(101, 101, 101);
          doc.setFontStyle('normal');
          doc.text(55, 340,'To work out the level of deemed income that your financial investments earn you simply apply the following rates in regards to the amount of total financial assets you hold. For the current deeming rates refer to :',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
          
          doc.setTextColor(0, 78, 153);
          doc.textWithLink('https://www.humanservices.gov.au/individuals/enablers/deeming',55, 400,{url:'https://www.humanservices.gov.au/individuals/enablers/deeming'});  
          
          doc.setTextColor(101, 101, 101);
          doc.text(55, 420,'The Government changes the deeming rate from time to time to reflect market conditions and most financial institutions offer special accounts that pay interest at the deeming rate.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
          
         
          // page 5 end

  
  
          // page 9 start 
  
           // page 10 start 
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
          doc.text(55, 100,'Below is a summary of the information that you have entered in the Low Income Calculator to arrive at your estimated entitlements.',{maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'});
          // table 1
          doc.autoTable({
            html: '#LResulttable1',
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
              html: '#LResulttable2',
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
              // cellPadding:{top:10, left:5},
              valign: 'middle',
              fontSize: 12,
                },
              styles: {
                  minCellHeight: 40,
              }
            })
  
            doc.autoTable({
              html: '#LResulttable3',
              margin: { left: 55 },
              startY: 500,
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
              // cellPadding:{top:10, left:5},
              valign: 'middle',
              fontSize: 12,
                },
              styles: {
                  minCellHeight: 40,
              }
            })



          // page 10 end 
  
  
          // page 11 start 
          doc.addPage();
          
          
           doc.setFillColor(54, 180, 70);
          // doc.rect(55, 50, 505, 2, "F");
          doc.rect(55, 765, 505, 2, "F");
  
            // table 3
            doc.autoTable({
              html: '#LResulttable4',
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
              html: '#LResulttable5',
              margin: { left: 55 },
              startY: 250,
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
  
          // page 11 end 
  
      
  
  
        //  doc.save('Your_Estimated_Quote.pdf');
  
    
      var pdfData = doc.output('datauristring'); 
      // console.log(pdfData);
      // return pdfData;
     return(pdfData);
      
  }
  
