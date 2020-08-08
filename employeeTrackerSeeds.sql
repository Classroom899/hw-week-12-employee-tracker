-- DROP DATABASE company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30),
PRIMARY KEY (id)
);

CREATE TABLE role( 
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL(6,2),
department_id INT,
FOREIGN KEY (department_id) REFERENCES department (id), -- Department id is a column we have created in role and a foreign key will live in that column department_id which references the other table department - column id
PRIMARY KEY (id)
);

CREATE TABLE employee(
id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(30),
lastName VARCHAR(30),
role_id INT,
manager_id INT, 
FOREIGN KEY (role_id) REFERENCES role (id),
FOREIGN KEY (manager_id) REFERENCES employee (id),
PRIMARY KEY (id)
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Management");

INSERT INTO department (name)
VALUES ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("Senior Manager",  1000.00, 2);

INSERT INTO role (title, salary, department_id)
VALUES ("Chemical Engineer", 9000.00, 1);

INSERT INTO role (title, salary, department_id)
VALUES ("FCA Engineer Intern", 1000.00, 1);









