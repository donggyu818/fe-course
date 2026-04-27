-- 한 줄 주석

/*
	여러줄 주석
    MySQL
    - 정형 데이터를 저장하는 데이터베이스
    - RDBMS(Relational DataBase Management System) 구조
    - SQL(Structured Query Language) 문법을 사용하여 데이터의 CRUD를 구현한다.
    - C(Create) :: Insert
    - R(Read) :: Select
    - U(Update) :: Update
    - D(Delete) :: Delete
    - 개발자는 DML 중심의 SQL 문법을 숙지하는 것을 권장한다.
    - SQL 은 대소문자를 구분하지 않음, 하지만 대부분 소물자로 작성한다.
    - snake case 방식으로 파일명을 작성한다. 예) sql_001
    
    SQL
    - SQL 의 종류는 DDL, DML, DCL, DTL 로 구분한다.
    1. DDL(Data Definition Language) : 데이터 정의어
		- 데이터를 저장하기 위한 공간을 생성하고 논리적으로 정의하는 언어
        - create, alter, truncate, drop 등
	2. DML(Data Manipulation Language) : 데이터 조작어
		- 데이터를 CRUD 하는 명령어
        - insert, select, update, delete
	3. DCL(Data Control Language) : 데이터 제어어
		- 데이터에 대한 권한과 보안을 정의하는 언어
        - grant, revoke
	4. DTL(Data Transaction Language) : 트랜잭션 제어어
		- 데이터베이스의 처리 작업인 트랜잭션을 관리하는 언어
        - commit, save, rollback
*/

/********************************
	⚠ 워크벤치 실행 시 필수 명령어 ⚠ - 무조건 외워야 함.
		1. 데이터베이스 접속
			show databases;		-- 데이터베이스 확인
			use 데이터베이스명;		-- 사용할 데이터베이스 오픈
			select database();	-- 데이터베이스 선택
			show tables;		-- 데이터베이스의 모든 테이블 조회
********************************/

show databases;
use hrdb2019;
select database();
show tables;

/*********************
	DESC(DESCRIBE) : 테이블 구조 확인
    형식 :: desc 테이블명
*********************/

show databases;
use hrdb2019;
select database();
show tables;
desc department;
desc unit;

/*********************
	SELECT : 테이블 내용 조회
    형식 :: select [컬럼리스트] from [테이블명]
*********************/

show tables;
desc employee;
select emp_id, emp_name, eng_name from employee;
select * from employee;		-- * : 전체리스트

-- 사원 테이블의 사번, 사원명, 성별, 입사일, 급여를 조회
desc employee;
select emp_id, emp_name, gender, hire_date, salary from employee;

-- 부서 테이블의 모든 데이터 조회
show tables;
select * from department;

/*********************
	AS : 컬럼의 별칭 부여
    형식 :: select [컬럼명 as 별칭, ...] from [테이블명]
    컬럼명에 함수를 적용하여 실행하는 경우에 별칭 부여
*********************/
-- 사원테이블의 emp_id 컬럼명을 '사번' 별칭으로 조회
select emp_id as 사번 from employee;
select emp_id 사번 from employee;		-- as 생략 가능
select emp_id '사원 번호' from employee;	-- 띄어쓰기 있을 땐 '' 로 묶어주기

-- 사원테이블의 별칭을 사번(emp_id), 사원명(emp_name), 입사일(hire_date), 급여(salary)로 조회
show tables;
select * from department;
select emp_id as 사번, 
		emp_name as 사원명,
        hire_date as 입사일,
        salary as 급여
from employee;

-- 사원테이블의 사원명, 폰번호, 급여, 보너스(급여의 10%), 입사일 조회
-- 산술 연산식이 가능한 컬럼은 Number 타입 가능
desc employee;
select emp_name, phone, salary, salary*0.1 as bonus, hire_date
	from employee;
    
-- 현재 날짜를 조회 : curdate()
select curdate() as today from dual;

/*********************
	SELECT ~ FROM ~ WHERE : 테이블 상세 내용 조회
    형식 :: select [컬럼명 as 별칭, ...] from [테이블명] where [컬럼명] [조건절]
*********************/
select * from employee where emp_id='S0004';
-- 사원테이블에서 '정주고' 사원의 정보 조회
desc employee;
select * from employee where emp_name='정주고';

-- sys 부서에 속한 모든 사원을 조회
-- 단 출력되는 EMP_ID 컬럼은 '사원번호' 별칭으로 조회
desc department;
select * from department where dept_id='sys';		-- MySQL 에서는 대/소문자 구분이 안 되기에 sys 라 쳐도 SYS 검색됨.
select * from department;

desc employee;
select *
	from employee
    where dept_id = 'SYS';		-- 소문자 sys 도 가능
    
select emp_id as '사원번호',
		emp_name,
        hire_date,
        salary
	from employee
    where dept_id = 'sys';
    
-- 🔅 컬럼 별칭을 통해 조건절을 처리할 수 있을까요??
-- emp_name 의 별칭인 '사원명'으로 '홍길동' 을 조회 불가능!!
select emp_id,
		emp_name as '사원명',
        hire_date,
        salary
	from employee
    where emp_name = '홍길동';		-- 조건절의 컬럼명은 테이블의 원본 컬럼명만 가능!! where '사원명' 은 안 됨. select 하기 전 where 부터 받고 출력하기 때문.
    
-- 입사일이 2014년 8월 1일인 사원들을 조회
-- date 타입은 문자열처럼 표현하고, 숫자처럼 처리함.
select *
	from employee
    where hire_date = '2014-08-01';
    
-- 급여가 5000 인 사원들을 조회
select *
	from employee
    where salary = '5000';
    
-- 성별이 남자인 사원들을 조회
select *
	from employee
    where gender = 'M';

-- 성별이 남자인 사원들을 조회
select *
	from employee
    where gender = 'f';
    
/*********************
	NULL : 아직 정의되지 않은 미지수
    논리적인 값으로 조건식을 처리 - is null, is not null
*********************/
desc employee;

-- 급여가 null 인 사원들을 조회
select *
	from employee
    where salary is null;
    
-- 영어 이름이 정해지지 않은 사원들을 조회
select *
	from employee
    where eng_name is null;
    
-- 재직중인 사원들을 조회
select *
	from employee
    where retire_date is null;
    
-- 퇴사한 사원들을 조회
select *
	from employee
    where retire_date is not null;
    
-- 재직중인 사원들의 보너스 컬럼을 추가하고, 급여의 20% 를 설정하여 조회
-- 보너스 컬럼의 컬럼명은 'bonus'
select *, salary * 0.2 as bonus
	from employee
    where retire_date is null;

/*********************
	IFNULL 함수 : Null 을 다른값으로 대체해주는 함수
    형식 :: IFNULL(NULL 포함 컬럼명, 대체값);
*********************/

-- STG 부서에 속한 사원들의 정보 조회
-- 단, 급여가 NULL 인 사원은 0 값으로 치환
select emp_id,
		emp_name,
		eng_name,
        dept_id,
        ifnull(salary, 0) as salary
	from employee
    where dept_id = 'stg';
    
-- 영어 이름이 정해지지 않은 사원은 'smith' 이름으로 치환
-- 사원번호, 사원명, 영어이름, 입사일, 부서아이디

select emp_id,
		emp_name,
        ifnull(eng_name, 'smith') as eng_name,
        hire_date,
        dept_id
	from employee;
        
-- MKT 부서의 사원들을 조회, 재직중인 사원들의 retire_date 를 현재 날짜로 치환
select emp_id,
		emp_name,
		dept_id,
        hire_date,
        ifnull(retire_date, curdate()) as retire_date
	from employee
	where dept_id = 'MKT'
    
	-- ---------- 수업 여기까지 들음 ------------ --
    
/***************************************************
	DISTINCT : 중복된 데이터를 배제하고 조회
	형식> SELECT DISTINCT [컬럼 리스트..] 
		 FROM ~
         WHERE ~
****************************************************/
-- 사원테이블에서 부서아이디를 조회
-- 사원테이블의 부서아이디는 부서테이블의 부서아이디를 참조하므로 다중 조회
select distinct dept_id	from employee;

-- unique한 키와 함께 조회하는 경우 distinct가 적용되지 않음
select distinct emp_id, dept_id from employee;
    
/***************************************************
	ORDER BY : 데이터 정렬
	형식> SELECT [컬럼 리스트..] 
		 FROM [테이블명]
         WHERE [조건절]
         ORDER BY [컬럼명] ASC(오름차순)/DESC(내림차순);
****************************************************/
-- 급여를 기준으로 오름차순/내림차순 정렬
select *  
	from employee
    order by salary desc;

-- 모든 사원을 급여, 성별을 기준으로 오름차순 정렬
select *
	from employee
    order by salary, gender asc;

-- eng_name 컬럼이 널인 사원들의 입사일이 가장 최근 순서로 조회
select *
	from employee
    where eng_name is null
    order by hire_date desc;

-- 퇴직한 사원들을 급여기준으로 내림차순 정렬
select *
	from employee
    where retire_date is not null
    order by salary desc;

