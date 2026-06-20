/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let sum = 0
        let remind = 0

        let dummy = new ListNode(0)
        let curr = dummy


        while(l1 || l2 || remind){
            sum = (l1?.val || 0) + (l2?.val || 0 )+ remind;

            curr.next = new ListNode(sum % 10 )
            curr = curr.next

            remind = Math.floor(sum / 10);
        
            if(l1)
                l1 = l1.next
            if(l2)    
                l2 = l2.next
        }



        return dummy.next
    }
}
