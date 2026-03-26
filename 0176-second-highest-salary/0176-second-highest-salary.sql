/* Write your T-SQL query statement below */
select MAX(salary)as secondhighestsalary
from employee
where salary <(select MAX(salary)from employee )