DROP DATABASE IF EXISTS doghouse_db;

CREATE DATABASE doghouse_db;

USE doghouse_db;

CREATE TABLE dogs (
   id INT NOT NULL AUTO_INCREMENT,
   client_dog  VARCHAR(45) NULL,
   breed VARCHAR(45) NULL,
   client_name VARCHAR(45) NULL,
   food_requirements VARCHAR(45) NULL,
   friendliness INT NULL,
   petId INT NULL,
   age INT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE accounts (
   id INT NOT NULL AUTO_INCREMENT,
   admin_id VARCHAR(45) NULL,
   admin_password INT NULL, 
   client_password INT NULL,
   roles VARCHAR(45) NULL, 
   petId INT NULL,
   PRIMARY KEY (id)
);

-- create table to make new user (petId)
CREATE TABLE newClient (
   id INT NOT NULL AUTO_INCREMENT,
   client_dog  VARCHAR(45) NULL,
   breed VARCHAR(45) NULL,
   client_name VARCHAR(45) NULL,
   food_requirements VARCHAR(45) NULL,
   friendliness INT NULL,
   petId INT NULL,
   age INT NULL,
   PRIMARY KEY (id)
);


-- fn, ls, or just username, role, password, generate id automatically
-- acc id for any dog that belongs to xx, in dog table 