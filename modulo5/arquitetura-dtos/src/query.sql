CREATE TABLE User(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM ("NORMAL","ADMIN") DEFAULT "NORMAL"
);