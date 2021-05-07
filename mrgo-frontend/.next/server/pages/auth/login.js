module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/auth/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/auth/Login.js":
/*!**********************************!*\
  !*** ./components/auth/Login.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/media */ "./styles/media.js");
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.js");
/* harmony import */ var _modules_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/Input */ "./components/modules/Input.js");

var _jsxFileName = "C:\\WorkSpace\\srpj3\\srpj2\\mrgo-frontend\\components\\auth\\Login.js";








const Login = ({
  id,
  password,
  error,
  onChangeId,
  onChangePassword,
  onClickLogin
}) => {
  const nextRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Block, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Title, {
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Wrapper, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubTitle, {
        isGray: true,
        children: "\uACC4\uC815\uC774 \uC5C6\uC73C\uC138\uC694?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubTitle, {
        onClick: () => nextRouter.push('/auth/signup'),
        children: "\uD68C\uC6D0\uAC00\uC785"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputBlock, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: id,
        onChange: onChangeId,
        placeholder: "\uC544\uC774\uB514 \uC785\uB825",
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        value: password,
        onChange: onChangePassword,
        error: error,
        placeholder: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825",
        type: "password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(LoginButton, {
      tabIndex: 0,
      isActive: id.length > 0 && password.length > 0,
      onClick: onClickLogin,
      children: "\uB85C\uADF8\uC778"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SubTitle, {
      isGray: true,
      onClick: () => nextRouter.push('/auth/reset-password'),
      style: {
        textAlign: 'center',
        marginTop: 10,
        cursor: 'pointer'
      },
      children: "\uBE44\uBC00\uBC88\uD638 \uCD08\uAE30\uD654"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

Login.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  password: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]).isRequired,
  onChangeId: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onChangePassword: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onClickLogin: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
const Block = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 16px;
  max-width: ${_styles_media__WEBPACK_IMPORTED_MODULE_5__["INNER_SIZE"]}px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  font-size: 22px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: -1.2px;
  margin: 30px 0px 16px 0px;
`;
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  display: flex;
  flex-direction: row;
`;
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  font-size: 14px;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;

  ${({
  isGray
}) => isGray && styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
      color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_6__["default"].base.gray400};
      text-decoration: none;
      font-weight: normal;
      margin-right: 10px;
      cursor: auto;
    `}
`;
const InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  margin: 24px 0px 5px 0px;
`;
const LoginButton = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div`
  width: 100%;
  min-height: 48px;
  margin-bottom: 15px;
  background-color: ${({
  isActive
}) => {
  if (isActive) return _styles_palette__WEBPACK_IMPORTED_MODULE_6__["default"].primary.blue;
  return _styles_palette__WEBPACK_IMPORTED_MODULE_6__["default"].base.gray400;
}};
  color: white;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5.666666667px;
  pointer-events: none;

  ${({
  isActive
}) => isActive && styled_components__WEBPACK_IMPORTED_MODULE_4__["css"]`
      pointer-events: all;
    `}
`;
/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./components/modules/Input.js":
/*!*************************************!*\
  !*** ./components/modules/Input.js ***!
  \*************************************/
/*! exports provided: Label, StyledInput, InputBlock, MessageBlock, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledInput", function() { return StyledInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputBlock", function() { return InputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBlock", function() { return MessageBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/palette */ "./styles/palette.js");


var _jsxFileName = "C:\\WorkSpace\\srpj3\\srpj2\\mrgo-frontend\\components\\modules\\Input.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Input = (_ref) => {
  let {
    isShowClearButton,
    error,
    inputRef,
    label,
    pattern,
    placeholder,
    style,
    type,
    value,
    onChange,
    disabled,
    onBlur = () => {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isShowClearButton", "error", "inputRef", "label", "pattern", "placeholder", "style", "type", "value", "onChange", "disabled", "onBlur"]);

  const clearBtnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const {
    0: showClear,
    1: setShowClear
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const handleClearButton = e => {
      if (e.target === clearBtnRef.current) onChange({
        target: {
          value: ''
        }
      });
    };

    window.addEventListener('mousedown', handleClearButton);
    return () => window.removeEventListener('mousedown', handleClearButton);
  }, [onChange]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [label && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Label, {
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(InputBlock, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledInput, _objectSpread({
        ref: inputRef,
        isShowClearButton: isShowClearButton,
        isError: error,
        pattern: pattern,
        placeholder: placeholder,
        style: style,
        type: type,
        value: value,
        autoComplete: "on",
        onFocus: () => setShowClear(true),
        onBlur: () => {
          onBlur();
          setShowClear(false);
        },
        onChange: onChange,
        disabled: disabled
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MessageBlock, {
        type: "error",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: error
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

Input.propTypes = {
  isShowClearButton: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  inputRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any])
  }),
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  pattern: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['text', 'number', 'email', 'password']),
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number]),
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
Input.defaultProps = {
  isShowClearButton: false,
  error: false,
  inputRef: undefined,
  label: undefined,
  pattern: undefined,
  placeholder: 'placeholder',
  style: undefined,
  type: 'text',
  value: '',
  disabled: false,
  onChange: () => {},
  onBlur: () => {}
};
const Label = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.38px;
  margin-bottom: 6px;
`;
const StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.input`
  width: 114.285%;
  height: 48px;
  font-size: 16px;
  border-radius: 5.666666667px;
  border: solid 1.142px ${_styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].base.gray400};
  padding: 11.428px 13.714px;
  caret-color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].primary.blue};
  transform: scale(0.875);
  transform-origin: left top;

  &:focus {
    border: solid 1.142px ${_styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].primary.blue};
  }

  &::placeholder {
    color: ${_styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].base.gray400};
  }
`;
const InputBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  position: relative;
  width: 100%;
`;
const MessageBlock = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${({
  type
}) => {
  if (type === 'error') {
    return _styles_palette__WEBPACK_IMPORTED_MODULE_4__["default"].primary.blue;
  }
}};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.33px;
  & > span {
    margin-left: 4px;
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./containers/auth/LoginContainer.js":
/*!*******************************************!*\
  !*** ./containers/auth/LoginContainer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_Login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/auth/Login */ "./components/auth/Login.js");
/* harmony import */ var _layout_ResponsivePageTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/ResponsivePageTemplate */ "./containers/layout/ResponsivePageTemplate.js");

var _jsxFileName = "C:\\WorkSpace\\srpj3\\srpj2\\mrgo-frontend\\containers\\auth\\LoginContainer.js";




const LoginContainer = () => {
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const onChangeId = e => setId(e.target.value);

  const onChangePassword = e => setPassword(e.target.value);

  const onClickLogin = () => {
    /* 여기에서 Login API 호출해 주시면 돼용. */
    alert(`ID 값 : ${id}`);
    /* 요건 이제 에러 메시지 띄우는 방법! 나중에 제거하세용~ 
    로그인 성공 후, setError(false) 로 해 주어야 합니당~ */

    setError('아이디 혹은 비밀번호가 틀렸습니다.');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_ResponsivePageTemplate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_auth_Login__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: id,
      password: password,
      error: error,
      onChangeId: onChangeId,
      onChangePassword: onChangePassword,
      onClickLogin: onClickLogin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (LoginContainer);

/***/ }),

/***/ "./containers/layout/ResponsivePageTemplate.js":
/*!*****************************************************!*\
  !*** ./containers/layout/ResponsivePageTemplate.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_constant_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/constant/styles */ "./util/constant/styles.js");
/* harmony import */ var _styles_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/media */ "./styles/media.js");

var _jsxFileName = "C:\\WorkSpace\\srpj3\\srpj2\\mrgo-frontend\\containers\\layout\\ResponsivePageTemplate.js";






const ResponsivePageTemplate = ({
  children,
  isFullInner
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Template, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Inner, {
      isFullInner: isFullInner,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

ResponsivePageTemplate.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  isFullInner: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
};
ResponsivePageTemplate.defaultProps = {
  isFullInner: false
};
const Template = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding-top: ${({
  isShowPageTitle,
  isShowGNB
}) => {
  if (!isShowGNB) return '0px';
  if (isShowPageTitle) return `${_util_constant_styles__WEBPACK_IMPORTED_MODULE_4__["HEADER_HEIGHT"] + _util_constant_styles__WEBPACK_IMPORTED_MODULE_4__["TITLE_HEADER_HEIGHT"]}px`;
  return `${_util_constant_styles__WEBPACK_IMPORTED_MODULE_4__["HEADER_HEIGHT"]}px`;
}};

  ${_styles_media__WEBPACK_IMPORTED_MODULE_5__["default"].mobile} {
    padding-top: ${({
  isShowPageTitle,
  isShowGNB
}) => {
  if (!isShowGNB) return '0px';
  if (isShowPageTitle) return `${_util_constant_styles__WEBPACK_IMPORTED_MODULE_4__["HEADER_MOBILE_HEIGHT"] + _util_constant_styles__WEBPACK_IMPORTED_MODULE_4__["TITLE_HEADER_HEIGHT"]}px`;
  return `${_util_constant_styles__WEBPACK_IMPORTED_MODULE_4__["HEADER_MOBILE_HEIGHT"]}px`;
}};
  }
`;
const Inner = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  justify-content: center;
  width: 100%;
  ${props => !props.isFullInner && styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
      max-width: 1280px;
    `}
  height: 100%;
  flex: 1 1 auto;
  min-width: 360px;
  margin: auto;
  overflow-y: scroll;
  overflow-x: hidden;
`;
/* harmony default export */ __webpack_exports__["default"] = (ResponsivePageTemplate);

/***/ }),

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_auth_LoginContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../containers/auth/LoginContainer */ "./containers/auth/LoginContainer.js");


