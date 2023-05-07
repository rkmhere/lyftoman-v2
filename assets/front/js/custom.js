$(document).ready(function () {

   if ((window.location.href.indexOf("date") > -1 && window.location.href.indexOf("class-timetable") == -1) || (window.location.href.indexOf("?") > -1 && window.location.href.indexOf("class-timetable") == -1)) {
        $('html, body').animate({scrollTop:5700}, 'slow');
    }
  
    $(".ar .tiktok").parent().parent().hide();
    $(".tabc tbody tr").each(function() {
    var cell = $.trim($(this).find('td').not(':first').text());
    if (cell.length == 0) {
      $(this).addClass('nodisplay');
    }
  }); 

    var form = $(".frm");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
//            element.before(error);
            error.insertAfter(element);
        }

    });
    




var bodyBMI = `<div class="mkdf-row-background-text-holder"><div class="mkdf-row-background-text-wrapper  mkdf-row-background-text-vertical mkdf-row-background-text-animation mkdf-row-background-text-align-left" style="visibility: visible;"><div class="mkdf-row-background-text-wrapper-inner" style="font-size:157px;color:rgba(104, 104, 104, 0.2);-webkit-text-stroke-color:rgba(104, 104, 104, 0.2);text-align:left" data-font-size-1440="140px"><div class="mkdf-row-background-text-2" style="-webkit-text-stroke-color: rgba(104, 104, 104, 0.2)"><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 0ms;">B</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 120ms;">O</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 240ms;">D</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">Y</span></span></div></div></div></div>`;

//jQuery('.en .bmi').append(bodyBMI); 
jQuery('.bmi').append(bodyBMI); 


var bodyBMI = `<div class="mkdf-row-background-text-holder"><div class="mkdf-row-background-text-wrapper  mkdf-row-background-text-vertical mkdf-row-background-text-animation mkdf-row-background-text-align-left" style="visibility: visible;"><div class="mkdf-row-background-text-wrapper-inner" style="font-size:157px;color:rgba(104, 104, 104, 0.2);-webkit-text-stroke-color:rgba(104, 104, 104, 0.2);text-align:left" data-font-size-1440="140px"><div class="mkdf-row-background-text-2" style="-webkit-text-stroke-color: rgba(104, 104, 104, 0.2)">
  <span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 0ms;">ق</span></span>
  <span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 0ms;">ي</span></span>
  <span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 120ms;">ر</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 240ms;">ف</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">ا</span></span></div></div></div></div>`;

//jQuery('.ar #idmc').append(bodyBMI); 

var bodyBLOG = `<div class="mkdf-row-background-text-holder"><div class="mkdf-row-background-text-wrapper  mkdf-row-background-text-vertical mkdf-row-background-text-animation mkdf-row-background-text-align-left" style="visibility: visible;"><div class="mkdf-row-background-text-wrapper-inner" style="font-size:157px;color:rgba(104, 104, 104, 0.2);-webkit-text-stroke-color:rgba(104, 104, 104, 0.2);text-align:left" data-font-size-1440="140px"><div class="mkdf-row-background-text-2" style="-webkit-text-stroke-color: rgb(237 237 237 / 20%)"><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 0ms;">T</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 120ms;">I</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 240ms;">M</span></span>
<span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">E</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">T</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">A</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">B</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">L</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">E</span></span></div></div></div></div>`;

//jQuery('.en .class_calender').append(bodyBLOG); 
jQuery('.class_calender').append(bodyBLOG); 

 var bodyPLANS = `<div class="mkdf-row-background-text-holder"><div class="mkdf-row-background-text-wrapper  mkdf-row-background-text-vertical mkdf-row-background-text-animation mkdf-row-background-text-align-left" style="visibility: visible;"><div class="mkdf-row-background-text-wrapper-inner" style="font-size:157px;color:rgba(104, 104, 104, 0.2);-webkit-text-stroke-color:rgba(104, 104, 104, 0.2);text-align:left" data-font-size-1440="140px"><div class="mkdf-row-background-text-2" style="-webkit-text-stroke-color: rgb(237 237 237 / 20%)"><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 0ms;">P</span></span> <span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 120ms;">L</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 240ms;">A</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">N</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">S</span></span></div></div></div></div>`;

//jQuery('.en .packhome').append(bodyPLANS); 
jQuery('.packhome').append(bodyPLANS); 


var bodyTRAIN = `<div class="mkdf-row-background-text-holder"><div class="mkdf-row-background-text-wrapper  mkdf-row-background-text-vertical mkdf-row-background-text-animation mkdf-row-background-text-align-left" style="visibility: visible;"><div class="mkdf-row-background-text-wrapper-inner" style="font-size:157px;color:rgba(104, 104, 104, 0.2);-webkit-text-stroke-color:rgba(104, 104, 104, 0.2);text-align:left" data-font-size-1440="140px"><div class="mkdf-row-background-text-2" style="-webkit-text-stroke-color: rgb(237 237 237 / 20%)"><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 0ms;">T</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 120ms;">E</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 240ms;">A</span></span><span class="mkdf-char-mask"><span class="mkdf-show" style="transition-delay: 360ms;">M</span></span></div></div></div></div>`;

//jQuery('.en .trainers').append(bodyTRAIN);  
jQuery('.trainers').append(bodyTRAIN);  


});