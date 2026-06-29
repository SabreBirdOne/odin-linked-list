import LinkedList from "./LinkedList";

function createAnimalList() {
    const list = new LinkedList();
    list.append("dog");
    list.append("cat");
    list.append("parrot");
    list.append("hamster");
    list.append("snake");
    list.append("turtle");
    return list;
}

test('toString() test', () => {
    let list = createAnimalList();
    expect(list.toString()).toBe('( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null')
})

test('size() test', () => {
    let list = createAnimalList();
    expect(list.size()).toEqual(6);
})

test('prepend() with existing list test', () => {
    let list = createAnimalList();
    list.prepend('raven');
    expect(list.toString()).toBe('( raven ) -> ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null')
});

test('prepend() on empty list test', () => {
    let list = new LinkedList();
    list.prepend('raven');
    list.prepend('lynx')
    expect(list.toString()).toBe('( lynx ) -> ( raven ) -> null');
});

test('head and tail functions on empty list', () => {
    let list = new LinkedList();
    expect(list.head()).toBeUndefined();
    expect(list.tail()).toBeUndefined();
})

test('head and tail on existing list', () => {
    const list = createAnimalList();
    expect(list.head()).toBe('dog');
    expect(list.tail()).toBe('turtle');
})