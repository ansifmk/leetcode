/* Write your T-SQL query statement below */
select
 p.firstName,
 p.LastName,
 a.city,
 a.state
 from Person p
 Left join Address a on p.personId=a.personId

