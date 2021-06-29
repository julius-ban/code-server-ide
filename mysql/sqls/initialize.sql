DROP DATABASE IF EXISTS react;

CREATE DATABASE react;
USE react;

create table container_info 
  (
  	user_id varchar(32) not null,
  	container_id varchar(32) not null primary key,
	container_nm varchar(32) not null,
	note_txt varchar(500) not null,
	region_cd varchar(32) not null,
	tmlt_cd varchar(32) not null,
	tmlt_dtl varchar(32) not null,
	stack_cd varchar(32) not null,
	addpkg_cd_1 varchar(32) not null,
	addpkg_cd_2 varchar(32) not null,
	addpkg_cd_3 varchar(32) not null,
  	update_dts datetime,
 	insert_dts datetime
  );

create table user_info 
(
	user_id varchar(32) not null primary key,
	user_pwd varchar(32) not null,
	update_dts datetime,
    insert_dts datetime
);