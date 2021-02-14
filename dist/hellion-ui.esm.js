import { defineComponent, pushScopeId, popScopeId, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withScopeId, reactive, renderSlot, ref, resolveComponent, createCommentVNode } from 'vue';

var script = /*#__PURE__*/defineComponent({
  name: 'HellionUiSample',

  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null
      }
    };
  },

  computed: {
    changedBy() {
      const {
        message
      } = this;
      if (!message.action) return 'initialized';
      return `${message?.action} ${message.amount ?? ''}`.trim();
    }

  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },

    decrement(arg) {
      const amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },

    reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }

  }
});

const _withId = /*#__PURE__*/withScopeId("data-v-d03321c6");

pushScopeId("data-v-d03321c6");

const _hoisted_1 = {
  class: "hellion-ui-sample"
};

const _hoisted_2 = /*#__PURE__*/createTextVNode(".");

popScopeId();

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return openBlock(), createBlock("div", _hoisted_1, [createVNode("p", null, [createTextVNode("The counter was " + toDisplayString(_ctx.changedBy) + " to ", 1), createVNode("b", null, toDisplayString(_ctx.counter), 1), _hoisted_2]), createVNode("button", {
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.increment && _ctx.increment(...args))
  }, " Click +1 "), createVNode("button", {
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.decrement && _ctx.decrement(...args))
  }, " Click -1 "), createVNode("button", {
    onClick: _cache[3] || (_cache[3] = $event => _ctx.increment(5))
  }, " Click +5 "), createVNode("button", {
    onClick: _cache[4] || (_cache[4] = $event => _ctx.decrement(5))
  }, " Click -5 "), createVNode("button", {
    onClick: _cache[5] || (_cache[5] = (...args) => _ctx.reset && _ctx.reset(...args))
  }, " Reset ")]);
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\n.hellion-ui-sample[data-v-d03321c6] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.hellion-ui-sample p[data-v-d03321c6] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);

script.render = render;
script.__scopeId = "data-v-d03321c6";

const styleElement = document.createElement("style");
let classes = [];

function generateClassRule(engineClass) {
  let chain = `${engineClass.name}{`;
  engineClass.props.forEach(prop => {
    chain = chain + `${prop.name} : ${prop.data};`;
  });
  chain = chain + "}";
  return chain;
}

function updateClass(engineClass, renew = true) {
  if (styleElement.sheet) {
    if (!renew) {
      styleElement.sheet.deleteRule(engineClass.index);
    }

    styleElement.sheet.insertRule(generateClassRule(engineClass), engineClass.index);
  }
}

function deleteClass(className) {
  // Remove it from the style sheet
  const engineClass = classes.find(x => x.name == className);

  if (styleElement.sheet && engineClass) {
    styleElement.sheet.deleteRule(engineClass.index); // Remove it from the array

    classes = classes.filter(x => x.index == engineClass.index);
  }
}

function inject(className, propertyName, propertyData) {
  const cssClass = classes.find(x => x.name == className);

  if (!cssClass) {
    // Create a new class
    classes.push({
      index: classes.length,
      name: className,
      props: [{
        name: propertyName,
        data: propertyData
      }]
    });
    const newClass = classes[classes.length - 1];
    updateClass(newClass);
  } else {
    cssClass.props.push({
      name: propertyName,
      data: propertyData
    });
    updateClass(cssClass, false);
  }
}

function injectObject(className, propObject, clearOld = true, injectOnce = false) {
  const cssClass = classes.find(x => x.name == className);

  if (!cssClass) {
    // Create a new class
    classes.push({
      index: classes.length,
      name: className,
      props: []
    });
    const newClass = classes[classes.length - 1];
    Object.entries(propObject).forEach(prop => {
      const [key, value] = prop;
      newClass.props.push({
        name: key,
        data: value
      });
    });
    updateClass(newClass);
  } else if (!injectOnce) {
    // Clear old props
    if (clearOld) cssClass.props = [];
    Object.entries(propObject).forEach(prop => {
      const [key, value] = prop;
      cssClass.props.push({
        name: key,
        data: value
      });
    });
    updateClass(cssClass, false);
  }
}

