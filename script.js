// 'use strict';

function getDogPictures() {
    let numberOfPics = $('#dogPictures').val();
    console.log(numberOfPics)
    let fetchURL = 'https://dog.ceo/api/breeds/image/random/' + numberOfPics;
    fetch(fetchURL)
        .then(response => response.json())
        .then(responseJson => displayPictures(responseJson));
}
function displayPictures(responseJson) {
    let images = "";
    for (i = 0; i < responseJson.message.length; i++) {
        // console.log(responseJson.message[i]);
        images = responseJson.message[i];
        console.log(images);
        $('#pix').append(
            `<img src="${images}" class="dog-images"/>`
        )
    }
    // display the results section
    // $('.results').removeClass('hidden');
}


function submitForm() {
    $("#numberSubmission").submit(event => {
        console.log('it works')
        event.preventDefault();
        console.log($('#dogPictures').val());

        getDogPictures();

    });
}

// I am losing my mind

$(function () {
    console.log('do it to it!');
    submitForm();
});