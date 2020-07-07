INSERT INTO department (name)
VALUES ("Accounting"), ("Supplier_Quality"), ("HR");

INSERT INTO Role (title, salary, department_id)
VALUES ("Chemical Engineer", 9000.00, 1)

INSERT INTO Role (title, salary, department_id)
VALUES ("Senior Manager",  1000.00, 1);

INSERT INTO Role (title, salary, department_id)
VALUES ("FCA Engineer Intern", 1000.00, 1);

INSERT INTO employee (firstName, lastName, role_id, manager_id)
VALUES ("Joe", "Smith", 2, 4)

SELECT employee.id, employee.firstName, employee.lastName, role.title, role.salary, department.name, manager.firstName
FROM employee
LEFT JOIN role
ON
employee.role_id=role.id -- order matters when doing left joins

LEFT JOIN department 
ON
role.department_id=department.id

LEFT JOIN employee AS manager -- alias used here
ON
employee.id=manager.id

