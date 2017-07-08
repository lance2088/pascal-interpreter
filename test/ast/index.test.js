const {assert} = require('chai');
const AST = require('../../src/ast');

describe('AST::EntryPoint', () => {
  it('Should properly export all the nodes', () => {
    assert.isFunction(AST.Assign);
    assert.isFunction(AST.BinaryOperator);
    assert.isFunction(AST.Compound);
    assert.isFunction(AST.Node);
    assert.isFunction(AST.NoOperation);
    assert.isFunction(AST.Number);
    assert.isFunction(AST.UnaryOperator);
    assert.isFunction(AST.Variable);
  });
});
