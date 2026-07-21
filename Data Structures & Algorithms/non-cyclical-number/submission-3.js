class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let set = new Set();

        while (n !== 1) {
            if (set.has(n)) return false;

            set.add(n);

            let sum = 0;
            let str = String(n);

            for (let i = 0; i <= str.length - 1; i++) {
                sum += Number(str[i]) ** 2;
            }

            n = sum;
        }

        return true;
    }
}