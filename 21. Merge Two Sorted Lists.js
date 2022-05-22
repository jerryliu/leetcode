/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let ls1 = new ListNode([1,2,4])
    let ls2 = new ListNode([1,3,4])
     console.log(ls1);
    // let result =list1.concat(list2);
    // result.sort((a,b)=>a-b);
    // return result.sort((a,b)=>a-b);

};

let list1 = new ListNode([1,2,4])
let list2 = new ListNode([1,3,4])
console.log(mergeTwoLists(list1,list2));