<?php
include './inc/dbInfo.inc';
$db_connect = mysqli_connect($server_name, $server_id, $server_pw, $server_db);
if(!$db_connect){echo "DB 로그인 실패";}
mysqli_query($db_connect, 'delete from `projectMovieList');
mysqli_query($db_connect, 'ALTER TABLE `projectMovieList` AUTO_INCREMENT=1');


for($seatNumber = 0; $seatNumber < 30; $seatNumber++){
	// 1관 배트맨
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "12:55", "14:55", "1관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "15:20", "17:20", "1관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "17:45", "19:45", "1관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "20:10", "22:10", "1관", '.$seatNumber.', "empty")');
	
	// 4관 배트맨		
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "13:55", "15:55", "4관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "16:20", "18:20", "4관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "18:45", "20:45", "4관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("더 배트맨", "21:10", "23:10", "4관", '.$seatNumber.', "empty")');
	
	// 2관  이상한 나라의 수학자
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "12:15", "14:15", "2관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "14:40", "16:40", "2관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "17:05", "19:05", "2관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "19:30", "21:30", "2관", '.$seatNumber.', "empty")');
	
	// 5관 이상한 나라의 수학자	
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "13:15", "15:15", "5관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "15:40", "17:40", "5관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "18:05", "20:05", "5관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("이상한 나라의 수학자", "20:30", "22:30", "5관", '.$seatNumber.', "empty")');
	
	// 3관 레벤르망
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "13:35", "15:35", "3관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "16:00", "18:00", "3관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "18:25", "20:25", "3관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "20:50", "22:50", "3관", '.$seatNumber.', "empty")');

	// 6관 레벤르망
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "12:35", "14:35", "6관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "15:00", "17:00", "6관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "17:25", "19:25", "6관", '.$seatNumber.', "empty")');
	mysqli_query($db_connect, 'insert into `projectMovieList`(movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ("레벤르망", "19:50", "21:50", "6관", '.$seatNumber.', "empty")');
}
 

/* 왜 안되는지 몰라서 주석처리한 코드 
function movieInsertQuery($inputName, $inputStart, $inputEnd, $inputPlace, $inputStatus){
	global $db_connect;
	for($seatNumber=0;$seatNumber<30;$seatNumber++){
		echo $seatNumber."<br>";
		mysqli_query($db_connect, 'insert into `projectMovieList` (movieName, startTime, endTime, screeningPlace, seatNumber, seatStatus) values ('.$inputName.', '.$inputStart.', '.$inputEnd.', '.$inputPlace.', '.$seatNumber.', '.$inputStatus.')');
	}
}
movieInsertQuery("더 배트맨","12:55","14:55","1관","empty"); */
mysqli_close($db_connect);
?>
