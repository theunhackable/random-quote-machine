import $ from 'jquery';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, 500));
}

const COLORS = ['#070A52', '#393646', '#2C3333', '#7D1935', '#595B83', '#476D7C', '#65647C', '#AC7D88', '#316B83'];
const changeBG = function(){
  const random_color = COLORS[Math.floor(Math.random() * COLORS.length)];
  $('#quote-box').animate().css('color', random_color);
  $('body').animate().css('background-color', random_color);
  $('#new-quote').css('color', random_color);
  $('#new-quote').css('border', '2px solid ' + random_color);
  
  $('path').attr('fill', random_color);
  
}

const Main = () => {

    function getQuote(event){
        $.ajax({
            method: 'GET',
            url: 'https://api.api-ninjas.com/v1/quotes?category=computers',
            headers: { 'X-Api-Key': 'Nu4QfuNAoZnagEIx9v93MA==I13A4hUHwixgl1hN'},
            contentType: 'application/json',
            success: async function(result) {
                  // console.log(result);
                const quote = result[0];
                const text = quote.quote;
                const author = quote.author;
              changeBG();
              $('#text').slideToggle(500);
              $('#author').slideToggle(500);
              await sleep();
              
                $('#text').text(text);
              $('#author').text('- ' + author)
                $('#text').slideDown("slow");
              $('#author').slideDown("slow");
              $('#tweet-quote').attr('href', "https://twitter.com/intent/tweet?text=" + "\"" + text + "\"" + " " + author + '.' );
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        });
    }
    return(
        <div id="quote-box">
            <span id="text">
                True Love is too good to be true
            </span>
            <span id="author">
                - Anonomus
            </span>
            <span id="tweet-wrapper">
                <a target="_blank" id="tweet-quote" href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" color="#fff">
                        <path fill="#222"
                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg></a>
                <button id="new-quote" onClick={getQuote}>
                    New Quote
                </button>

            </span>
        </div>
    )
}

export default Main;