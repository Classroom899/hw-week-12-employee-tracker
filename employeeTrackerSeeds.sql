-- CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department(
id INTEGER(11) AUTO_INCREMENT NOT NULL,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role( 
-- PRIMARY KEY (id), 
title VARCHAR(30)
);

CREATE TABLE employee(
-- PRIMARY KEY (id)
firstName VARCHAR(30),
lastName VARCHAR(30)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;


