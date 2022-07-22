var products_on_page = $('.products-on-page');
var next_url = products_on_page.data('next-url');
function shopMore(){
    $.ajax({
    url : next_url,
    type : 'GET',
    dataType : 'html'
 }).done(function(next_page){
    var new_products = $(next_page).find('.products-on-page');
    var new_url = new_products.data('next-url');
    if(new_url)
        next_url = new_url;
    products_on_page.append(new_products.html());
 })
}