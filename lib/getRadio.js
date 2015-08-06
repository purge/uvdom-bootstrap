'use strict';

function getRadio(attrs, text, key, inline) {
  if(inline) {
    return {
      tag: 'label',
      attrs: {
        className: {
          'radio-inline': true,
          'disabled': attrs.disabled
        },
        htmlFor: attrs.id,
      },
      children: [
        {
          tag: 'input',
          attrs: attrs
        },
        ' ',
        text
      ],
      key: key
    };

  } else {
    return {
      tag: 'div',
      attrs: {
        className: {
          'radio': true,
          'disabled': attrs.disabled
        }
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
}

module.exports = getRadio;
