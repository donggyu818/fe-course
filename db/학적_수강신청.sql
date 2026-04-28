/**************************************
	학적과 수강신청 실습 데이터베이스
***************************************/
-- 데이터베이스 생성
create database if not exists `enroll2026`;
show databases;
use enroll2026;
select database();

	-- 구조 만들기 --
create table instructor(
	instructor_no		int		primary key,
    instructor_name		varchar(5),
    age					int,
    gender				char(1)
);
select * from instructor;
desc instructor;
create table subject(
	subject_no			int		primary key,
    subject_name		varchar(15),
    class_room			varchar(7),
    instructor_no		int
);
create table class_time(
	time_id				int		primary key,
    subject_no			int,
    class_time			varchar(5)
);
create table enrollment(
	student_id			int,
    subject_no			int,
    grade				char(1)
);
create table student(
	student_id			int		primary key,
    student_name		varchar(5),
    address				varchar(15)
);

	-- fk 연동 --
alter table subject
	drop constraint fk_subject_instructor_no;

alter table subject
	add constraint fk_subject_instructor_no foreign key(instructor_no)
		references instructor(instructor_no)
			on delete cascade
            on update cascade;
alter table class_time
	add constraint fk_class_time_subject_no foreign key(subject_no)
		references subject(subject_no);
alter table enrollment
	add constraint fk_enrollment_student_id foreign key(student_id)
		references student(student_id);
alter table enrollment
	add constraint fk_enrollment_subject_no foreign key(subject_no)
		references subject(subject_no);

	-- 확인 --
desc instructor;
desc subject;
desc class_time;
desc student;
desc enrollment;

-- auto_increment 로 변경하고 싶은데 안 됨.
alter table instructor
	modify instructor_no int auto_increment primary key;