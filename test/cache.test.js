import {Cache} from "../src/cache";

test('test1', () => {
    const cache = new Cache();
    cache.setValue("Dog", "Druzhok");
    
    expect(cache.getValue("Dog")).toBe("Druzhok");
    expect(cache.getValue("Dog")).toBe(null);
});

test('test2', () => {
    const cache = new Cache();
    cache.setValue("Dog", "Druzhok", 2);
    
    expect(cache.getValue("Dog")).toBe("Druzhok");
    expect(cache.getValue("Dog")).toBe("Druzhok");
    expect(cache.getValue("Dog")).toBe(null);
});

test('test3', () => {
    const cache = new Cache();
    expect(cache.setValue("Dog", "Druzhok", "asd")).toBe(null);
    expect(cache.getValue("Dog1")).toBe(null);
});

test('test4', () => {
    const cache = new Cache();
    cache.setValue("Dog", "Druzhok", 1);
    expect(cache.getStatistic()).toEqual("Set:  Dog  Druzhok  1\n");
});