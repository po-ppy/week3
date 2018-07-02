set names utf8;
drop database if exists jd;
create database jd charset=utf8;
#进入数据库
use jd;
#创建数据表
create table jd_user(
  uid	 int,
  uname	 varchar(30),
  upwd	 varchar(16),
  member bool
);
#向表中插入数据
insert into jd_user values(1,'Poppy','123456',0);
insert into jd_user values(2,'Cool','123456',0);
insert into jd_user values(3,'No','123456',0);
#更新一条数据,uid=2的用户的uname改为liming,upwd改为654321
update jd_user set uname='liming',upwd=654321 where uid=2;
#删除表中的一行数据
delete from jd_user where uid=3;

create table jd_laptop_computer(
    lid int primary key auto_increment,
    title varchar(64),
    price float(8,2),
    isSale bool,
    img varchar(128)
);
insert into jd_laptop_computer values(null,'戴尔燃7000',8900,1,'img/1.png');
insert into jd_laptop_computer values(null,'小米Air',7899,0,'img/2.png');
insert into jd_laptop_computer values(null,'联想小新',5688,1,'img/3.png');
insert into jd_laptop_computer values(null,'APPLE AIR',5688,1,'img/3.png');