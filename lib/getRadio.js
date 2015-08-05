'use strict';

function getRadio(attrs, text, key) {
  var className = {
    disabled: attrs.disabled
  };
  className['radio' + (attrs.inline ? '-inline':'')] = true;

  return {
    tag: 'div',
    attrs: {
      className: className,
    },
    children: {
      tag: 'label',
      attrs: {
        htmlFor: attrs.id,
      },
      children: [
        {
          tag: 'input',
          attrs: attrs
        },
        ' ',
        text
      ]
    },
    key: key
  };
}

module.exports = getRadio;
