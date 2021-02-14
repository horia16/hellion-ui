'use strict';var vue=require('vue');function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}var script = /*#__PURE__*/vue.defineComponent({
  name: 'HellionUiSample',
  data: function data() {
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
    changedBy: function changedBy() {
      var _message$amount;

      var message = this.message;
      if (!message.action) return 'initialized';
      return "".concat(message === null || message === void 0 ? void 0 : message.action, " ").concat((_message$amount = message.amount) !== null && _message$amount !== void 0 ? _message$amount : '').trim();
    }
  },
  methods: {
    increment: function increment(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter += amount;
      this.message.action = 'incremented by';
      this.message.amount = amount;
    },
    decrement: function decrement(arg) {
      var amount = typeof arg !== 'number' ? 1 : arg;
      this.counter -= amount;
      this.message.action = 'decremented by';
      this.message.amount = amount;
    },
    reset: function reset() {
      this.counter = this.initCounter;
      this.message.action = 'reset';
      this.message.amount = null;
    }
  }
});var _withId = /*#__PURE__*/vue.withScopeId("data-v-d03321c6");

vue.pushScopeId("data-v-d03321c6");

var _hoisted_1 = {
  class: "hellion-ui-sample"
};

var _hoisted_2 = /*#__PURE__*/vue.createTextVNode(".");

vue.popScopeId();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("div", _hoisted_1, [vue.createVNode("p", null, [vue.createTextVNode("The counter was " + vue.toDisplayString(_ctx.changedBy) + " to ", 1), vue.createVNode("b", null, vue.toDisplayString(_ctx.counter), 1), _hoisted_2]), vue.createVNode("button", {
    onClick: _cache[1] || (_cache[1] = function () {
      return _ctx.increment && _ctx.increment.apply(_ctx, arguments);
    })
  }, " Click +1 "), vue.createVNode("button", {
    onClick: _cache[2] || (_cache[2] = function () {
      return _ctx.decrement && _ctx.decrement.apply(_ctx, arguments);
    })
  }, " Click -1 "), vue.createVNode("button", {
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return _ctx.increment(5);
    })
  }, " Click +5 "), vue.createVNode("button", {
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return _ctx.decrement(5);
    })
  }, " Click -5 "), vue.createVNode("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return _ctx.reset && _ctx.reset.apply(_ctx, arguments);
    })
  }, " Reset ")]);
});function styleInject(css, ref) {
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
}var css_248z = "\n.hellion-ui-sample[data-v-d03321c6] {\n    display: block;\n    width: 400px;\n    margin: 25px auto;\n    border: 1px solid #ccc;\n    background: #eaeaea;\n    text-align: center;\n    padding: 25px;\n}\n.hellion-ui-sample p[data-v-d03321c6] {\n    margin: 0 0 1em;\n}\n";
styleInject(css_248z);script.render = render;
script.__scopeId = "data-v-d03321c6";var styleElement = document.createElement("style");
var classes = [];

function generateClassRule(engineClass) {
  var chain = "".concat(engineClass.name, "{");
  engineClass.props.forEach(function (prop) {
    chain = chain + "".concat(prop.name, " : ").concat(prop.data, ";");
  });
  chain = chain + "}";
  return chain;
}

function updateClass(engineClass) {
  var renew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (styleElement.sheet) {
    if (!renew) {
      styleElement.sheet.deleteRule(engineClass.index);
    }

    styleElement.sheet.insertRule(generateClassRule(engineClass), engineClass.index);
  }
}

function deleteClass(className) {
  // Remove it from the style sheet
  var engineClass = classes.find(function (x) {
    return x.name == className;
  });

  if (styleElement.sheet && engineClass) {
    styleElement.sheet.deleteRule(engineClass.index); // Remove it from the array

    classes = classes.filter(function (x) {
      return x.index == engineClass.index;
    });
  }
}

