(function (_, Kotlin, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$redux, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var combineReducers = $module$redux.combineReducers;
  var bindActionCreators = $module$redux.bindActionCreators;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var clone = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.clone_issdgt$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.json.Json_x26noe$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function get_state($receiver) {
    return $receiver.getState();
  }
  function combineReducers_0(reducers) {
    var $receiver = {};
    var tmp$;
    tmp$ = reducers.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver[element.key] = element.value;
    }
    return combineReducers($receiver);
  }
  function bindActionCreators_0(actionCreators, dispatch) {
    var result = LinkedHashMap_init();
    var $receiver = {};
    var tmp$;
    tmp$ = actionCreators.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver[element.key] = element.value;
    }
    var $receiver_0 = bindActionCreators($receiver, dispatch);
    var $receiver_1 = Object.keys($receiver_0);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== $receiver_1.length; ++tmp$_0) {
      var element_0 = $receiver_1[tmp$_0];
      var value = $receiver_0[element_0];
      result.put_xwzc9p$(element_0, value);
    }
    return result;
  }
  function rEnhancer$lambda$lambda$wrapperReducer$lambda(closure$reducer) {
    return function (state, action) {
      return closure$reducer(state, action.action);
    };
  }
  function rEnhancer$lambda$lambda$wrapperReducer(reducer) {
    return rEnhancer$lambda$lambda$wrapperReducer$lambda(reducer);
  }
  function rEnhancer$lambda$lambda$lambda$lambda(closure$store) {
    return function (action) {
      var tmp$ = closure$store;
      var $receiver = {};
      $receiver.type = Kotlin.getKClassFromExpression(action).simpleName;
      $receiver.action = action;
      var result = tmp$.dispatch($receiver);
      return result;
    };
  }
  function rEnhancer$lambda$lambda$lambda$lambda_0(closure$store, closure$wrapperReducer) {
    return function (nextReducer) {
      closure$store.replaceReducer(closure$wrapperReducer(nextReducer));
      return Unit;
    };
  }
  function rEnhancer$lambda$lambda(closure$next) {
    return function (reducer, initialState) {
      var wrapperReducer = rEnhancer$lambda$lambda$wrapperReducer;
      var store = closure$next(wrapperReducer(reducer), initialState);
      var $receiver = {};
      var $receiver_0 = clone(Object.assign($receiver, store));
      $receiver_0.dispatch = rEnhancer$lambda$lambda$lambda$lambda(store);
      $receiver_0.replaceReducer = rEnhancer$lambda$lambda$lambda$lambda_0(store, wrapperReducer);
      return $receiver_0;
    };
  }
  function rEnhancer$lambda(next) {
    return rEnhancer$lambda$lambda(next);
  }
  function rEnhancer() {
    return rEnhancer$lambda;
  }
  function WrapperAction() {
  }
  WrapperAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WrapperAction',
    interfaces: []
  };
  function RAction() {
  }
  RAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RAction',
    interfaces: []
  };
  function defaultJson$lambda($receiver) {
    $receiver.isLenient = true;
    $receiver.ignoreUnknownKeys = true;
    $receiver.allowSpecialFloatingPointValues = true;
    $receiver.useArrayPolymorphism = true;
    return Unit;
  }
  var defaultJson;
  var serializeAction = defineInlineFunction('kotlin-wrappers-kotlin-redux-jsLegacy.redux.serializeAction_t1gu5c$', wrapFunction(function () {
    var redux = _.redux;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var JsonObject = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.json.JsonObject;
    var throwCCE = Kotlin.throwCCE;
    var getKClass = Kotlin.getKClass;
    var JsonPrimitive = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.json.JsonPrimitive_pdl1vj$;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var plus = Kotlin.kotlin.collections.plus_e8164j$;
    var createKType = Kotlin.createKType;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    return function (A_0, isA, action) {
      var tmp$;
      var $receiver = redux.defaultJson;
      var tmp$_0;
      var obj = Kotlin.isType(tmp$ = $receiver.encodeToJsonElement_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, getReifiedTypeParameterKType(A_0)), KSerializer) ? tmp$_0 : throwCCE(), action), JsonObject) ? tmp$ : throwCCE();
      obj = new JsonObject(plus(obj, to('type', JsonPrimitive(getKClass(A_0).simpleName))));
      var $receiver_0 = redux.defaultJson;
      var value = obj;
      var tmp$_1;
      return $receiver_0.encodeToString_tf03ej$(Kotlin.isType(tmp$_1 = serializer($receiver_0.serializersModule, createKType(getKClass(JsonObject), [], false)), KSerializer) ? tmp$_1 : throwCCE(), value);
    };
  }));
  var deserializeAction = defineInlineFunction('kotlin-wrappers-kotlin-redux-jsLegacy.redux.deserializeAction_g7azbc$', wrapFunction(function () {
    var redux = _.redux;
    var JsonObject = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.json.JsonObject;
    var throwCCE = Kotlin.throwCCE;
    var get_jsonPrimitive = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.json.get_jsonPrimitive_u3sd3g$;
    var get_contentOrNull = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.json.get_contentOrNull_59esu7$;
    var getKClass = Kotlin.getKClass;
    var equals = Kotlin.equals;
    var getReifiedTypeParameterKType = Kotlin.getReifiedTypeParameterKType;
    var markKTypeNullable = Kotlin.markKTypeNullable;
    var serializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.serializer_ca95z9$;
    var KSerializer = _.$$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'].kotlinx.serialization.KSerializer;
    return function (A_0, isA, action) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      var obj = Kotlin.isType(tmp$ = redux.defaultJson.parseToJsonElement_61zpoe$(action), JsonObject) ? tmp$ : throwCCE();
      var type = (tmp$_1 = (tmp$_0 = obj.get_11rb$('type')) != null ? get_jsonPrimitive(tmp$_0) : null) != null ? get_contentOrNull(tmp$_1) : null;
      if (equals(type, getKClass(A_0).simpleName)) {
        var $receiver = redux.defaultJson;
        var tmp$_3;
        tmp$_2 = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_3 = serializer($receiver.serializersModule, markKTypeNullable(getReifiedTypeParameterKType(A_0))), KSerializer) ? tmp$_3 : throwCCE(), action);
      } else {
        tmp$_2 = null;
      }
      return tmp$_2;
    };
  }));
  var package$redux = _.redux || (_.redux = {});
  package$redux.get_state_rw1iam$ = get_state;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$redux.combineReducers_ip98tz$ = combineReducers_0;
  package$redux.bindActionCreators_sqanl0$ = bindActionCreators_0;
  package$redux.rEnhancer_287e2$ = rEnhancer;
  package$redux.WrapperAction = WrapperAction;
  package$redux.RAction = RAction;
  Object.defineProperty(package$redux, 'defaultJson', {
    get: function () {
      return defaultJson;
    }
  });
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy;
  defaultJson = Json(void 0, defaultJson$lambda);
  Kotlin.defineModule('kotlin-wrappers-kotlin-redux-jsLegacy', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('redux'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy')));
