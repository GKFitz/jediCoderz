DROP DATABASE IF EXISTS doghouse_db;

CREATE DATABASE doghouse_db;

USE doghouse_db;

CREATE TABLE dogs (
   id INT AUTO_INCREMENT NOT NULL ,
   username VARCHAR(45) NOT NULL,
   client_name VARCHAR(45) NULL,
   dog_name  VARCHAR(45) NULL,
   breed VARCHAR(45) NULL,
   age INT NULL,
   food_requirements VARCHAR(45) NULL,
   friendliness INT NULL,
   -- checkin_date INT NOT NULL,
   -- checkout_date INT NOT NULL,
   -- petId INT NULL,
   PRIMARY KEY (id)
);

CREATE TABLE accounts (
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(45) NULL,
   passwords INT NULL, 
   roles VARCHAR(45) NULL, 
   -- petId INT NULL,
   PRIMARY KEY (id)
);

-- create table to make new user (petId)
CREATE TABLE newDog (
   id INT AUTO_INCREMENT NOT NULL,
   username VARCHAR(45) NOT NULL,
   client_name VARCHAR(45) NULL,
   dog_name  VARCHAR(45) NULL,
   breed VARCHAR(45) NULL,
   age INT NULL,
   food_requirements VARCHAR(45) NULL,
   friendliness INT NULL,
   -- checkin_date INT NOT NULL,
   -- checkout_date INT NOT NULL,
   -- petId INT NULL,
   PRIMARY KEY (id)
);


-- fn, ls, or just username, role, password, generate id automatically
-- acc id for any dog that belongs to xx, in dog table 

INSERT INTO dog ( username, client_name, dog_name, breed, age, food_requirements, friendliness)
VALUES ("gkf","gillian", "juno", "sheltie", 7 , "raw", 5);

INSERT INTO dog ( username, client_name, dog_name, breed, age, food_requirements, friendliness)
VALUES ("js","Jude", "moana", "chinese_crested", 3 , "kibble", 5);

INSERT INTO dog ( username, client_name, dog_name, breed, age, food_requirements, friendliness)
VALUES ("gb","genis", "snowball", "maltese", 5 , "raw", 4);

INSERT INTO dog ( username, client_name, dog_name, breed, age, food_requirements, friendliness)
VALUES ("ia","alain", "huskiesRock", "huskies", 2 , "kibble", 4);

UPDATE dogs
set checkin
SELECT * FROM dogs;

-- INSERT INTO account (username, password, role)
-- VALUES ("gkf",132, "client");

-- INSERT INTO account (username, password, role)
-- VALUES ("gkf_admin",123, "admin")

