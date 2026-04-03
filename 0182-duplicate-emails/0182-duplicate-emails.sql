/* Write your T-SQL query statement below */
select email
from Person
Group By email
HAVING count (email)>1