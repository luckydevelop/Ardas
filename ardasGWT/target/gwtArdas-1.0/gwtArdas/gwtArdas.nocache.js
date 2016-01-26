function gwtArdas(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.gwtArdas=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'gwtArdas', $intern_5 = 'startup', $intern_6 = 'DUMMY', $intern_7 = 0, $intern_8 = 1, $intern_9 = 'iframe', $intern_10 = 'javascript:""', $intern_11 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_12 = ' top: -1000px;', $intern_13 = 'CSS1Compat', $intern_14 = '<!doctype html>', $intern_15 = '', $intern_16 = '<html><head><\/head><body><\/body><\/html>', $intern_17 = 'undefined', $intern_18 = 'DOMContentLoaded', $intern_19 = 50, $intern_20 = 'script', $intern_21 = 'javascript', $intern_22 = 'Failed to load ', $intern_23 = 'moduleStartup', $intern_24 = 'scriptTagAdded', $intern_25 = 'moduleRequested', $intern_26 = 'meta', $intern_27 = 'name', $intern_28 = 'gwtArdas::', $intern_29 = '::', $intern_30 = 'gwt:property', $intern_31 = 'content', $intern_32 = '=', $intern_33 = 'gwt:onPropertyErrorFn', $intern_34 = 'Bad handler "', $intern_35 = '" for "gwt:onPropertyErrorFn"', $intern_36 = 'gwt:onLoadErrorFn', $intern_37 = '" for "gwt:onLoadErrorFn"', $intern_38 = '#', $intern_39 = '?', $intern_40 = '/', $intern_41 = 'img', $intern_42 = 'clear.cache.gif', $intern_43 = 'baseUrl', $intern_44 = 'gwtArdas.nocache.js', $intern_45 = 'base', $intern_46 = '//', $intern_47 = 'locale', $intern_48 = 'default', $intern_49 = 'locale=', $intern_50 = 7, $intern_51 = '&', $intern_52 = '__gwt_Locale', $intern_53 = '_', $intern_54 = 'Unexpected exception in locale detection, using default: ', $intern_55 = 2, $intern_56 = 'user.agent', $intern_57 = 'webkit', $intern_58 = 'safari', $intern_59 = 'msie', $intern_60 = 10, $intern_61 = 11, $intern_62 = 'ie10', $intern_63 = 9, $intern_64 = 'ie9', $intern_65 = 8, $intern_66 = 'ie8', $intern_67 = 'gecko', $intern_68 = 'gecko1_8', $intern_69 = 3, $intern_70 = 4, $intern_71 = 'selectingPermutation', $intern_72 = 'gwtArdas.devmode.js', $intern_73 = 'ru', $intern_74 = '16462770B36F06935324CF2CDB1D26A4', $intern_75 = '1858ECDCDCD36F318C51F4B99145136D', $intern_76 = '1F6086764A2AF40F58351C5A63A9ACAB', $intern_77 = '28B3026137271B945B3FAAA8421F13B5', $intern_78 = '3DB1E8630B69FDC65F86448AA48A616A', $intern_79 = 'en', $intern_80 = '4B5D642437CAAF1C986A4AE7B8F04908', $intern_81 = '60D1F9C051C655AAD07E24FB1DF6000A', $intern_82 = '6112FDE059BA252C5D35F78EFB7F9B70', $intern_83 = '8BE3D09F656E52F130DB4CA6AA59F8B4', $intern_84 = '9AA0E3A6FCCB2979702A2696808FFCFD', $intern_85 = 'A35F548390BD3444BB32CA6896B393AC', $intern_86 = 'ABFCE622C22CE099E989F12F82EA669F', $intern_87 = 'CDFCB912FDD8E740DD2A3C4862655EF8', $intern_88 = 'E2CDDB07811FD2D10399D20A5B0CA7BB', $intern_89 = 'EE4BA6C259C9D1F0B302E9C966112D29', $intern_90 = ':', $intern_91 = '.cache.js', $intern_92 = 'loadExternalRefs', $intern_93 = 'end', $intern_94 = 'http:', $intern_95 = 'file:', $intern_96 = '_gwt_dummy_', $intern_97 = '__gwtDevModeHook:gwtArdas', $intern_98 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_99 = ':moduleBase', $intern_100 = 'head';
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
      unflattenKeylistIntoAnswers([$intern_73, $intern_66], $intern_74);
      unflattenKeylistIntoAnswers([$intern_48, $intern_58], $intern_75);
      unflattenKeylistIntoAnswers([$intern_48, $intern_66], $intern_76);
      unflattenKeylistIntoAnswers([$intern_48, $intern_64], $intern_77);
      unflattenKeylistIntoAnswers([$intern_73, $intern_58], $intern_78);
      unflattenKeylistIntoAnswers([$intern_79, $intern_68], $intern_80);
      unflattenKeylistIntoAnswers([$intern_73, $intern_68], $intern_81);
      unflattenKeylistIntoAnswers([$intern_79, $intern_58], $intern_82);
      unflattenKeylistIntoAnswers([$intern_79, $intern_64], $intern_83);
      unflattenKeylistIntoAnswers([$intern_48, $intern_62], $intern_84);
      unflattenKeylistIntoAnswers([$intern_79, $intern_66], $intern_85);
      unflattenKeylistIntoAnswers([$intern_48, $intern_68], $intern_86);
      unflattenKeylistIntoAnswers([$intern_73, $intern_62], $intern_87);
      unflattenKeylistIntoAnswers([$intern_79, $intern_62], $intern_88);
      unflattenKeylistIntoAnswers([$intern_73, $intern_64], $intern_89);
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