-- 퇴직한 사원들을 급여기준으로 내림차순 정렬
-- 사번, 사원명, 입사일, 퇴사일, 급여
-- salary 컬럼의 별칭으로 '급여' 사용
select  emp_id,						-- (3)
		emp_name,
        hire_date,
        retire_date,
        salary as '급여'
	from employee					-- (1)
    where retire_date is not null   -- (2) 조건절 컬럼명으로 별칭 사용❌
    order by '급여' desc;			-- (4) 정렬 컬럼명으로 별칭 사용 ⭕

-- 정보시스템(SYS) 부서 사원들 중 입사일이 빠른 순서, 급여를 많이 받는 순서로 정렬
-- HIRE_DATE, SALARY 컬럼은 '입사일','급여' 별칭으로 컬럼리스트 생성 후 정렬
select  emp_id,
		emp_name,
        hire_date as '입사일',
        salary as '급여'
from employee
where dept_id = 'SYS'
order by '입사일' asc, '급여' desc;    

show databases;
use hrdb2019;
select database();
show tables;

/******************************
	조건절 + 비교연산자 : 특정 범위 혹은 데이터를 검색
    형식 > SELECT [컬럼리스트]
			FROM [테이블]
            WHERE [컬럼명] [비교연산자] [값]
            ORDER BY [컬럼명, ..] ASC/DESC
******************************/

-- 급여가 5000 이상인 사원들을 조회, 급여를 오름차순 정렬
select *
	from employee
    where salary >= 5000
    order by salary asc;	-- order by 하면 오름차순이 기본값이라 안 붙여도 됨.
    
-- 입사일이 '2017-01-01' 이후 입사한 사원들을 조회
select *
	from employee
    where hire_date > '2017-01-01';
    
-- 입사일이 '2015-01-01' 이후이거나, 급여가 6000 이상인 사원들을 조회
-- ~ 또는, ~ 이거나 : OR - 두 개의 조건 중 하나만 만족해도 조회
select *
	from employee
    where hire_date > '2015-01-01' or salary >= 6000;

-- 입사일이 '2015-01-01' 이후이고, 급여가 6000 이상인 사원들을 조회
-- ~이고 : AND - 두 개의 조건이 모두 만족해야 조회
select *
	from employee
    where hire_date > '2015-01-01' and salary >= 6000;

-- 특정 범위 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
select *
	from employee
    where hire_date >= '2015-01-01' and hire_date <= '2017-12-31';
    
-- 급여가 6000 이상 8000 이하인 모든 사원들을 조회
select *
	from employee
    where salary >= 6000 and salary <= 8000;
    
/******************************
	특정 범위 액세스 (논리곱) : BETWEEN ~ AND
    형식 > SELECT [컬럼리스트]
			FROM [테이블]
            WHERE [컬럼명] BETWEEN [값1] AND [값2]
******************************/
-- 위에서 한 걸 BETWEEN ~ AND 사용해보기
-- 특정 범위 : 2015-01-01 ~ 2017-12-31 사이에 입사한 모든 사원 조회
select *
	from employee
    where hire_date between '2015-01-01' and '2017-12-31';
    
-- 급여가 6000 이상 8000 이하인 모든 사원들을 조회
select *
	from employee
    where salary between 6000 and 8000;
    
/******************************
	특정 범위 액세스 (논리합) : IN (값1, 값2, 값3, ...)
    형식 > SELECT [컬럼리스트]
			FROM [테이블]
            WHERE [컬럼명] IN (값1, 값2, 값3, ...)
******************************/
-- 사원명이 '오삼식', '김삼순', '일지매' 사원들을 조회
select *
	from employee
    where emp_name = '오삼식' or emp_name = '김삼순' or emp_name = '일지매';
    
select *
	from employee
    where emp_name in ('오삼식', '김삼순', '일지매');
    
-- 부서 아이디가 MKT, SYS, STG 에 속한 모든 사원들을 조회
select *
	from employee
    where dept_id = 'MKT' or dept_id = 'SYS' or dept_id = 'STG'
    order by dept_id ;
    
select *
	from employee
    where dept_id in ('MKT', 'SYS', 'STG')
    order by dept_id;
    
/******************************
	특정 문자열 검색 : 와일드 문자(%, _) + LIKE
					%(전체), _(한 글자)
    형식 > SELECT [컬럼리스트]
			FROM [테이블]
            WHERE [컬럼명] LIKE '검색데이터(와일드 문자 포함)'
******************************/
-- '한' 씨 성을 가진 모든 사원을 조회
select *
	from employee
    where emp_name LIKE '한%';

-- 영어 이름이 'f' 로 시작하는 모든 사원을 조회
select *
	from employee
    where eng_name like 'f%';
    
-- 이메일 두 번째 자리에 'a' 가 들어가는 모든 사원들을 조회
select *
	from employee
    where email like '_a%';
    
-- 이메일 아이디가 4자리인 모든 사원들을 조회
select *
	from employee
    where email like '____@%';
    
-- 부서 아이디에 'A' 가 들어가는 모든 사원들을 조회
select *
	from employee
    where dept_id like '%A%';
    
/******************************
	내장함수 : 숫자함수, 문자함수, 날짜함수
	호출되는 위치 - [컬럼리스트], [조건절의 컬럼명]
******************************/
-- [숫자함수]
-- 함수 실습을 위한 테이블 : DUAL
-- (1) 절대값 : abs(숫자)
select abs(100),
		abs(-100),
        100,
        -100
	from dual;
    
-- (2) 소수점 절삭 : floor(숫자) : 정수로 표시, truncate(숫자, 자릿수) : 자릿수까지 표시
select floor(123.456), truncate(123.456, 0), truncate(123.456, 2)
	from dual;
    
-- 사원테이블 내 sys 부서 사원들의 사번, 사원명, 부서아이디, 폰번호, 급여
-- 보너스(급여의 25%) 컬럼을 추가하여 조회, 보너스는 소숫점 1자리 출력
select emp_id, emp_name, dept_id, phone, salary, truncate(salary*0.25, 1) as bonus
	from employee
	where dept_id = 'SYS';
    
-- (3) rand() : 임의의 난수를 발생시키는 함수 (0 ~ 1 사이의 난수)
select rand() from dual;

-- 정수 3자리(0 ~ 999) 사이의 난수 발생
select floor(rand()*1000) as number from dual;
-- 정수 4자리(0 ~ 9999) 사이의 난수 발생, 소숫점 2자리
select truncate(rand()*10000, 2) as number from dual;

-- (4) mod(숫자, 나누는 숫자) : 나머지 함수
select mod(123, 2) as odd,
		mod(124, 2) as even from dual;
        
-- 3자리 수를 랜덤으로 발생시켜, 2로 나누어 홀수와 짝수를 구분
select mod(floor((rand()*1000)+1), 2) as number from dual;

-- [문자함수]
-- (1) concat(문자열1, 문자열2) : 문자열 결합 함수
select concat('안녕하세요~ ', 'MySQL', ' 공부중입니다') as str from dual;

-- 사원테이블의 사원번호, 사원명, 사원명2 컬럼을 조회
-- 사원명2 컬럼을 데이터 형식 : 예) S0001(홍길동)
select emp_id, emp_name, concat(emp_id, '(', emp_name, ')') as emp_name2
	from employee;
    
-- 사번, 사원명, 영어이름, 입사일, 폰번호, 급여를 조회
-- 영어이름의 출력형식을 '홍길동/hong' 타입으로 출력
-- 영어이름이 null 인 경우에는 'smith' 를 기본으로 조회
select emp_id, emp_name, concat(emp_name, '/', ifnull(eng_name, 'smith')) as eng_name, hire_date, phone, salary
	from employee;
    
-- (2) substring(문자열, 위치, 갯수) : 문자열 추출, 공백도 문자열 포함, 위치는 1부터 시작
select substring('대한민국 홍길동', 1, 4) as str1,
		substring('대한민국 홍길동', 6, 3) as str2
	from dual;
-- 사원테이블의 사번, 사원명, 입사년도, 입사월, 입사일, 급여를 조회
select emp_id, emp_name, 
		substring(hire_date, 1, 4) as year, 
        substring(hire_date, 6, 2) as month, 
        substring(hire_date, 9, 2) as day, 
        salary
	from employee;
-- 2015년도 입사한 모든 사원 조회
select *
	from employee
    where substring(hire_date, 1, 4) = '2015';
-- 2018년도에 입사한 정보시스템(sys) 부서의 사원들을 조회
select *
	from employee
    where substring(hire_date, 1, 4) = '2018' and dept_id = 'SYS';
    
-- (3) left(문자열, 갯수), right(문자열, 갯수) : 왼쪽, 오른쪽 기준으로 문자열 추출
select left(curdate(), 4) as year,
		substring(curdate(), 6, 2) as month,
        right(curdate(), 2) as day
	from dual;
    
-- 2018년도에 입사한 모든 사원을 조회
select *
	from employee
	where left(hire_date, 4) = '2018';
-- 2015년부터 2017년 사이에 입사한 모든 사원들을 조회
select *
	from employee
    where left(hire_date, 4) between '2015' and '2017';
-- 사원번호, 사원명, 입사일, 폰번호, 급여를 조회. 단, 폰번호는 마지막 4자리만 출력
select emp_id, emp_name, hire_date, right(phone, 4) as phone, salary
	from employee;
    