var _jsxFileName = "C:\\WorkSpace\\srpj3\\srpj2\\mrgo-frontend\\pages\\auth\\login.js";




const Login = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keywords",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "Description",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:url",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "MRGO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: "MRGO"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:image",
        content: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "MRGO \uB85C\uADF8\uC778"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_containers_auth_LoginContainer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./styles/media.js":
/*!*************************!*\
  !*** ./styles/media.js ***!
  \*************************/
/*! exports provided: mediaQuery, INNER_SIZE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaQuery", function() { return mediaQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INNER_SIZE", function() { return INNER_SIZE; });
/* harmony import */ var _util_constant_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/constant/styles */ "./util/constant/styles.js");

const mediaQuery = maxWidth => `
  @media (max-width: ${maxWidth}px)
`;
const INNER_SIZE = 406 + 16 * 2;
const media = {
  xxlarge: mediaQuery(1920),
  xlarge: mediaQuery(1440),
  large: mediaQuery(1024),
  medium: mediaQuery(900),
  small: mediaQuery(720),
  xsmall: mediaQuery(375),
  pcWebMedium: mediaQuery(1279),
  mobile: mediaQuery(_util_constant_styles__WEBPACK_IMPORTED_MODULE_0__["MOBILE_SIZE"])
};
/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./styles/palette.js":
/*!***************************!*\
  !*** ./styles/palette.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  base: {
    white: '#ffffff',
    gray100: '#f7f7f7',
    gray150: '#f2f2f2',
    gray200: '#efefef',
    gray250: '#e8e8e8',
    gray300: '#e0e0e0',
    gray350: '#c7c7c7',
    gray400: '#aeaeae',
    gray500: '#959595',
    gray600: '#7c7c7c',
    gray700: '#646464',
    gray800: '#4a4a4a',
    gray900: '#232323',
    black: '#181818'
  },
  primary: {
    red: '#dc3545',
    yellow: '#ffc107',
    blue: '#3478ff',
    more_blue: '#2656f5',
    purple: '#9966FF'
  }
});

/***/ }),

