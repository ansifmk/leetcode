/* Write your T-SQL query statement below */
select e.Name AS Employee
from Employee e 
join Employee m
on e.ManagerId = m.id
where e.Salary > m.Salary