-- (4) upper(문자열), lower(문자열) : 대, 소문자로 치환
select upper('WelcomeToMySQL!!') as upper,
		lower('WelcomeToMySQL!!') as lower from dual;

desc employee;
-- 사번, 사원명, 영어이름, 부서아이디, 이메일, 급여를 조회
-- 영어이름은 대문자, 부서아이디는 소문자, 이메일은 대문자
select emp_id, emp_name, upper(ifnull(eng_name, '')) as eng_name, lower(dept_id) as dept_id, upper(email) as email, salary
	from employee;
    
-- (5) trim(문자열) : 앞, 뒤 공백 제거
select trim('         대한민국') as t1,
		trim('대한민국        ') as t2,
        trim('   대한민국     ') as t3,
        trim('  대한   민국   ') as t4
	from dual;
    
-- (6) format(문자열, 소수점자리) : 문자열 포맷 - 3자리 콤마 구분
select format(123456, 0) as format1,
		format('123456', 0) as format2,		-- 숫자로 입력했다면 문자형으로 줘도 숫자형으로 자동 변환해서 출력함.
        format('가나다라마바', 0) as format3
	from dual;
    
-- 사번, 사원명, 입사일, 폰번호, 급여, 보너스(급여의 20%)를 조회
-- 급여, 보너스는 소수점 없이 3자리 콤마(,) 로 구분하여 출력
-- 급여가 null 인 경우에는 기본값 0
-- 2016년부터 2017년 사이에 입사한 사원
-- 사번 기준으로 내림차순 정렬
select emp_id, emp_name, hire_date, phone, concat(ifnull(format(salary, 0), 0), '원') as salary, concat(format(salary*0.2, 0), '원') as bonus
	from employee
    where left(hire_date, 4) between '2016' and '2017'
    order by emp_id desc;
    
-- [날짜 함수]
-- curdate() : 년-월-일 형식으로 현재 날짜를 출력
-- sysdate(), now() : 년-월-일 시:분:초 형식으로 현재 날짜와 시간이 출력
select curdate() as today1,
		sysdate() as today2,
        now() as today3
	from dual;
    
-- [형변환 함수]
-- cast(변환값 as 데이터타입)
-- convert(변환값 as 데이터타입) ::  MySQL OLD 버전
select 123 as number, cast(123 as char) as str from dual;		-- char : 문자형
select '1234' as str, cast('1234' as signed integer) as number from dual;
select '20260421' as str, cast('20260421' as date) as date1 from dual;

-- now()
select now() as date, 
		cast(now() as char) as string,
		cast(cast(now() as char) as date) as datetime
	from dual;
    
-- signed integer, unsigned integer, decimal
select '1234' as string, cast('1234' as signed integer) as cast_int, cast('1234' as unsigned integer) as cast_int, cast('1234' as decimal(10,2)) as cast_decimal
	from dual;
    
-- [문자열 치환 함수]
-- replace(문자열, old, new)
select '홍-길-동' as old, replace('홍-길-동', '-', '/') as new
	from dual;
    
-- 사원테이블의 사번, 사원명, 입사일, 퇴사일, 부서아이디, 폰번호, 급여를 조회
-- 입사일, 퇴사일 출력은 '-' 을 '/' 로 치환하여 출력
-- 재직중인 사원은 현재날짜를 출력
-- 급여 출력 시 3자리 콤마(,) 구분
select emp_id, 
		emp_name, 
        replace(hire_date, '-', '/') as hire_date, 
        replace(ifnull(retire_date, curdate()), '-', '/') as retire_date, 
        dept_id, 
        phone, 
        format(salary, 0) as salary
	from employee;
    
-- '20150101' 입력된 날짜를 기준으로 해당 날짜 이후에 입사한 사원들을 모두 조회
-- 모든 mysql 데이터베이스에서 적용 가능한 형태로 작성	- (cast 를 안 줘도 현재 버전에선 출력되나, 옛 버전에서는 출력 안 됨. 실무적으로도 cast 로 작성하는 게 좋음)
select *
	from employee
    where hire_date > cast('20150101' as date);
    
-- '20150101' ~ '20171231' 사이에 입사한 사원들을 모두 조회
-- 모든 mysql 데이터베이스에서 적용 가능한 형태로 작성
select *
	from employee
    where hire_date between cast('20150101' as date) and cast('20171231' as date);
    
/*********************
	집계(그룹)함수 : sum(), avg(), count(), min(), max(), ...
    group by - 그룹함수를 적용하기 위한 그룹핑 컬럼을 정의
    having - 그룹함수에서 사용하는 조건절
    ** 그룹함수는 그룹핑이 가능한 컬럼에 적용하는 것이 좋음 **
*********************/
select * from employee;
-- (1) sum(숫자) : 전체 총합을 구하는 함수
-- 사원테이블의 총 급여를 조회, 2026-04-21 기준 급여가 null 이면 0으로 기본값 정의
select sum(salary) from employee;
select count(*) from employee;			-- employee 의 전체 숫자를 재보면 20
select count(salary) from employee;		-- employee 의 급여 숫자를 재보면 19로, null 은 포함되지 않음.
select concat(format(sum(ifnull(salary, 0)), 0), '원') as 총급여 from employee;

-- (2) avg(숫자) : 전체 평균을 구하는 함수
-- 사원들의 전체 급여 평균을 조회, 3자리씩 ',' 로 구분하고 앞에 '$' 표시
-- 2026-04-21 기준 급여가 null 이면 0으로 기본값 정의, 소수점은 절삭
select concat('$', format(floor(avg(ifnull(salary, 0))), 0)) as avg from employee;

-- 정보시스템(sys) 부서 전체의 급여 총액과 평균을 조회
-- 3자리 구분, 마지막 '만원' 표시
select concat(format(sum(salary), 0), '만원') as 총액,
		concat(format(avg(salary), 0), '만원') as 평균
        from employee
        where dept_id = 'sys';
        
-- --------------- 4/22 시작 ------------------------------
show databases;
use hrdb2019;
select database();
show tables;

desc employee;

-- (3) max(숫자) : 최댓값을 구하는 함수
-- 사원테이블에서 가장 높은 급여를 받는 사원을 조회
select concat(format(max(salary), 0), '만원') as 최고급여 from employee;

-- (4) min(숫자) : 최솟값을 구하는 함수
-- 사원테이블에서 가장 낮은 급여를 받는 사원을 조회
select concat(format(min(salary), 0), '만원') as 최소급여 from employee;

-- 사원들의 총급여, 평균급여, 최대급여, 최소급여를 조회
-- 조건 : 3자리씩 구분, 화폐단위 '만원' 추가
-- 현재 날짜 기준 급여 컬럼이 null인 경우에는 0으로 대체
desc employee;
select	concat(format(sum(ifnull(salary, 0)), 0), '만원') as 총급여, 
		concat(format(avg(ifnull(salary, 0)), 0), '만원') as 평균급여, 
		concat(format(max(ifnull(salary, 0)), 0), '만원') as 최대급여, 
		concat(format(min(ifnull(salary, 0)), 0), '만원') as 최소급여 
	from employee;
    
-- (5) count(컬럼) : 조건에 맞는 데이터의 row 수를 조회, null 은 제외
-- 사원테이블의 전체 row 수
select count(*) from employee;		-- 20개
select count(salary) from employee;	-- 19개 (하나 null 값)
select count(ifnull(salary, 0)) from employee;	-- 이러면 20개 됨.
select count(emp_id) from employee;

-- 재직중인 사원수 조회
desc employee;
select count(*)
	from employee
	where retire_date is null;
select count(*) - count(retire_date) as 재직자 from employee;		-- 이렇게 쓰기도 가능

-- 퇴사한 사원수 조회
select count(*)
	from employee
	where retire_date is not null;
select count(retire_date) as 퇴사자 from employee;	-- 이러면 간단함

-- '2015'년에 입사한 사원수를 조회
select count(*)
	from employee
	where left(hire_date, 4) = '2015' ;

-- 정보시스템(SYS) 부서의 사원수를 조회
select count(*)
	from employee
    where dept_id = 'SYS';
    
-- 가장 빠른 입사자, 가장 늦은 입사자의 입사일을 조회
select min(hire_date) as '빠른 입사일', max(hire_date) as '늦은 입사일'
	from employee;
    
-- 가장 빠른 입사자의 정보를 조회
select *
	from employee
    where hire_date = (select min(hire_date) from employee);	-- 이렇게 한번에 다 엮을 수 있음.
    
-- [group by] : ~별, 부서별 사원수, 입사날짜별 총급여
/*
select count(salary), salary from employee;
	-- 이렇게 그룹함수가 적용된 결과와, 리스트를 나타내는 결과는 서로 상충되기에 에러남.
    -- 사용하려면 일반컬럼을 group by 로 그룹핑 진행. 단, 그룹핑이 가능해야함.
*/
select count(salary), salary
	from employee
    group by salary;	-- salary 데이터를 그룹핑한 후 count(salary) 적용
    
