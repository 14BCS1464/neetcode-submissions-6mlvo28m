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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        let reuslt = [];
        function dfs(x, deapth) {
            if (deapth === reuslt.length) {
                reuslt.push(x.val);
            }
                 if (x.right) dfs(x.right, deapth + 1);
            if (x.left) dfs(x.left, deapth + 1);
       
        }
        dfs(root, 0);
        return reuslt;
    }
}
