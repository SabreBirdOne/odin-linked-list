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

function createRavenList() {
    const list = new LinkedList();
    list.append('raven');
    return list;
}

test('toString() test', () => {
    let list = createAnimalList();
    expect(list.toString()).toBe('( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null')
})

test('toString() test on empty list', () => {
    let list = new LinkedList();
    expect(list.toString()).toBe("");
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
});

test('head and tail functions on 1-element list', () => {
    let list = createRavenList();
    expect(list.head()).toBe('raven');
    expect(list.tail()).toBe('raven');
    expect(list.head()).toBe(list.tail());
});

test('head and tail on existing list', () => {
    const list = createAnimalList();
    expect(list.head()).toBe('dog');
    expect(list.tail()).toBe('turtle');
});

test('at() empty list', () => {
    let list = new LinkedList();
    expect(list.at(0)).toBeUndefined();
    expect(list.at(9999)).toBeUndefined();
});

test('at() on existing list', () => {
    const list = createAnimalList();
    expect(list.at(0)).toBe('dog');
    expect(list.at(4)).toBe('snake');
    expect(list.at(-1)).toBeUndefined();
    expect(list.at(6)).toBeUndefined();
});

test('pop() on empty list', () => {
    let list = new LinkedList();
    const poppedValue = list.pop();
    expect(list.toString()).toBe('');
    expect(poppedValue).toBeUndefined();
});

test('pop() on 1-element list', () => {
    let list = createRavenList();
    const poppedValue = list.pop();
    expect(list.toString()).toBe('');
    expect(poppedValue).toBe('raven');
})

test('pop() on existing list', () => {
    let list = createAnimalList();
    const poppedValue = list.pop();
    expect(list.toString()).toBe('( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null');
    expect(poppedValue).toBe('dog');
})