
/*var play = document.getElementById("play");
	var prev = document.getElementById("prev");
	var next = document.getElementById("next");
var music = document.querySelector("audio");
let isplay = false;
var playmusic =  () => {
	isplay = true;
	music.play();
	play.classList.replace("fa-play", "fa-pause");
};

var pausemusic =  () => {
	isplay = false;
	music.pause();
	play.classList.replace("fa-pause", "fa-play");
};

play.addEventListener('click', () => {
	if(isplay){
		pausemusic();
	}
	else{
		playmusic();
	}
})*/
//for stressed music section
var button = document.getElementById("btn1");
	var play = document.getElementById("play");
	var audio = document.getElementById("aud1");
	button.addEventListener('click', function(){
		if (audio.paused){
			audio.play();
			play.classList.replace("fa-play", "fa-pause");
		}
		else{
			audio.pause();
			play.classList.replace("fa-pause", "fa-play");
		}
	});
//for frustrated music section
	var but = document.getElementById("btn2");
	var pl = document.getElementById("play1");
	var aud = document.getElementById("aud2");
	but.addEventListener('click', function(){
		if (aud.paused){
			aud.play();
			pl.classList.replace("fa-play", "fa-pause");
		}
		else{
			aud.pause();
			pl.classList.replace("fa-pause", "fa-play");
		}
	});
//for heart broken music section
	var butt = document.getElementById("btn3");
	var ply = document.getElementById("play2");
	var audi = document.getElementById("aud3");
	butt.addEventListener('click', function(){
		if (audi.paused){
			audi.play();
			ply.classList.replace("fa-play", "fa-pause");
		}
		else{
			audi.pause();
			ply.classList.replace("fa-pause", "fa-play");
		}
	});
//for happy music section
var a = document.getElementById("btn4");
	var b = document.getElementById("play3");
	var c = document.getElementById("aud4");
	a.addEventListener('click', function(){
		if (c.paused){
			c.play();
			b.classList.replace("fa-play", "fa-pause");
		}
		else{
			c.pause();
			b.classList.replace("fa-pause", "fa-play");
		}
	});
//for insomnia music section 
var d = document.getElementById("btn5");
	var e = document.getElementById("play4");
	var f = document.getElementById("aud5");
	d.addEventListener('click', function(){
		if (f.paused){
			f.play();
			e.classList.replace("fa-play", "fa-pause");
		}
		else{
			f.pause();
			e.classList.replace("fa-pause", "fa-play");
		}
	});
//for depressed music section
var g = document.getElementById("btn6");
	var h = document.getElementById("play5");
	var i = document.getElementById("aud6");
	g.addEventListener('click', function(){
		if (i.paused){
			i.play();
			h.classList.replace("fa-play", "fa-pause");
		}
		else{
			i.pause();
			h.classList.replace("fa-pause", "fa-play");
		}
	});
//for pessimistic music section
var j = document.getElementById("btn7");
	var k = document.getElementById("play6");
	var l = document.getElementById("aud7");
	j.addEventListener('click', function(){
		if (l.paused){
			l.play();
			k.classList.replace("fa-play", "fa-pause");
		}
		else{
			l.pause();
			k.classList.replace("fa-pause", "fa-play");
		}
	});
//for anxious music section
var m = document.getElementById("btn8");
	var n = document.getElementById("play7");
	var o = document.getElementById("aud8");
	m.addEventListener('click', function(){
		if (o.paused){
			o.play();
			n.classList.replace("fa-play", "fa-pause");
		}
		else{
			o.pause();
			n.classList.replace("fa-pause", "fa-play");
		}
	});
//for excited music section
var p = document.getElementById("btn9");
	var q = document.getElementById("play8");
	var r = document.getElementById("aud9");
	p.addEventListener('click', function(){
		if (r.paused){
			r.play();
			q.classList.replace("fa-play", "fa-pause");
		}
		else{
			r.pause();
			q.classList.replace("fa-pause", "fa-play");
		}
	});
//for optimistic music section
var s = document.getElementById("btn10");
	var t = document.getElementById("play9");
	var u = document.getElementById("aud10");
	s.addEventListener('click', function(){
		if (u.paused){
			u.play();
			t.classList.replace("fa-play", "fa-pause");
		}
		else{
			u.pause();
			t.classList.replace("fa-pause", "fa-play");
		}
	});