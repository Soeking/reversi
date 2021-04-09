(function (_, Kotlin, $module$kotlin_wrappers_kotlin_extensions_jsLegacy, $module$redux, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var clone = $module$kotlin_wrappers_kotlin_extensions_jsLegacy.kotlinext.js.clone_issdgt$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.json.Json_x26noe$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function defaultJson$lambda($receiver) {
    $receiver.isLenient = true;
    $receiver.ignoreUnknownKeys = true;
    $receiver.allowSpecialFloatingPointValues = true;
    $receiver.useArrayPolymorphism = true;
    return Unit;
  }
  var defaultJson;
  $$importsForInline$$['kotlin-wrappers-kotlin-extensions-jsLegacy'] = $module$kotlin_wrappers_kotlin_extensions_jsLegacy;
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy;
  defaultJson = Json(void 0, defaultJson$lambda);
  return _;
}(module.exports, require('kotlin'), require('kotlin-wrappers-kotlin-extensions-jsLegacy'), require('redux'), require('kotlinx-serialization-kotlinx-serialization-core-jsLegacy')));

//# sourceMappingURL=kotlin-wrappers-kotlin-redux-jsLegacy.js.map
