// sleep function

//  button handler for ajax request to get quote from ninja api
function getQuote(){
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

const COLORS = ['#070A52', '#393646', '#2C3333', '#7D1935', '#595B83', '#476D7C', '#65647C', '#AC7D88', '#316B83'];
const changeBG = function(){
  const random_color = COLORS[Math.floor(Math.random() * COLORS.length)];
  $('#quote-box').animate().css('color', random_color);
  $('body').animate().css('background-color', random_color);
  $('#new-quote').css('color', random_color);
  $('#new-quote').css('border', '2px solid ' + random_color);
  
  $('path').attr('fill', random_color);
  
}
getQuote();