/***/ "./util/constant/styles.js":
/*!*********************************!*\
  !*** ./util/constant/styles.js ***!
  \*********************************/
/*! exports provided: HEADER_HEIGHT, HEADER_MOBILE_HEIGHT, TITLE_HEADER_HEIGHT, MOBILE_SIZE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_HEIGHT", function() { return HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_MOBILE_HEIGHT", function() { return HEADER_MOBILE_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLE_HEADER_HEIGHT", function() { return TITLE_HEADER_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOBILE_SIZE", function() { return MOBILE_SIZE; });
const HEADER_HEIGHT = 60;
const HEADER_MOBILE_HEIGHT = 46;
const TITLE_HEADER_HEIGHT = 52;
const MOBILE_SIZE = 768;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbW9kdWxlcy9JbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL2F1dGgvTG9naW5Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9sYXlvdXQvUmVzcG9uc2l2ZVBhZ2VUZW1wbGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL2xvZ2luLmpzIiwid2VicGFjazovLy8uL3N0eWxlcy9tZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvcGFsZXR0ZS5qcyIsIndlYnBhY2s6Ly8vLi91dGlsL2NvbnN0YW50L3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiTG9naW4iLCJpZCIsInBhc3N3b3JkIiwiZXJyb3IiLCJvbkNoYW5nZUlkIiwib25DaGFuZ2VQYXNzd29yZCIsIm9uQ2xpY2tMb2dpbiIsIm5leHRSb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwibGVuZ3RoIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiY3Vyc29yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9uZU9mVHlwZSIsImJvb2wiLCJmdW5jIiwiQmxvY2siLCJzdHlsZWQiLCJkaXYiLCJJTk5FUl9TSVpFIiwiVGl0bGUiLCJXcmFwcGVyIiwiU3ViVGl0bGUiLCJpc0dyYXkiLCJjc3MiLCJwYWxldHRlIiwiYmFzZSIsImdyYXk0MDAiLCJJbnB1dEJsb2NrIiwiTG9naW5CdXR0b24iLCJpc0FjdGl2ZSIsInByaW1hcnkiLCJibHVlIiwiSW5wdXQiLCJpc1Nob3dDbGVhckJ1dHRvbiIsImlucHV0UmVmIiwibGFiZWwiLCJwYXR0ZXJuIiwicGxhY2Vob2xkZXIiLCJzdHlsZSIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJvbkJsdXIiLCJwcm9wcyIsImNsZWFyQnRuUmVmIiwidXNlUmVmIiwic2hvd0NsZWFyIiwic2V0U2hvd0NsZWFyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJoYW5kbGVDbGVhckJ1dHRvbiIsImUiLCJ0YXJnZXQiLCJjdXJyZW50Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaGFwZSIsImFueSIsIm9uZU9mIiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwidW5kZWZpbmVkIiwiTGFiZWwiLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiTWVzc2FnZUJsb2NrIiwiTG9naW5Db250YWluZXIiLCJzZXRJZCIsInNldFBhc3N3b3JkIiwic2V0RXJyb3IiLCJhbGVydCIsIlJlc3BvbnNpdmVQYWdlVGVtcGxhdGUiLCJjaGlsZHJlbiIsImlzRnVsbElubmVyIiwibm9kZSIsIlRlbXBsYXRlIiwiaXNTaG93UGFnZVRpdGxlIiwiaXNTaG93R05CIiwiSEVBREVSX0hFSUdIVCIsIlRJVExFX0hFQURFUl9IRUlHSFQiLCJtZWRpYSIsIm1vYmlsZSIsIkhFQURFUl9NT0JJTEVfSEVJR0hUIiwiSW5uZXIiLCJtZWRpYVF1ZXJ5IiwibWF4V2lkdGgiLCJ4eGxhcmdlIiwieGxhcmdlIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsInhzbWFsbCIsInBjV2ViTWVkaXVtIiwiTU9CSUxFX1NJWkUiLCJ3aGl0ZSIsImdyYXkxMDAiLCJncmF5MTUwIiwiZ3JheTIwMCIsImdyYXkyNTAiLCJncmF5MzAwIiwiZ3JheTM1MCIsImdyYXk1MDAiLCJncmF5NjAwIiwiZ3JheTcwMCIsImdyYXk4MDAiLCJncmF5OTAwIiwiYmxhY2siLCJyZWQiLCJ5ZWxsb3ciLCJtb3JlX2JsdWUiLCJwdXJwbGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQ2JDLElBRGE7QUFFYkMsVUFGYTtBQUdiQyxPQUhhO0FBSWJDLFlBSmE7QUFLYkMsa0JBTGE7QUFNYkM7QUFOYSxDQUFELEtBT1I7QUFDSixRQUFNQyxVQUFVLEdBQUdDLDZEQUFTLEVBQTVCO0FBRUEsc0JBQ0UscUVBQUMsS0FBRDtBQUFBLDRCQUNFLHFFQUFDLEtBQUQ7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RUFBRTtBQUNQK0UsT0FBRyxFQUFFLFNBREU7QUFFUEMsVUFBTSxFQUFFLFNBRkQ7QUFHUC9FLFFBQUksRUFBRSxTQUhDO0FBSVBnRixhQUFTLEVBQUUsU0FKSjtBQUtQQyxVQUFNLEVBQUU7QUFMRDtBQWpCSSxDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNaEMsYUFBYSxHQUFHLEVBQXRCO0FBQ0EsTUFBTUksb0JBQW9CLEdBQUcsRUFBN0I7QUFDQSxNQUFNSCxtQkFBbUIsR0FBRyxFQUE1QjtBQUNBLE1BQU1jLFdBQVcsR0FBRyxHQUFwQixDOzs7Ozs7Ozs7OztBQ0hQLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2F1dGgvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2F1dGgvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgSU5ORVJfU0laRSB9IGZyb20gJy4uLy4uL3N0eWxlcy9tZWRpYSc7XHJcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uLy4uL3N0eWxlcy9wYWxldHRlJztcclxuXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuLi9tb2R1bGVzL0lucHV0JztcclxuXHJcbmNvbnN0IExvZ2luID0gKHtcclxuICBpZCxcclxuICBwYXNzd29yZCxcclxuICBlcnJvcixcclxuICBvbkNoYW5nZUlkLFxyXG4gIG9uQ2hhbmdlUGFzc3dvcmQsXHJcbiAgb25DbGlja0xvZ2luLFxyXG59KSA9PiB7XHJcbiAgY29uc3QgbmV4dFJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJsb2NrPlxyXG4gICAgICA8VGl0bGU+66Gc6re47J24PC9UaXRsZT5cclxuICAgICAgPFdyYXBwZXI+XHJcbiAgICAgICAgPFN1YlRpdGxlIGlzR3JheT7qs4TsoJXsnbQg7JeG7Jy87IS47JqUPzwvU3ViVGl0bGU+XHJcbiAgICAgICAgPFN1YlRpdGxlIG9uQ2xpY2s9eygpID0+IG5leHRSb3V0ZXIucHVzaCgnL2F1dGgvc2lnbnVwJyl9PlxyXG4gICAgICAgICAg7ZqM7JuQ6rCA7J6FXHJcbiAgICAgICAgPC9TdWJUaXRsZT5cclxuICAgICAgPC9XcmFwcGVyPlxyXG4gICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtpZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlkfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLslYTsnbTrlJQg7J6F66ClXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlUGFzc3dvcmR9XHJcbiAgICAgICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuu5hOuwgOuyiO2YuCDsnoXroKVcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0lucHV0QmxvY2s+XHJcbiAgICAgIDxMb2dpbkJ1dHRvblxyXG4gICAgICAgIHRhYkluZGV4PXswfVxyXG4gICAgICAgIGlzQWN0aXZlPXtpZC5sZW5ndGggPiAwICYmIHBhc3N3b3JkLmxlbmd0aCA+IDB9XHJcbiAgICAgICAgb25DbGljaz17b25DbGlja0xvZ2lufVxyXG4gICAgICA+XHJcbiAgICAgICAg66Gc6re47J24XHJcbiAgICAgIDwvTG9naW5CdXR0b24+XHJcbiAgICAgIDxTdWJUaXRsZVxyXG4gICAgICAgIGlzR3JheVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG5leHRSb3V0ZXIucHVzaCgnL2F1dGgvcmVzZXQtcGFzc3dvcmQnKX1cclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgIG1hcmdpblRvcDogMTAsXHJcbiAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAg67mE67CA67KI7Zi4IOy0iOq4sO2ZlFxyXG4gICAgICA8L1N1YlRpdGxlPlxyXG4gICAgPC9CbG9jaz5cclxuICApO1xyXG59O1xyXG5cclxuTG9naW4ucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgcGFzc3dvcmQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKS5pc1JlcXVpcmVkLFxyXG4gIG9uQ2hhbmdlSWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBvbkNsaWNrTG9naW46IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBCbG9jayA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBtYXgtd2lkdGg6ICR7SU5ORVJfU0laRX1weDtcclxuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbmA7XHJcblxyXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMS4ycHg7XHJcbiAgbWFyZ2luOiAzMHB4IDBweCAxNnB4IDBweDtcclxuYDtcclxuXHJcbmNvbnN0IFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYDtcclxuXHJcbmNvbnN0IFN1YlRpdGxlID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAkeyh7IGlzR3JheSB9KSA9PlxyXG4gICAgaXNHcmF5ICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUuYmFzZS5ncmF5NDAwfTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGN1cnNvcjogYXV0bztcclxuICAgIGB9XHJcbmA7XHJcblxyXG5jb25zdCBJbnB1dEJsb2NrID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDI0cHggMHB4IDVweCAwcHg7XHJcbmA7XHJcblxyXG5jb25zdCBMb2dpbkJ1dHRvbiA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR7KHsgaXNBY3RpdmUgfSkgPT4ge1xyXG4gICAgaWYgKGlzQWN0aXZlKSByZXR1cm4gcGFsZXR0ZS5wcmltYXJ5LmJsdWU7XHJcbiAgICByZXR1cm4gcGFsZXR0ZS5iYXNlLmdyYXk0MDA7XHJcbiAgfX07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUuNjY2NjY2NjY3cHg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblxyXG4gICR7KHsgaXNBY3RpdmUgfSkgPT5cclxuICAgIGlzQWN0aXZlICYmXHJcbiAgICBjc3NgXHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vLi4vc3R5bGVzL3BhbGV0dGUnO1xyXG5cclxuY29uc3QgSW5wdXQgPSAoe1xyXG4gIGlzU2hvd0NsZWFyQnV0dG9uLFxyXG4gIGVycm9yLFxyXG4gIGlucHV0UmVmLFxyXG4gIGxhYmVsLFxyXG4gIHBhdHRlcm4sXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgc3R5bGUsXHJcbiAgdHlwZSxcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBkaXNhYmxlZCxcclxuICBvbkJsdXIgPSAoKSA9PiB7fSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgY2xlYXJCdG5SZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBbc2hvd0NsZWFyLCBzZXRTaG93Q2xlYXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xlYXJCdXR0b24gPSBlID0+IHtcclxuICAgICAgaWYgKGUudGFyZ2V0ID09PSBjbGVhckJ0blJlZi5jdXJyZW50KSBvbkNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTogJycgfSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsZWFyQnV0dG9uKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZUNsZWFyQnV0dG9uKTtcclxuICB9LCBbb25DaGFuZ2VdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtsYWJlbCAmJiA8TGFiZWw+e2xhYmVsfTwvTGFiZWw+fVxyXG4gICAgICA8SW5wdXRCbG9jaz5cclxuICAgICAgICA8U3R5bGVkSW5wdXRcclxuICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgICAgICBpc1Nob3dDbGVhckJ1dHRvbj17aXNTaG93Q2xlYXJCdXR0b259XHJcbiAgICAgICAgICBpc0Vycm9yPXtlcnJvcn1cclxuICAgICAgICAgIHBhdHRlcm49e3BhdHRlcm59XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgYXV0b0NvbXBsZXRlPVwib25cIlxyXG4gICAgICAgICAgb25Gb2N1cz17KCkgPT4gc2V0U2hvd0NsZWFyKHRydWUpfVxyXG4gICAgICAgICAgb25CbHVyPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uQmx1cigpO1xyXG4gICAgICAgICAgICBzZXRTaG93Q2xlYXIoZmFsc2UpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cclxuICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtlcnJvciAmJiAoXHJcbiAgICAgICAgICA8TWVzc2FnZUJsb2NrIHR5cGU9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57ZXJyb3J9PC9zcGFuPlxyXG4gICAgICAgICAgPC9NZXNzYWdlQmxvY2s+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9JbnB1dEJsb2NrPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbklucHV0LnByb3BUeXBlcyA9IHtcclxuICBpc1Nob3dDbGVhckJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nXSksXHJcbiAgaW5wdXRSZWY6IFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBjdXJyZW50OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLmFueV0pLFxyXG4gIH0pLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBhdHRlcm46IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5zaGFwZSh7fSksXHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFsndGV4dCcsICdudW1iZXInLCAnZW1haWwnLCAncGFzc3dvcmQnXSksXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5JbnB1dC5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgaXNTaG93Q2xlYXJCdXR0b246IGZhbHNlLFxyXG4gIGVycm9yOiBmYWxzZSxcclxuXHJcbiAgaW5wdXRSZWY6IHVuZGVmaW5lZCxcclxuICBsYWJlbDogdW5kZWZpbmVkLFxyXG4gIHBhdHRlcm46IHVuZGVmaW5lZCxcclxuICBwbGFjZWhvbGRlcjogJ3BsYWNlaG9sZGVyJyxcclxuICBzdHlsZTogdW5kZWZpbmVkLFxyXG4gIHR5cGU6ICd0ZXh0JyxcclxuICB2YWx1ZTogJycsXHJcbiAgZGlzYWJsZWQ6IGZhbHNlLFxyXG4gIG9uQ2hhbmdlOiAoKSA9PiB7fSxcclxuICBvbkJsdXI6ICgpID0+IHt9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExhYmVsID0gc3R5bGVkLmRpdmBcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxyXG4gIHdpZHRoOiAxMTQuMjg1JTtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUuNjY2NjY2NjY3cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxLjE0MnB4ICR7cGFsZXR0ZS5iYXNlLmdyYXk0MDB9O1xyXG4gIHBhZGRpbmc6IDExLjQyOHB4IDEzLjcxNHB4O1xyXG4gIGNhcmV0LWNvbG9yOiAke3BhbGV0dGUucHJpbWFyeS5ibHVlfTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuODc1KTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDEuMTQycHggJHtwYWxldHRlLnByaW1hcnkuYmx1ZX07XHJcbiAgfVxyXG5cclxuICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJHtwYWxldHRlLmJhc2UuZ3JheTQwMH07XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IElucHV0QmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZXNzYWdlQmxvY2sgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIGNvbG9yOiAkeyh7IHR5cGUgfSkgPT4ge1xyXG4gICAgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcclxuICAgICAgcmV0dXJuIHBhbGV0dGUucHJpbWFyeS5ibHVlO1xyXG4gICAgfVxyXG4gIH19O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMzNweDtcclxuICAmID4gc3BhbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL2F1dGgvTG9naW4nO1xyXG5pbXBvcnQgUmVzcG9uc2l2ZVBhZ2VUZW1wbGF0ZSBmcm9tICcuLi9sYXlvdXQvUmVzcG9uc2l2ZVBhZ2VUZW1wbGF0ZSc7XHJcblxyXG5jb25zdCBMb2dpbkNvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VJZCA9IGUgPT4gc2V0SWQoZS50YXJnZXQudmFsdWUpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlUGFzc3dvcmQgPSBlID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgY29uc3Qgb25DbGlja0xvZ2luID0gKCkgPT4ge1xyXG4gICAgLyog7Jes6riw7JeQ7IScIExvZ2luIEFQSSDtmLjstpztlbQg7KO87Iuc66m0IOuPvOyaqS4gKi9cclxuICAgIGFsZXJ0KGBJRCDqsJIgOiAke2lkfWApO1xyXG4gICAgLyog7JqU6rG0IOydtOygnCDsl5Drn6wg66mU7Iuc7KeAIOudhOyasOuKlCDrsKnrspUhIOuCmOykkeyXkCDsoJzqsbDtlZjshLjsmql+IFxyXG4gICAg66Gc6re47J24IOyEseqztSDtm4QsIHNldEVycm9yKGZhbHNlKSDroZwg7ZW0IOyjvOyWtOyVvCDtlanri4jri7l+ICovXHJcbiAgICBzZXRFcnJvcign7JWE7J2065SUIO2YueydgCDruYTrsIDrsojtmLjqsIAg7YuA66C47Iq164uI64ukLicpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVzcG9uc2l2ZVBhZ2VUZW1wbGF0ZT5cclxuICAgICAgPExvZ2luXHJcbiAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgIHBhc3N3b3JkPXtwYXNzd29yZH1cclxuICAgICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgICAgb25DaGFuZ2VJZD17b25DaGFuZ2VJZH1cclxuICAgICAgICBvbkNoYW5nZVBhc3N3b3JkPXtvbkNoYW5nZVBhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2xpY2tMb2dpbj17b25DbGlja0xvZ2lufVxyXG4gICAgICAvPlxyXG4gICAgPC9SZXNwb25zaXZlUGFnZVRlbXBsYXRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbnRhaW5lcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEhFQURFUl9IRUlHSFQsXHJcbiAgVElUTEVfSEVBREVSX0hFSUdIVCxcclxuICBIRUFERVJfTU9CSUxFX0hFSUdIVCxcclxufSBmcm9tICcuLi8uLi91dGlsL2NvbnN0YW50L3N0eWxlcyc7XHJcbmltcG9ydCBtZWRpYSBmcm9tICcuLi8uLi9zdHlsZXMvbWVkaWEnO1xyXG5cclxuY29uc3QgUmVzcG9uc2l2ZVBhZ2VUZW1wbGF0ZSA9ICh7IGNoaWxkcmVuLCBpc0Z1bGxJbm5lciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUZW1wbGF0ZT5cclxuICAgICAgPElubmVyIGlzRnVsbElubmVyPXtpc0Z1bGxJbm5lcn0+e2NoaWxkcmVufTwvSW5uZXI+XHJcbiAgICA8L1RlbXBsYXRlPlxyXG4gICk7XHJcbn07XHJcblxyXG5SZXNwb25zaXZlUGFnZVRlbXBsYXRlLnByb3BUeXBlcyA9IHtcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBpc0Z1bGxJbm5lcjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5SZXNwb25zaXZlUGFnZVRlbXBsYXRlLmRlZmF1bHRQcm9wcyA9IHtcclxuICBpc0Z1bGxJbm5lcjogZmFsc2UsXHJcbn07XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogJHsoeyBpc1Nob3dQYWdlVGl0bGUsIGlzU2hvd0dOQiB9KSA9PiB7XHJcbiAgICBpZiAoIWlzU2hvd0dOQikgcmV0dXJuICcwcHgnO1xyXG4gICAgaWYgKGlzU2hvd1BhZ2VUaXRsZSkgcmV0dXJuIGAke0hFQURFUl9IRUlHSFQgKyBUSVRMRV9IRUFERVJfSEVJR0hUfXB4YDtcclxuICAgIHJldHVybiBgJHtIRUFERVJfSEVJR0hUfXB4YDtcclxuICB9fTtcclxuXHJcbiAgJHttZWRpYS5tb2JpbGV9IHtcclxuICAgIHBhZGRpbmctdG9wOiAkeyh7IGlzU2hvd1BhZ2VUaXRsZSwgaXNTaG93R05CIH0pID0+IHtcclxuICAgICAgaWYgKCFpc1Nob3dHTkIpIHJldHVybiAnMHB4JztcclxuICAgICAgaWYgKGlzU2hvd1BhZ2VUaXRsZSlcclxuICAgICAgICByZXR1cm4gYCR7SEVBREVSX01PQklMRV9IRUlHSFQgKyBUSVRMRV9IRUFERVJfSEVJR0hUfXB4YDtcclxuICAgICAgcmV0dXJuIGAke0hFQURFUl9NT0JJTEVfSEVJR0hUfXB4YDtcclxuICAgIH19O1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IElubmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICR7cHJvcHMgPT5cclxuICAgICFwcm9wcy5pc0Z1bGxJbm5lciAmJlxyXG4gICAgY3NzYFxyXG4gICAgICBtYXgtd2lkdGg6IDEyODBweDtcclxuICAgIGB9XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi13aWR0aDogMzYwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXNwb25zaXZlUGFnZVRlbXBsYXRlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuaW1wb3J0IExvZ2luQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvYXV0aC9Mb2dpbkNvbnRhaW5lcic7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PVwiXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk1SR09cIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTVJHT1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJcIiAvPlxyXG4gICAgICAgIDx0aXRsZT5NUkdPIOuhnOq3uOyduDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPExvZ2luQ29udGFpbmVyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiIsImltcG9ydCB7IE1PQklMRV9TSVpFIH0gZnJvbSAnLi4vdXRpbC9jb25zdGFudC9zdHlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lZGlhUXVlcnkgPSBtYXhXaWR0aCA9PiBgXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICR7bWF4V2lkdGh9cHgpXHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSU5ORVJfU0laRSA9IDQwNiArIDE2ICogMjtcclxuXHJcbmNvbnN0IG1lZGlhID0ge1xyXG4gIHh4bGFyZ2U6IG1lZGlhUXVlcnkoMTkyMCksXHJcbiAgeGxhcmdlOiBtZWRpYVF1ZXJ5KDE0NDApLFxyXG4gIGxhcmdlOiBtZWRpYVF1ZXJ5KDEwMjQpLFxyXG4gIG1lZGl1bTogbWVkaWFRdWVyeSg5MDApLFxyXG4gIHNtYWxsOiBtZWRpYVF1ZXJ5KDcyMCksXHJcbiAgeHNtYWxsOiBtZWRpYVF1ZXJ5KDM3NSksXHJcbiAgcGNXZWJNZWRpdW06IG1lZGlhUXVlcnkoMTI3OSksXHJcbiAgbW9iaWxlOiBtZWRpYVF1ZXJ5KE1PQklMRV9TSVpFKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lZGlhO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYmFzZToge1xyXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcclxuICAgIGdyYXkxMDA6ICcjZjdmN2Y3JyxcclxuICAgIGdyYXkxNTA6ICcjZjJmMmYyJyxcclxuICAgIGdyYXkyMDA6ICcjZWZlZmVmJyxcclxuICAgIGdyYXkyNTA6ICcjZThlOGU4JyxcclxuICAgIGdyYXkzMDA6ICcjZTBlMGUwJyxcclxuICAgIGdyYXkzNTA6ICcjYzdjN2M3JyxcclxuICAgIGdyYXk0MDA6ICcjYWVhZWFlJyxcclxuICAgIGdyYXk1MDA6ICcjOTU5NTk1JyxcclxuICAgIGdyYXk2MDA6ICcjN2M3YzdjJyxcclxuICAgIGdyYXk3MDA6ICcjNjQ2NDY0JyxcclxuICAgIGdyYXk4MDA6ICcjNGE0YTRhJyxcclxuICAgIGdyYXk5MDA6ICcjMjMyMzIzJyxcclxuICAgIGJsYWNrOiAnIzE4MTgxOCcsXHJcbiAgfSxcclxuICBwcmltYXJ5OiB7XHJcbiAgICByZWQ6ICcjZGMzNTQ1JyxcclxuICAgIHllbGxvdzogJyNmZmMxMDcnLFxyXG4gICAgYmx1ZTogJyMzNDc4ZmYnLFxyXG4gICAgbW9yZV9ibHVlOiAnIzI2NTZmNScsXHJcbiAgICBwdXJwbGU6ICcjOTk2NkZGJyxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgY29uc3QgSEVBREVSX0hFSUdIVCA9IDYwO1xyXG5leHBvcnQgY29uc3QgSEVBREVSX01PQklMRV9IRUlHSFQgPSA0NjtcclxuZXhwb3J0IGNvbnN0IFRJVExFX0hFQURFUl9IRUlHSFQgPSA1MjtcclxuZXhwb3J0IGNvbnN0IE1PQklMRV9TSVpFID0gNzY4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==