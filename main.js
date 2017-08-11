// http://api.forismatic.com/api/1.0/ this is the quote api
//http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en

$(document).ready(function() {

var quote;  
var author;
    
    function getNewQuote() {
        $.ajax({
           url: 'https://api.forismatic.com/api/1.0/',
           jsonp: 'jsonp',
           dataType: 'jsonp',
           data: {
            method: 'getQuote',
            lang: 'en',
            format: 'jsonp'
            },
            success: function(response) {
                console.log(response.quoteText);
                console.log(response.quoteAuthor);
                quote = response.quoteText;
                author = response.quoteAuthor;
                $('#quote').text(quote);
                
                if (author) {
                    $('#author').text('- ' + author);   
                } else {
                    $('#author').text('- ' + unknown);
                }
                
            }
        });
    }
    getNewQuote();    
    
    $('.get-quote').on('click', function(event) {
        event.preventDefault();
        getNewQuote();
    });
    
    $('.share-quote').on('click', function(event){
       event.preventDefault();
       window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + '- ' +author));
    });
});