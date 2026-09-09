class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const serialisedInput = s.replace(/\W/g, '');
        console.log(serialisedInput)
        let i = 0;
        let j = serialisedInput.length - 1;
         

        while (i <= j) {
            if (serialisedInput[i].toLowerCase() !== serialisedInput[j].toLowerCase()) return false
            i++;
            j--;
        }

        return true;
    }
}
