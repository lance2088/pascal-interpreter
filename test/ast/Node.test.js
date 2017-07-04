const {assert} = require('chai');
const Token = require('../../src/lexer/Token');
const Node = require('../../src/ast/Node');

const TOKEN = Token.create(Token.INTEGER, 200);

describe('AST::Node', () => {
  it('Should properly instantiate', () => {
    const node = new Node(TOKEN);

    assert.instanceOf(node, Node);
  });

  it('Should properly return a token from node', () => {
    const node = new Node(TOKEN);

    assert.instanceOf(node.getToken(), Token);
  });

  it('Should properly instantiate from static create', () => {
    const node = Node.create(TOKEN);

    assert.instanceOf(node, Node);
  });
});
