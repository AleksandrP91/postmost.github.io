'use strict'

window.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.form__button'),
          openPassword = document.querySelector('.open-password'),
          input = document.querySelectorAll('.input-password');
        //   formInput = document.querySelectorAll('.form__input'),
        //   formLabel = document.querySelector('.form__label');

    const checkPassword = function() {
        let inputPassword = document.querySelector('#password').value,
            inputConfirmPassword = document.querySelector('#confirm-password').value,
            message = document.querySelector('.message__error');

            if (inputPassword.length != 0) {
                if (inputPassword == inputConfirmPassword) {
                    message.textContent = 'Пароли совпадают'
                    message.style.display = 'block';
                    message.style.color = '#71b96b';
                } else {
                    message.textContent = 'Пароли не совпадают'
                    message.style.display = 'block';
                    message.style.color = '#F13F68';
                }
            }
    }

    openPassword.addEventListener('click', function() {
       
        input.forEach(function(e) {
            if (e.getAttribute('type') == 'password') {
                e.setAttribute('type', 'text');
            } else {
                e.setAttribute('type', 'password');
            }    
            return false;
        });

    });

    // formInput.forEach(function(e) {
    //     e.addEventListener('blur', function() {
    //         if (e.value.length >= 1) {
    //             formLabel.style.opacity = '0';
    //         } else {
    //             formLabel.style.opacity = '1';
    //         }
    //     });
    // });
    

    button.addEventListener('click', function(e) {
//         e.preventDefault();
        checkPassword();
    });


});
