

var quott = ['"In my teams, the goalie is the first attacker, and the striker the first defender"','"There’s only one moment in which you can arrive in time. If you’re not there, you’re either too early or too late"','"Before I make a mistake, I don’t make that mistake"','"I’m not religious. In Spain all 22 players make the sign of the cross before they enter the pitch. If it works all matches must therefore end in a draw"','"We must make sure their worst players get the ball the most. You’ll get it back in no time"','"Quality without results is pointless. Results without quality is boring"','"Playing football is very simple, but playing simple football is the hardest thing there is"','"If I wanted you to understand it, I would have explained it better"','"Every disadvantage has its advantage"','"In a way I’m probably immortal"'];
var mat = Math.random();
if (mat < 0.21) {
  mat = quott[0];
} else if (mat <= 0.1) {
  mat = quott[1];
} else if (mat <= 0.2) {
  mat = quott[2];}
else if (mat <= 0.3) {
  mat = quott[3];}
else if (mat <= 0.4) {
  mat = quott[4];}
else if (mat <= 0.5) {
  mat = quott[5];}
else if (mat <= 0.6) {
  mat = quott[6];}
else if (mat <= 0.7) {
  mat = quott[7];}
else if (mat <= 0.8) {
  mat = quott[8];}
else if (mat <= 0.9) {
  mat = quott[9];}else{
    mat = quott[9];
  };

  
  // Function that generates quote when button is clicked
function getQuote() {
  // Gets the element that has an id of 'quote'
  var el = document.getElementById('quote');
   // Replaces content of element with the randomized quote
  el.textContent = mat;
  // Generates random number between 0 and 1 to select quote from array
  mat = Math.random();
  if (mat < 0.21) {
  mat = quott[0];
} else if (mat <= 0.1) {
  mat = quott[1];
} else if (mat <= 0.2) {
  mat = quott[2];}
else if (mat <= 0.3) {
  mat = quott[3];}
else if (mat <= 0.4) {
  mat = quott[4];}
else if (mat <= 0.5) {
  mat = quott[5];}
else if (mat <= 0.6) {
  mat = quott[6];}
else if (mat <= 0.7) {
  mat = quott[7];}
else if (mat <= 0.8) {
  mat = quott[8];}
else if (mat <= 0.9) {
  mat = quott[9];}else{
    mat = quott[9];
  };
  
  
  tweetQuote();
};

// Tweet Quote
function tweetQuote() {
  var tweet = "https://twitter.com/intent/tweet?text=".concat("Johan Cruyff think: ") + ($("#quote").text());
  $(".twitter-share-button").attr("href",tweet);
}

function axel() {
    document.getElementById("demo").innerHTML =cruyff-R.jpg;
}

    






