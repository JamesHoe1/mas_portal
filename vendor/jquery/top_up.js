
/**
 * first tab is showed by default 
 */
$('.tab-1').show();
$('#tab-1').addClass('active');

//next action
$('#tab-1-next').click(function () {

    if ( $('#id_number').val().length != 7 ) {
        alert("Please enter the valid ID to proceed");
        return false;

    }

    $('#tab-2').addClass('active');
    $('#tab-1').removeClass('active');

    $('.tab-2').show(); $('.tab-1').hide();
    
    return true;
})

$('#tab-2-next').click(function () {

    if ( $('#country_dropdown').val() == "Select the Country" ) {
        alert("Please select the valid country to proceed");

        return false;
    }

    $('#tab-3').addClass('active');
    $('#tab-2').removeClass('active');

    $('.tab-3').show(); $('.tab-2').hide();
    
    return true;
})

$('#tab-3-next').click(function () {

    if ( $('#plan_dropdown').val() == "Select the right plan" ) {
        alert("Please select a data plan to proceed");
        return false;

    }

    $('#tab-4').addClass('active');
    $('#tab-3').removeClass('active');

    $('.tab-4').show(); $('.tab-3').hide();
    
    return true;
})

$('#tab-4-next').click(function () {

    $('#tab-4').removeClass('active');
    
    $('.tab-5').show(); $('.tab-4').hide();

})


//previous action
$('#tab-2-prev').click(function (){

    $('#tab-1').addClass('active');
    $('#tab-2').removeClass('active');

    $('.tab-1').show(); $('.tab-2').hide();
})

$('#tab-3-prev').click(function (){

    $('#tab-2').addClass('active');
    $('#tab-3').removeClass('active');

    $('.tab-2').show(); $('.tab-3').hide();
})

$('#tab-4-prev').click(function (){

    $('#tab-3').addClass('active');
    $('#tab-4').removeClass('active');

    $('.tab-3').show(); $('.tab-4').hide();
})