-- 부서별 사원수, 총급여, 평균급여를 조회
-- null 은 0으로 치환
-- 3자리 구분, 소수점 절삭
select dept_id as 부서ID, 
		count(*) as '사원수',				-- dept_id 를 쓰기 전에는 결과가 나와도 어떤 부서인지 구분 안 됨.
		format(sum(ifnull(salary,0)), 0) as '총급여', 
        format(avg(ifnull(salary, 0)), 0) as '평균급여',
		format(max(ifnull(salary, 0)), 0) as 최대급여, 
        format(min(ifnull(salary, 0)), 0) as 최소급여
	from employee
    group by dept_id;
    
-- 입사년도 별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회
select left(hire_date, 4) as 입사년도,
		count(*) as 사원수,
        format(sum(salary), 0) as 총급여,
        format(truncate(avg(salary), 0), 0) as 평균급여,	-- 최신 버전이면 format 만 써도 되지만 옛 버전에선 안되므로 truncate 쓰면 좋음
        format(max(salary), 0) as 최대급여,
        format(min(salary), 0) as 최소급여
	from employee
    group by left(hire_date, 4);
    
-- [having 조건절] 그룹함수 또는 group by 결과에 대한 조건을 정의, where 절과 비슷함.
-- 부서별 총급여를 조회
-- 총급여가 30,000 만원이상인 부서만 출력
select dept_id,
		concat(format(sum(ifnull(salary, 0)), 0), '만원') as '총급여'
	from employee
    group by dept_id
    having concat(format(sum(ifnull(salary, 0)), 0), '만원') >= '30000';
    -- having '총급여' >= '30000';
    
-- 연도별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회
-- 소수점 X, 3자리 구분
-- 총급여가 30000 이상인 년도 출력
-- 급여 협상이 안된 사원은 제외
select left(hire_date, 4) as '년도',
		count(*) as '사원수',
        format(sum(salary), 0) as '총급여',
        format(avg(salary), 0) as '평균급여',
        format(max(salary), 0) as '최대급여',
        format(min(salary), 0) as '최소급여'
	from employee
    where salary is not null
    group by left(hire_date, 4)
    having sum(salary) >= 30000;
    -- having format(sum(salary), 0) >= '30000' 도 됨
    
-- [rollup 함수] 리포팅을 위한 함수
-- 부서별 사원수, 총급여, 평균급여 조회
select ifnull(dept_id, '총합계') as '부서ID',
		count(*) as '사원수',
        format(sum(ifnull(salary, 0)), 0) as '총급여',
        format(floor(avg(ifnull(salary, 0))), 0) as '평균급여'
	from employee
    group by dept_id with rollup;
-- rollup 한 결과의 부서아이디를 추가
select if(grouping(dept_id), '총합계', ifnull(dept_id, '-')) as '부서ID',	-- dept_id 를 grouping 하고 null 인 값을 - 로 바꾼 뒤 '총합계' 라고 출력.
		count(*) as '사원수',
        format(sum(ifnull(salary, 0)), 0) as '총급여',
        format(floor(avg(ifnull(salary, 0))), 0) as '평균급여'
	from employee
    group by dept_id with rollup;
        
-- 연도별, 사원수, 총급여, 평균급여, 최대급여, 최소급여 조회, rollup 함수 적용
-- ⚠ grouping 함수 안에는 함수를 넣을 수 없음!! - case when 함수로 변환을 해야 가능함.
select  -- ifnull(left(hire_date, 4), '총합계') as '입사년도',
		if(grouping(year), '총합계', ifnull(year, '-')) as hire_date,
		count(*) as '사원수',
        format(sum(ifnull(salary, 0)), 0) as '총급여',
        format(floor(avg(ifnull(salary, 0))), 0) as '평균급여',
        format(max(ifnull(salary, 0)), 0) as '최대급여',
        format(min(ifnull(salary, 0)), 0) as '최소급여'
	from employee, 
			(select emp_id, left(hire_date, 4) year
				from employee) T1
	where employee.emp_id = T1.emp_id and salary is not null
    group by year with rollup;
    
-- [limit 함수] 출력 갯수를 제한하여 조회
-- 오라클의 rownum 함수와 동일

-- 전체 사원 리스트 중 상위 5개만 출력
select * from employee limit 5;

-- 최대 급여를 받는 사원을 순서대로 3명 조회
select * 
	from employee 
    order by salary desc 
    limit 3;
    
/**************************
	조인(JOIN) : 두 개 이상의 테이블을 연동하여 하나의 데이셋 구성
    ERD(Entity Relationship Diagram): 데이터베이스 설계도(구조도)
    
    ** ANSI SQL : 데이터베이스 시스템들의 표준 SQL **
    ** 조인(JOIN) 종류 **
    (1) CROSS JOIN(CATEISIAN : 카테이션) - 합집합
		: 테이블의 데이터 전체를 조인. 직접 연결되지 않은 테이블에 사용.
        예) 테이블1(10개) * 테이블2(10개) = 데이터 100개
        
	(2) INNER JOIN(EQUI) - 교집합
		: 두 개 이상의 테이블들이 조인연결고리를 통해 조인 실행. 테이블이 직접 연결되어 있을 때 사용 가능.
	
    (3) OUTER JOIN - INNER JOIN + 조인에서 제외한 ROW 포함
		LEFT OUTER JOIN - 왼쪽 테이블의 ROW 포함
        RIGHT OUTER JOIN - 오른쪽 테이블의 ROW 포함
        
	(4) SELF JOIN - 한(자신) 테이블을 두 개(자신, 사본)의 테이블처럼 조인
**************************/
-- CROSS JOIN
/* 형식1 > SELECT [컬럼리스트]
		FROM [테이블1] CROSS JOIN [테이블2]
        WHERE [조건절]
*/
-- 오라클에서의 양식
/* 형식2 > SELECT [컬럼리스트]
		FROM [테이블1], [테이블2]
        WHERE [조건절]
*/
	
-- employee, department cross join
select count(*) from employee;		-- 20
select count(*) from department;	-- 7
select count(*) from unit;			-- 3

select count(*) from employee cross join department;	-- 140
select count(*) from employee, department;		-- 140

-- 사원, 휴가, 부서 테이블을 cross join
select count(*) from employee;		-- 20
select count(*) from vacation;		-- 102
select count(*) from department;	-- 7
select count(*) from employee cross join vacation cross join department;	-- 14280
select count(*) from employee, vacation, department;						-- 14280

-- [INNER JOIN(EQUI JOIN)]
-- 형식1 > SELECT [컬럼리스트]
-- 			FROM [테이블1] INNER JOIN [테이블2]
-- 							ON [테이블1.조인컬럼] = [테이블2.조인컬럼]
-- 형식2 > SELECT [컬럼리스트]
-- 			FROM [테이블1], [테이블2]
-- 			WHERE [테이블1.조인컬럼] = [테이블2.조인컬럼]

select count(*) from employee inner join department
								on employee.dept_id = department.dept_id;	-- 20
                                
select count(*) from employee, department
				where employee.dept_id = department.dept_id;				-- 20
                
select * from department;
select * from employee;

-- 사원테이블, 부서테이블, 본부테이블 inner join
select * from employee inner join department
						on employee.dept_id = department.dept_id
                        inner join unit
                        on department.unit_id = unit.unit_id;
                        
select * from employee e, department d, unit u	-- 이것처럼 한 글자로 지정하고 아래 간편하게 작성도 가능.
		where e.dept_id = d.dept_id
			and d.unit_id = u.unit_id;
            
-- 모든 사원들의 사원번호, 사원명, 부서아이디, 부서명, 입사일, 급여를 조회
desc employee;
desc department;
select emp_id, emp_name, e.dept_id, dept_name, hire_date, salary
		-- 현재 employee 와 department 에 둘 다 dept_id 가 있음. 이러면 시스템이 누굴 출력해야할 지 모름 => 둘 다 있으면 위치를 정확히 지정
	from employee e inner join department d
					on e.dept_id = d.dept_id;
                    
-- 영업부에 속한 사원들의 사원명, 입사일, 퇴사일, 급여, 부서아이디, 부서명을 조회
-- 재직중인 사원은 현재 날짜로 출력
select * from department;
select emp_name, hire_date, ifnull(retire_date, curdate()) as retire_date, salary, e.dept_id, dept_name
	from employee e inner join department d
					on e.dept_id = d.dept_id
	where dept_name = '영업';
    
-- '2015'년도에 입사자들의 사번, 사원명, 입사일, 부서명, 본부아이디, 본부명을 조회
select * from unit;
select emp_id, emp_name, hire_date, d.dept_name, u.unit_id, u.unit_name
	from employee e inner join department d
					on e.dept_id = d.dept_id
                    inner join unit u
                    on d.unit_id = u.unit_id
	where left(hire_date, 4) = '2015';
    
use hrdb2019;
select database();
show tables;

-- 인사과에 속한 사원들 중에 휴가를 사용한 사원의 내역 조회
-- 부서명은 '인사'
desc department;
desc vacation;
select * from department;
select * from vacation;
select emp_name, e.emp_id, phone, email, vacation_id, begin_date, end_date, reason, duration
	from department d inner join employee e
					on d.dept_id = e.dept_id
                    inner join vacation v
                    on e.emp_id = v.emp_id
	where dept_name = '인사';
