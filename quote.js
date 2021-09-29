function quote(){
	var modal = document.getElementById("myModal");
       modal.style.display = "block";
      
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const tweet = document.getElementById("tweet");
const fb = document.getElementById("fb");
const wa = document.getElementById("wa");
let realData = "";
let quotesData = "";
const tweetMe = () => {
	let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text} -${quotesData.author}`;
	window.open(tweetPost);
};
const fbpost = () => {
	let facepost = "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fraj2852.github.io%2FMediheal&amp;src=sdkpreparse";
	window.open(facepost);
};
const washare = () => {
	let whatshare = `https://api.whatsapp.com/send?text=${quotesData.text} -${quotesData.author}`;
	window.open(whatshare);
};
const getNewQuotes = () => {
	var min = 0;
	var max = 1643;
	let rnum = Math.floor(Math.random()* (max - min) + min);
	quotesData = realData[rnum];
	quotes.innerText = `${quotesData.text}`;
	author.innerText = `-${quotesData.author}`;
}; 
const getQuotes = async () => {
const api = "https://type.fit/api/quotes";
try {
	let data = await fetch(api);
	realData = await data.json();
	getNewQuotes();
}catch(error){}
};
tweet.addEventListener('click', tweetMe);
fb.addEventListener('click', fbpost);
wa.addEventListener('click', washare);
getQuotes();