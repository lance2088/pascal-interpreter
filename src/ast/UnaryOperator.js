const Node = require('./Node');

/**
 * AST Node for representing unary operators.
 *
 * @class
 * @since 1.0.0
 */
class UnaryOperator extends Node {
  /**
   * Creates a new instance of Node for unary operator.
   *
   * @param {Token} operator Unary operator
   * @param {Node} operand AST Node as an operand
   */
  constructor(operator, operand) {
    super(operator);

    this.operand = operand;
  }

  /**
   * Get an operator of this unary operation.
   *
   * @returns {Token}
   */
  getOperator() {
    return this.token;
  }

  /**
   * Get an operand of this unary expression.
   *
   * @returns {Node}
   */
  getOperand() {
    return this.operand;
  }

  /**
   * Static helper for creating UnaryOperator nodes.
   *
   * @static
   * @param {Token} operator Unary operator
   * @param {Node} operand AST Node as an operand
   * @returns {UnaryOperator}
   */
  static create(operator, operand) {
    return new this(operator, operand);
  }
}

module.exports = UnaryOperator;