function init() {
  styleElement.id = "cssEngineSheet"; // Check for older style elements

  const oldElement = document.getElementById("cssEngineSheet"); // Remove old style

  if (oldElement) {
    document.head.removeChild(oldElement);
  } // Add the new element


  document.head.appendChild(styleElement);
  classes = [];

  if (styleElement.sheet) {
    console.log(styleElement.sheet);
  }
}

const cssEngine = {
  init,
  inject,
  injectObject,
  deleteClass,
  updateClass
};

/**
 * Set a color with a specific luminance and return it
 * @param property The property name
 * @param hex The hex code
 * @param lum The luminance factor between -1 and 1
 */
function createColorVariant(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, "");

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  lum = lum || 0; // Convert to decimal and change luminosity

  let rgb = "#",
      c,
      i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}
/**
 * Return a bright or dark color based on the current text luminance
 * @param bgColor The color that we are matching against
 */


function assignTextColor(bgColor) {
  const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR

  const g = parseInt(color.substring(2, 4), 16); // hexToG

  const b = parseInt(color.substring(4, 6), 16); // hexToB

  const uiColors = [r / 255, g / 255, b / 255];
  const c = uiColors.map(col => {
    if (col <= 0.03928) {
      return col / 12.92;
    }

    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  const L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.249 ? "#111111" : "#ffffff";
}

const colorEngine = {
  createColorVariant,
  assignTextColor
};

const options = reactive({
  colors: {
    primary: "#F95D36",
    secondary: "#D6AF76",
    tertiary: "#293639",
    info: "#1f151f",
    success: "#7d8f43",
    warning: "#fb7f0b",
    error: "#f44336"
  },
  font: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  dark: false
});
const colorVariants = [{
  name: "light",
  lum: 0.1
}, {
  name: "lighter",
  lum: 0.2
}, {
  name: "lightest",
  lum: 0.3
}, {
  name: "dark",
  lum: -0.1
}, {
  name: "darker",
  lum: -0.2
}, {
  name: "darkest",
  lum: -0.3
}];

async function loadColors() {
  Object.entries(options.colors).forEach(color => {
    const [key, value] = color;
    cssEngine.inject(":root", `--color-${key}`, value);
    cssEngine.inject(":root", `--color-${key}`, value);
    cssEngine.inject(":root", `--color-${key}-transparent`, `${value}80`);
    cssEngine.inject(":root", `--color-${key}-text`, colorEngine.assignTextColor(value));
    colorVariants.forEach(variant => {
      cssEngine.inject(":root", `--color-${key}-${variant.name}`, colorEngine.createColorVariant(value, variant.lum));
    });
  });
}

function init$1(userOptions) {
  if (userOptions) {
    options.colors = userOptions.colors;
    options.dark = userOptions.dark;
  }

  cssEngine.init();
  loadColors();
  cssEngine.inject(":root", "--font", options.font);
}

const hellionApp = reactive({
  init: init$1
});

var script$1 = defineComponent({
  name: "HellionApp",
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  components: {},

  setup(props) {
    hellionApp.init(props.options);
    return {
      hellionApp
    };
  }

});

const _hoisted_1$1 = {
  class: "hellion-app"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", _hoisted_1$1, [renderSlot(_ctx.$slots, "default")]);
}

var css_248z$1 = "\n@import \"../../css/theme.css\";\r\n";
styleInject(css_248z$1);

script$1.render = render$1;

const styleElement$1 = document.createElement("style");
let classes$1 = [];

function generateClassRule$1(engineClass) {
  let chain = `${engineClass.name}{`;
  engineClass.props.forEach(prop => {
    chain = chain + `${prop.name} : ${prop.data};`;
  });
  chain = chain + "}";
  return chain;
}

function updateClass$1(engineClass, renew = true) {
  if (styleElement$1.sheet) {
    if (!renew) {
      styleElement$1.sheet.deleteRule(engineClass.index);
    }

    styleElement$1.sheet.insertRule(generateClassRule$1(engineClass), engineClass.index);
  }
}

function deleteClass$1(className) {
  // Remove it from the style sheet
  const engineClass = classes$1.find(x => x.name == className);

  if (styleElement$1.sheet && engineClass) {
    styleElement$1.sheet.deleteRule(engineClass.index); // Remove it from the array

    classes$1 = classes$1.filter(x => x.index == engineClass.index);
  }
}

function inject$1(className, propertyName, propertyData) {
  const cssClass = classes$1.find(x => x.name == className);

  if (!cssClass) {
    // Create a new class
    classes$1.push({
      index: classes$1.length,
      name: className,
      props: [{
        name: propertyName,
        data: propertyData
      }]
    });
    const newClass = classes$1[classes$1.length - 1];
    updateClass$1(newClass);
  } else {
    cssClass.props.push({
      name: propertyName,
      data: propertyData
    });
    updateClass$1(cssClass, false);
  }
}

function injectObject$1(className, propObject, clearOld = true, injectOnce = false) {
  const cssClass = classes$1.find(x => x.name == className);

  if (!cssClass) {
    // Create a new class
    classes$1.push({
      index: classes$1.length,
      name: className,
      props: []
    });
    const newClass = classes$1[classes$1.length - 1];
    Object.entries(propObject).forEach(prop => {
      const [key, value] = prop;
      newClass.props.push({
        name: key,
        data: value
      });
    });
    updateClass$1(newClass);
  } else if (!injectOnce) {
    // Clear old props
    if (clearOld) cssClass.props = [];
    Object.entries(propObject).forEach(prop => {
      const [key, value] = prop;
      cssClass.props.push({
        name: key,
        data: value
      });
    });
    updateClass$1(cssClass, false);
  }
}

function init$2() {
  styleElement$1.id = "cssEngineSheet"; // Check for older style elements

  const oldElement = document.getElementById("cssEngineSheet"); // Remove old style

  if (oldElement) {
    document.head.removeChild(oldElement);
  } // Add the new element


  document.head.appendChild(styleElement$1);
  classes$1 = [];

  if (styleElement$1.sheet) {
    console.log(styleElement$1.sheet);
  }
}

const cssEngine$1 = {
  init: init$2,
  inject: inject$1,
  injectObject: injectObject$1,
  deleteClass: deleteClass$1,
  updateClass: updateClass$1
};

function shortId() {
  return Math.random().toString(36).substr(2, 9);
}

var script$2 = defineComponent({
  name: "HellionIcon",
  props: {
    name: {
      type: String,
      default: null
    }
  },
  components: {},

  setup() {
    return {};
  }

});

function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock("span", {
    class: "icon",
    key: _ctx.name
  }, [createVNode("span", {
    class: "iconify",
    "data-icon": _ctx.name
  }, null, 8, ["data-icon"])]);
}

script$2.render = render$2;

var script$3 = defineComponent({
  name: "AppButton",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    roundness: {
      type: [Number, String],
      default: "0.4"
    },
    squared: {
      type: Boolean,
      default: false
    },
    xSmall: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    big: {
      type: Boolean,
      default: false
    },
    xBig: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconLeft: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    }
  },
  components: {
    HellionIcon: script$2
  },

  setup(props) {
    const id = ref(`btn_${shortId()}`); // Default style

    if (!props.outlined) {
      cssEngine$1.injectObject(`.btn-${props.color}`, {
        "background-color": `var(--color-${props.color})`,
        color: `var(--color-${props.color}-text)`,
        "box-shadow": `0 0px 0px 1px var(--color-${props.color}-dark),
       0 2px 20px 2px var(--color-${props.color}-transparent)`
      }, false, true); // Active style

      cssEngine$1.injectObject(`.btn-${props.color}:active`, {
        "background-color": `var(--color-${props.color}-dark)`,
        "box-shadow": `0 0px 0px 1px var(--color-${props.color}-dark), 
      0 5px 10px 2px var(--color-${props.color}-transparent)`
      }, false, true);
    } else {
      cssEngine$1.injectObject(`.btn-outlined-${props.color}`, {
        color: `var(--color-${props.color})`,
        "box-shadow": `0 0px 0px 2px var(--color-${props.color}-dark),
       0 2px 20px 2px var(--color-${props.color}-transparent)`
      }, false, true); // Active style

      cssEngine$1.injectObject(`.btn-outlined-${props.color}:active`, {
        "background-color": `var(--color-${props.color}-transparent)`,
        color: `var(--color-${props.color}-darker)`,
        "box-shadow": `0 0px 0px 2px var(--color-${props.color}-dark), 
      0 5px 10px 2px var(--color-${props.color}-transparent)`
      }, false, true);
    }

    return {
      id
    };
  }

});

