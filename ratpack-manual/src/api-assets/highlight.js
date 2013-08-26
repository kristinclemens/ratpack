var pres = document.getElementsByTagName("pre");
for (var i = 0; i < pres.length; i++) {
  var pre = pres[i];
  if (pre.className.indexOf("tested") != -1 ||
      pre.className.indexOf("groovy-chain-dsl") != -1 ||
      pre.className.indexOf("groovy-ratpack-dsl") != -1 ||
      pre.className.indexOf("java-chain-dsl") != -1 ||
      pre.className.indexOf("not-tested") != -1) {
    pre.className = pre.className + " language-groovy";
    pre.innerHTML = "<code>" + pre.innerHTML.replace(/^ /gm, '').replace(/\s+$/g, '') + "</code>";
    Prism.highlightElement(pre, false, null);
  }
}

