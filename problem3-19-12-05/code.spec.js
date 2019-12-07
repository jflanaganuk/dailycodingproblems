const { Node, deserialize, serialize } = require('./code');

test("should pass the challenge", () => {
    node = new Node('root', new Node('left', new Node('left.left')), new Node('right'));
    expect(serialize(node)).toBe('{"val":"root","left":{"val":"left","left":{"val":"left.left","left":null,"right":null},"right":null},"right":{"val":"right","left":null,"right":null}}');
    expect(deserialize(serialize(node)).left.left.val).toBe('left.left');
});