def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagram_map = defaultdict(list)

        for s in strs:
            sorted_s = tuple(sorted(s))
            anagram_map[sorted_s].append(s)
            
            
        return sorted(anagram_map.values())