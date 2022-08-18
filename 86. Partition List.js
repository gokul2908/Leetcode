/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val, next) {
    return {
        val : (val===undefined ? 0 : val),
        next : (next===undefined ? null : next)
    }
}

var partition = function (head, x) {
function make_ll(arr){
    let Head = null, pHead;
    for(let each of arr){
        if (Head===null) {
            Head = ListNode(each);
            pHead = Head;
        }else {
            Head.next = ListNode(each);
            Head = Head.next
        }
    }return pHead
}

make_ll([1,2,3,4])

};
