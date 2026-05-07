/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root) {
        let count = 0;
        function dfs(x, maxVal) {
            if (x.val >= maxVal) count++;
            maxVal = Math.max(x.val, maxVal);
            if (x.left) dfs(x.left, maxVal);
            if (x.right) dfs(x.right, maxVal);
        }
        dfs(root, root.val);
        return count;
    }
}
