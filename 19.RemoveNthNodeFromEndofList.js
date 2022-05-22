/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
 var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
    dummy.next = head;



    console.log(listNode);
    for(let i= 1;i<head.length;i++){
        let target =  head[i]*head[i];
        for(let j=0;j<head.length;j++){
            if(target == head[j]){
                head.splice(j,1);
            }
        }
    }
    return head
};
console.log(removeNthFromEnd([1,2,3,4,5],2));