import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> anagrams = new HashMap();
        for (int i = 0; i < strs.length; i++) {
            String key = convertWordToPatern(strs[i]);
            if (!anagrams.containsKey(key)) {
                List<String> list = new ArrayList();
                list.add(strs[i]);
                anagrams.put(key, list);
            } else {
                anagrams.get(key).add(strs[i]);
            }
        }
        List<List<String>> ans = new ArrayList();
        anagrams.forEach((key, value) -> {
            ans.add(value);
        });
        return ans;
    }

    private String convertWordToPatern (String word) {
        int[] chars = new int[26];
        for (int i = 0; i < word.length(); i++) {
            chars[word.charAt(i) - 97]++;
        }
        return Arrays.toString(chars);
    }
}