select *
	from department d, vacation v, employee e
	where d.dept_id = e.dept_id
		and e.emp_id = v.emp_id
        and d.dept_name = '인사';
    
-- 사원별 휴가 사용 일수를 조회, 사원아이디, 사원명, 휴가일수 출력
-- 사용일수 기준으로 내림차순 정렬, 상위 5명 출력
select * from employee;
select * from vacation;
select e.emp_id , emp_name, count(*) as count
	from vacation v, employee e
    where e.emp_id = v.emp_id
    group by e.emp_id
    order by count desc
    limit 5;
select e.emp_id , emp_name, count(*) as count
	from vacation v inner join employee e
					on e.emp_id = v.emp_id
    group by e.emp_id
    order by count desc
    limit 5;
    
-- 영업부서 사원의 사원명, 폰번호, 부서명, 휴가사용 이유, 소속본부 조회
-- 휴가 사용 이유가 '두통' 인 사원
select * from department;
select * from employee;
select * from vacation;
select * from unit;

select emp_name, phone, dept_name, reason, u.unit_name
	from department d, vacation v, employee e, unit u
	where d.dept_id = e.dept_id
		and e.emp_id = v.emp_id
        and d.unit_id = u.unit_id
        and reason = '두통'
        and dept_name = '영업';
        
select emp_name, phone, dept_name, reason, u.unit_name
	from department d inner join employee e
						on d.dept_id = e.dept_id
						inner join vacation v
                        on e.emp_id = v.emp_id
                        inner join unit u
                        on d.unit_id = u.unit_id
	where reason = '두통'
        and dept_name = '영업';

/*
	2014년부터 2016년까지 입사한 사원들 중에서 퇴사하지 않은 사원들의
    사원 아이디, 사원명, 부서명, 입사일, 소속본부를 조회
    소속본부 기준으로 오름차순 정렬
*/
select e.emp_id, e.emp_name, d.dept_name, e.hire_date, u.unit_name
	from employee e, department d, unit u
		where e.dept_id = d.dept_id
        and u.unit_id = d.unit_id
        and left(hire_date, 4) between '2014' and '2016'
        and retire_date is null
        order by u.unit_name;

select e.emp_id, e.emp_name, d.dept_name, e.hire_date, u.unit_name
	from employee e inner join department d
					on e.dept_id = d.dept_id
                    inner join unit u
                    on u.unit_id = d.unit_id
    where left(hire_date, 4) between '2014' and '2016'
        and retire_date is null
        order by u.unit_name;
        
-- 부서별 부서명, 부서아이디, 총급여, 평균급여, 휴가사용일수 를 조회
select dept_name as '부서명', 
		d.dept_id as '부서아이디', 
        concat(format(sum(salary), 0), '만원') as '총급여', 
        concat(format(truncate(avg(salary), 2), 2), '만원') as '평균 급여', 
        count(duration) as '휴가사용일수'
	from department d, employee e, vacation v
	where d.dept_id = e.dept_id
        and e.emp_id = v.emp_id
	group by d.dept_id; -- d.dept_name 도 그룹핑이 필요하나 id 와 동일한 형식이기 때문에 필수는 아님. 둘이 다르거나 그룹핑의 그룹핑을 하려면 꼭 넣어줘야 함.
    
/*******************
	다중 그룹핑
*******************/
-- 본부별로 그룹핑 한 후 부서의 휴가 사용 일수를 조회
select unit_name, dept_name, count(duration) as '휴가 사용 일수'
	from unit u, vacation v, department d, employee e
    where u.unit_id = d.unit_id
		and d.dept_id = e.dept_id
        and e.emp_id = v.emp_id
	group by unit_name, dept_name;
    
-- 본부별 > 부서별 > 사원별로 그룹핑
select unit_name, dept_name, e.emp_name ,count(duration) as '휴가 사용 일수'
	from unit u inner join department d on u.unit_id = d.unit_id
                inner join employee e 	on d.dept_id = e.dept_id
                inner join vacation v	on e.emp_id = v.emp_id
	where  d.dept_id = e.dept_id
        and e.emp_id = v.emp_id
	group by unit_name, dept_name, e.emp_id;
    
-- [OUTER JOIN]
-- 오라클 INNER JOIN(EQUI JOIN) 문법에 (+) 코드를 추가하여 사용
-- 현재 오라클 문법은 MySQL 에서는 사용 불가 (형식 1개만 있음)
-- 형식 > SELECT [컬럼리스트]
-- 			FROM [테이블1] LEFT/RIGHT OUTER JOIN [테이블2]
-- 							ON [테이블1.조인컬럼] = [테이블2.조인컬럼]

select distinct dept_id from employee order by dept_id;	-- count 하면 6	(사원이 없는 dept_id 가 있기 때문)
select dept_id from department order by dept_id;		-- count 하면 7

select unit_id, start_date, dept_name, dept_id
	from department
    order by dept_id;
    
select  dept_id, emp_id, emp_name, salary
	from employee
    order by dept_id;
    
-- 부서별 사원수 조회
select d.dept_id, d.dept_name, count(*)
	from employee e, department d
    where e.dept_id = d.dept_id
    group by d.dept_id;		-- 이러면 department 에서 누락된 dept_id 가 있기에 데이터가 부정확함.
-- LEFT OUTER JOIN : LEFT 에 부서테이블 위치 // LEFT / RIGHT 방향은 결과 출력 시 위치임. 오른쪽 null 값으로 인해 출력이 안 되는 데이터를 왼쪽에 배치해야 함.
-- 부서별 사원수 조회, 전체 부서 출력!!
select d.dept_id, d.dept_name, count(emp_id) as '사원수'	-- count(*) 로 전체 갯수를 세면 employee 에서 Null 이여도 count 쳐짐. => employee 에서 빈 값이면 count 안 쳐지게 employee 의 요소를 씀.
	from department d left outer join employee e
					on d.dept_id = e.dept_id
	group by d.dept_id;
    
-- RIGHT OUTER JOIN : RIGHT 에 부서테이블 위치 (위랑 연결 순서가 다름.)
select d.dept_id, d.dept_name, count(emp_id) as '사원수'
	from employee e right outer join department d
					on d.dept_id = e.dept_id
	group by d.dept_id;
    
-- 모든 부서의 아이디, 부서명, 본부명을 조회
-- 본부에 속하지 않은 부서는 '계획중' 으로 출력
select d.dept_id, d.dept_name, ifnull(u.unit_name, '- 계획중 -') as unit_name
	from department d left outer join unit u
					on d.unit_id = u.unit_id;
                    
-- 본부별, 부서의 휴가 사용일수를 조회
-- 부서의 누락없이 모두 출력
select * from department;
select u.unit_id, u.unit_name, d.dept_id, d.dept_name, sum(ifnull(v.duration, 0)) as '휴가사용일수'
	from employee e right outer join department d on e.dept_id = d.dept_id
					left outer join unit u on d.unit_id = u.unit_id
                    left outer join vacation v on e.emp_id = v.emp_id
	group by u.unit_id, d.dept_id
    order by u.unit_id;
    
-- 2017년부터 2018년도까지 입사한 사원들의 사원명, 입사일, 연봉, 부서명, 본부명 조회
-- 단, 퇴사한 사원들은 제외
-- 소속본부를 모두 조회
select emp_name, hire_date, salary, dept_name, unit_name
	from employee e right outer join department d on e.dept_id = d.dept_id
					left outer join unit u on d.unit_id = u.unit_id
		where left(hire_date, 4) between '2017' and '2018'
			and retire_date is null;
	-- from 을 먼저 읽기 때문에 위에 방식대로 한다면 where 절에서 걸러진 애들까지 다 데리고 코드를 수행함.
    -- 아래 방식은 from 에서 이미 걸렀으므로 쓸 값만 가지고 이동하게 됨.		<<- 부하가 적음
select emp_name, hire_date, salary, dept_name, unit_name
	from (select emp_name, hire_date, salary, dept_id from employee where retire_date is null) e right outer join department d on e.dept_id = d.dept_id
					left outer join unit u on d.unit_id = u.unit_id
		where left(hire_date, 4) between '2017' and '2018';
        
-- [SELF JOIN] 자신의 테이블을 조인
-- SELF 조인은 서브쿼리 형식으로 변환하여 사용됨!
-- 형식1> SELECT [컬럼리스트]
-- 		FROM [테이블원본] LEFT/RIGHT JOIN [테이블사본]
-- 						ON [테이블원본.조인컬럼] = [테이블사본.조인컬럼]-- [SELF JOIN] 자신의 테이블을 조인
-- 형식2> SELECT [컬럼리스트]
-- 		FROM [테이블원본], [테이블사본]
-- 		WHERE [테이블원본.조인컬럼] = [테이블사본.조인컬럼]
select *
	from employee e1, employee e2
    where e1.emp_id = e2.emp_id;
select * from employee e1 left join employee e2 on e1.emp_id = e2.emp_id;	-- 셀프 조인에서는 left / right 상관 없음.

explain analyze		-- 아래 코드의 처리 시간을 알아보는 거.
select u.unit_id, u.unit_name, d.dept_id, d.dept_name, sum(ifnull(v.duration, 0)) as '휴가사용일수'
	from employee e right outer join department d on e.dept_id = d.dept_id
					left outer join unit u on d.unit_id = u.unit_id
                    left outer join vacation v on e.emp_id = v.emp_id
	group by u.unit_id, d.dept_id
    order by u.unit_id;
    
