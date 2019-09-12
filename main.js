var loading = false;
$(() => {
    callApi();

    $(window).scroll(function() {
        let scrollPostion = $(this).scrollTop();
        let documentHeight = $(document).height();
        let windowHeight = $(this).height();
        
        if (scrollPostion >= documentHeight - windowHeight - 50 && !loading) {
            callLoading();
            callApi();
        }
    });
});

const callLoading = () => {
    loading = true;
    // create cube loading and call in html
}

const stopLoading = () => {
    loading = false;
    // remove loading from html
}

const getAnything = async () => {
    // get anything data with ajax and append in html
}

function callApi() {
    $.get('http://uinames.com/api/?amount=12&&ext', function(data) {
        mountCards(data);
    });
}

function mountCards(json) {
    json.forEach(({photo, name, surname, gender, region, birthday, email}) => {
        var $clone = $('.card').first().clone();
        $clone.find('.card-avatar img').attr('src', photo);
        $clone.find('#gender').text(gender);
        $clone.find('#region').text(region);
        $clone.find('#birthday').text(birthday.mdy);
        $clone.find('#email').text(email);
        $clone.css('display', 'block');
        $('.container-cards').append($clone);
    });
    stopLoading();
}