function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hellion_icon = resolveComponent("hellion-icon");

  return openBlock(), createBlock("button", {
    class: ["hellion-button", [_ctx.disabled || _ctx.loading ? _ctx.outlined ? `btn-disabled btn-disabled-outlined-${_ctx.color}` : `btn-disabled btn-disabled-${_ctx.color}` : _ctx.outlined ? `btn-outlined-${_ctx.color}` : `btn-${_ctx.color}`,, _ctx.squared ? _ctx.small ? 'btn-small-squared' : _ctx.big ? 'btn-big-squared' : _ctx.xSmall ? 'btn-x-small-squared' : _ctx.xBig ? 'btn-x-big-squared' : '' : _ctx.small ? 'btn-small' : _ctx.big ? 'btn-big' : _ctx.xSmall ? 'btn-x-small' : _ctx.xBig ? 'btn-x-big' : '', _ctx.squared ? 'btn-squared' : '']],
    id: _ctx.id,
    style: {
      borderRadius: `${_ctx.roundness}rem`,
      flexDirection: _ctx.iconLeft ? 'row-reverse' : ''
    },
    disabled: _ctx.disabled || _ctx.loading
  }, [createVNode("span", null, [renderSlot(_ctx.$slots, "default")]), _ctx.icon || _ctx.loading ? (openBlock(), createBlock(_component_hellion_icon, {
    key: 0,
    class: _ctx.loading ? 'spin' : '',
    name: _ctx.loading ? 'gg:spinner' : _ctx.icon,
    style: {
      marginLeft: _ctx.squared ? '' : _ctx.iconLeft ? '' : '0.4rem',
      marginRight: _ctx.squared ? '' : _ctx.squared ? '' : _ctx.iconLeft ? '0.4rem' : ''
    }
  }, null, 8, ["class", "name", "style"])) : createCommentVNode("", true)], 14, ["id", "disabled"]);
}