/**************************
	서브쿼리(SubQuery) : 메인 쿼리에 다른 쿼리를 추가하여 실행하는 방식
    -> (쿼리작성) 괄호 안에 쿼리를 작성하여 메인 쿼리에 추가
    형식> SELECT [컬럼리스트 추가 -> (스칼라 서브쿼리) ] ⚠ 오라클 사용 X
		FROM [테이블명 추가 -> (인라인뷰) ]
        WHERE [조건절 추가 -> (서브쿼리) ]
**************************/
-- [서브쿼리]
-- '정보시스템' 부서의 사원들의 사번, 사원명, 입사일, 부서아이디, 급여 조회
select emp_id, emp_name, hire_date, dept_id, salary
	from employee
    where dept_id = (select dept_id from department where dept_name = '정보시스템');
    
select dept_id from department where dept_name = '정보시스템';

-- ------------- 여기까지 함 --------------------
select  e.emp_id,
		e.emp_name,
        e.hire_date,
        d.dept_id,
        e.salary
	from employee e, department d
	where e.dept_id = d.dept_id
		and d.dept_name = '정보시스템';      
        
-- [서브쿼리: 단일행]        
-- 홍길동 사원이 속한 부서아이디, 부서명, 부서오픈일 조회
select  dept_id from employee where emp_name = '홍길동';     

select  dept_id,
		dept_name,
        start_date
	from department
    where dept_id = (select  dept_id from employee 
							where emp_name = '홍길동');

-- [서브쿼리 : 단일행]
-- 홍길동 사원의 휴가사용 내역을 조회
select emp_id from employee where emp_name='홍길동';                            
select 	vacation_id,
		emp_id,
        (select emp_name from employee 
				where emp_name = '홍길동') as emp_name, -- 권장❌
        begin_date,
        end_date,
        reason,
        duration
	from vacation
    where emp_id = (select emp_id from employee where emp_name='홍길동');
    
-- [서브쿼리 : 단일행]
-- '제3본부'에 속한 모든 부서를 조회
select unit_id from unit where unit_name='제3본부';   
select *
	from department
    where unit_id = (select unit_id from unit where unit_name='제3본부');

-- [서브쿼리 : 단일행]
-- 최고 연봉을 받는 사원의 정보를 조회 
select max(salary) from employee;
select *
	from employee
    where salary = (select max(salary) from employee);

-- [서브쿼리 : 단일행]
-- 최근에 입사한 사원의 정보를 조회
select max(hire_date) from employee;
select *
	from employee
    where hire_date = (select max(hire_date) from employee);

-- [서브쿼리 : 단일행]
-- 가장 먼저 퇴사한 사람의 정보
select min(retire_date) from employee;    
select *
	from employee
    where retire_date = (select min(retire_date) from employee);
    
-- 4/24 시작
show databases;
use hrdb2019;
select database();
show tables;

-- [서브쿼리 : 단일행]
-- 가장 많은 휴가일수(duration)를 사용한 사원이 속한 부서의 모든 사원들을 조회
select *
	from employee
    where dept_id = (select dept_id from employee
		where emp_id = (select emp_id from vacation order by duration desc limit 1));

select * from employee
	where dept_id = (
select distinct e.dept_id
	from employee e, vacation v
    where e.emp_id = v.emp_id
		and e.emp_id = (select emp_id from vacation order by duration desc limit 1));

-- [서브쿼리 : 다중행 - IN, EXISTS, ...]
-- '제3본부' 에 속한 모든 사원 정보를 조회
select unit_id from unit where unit_name = '제3본부';
select * from department where unit_id = 'C'; -- unit_id 가 동일한 dept_id 가 두 개 있는 걸 확인 가능.
-- 위에 처럼 조건에 맞는 결과가 나오게끔 입력하고 이걸 밑에 붙여 쓰는 방식으로 하기. 단, 붙여 쓸 때 * 기호를 조건절로 줄 요소랑 맞춰야 함(연결할 다리).
select * from employee 
	where dept_id in (select dept_id from department 
						where unit_id = (select unit_id from unit 
											where unit_name = '제3본부'));

-- '제3본부'에 속한 모든 사원 휴가 사용 정보 조회
select * from vacation
	where emp_id in (select emp_id from employee 
					where dept_id in (select dept_id from department 
									where unit_id = (select unit_id from unit 
													where unit_name = '제3본부')));
                                                    
-- 휴가를 한 번이라도 사용한 모든 사원 조회
select count(*) from employee e
	where exists (select 1 
		from vacation v
		where e.emp_id = v.emp_id);	-- select 1 = 조건에 따라 존재하면(1) 해당되고, 존재하지 않으면(0) 해당 안 됨.

-- [인라인뷰 : 메인쿼리의 테이블 자리에 들어가는 쿼리 형식]
-- [휴가를 사용한 사원 기준]사원별 휴가사용 일수를 그룹핑하여 사원번호, 사원명, 입사일, 급여, 휴가사용일수를 조회
-- 1) 사원별 휴가사용 일수를 그룹핑
select emp_id, sum(duration) as count from vacation v group by emp_id;
-- 2) employee 테이블과 inner join
select e.emp_id, emp_name, hire_date, salary, count as '휴가사용일수'
	from employee e, (select emp_id, sum(duration) as count from vacation v group by emp_id) v
		where e.emp_id = v.emp_id;

-- ANSI SQL
select e.emp_id, emp_name, hire_date, salary, count as '휴가사용일수'
	from employee e inner join (select emp_id, sum(duration) as count from vacation v group by emp_id) v
					on e.emp_id = v.emp_id;

-- [휴가를 사용한 사원 + 사용하지 않은 사원 포함]
-- 사원별 휴가사용 일수를 그룹핑하여 사원번호, 사원명, 입사일, 급여, 휴가사용일수를 조회
-- 휴가를 사용하지 않은 사원의 휴가 사용 일수는 0
-- 휴가 사용일수는 내림차순 정렬
select e.emp_id, emp_name, hire_date, salary, ifnull(count, 0) as '휴가사용일수'
	from employee e left outer join (select emp_id, sum(duration) as count from vacation v group by emp_id) v
					on e.emp_id = v.emp_id
	order by count desc;
    
-- '2015' ~ '2017' 년도 입사한 사원들의 총 휴가 사용 일수를 조회
-- (1) 2015 ~ 2017 년도 입사자
select *
	from employee
    where left(hire_date, 4) between '2015' and '2017';
-- (2) 총 휴가 사용 일수 조회
select emp_id, sum(duration) as count
	from vacation
    group by emp_id;
-- (3) 합치기
select t1.emp_id, t1.emp_name, t1.hire_date, ifnull(count, 0) as count
	from (select * from employee
				where left(hire_date, 4) between '2015' and '2017') t1
			left outer join	(select emp_id, sum(duration) as count
						from vacation	group by emp_id) t2
		on t1.emp_id = t2.emp_id;
        
-- 1) 부서별 총급여, 평균급여를 조회	(부서별이므로 부서 기준으로 그룹핑)
select dept_id, sum(ifnull(salary, 0)) as sum, floor(avg(ifnull(salary, 0))) as avg
	from employee group by dept_id;

-- 2) 부서테이블과 조인하여 모든 부서의 총급여, 평균급여를 출력
select d.dept_id, d.dept_name, d.unit_id, ifnull(e.sum, 0) as sum, ifnull(e.avg, 0) as avg 
	from department d 
		left outer join (select dept_id, sum(ifnull(salary, 0)) as sum, floor(avg(ifnull(salary, 0))) as avg
								from employee group by dept_id) e
		on d.dept_id = e.dept_id;
        
-- 3) 사원테이블을 조인하여 사원명, 급여, 부서아이디, 부서명, 총급여, 평균급여를 출력
select e.emp_name, e.salary, s.dept_id, s.dept_name, s.sum, s.avg
	from employee e, (select d.dept_id, d.dept_name, d.unit_id, ifnull(e.sum, 0) as sum, ifnull(e.avg, 0) as avg 
						from department d 
							left outer join (select dept_id, sum(ifnull(salary, 0)) as sum, floor(avg(ifnull(salary, 0))) as avg
										from employee group by dept_id) e	on d.dept_id = e.dept_id) s
		where e.dept_id = s.dept_id;
        
-- [스칼라서브쿼리 : 컬럼리스트에 사용하는 서브쿼리 형식]	-- 성능이 떨어지고 오라클에서 안 됨.
-- 정보시스템 부서의 사원정보 출력
-- 정보시스템 부서의 총급여, 평균급여와 함께 출력
select emp_id, emp_name, dept_id, salary, 
		(select sum(salary) from employee where dept_id = 'sys') as sum , 
        (select floor(avg(salary)) from employee where dept_id = 'sys') as avg
	from employee
	where dept_id = 'sys';

