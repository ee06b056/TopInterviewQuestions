import java.util.*;

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int ans = 0;
        Map<Character, Integer> charIndex = new HashMap();
        int tempL = 0;
        for (int i = 0; i < s.length(); i++) {
            char key = s.charAt(i);
            if (!charIndex.containsKey(key) || (charIndex.get(key) + tempL < i)) {
                tempL++;
            } else {
                tempL = i - charIndex.get(key);
            }
            charIndex.put(key, i);
            ans = Math.max(ans, tempL);
        }
        return ans;
    }
}