function inject(className, propertyName, propertyData) {
  var cssClass = classes.find(function (x) {
    return x.name == className;
  });

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
    var newClass = classes[classes.length - 1];
    updateClass(newClass);
  } else {
    cssClass.props.push({
      name: propertyName,
      data: propertyData
    });
    updateClass(cssClass, false);
  }
}

function injectObject(className, propObject) {
  var clearOld = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var injectOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var cssClass = classes.find(function (x) {
    return x.name == className;
  });

  if (!cssClass) {
    // Create a new class
    classes.push({
      index: classes.length,
      name: className,
      props: []
    });
    var newClass = classes[classes.length - 1];
    Object.entries(propObject).forEach(function (prop) {
      var _prop = _slicedToArray(prop, 2),
          key = _prop[0],
          value = _prop[1];

      newClass.props.push({
        name: key,
        data: value
      });
    });
    updateClass(newClass);
  } else if (!injectOnce) {
    // Clear old props
    if (clearOld) cssClass.props = [];
    Object.entries(propObject).forEach(function (prop) {
      var _prop2 = _slicedToArray(prop, 2),
          key = _prop2[0],
          value = _prop2[1];

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

  var oldElement = document.getElementById("cssEngineSheet"); // Remove old style

  if (oldElement) {
    document.head.removeChild(oldElement);
  } // Add the new element


  document.head.appendChild(styleElement);
  classes = [];

  if (styleElement.sheet) {
    console.log(styleElement.sheet);
  }
}

var cssEngine = {
  init: init,
  inject: inject,
  injectObject: injectObject,
  deleteClass: deleteClass,
  updateClass: updateClass
};/**
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

  var rgb = "#",
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
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR

  var g = parseInt(color.substring(2, 4), 16); // hexToG

  var b = parseInt(color.substring(4, 6), 16); // hexToB

  var uiColors = [r / 255, g / 255, b / 255];
  var c = uiColors.map(function (col) {
    if (col <= 0.03928) {
      return col / 12.92;
    }

    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.249 ? "#111111" : "#ffffff";
}

var colorEngine = {
  createColorVariant: createColorVariant,
  assignTextColor: assignTextColor
};var options = vue.reactive({
  colors: {
    primary: "#F95D36",
    secondary: "#D6AF76",
    tertiary: "#293639",
    info: "#1f151f",
    success: "#7d8f43",
    warning: "#fb7f0b",
    error: "#f44336"
  },
  dark: false
});
var colorVariants = [{
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

function loadColors() {
  return _loadColors.apply(this, arguments);
}

function _loadColors() {
  _loadColors = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Object.entries(options.colors).forEach(function (color) {
              var _color = _slicedToArray(color, 2),
                  key = _color[0],
                  value = _color[1];

              cssEngine.inject(":root", "--color-".concat(key), value);
              cssEngine.inject(":root", "--color-".concat(key), value);
              cssEngine.inject(":root", "--color-".concat(key, "-transparent"), "".concat(value, "80"));
              cssEngine.inject(":root", "--color-".concat(key, "-text"), colorEngine.assignTextColor(value));
              colorVariants.forEach(function (variant) {
                cssEngine.inject(":root", "--color-".concat(key, "-").concat(variant.name), colorEngine.createColorVariant(value, variant.lum));
              });
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadColors.apply(this, arguments);
}

function init$1(userOptions) {
  if (userOptions) {
    options.colors = userOptions.colors;
    options.dark = userOptions.dark;
  }

  cssEngine.init();
  loadColors();
}

var hellionApp = vue.reactive({
  init: init$1
});var script$1 = vue.defineComponent({
  name: "HellionApp",
  props: {
    options: {
      type: Object,
      default: null
    }
  },
  components: {},
  setup: function setup(props) {
    hellionApp.init(props.options);
    return {
      hellionApp: hellionApp
    };
  }
});var _hoisted_1$1 = {
  class: "hellion-app"
};
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", _hoisted_1$1, [vue.renderSlot(_ctx.$slots, "default")]);
}var css_248z$1 = "\n@import \"/src/css/theme.css\";\r\n";
styleInject(css_248z$1);script$1.render = render$1;var styleElement$1 = document.createElement("style");
var classes$1 = [];

function generateClassRule$1(engineClass) {
  var chain = "".concat(engineClass.name, "{");
  engineClass.props.forEach(function (prop) {
    chain = chain + "".concat(prop.name, " : ").concat(prop.data, ";");
  });
  chain = chain + "}";
  return chain;
}

function updateClass$1(engineClass) {
  var renew = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (styleElement$1.sheet) {
    if (!renew) {
      styleElement$1.sheet.deleteRule(engineClass.index);
    }

    styleElement$1.sheet.insertRule(generateClassRule$1(engineClass), engineClass.index);
  }
}

function deleteClass$1(className) {
  // Remove it from the style sheet
  var engineClass = classes$1.find(function (x) {
    return x.name == className;
  });

  if (styleElement$1.sheet && engineClass) {
    styleElement$1.sheet.deleteRule(engineClass.index); // Remove it from the array

    classes$1 = classes$1.filter(function (x) {
      return x.index == engineClass.index;
    });
  }
}

function inject$1(className, propertyName, propertyData) {
  var cssClass = classes$1.find(function (x) {
    return x.name == className;
  });

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
    var newClass = classes$1[classes$1.length - 1];
    updateClass$1(newClass);
  } else {
    cssClass.props.push({
      name: propertyName,
      data: propertyData
    });
    updateClass$1(cssClass, false);
  }
}

function injectObject$1(className, propObject) {
  var clearOld = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var injectOnce = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var cssClass = classes$1.find(function (x) {
    return x.name == className;
  });

  if (!cssClass) {
    // Create a new class
    classes$1.push({
      index: classes$1.length,
      name: className,
      props: []
    });
    var newClass = classes$1[classes$1.length - 1];
    Object.entries(propObject).forEach(function (prop) {
      var _prop = _slicedToArray(prop, 2),
          key = _prop[0],
          value = _prop[1];

      newClass.props.push({
        name: key,
        data: value
      });
    });
    updateClass$1(newClass);
  } else if (!injectOnce) {
    // Clear old props
    if (clearOld) cssClass.props = [];
    Object.entries(propObject).forEach(function (prop) {
      var _prop2 = _slicedToArray(prop, 2),
          key = _prop2[0],
          value = _prop2[1];

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

  var oldElement = document.getElementById("cssEngineSheet"); // Remove old style

  if (oldElement) {
    document.head.removeChild(oldElement);
  } // Add the new element


  document.head.appendChild(styleElement$1);
  classes$1 = [];

  if (styleElement$1.sheet) {
    console.log(styleElement$1.sheet);
  }
}

var cssEngine$1 = {
  init: init$2,
  inject: inject$1,
  injectObject: injectObject$1,
  deleteClass: deleteClass$1,
  updateClass: updateClass$1
};function shortId() {
  return Math.random().toString(36).substr(2, 9);
}var script$2 = vue.defineComponent({
  name: "HellionIcon",
  props: {
    name: {
      type: String,
      default: null
    }
  },
  components: {},
  setup: function setup() {
    return {};
  }
});function render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createBlock("span", {
    class: "icon",
    key: _ctx.name
  }, [vue.createVNode("span", {
    class: "iconify",
    "data-icon": _ctx.name
  }, null, 8, ["data-icon"])]);
}script$2.render = render$2;var script$3 = vue.defineComponent({
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
  setup: function setup(props) {
    var id = vue.ref("btn_".concat(shortId())); // Default style

    cssEngine$1.injectObject(".btn-".concat(props.color), {
      "background-color": "var(--color-".concat(props.color, ")"),
      color: "var(--color-".concat(props.color, "-text)"),
      "box-shadow": "0 0px 0px 1px var(--color-".concat(props.color, "-lightest),\n       0 2px 30px 2px var(--color-").concat(props.color, "-transparent)")
    }, false, true); // Active style

    cssEngine$1.injectObject(".btn-".concat(props.color, ":active"), {
      "background-color": "var(--color-".concat(props.color, "-dark)"),
      "box-shadow": "0 0px 0px 1px var(--color-".concat(props.color, "-lightest), \n      0 5px 10px 3px var(--color-").concat(props.color, "-transparent)")
    }, false, true);
    vue.onBeforeUnmount(function () {
      cssEngine$1.deleteClass("#".concat(id.value));
      cssEngine$1.deleteClass("#".concat(id.value, ":active"));
    });
    return {
      id: id
    };
  }
});function render$3(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_hellion_icon = vue.resolveComponent("hellion-icon");

  return vue.openBlock(), vue.createBlock("button", {
    class: ["hellion-button", [_ctx.disabled || _ctx.loading ? _ctx.outlined ? "btn-disabled btn-disabled-outlined-".concat(_ctx.color) : "btn-disabled btn-disabled-".concat(_ctx.color) : _ctx.outlined ? "btn-outlined-".concat(_ctx.color) : "btn-".concat(_ctx.color),, _ctx.small ? 'btn-small' : _ctx.big ? 'btn-big' : _ctx.xSmall ? 'btn-x-small' : _ctx.xBig ? 'btn-x-big' : '', _ctx.iconLeft ? 'f-row-reverse' : '']],
    id: _ctx.id,
    style: {
      borderRadius: "".concat(_ctx.roundness, "rem")
    },
    disabled: _ctx.disabled || _ctx.loading
  }, [vue.createVNode("span", null, [vue.renderSlot(_ctx.$slots, "default")]), _ctx.icon || _ctx.loading ? (vue.openBlock(), vue.createBlock(_component_hellion_icon, {
    key: 0,
    class: _ctx.loading ? 'spin' : '',
    name: _ctx.loading ? 'gg:spinner' : _ctx.icon
  }, null, 8, ["class", "name"])) : vue.createCommentVNode("", true)], 14, ["id", "disabled"]);
}var css_248z$2 = "\n.hellion-button {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 0.625rem;\r\n  padding-left: 1rem;\r\n  padding-right: 1rem;\r\n  font-size: 1rem;\r\n  outline: none;\r\n  border: none;\r\n  box-sizing: border-box;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n  transition: all 0.2s;\r\n  margin: 0.4rem;\r\n  user-select: none;\r\n  max-width: calc(100vw - 2rem);\n}\n.btn-x-small {\r\n  padding: 0.425rem;\r\n  padding-left: 0.7rem;\r\n  padding-right: 0.7rem;\r\n  font-size: 0.7rem;\n}\n.btn-small {\r\n  padding: 0.525rem;\r\n  padding-left: 0.8rem;\r\n  padding-right: 0.8rem;\r\n  font-size: 0.8rem;\n}\n.btn-big {\r\n  padding: 0.825rem;\r\n  padding-left: 1.2rem;\r\n  padding-right: 1.2rem;\r\n  font-size: 1.2rem;\n}\n.btn-x-big {\r\n  padding: 0.925rem;\r\n  padding-left: 1.3rem;\r\n  padding-right: 1.3rem;\r\n  font-size: 1.3rem;\n}\n.btn-disabled {\r\n  pointer-events: none;\r\n  box-shadow: 0 0px 0px 0px;\n}\r\n";
styleInject(css_248z$2);script$3.render = render$3;/* eslint-disable import/prefer-default-export */var components=/*#__PURE__*/Object.freeze({__proto__:null,HellionUiSample: script,HellionApp: script$1,HellionButton: script$3});var install = function installHellionUi(app) {
  Object.entries(components).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        componentName = _ref2[0],
        component = _ref2[1];

    app.component(componentName, component);
  });
}; // Create module definition for Vue.use()
var components$1=/*#__PURE__*/Object.freeze({__proto__:null,'default': install,HellionUiSample: script,HellionApp: script$1,HellionButton: script$3});Object.entries(components$1).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      componentName = _ref2[0],
      component = _ref2[1];

  if (componentName !== 'default') {
    var key = componentName;
    var val = component;
    install[key] = val;
  }
});module.exports=install;