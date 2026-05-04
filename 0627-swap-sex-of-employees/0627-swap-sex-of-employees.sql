/* Write your T-SQL query statement below */
update Salary Set sex=case when sex='m' then 'f'else 'm' end;