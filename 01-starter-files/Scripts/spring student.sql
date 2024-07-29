-- Drop user first if they exist
DROP USER if exists 'springstudent'@'%' ;

-- Now create user with prop privileges
CREATE USER 'springstudent'@'%' IDENTIFIED BY 'ducnhu1234';

GRANT ALL PRIVILEGES ON * . * TO 'springstudent'@'%';