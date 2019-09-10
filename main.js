$(() => {
    $(window).scroll(function() {
        let scrollPostion = $(this).scrollTop();
        let documentHeight = $(document).height()
        let windowHeight = $(this).height()

        if (scrollPostion >= documentHeight - windowHeight - 50) {
            // call ajax function and append 
        }
    })
})

const callLoading = () => {
    // create cube loading and call in html
}

const stopLoading = () => {
    // remove loading from html
}

const getAnything = async () => {
    // get anything data with ajax and append in html
}