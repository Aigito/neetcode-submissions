class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numsSet = new Set(nums)
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            let currNum = nums[i]
            let length = 1;
            // check to see if it is the start of a sequence (i.e. has no preceeding number)
            if (numsSet.has(currNum - 1)) {
                continue;
            };

            // if num is start of sequence, check if there is a consecutive succeeding number
            while (numsSet.has(currNum + 1)) {
                // if there is, increase the length and keep going
                length += 1;
                currNum += 1
                // if there isn't, take the higher between the current consecutive length and the current longest length
            }

            longest = Math.max(length, longest);
        }

        return longest;
    }
}