/**************************
	테이블 결과 합치기 : union, union all
    형식> 쿼리1 실행 결과
		union => 중복을 제거
        쿼리2 실행 결과
	형식> 쿼리1 실행 결과
		union all => 중복 허용
        쿼리2 실행 결과
	⚠ 쿼리1, 쿼리2 의 실행 컬럼의 타입과 이름이 동일해야 함
**************************/
-- 영업부(MKT), 정보시스템(SYS) 부서의 사원아이디, 사원명, 급여, 부서아이디를 조회
-- union 을 사용하여 실행결과 합치기
select emp_id, emp_name, salary, dept_id
	from employee
    where dept_id = 'MKT'
		union
select emp_id as eid, emp_name, salary, dept_id		-- 여기에 별칭을 줘도 적용X. 맨 처음에 쓴 별칭을 기준으로 적용
	from employee
    where dept_id = 'sys';
    
select emp_id, emp_name, salary, dept_id
	from employee
    where dept_id = 'MKT'
		union all
select emp_id as eid, emp_name, salary, dept_id
	from employee
    where dept_id = 'sys'
		union all		-- union all 사용 시 중복된 결과도 출력됨.
select emp_id, emp_name, salary, dept_id
	from employee
    where dept_id = 'MKT';
    
/**************************
	논리적인 테이블 : 뷰(View), SQL 을 실행하여 생성된 결과를 가상테이블로 정의
    - 생성 > CREATE VIEW [VIEW NAME]
			AS [ SQL 정의 ];
	- 삭제 > DROP VIEW [VIEW NAME]
    ⚠ VIEW 생성 시 권한을 할당 받아야 함!! => MySQL, Maria 기본 할당
**************************/
-- 시스템에 생성된 뷰 정보 확인
-- information_schema.views
select * 
	from information_schema.views
    where table_schema = 'hrdb2019';
    
-- 부서 총급여가 30000 이상인 뷰 정의
create view sum_salary 
as
	select dept_id, ifnull(sum(salary), 0) as sum
	from employee
    group by dept_id
    having ifnull(sum(salary), 0) >= '30000';
    
-- sum_salary 조회
select * from sum_salary;

-- sum_salary 뷰 삭제
drop view sum_salary;

-- 3) 사원테이블을 조인하여 사원명, 급여, 부서아이디, 부서명, 총급여, 평균급여를 출력
create view emp_dept_sum
as
	select e.emp_name, e.salary, s.dept_id, s.dept_name, s.sum, s.avg
		from employee e, (select d.dept_id, d.dept_name, d.unit_id, ifnull(e.sum, 0) as sum, ifnull(e.avg, 0) as avg 
							from department d 
								left outer join (select dept_id, sum(ifnull(salary, 0)) as sum, floor(avg(ifnull(salary, 0))) as avg
											from employee group by dept_id) e	on d.dept_id = e.dept_id) s
			where e.dept_id = s.dept_id;
-- view 확인
select * from information_schema.views
		where table_schema = 'hrdb2019';
-- emp_dept_sum 테이블에서 '홍길동' 사원의 정보를 조회
select * from emp_dept_sum
		where emp_name = '홍길동';
        
-- 사원별 전체휴가사용일수, 부서 아이디, 부서명을 조회한 후 뷰로 생성
-- 전체 사원 대상, null은 0으로 대체
create view v_emp_dept
as
	select e.emp_id, e.emp_name, d.dept_id, d.dept_name, d.unit_id, ifnull(v.sum, 0) as sum
		from ( select emp_id, sum(duration) as sum from vacation group by emp_id) v right outer join employee e
			on v.emp_id = e.emp_id
		right outer join department d
			on e.dept_id = d.dept_id;
select * from information_schema.views
		where table_schema = 'hrdb2019';
select * from v_emp_dept;

drop view v_emp_dept;

-- '제 3본부' 소속 부서의 사원들 휴가사용 일수를 조회
select * from v_emp_dept, unit u
		where ve.unit_id = u.unit_id
			and u.unit_name = '제3본부';
-- 휴가사용일수가 15일 이상되는 사원들의 사원명, 부서아이디, 부서명, 본부아이디, 본부명 조회
select ve.emp_name, ve.dept_id, ve.dept_name, u.unit_id, u.unit_name from v_emp_dept ve, unit u
		where ve.unit_id = u.unit_id
			and ve.sum >= 15;
            
/****************************
	DDL(Data Definition Language) : 생성, 수정, 삭제 -> 테이블 기준
    DML(Data Manuplation Language) : 생성, 읽기, 수정, 삭제 -> 데이터 기준
    C(Create) - Insert 
    R(Read) - Select
    U(Update) - Update
    D(Delete) - Delete
****************************/

-- 						---------------------- 4/27 시작 -------------------------------

show databases;
use hrdb2019;
select database();
show tables;

/****************************
	DDL(Data Definition Language) : 생성, 수정, 삭제 -> 테이블 기준
    테이블 생성 형식 >
		CREATE TABLE [테이블명] (
			컬럼명 데이터타입 옵션(제약사항, NULL 등..)
        )
        
					----- 데이터 타입 정리	-----
	  분류		  타입		크기/형식			설명			   사용예
    ------------------------------------------------------------------
    정수형		tinyint		1byte		작은 정수값		상태값(0/1)
				smallint	2byte						카운트
				int			4byte		디폴트값			일반정수값
				bigint		8byte		큰 정수값			pk, 주문번호
	실수형		float		4byte		부동소수점			거의 사용 안 함
				double		8byte		디폴트값			통계수치
	문자형(고정)	char		고정길이	 빠른공간확보, 공간낭비	코드값				char(3) = 3글자만 가능
	문자형(가변)	varchar		가변길이		가장 많이 사용		이름, 주소, ...		varchar(3) = 1~3 글자 다 가능
    텍스트		text		~ 64kb		긴 문장 저장		게시글
				longtext	~ 4GB		초대형 텍스트		로그
	바이너리		blob		~ 64kb/4GB	이미지파일,파일저장
    날짜			date		yyyy-mm-dd	날짜				생일
				datetime	date + 시간	날짜, 시간, ...	작업완료
	JSON		JSON		JSON 구조	API 데이터처리		API 응답..
****************************/
desc employee;

-- emp 테이블 생성
-- emp_id(사번) : 4, ename(사원명) : 5, hire_date(입사일) : date, salary(급여) : 4
create table emp(
	emp_id		char(4),		-- 숫자 타입으로 주려면 '0001' 의 경우 0이 인식이 안 되어 '1' 만 들어감. => 문자형인 char 로 줌
    ename		varchar(5),
    hire_date	date,
    salary		int
);
show tables;
desc emp;
select * from information_schema.tables
	where table_schema = 'hrdb2019';

/****************************
	테이블 삭제
    형식 > DROP TABLE [테이블명];
****************************/
show tables;
select * from information_schema.tables
	where table_name = 'emp';
drop table emp;

/****************************
	테이블 복제(CAS)
    형식 > CREATE TABLE [테이블명]
				AS [서브쿼리];
****************************/
-- 2016 년도에 입사한 사원의 정보를 조회하여 EMPLOYEE_2016 테이블 생성
-- create table employee_2016
create table employee_2016
	as
		select * from employee where left(hire_date, 4) = '2016';

show tables;
select * from information_schema.tables
	where table_name = 'employee_2016';
    
desc employee_2016;		-- ⚠ 원본의 제약사항은 복제되지 않음!! (key 등)
desc employee;

-- employee_department 테이블 생성
-- employee + department 테이블 조인, dept_id 는 하나만 저장
create table employee_department
as
select e.emp_id, e.emp_name, e.gender, e.hire_date, e.retire_date, e.phone, e.email, e.salary, d.dept_id, d.dept_name, d.unit_id, d.start_date
	from employee e, department d
	where e.dept_id = d.dept_id;

select * from information_schema.tables
	where table_name = 'employee_department';
    
desc employee_department;
select * from employee_department;

-- 테이블 구조만 복제
create table emp
as
select * from employee
	where 1 = 0;

show tables;
desc emp;
select * from emp;

/****************************
	데이터 생성(Create :: Insert)
    형식 > INSERT INTO [테이블명](컬럼리스트..)	-- 컬럼리스트 생략 가능. 순서 상관 없음.
			VALUES(데이터1, 데이터2, ...)		-- 위의 컬림리스트와 상대적 위치만 맞으면 됨.
****************************/
desc emp;
insert into emp(emp_id, 	-- char(5)
				emp_name, 	-- varchar(4)
				eng_name,	-- varchar(20)
                gender,		-- char(1)
                hire_date,	-- date
                retire_date,-- date (Null 허용이라 Null)
                dept_id,
                phone,
                email,
                salary)
		value('S0001', '홍길동', null, 'M', curdate(), null, 'SYS', '010-1234-1234', 'hong@naver.com', null);
select * from emp;

-- 컬럼리스트 상의 순서와 입력 데이터가 정확히 매핑되어야 함
insert into emp(emp_id, 	-- char(5)
				emp_name, 	-- varchar(4)
				eng_name,	-- varchar(20)
                gender,		-- char(1)
                hire_date,	-- date
                retire_date,-- date (Null 허용이라 Null)
                dept_id,
                phone,
                email,
                salary)
		value('S0002', '이순신', null, 'M', curdate(), null, 'SYS', '010-1234-1234', 'hong@naver.com', null);
        
