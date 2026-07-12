class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        let totalGas = 0;
        let totalCost = 0;
        let start = 0;
        let currentGas = 0;
        for (let i = 0; i <= gas.length - 1; i++) {
            let diff = gas[i] - cost[i];
            totalGas += gas[i];
            totalCost += cost[i];

            currentGas += diff;
            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }
        if (totalGas < totalCost) return -1;
        return start;
    }
}
