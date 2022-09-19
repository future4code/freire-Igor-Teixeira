CREATE TABLE User(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM ("NORMAL","ADMIN") DEFAULT "NORMAL"
);

CREATE TABLE Recipes (
	id VARCHAR(255) PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
    description VARCHAR (500) NOT NULL,
    created DATE,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id)
);

CREATE TABLE Follow (
	id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255) NOT NULL,
    user_to_follow_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES User(id),
    FOREIGN KEY (user_to_follow_id) REFERENCES User(id)
);






