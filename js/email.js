/**
 * Created by yulia on 28.02.2016.
 */
var form = document.querySelector('.contacts__form');
form.onsubmit = function(event) {
    event.preventDefault();
    var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
    var xhr = new XHR();
    var text =  document.querySelector(".contact-form__user-message").value + document.querySelector(".contact-form__user-mail").value;
    var senderName = document.querySelector('.contact-form__user-name').value;
    var key = '5mmomsqgz8qomc71innc63cqafo9pn58r7hg9hjo';
    var address = 'http://api.unisender.com/ru/api/sendEmail?format=json&api_key=' + key + '&email=yseredich@gmail.com&sender_name=test&sender_email=yseredich@gmail.com&subject=' + senderName + '&body=' + text + '&list_id=6465541';
    xhr.open('post', address, true);
    xhr.onload = function() {
        alert( 'Ваше сообщение отправлено' );
    };
    xhr.onerror = function() {
        console.log( 'Ошибка ' + this.status );
    };
    xhr.send();
};