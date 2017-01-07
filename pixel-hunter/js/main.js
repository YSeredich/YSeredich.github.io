/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(19);
	__webpack_require__(4);
	__webpack_require__(20);
	__webpack_require__(26);
	__webpack_require__(16);
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(8);
	__webpack_require__(5);
	__webpack_require__(3);
	__webpack_require__(6);
	__webpack_require__(18);
	__webpack_require__(13);
	__webpack_require__(11);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(10);
	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var AbstractView = function () {
	  function AbstractView(data, callback) {
	    _classCallCheck(this, AbstractView);
	
	    this.data = data;
	    this.callback = callback;
	    this.actionElements = null;
	  }
	
	  _createClass(AbstractView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {}
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      if (this.actionElements) {
	        for (var i = 0; i < this.actionElements.length; i++) {
	          this.actionElements[i].addEventListener('click', this.callback);
	        }
	      }
	    }
	  }, {
	    key: 'clearHandlers',
	    value: function clearHandlers() {
	      if (this.actionElements) {
	        for (var i = 0; i < this.actionElements.length; i++) {
	          this.actionElements[i].removeEventListener('click', this.callback);
	        }
	      }
	    }
	  }, {
	    key: 'element',
	    get: function get() {
	      if (!this._element) {
	        var wrapper = document.createElement('div');
	        wrapper.innerHTML = this.getMarkup();
	        this._element = document.createDocumentFragment();
	        while (wrapper.childNodes.length) {
	          this._element.appendChild(wrapper.childNodes[0]);
	        }
	        this.bindHandlers();
	      }
	      return this._element;
	    }
	  }]);
	
	  return AbstractView;
	}();
	
	exports.default = AbstractView;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yulia on 28.12.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _intro = __webpack_require__(3);
	
	var _intro2 = _interopRequireDefault(_intro);
	
	var _greeting = __webpack_require__(5);
	
	var _greeting2 = _interopRequireDefault(_greeting);
	
	var _rules = __webpack_require__(6);
	
	var _rules2 = _interopRequireDefault(_rules);
	
	var _gameScreen = __webpack_require__(8);
	
	var _gameScreen2 = _interopRequireDefault(_gameScreen);
	
	var _stats = __webpack_require__(18);
	
	var _stats2 = _interopRequireDefault(_stats);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var main = document.getElementById('main');
	var changeView = function changeView(slide) {
	  main.innerHTML = '';
	  var container = document.createElement('div');
	  container.appendChild(slide);
	  main.appendChild(container);
	};
	
	var Application = function () {
	  function Application() {
	    _classCallCheck(this, Application);
	  }
	
	  _createClass(Application, null, [{
	    key: 'showIntro',
	    value: function showIntro() {
	      this.currentView = new _intro2.default();
	      changeView(this.currentView.element);
	    }
	  }, {
	    key: 'showGreeting',
	    value: function showGreeting() {
	      this.currentView.clearHandlers();
	      this.currentView = new _greeting2.default();
	      changeView(this.currentView.element);
	    }
	  }, {
	    key: 'showRules',
	    value: function showRules() {
	      this.currentView.clearHandlers();
	      this.currentView = new _rules2.default();
	      changeView(this.currentView.element);
	    }
	  }, {
	    key: 'showGame',
	    value: function showGame() {
	      if (this.currentView) {
	        this.currentView.clearHandlers();
	      }
	      this.currentView = null;
	      changeView(new _gameScreen2.default().startLevel());
	    }
	  }, {
	    key: 'showResults',
	    value: function showResults() {
	      changeView((0, _stats2.default)());
	    }
	  }]);
	
	  return Application;
	}();
	
	exports.default = Application;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _application = __webpack_require__(2);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var IntroView = function (_AbstractView) {
	  _inherits(IntroView, _AbstractView);
	
	  function IntroView() {
	    _classCallCheck(this, IntroView);
	
	    var _this = _possibleConstructorReturn(this, (IntroView.__proto__ || Object.getPrototypeOf(IntroView)).call(this));
	
	    _this.callback = function (e) {
	      e.preventDefault();
	      _application2.default.showGreeting();
	    };
	    return _this;
	  }
	
	  _createClass(IntroView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '<div class="intro"><h1 class="intro__asterisk">*</h1>\n      <p class="intro__motto"><sup>*</sup>' + _gameData2.default.introData.text + '</p></div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.actionElements = this.element.querySelectorAll('.intro__asterisk');
	      _get(IntroView.prototype.__proto__ || Object.getPrototypeOf(IntroView.prototype), 'bindHandlers', this).call(this);
	    }
	  }]);
	
	  return IntroView;
	}(_abstractView2.default);
	
	exports.default = IntroView;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _dataUnited$questionT;
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	/**
	 * Created by yulia on 07.12.2016.
	 */
	var dataUnited = {};
	
	dataUnited.introData = {
	  text: ' Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
	};
	
	dataUnited.greetingData = {
	  logo: {
	    src: 'img/logo_big.png',
	    alt: 'Pixel Hunter'
	  },
	  title: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
	  text: '\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B \u043F\u0440\u043E\u0441\u0442\u044B.<br>\n        \u041D\u0443\u0436\u043D\u043E \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u044C \u0440\u0438\u0441\u0443\u043D\u043E\u043A&nbsp;\u043E\u0442 \u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0438 \u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u0432\u044B\u0431\u043E\u0440.<br>\n        \u0417\u0430\u0434\u0430\u0447\u0430 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0442\u0440\u0438\u0432\u0438\u0430\u043B\u044C\u043D\u043E\u0439, \u043D\u043E \u043D\u0435 \u0434\u0443\u043C\u0430\u0439, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043F\u0440\u043E\u0441\u0442\u043E.<br>\n        \u0424\u043E\u0442\u043E\u0440\u0435\u0430\u043B\u0438\u0437\u043C \u043E\u0431\u043C\u0430\u043D\u0447\u0438\u0432 \u0438 \u043A\u043E\u0432\u0430\u0440\u0435\u043D.<br>\n        \u041F\u043E\u043C\u043D\u0438, \x03\u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2014 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0447\u0435\u043D\u044C \u0432\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C\u043D\u043E.'
	};
	
	dataUnited.rulesData = {
	  title: 'Правила',
	  text: '\u0423\u0433\u0430\u0434\u0430\u0439 10 \u0440\u0430\u0437 \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u0444\u043E\u0442\u043E <img\n      src="img/photo_icon.png" width="16" height="16"> \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043E\u043A <img\n      src="img/paint_icon.png" width="16" height="16" alt="">.<br>\n      \u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F\u043C\u0438 \u0438\u043B\u0438 \u0440\u0438\u0441\u0443\u043D\u043A\u0430\u043C\u0438 \u043C\u043E\u0433\u0443\u0442 \u0431\u044B\u0442\u044C \u043E\u0431\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F.<br>\n      \u041D\u0430 \u043A\u0430\u0436\u0434\u0443\u044E \u043F\u043E\u043F\u044B\u0442\u043A\u0443 \u043E\u0442\u0432\u043E\u0434\u0438\u0442\u0441\u044F 30 \u0441\u0435\u043A\u0443\u043D\u0434.<br>\n      \u041E\u0448\u0438\u0431\u0438\u0442\u044C\u0441\u044F \u043C\u043E\u0436\u043D\u043E \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3 \u0440\u0430\u0437.<br>\n      <br>\n      \u0413\u043E\u0442\u043E\u0432\u044B?',
	  placeholder: 'Ваше Имя',
	  buttonText: 'Go!'
	};
	
	var ImageType = exports.ImageType = {
	  PAINT: 0,
	  PHOTO: 1
	};
	
	var statsType = exports.statsType = {
	  WRONG: 0,
	  CORRECT: 1,
	  SLOW: 2,
	  FAST: 3,
	  UNKNOWN: 4
	};
	
	var prices = exports.prices = {
	  CORRECT: 100,
	  BONUS: 50,
	  FINE: -50
	};
	
	var gameType = exports.gameType = {
	  GUESS_TWO_IMAGES: 0,
	  GUESS_ONE_IMAGE: 1,
	  FIND_PAINT: 2
	};
	
	dataUnited.questions = [{
	  gameType: gameType.GUESS_TWO_IMAGES,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k42.kn3.net/CF42609C8.jpg',
	    type: ImageType.PAINT
	  }, {
	    name: 'question2',
	    alt: 'Option 2',
	    src: 'https://c1.staticflickr.com/3/2012/2135262359_1e8118f37f_b.jpg',
	    type: ImageType.PHOTO
	  }]
	}, {
	  gameType: gameType.GUESS_ONE_IMAGE,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k42.kn3.net/D2F0370D6.jpg',
	    type: ImageType.PAINT
	  }]
	}, {
	  gameType: gameType.FIND_PAINT,
	  tasks: [{
	    isSelected: false,
	    alt: 'Option 1',
	    src: 'https://c1.staticflickr.com/9/8007/7474850234_6f220d249e_b.jpg',
	    type: ImageType.PHOTO
	  }, {
	    isSelected: true,
	    alt: 'Option 1',
	    src: 'https://c1.staticflickr.com/9/8195/8149375513_c2f37308d1_b.jpg',
	    type: ImageType.PHOTO
	  }, {
	    isSelected: false,
	    alt: 'Option 1',
	    src: 'https://k38.kn3.net/AD92BA712.jpg',
	    type: ImageType.PAINT
	  }]
	}, {
	  gameType: gameType.GUESS_TWO_IMAGES,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k35.kn3.net/9ACD0AC56.jpg',
	    type: ImageType.PAINT
	  }, {
	    name: 'question2',
	    alt: 'Option 2',
	    src: 'https://c1.staticflickr.com/4/3561/3391067011_dfea55be7d_b.jpg',
	    type: ImageType.PHOTO
	  }]
	}, {
	  gameType: gameType.GUESS_ONE_IMAGE,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k40.kn3.net/6A7A24F7C.jpg',
	    type: ImageType.PAINT
	  }]
	}, {
	  gameType: gameType.FIND_PAINT,
	  tasks: [{
	    isSelected: false,
	    alt: 'Option 1',
	    src: 'https://k32.kn3.net/42C83EF0A.jpg',
	    type: ImageType.PAINT
	  }, {
	    isSelected: true,
	    alt: 'Option 1',
	    src: 'https://c1.staticflickr.com/4/3816/19906000779_4b3cfb9629_b.jpg',
	    type: ImageType.PHOTO
	  }, {
	    isSelected: false,
	    alt: 'Option 1',
	    src: 'https://c1.staticflickr.com/4/3772/10426763795_1c0e6033c9_b.jpg',
	    type: ImageType.PHOTO
	  }]
	}, {
	  gameType: gameType.GUESS_TWO_IMAGES,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k41.kn3.net/CF684A85A.jpg',
	    type: ImageType.PAINT
	  }, {
	    name: 'question2',
	    alt: 'Option 2',
	    src: 'https://k37.kn3.net/51254FE87.jpg',
	    type: ImageType.PAINT
	  }]
	}, {
	  gameType: gameType.GUESS_ONE_IMAGE,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k31.kn3.net/4BF6BBF0E.jpg',
	    type: ImageType.PAINT
	  }]
	}, {
	  gameType: gameType.FIND_PAINT,
	  tasks: [{
	    isSelected: false,
	    alt: 'Option 1',
	    src: 'https://c1.staticflickr.com/5/4009/4493453495_7b9c1f50c1_b.jpg',
	    type: ImageType.PHOTO
	  }, {
	    isSelected: true,
	    alt: 'Option 1',
	    src: 'https://k34.kn3.net/4244FE50B.jpg',
	    type: ImageType.PAINT
	  }, {
	    isSelected: false,
	    alt: 'Option 1',
	    src: 'https://c1.staticflickr.com/7/6087/6056545730_4ef1302917_b.jpg',
	    type: ImageType.PHOTO
	  }]
	}, {
	  gameType: gameType.GUESS_TWO_IMAGES,
	  tasks: [{
	    name: 'question1',
	    alt: 'Option 1',
	    src: 'https://k32.kn3.net/5C7060EC5.jpg',
	    type: ImageType.PAINT
	  }, {
	    name: 'question2',
	    alt: 'Option 2',
	    src: 'http://www.rosphoto.com/images/u/articles/1511/4-anastasiya-kostakova.jpg',
	    type: ImageType.PHOTO
	  }]
	}];
	
	dataUnited.questionText = (_dataUnited$questionT = {}, _defineProperty(_dataUnited$questionT, gameType.GUESS_TWO_IMAGES, 'Угадайте для каждого изображения фото или рисунок?'), _defineProperty(_dataUnited$questionT, gameType.GUESS_ONE_IMAGE, 'Угадай, фото или рисунок?'), _defineProperty(_dataUnited$questionT, gameType.FIND_PAINT, 'Найдите рисунок среди изображений'), _dataUnited$questionT);
	
	dataUnited.statsData = {
	  titleWin: 'Победа!',
	  titleFail: 'FAIL',
	  speedBonusTitle: 'Бонус за скорость:',
	  lifeBonusTitle: 'Бонус за жизни:',
	  fineTitle: 'Штраф за медлительность:'
	};
	
	exports.default = dataUnited;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _application = __webpack_require__(2);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var GreetingView = function (_AbstractView) {
	  _inherits(GreetingView, _AbstractView);
	
	  function GreetingView() {
	    _classCallCheck(this, GreetingView);
	
	    var _this = _possibleConstructorReturn(this, (GreetingView.__proto__ || Object.getPrototypeOf(GreetingView)).call(this));
	
	    _this.callback = function (e) {
	      e.preventDefault();
	      _application2.default.showRules();
	    };
	    return _this;
	  }
	
	  _createClass(GreetingView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var data = _gameData2.default.greetingData;
	      return '<div class="greeting  central--blur">\n    <div class="greeting__logo"><img src="' + data.logo.src + '" width="201" height="89" alt="{data.logo.alt}"></div>\n    <h1 class="greeting__asterisk">*</h1>\n    <div class="greeting__challenge">\n      <h3>' + data.title + '</h3>\n      <p>' + data.text + '</p>\n    </div>\n    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>\n  </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.actionElements = this.element.querySelectorAll('.greeting__continue');
	      _get(GreetingView.prototype.__proto__ || Object.getPrototypeOf(GreetingView.prototype), 'bindHandlers', this).call(this);
	    }
	  }]);
	
	  return GreetingView;
	}(_abstractView2.default);
	
	exports.default = GreetingView;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _application = __webpack_require__(2);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _back = __webpack_require__(7);
	
	var _back2 = _interopRequireDefault(_back);
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var RulesView = function (_AbstractView) {
	  _inherits(RulesView, _AbstractView);
	
	  function RulesView() {
	    _classCallCheck(this, RulesView);
	
	    return _possibleConstructorReturn(this, (RulesView.__proto__ || Object.getPrototypeOf(RulesView)).apply(this, arguments));
	  }
	
	  _createClass(RulesView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var data = _gameData2.default.rulesData;
	      var back = new _back2.default();
	      return '<header class="header">' + back.getMarkup() + '</header>\n<div class="rules  central--none">\n    <h1 class="rules__title">' + data.title + '</h1>\n    <p class="rules__description">' + data.text + '</p>\n    <form class="rules__form">\n      <input class="rules__input" type="text" placeholder="' + data.placeholder + '">\n      <button class="rules__button  continue" type="submit" disabled>' + data.buttonText + '</button>\n    </form>\n  </div>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      var _this2 = this;
	
	      this.rulesForm = this.element.querySelector('.rules__form');
	      this.rulesInput = this.rulesForm.querySelector('.rules__input');
	      this.rulesSubmit = this.rulesForm.querySelector('.rules__button');
	
	      this.inputCallback = function (e) {
	        if (_this2.rulesInput.value) {
	          _this2.rulesSubmit.removeAttribute('disabled');
	        } else {
	          _this2.rulesSubmit.setAttribute('disabled', '');
	        }
	      };
	
	      this.submitCallback = function (e) {
	        e.preventDefault();
	        _application2.default.showGame();
	      };
	
	      this.rulesInput.addEventListener('input', this.inputCallback);
	      this.rulesForm.addEventListener('submit', this.submitCallback);
	    }
	  }, {
	    key: 'clearHandlers',
	    value: function clearHandlers() {
	      this.rulesInput.removeEventListener('input', this.inputCallback);
	      this.rulesForm.removeEventListener('submit', this.submitCallback);
	    }
	  }]);
	
	  return RulesView;
	}(_abstractView2.default);
	
	exports.default = RulesView;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 27.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var BackView = function (_AbstractView) {
	  _inherits(BackView, _AbstractView);
	
	  function BackView() {
	    _classCallCheck(this, BackView);
	
	    return _possibleConstructorReturn(this, (BackView.__proto__ || Object.getPrototypeOf(BackView)).apply(this, arguments));
	  }
	
	  _createClass(BackView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '<div class="header__back">\n        <span class="back">\n          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">\n          <img src="img/logo_small.png" width="101" height="44">\n        </span>\n    </div>';
	    }
	  }]);
	
	  return BackView;
	}(_abstractView2.default);
	
	exports.default = BackView;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yulia on 08.12.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _gameHeader = __webpack_require__(9);
	
	var _gameHeader2 = _interopRequireDefault(_gameHeader);
	
	var _answerStats = __webpack_require__(11);
	
	var _answerStats2 = _interopRequireDefault(_answerStats);
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	var _game = __webpack_require__(12);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _game3 = __webpack_require__(14);
	
	var _game4 = _interopRequireDefault(_game3);
	
	var _game5 = __webpack_require__(15);
	
	var _game6 = _interopRequireDefault(_game5);
	
	var _application = __webpack_require__(2);
	
	var _application2 = _interopRequireDefault(_application);
	
	var _state = __webpack_require__(16);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _timer = __webpack_require__(17);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GamePresenter = function () {
	  function GamePresenter() {
	    _classCallCheck(this, GamePresenter);
	
	    this.round = _state2.default.currentRound;
	    this.task = this.round.questions[this.round.currentTask];
	
	    this.header = this.renderHeader();
	    this.level = this.renderLevel();
	
	    this.game = document.createDocumentFragment();
	    this.game.appendChild(this.header);
	    this.game.appendChild(this.level);
	  }
	
	  _createClass(GamePresenter, [{
	    key: 'renderHeader',
	    value: function renderHeader() {
	      var header = new _gameHeader2.default(this.round.lives);
	      return header.element;
	    }
	  }, {
	    key: 'renderLevelQuestion',
	    value: function renderLevelQuestion() {
	      var gameTaskEl = document.createElement('p');
	      gameTaskEl.innerHTML = _gameData2.default.questionText[this.task.gameType];
	      gameTaskEl.classList.add('game__task');
	      return gameTaskEl;
	    }
	  }, {
	    key: 'renderLevelTask',
	    value: function renderLevelTask() {
	      switch (this.task.gameType) {
	        case _gameData.gameType.GUESS_TWO_IMAGES:
	          return new _game2.default(this.task, GamePresenter.guessTwoImagesCallback).element;
	        case _gameData.gameType.GUESS_ONE_IMAGE:
	          return new _game4.default(this.task, GamePresenter.guessOneImageCallback).element;
	        case _gameData.gameType.FIND_PAINT:
	          return new _game6.default(this.task, GamePresenter.findPaintCallback).element;
	        default:
	          throw new Error('Unknown game type');
	      }
	    }
	  }, {
	    key: 'renderLevelFooter',
	    value: function renderLevelFooter() {
	      var footerEl = document.createElement('div');
	      footerEl.classList.add('stats');
	      var answerStats = new _answerStats2.default(this.round.stats);
	      footerEl.appendChild(answerStats.element);
	      return footerEl;
	    }
	  }, {
	    key: 'renderLevel',
	    value: function renderLevel() {
	      var gameEl = document.createElement('div');
	      gameEl.classList.add('game');
	      gameEl.appendChild(this.renderLevelQuestion());
	      gameEl.appendChild(this.renderLevelTask());
	      gameEl.appendChild(this.renderLevelFooter());
	      return gameEl;
	    }
	  }, {
	    key: 'startLevel',
	    value: function startLevel() {
	      _timer2.default.configure(30, this.game.querySelector('.game__timer'), GamePresenter.timeOverCallback).start();
	      return this.game;
	    }
	  }], [{
	    key: 'timeOverCallback',
	    value: function timeOverCallback() {
	      _state2.default.setResult([], 0);
	      GamePresenter.goToNextScreen();
	    }
	  }, {
	    key: 'guessTwoImagesCallback',
	    value: function guessTwoImagesCallback(e) {
	      e.preventDefault();
	      var gameAnswers = document.querySelectorAll('.game__answer');
	      var firstAnswer = null;
	      for (var i = 0; i < gameAnswers.length; i++) {
	        if (gameAnswers[i].classList.contains('checked')) {
	          firstAnswer = gameAnswers[i];
	        }
	      }
	      if (firstAnswer) {
	        var firstInput = firstAnswer.querySelector('input');
	        var currentInput = e.currentTarget.querySelector('input');
	        if (firstInput.name === currentInput.name) {
	          firstAnswer.classList.remove('checked');
	          firstInput.checked = false;
	          e.currentTarget.classList.add('checked');
	          currentInput.checked = true;
	        } else {
	          _timer2.default.stop();
	          var secondAnswer = e.currentTarget.querySelector('input').value;
	          var answer = void 0;
	          answer = firstInput.name === 'question1' ? [firstInput.value, secondAnswer] : [secondAnswer, firstInput.value];
	          answer = answer.map(function (item) {
	            if (item === 'photo') {
	              return _gameData.ImageType.PHOTO;
	            } else if (item === 'paint') {
	              return _gameData.ImageType.PAINT;
	            } else {
	              return null;
	            }
	          });
	          _state2.default.setResult(answer, _timer2.default.getTime());
	          GamePresenter.goToNextScreen();
	        }
	      } else {
	        e.currentTarget.classList.add('checked');
	        e.currentTarget.querySelector('input').checked = true;
	      }
	    }
	  }, {
	    key: 'guessOneImageCallback',
	    value: function guessOneImageCallback(e) {
	      e.preventDefault();
	      _timer2.default.stop();
	      var answer = e.currentTarget.querySelector('input').value;
	      if (answer === 'photo') {
	        answer = [_gameData.ImageType.PHOTO];
	      } else if (answer === 'paint') {
	        answer = [_gameData.ImageType.PAINT];
	      }
	      _state2.default.setResult(answer, _timer2.default.getTime());
	      GamePresenter.goToNextScreen();
	    }
	  }, {
	    key: 'findPaintCallback',
	    value: function findPaintCallback(e) {
	      e.preventDefault();
	      _timer2.default.stop();
	      var gameOption = document.querySelectorAll('.game__option');
	      var answer = [];
	      for (var i = 0; i < gameOption.length; i++) {
	        if (gameOption[i] === e.currentTarget) {
	          answer.push(_gameData.ImageType.PAINT);
	        } else {
	          answer.push(_gameData.ImageType.PHOTO);
	        }
	      }
	      _state2.default.setResult(answer, _timer2.default.getTime());
	      GamePresenter.goToNextScreen();
	    }
	  }, {
	    key: 'goToNextScreen',
	    value: function goToNextScreen() {
	      var round = _state2.default.currentRound;
	      var current = round.currentTask;
	      if (round.lives < 0 || current >= 10) {
	        _state2.default.countTotal();
	        _application2.default.showResults();
	      } else {
	        _application2.default.showGame();
	      }
	    }
	  }]);
	
	  return GamePresenter;
	}();
	
	exports.default = GamePresenter;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _back = __webpack_require__(7);
	
	var _back2 = _interopRequireDefault(_back);
	
	var _lives = __webpack_require__(10);
	
	var _lives2 = _interopRequireDefault(_lives);
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 27.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var GameHeaderView = function (_AbstractView) {
	  _inherits(GameHeaderView, _AbstractView);
	
	  function GameHeaderView(numLives) {
	    _classCallCheck(this, GameHeaderView);
	
	    var _this = _possibleConstructorReturn(this, (GameHeaderView.__proto__ || Object.getPrototypeOf(GameHeaderView)).call(this));
	
	    _this.numLives = numLives;
	    _this.back = new _back2.default();
	    return _this;
	  }
	
	  _createClass(GameHeaderView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var livesView = new _lives2.default(this.numLives);
	      return '<header class="header">' + this.back.getMarkup() + '<h1 class="game__timer">30</h1>' + livesView.getMarkup() + '</header>';
	    }
	  }]);
	
	  return GameHeaderView;
	}(_abstractView2.default);
	
	exports.default = GameHeaderView;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 27.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var LivesView = function (_AbstractView) {
	  _inherits(LivesView, _AbstractView);
	
	  function LivesView() {
	    _classCallCheck(this, LivesView);
	
	    return _possibleConstructorReturn(this, (LivesView.__proto__ || Object.getPrototypeOf(LivesView)).apply(this, arguments));
	  }
	
	  _createClass(LivesView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var fullElement = '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
	      var emptyElement = '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
	      var TOTAL_LIVES = 3;
	
	      var content = '';
	      for (var j = 0; j < TOTAL_LIVES - this.data; j++) {
	        content += emptyElement;
	      }
	      for (var i = 0; i < this.data; i++) {
	        content += fullElement;
	      }
	      return '<div class="game__lives">\n      ' + content + '\n    </div>';
	    }
	  }]);
	
	  return LivesView;
	}(_abstractView2.default);
	
	exports.default = LivesView;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _gameData = __webpack_require__(4);
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 27.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var AnswerStatsView = function (_AbstractView) {
	  _inherits(AnswerStatsView, _AbstractView);
	
	  function AnswerStatsView() {
	    _classCallCheck(this, AnswerStatsView);
	
	    return _possibleConstructorReturn(this, (AnswerStatsView.__proto__ || Object.getPrototypeOf(AnswerStatsView)).apply(this, arguments));
	  }
	
	  _createClass(AnswerStatsView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var _statsItem;
	
	      var statsItem = (_statsItem = {}, _defineProperty(_statsItem, _gameData.statsType.WRONG, '<li class="stats__result stats__result--wrong"></li>'), _defineProperty(_statsItem, _gameData.statsType.CORRECT, '<li class="stats__result stats__result--correct"></li>'), _defineProperty(_statsItem, _gameData.statsType.SLOW, '<li class="stats__result stats__result--slow"></li>'), _defineProperty(_statsItem, _gameData.statsType.FAST, '<li class="stats__result stats__result--fast"></li>'), _defineProperty(_statsItem, _gameData.statsType.UNKNOWN, '<li class="stats__result stats__result--unknown"></li>'), _statsItem);
	
	      var _arr = this.data;
	      for (var i = _arr.length; i < 10; i++) {
	        _arr.push(_gameData.statsType.UNKNOWN);
	      }
	
	      var _callback = function _callback(item) {
	        return statsItem[item];
	      };
	      var contentArray = _arr.map(_callback);
	      var content = contentArray.join('');
	
	      return '<ul class="stats">' + content + '</ul>';
	    }
	  }]);
	
	  return AnswerStatsView;
	}(_abstractView2.default);
	
	exports.default = AnswerStatsView;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _action = __webpack_require__(13);
	
	var _action2 = _interopRequireDefault(_action);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var FirstTypeGameView = function (_AbstractView) {
	  _inherits(FirstTypeGameView, _AbstractView);
	
	  function FirstTypeGameView() {
	    _classCallCheck(this, FirstTypeGameView);
	
	    return _possibleConstructorReturn(this, (FirstTypeGameView.__proto__ || Object.getPrototypeOf(FirstTypeGameView)).apply(this, arguments));
	  }
	
	  _createClass(FirstTypeGameView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var options = function options(tasks) {
	        var _callback = function _callback(item) {
	          var action = new _action2.default(item.name);
	          return '<div class="game__option">\n        <img src="' + item.src + '" alt=' + item.alt + '" width="468" height="458">\n        ' + action.getMarkup() + '\n      </div>';
	        };
	        var content = tasks.map(_callback);
	        return content.join('');
	      };
	
	      return '<form class="game__content">' + options(this.data.tasks) + '</form>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.actionElements = this.element.querySelectorAll('.game__answer');
	      _get(FirstTypeGameView.prototype.__proto__ || Object.getPrototypeOf(FirstTypeGameView.prototype), 'bindHandlers', this).call(this);
	    }
	  }]);
	
	  return FirstTypeGameView;
	}(_abstractView2.default);
	
	exports.default = FirstTypeGameView;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 02.12.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ActionView = function (_AbstractView) {
	  _inherits(ActionView, _AbstractView);
	
	  function ActionView() {
	    _classCallCheck(this, ActionView);
	
	    return _possibleConstructorReturn(this, (ActionView.__proto__ || Object.getPrototypeOf(ActionView)).apply(this, arguments));
	  }
	
	  _createClass(ActionView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      return '<label class="game__answer game__answer--photo">\n          <input name="' + this.data + '" type="radio" value="photo">\n          <span>\u0424\u043E\u0442\u043E</span>\n        </label>\n        <label class="game__answer game__answer--paint">\n          <input name="' + this.data + '" type="radio" value="paint">\n          <span>\u0420\u0438\u0441\u0443\u043D\u043E\u043A</span>\n        </label>';
	    }
	  }]);
	
	  return ActionView;
	}(_abstractView2.default);
	
	exports.default = ActionView;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _action = __webpack_require__(13);
	
	var _action2 = _interopRequireDefault(_action);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var SecondTypeGame = function (_AbstractView) {
	  _inherits(SecondTypeGame, _AbstractView);
	
	  function SecondTypeGame() {
	    _classCallCheck(this, SecondTypeGame);
	
	    return _possibleConstructorReturn(this, (SecondTypeGame.__proto__ || Object.getPrototypeOf(SecondTypeGame)).apply(this, arguments));
	  }
	
	  _createClass(SecondTypeGame, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var option = function option(task) {
	        var action = new _action2.default(task.name);
	        return '<div class="game__option">\n        <img src="' + task.src + '" alt="' + task.alt + '" width="705" height="455">\n        ' + action.getMarkup() + '\n      </div>';
	      };
	
	      return '<form class="game__content  game__content--wide">' + option(this.data.tasks[0]) + '</form>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.actionElements = this.element.querySelectorAll('.game__answer');
	      _get(SecondTypeGame.prototype.__proto__ || Object.getPrototypeOf(SecondTypeGame.prototype), 'bindHandlers', this).call(this);
	    }
	  }]);
	
	  return SecondTypeGame;
	}(_abstractView2.default);
	
	exports.default = SecondTypeGame;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ThirdTypeGameView = function (_AbstractView) {
	  _inherits(ThirdTypeGameView, _AbstractView);
	
	  function ThirdTypeGameView() {
	    _classCallCheck(this, ThirdTypeGameView);
	
	    return _possibleConstructorReturn(this, (ThirdTypeGameView.__proto__ || Object.getPrototypeOf(ThirdTypeGameView)).apply(this, arguments));
	  }
	
	  _createClass(ThirdTypeGameView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var options = function options(tasks) {
	        var _callback = function _callback(item) {
	          return '<div class="game__option' + (item.isSelected ? ' game__option--selected' : '') + '">\n        <img src="' + item.src + '" alt="' + item.alt + '" width="304" height="455">\n      </div>';
	        };
	        var content = tasks.map(_callback);
	        return content.join('');
	      };
	
	      return '<form class="game__content  game__content--triple">' + options(this.data.tasks) + '</form>';
	    }
	  }, {
	    key: 'bindHandlers',
	    value: function bindHandlers() {
	      this.actionElements = this.element.querySelectorAll('.game__option');
	      _get(ThirdTypeGameView.prototype.__proto__ || Object.getPrototypeOf(ThirdTypeGameView.prototype), 'bindHandlers', this).call(this);
	    }
	  }]);
	
	  return ThirdTypeGameView;
	}(_abstractView2.default);
	
	exports.default = ThirdTypeGameView;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.countTotal = exports.setResult = exports.setStats = exports.setRealAnswer = exports.setUserAnswer = exports.getAnswerType = exports.determineAnswerType = exports.getCorrectness = exports.determineCorrect = exports.getTime = exports.setTime = exports.increaseCurrent = exports.getCurrent = exports.setCurrent = exports.decreaseLives = exports.getLives = exports.setLives = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yulia on 12.12.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
	
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var initialState = {
	  currentRoundID: 0,
	  rounds: [{
	    questions: _gameData2.default.questions,
	    currentTask: 0,
	    lives: 3,
	    stats: [],
	    result: []
	  }]
	};
	
	var setLives = exports.setLives = function setLives(round, lives) {
	  if (lives < 0 || lives > 3) {
	    throw new RangeError('This number cant be number of lives');
	  } else {
	    return Object.assign({}, round, { lives: lives });
	  }
	};
	
	var getLives = exports.getLives = function getLives(round) {
	  return round.lives;
	};
	
	var decreaseLives = exports.decreaseLives = function decreaseLives(round) {
	  if (round.lives < 0) {
	    throw new RangeError('You have an irreducible number of lives');
	  } else {
	    return Object.assign({}, round, {
	      lives: round.lives - 1
	    });
	  }
	};
	
	var setCurrent = exports.setCurrent = function setCurrent(round, currentTask) {
	  if (currentTask < 0 || currentTask > 10) {
	    throw new RangeError('This number cant be number of current task');
	  } else {
	    return Object.assign({}, round, { currentTask: currentTask });
	  }
	};
	
	var getCurrent = exports.getCurrent = function getCurrent(round) {
	  return round.currentTask;
	};
	
	var increaseCurrent = exports.increaseCurrent = function increaseCurrent(round) {
	  if (round.currentTask === 9) {
	    throw new RangeError('You are at the last task now');
	  } else {
	    return Object.assign({}, round, {
	      currentTask: round.currentTask + 1
	    });
	  }
	};
	
	var setTime = exports.setTime = function setTime(resultTask, time) {
	  if (time < 0 || time > 30) {
	    throw new RangeError('This number cant be number of tasks time');
	  } else {
	    return Object.assign({}, resultTask, { time: time });
	  }
	};
	
	var getTime = exports.getTime = function getTime(resultTask) {
	  return resultTask.time;
	};
	
	var determineCorrect = exports.determineCorrect = function determineCorrect(resultTask) {
	  var answer = resultTask.answer;
	  var real = resultTask.realAnswer;
	  var isCorrect = void 0;
	  if (answer.length === real.length) {
	    isCorrect = answer.every(function (item, i) {
	      return Boolean(item === real[i]);
	    });
	  } else {
	    isCorrect = false;
	  }
	  return Object.assign({}, resultTask, { isCorrect: isCorrect });
	};
	
	var getCorrectness = exports.getCorrectness = function getCorrectness(resultTask) {
	  return resultTask.isCorrect;
	};
	
	var determineAnswerType = exports.determineAnswerType = function determineAnswerType(resultTask) {
	  var res = void 0;
	
	  if (resultTask.isCorrect === true) {
	
	    if (resultTask.time > 20) {
	      res = _gameData.statsType.FAST;
	    } else if (resultTask.time < 10) {
	      res = _gameData.statsType.SLOW;
	    } else {
	      res = _gameData.statsType.CORRECT;
	    }
	  } else if (resultTask.isCorrect === false) {
	    res = _gameData.statsType.WRONG;
	  } else {
	    res = _gameData.statsType.UNKNOWN;
	  }
	  return Object.assign({}, resultTask, {
	    statsType: res
	  });
	};
	
	var getAnswerType = exports.getAnswerType = function getAnswerType(resultTask) {
	  return resultTask.statsType;
	};
	
	var setUserAnswer = exports.setUserAnswer = function setUserAnswer(resultTask, answer) {
	  return Object.assign({}, resultTask, { answer: answer });
	};
	
	var setRealAnswer = exports.setRealAnswer = function setRealAnswer(resultTask, realAnswer) {
	  return Object.assign({}, resultTask, { realAnswer: realAnswer });
	};
	
	var setStats = exports.setStats = function setStats(round, value) {
	  var newStats = round.stats.slice();
	  newStats[round.currentTask] = value;
	  return Object.assign({}, round, {
	    stats: newStats
	  });
	};
	
	var _setResult = function _setResult(momentState, answer, time) {
	  var currentRoundNum = momentState.currentRoundID;
	  var round = momentState.rounds[currentRoundNum];
	  var currentTaskNum = getCurrent(round);
	
	  var currentQuestion = round.questions[currentTaskNum].tasks;
	  var realAnswer = currentQuestion.map(function (item) {
	    return item.type;
	  });
	  var resultWithAnswers = setRealAnswer(setUserAnswer({}, answer), realAnswer);
	
	  var resultWithTime = setTime(resultWithAnswers, time);
	  var resultTask = determineAnswerType(determineCorrect(resultWithTime));
	
	  var res = setStats(round, resultTask.statsType);
	  if (!getCorrectness(resultTask)) {
	    res = decreaseLives(res);
	  }
	  res = setCurrent(res, currentTaskNum + 1);
	  res.result[currentTaskNum] = resultTask;
	
	  var rounds = momentState.rounds.slice();
	  rounds[momentState.currentRoundID] = res;
	  return Object.assign({}, momentState, { rounds: rounds });
	};
	
	exports.setResult = _setResult;
	var _countTotal = function _countTotal(momentState) {
	  var round = momentState.rounds[momentState.currentRoundID];
	  var result = round.result;
	
	  var correct = 0;
	  var wrong = 0;
	  var fastBonuses = 0;
	  var livesBonuses = round.lives > 0 ? round.lives : 0;
	  var fines = 0;
	
	  result.forEach(function (item) {
	    if (item.isCorrect === true) {
	      correct += 1;
	    } else {
	      wrong += 1;
	    }
	    if (item.statsType === _gameData.statsType.SLOW) {
	      fines += 1;
	    } else if (item.statsType === _gameData.statsType.FAST) {
	      fastBonuses += 1;
	    }
	  });
	
	  var isWin = wrong < 4;
	
	  var total = void 0;
	  if (isWin) {
	    total = {
	      isWin: isWin,
	      isCorrect: correct,
	      totalPoints: correct * _gameData.prices.CORRECT + (livesBonuses + fastBonuses) * _gameData.prices.BONUS + fines * _gameData.prices.FINE,
	      fastBonuses: fastBonuses,
	      livesBonuses: round.lives,
	      slowFine: fines
	    };
	  } else {
	    total = {
	      isWin: isWin,
	      isCorrect: 0,
	      totalPoints: 0,
	      fastBonuses: 0,
	      livesBonuses: 0,
	      slowFine: 0
	    };
	  }
	  var res = Object.assign({}, round, total);
	  var rounds = momentState.rounds.slice();
	  rounds[momentState.currentRoundID] = res;
	  return Object.assign({}, momentState, { rounds: rounds });
	};
	
	exports.countTotal = _countTotal;
	
	var State = function () {
	  function State() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	
	    _classCallCheck(this, State);
	
	    this._state = state;
	  }
	
	  _createClass(State, [{
	    key: 'setResult',
	    value: function setResult(answer, time) {
	      this._state = _setResult(this._state, answer, time);
	    }
	  }, {
	    key: 'countTotal',
	    value: function countTotal() {
	      this._state = _countTotal(this._state);
	    }
	  }, {
	    key: 'currentRound',
	    get: function get() {
	      return this._state.rounds[this._state.currentRoundID];
	    }
	  }]);
	
	  return State;
	}();
	
	var state = new State();
	exports.default = state;

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by yulia on 27.11.2016.
	 */
	var Timer = function () {
	  function Timer() {
	    _classCallCheck(this, Timer);
	
	    this.currentTime = null;
	    this.callback = null;
	    this.timeoutId = null;
	    this.container = null;
	  }
	
	  _createClass(Timer, [{
	    key: "configure",
	    value: function configure(sec, container, callback) {
	      this.currentTime = sec;
	      this.container = container;
	      this.callback = callback;
	      return this;
	    }
	  }, {
	    key: "getTime",
	    value: function getTime() {
	      return this.currentTime;
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      var _this = this;
	
	      var _tick = function _tick() {
	        _this.container.innerHTML = _this.currentTime;
	        _this.currentTime--;
	
	        if (_this.currentTime <= 0) {
	          if (_this.callback !== null) {
	            _this.callback();
	          }
	        } else {
	          _this.timeoutId = setTimeout(_tick, 1000);
	        }
	      };
	
	      _tick();
	    }
	  }, {
	    key: "stop",
	    value: function stop() {
	      if (this.timeoutId !== null) {
	        clearTimeout(this.timeoutId);
	      }
	      this.callback = null;
	    }
	  }]);
	
	  return Timer;
	}();
	
	var timer = new Timer();
	exports.default = timer;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _abstractView = __webpack_require__(1);
	
	var _abstractView2 = _interopRequireDefault(_abstractView);
	
	var _answerStats = __webpack_require__(11);
	
	var _answerStats2 = _interopRequireDefault(_answerStats);
	
	var _back = __webpack_require__(7);
	
	var _back2 = _interopRequireDefault(_back);
	
	var _state = __webpack_require__(16);
	
	var _state2 = _interopRequireDefault(_state);
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yulia on 19.11.2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var data = _gameData2.default.statsData;
	
	var StatsView = function (_AbstractView) {
	  _inherits(StatsView, _AbstractView);
	
	  function StatsView() {
	    _classCallCheck(this, StatsView);
	
	    return _possibleConstructorReturn(this, (StatsView.__proto__ || Object.getPrototypeOf(StatsView)).apply(this, arguments));
	  }
	
	  _createClass(StatsView, [{
	    key: 'getMarkup',
	    value: function getMarkup() {
	      var round = _state2.default.currentRound;
	      var answerStats = new _answerStats2.default(round.stats);
	      var mainBlock = '<tr>\n        <td class="result__number">1.</td>\n        <td colspan="2">' + answerStats.getMarkup() + '</td>\n        <td class="result__points">' + (round.isWin ? '×&nbsp;' + _gameData.prices.CORRECT : '') + '</td>\n        <td class="result__total">' + (round.isWin ? round.isCorrect * _gameData.prices.CORRECT : data.titleFail) + '</td>\n      </tr>';
	
	      var bonusesBlock = void 0;
	
	      if (round.isWin && (round.fastBonuses !== null || round.livesBonuses !== null || round.slowFine !== null)) {
	        var fast = void 0;
	        var life = void 0;
	        var slow = void 0;
	        if (round.fastBonuses) {
	          fast = '<tr>\n        <td></td>\n        <td class="result__extra">' + data.speedBonusTitle + '</td>\n        <td class="result__extra">' + round.fastBonuses + '&nbsp;<span class="stats__result stats__result--fast"></span></td>\n        <td class="result__points">\xD7&nbsp;' + _gameData.prices.BONUS + '</td>\n        <td class="result__total">' + round.fastBonuses * _gameData.prices.BONUS + '</td>\n      </tr>';
	        } else {
	          fast = '';
	        }
	        if (round.livesBonuses) {
	          life = '<tr>\n        <td></td>\n        <td class="result__extra">' + data.lifeBonusTitle + '</td>\n        <td class="result__extra">' + round.livesBonuses + '&nbsp;<span class="stats__result stats__result--fast"></span></td>\n        <td class="result__points">\xD7&nbsp;' + _gameData.prices.BONUS + '</td>\n        <td class="result__total">' + round.livesBonuses * _gameData.prices.BONUS + '</td>\n      </tr>';
	        } else {
	          life = '';
	        }
	        if (round.slowFine) {
	          slow = '<tr>\n        <td></td>\n        <td class="result__extra">' + data.lifeBonusTitle + '</td>\n        <td class="result__extra">' + round.slowFine + '&nbsp;<span class="stats__result stats__result--fast"></span></td>\n        <td class="result__points">\xD7&nbsp;' + _gameData.prices.FINE + '</td>\n        <td class="result__total">' + round.slowFine * _gameData.prices.FINE + '</td>\n      </tr>';
	        } else {
	          slow = '';
	        }
	        bonusesBlock = '' + fast + life + slow;
	      } else {
	        bonusesBlock = '';
	      }
	
	      var totalBlock = round.isWin ? '<tr><td colspan="5" class="result__total  result__total--final">' + round.totalPoints + '</td></tr>' : '';
	
	      var back = new _back2.default();
	
	      return '<header class="header">' + back.getMarkup() + '</header>\n  <div class="result">\n    <h1>' + (round.isWin ? data.titleWin : data.titleFail) + '</h1>\n    <table class="result__table">' + mainBlock + bonusesBlock + totalBlock + '</table>\n  </div>';
	    }
	  }]);
	
	  return StatsView;
	}(_abstractView2.default);
	
	exports.default = function () {
	  return new StatsView().element;
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _application = __webpack_require__(2);
	
	var _application2 = _interopRequireDefault(_application);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_application2.default.showIntro();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assert = __webpack_require__(21);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('Array', function () {
	  describe('#indexOf()', function () {
	    it('should return -1 when the value is not present', function () {
	      _assert2.default.equal(-1, [1, 2, 3].indexOf(4));
	    });
	  });
	}); /**
	     * Created by yulia on 11.12.2016.
	     */

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
	// original notice:
	
	/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function compare(a, b) {
	  if (a === b) {
	    return 0;
	  }
	
	  var x = a.length;
	  var y = b.length;
	
	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i];
	      y = b[i];
	      break;
	    }
	  }
	
	  if (x < y) {
	    return -1;
	  }
	  if (y < x) {
	    return 1;
	  }
	  return 0;
	}
	function isBuffer(b) {
	  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
	    return global.Buffer.isBuffer(b);
	  }
	  return !!(b != null && b._isBuffer);
	}
	
	// based on node assert, original notice:
	
	// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
	//
	// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
	//
	// Originally from narwhal.js (http://narwhaljs.org)
	// Copyright (c) 2009 Thomas Robinson <280north.com>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the 'Software'), to
	// deal in the Software without restriction, including without limitation the
	// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
	// sell copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	//
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
	// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var util = __webpack_require__(22);
	var hasOwn = Object.prototype.hasOwnProperty;
	var pSlice = Array.prototype.slice;
	var functionsHaveNames = function () {
	  return function foo() {}.name === 'foo';
	}();
	function pToString(obj) {
	  return Object.prototype.toString.call(obj);
	}
	function isView(arrbuf) {
	  if (isBuffer(arrbuf)) {
	    return false;
	  }
	  if (typeof global.ArrayBuffer !== 'function') {
	    return false;
	  }
	  if (typeof ArrayBuffer.isView === 'function') {
	    return ArrayBuffer.isView(arrbuf);
	  }
	  if (!arrbuf) {
	    return false;
	  }
	  if (arrbuf instanceof DataView) {
	    return true;
	  }
	  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
	    return true;
	  }
	  return false;
	}
	// 1. The assert module provides functions that throw
	// AssertionError's when particular conditions are not met. The
	// assert module must conform to the following interface.
	
	var assert = module.exports = ok;
	
	// 2. The AssertionError is defined in assert.
	// new assert.AssertionError({ message: message,
	//                             actual: actual,
	//                             expected: expected })
	
	var regex = /\s*function\s+([^\(\s]*)\s*/;
	// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
	function getName(func) {
	  if (!util.isFunction(func)) {
	    return;
	  }
	  if (functionsHaveNames) {
	    return func.name;
	  }
	  var str = func.toString();
	  var match = str.match(regex);
	  return match && match[1];
	}
	assert.AssertionError = function AssertionError(options) {
	  this.name = 'AssertionError';
	  this.actual = options.actual;
	  this.expected = options.expected;
	  this.operator = options.operator;
	  if (options.message) {
	    this.message = options.message;
	    this.generatedMessage = false;
	  } else {
	    this.message = getMessage(this);
	    this.generatedMessage = true;
	  }
	  var stackStartFunction = options.stackStartFunction || fail;
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, stackStartFunction);
	  } else {
	    // non v8 browsers so we can have a stacktrace
	    var err = new Error();
	    if (err.stack) {
	      var out = err.stack;
	
	      // try to strip useless frames
	      var fn_name = getName(stackStartFunction);
	      var idx = out.indexOf('\n' + fn_name);
	      if (idx >= 0) {
	        // once we have located the function frame
	        // we need to strip out everything before it (and its line)
	        var next_line = out.indexOf('\n', idx + 1);
	        out = out.substring(next_line + 1);
	      }
	
	      this.stack = out;
	    }
	  }
	};
	
	// assert.AssertionError instanceof Error
	util.inherits(assert.AssertionError, Error);
	
	function truncate(s, n) {
	  if (typeof s === 'string') {
	    return s.length < n ? s : s.slice(0, n);
	  } else {
	    return s;
	  }
	}
	function inspect(something) {
	  if (functionsHaveNames || !util.isFunction(something)) {
	    return util.inspect(something);
	  }
	  var rawname = getName(something);
	  var name = rawname ? ': ' + rawname : '';
	  return '[Function' + name + ']';
	}
	function getMessage(self) {
	  return truncate(inspect(self.actual), 128) + ' ' + self.operator + ' ' + truncate(inspect(self.expected), 128);
	}
	
	// At present only the three keys mentioned above are used and
	// understood by the spec. Implementations or sub modules can pass
	// other keys to the AssertionError's constructor - they will be
	// ignored.
	
	// 3. All of the following functions must throw an AssertionError
	// when a corresponding condition is not met, with a message that
	// may be undefined if not provided.  All assertion methods provide
	// both the actual and expected values to the assertion error for
	// display purposes.
	
	function fail(actual, expected, message, operator, stackStartFunction) {
	  throw new assert.AssertionError({
	    message: message,
	    actual: actual,
	    expected: expected,
	    operator: operator,
	    stackStartFunction: stackStartFunction
	  });
	}
	
	// EXTENSION! allows for well behaved errors defined elsewhere.
	assert.fail = fail;
	
	// 4. Pure assertion tests whether a value is truthy, as determined
	// by !!guard.
	// assert.ok(guard, message_opt);
	// This statement is equivalent to assert.equal(true, !!guard,
	// message_opt);. To test strictly for the value true, use
	// assert.strictEqual(true, guard, message_opt);.
	
	function ok(value, message) {
	  if (!value) fail(value, true, message, '==', assert.ok);
	}
	assert.ok = ok;
	
	// 5. The equality assertion tests shallow, coercive equality with
	// ==.
	// assert.equal(actual, expected, message_opt);
	
	assert.equal = function equal(actual, expected, message) {
	  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
	};
	
	// 6. The non-equality assertion tests for whether two objects are not equal
	// with != assert.notEqual(actual, expected, message_opt);
	
	assert.notEqual = function notEqual(actual, expected, message) {
	  if (actual == expected) {
	    fail(actual, expected, message, '!=', assert.notEqual);
	  }
	};
	
	// 7. The equivalence assertion tests a deep equality relation.
	// assert.deepEqual(actual, expected, message_opt);
	
	assert.deepEqual = function deepEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
	  }
	};
	
	assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
	  if (!_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
	  }
	};
	
	function _deepEqual(actual, expected, strict, memos) {
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (isBuffer(actual) && isBuffer(expected)) {
	    return compare(actual, expected) === 0;
	
	    // 7.2. If the expected value is a Date object, the actual value is
	    // equivalent if it is also a Date object that refers to the same time.
	  } else if (util.isDate(actual) && util.isDate(expected)) {
	    return actual.getTime() === expected.getTime();
	
	    // 7.3 If the expected value is a RegExp object, the actual value is
	    // equivalent if it is also a RegExp object with the same source and
	    // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
	  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
	    return actual.source === expected.source && actual.global === expected.global && actual.multiline === expected.multiline && actual.lastIndex === expected.lastIndex && actual.ignoreCase === expected.ignoreCase;
	
	    // 7.4. Other pairs that do not both pass typeof value == 'object',
	    // equivalence is determined by ==.
	  } else if ((actual === null || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) !== 'object') && (expected === null || (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) !== 'object')) {
	    return strict ? actual === expected : actual == expected;
	
	    // If both values are instances of typed arrays, wrap their underlying
	    // ArrayBuffers in a Buffer each to increase performance
	    // This optimization requires the arrays to have the same type as checked by
	    // Object.prototype.toString (aka pToString). Never perform binary
	    // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
	    // bit patterns are not identical.
	  } else if (isView(actual) && isView(expected) && pToString(actual) === pToString(expected) && !(actual instanceof Float32Array || actual instanceof Float64Array)) {
	    return compare(new Uint8Array(actual.buffer), new Uint8Array(expected.buffer)) === 0;
	
	    // 7.5 For all other Object pairs, including Array objects, equivalence is
	    // determined by having the same number of owned properties (as verified
	    // with Object.prototype.hasOwnProperty.call), the same set of keys
	    // (although not necessarily the same order), equivalent values for every
	    // corresponding key, and an identical 'prototype' property. Note: this
	    // accounts for both named and indexed properties on Arrays.
	  } else if (isBuffer(actual) !== isBuffer(expected)) {
	    return false;
	  } else {
	    memos = memos || { actual: [], expected: [] };
	
	    var actualIndex = memos.actual.indexOf(actual);
	    if (actualIndex !== -1) {
	      if (actualIndex === memos.expected.indexOf(expected)) {
	        return true;
	      }
	    }
	
	    memos.actual.push(actual);
	    memos.expected.push(expected);
	
	    return objEquiv(actual, expected, strict, memos);
	  }
	}
	
	function isArguments(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	}
	
	function objEquiv(a, b, strict, actualVisitedObjects) {
	  if (a === null || a === undefined || b === null || b === undefined) return false;
	  // if one is a primitive, the other must be same
	  if (util.isPrimitive(a) || util.isPrimitive(b)) return a === b;
	  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b)) return false;
	  var aIsArgs = isArguments(a);
	  var bIsArgs = isArguments(b);
	  if (aIsArgs && !bIsArgs || !aIsArgs && bIsArgs) return false;
	  if (aIsArgs) {
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return _deepEqual(a, b, strict);
	  }
	  var ka = objectKeys(a);
	  var kb = objectKeys(b);
	  var key, i;
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length !== kb.length) return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] !== kb[i]) return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects)) return false;
	  }
	  return true;
	}
	
	// 8. The non-equivalence assertion tests for any deep inequality.
	// assert.notDeepEqual(actual, expected, message_opt);
	
	assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, false)) {
	    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
	  }
	};
	
	assert.notDeepStrictEqual = notDeepStrictEqual;
	function notDeepStrictEqual(actual, expected, message) {
	  if (_deepEqual(actual, expected, true)) {
	    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
	  }
	}
	
	// 9. The strict equality assertion tests strict equality, as determined by ===.
	// assert.strictEqual(actual, expected, message_opt);
	
	assert.strictEqual = function strictEqual(actual, expected, message) {
	  if (actual !== expected) {
	    fail(actual, expected, message, '===', assert.strictEqual);
	  }
	};
	
	// 10. The strict non-equality assertion tests for strict inequality, as
	// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);
	
	assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
	  if (actual === expected) {
	    fail(actual, expected, message, '!==', assert.notStrictEqual);
	  }
	};
	
	function expectedException(actual, expected) {
	  if (!actual || !expected) {
	    return false;
	  }
	
	  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
	    return expected.test(actual);
	  }
	
	  try {
	    if (actual instanceof expected) {
	      return true;
	    }
	  } catch (e) {
	    // Ignore.  The instanceof check doesn't work for arrow functions.
	  }
	
	  if (Error.isPrototypeOf(expected)) {
	    return false;
	  }
	
	  return expected.call({}, actual) === true;
	}
	
	function _tryBlock(block) {
	  var error;
	  try {
	    block();
	  } catch (e) {
	    error = e;
	  }
	  return error;
	}
	
	function _throws(shouldThrow, block, expected, message) {
	  var actual;
	
	  if (typeof block !== 'function') {
	    throw new TypeError('"block" argument must be a function');
	  }
	
	  if (typeof expected === 'string') {
	    message = expected;
	    expected = null;
	  }
	
	  actual = _tryBlock(block);
	
	  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') + (message ? ' ' + message : '.');
	
	  if (shouldThrow && !actual) {
	    fail(actual, expected, 'Missing expected exception' + message);
	  }
	
	  var userProvidedMessage = typeof message === 'string';
	  var isUnwantedException = !shouldThrow && util.isError(actual);
	  var isUnexpectedException = !shouldThrow && actual && !expected;
	
	  if (isUnwantedException && userProvidedMessage && expectedException(actual, expected) || isUnexpectedException) {
	    fail(actual, expected, 'Got unwanted exception' + message);
	  }
	
	  if (shouldThrow && actual && expected && !expectedException(actual, expected) || !shouldThrow && actual) {
	    throw actual;
	  }
	}
	
	// 11. Expected to throw an error:
	// assert.throws(block, Error_opt, message_opt);
	
	assert.throws = function (block, /*optional*/error, /*optional*/message) {
	  _throws(true, block, error, message);
	};
	
	// EXTENSION! This is annoying to write outside this module.
	assert.doesNotThrow = function (block, /*optional*/error, /*optional*/message) {
	  _throws(false, block, error, message);
	};
	
	assert.ifError = function (err) {
	  if (err) throw err;
	};
	
	var objectKeys = Object.keys || function (obj) {
	  var keys = [];
	  for (var key in obj) {
	    if (hasOwn.call(obj, key)) keys.push(key);
	  }
	  return keys;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.
	
	var formatRegExp = /%[sdj%]/g;
	exports.format = function (f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }
	
	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function (x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s':
	        return String(args[i++]);
	      case '%d':
	        return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};
	
	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function (fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function () {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }
	
	  if (process.noDeprecation === true) {
	    return fn;
	  }
	
	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }
	
	  return deprecated;
	};
	
	var debugs = {};
	var debugEnviron;
	exports.debuglog = function (set) {
	  if (isUndefined(debugEnviron)) debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function () {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function () {};
	    }
	  }
	  return debugs[set];
	};
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;
	
	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold': [1, 22],
	  'italic': [3, 23],
	  'underline': [4, 24],
	  'inverse': [7, 27],
	  'white': [37, 39],
	  'grey': [90, 39],
	  'black': [30, 39],
	  'blue': [34, 39],
	  'cyan': [36, 39],
	  'green': [32, 39],
	  'magenta': [35, 39],
	  'red': [31, 39],
	  'yellow': [33, 39]
	};
	
	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};
	
	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];
	
	  if (style) {
	    return '\x1B[' + inspect.colors[style][0] + 'm' + str + '\x1B[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}
	
	function stylizeNoColor(str, styleType) {
	  return str;
	}
	
	function arrayToHash(array) {
	  var hash = {};
	
	  array.forEach(function (val, idx) {
	    hash[val] = true;
	  });
	
	  return hash;
	}
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect && value && isFunction(value.inspect) &&
	  // Filter out the util module, it's inspect function is special
	  value.inspect !== exports.inspect &&
	  // Also filter out any prototype objects using the circular check.
	  !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);
	
	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }
	
	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }
	
	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '',
	      array = false,
	      braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function (key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	function formatPrimitive(ctx, value) {
	  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value)) return ctx.stylize('' + value, 'number');
	  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value)) return ctx.stylize('null', 'null');
	}
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function (key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
	    }
	  });
	  return output;
	}
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function (line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function (line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function (prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;
	
	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;
	
	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;
	
	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;
	
	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;
	
	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;
	
	function isSymbol(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol';
	}
	exports.isSymbol = isSymbol;
	
	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;
	
	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;
	
	function isObject(arg) {
	  return (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null;
	}
	exports.isObject = isObject;
	
	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;
	
	function isError(e) {
	  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;
	
	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;
	
	function isPrimitive(arg) {
	  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'symbol' || // ES6 symbol
	  typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;
	
	exports.isBuffer = __webpack_require__(24);
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}
	
	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}
	
	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	
	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}
	
	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function () {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};
	
	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(25);
	
	exports._extend = function (origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;
	
	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};
	
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(23)))

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	module.exports = function isBuffer(arg) {
	  return arg && (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && typeof arg.copy === 'function' && typeof arg.fill === 'function' && typeof arg.readUInt8 === 'function';
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    var TempCtor = function TempCtor() {};
	    TempCtor.prototype = superCtor.prototype;
	    ctor.prototype = new TempCtor();
	    ctor.prototype.constructor = ctor;
	  };
	}

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _assert = __webpack_require__(21);
	
	var _assert2 = _interopRequireDefault(_assert);
	
	var _gameData = __webpack_require__(4);
	
	var _gameData2 = _interopRequireDefault(_gameData);
	
	var _gameData3 = __webpack_require__(4);
	
	var _timer = __webpack_require__(17);
	
	var _timer2 = _interopRequireDefault(_timer);
	
	var _state = __webpack_require__(16);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var testState = {
	  currentRoundID: 0,
	  rounds: [{
	    questions: _gameData2.default.questions,
	    currentTask: 5,
	    lives: 2,
	    stats: [_gameData3.statsType.CORRECT, _gameData3.statsType.SLOW],
	    result: [{
	      time: 23,
	      answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.SLOW
	    }, {
	      time: 13,
	      answer: [_gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PHOTO],
	      isCorrect: false,
	      statsType: _gameData3.statsType.WRONG
	    }, {
	      time: 5,
	      answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.FAST
	    }, {
	      time: 15,
	      answer: [_gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.CORRECT
	    }, {
	      time: 23,
	      answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.SLOW
	    }, {
	      time: 13,
	      answer: [_gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PHOTO],
	      isCorrect: false,
	      statsType: _gameData3.statsType.WRONG
	    }, {
	      time: 5,
	      answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.FAST
	    }, {
	      time: 15,
	      answer: [_gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.CORRECT
	    }, {
	      time: 23,
	      answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	      isCorrect: true,
	      statsType: _gameData3.statsType.SLOW
	    }, {
	      time: 13,
	      answer: [_gameData3.ImageType.PAINT],
	      realAnswer: [_gameData3.ImageType.PHOTO],
	      isCorrect: false,
	      statsType: _gameData3.statsType.WRONG
	    }],
	
	    isWin: true,
	    isCorrect: null,
	    totalPoints: null,
	    fastBonuses: null,
	    livesBonuses: null,
	    slowFine: null
	  }]
	}; /**
	    * Created by yulia on 12.12.2016.
	    */
	
	var testRound = testState.rounds[0];
	var testResult = testRound.result[0];
	var testTimer = _timer2.default;
	testTimer.currentTime = 23;
	
	describe('Game state', function () {
	
	  describe('Lives', function () {
	    describe('setLives', function () {
	      it('sets the number of lives equal 2', function () {
	        _assert2.default.equal((0, _state.setLives)(testRound, 2).lives, 2);
	      });
	      it('are clean', function () {
	        var oldState = Object.assign({}, testRound);
	        (0, _state.setLives)(oldState, 1);
	        _assert2.default.deepEqual(oldState, testRound);
	      });
	    });
	    describe('getLives', function () {
	      it('get the number of lives', function () {
	        var test = Object.assign({}, testRound, {
	          lives: 3
	        });
	        _assert2.default.equal((0, _state.getLives)(test), 3);
	      });
	    });
	    describe('decreaseLives', function () {
	      it('reduces the number of lives', function () {
	        _assert2.default.equal(testRound.lives - (0, _state.decreaseLives)(testRound).lives, 1);
	      });
	      it('are clean', function () {
	        var oldState = Object.assign({}, testRound);
	        (0, _state.decreaseLives)(oldState);
	        _assert2.default.deepEqual(oldState, testRound);
	      });
	    });
	    describe('errors', function () {
	      it('setLives throws an error if unacceptable value passed', function () {
	        _assert2.default.throws(function () {
	          (0, _state.setLives)(testRound, -1);
	        });
	        _assert2.default.throws(function () {
	          (0, _state.setLives)(testRound, 4);
	        });
	      });
	      it('decreaseLives throws an error if it cant be decreased', function () {
	        var test = Object.assign({}, testRound, {
	          lives: -1
	        });
	        _assert2.default.throws(function () {
	          (0, _state.decreaseLives)(test);
	        });
	      });
	    });
	  });
	
	  describe('Stats', function () {
	    describe('setStats', function () {
	      it('push new value of stats', function () {
	        var test = (0, _state.setStats)(testRound, _gameData3.statsType.WRONG);
	        var length = test.stats.length;
	        _assert2.default.equal(test.stats[length - 1], _gameData3.statsType.WRONG);
	      });
	      it('are clean', function () {
	        var oldState = Object.assign({}, testRound);
	        (0, _state.setStats)(oldState, _gameData3.statsType.WRONG);
	        _assert2.default.deepEqual(oldState, testRound);
	      });
	    });
	  });
	
	  describe('Current task', function () {
	    describe('setCurrent', function () {
	      it('sets the current task equal 2', function () {
	        _assert2.default.equal((0, _state.setCurrent)(testRound, 8).currentTask, 8);
	      });
	      it('are clean', function () {
	        var oldState = Object.assign({}, testRound);
	        (0, _state.setCurrent)(oldState, 8);
	        _assert2.default.deepEqual(oldState, testRound);
	      });
	    });
	    describe('getCurrent', function () {
	      it('get current task', function () {
	        var test = Object.assign({}, testRound, {
	          currentTask: 8
	        });
	        _assert2.default.equal((0, _state.getCurrent)(test), 8);
	      });
	    });
	    describe('increaseCurrent', function () {
	      it('increase the number of current task', function () {
	        _assert2.default.equal((0, _state.increaseCurrent)(testRound).currentTask - testRound.currentTask, 1);
	      });
	      it('are clean', function () {
	        var oldState = Object.assign({}, testRound);
	        (0, _state.increaseCurrent)(oldState);
	        _assert2.default.deepEqual(oldState, testRound);
	      });
	    });
	    describe('errors', function () {
	      it('setCurrent throws an error if unacceptable value passed', function () {
	        _assert2.default.throws(function () {
	          (0, _state.setCurrent)(testRound, -1);
	        });
	        _assert2.default.throws(function () {
	          (0, _state.setCurrent)(testRound, 15);
	        });
	      });
	      it('increaseCurrent throws an error if it cant be increased', function () {
	        var test = Object.assign({}, testRound, {
	          currentTask: 9
	        });
	        _assert2.default.throws(function () {
	          (0, _state.increaseCurrent)(test);
	        });
	      });
	    });
	  });
	
	  describe('Total', function () {
	    describe('countTotal', function () {
	      it('counts total points', function () {
	        _assert2.default.equal((0, _state.countTotal)(testState).rounds[0].totalPoints, 750);
	      });
	      it('counts total lives bonuses', function () {
	        _assert2.default.equal((0, _state.countTotal)(testState).rounds[0].livesBonuses, 2);
	      });
	      it('counts total fast bonuses', function () {
	        _assert2.default.equal((0, _state.countTotal)(testState).rounds[0].fastBonuses, 2);
	      });
	      it('counts total fines', function () {
	        _assert2.default.equal((0, _state.countTotal)(testState).rounds[0].slowFine, 3);
	      });
	      it('are clean', function () {
	        var oldState = Object.assign({}, testState);
	        (0, _state.countTotal)(oldState, 1);
	        _assert2.default.deepEqual(oldState, testState);
	      });
	    });
	  });
	
	  describe('Result', function () {
	
	    describe('Time', function () {
	      describe('setTime', function () {
	        it('sets the time in seconds', function () {
	          _assert2.default.equal((0, _state.setTime)(testResult, 25).time, 25);
	        });
	        it('are clean', function () {
	          var oldState = Object.assign({}, testResult);
	          (0, _state.setTime)(oldState, 8);
	          _assert2.default.deepEqual(oldState, testResult);
	        });
	      });
	      describe('getTime', function () {
	        it('get tasks time in seconds', function () {
	          var test = Object.assign({}, testResult, {
	            time: 12
	          });
	          _assert2.default.equal((0, _state.getTime)(test), 12);
	        });
	      });
	      describe('errors', function () {
	        it('setTime throws an error if unacceptable value passed', function () {
	          _assert2.default.throws(function () {
	            (0, _state.setTime)(testRound, -1);
	          });
	          _assert2.default.throws(function () {
	            (0, _state.setTime)(testRound, 40);
	          });
	        });
	      });
	    });
	
	    describe('Correct', function () {
	      describe('determineCorrect', function () {
	        it('determine a correct answer of first type game', function () {
	          var test = Object.assign({}, testResult, {
	            answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT],
	            realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT]
	          });
	          _assert2.default.equal((0, _state.determineCorrect)(test).isCorrect, true);
	        });
	        it('determine a correct answer of second type game', function () {
	          var test = Object.assign({}, testResult, {
	            answer: [_gameData3.ImageType.PAINT],
	            realAnswer: [_gameData3.ImageType.PHOTO]
	          });
	          _assert2.default.equal((0, _state.determineCorrect)(test).isCorrect, false);
	        });
	        it('determine a correct answer of third type game', function () {
	          var test = Object.assign({}, testResult, {
	            answer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT, _gameData3.ImageType.PHOTO],
	            realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT]
	          });
	          _assert2.default.equal((0, _state.determineCorrect)(test).isCorrect, false);
	        });
	        it('determine a correct answer if user did not answer', function () {
	          var test = Object.assign({}, testResult, {
	            answer: [],
	            realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT]
	          });
	          _assert2.default.equal((0, _state.determineCorrect)(test).isCorrect, false);
	        });
	        it('determine a correct answer if user answer 1 quest from 2', function () {
	          var test = Object.assign({}, testResult, {
	            answer: [_gameData3.ImageType.PAINT],
	            realAnswer: [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT]
	          });
	          _assert2.default.equal((0, _state.determineCorrect)(test).isCorrect, false);
	        });
	        it('are clean', function () {
	          var oldState = Object.assign({}, testResult);
	          (0, _state.determineCorrect)(oldState);
	          _assert2.default.deepEqual(oldState, testResult);
	        });
	      });
	      describe('getCorrect', function () {
	        it('get correctness of user answer', function () {
	          var test = Object.assign({}, testResult, {
	            isCorrect: true
	          });
	          _assert2.default.equal((0, _state.getCorrectness)(test), true);
	        });
	      });
	    });
	
	    describe('Stats', function () {
	      describe('determineAnswerType', function () {
	        it('determine a correct answer type WRONG', function () {
	          var test = Object.assign({}, testResult, {
	            time: 20,
	            isCorrect: false,
	            statsType: null
	          });
	          _assert2.default.equal((0, _state.determineAnswerType)(test).statsType, _gameData3.statsType.WRONG);
	        });
	        it('determine a correct answer type CORRECT', function () {
	          var test = Object.assign({}, testResult, {
	            time: 15,
	            isCorrect: true,
	            statsType: null
	          });
	          _assert2.default.equal((0, _state.determineAnswerType)(test).statsType, _gameData3.statsType.CORRECT);
	        });
	        it('determine a correct answer type SLOW', function () {
	          var test = Object.assign({}, testResult, {
	            time: 5,
	            isCorrect: true,
	            statsType: null
	          });
	          _assert2.default.equal((0, _state.determineAnswerType)(test).statsType, _gameData3.statsType.SLOW);
	        });
	        it('determine a correct answer type FAST', function () {
	          var test = Object.assign({}, testResult, {
	            time: 25,
	            isCorrect: true,
	            statsType: null
	          });
	          _assert2.default.equal((0, _state.determineAnswerType)(test).statsType, _gameData3.statsType.FAST);
	        });
	        it('determine a correct answer type UNKNOWN', function () {
	          var test = Object.assign({}, testResult, {
	            isCorrect: null,
	            statsType: null
	          });
	          _assert2.default.equal((0, _state.determineAnswerType)(test).statsType, _gameData3.statsType.UNKNOWN);
	        });
	        it('are clean', function () {
	          var oldState = Object.assign({}, testResult);
	          (0, _state.determineAnswerType)(oldState);
	          _assert2.default.deepEqual(oldState, testResult);
	        });
	      });
	      describe('getAnswerType', function () {
	        it('get answer type', function () {
	          var test = Object.assign({}, testRound, {
	            statsType: _gameData3.statsType.WRONG
	          });
	          _assert2.default.equal((0, _state.getAnswerType)(test), _gameData3.statsType.WRONG);
	        });
	      });
	    });
	
	    describe('Answer', function () {
	      describe('setUserAnswer', function () {
	        it('sets user answer', function () {
	          _assert2.default.deepEqual((0, _state.setUserAnswer)(testResult, [_gameData3.ImageType.PAINT]).answer, [_gameData3.ImageType.PAINT]);
	        });
	        it('are clean', function () {
	          var oldState = Object.assign({}, testRound);
	          (0, _state.setUserAnswer)(oldState, 1);
	          _assert2.default.deepEqual(oldState, testRound);
	        });
	      });
	
	      describe('setRealAnswer', function () {
	        it('sets real answer', function () {
	          _assert2.default.deepEqual((0, _state.setRealAnswer)(testResult, [_gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT]).realAnswer, [_gameData3.ImageType.PHOTO, _gameData3.ImageType.PAINT]);
	        });
	        it('are clean', function () {
	          var oldState = Object.assign({}, testRound);
	          (0, _state.setRealAnswer)(oldState, 1);
	          _assert2.default.deepEqual(oldState, testRound);
	        });
	      });
	    });
	
	    describe('setResult', function () {
	      it('set quest result', function () {
	        var current = testRound.currentTask;
	        _assert2.default.equal((0, _state.setResult)(testState, [_gameData3.ImageType.PAINT, _gameData3.ImageType.PAINT], 15).rounds[0].result[current].statsType, _gameData3.statsType.WRONG);
	      });
	    });
	  });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map