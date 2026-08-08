public class Solution {
    public void MoveZeroes(int[] nums) {
        int i=0;
        foreach(var n in nums)
        if(n!=0) nums[i++]=n;

        while(i<nums.Length)nums[i++]=0;
    }
}