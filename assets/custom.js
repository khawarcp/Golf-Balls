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

   $(this).closest('form').find('.radio-container input[type=radio]').removeAttr('checked');
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


// quantity error on custom product cards
$('.card-submit').on('click',function(e){
    e.preventDefault();
    var formSub = $(this).closest('form');
    var inputQuant = parseInt($(this).siblings('#quantity').val());
    var checkedQuant = formSub.find('input:checked').data('inventory');

    if(inputQuant > checkedQuant){
        formSub.find('.quantity-error').text(`You cannot add more than ${checkedQuant} items`);
    }else{
        formSub.submit();
    }
});

// quantity error on custom accessories product cards
$('.card-submit-access').on('click',function(e){
    e.preventDefault();
    var formSub = $(this).closest('form');
    var inputQuantAccess = parseInt($(this).siblings('#quantity').val());
    var checkedQuantAcess = formSub.find('input[name=id]').data('access-quantity');

    if(inputQuantAccess > checkedQuantAcess){
        formSub.find('.quantity-error').text(`You cannot add more than ${checkedQuantAcess} items`);
    }else{
        formSub.submit();
    }
});
