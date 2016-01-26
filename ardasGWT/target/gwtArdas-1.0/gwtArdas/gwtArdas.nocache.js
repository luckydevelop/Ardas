function gwtArdas(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.gwtArdas=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'gwtArdas', $intern_5 = 'startup', $intern_6 = 'DUMMY', $intern_7 = 0, $intern_8 = 1, $intern_9 = 'iframe', $intern_10 = 'javascript:""', $intern_11 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_12 = ' top: -1000px;', $intern_13 = 'CSS1Compat', $intern_14 = '<!doctype html>', $intern_15 = '', $intern_16 = '<html><head><\/head><body><\/body><\/html>', $intern_17 = 'undefined', $intern_18 = 'DOMContentLoaded', $intern_19 = 50, $intern_20 = 'script', $intern_21 = 'javascript', $intern_22 = 'Failed to load ', $intern_23 = 'moduleStartup', $intern_24 = 'scriptTagAdded', $intern_25 = 'moduleRequested', $intern_26 = 'meta', $intern_27 = 'name', $intern_28 = 'gwtArdas::', $intern_29 = '::', $intern_30 = 'gwt:property', $intern_31 = 'content', $intern_32 = '=', $intern_33 = 'gwt:onPropertyErrorFn', $intern_34 = 'Bad handler "', $intern_35 = '" for "gwt:onPropertyErrorFn"', $intern_36 = 'gwt:onLoadErrorFn', $intern_37 = '" for "gwt:onLoadErrorFn"', $intern_38 = '#', $intern_39 = '?', $intern_40 = '/', $intern_41 = 'img', $intern_42 = 'clear.cache.gif', $intern_43 = 'baseUrl', $intern_44 = 'gwtArdas.nocache.js', $intern_45 = 'base', $intern_46 = '//', $intern_47 = 'locale', $intern_48 = 'default', $intern_49 = 'locale=', $intern_50 = 7, $intern_51 = '&', $intern_52 = '__gwt_Locale', $intern_53 = '_', $intern_54 = 'Unexpected exception in locale detection, using default: ', $intern_55 = 2, $intern_56 = 'user.agent', $intern_57 = 'webkit', $intern_58 = 'safari', $intern_59 = 'msie', $intern_60 = 10, $intern_61 = 11, $intern_62 = 'ie10', $intern_63 = 9, $intern_64 = 'ie9', $intern_65 = 8, $intern_66 = 'ie8', $intern_67 = 'gecko', $intern_68 = 'gecko1_8', $intern_69 = 3, $intern_70 = 4, $intern_71 = 'selectingPermutation', $intern_72 = 'gwtArdas.devmode.js', $intern_73 = 'en', $intern_74 = '02D9F32BB245490EDC183F09BDCDE243', $intern_75 = 'ru', $intern_76 = '0F7DDA523F046A466414A0D7DEF32F77', $intern_77 = '14ADF35AE0303C541C6ABC8039D3F753', $intern_78 = '1CC096B62DBCE8F6ADCF4A74429F02EA', $intern_79 = '393D34FB20A88EBC3F41A32A031740A3', $intern_80 = '4E559A0D0031A99AB2F5C7FB43F11CD1', $intern_81 = '4EA6A93A2B285F670216735C18F25CC4', $intern_82 = '5E4498B3F50B70CEB824F492C5CB7847', $intern_83 = '6799EFC5553D2DDB0EF31F99C67B9F7F', $intern_84 = '6FB5DE0F98D0DC1810B3C948803968FA', $intern_85 = 'B1804F16940D4F53DEAF755CA36206D7', $intern_86 = 'BE57C6DD301573455A0B8B4FB3940A66', $intern_87 = 'CD24CBEAE2C5E971C186A1120A62511E', $intern_88 = 'D5F29C71A055452DF3FDA166BCF4DB0E', $intern_89 = 'E558AE1FEB4CF1B8768AA8F6DF8AE66B', $intern_90 = ':', $intern_91 = '.cache.js', $intern_92 = 'loadExternalRefs', $intern_93 = 'end', $intern_94 = 'http:', $intern_95 = 'file:', $intern_96 = '_gwt_dummy_', $intern_97 = '__gwtDevModeHook:gwtArdas', $intern_98 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_99 = ':moduleBase', $intern_100 = 'head';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  gwtArdas.__sendStats = sendStats;
  gwtArdas.__moduleName = $intern_4;
  gwtArdas.__errFn = null;
  gwtArdas.__moduleBase = $intern_6;
  gwtArdas.__softPermutationId = $intern_7;
  gwtArdas.__computePropValue = null;
  gwtArdas.__getPropMap = null;
  gwtArdas.__installRunAsyncCode = function(){
  }
  ;
  gwtArdas.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  gwtArdas.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  gwtArdas.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  gwtArdas.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules[$intern_4].bindings;
    activeModules[$intern_4].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[gwtArdas.__softPermutationId];
      for (var i = $intern_7; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[$intern_7]] = pair[$intern_8];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_9);
    scriptFrame.src = $intern_10;
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_11 + $intern_12;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentDocument;
    if (!frameDoc) {
      frameDoc = scriptFrame.contentWindow.document;
    }
    frameDoc.open();
    var doctype = document.compatMode == $intern_13?$intern_14:$intern_15;
    frameDoc.write(doctype + $intern_16);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_17) {
          return typeof $doc.body != $intern_17 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function onBodyDone(){
        if (!bodyDone) {
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_18, onBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_18, onBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        if (isBodyLoaded()) {
          onBodyDone();
        }
      }
      , $intern_19);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement($intern_20);
      script.language = $intern_21;
      script.src = code_0;
      if (gwtArdas.__errFn) {
        script.onerror = function(){
          gwtArdas.__errFn($intern_4, new Error($intern_22 + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats($intern_23, $intern_24);
    }

    sendStats($intern_23, $intern_25);
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  gwtArdas.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  gwtArdas.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement($intern_20);
    script.language = $intern_21;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_26);
    for (var i = $intern_7, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_27), content;
      if (name_0) {
        name_0 = name_0.replace($intern_28, $intern_15);
        if (name_0.indexOf($intern_29) >= $intern_7) {
          continue;
        }
        if (name_0 == $intern_30) {
          content = meta.getAttribute($intern_31);
          if (content) {
            var value_0, eq = content.indexOf($intern_32);
            if (eq >= $intern_7) {
              name_0 = content.substring($intern_7, eq);
              value_0 = content.substring(eq + $intern_8);
            }
             else {
              name_0 = content;
              value_0 = $intern_15;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_33) {
          content = meta.getAttribute($intern_31);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_34 + content + $intern_35);
            }
          }
        }
         else if (name_0 == $intern_36) {
          content = meta.getAttribute($intern_31);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_34 + content + $intern_37);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    gwtArdas.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_38);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_39);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_40, Math.min(queryIndex, hashIndex));
      return slashIndex >= $intern_7?path.substring($intern_7, slashIndex + $intern_8):$intern_15;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_41);
        img.src = url_0 + $intern_42;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_43);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_15;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_20);
      for (var i = $intern_7; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_44) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_15;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_45);
      if (baseElements.length > $intern_7) {
        return baseElements[baseElements.length - $intern_8].href;
      }
      return $intern_15;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_46 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_15) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_15) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_15 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return gwtArdas.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = $intern_7;
    function unflattenKeylistIntoAnswers(propValArray, value_0){
      var answer = answers;
      for (var i = $intern_7, n = propValArray.length - $intern_8; i < n; ++i) {
        answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
      }
      answer[propValArray[n]] = value_0;
    }

    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    providers[$intern_47] = function(){
      var locale = null;
      var rtlocale = $intern_48;
      try {
        if (!locale) {
          var queryParam = location.search;
          var qpStart = queryParam.indexOf($intern_49);
          if (qpStart >= $intern_7) {
            var value_0 = queryParam.substring(qpStart + $intern_50);
            var end = queryParam.indexOf($intern_51, qpStart);
            if (end < $intern_7) {
              end = queryParam.length;
            }
            locale = queryParam.substring(qpStart + $intern_50, end);
          }
        }
        if (!locale) {
          locale = __gwt_getMetaProperty($intern_47);
        }
        if (!locale) {
          locale = $wnd[$intern_52];
        }
        if (locale) {
          rtlocale = locale;
        }
        while (locale && !__gwt_isKnownPropertyValue($intern_47, locale)) {
          var lastIndex = locale.lastIndexOf($intern_53);
          if (lastIndex < $intern_7) {
            locale = null;
            break;
          }
          locale = locale.substring($intern_7, lastIndex);
        }
      }
       catch (e) {
        alert($intern_54 + e);
      }
      $wnd[$intern_52] = rtlocale;
      return locale || $intern_48;
    }
    ;
    values[$intern_47] = {'default':$intern_7, en:$intern_8, ru:$intern_55};
    providers[$intern_56] = function(){
      var ua = navigator.userAgent.toLowerCase();
      var docMode = $doc.documentMode;
      if (function(){
        return ua.indexOf($intern_57) != -1;
      }
      ())
        return $intern_58;
      if (function(){
        return ua.indexOf($intern_59) != -1 && (docMode >= $intern_60 && docMode < $intern_61);
      }
      ())
        return $intern_62;
      if (function(){
        return ua.indexOf($intern_59) != -1 && (docMode >= $intern_63 && docMode < $intern_61);
      }
      ())
        return $intern_64;
      if (function(){
        return ua.indexOf($intern_59) != -1 && (docMode >= $intern_65 && docMode < $intern_61);
      }
      ())
        return $intern_66;
      if (function(){
        return ua.indexOf($intern_67) != -1 || docMode >= $intern_61;
      }
      ())
        return $intern_68;
      return $intern_15;
    }
    ;
    values[$intern_56] = {gecko1_8:$intern_7, ie10:$intern_8, ie8:$intern_55, ie9:$intern_69, safari:$intern_70};
    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    gwtArdas.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    gwtArdas.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = gwtArdas.__getPropMap;
    sendStats($intern_0, $intern_71);
    if (isHostedMode()) {
      return computeUrlForResource($intern_72);
    }
    var strongName;
    try {
      unflattenKeylistIntoAnswers([$intern_73, $intern_64], $intern_74);
      unflattenKeylistIntoAnswers([$intern_75, $intern_58], $intern_76);
      unflattenKeylistIntoAnswers([$intern_75, $intern_64], $intern_77);
      unflattenKeylistIntoAnswers([$intern_48, $intern_66], $intern_78);
      unflattenKeylistIntoAnswers([$intern_73, $intern_68], $intern_79);
      unflattenKeylistIntoAnswers([$intern_75, $intern_68], $intern_80);
      unflattenKeylistIntoAnswers([$intern_48, $intern_68], $intern_81);
      unflattenKeylistIntoAnswers([$intern_48, $intern_62], $intern_82);
      unflattenKeylistIntoAnswers([$intern_73, $intern_66], $intern_83);
      unflattenKeylistIntoAnswers([$intern_48, $intern_58], $intern_84);
      unflattenKeylistIntoAnswers([$intern_73, $intern_58], $intern_85);
      unflattenKeylistIntoAnswers([$intern_48, $intern_64], $intern_86);
      unflattenKeylistIntoAnswers([$intern_73, $intern_62], $intern_87);
      unflattenKeylistIntoAnswers([$intern_75, $intern_62], $intern_88);
      unflattenKeylistIntoAnswers([$intern_75, $intern_66], $intern_89);
      strongName = answers[computePropValue($intern_47)][computePropValue($intern_56)];
      var idx = strongName.indexOf($intern_90);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + $intern_8), $intern_60);
        strongName = strongName.substring($intern_7, idx);
      }
    }
     catch (e) {
    }
    gwtArdas.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_91);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    sendStats($intern_92, $intern_1);
    sendStats($intern_92, $intern_93);
  }

  processMetas();
  gwtArdas.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = gwtArdas.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_94 || $wnd.location.protocol == $intern_95);
    $wnd.__gwt_activeModules[$intern_4].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = $intern_96;
      try {
        $wnd.sessionStorage.setItem(key, key);
        $wnd.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = $intern_97;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_98 + devModeUrl);
        }
        devModeUrl = $intern_15;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_99] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_20);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_100)[$intern_7];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[$intern_7]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_93);
  installScript(filename);
  return true;
}

gwtArdas.succeeded = gwtArdas();
