function PDFFile3(){
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
      doc.text(310, 400, "COMMONWEALTH SENIORS HEALTH CARE CARD CALCULATOR REPORT",{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});
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
      let data3 = document.getElementById("incomeTest").innerHTML;
      doc.text(310, 100,data3,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});

      doc.text(307, 280,'The Commonwealth Seniors Health Care Card is available to individuals who reach Commonwealth Seniors Health Care Card age but do not qualify for the Commonwealth Seniors Health Care Card or other Social Security or Veteran Affairs pensions or benefits.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});
      
      
      var width = doc.internal.pageSize.getWidth();
      
      let totalIncomePDF  = document.getElementById("totalIncome").innerHTML;
      doc.text(width/2, 195,totalIncomePDF, { align: 'center'});
      
      let thresholdPDF  = document.getElementById("threshold").innerHTML;
      doc.text(width/2, 245,thresholdPDF, { align: 'center'});
      

      
      doc.setTextColor(101, 101, 101);
      doc.setFontSize(13);
      doc.setFontStyle('normal');
      let data = document.getElementById("husbandEligible").innerHTML;
      let data2 = document.getElementById("wifeEligible").innerHTML;

      doc.text(310, 120,data,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});

      doc.text(310, 140,data2,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});
      // doc.text(100, 140, data,{ maxWidth: 500, lineHeightFactor: 1.5, align: 'center'});
      
      doc.text(270, 170,'Actual Income');
      
      doc.text(240, 220,'Actual Income Threshold');





      doc.setTextColor(54, 180, 70);
      doc.setFontSize(20);
      doc.setFontStyle('bold');
      doc.text(120, 380,'Commonwealth Seniors Health Care Card');
      
      img.src = "./cshc-front.jpg"
      doc.addImage(img, 73, 400, 225, 130);
      

      img.src = "./cshc-rear.jpg"
      doc.addImage(img, 313, 400, 225, 130);
  
      doc.setTextColor(101, 101, 101);
      doc.setFontSize(13);
      doc.setFontStyle('normal');
      doc.text(60, 560,'The Commonwealth Seniors Health Care Card entitles you to the following:');
  
      doc.text(80, 600,'•  The card provides concessional rates on pharmaceutical benefits.');

      doc.setFillColor(101, 101, 101);
      doc.ellipse(82.5, 616, 2, 2, 'F');
      doc.text(90, 620,'You will receive cheaper out of hospital medical expenses through the Medicare Safety Net.', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
     

      doc.ellipse(82.5, 656, 2, 2, 'F');
      doc.text(90, 660,'There is an increase in benefits for medical expenses above a certain threshold via the Medicare Safety Net.', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
     
      doc.ellipse(82.5, 696, 2, 2, 'F');
      doc.text(90, 700,'You will be eligible to receive the Seniors Supplement which is paid quarterly and is not taxable.', {maxWidth: 450, lineHeightFactor: 1.5, align: 'justify'});
     
      doc.setFillColor(54, 180, 70);
      doc.rect(55, 765, 505, 2, "F");
      // doc.rect(306, 0, 2, 795, "F");
  
      // doc.setFillColor(54, 180, 70);
      // // doc.rect(0, 735, 613, 2, "F");
      // doc.rect(306, 0, 2, 795, "F");
      // doc.rect(53, 0, 2, 795, "F");
      // doc.rect(560, 0, 2, 795, "F");

  
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
      
      let img4 = new Image()
    
      img.src = "./svgtopng/3.png"
      doc.addImage(img, 100, 200, 60, 60);
  
      doc.setTextColor(54, 180, 70);
      doc.setFontSize(15);
      doc.setFontStyle('bold');
      doc.text(80, 270,'CONVENIENCE');
  
      let img5 = new Image()
    
      img.src = "./svgtopng/2.png"
      doc.addImage(img, 275, 200, 60, 60);
  
      doc.text(255, 270,'CONFIDENCE');
      
      
      
      let img6 = new Image()
      
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
      doc.text(310, 400,'At Denaro Link we will do everything we can to get you your maximum Age \nPension and concession card Entitlements. And we make the whole process as \neasy as possible for you.', 'center' );
      
      doc.setTextColor(101, 101, 101);
      doc.setFontSize(13);
      doc.text(310, 465,'If you have any questions you can email us at denarolink@denarowealth.com.au or \nphone us on 0435535513 and one of our Centrelink Experts will be able to assist you \nfurther.', 'center' );
     
     
      doc.setTextColor(54, 180, 70);
      doc.setFontSize(20);
      doc.setFontStyle('bold');
      doc.textWithLink('www.denarolink.com.au',185, 540,{url:'https://www.denarolink.com.au'});    
  
  
  
  
  
  
  
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

      doc.text(80, 100,'You will be subject to an income test based on your adjusted taxable income but not an assets test and you must meet residence requirements to qualify for this card.', { maxWidth: 480, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(70, 95, 2, 2, 'F');

      doc.text(80, 140,'Centrelink will include your account based income streams as part of the income test. Account based income streams include account-based pensions and account-based annuities. The balance of an account-based income stream is subject to deeming. Deeming assumes that financial investments are earning a certain rate of income.', { maxWidth: 480, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(70, 135, 2, 2, 'F');

      doc.text(80, 240,'The current income test thresholds are determined by legislation which could change in the future', { maxWidth: 480, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(70, 235, 2, 2, 'F');

      doc.text(80, 280,'You will be required to notify Centrelink of any changes in your circumstances both personal and financial within 14 days of the change occurring. This is an ongoing obligation.', { maxWidth: 480, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(70, 275, 2, 2, 'F');

      doc.text(80, 340,'If eligible, you need to submit an application to Centrelink and will need to then keep Centrelink updated with all changes to your financial circumstances and living arrangements', { maxWidth: 480, lineHeightFactor: 1.5, align: 'justify'});
      doc.ellipse(70, 335, 2, 2, 'F');

      doc.setFontStyle('bold');
      doc.setTextColor(54, 180, 70);
      doc.setFontSize(16);
      doc.text(55, 400,'What is deeming?');

      doc.setFontSize(13);
      doc.setTextColor(101, 101, 101);
      doc.setFontStyle('normal');
      doc.text(55, 420,'Deeming is the term which describes the method used by Centrelink and Veteran’s Affairs to calculate your assessable income from certain investments when determining the level of entitlement to be paid. Deeming means that you are assumed to earn a certain return on ‘financial’ investments, irrespective of the actual rate of interest or capital growth you earn. If you earn more than the deemed rate on your investments, the excess will not be included in the income test and will not affect your Centrelink payment. However, if the investment earns less than the deemed rate, you will still be assessed as earning income at the deemed rate. The income test then combines the deemed income with income earned from other sources you receive to work out your entitlements under the income test.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
     
      doc.setFontStyle('bold');
      doc.setTextColor(54, 180, 70);
      doc.setFontSize(16);
      doc.text(55, 620,'How does deeming work?');

      doc.setFontSize(13);
      doc.setTextColor(101, 101, 101);
      doc.setFontStyle('normal');
      doc.text(55, 640,'To work out the level of deemed income that your financial investments earn you simply apply the following rates in regards to the amount of total financial assets you hold. For the current deeming rates refer to :',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
     
      doc.setTextColor(0, 78, 153);
      doc.textWithLink('https://www.humanservices.gov.au/individuals/enablers/deeming',55, 700,{url:'https://www.humanservices.gov.au/individuals/enablers/deeming'});  
      
      doc.setTextColor(101, 101, 101);
      doc.text(55, 720,'The Government changes the deeming rate from time to time to reflect market conditions and most financial institutions offer special accounts that pay interest at the deeming rate.',{ maxWidth: 500, lineHeightFactor: 1.5, align: 'justify'}  );
      

      // page 4 end
      
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
            html: '#HResulttable1',
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
              html: '#HResulttable2',
              margin: { left: 55 },
              startY: 220,
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
              html: '#HResulttable3',
              margin: { left: 55 },
              startY: 510,
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


            doc.autoTable({
              html: '#HResulttable4',
              margin: { left: 55 },
              startY: 680,
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
                  minCellHeight: 35,
              },
            })
          // page 10 end 
  
  
       
         doc.save('Your_Estimated_Quote.pdf');
  
  
  
  
  
      // var pdfData = doc.output('datauristring'); 
      // // console.log(pdfData);
      // // return pdfData;
      // window.open(pdfData);
      
 
  
  }
  