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

test('toString() test', ()=>{
    let list = createAnimalList();
    expect(list.toString()).toBe('( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null')
})

test('size() test', ()=>{
    let list = createAnimalList();
    expect(list.size()).toEqual(6);
})