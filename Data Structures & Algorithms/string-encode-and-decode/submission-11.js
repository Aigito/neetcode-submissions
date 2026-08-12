class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const result = strs.reduce((acc, curr) => {
            return acc+curr.length+"#"+curr
        }, "")

        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let originalStr = str
        let length = "";

        while (originalStr.length) {
            if (originalStr[0].match(/\d/)) {
                length += originalStr[0]
                originalStr = originalStr.slice(1)
            } else if (originalStr[0].match("#")) {
                result.push(originalStr.slice(1, Number(length) + 1))
                originalStr = originalStr.slice(Number(length) + 1)
                length = ""
            }
        }
        
        return result
    }
}
