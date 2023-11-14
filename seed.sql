create table instructors (
    id serial primary key,
    name varchar(50),
    age integer,
    subject varchar(50)
    );

create table students (
    id serial primary key,
    name varchar(50),
    age integer,
    instructor_id integer not null references instructors(id) 
);

insert into instructors (name,age,subject) values
    ('houston',50,'physics'),
    ('kleinfelder',45,'calculus');

insert into students (name,age,instructor_id) values
    ('simon',16,1),
    ('alexa',15,1),
    ('haruna',15,1),
    ('christina',16,1),
    ('luke',16,1),
    ('kenny',15,1),
    ('abraham',16,1),
    ('ben',15,2),
    ('charlie',16,2),
    ('danny',15,2),
    ('finny',16,2),
    ('harley',15,2),
    ('jake',16,2);
