var salesDetails = $('.sales__details');

var sales = $('.sales');

var salesButton = function () {
    var isActive = salesDetails.attr('data-state');
    if (isActive == 'active'){
    salesDetails.attr('data-state','inactive');  
    } else {
    salesDetails.attr('data-state','active');
    }
};

sales.on('click', salesButton);

var salesDetails2 = $('.sales__details2');

var sales2 = $('.sales2');

var salesButton2 = function () {
    var isActive = salesDetails2.attr('data-state');
    if (isActive == 'active'){
    salesDetails2.attr('data-state','inactive');  
    } else {
    salesDetails2.attr('data-state','active');
    }
};

sales2.on('click', salesButton2);