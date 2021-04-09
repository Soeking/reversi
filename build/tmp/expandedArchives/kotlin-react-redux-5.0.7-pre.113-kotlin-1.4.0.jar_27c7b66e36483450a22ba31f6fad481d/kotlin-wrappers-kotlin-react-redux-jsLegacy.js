(function (_, Kotlin, $module$react_redux, $module$kotlin_wrappers_kotlin_react_jsLegacy, $module$kotlin_wrappers_kotlin_extensions_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Provider = $module$react_redux.Provider;
  var getKClass = Kotlin.getKClass;
  var connect = $module$react_redux.connect;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  function provider$lambda(closure$store, closure$handler) {
    return function ($receiver) {
      $receiver.attrs.store = closure$store;
      closure$handler($receiver);
      return Unit;
    };
  }
  function provider($receiver, store, handler) {
    return $receiver.child_ssazr1$(getKClass(Provider), provider$lambda(store, handler));
  }
  function rConnect$lambda($receiver) {
    return Unit;
  }
  function rConnect$lambda$lambda(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect(options) {
    if (options === void 0)
      options = rConnect$lambda;
    var tmp$ = undefined;
    var tmp$_0 = undefined;
    var tmp$_1 = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(tmp$, tmp$_0, tmp$_1, $receiver);
  }
  function rConnect$lambda_0($receiver) {
    return Unit;
  }
  function rConnect$lambda_1(closure$mapStateToProps) {
    return function (state, ownProps) {
      var $receiver = {};
      closure$mapStateToProps($receiver, state, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_0(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_0(mapStateToProps, options) {
    if (options === void 0)
      options = rConnect$lambda_0;
    var tmp$ = undefined;
    var tmp$_0 = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_0;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(rConnect$lambda_1(mapStateToProps), tmp$, tmp$_0, $receiver);
  }
  function rConnect$lambda_2($receiver) {
    return Unit;
  }
  function rConnect$lambda_3(closure$mapDispatchToProps) {
    return function (dispatch, ownProps) {
      var $receiver = {};
      closure$mapDispatchToProps($receiver, dispatch, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_1(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_1(mapDispatchToProps, options) {
    if (options === void 0)
      options = rConnect$lambda_2;
    var tmp$ = undefined;
    var tmp$_0 = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_1;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(tmp$, rConnect$lambda_3(mapDispatchToProps), tmp$_0, $receiver);
  }
  function rConnect$lambda_4($receiver) {
    return Unit;
  }
  function rConnect$lambda_5(closure$mapStateToProps) {
    return function (state, ownProps) {
      var $receiver = {};
      closure$mapStateToProps($receiver, state, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda_6(closure$mapDispatchToProps) {
    return function (dispatch, ownProps) {
      var $receiver = {};
      closure$mapDispatchToProps($receiver, dispatch, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_2(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_2(mapStateToProps, mapDispatchToProps, options) {
    if (options === void 0)
      options = rConnect$lambda_4;
    var tmp$ = undefined;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_2;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(rConnect$lambda_5(mapStateToProps), rConnect$lambda_6(mapDispatchToProps), tmp$, $receiver);
  }
  function rConnect$lambda_7($receiver) {
    return Unit;
  }
  function rConnect$lambda_8(closure$mapStateToProps) {
    return function (state, ownProps) {
      var $receiver = {};
      closure$mapStateToProps($receiver, state, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda_9(closure$mapDispatchToProps) {
    return function (dispatch, ownProps) {
      var $receiver = {};
      closure$mapDispatchToProps($receiver, dispatch, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda_10(closure$mergeProps) {
    return function (stateProps, dispatchProps, ownProps) {
      var $receiver = {};
      closure$mergeProps($receiver, stateProps, dispatchProps, ownProps);
      return $receiver;
    };
  }
  function rConnect$lambda$lambda_3(name) {
    return 'RConnect(' + name + ')';
  }
  function rConnect_3(mapStateToProps, mapDispatchToProps, mergeProps, options) {
    if (options === void 0)
      options = rConnect$lambda_7;
    var $receiver = {};
    $receiver.getDisplayName = rConnect$lambda$lambda_3;
    $receiver.methodName = 'rConnect';
    options($receiver);
    return connect(rConnect$lambda_8(mapStateToProps), rConnect$lambda_9(mapDispatchToProps), rConnect$lambda_10(mergeProps), $receiver);
  }
  function DispatchProps() {
  }
  DispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DispatchProps',
    interfaces: []
  };
  $$importsForInline$$['kotlin-wrappers-kotlin-react-jsLegacy'] = $module$kotlin_wrappers_kotlin_react_jsLegacy;
  var package$react = _.react || (_.react = {});
  var package$redux = package$react.redux || (package$react.redux = {});
  package$redux.provider_6c40e8$ = provider;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  package$redux.rConnect_p2uqna$ = rConnect;
  package$redux.rConnect_hfg8n2$ = rConnect_0;
  package$redux.rConnect_yelmmk$ = rConnect_1;
  package$redux.rConnect_aavpjk$ = rConnect_2;
  package$redux.rConnect_i7tzgj$ = rConnect_3;
  package$redux.DispatchProps = DispatchProps;
  Kotlin.defineModule('kotlin-wrappers-kotlin-react-redux-jsLegacy', _);
  return _;
}(module.exports, require('kotlin'), require('react-redux'), require('kotlin-wrappers-kotlin-react-jsLegacy'), require('kotlin-wrappers-kotlin-extensions-jsLegacy')));