-- 컬럼리스트 생략 시 테이블 구조를 기준으로 입력
desc emp;
insert into emp
		value('S0003', '김삼순', null, 'M', curdate(), null, 'SYS', '010-1234-1234', 'hong@naver.com', null);
select * from emp;

-- Null 허용되는 곳에 한해 컬럼리스트, 데이터 생략 가능
insert into emp(emp_id, 	-- char(5)
				emp_name, 	-- varchar(4)
                gender,		-- char(1)
                hire_date,	-- date
                dept_id,
                phone,
                email)
		value('S0004', '삼순신', 'M', curdate(), 'SYS', '010-1234-1234', 'lee@naver.com');
select * from emp;

/****************************
	DDL - 테이블의 데이터 절삭(Truncate), 데이터가 영구적으로 삭제됨
    형식 > TRUNCATE TABLE [테이블명];
****************************/
select count(*) from emp;	-- 4개
select * from emp;
truncate table emp;

drop table emp;		-- 테이블 삭제
show tables;
select * from information_schema.tables
	where table_name = 'emp';

-- 		---------------------------	여기까지 정리함 -------------------------------------

-- emp 생성 : eid(char, 4), ename(varchar, 5), gender(char, 1)
-- 			 hire_date(datetime), salary(int)
-- eid, ename, gender 컬럼은 null 을 허용하지 않음 : not null
create table emp(
	eid 	char(4) 	not null,
    ename	varchar(5) 	not null,
    gender 	char(1) 	not null,
    hire_date 	datetime,
    salary 	int
    );
show tables;
select * from information_schema.tables
		where table_name = 'emp';
desc emp;
insert into emp(
				eid,
                ename,
                gender,
                hire_date,
                salary
			)
	values('S001', '홍길동', 'M', null, null);
    
select * from emp;

insert into emp(eid, ename, gender)
	values('S002', '이순신', 'M');
    
insert into emp(gender, eid, ename, hire_date)
	values('F', 'S003', '홍길순', curdate());
    
insert into emp(eid, ename, gender, hire_date, salary)
	values('S004', '삼순신', 'M', now(), 1000);
    
/****************************
	자동 번호 생성기 : auto_increment
    - 테이블 생성 시 옵션 자리에 기술, pk 컬럼에 사용, 정수형 데이터 생성
    - 반드시 사용 시 반드시 primary key 제약과 함께 사용
    형식 > CREATE TABLE [테이블명] (
		컬럼명	데이터타입		AUTO-INCREMENT	...
        )
****************************/
-- emp2 생성 : eid(int, 자동번호 생성), ename(varchar, 5), gender(char, 1)
-- 			 hire_date(datetime), salary(int)
-- eid, ename, gender 컬럼은 null 을 허용하지 않음 : not null
-- 

create table emp2(
	eid		int		auto_increment	primary key,	-- 자동 값 채우면 어차피 null 이 되지 않음.
    ename	varchar(5)	not null,
    gender	char(1)		not null,
    hire_date	datetime,
    salary	int
    );
    
show tables;
select * from information_schema.tables
		where table_name = 'emp2';
desc emp2;

insert into emp2(ename, gender)		-- eid 는 자동으로 채워지니 생략 가능.
		values('홍길동', 'M');
        
insert into emp2(ename, gender, hire_date) values('이순신', 'M', now());
insert into emp2(ename, gender, hire_date, salary) values('김유신', 'M', now(), 3000);
select * from emp2;

/****************************
	DDL - 테이블 변경 : ALTER TABLE
    형식 > ALTER TABLE [테이블명]
			ADD COLUMN [NEW COLUMN, 데이터 타입] -- NULL 허용
            MODIFY COLUMN [MODIFY COLUMN, 데이터 타입] -- 크기 고려
            DROP COLUMN [DROP COULUMN]
****************************/
show tables;
desc emp;

-- emp 테이블에 phone(char, 13, '-'포함) 컬럼을 추가
alter table emp
	add column phone char(13);

desc emp;
select * from emp;

-- phone 컬럼의 크기를 20으로 변경, 크기를 키우는 경우 정상 실행
alter table emp
	modify column phone char(20);
    
-- ename 컬럼에 데이터가 존재하는 경우
-- ename 컬럼의 크기를 varchar(2)로 변경, 크기를 작게 변경하는 경우 데이터 유실이 발생하므로 에러 발생.
alter table emp
	modify column ename varchar(2) not null;
-- ename 컬럼의 크기를 varchar(10)로 변경, 크게 변경은 정상 실행
alter table emp
	modify column ename varchar(10) not null;
desc emp;

/****************************
	데이터 수정 : UPDATE
    형식 > UPDATE [테이블명]
			SET [컬럼명 = NEW데이터 , ...]
            WHERE [조건절]
	✔ MySQL 은 Update 권한 변경 후 진행
    => SET SQL_SAFE_UPDATES = 0(허용) / 1(불가, 기본값);
****************************/
select * from emp;
-- S001 사번의 폰번호 업데이트, 업데이트 모드 허용으로 수정
set sql_safe_updates = 0;
update emp
	set phone = '010-1234-4567'
    where eid = 'S001';
    
-- 모든 사원의 폰 번호를 '010-1111-1234' 로 수정
update emp
	set phone = '010-1111-1234';
desc emp;

-- phone 컬럼에 not null 제약을 추가
alter table emp
	modify phone char(20) not null;
    
-- emp 테이블에 email 컬럼 추가 후 not null 제약 정의
-- 1) 컬럼 추가 시 null 허용
-- 2) 업데이트 명령으로 기존 데이터 추가
-- 3) not null 제약 정의
alter table emp add email varchar(30);
desc emp;
update emp set email = 'test@naver.com';
alter table emp modify column email varchar(20) not null;
desc emp;

-- employee 테이블을 복제하여 copy_emp 테이블 생성
show tables;
create table copy_emp
as
select * from employee;

show tables;
desc copy_emp;
select * from copy_emp;
select count(*) from copy_emp;

-- 홍길동 사원의 급여를 6000 으로 수정
select emp_id from copy_emp where emp_name = '홍길동';
update copy_emp set salary = 6000 where emp_id = 'S0001';	-- 고유 키 값인 emp_id 로 해야 불상사가 없음. 예_동명이인이면 둘 다 바뀜.
select * from copy_emp;
-- 안경태 사원의 입사일을 '20210705'로 수정
update copy_emp set hire_date = cast('2021-07-05' as date) where emp_id = 'S0007';	-- cast 함수
show tables;
desc emp2;
-- (1) emp2 테이블에 retire_date 컬럼 추가 : date, null 허용
-- (2) null 데이터를 현재 날짜로 수정
-- (3) retire_date 를 'not null' 제약 정의
select count(*) from emp2;

alter table emp2 add retire_date date;
update emp2 set retire_date = curdate();
alter table emp2 modify retire_date date not null;

desc emp2;
select * from emp2;

-- '정보시스템' 부서의 모든 사원 급여를 20% 증가
select * from copy_emp;
update copy_emp
	set salary = salary * 1.2
    where dept_id = (select dept_id from department where dept_name = '정보시스템');
    
-- 'S0003' 인 강우동 사원의 영어이름을 'kang', 입사일은 현재날짜, 부서를 MKT 로 변경
select * from copy_emp where emp_id = 'S0003';
update copy_emp set eng_name = 'kang', hire_date = curdate(), dept_id = 'MKT' where emp_id='S0003';
select * from copy_emp;

-- 트랜잭션별 업데이트 정의
-- 트랜잭션 관리 명령어 DTL : commit(작업완료), rollback(작업복원)
-- 현재 트랜잭션 방식 확인. 1 : 시스템에서 자동으로 트랜잭션 관리
-- DML 명령어에 영향을 줌, DDL은 관리방식에 상관없이 무조건 autocommit
select @@autocommit;
set autocommit = 0;		-- 트랜잭션을 수동으로 관리

commit;		-- 새로운 트랜잭션 시작
select * from emp;

-- 이순신의 급여를 3000으로 수정
update emp set salary = 3000 where eid = 'S002';	-- 이러면 값은 바뀌지만 commit 이 수동이므로 되어있기에 임시 데이터임. 물리적 DB에 반영되기 전
select * from emp;
-- rollback;
commit;
select * from emp;
rollback;

/****************************
	데이터 삭제 : DELETE
    형식 > DELETE FROM [테이블명]
            WHERE [조건절]
****************************/
select @@sql_safe_updates;	-- 업데이트 모드 해제
select @@autocommit;		-- 수동으로 트랜잭션 관리
commit;

-- emp 테이블의 이순신, 홍길동 사원을 삭제
select * from emp;
delete from emp where eid in('S001', 'S002');
rollback;		-- commit 되기 전까지 완전 삭제는 안 되기에 롤백하면 다시 돌아옴

commit;			-- commit 후에는 영구히 삭제되어 rollback 해도 돌아오지 않음.

commit;
-- emp 테이블의 모든 사원을 삭제, truncate 명령어 사용 - truncate 는 바로 commit 되기에 롤백 불가.
truncate table emp;
select * from emp;
rollback;		-- truncate table 명령은 ddl 이므로 autocommit 됨.
commit;

set autocommit = 1;
select @@autocommit;