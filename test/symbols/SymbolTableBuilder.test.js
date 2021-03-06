const {assert} = require('chai');
const SymbolTableBuilder = require('../../src/symbols/SymbolTableBuilder');
const SymbolTable = require('../../src/symbols/SymbolTable');
const Parser = require('../../src/parser');

describe('Symbols::SymbolTableBuilder', () => {
  it('Should properly instantiate', () => {
    const builder = SymbolTableBuilder.create();

    assert.instanceOf(builder, SymbolTableBuilder);
    assert.instanceOf(builder.scope, SymbolTable);
  });

  it('Should properly build a symbol table for a simple program', () => {
    const program = `PROGRAM program; VAR x: INTEGER; y: REAL; BEGIN END.`;
    const parser = new Parser(program);
    const ast = parser.parse();
    const tableBuilder = SymbolTableBuilder.create();

    tableBuilder.visit(ast);

    assert.equal(tableBuilder.scope.symbols.size, 4);
    assert.equal(tableBuilder.scope.lookup('x').getName(), 'x');
    assert.equal(tableBuilder.scope.lookup('y').getName(), 'y');
  });
});
