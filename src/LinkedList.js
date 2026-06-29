import Node from "./Node";

export default class LinkedList {
    constructor(){
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }
    // Representation Invariant: this.size >= 0

    append(value){
        // adds a new node containing value to the end of the list
        const newNode = new Node(value);

        if (this.length == 0){
            this.headNode = newNode;
            this.tailNode = newNode;
        }
        else {
            // at the tail node, update nextNode pointer
            (this.tailNode).nextNode = newNode; 

            // update the tail pointer of LinkedList
            this.tailNode = newNode;
        }

        this.length++;
    }

    prepend(value){
        //  adds a new node containing value to the start of the list
        let newNode = new Node(value);

        if (this.length == 0){
            this.headNode = newNode;
            this.tailNode = newNode;
        }

        else {
            newNode.nextNode = this.headNode;
            this.headNode = newNode;
        }

        this.length++;

    }

    size(){
        // returns the total number of nodes in the list
        return this.length;
    }

    head(){
        // returns the value of the first node in the list. If the list is empty, returns undefined
        if(!this.headNode) return undefined;
        return this.headNode.value;
    }

    tail(){
        // returns the value of the final node in the list. If the list is empty, returns undefined.
        if(!this.headNode) return undefined;
        return this.tailNode.value;
    }

    at(index){
        // return the value of the node at the given index. If there’s no node at the given index, returns undefined.
        let currentNode = this.headNode;
        let currentIndex = 0;
        while(currentNode !== null){
            if (currentIndex === index) return currentNode.value;
            currentNode = currentNode.nextNode;
            currentIndex++;
        }
        return undefined;
    }

    pop(){
        // remove the head node from the list and return its value. If it’s used on an empty list, returns undefined.
        const oldHead = this.headNode;
        if (!oldHead) return undefined;

        const oldHeadValue = oldHead.value;
        if (!oldHead.nextNode) {
            this.headNode = null;
            this.tailNode = null;
        }
        else {
            this.headNode = this.headNode.nextNode;
        }
            
        this.length--;
        return oldHeadValue;
    }

    contains(value){
        // returns true if the passed in value is in the list and otherwise returns false.
        let currentNode = this.headNode;
        while(currentNode !== null){
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    findIndex(value){
        /* returns the index of the node containing the given value. 
        If the value can’t be found in the list, returns -1. 
        If more than one node has a value matching the given value, 
        returns the index of the first node with the matching value.
        */
    }

    toString(){
        // returns a string displaying LinkedList. If the list is empty, returns an empty string
        let result = "";
        if (!this.length) return result;
        
        let currentNode = this.headNode;
        while(currentNode !== null){
            result += `( ${currentNode.value} ) -> `
            currentNode = currentNode.nextNode;
        }
        result += 'null';

        return result;
    }

    insertAt(index, ...values){
        /* insert new nodes with the given values at the given index. 
        If index is out of bounds (below 0 or above the list’s size), 
        throws a RangeError. 
        */
    }
}