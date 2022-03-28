const mysql = require('mysql');
const express = require("express");
const kiosk_app = express();

kiosk_app.get('/', function(req,res){
	res.sendFile(__dirname + "../index.html");
	console.log(__dirname);
});

kiosk_app.listen(1501, function(){
	console.log("open 1501 port");
});

var con = mysql.createConnection({
	host: "localhost",
	user: "c15st01",
	password: "H07dQfkwWfP5TmM5",
	database: "c15st01"
});

con.connect(function(err){
	let tmpMovieName = [];
	if (err) throw err;
	console.log("Connected!");
	con.query("SELECT * FROM projectMovieList group by movieName", function(err, _tmpMovieName, fields){
		if (err) throw err;
		_tmpMovieName.forEach(function(v,i,a){
			console.log(v.movieName);
			tmpMovieName.push(v.movieName);
			// 영화제목
			con.query(`SELECT * FROM projectMovieList group by screeningPlace Having movieName='${v.movieName}'`, function(err, _tmpMoviePlace, fields){
				if (err) throw err;
				_tmpMoviePlace.forEach(function(v,i,a){
					// 상영 장소
					console.log(v.screeningPlace);
					con.query(`SELECT * FROM projectMovieList group by startTime Having screeningPlace='${v.screeningPlace}'`, function(err, _tmpScreeningPlace, fields){
						_tmpScreeningPlace.forEach(function(v,i,a){
							// 시작시간 ~ 종료시간
							console.log(v.startTime + " ~ " + v.endTime + "<br>");
							con.query(`SELECT COUNT(*) as _count FROM projectMovieList where startTime='${v.startTime}'` ,function(err, _tmpCountEmptySeat, fields){
								if (err) throw err;
								// 공석갯수
								console.log("남은 좌석 : "+ _tmpCountEmptySeat[0]._count);
							});
						});
					});
				});
			});
		});
	});
});
