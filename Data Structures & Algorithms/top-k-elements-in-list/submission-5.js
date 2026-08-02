class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = Array.from({length: nums.length + 1}, () => [])

        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            count[curr] ? count[curr] += 1 : count[curr] = 1
        }

        for (const [key, value] of Object.entries(count)) {
            freq[value].push(key)
        }
        
        return freq.flat(Infinity).slice(-k)
    }
}