import java.util.*;
class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> ans = new ArrayList();
        if (nums.length < 3) return ans;
        Arrays.sort(nums);
        int i = 0;
        do {
            if (nums[i] > 0) break;
            int j = i + 1, k = nums.length - 1;
            do {
                int sum = nums[i] + nums[j] + nums[k];
                if (sum == 0) {
                    ans.add(Arrays.asList(new Integer[]{nums[i], nums[j], nums[k]}));
                    do {
                        j++;
                    } while (nums[j] == nums[j - 1] && j < nums.length);
                } else if (sum < 0) {
                    j++;
                    continue;
                } else if (sum > 0) {
                    k--;
                    continue;
                }
            } while (j < k);
            do {
                i++;
            } while (nums[i] == nums[i - 1]);
        } while (i < nums.length - 2);
        return ans;
    }

    public static void main (String[] args) {
        Solution s = new Solution();
        int[] nums = {-1, 0, 1, 2, -1, -4};
        List ans = s.threeSum(nums);
        System.out.print(ans.toString() + '\n');
    }
}