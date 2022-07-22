$(document).ready(function(){

  $(".menu-bar").click(function () {
    $(".navigation").toggleClass("display");
    $("body").toggleClass("overflow");
    $(this).toggleClass("active");
  });
})


// select variants at homepage and collection page
var varVal;
var replaceId;
$('.input-price-row').find('input[type=radio]').on('change', function(){
    varVal = $(this).val();
    $(this).closest('form').find('.variants-list-items').each(function(){
        var masterVal = $(this).text();
        
        if(masterVal.includes(varVal)){
            replaceId = $(this).data('variantid');
            $(this).closest('form').find('input[name=id]').val(replaceId);
            
        }
    })
});
