const countInput = (texts) => texts ? texts.length : 0;
const overCharLimit = (charCount, charLimit) => charCount > charLimit;
const schema = {
  properties: {
    charLimit: { type: 'number', value_type: "int" },
    rows: { type: 'number', value_type: "int" },
    cols: { type: 'number', value_type: "int" }
  }
};

/**
 * Create class with counter control
 * 
 * @param {string} type Type. Possible values: `input`, `textarea`
 * @returns {class}
 */
const counterControl = (type) => {
  return createClass({
    handleChange: function (e) {
      this.props.onChange(e.target.value);
    },
    render: function () {
      const value = this.props.value;
      const count = countInput(value);
      const limit = this.props.field.get("charLimit");
      const rows = this.props.field.get("rows");
      const cols = this.props.field.get("cols");
      const props = type === "input" ? { type: "text" } : { rows, cols };

      return h("div", { style: { textAlign: 'right' }},
        h(type, {
          id: this.props.forID,
          className: this.props.classNameWrapper,
          value: value,
          onChange: this.handleChange,
          ...props
        }),
        h("small", { className: overCharLimit(count, limit) ? 'over-limit' : '' }, `${count}/${limit} characters`)
      );
    }
  });
};

CMS.registerWidget("stringWithCounter", counterControl("input"), '', schema);
CMS.registerWidget("textWithCounter", counterControl("textarea"), '', schema);