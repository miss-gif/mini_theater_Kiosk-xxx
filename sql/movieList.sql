DROP TABLE IF EXISTS `projectMovieList`;
create table `projectMovieList` (
	`moviePrimary` int not null auto_increment,
	`movieName` char(50) not null,
	`startTime` char(10) not null,
	`endTime` char(10) not null,
	`screeningPlace` char(50) not null,
	`seatNumber` int not null,
	`seatStatus` char(10) not null,
	primary key(`moviePrimary`)
)auto_increment=1;

