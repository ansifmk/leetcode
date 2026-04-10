/* Write your T-SQL query statement below */
delete p1
from Person p1
join Person p2
on p1.Email=p2.Email
And p1.Id>p2.Id