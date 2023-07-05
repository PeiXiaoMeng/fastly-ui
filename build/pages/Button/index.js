(function(){
    
    var createPageHandler = function() {
      return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Button/index.ux?uxType=page":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Button/index.ux?uxType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  btnClick() {
    _system.default.showToast({
      message: '您点击了按钮'
    });
  }

};
exports.default = _default;
const moduleOwn = exports.default || module.exports;
const accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    const accType = typeof moduleOwn[acc];

    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);

      for (const name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {
          access: acc
        };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/header.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/header.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    title: {
      type: String,
      required: true,
      default: ''
    },
    desc: {
      type: String,
      required: false,
      default: ''
    }
  }
};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/label.ux?uxType=comp":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/label.ux?uxType=comp ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  props: {
    title: {
      type: String,
      required: true,
      default: '标题'
    }
  },

  data() {
    return {};
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/fastly-ui/fast-button/index.ux?uxType=comp":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/fastly-ui/fast-button/index.ux?uxType=comp ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.device"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  props: {
    text: {
      type: String,
      require: false,
      default: '默认按钮'
    },
    size: {
      type: String,
      require: false,
      default: 'normal'
    },
    type: {
      type: String,
      require: false,
      default: ''
    },
    circle: {
      type: Boolean,
      require: false,
      default: false
    },
    disabled: {
      type: Boolean,
      require: false,
      default: false
    },
    sty: {
      type: String,
      require: false,
      default: ''
    }
  },

  data() {
    return {
      supportMinBtn: false
    };
  },

  onInit() {
    _system.default.getInfo({
      success: ret => {
        this.supportMinBtn = ret.platformVersionCode >= 1080;
      }
    });
  },

  handleClick() {
    if (this.disabled) return;
    this.$emit('handleClick');
  }

};
exports.default = _default;}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/header.ux?uxType=comp":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/header.ux?uxType=comp ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".header": {
    "height": "260px",
    "width": "750px",
    "marginLeft": "-32px",
    "marginRight": "-32px",
    "backgroundColor": "#efeeee",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".header text": {
    "fontWeight": "bold",
    "color": "#000000",
    "marginLeft": "32px",
    "marginRight": "32px",
    "fontSize": "36px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".header .line": {
    "width": "190px",
    "height": "4px",
    "backgroundColor": "#6190e8",
    "marginTop": "20px",
    "marginLeft": "32px",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "line"
        }
      ]
    }
  },
  ".header .desc": {
    "color": "#90908f",
    "fontSize": "22px",
    "marginTop": "40px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/label.ux?uxType=comp":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/label.ux?uxType=comp ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".label": {
    "flexDirection": "row",
    "height": "40px",
    "marginTop": "30px",
    "marginBottom": "30px"
  },
  ".label .box": {
    "width": "4px",
    "height": "100%",
    "backgroundColor": "#6190e8",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "label"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "box"
        }
      ]
    }
  },
  ".label text": {
    "marginLeft": "10px",
    "color": "#000000",
    "fontWeight": "bold",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "label"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/fastly-ui/fast-button/index.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/fastly-ui/fast-button/index.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".button": {
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "8px",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#030303",
    "borderRightColor": "#030303",
    "borderBottomColor": "#030303",
    "borderLeftColor": "#030303"
  },
  ".button__normal": {
    "height": "80px"
  },
  ".button__small": {
    "height": "60px"
  },
  ".button__large": {
    "height": "80px"
  },
  ".button__primary": {
    "backgroundColor": "#6190e8",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#6190e8",
    "borderRightColor": "#6190e8",
    "borderBottomColor": "#6190e8",
    "borderLeftColor": "#6190e8"
  },
  ".button__primary text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "button__primary"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".button__normalCircle": {
    "borderRadius": "80px"
  },
  ".button__largeCircle": {
    "borderRadius": "80px"
  },
  ".button__smallCircle": {
    "borderRadius": "60px"
  },
  ".button__norDisabled": {
    "opacity": 0.4,
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#c5d9e8",
    "borderRightColor": "#c5d9e8",
    "borderBottomColor": "#c5d9e8",
    "borderLeftColor": "#c5d9e8"
  },
  ".button__primaryDisabled": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#c5d9e8",
    "borderRightColor": "#c5d9e8",
    "borderBottomColor": "#c5d9e8",
    "borderLeftColor": "#c5d9e8",
    "backgroundColor": "#c5d9e8"
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Button/index.ux?uxType=page":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Button/index.ux?uxType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  ".home": {
    "flexDirection": "column",
    "paddingLeft": "32px",
    "paddingRight": "32px"
  },
  ".header": {
    "height": "200px",
    "backgroundColor": "#cfcdcb",
    "marginBottom": "40px",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".header text": {
    "fontWeight": "bold",
    "color": "#000000",
    "marginLeft": "32px",
    "marginRight": "32px",
    "fontSize": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".header .desc": {
    "color": "#90908f",
    "fontSize": "22px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "header"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "desc"
        }
      ]
    }
  },
  ".btn-box": {
    "alignItems": "center",
    "height": "130px"
  }
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/header.ux?uxType=comp&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/header.ux?uxType=comp& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "header"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.title}
      },
      "shown": function () {return this.title}
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "line"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.desc}
      },
      "shown": function () {return this.desc},
      "classList": [
        "desc"
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/label.ux?uxType=comp&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/label.ux?uxType=comp& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "label"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "box"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.title}
      }
    }
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/fastly-ui/fast-button/index.ux?uxType=comp&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/fastly-ui/fast-button/index.ux?uxType=comp& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "shown": function () {return this.supportMinBtn},
      "classList": function () {return ['button', '' + 'button__' + (this.size||'normal'), '' + 'button__' + (this.type||''), '' + 'button__' + (this.circle&&((this.size||'normal')+'Circle')), '' + 'button__' + (this.disabled&&((this.type||'nor')+'Disabled'))]},
      "events": {
        "click": "handleClick"
      },
      "style": function () {return (this.size==='small'?'min-width: 140px;padding: 0px 20px;':this.size==='large'?'width: 100%;':'min-width: 200px;padding: 0px 20px;')+(this.sty||'')},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.text||'默认按钮'}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "shown": function () {return !(this.supportMinBtn)},
      "classList": function () {return ['button', '' + 'button__' + (this.size||'normal'), '' + 'button__' + (this.type||''), '' + 'button__' + (this.circle&&((this.size||'normal')+'Circle')), '' + 'button__' + (this.disabled&&((this.type||'nor')+'Disabled'))]},
      "events": {
        "click": "handleClick"
      },
      "style": function () {return (this.size==='small'?'width: 140px;':this.size==='large'?'width: 100%;':'width: 200px;')+(this.sty||'')},
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.text||'默认按钮'}
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Button/index.ux?uxType=page&importNames[]=header,importNames[]=custom-label,importNames[]=fast-button":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Button/index.ux?uxType=page&importNames[]=header,importNames[]=custom-label,importNames[]=fast-button ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "home"
  ],
  "children": [
    {
      "type": "header",
      "attr": {
        "title": "fast-button 按钮组",
        "desc": "描述：由于快应用min-width的版本限制，小于1080，需要手动处理按钮的宽度等"
      }
    },
    {
      "type": "custom-label",
      "attr": {
        "title": "大号标签"
      }
    },
    {
      "type": "fast-button",
      "attr": {
        "text": "大号按钮",
        "size": "large",
        "type": "primary",
        "sty": "margin-bottom: 30px;"
      },
      "events": {
        "handle-click": "btnClick"
      }
    },
    {
      "type": "fast-button",
      "attr": {
        "text": "大号圆角按钮",
        "size": "large",
        "circle": function () {return true},
        "sty": "margin-bottom: 30px;"
      },
      "events": {
        "handle-click": "btnClick"
      }
    },
    {
      "type": "fast-button",
      "attr": {
        "text": "不可操作",
        "size": "large",
        "type": "primary",
        "disabled": function () {return true},
        "sty": "margin-bottom: 30px;"
      },
      "events": {
        "handle-click": "btnClick"
      }
    },
    {
      "type": "custom-label",
      "attr": {
        "title": "中、小号标签"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "btn-box"
      ],
      "children": [
        {
          "type": "fast-button",
          "attr": {
            "size": "normal",
            "sty": "margin-bottom: 30px;margin-right: 20px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        },
        {
          "type": "fast-button",
          "attr": {
            "text": "圆角按钮",
            "size": "normal",
            "circle": function () {return true},
            "type": "primary",
            "sty": "margin-bottom: 30px;margin-right: 20px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        },
        {
          "type": "fast-button",
          "attr": {
            "text": "小号按钮",
            "size": "small",
            "type": "primary",
            "sty": "margin-bottom: 30px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "btn-box"
      ],
      "children": [
        {
          "type": "fast-button",
          "attr": {
            "size": "normal",
            "disabled": function () {return true},
            "sty": "margin-bottom: 30px;margin-right: 20px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        },
        {
          "type": "fast-button",
          "attr": {
            "text": "圆角按钮",
            "size": "normal",
            "circle": function () {return true},
            "type": "primary",
            "disabled": function () {return true},
            "sty": "margin-bottom: 30px;margin-right: 20px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        },
        {
          "type": "fast-button",
          "attr": {
            "text": "小号按钮",
            "size": "small",
            "type": "primary",
            "sty": "margin-bottom: 30px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        }
      ]
    },
    {
      "type": "custom-label",
      "attr": {
        "title": "长文案标签"
      }
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "btn-box"
      ],
      "children": [
        {
          "type": "fast-button",
          "attr": {
            "size": "normal",
            "text": "平台版本大于等于1080按钮（支持min-width）",
            "sty": "margin-right: 20px;"
          },
          "events": {
            "handle-click": "btnClick"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/components/header.ux?uxType=comp&name=header":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/components/header.ux?uxType=comp&name=header ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./header.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/header.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./header.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/header.ux?uxType=comp")

$app_define$('@app-component/header', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./header.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/header.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/components/label.ux?uxType=comp&name=custom-label":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/components/label.ux?uxType=comp&name=custom-label ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./label.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/components/label.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./label.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/components/label.ux?uxType=comp")

$app_define$('@app-component/custom-label', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./label.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/components/label.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/fastly-ui/fast-button/index.ux?uxType=comp&name=fast-button":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/fastly-ui/fast-button/index.ux?uxType=comp&name=fast-button ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $app_style$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/fastly-ui/fast-button/index.ux?uxType=comp")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=comp */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/fastly-ui/fast-button/index.ux?uxType=comp")

$app_define$('@app-component/fast-button', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=comp& */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/fastly-ui/fast-button/index.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************************************!*\
  !*** ./src/pages/Button/index.ux?uxType=page ***!
  \***********************************************/
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!../../components/header.ux?uxType=comp&name=header */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/components/header.ux?uxType=comp&name=header")
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!../../components/label.ux?uxType=comp&name=custom-label */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/components/label.ux?uxType=comp&name=custom-label")
__webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!../../fastly-ui/fast-button/index.ux?uxType=comp&name=fast-button */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/ux-loader.js?cwd=/Users/pmhuai/Desktop/github/fastly&type=import!./src/fastly-ui/fast-button/index.ux?uxType=comp&name=fast-button")

var $app_style$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!less-loader!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!./node_modules/less-loader/dist/cjs.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/pages/Button/index.ux?uxType=page")

var $app_script$ = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./index.ux?uxType=page */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/script-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/module-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/babel-loader/lib/index.js?cwd=/Users/pmhuai/Desktop/github/fastly&cacheDirectory&plugins[]=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/babel-plugin-jsx.js&comments=false&configFile=/Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/packager/babel.config.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/access-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/pages/Button/index.ux?uxType=page")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {
     $app_script$($app_module$, $app_exports$, $app_require$)
         if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = __webpack_require__(/*! !../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./index.ux?uxType=page&importNames[]=header,importNames[]=custom-label,importNames[]=fast-button */ "../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/template-loader.js!../../../../../Applications/快应用开发工具.app/Contents/Resources/app/extensions/hap-debugger/node_modules/@hap-toolkit/dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/pages/Button/index.ux?uxType=page&importNames[]=header,importNames[]=custom-label,importNames[]=fast-button")

     $app_module$.exports.style = $app_style$
})
$app_bootstrap$('@app-component/index',{ packagerVersion: "1.9.10" })
})();

/******/ })()
;
    };
    if (typeof window === "undefined") {
      return createPageHandler();
    }
    else {
      window.createPageHandler = createPageHandler
    }
  })();
//# sourceMappingURL=index.js.map