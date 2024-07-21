class LinkedNodeList {
    val: number
    next: LinkedNodeList | null

    constructor(val?: number, next?: LinkedNodeList | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function addTwoNumbers(l1: LinkedNodeList | null, l2: LinkedNodeList | null): LinkedNodeList | null {


    return null;
};


const l1 = new LinkedNodeList(2);
l1.next = new LinkedNodeList(4)
l1.next.next = new LinkedNodeList(3)

const l2 = new LinkedNodeList(5);
l1.next = new LinkedNodeList(6)
l1.next.next = new LinkedNodeList(4)