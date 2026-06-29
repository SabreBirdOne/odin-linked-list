import Node from "./Node";

export default class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        // adds a new node containing value to the end of the list
    }

    prepend(value){
        //  adds a new node containing value to the start of the list

    }

    size(){
        // returns the total number of nodes in the list
    }

    head(){
        // returns the value of the first node in the list. If the list is empty, returns undefined
    }

    tail(){
        // returns the value of the final node in the list. If the list is empty, returns undefined.
    }

    at(index){
        // return the value of the node at the given index. If there’s no node at the given index, returns undefined.
    }

    pop(){
        // remove the head node from the list and return its value. If it’s used on an empty list, returns undefined.
    }

    contains(value){
        // returns true if the passed in value is in the list and otherwise returns false.
    }

    findIndex(value){
        /* returns the index of the node containing the given value. 
        If the value can’t be found in the list, returns -1. 
        If more than one node has a value matching the given value, 
        returns the index of the first node with the matching value.
        */
    }

    toString(){
        // returns a string displaying LinkedList
    }

    insertAt(index, ...values){
        /* insert new nodes with the given values at the given index. 
        If index is out of bounds (below 0 or above the list’s size), 
        throws a RangeError. 
        */
    }
}