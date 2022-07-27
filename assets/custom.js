$(document).ready(function(){

  $(".menu-bar").click(function () {
    $(".navigation").toggleClass("display");
    $("body").toggleClass("overflow");
    $(this).toggleClass("active");
  });
})

setInterval(function(){
  // remove visually hidden class form cart icon header
$('#cart-icon-bubble').find('svg + span').removeClass('visually-hidden');
}, 0);


// select variants at homepage and collection page
var varVal;
var replaceId;
$('.input-price-row').find('input[type=radio]').on('change', function(){
    varVal = $(this).val();

   $(this).closest('form').find('.radio-container input').removeAttr('checked');
      $(this).attr('checked', 'checked');
    $(this).closest('form').find('.variants-list-items').each(function(){
        var masterVal = $(this).text();
        
        if(masterVal.includes(varVal)){
            replaceId = $(this).data('variantid');
            $(this).closest('form').find('input[name=id]').val(replaceId);
            
        }
    })
});

// go through all product and check quantity if 0 then add out of stock
$('.input-price-row').each(function(){
  var masterValSold = $(this).find('.radio-container input[type=radio]').data('inventory');
  if(masterValSold == 0){
      var inputRow = $(this).closest('.input-price-row');
      inputRow.addClass('out-of-stock');
     inputRow.find('.fearured-price').html('<h6>Out of Stock</h6>');
  }
});

