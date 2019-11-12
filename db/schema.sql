DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(225)NOT NULL,
	devoured BOOLEAN ,
	PRIMARY KEY (id)
);

insert into burgers(burger_name) values ('Cheese Burger');
insert into burgers(burger_name) values ('Hamburger');
insert into burgers(burger_name) values ('Bacon Cheese Burger');
insert into burgers(burger_name) values ('Veggie Burger');
SELECT * FROM burgers;
