class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "ERROR 404: NO_STRING"
        return strs.join("specialencodedstr")
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str == "ERROR 404: NO_STRING") return []
        return str.split("specialencodedstr")
    }
}