var css_248z$2 = "\n.hellion-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.625rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border: none;\r\n  box-sizing: border-box;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  margin: 0.7rem;\r\n  user-select: none;\r\n  max-width: calc(100vw - 2rem);\r\n  background-color: transparent;\n}\n.btn-x-small {\r\n  padding: 0.425rem;\r\n  padding-left: 0.7rem;\r\n  padding-right: 0.7rem;\r\n  font-size: 0.7rem;\n}\n.btn-small {\r\n  padding: 0.525rem;\r\n  padding-left: 0.8rem;\r\n  padding-right: 0.8rem;\r\n  font-size: 0.8rem;\n}\n.btn-big {\r\n  padding: 0.825rem;\r\n  padding-left: 1.2rem;\r\n  padding-right: 1.2rem;\r\n  font-size: 1.2rem;\n}\n.btn-x-big {\r\n  padding: 0.925rem;\r\n  padding-left: 1.3rem;\r\n  padding-right: 1.3rem;\r\n  font-size: 1.3rem;\n}\n.btn-x-small-squared {\r\n  width: 2rem !important;\r\n  height: 2rem !important;\r\n  font-size: 0.7rem;\n}\n.btn-small-squared {\r\n  width: 2.4rem !important;\r\n  height: 2.4rem !important;\r\n  font-size: 1rem;\n}\n.btn-big-squared {\r\n  width: 3rem !important;\r\n  height: 3rem !important;\r\n  font-size: 1.2rem;\n}\n.btn-x-big-squared {\r\n  width: 3.2rem !important;\r\n  height: 3.2rem !important;\r\n  font-size: 1.4rem;\n}\n.btn-squared {\r\n  width: 2.6rem;\r\n  height: 2.6rem;\n}\n.btn-disabled {\r\n  pointer-events: none;\r\n  box-shadow: 0 0px 1px gray;\r\n  background-color: rgb(214, 214, 214);\r\n  color: rgb(98, 98, 98);\n}\r\n";
styleInject(css_248z$2);

script$3.render = render$3;

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  HellionUiSample: script,
  HellionApp: script$1,
  HellionButton: script$3
});

// Import vue components

const install = function installHellionUi(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()

export default install;
export { script$1 as HellionApp, script$3 as HellionButton, script as HellionUiSample };
