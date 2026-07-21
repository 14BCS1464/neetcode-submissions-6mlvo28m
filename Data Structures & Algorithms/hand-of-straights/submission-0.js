class Solution {
    /**
     * @param {number[]} hand
     * @param {number} groupSize
     * @return {boolean}
     */
    isNStraightHand(hand, groupSize) {
        if (hand.length % groupSize !== 0) return false;
        hand.sort((a, b) => a - b);
        let freq = {};
        for (let i = 0; i <= hand.length - 1; i++) {
            freq[hand[i]] = freq[hand[i]] ? freq[hand[i]] + 1 : 1;
        }
        for (let i = 0; i <= hand.length - 1; i++) {
            if (freq[hand[i]] === 0) continue;
            for (let j = 0; j < groupSize; j++) {
                let current = hand[i] + j;
                if (!freq[current]) return false;
                freq[current]--;
            }
        }
        return true;
    }
}
