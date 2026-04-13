/* Write your T-SQL query statement below */
select e.Name
from Employee e
join Employee m 
on e.Id = m.ManagerId
group by e.Id, e.Name
having count(m.Id) >= 5;
