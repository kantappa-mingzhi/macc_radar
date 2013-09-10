/**
 * TERMS OF USE - Validatious 2.0
 * Open source under the BSD License.
 * Copyright 2008 Christian Johansen.
 * All rights reserved.
 */
var addDOMLoadEvent=(function(){var load_events=[],load_timer,script,done,exec,old_onload,init=function(){done=true;clearInterval(load_timer);while(exec=load_events.shift()){exec()}if(script){script.onreadystatechange=""}};return function(func){if(done){return func()}if(!load_events[0]){if(document.addEventListener){document.addEventListener("DOMContentLoaded",init,false);
/*@cc_on @*/
/*@if (@_win32)
                document.write("<script id=__ie_onload defer src=//0><\/scr"+"ipt>");
                script = document.getElementById("__ie_onload");
                script.onreadystatechange = function() {
                    if (this.readyState == "complete")
                        init(); // call the onload handler
                };
            /*@end @*/
}if(/WebKit/i.test(navigator.userAgent)){load_timer=setInterval(function(){if(/loaded|complete/.test(document.readyState)){init()}},10)}old_onload=window.onload;window.onload=function(){init();if(old_onload){old_onload()}}}load_events.push(func)}})();var Base=function(){};Base.extend=function(B,E){var F=Base.prototype.extend;Base._prototyping=true;var D=new this;F.call(D,B);delete Base._prototyping;var C=D.constructor;var A=D.constructor=function(){if(!Base._prototyping){if(this._constructing||this.constructor==A){this._constructing=true;C.apply(this,arguments);delete this._constructing}else{if(arguments[0]!=null){return(arguments[0].extend||F).call(arguments[0],D)}}}};A.ancestor=this;A.extend=this.extend;A.forEach=this.forEach;A.implement=this.implement;A.prototype=D;A.toString=this.toString;A.valueOf=function(G){return(G=="object")?A:C.valueOf()};F.call(A,E);if(typeof A.init=="function"){A.init()}return A};Base.prototype={extend:function(B,H){if(arguments.length>1){var E=this[B];if(E&&(typeof H=="function")&&(!E.valueOf||E.valueOf()!=H.valueOf())&&/\bbase\b/.test(H)){var A=H.valueOf();H=function(){var K=this.base||Base.prototype.base;this.base=E;var J=A.apply(this,arguments);this.base=K;return J};H.valueOf=function(J){return(J=="object")?H:A};H.toString=Base.toString}this[B]=H}else{if(B){var G=Base.prototype.extend;if(!Base._prototyping&&typeof this!="function"){G=this.extend||G}var D={toSource:null};var F=["constructor","toString","valueOf"];var C=Base._prototyping?0:1;while(I=F[C++]){if(B[I]!=D[I]){G.call(this,I,B[I])}}for(var I in B){if(!D[I]){G.call(this,I,B[I])}}}}return this},base:function(){}};Base=Base.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(A,D,C){for(var B in A){if(this.prototype[B]===undefined){D.call(C,A[B],B,A)}}},implement:function(){for(var A=0;A<arguments.length;A++){if(typeof arguments[A]=="function"){arguments[A](this.prototype)}else{this.prototype.extend(arguments[A])}}return this},toString:function(){return String(this.valueOf())}});function addEvent(B,D,C){if(B.addEventListener){B.addEventListener(D,C,false)}else{if(!C.$$guid){C.$$guid=addEvent.guid++}if(!B.events){B.events={}}var A=B.events[D];if(!A){A=B.events[D]={};if(B["on"+D]){A[0]=B["on"+D]}}A[C.$$guid]=C;B["on"+D]=handleEvent}}addEvent.guid=1;function removeEvent(A,C,B){if(A.removeEventListener){A.removeEventListener(C,B,false)}else{if(A.events&&A.events[C]){delete A.events[C][B.$$guid]}}}function handleEvent(D){var C=true;D=D||fixEvent(((this.ownerDocument||this.document||this).parentWindow||window).event);var A=this.events[D.type];for(var B in A){this.$$handleEvent=A[B];if(this.$$handleEvent(D)===false){C=false}}return C}function fixEvent(A){A.preventDefault=fixEvent.preventDefault;A.stopPropagation=fixEvent.stopPropagation;return A}fixEvent.preventDefault=function(){this.returnValue=false};fixEvent.stopPropagation=function(){this.cancelBubble=true};if(typeof v2==="undefined"||v2===null){v2={}}v2.empty=function empty(A){return typeof A=="undefined"||A===null||A===""};v2.array=function array(C){var A=[];if(C&&typeof C.item==="function"){for(var B=0;B<C.length;B++){A[B]=C[B]}C=A}return v2.empty(C)?[]:(typeof C.shift=="undefined"?[C]:C)};v2.Object={extend:function(C,A,B){B=typeof B==="undefined"?false:B;for(var D in A){if(B&&typeof C[D]!=="undefined"){continue}if(A.hasOwnProperty(D)&&typeof A[D]!=="undefined"){C[D]=A[D]}}return C}};v2.Object.extend(String.prototype,{strip:function(){return this.replace(/^\s+|\s+$/,"")}});v2.Object.extend(Array.prototype,{indexOf:function(C,A){for(var B=0;B<this.length;B++){if(this[B]===C){return B}}return -1}});v2.$=function(A,C){if(typeof A=="string"){A=document.getElementById(A)}C=typeof C=="undefined"?true:C;if(A===null||typeof A.hide!="undefined"||!C){return A}for(var B in v2.Element){if(v2.Element.hasOwnProperty(B)){(function(){var D=B;var E={};E[D]=function(){var F=[A];for(var G=0;G<arguments.length;G++){F.push(arguments[G])}return v2.Element[D].apply(v2.Element,F)};v2.Object.extend(A,E,true)})()}}return A};v2.$$=function $$(E,N){N=N||document;if(document.querySelectorAll){v2.$$=function(Q,R){return(R||document).querySelectorAll(Q)};return v2.$$(E,N)}var O=E.split(",");var J,H,F,B,K,D,A,I,C,G,L,M;var P=[];for(J=0;(E=O[J]);J++){B=E.strip().split(/[^a-zA-Z]/)[0]||"*";K=E.replace(/^\./,"_.").split(/\./);C=[];G=[];for(H=1;H<K.length;H++){C.push(K[H].split(/[^a-zA-Z\-_]/)[0])}K=E.replace("][","].[").split(/[\[\]]/);for(H=0;H<K.length-1;H+=2){D=K[H+1].split("=");D[1]=D[1]||true;G.push(D)}A=N.getElementsByTagName(B);elementLoop:for(H=0;(I=A[H]);H++){for(F=0;F<C.length;F++){if(!v2.Element.hasClassName(I,C[F])){continue elementLoop}}for(F=0;F<G.length;F++){L=G[F][0];M=G[F][1];if(I.hasAttribute){if(!I.hasAttribute(L)||(M!==true&&I.getAttribute(L)!==M)){continue elementLoop}}else{L=L==="for"?"htmlFor":L;if(typeof I[L]==="undefined"||(M!==true&&I[L]!==M)){continue elementLoop}}}if(P.indexOf(I)<0){P.push(I)}}}return P};v2.Element={observe:function(B,C,A){addEvent(B,C,A)},computedStyle:function(A,C){var B="";if(document.defaultView&&document.defaultView.getComputedStyle){B=document.defaultView.getComputedStyle(A,"").getPropertyValue(C)}else{if(A.currentStyle){C=C.replace(/\-(\w)/g,function(D,E){return E.toUpperCase()});B=A.currentStyle[C]}}return B},visible:function(A){return v2.Element.computedStyle(A,"display")!="none"&&v2.Element.computedStyle(A,"visibility")!="hidden"&&(A.parentNode===null||A.parentNode.nodeType!=1||v2.Element.visible(A.parentNode))},hasClassName:function(B,A){return new RegExp("(^|\\s)"+A+"(\\s|$)").test(B.className)},addClassName:function(B,A){B.className+=v2.Element.hasClassName(B,A)?"":" "+A;B.className=B.className.replace("  "," ").replace(/^\s|\s$/,"");return B},removeClassName:function(B,A){var C=new RegExp("(^|\\s)"+A+"(\\s|$)");B.className=B.className.replace(C," ").replace("  "," ").replace(/^\s|\s$/,"");return B},position:function(A){var B={x:0,y:0};while(A!==null){B.x+=A.offsetLeft;B.y+=A.offsetTop;A=A.offsetParent}return B},scrollTo:function(A){var B=v2.Element.position(A);window.scrollTo(B.x,B.y)},previous:function(A){do{A=A.previousSibling}while(A&&A.nodeType!==1);return A}};v2.Object.extend(Function.prototype,{bind:function(B){var A=this;A.__cc=A.__cc||[];window.__coc=window.__coc||0;if(typeof B.__id=="undefined"){B.__id=window.__coc++}A.__cc[B.__id]=A.__cc[B.__id]||function(){try{return A.apply(B,arguments)}catch(C){}};return A.__cc[B.__id]}});if(typeof addDOMLoadEvent!="undefined"){v2.addDOMLoadEvent=addDOMLoadEvent}v2.CompositeFormItem=Base.extend({type:"generic",constructor:function(){if(v2.empty(this.__validators)){this.__validators=[]}if(v2.empty(this.__errors)){this.__errors=[]}this.__passOnAny=false;this.__message=null;this.parent=null},add:function(A){this.__validators.push(A);A.parent=this},get:function(A){return !v2.empty(A)?this.__validators[A]:this.__validators},validate:function(){this.__errors=[];var A=this.test("validate");if(A){this.__errors=[];this.onSuccess()}else{this.onFailure()}return A},test:function(C){var B,A,D=0;C=C||"test";for(B=0;(A=this.__validators[B]);B++){if(A[C]()){D++}else{this.__errors.push(A)}}return this.passOnAny()&&D>0||!this.passOnAny()&&D===this.__validators.length},getInvalid:function(){return this.__errors.length===0?null:this.__errors},setMessage:function(A){this.__message=A},getMessages:function(){if(!v2.empty(this.__message)){return[this.__message]}var C=[],B,A;for(B=0,A;(A=this.__errors[B]);B++){C=C.concat(A.getMessages())}return C},passOnAny:function(A){if(typeof A!=="undefined"){this.__passOnAny=!!A}return this.__passOnAny},onSuccess:function(){},onFailure:function(){}});v2.InputElement=Base.extend({constructor:function(B,A){this.__name=null;this.__events=v2.empty(A)?["blur"]:v2.array(A);this.__elements=v2.array(B)},monitor:function(D){this.__monitored=true;var C,A,B,E;for(C=0;(B=this.__elements[C]);C++){for(A=0;(E=this.__events[A]);A++){v2.Element.observe(B,E,D)}}},getValue:function(){return this.__elements[0].value},getLabel:function(){var B=this.__elements[0];var A=v2.$$("label[for="+(B.id||B.name)+"]",B.form);return A&&A[0]},getName:function(){if(this.__name){return this.__name}var A=this.getLabel();if(A){return A.title!==""?A.title:A.innerHTML}var B=this.__elements[0];return B.id||B.name},setName:function(A){this.__name=!!A?A:null;return this},getParent:function(){return this.__elements[0].parentNode},getElements:function(){return this.__elements},visible:function(){if(!v2.$(this.getParent()).visible()){return false}for(var A=0,B;(B=this.__elements[A]);A++){if(v2.Element.visible(B)){return true}}return false}},{__fields:{},get:function(B){if(B&&B.constructor===v2.InputElement){return B}var C=v2.$(B),H,G,F,A,D,E;if(!C){A="input$, select$, textarea$";F=v2.$$(A.replace(/\$/g,"[name="+B+"]"));C=F[0]}if(!C){throw new TypeError(B+" does not resolve to an HTML element!")}H=C.name||C.id;if((G=v2.InputElement.__fields[H])){return G}if(C.options){G=new v2.SelectElement(C)}else{if(C.tagName.toLowerCase()==="textarea"){G=new v2.TextareaElement(C)}else{if(C.type&&C.type=="radio"){F=v2.$$("input[type=radio][name="+C.name+"]",C.form);G=new v2.RadioElement(F)}else{if(C.type&&C.type=="checkbox"){D=C.className;E=/\bg_([^\s]*)\b/;F=E.test(D)?v2.$$("input[type=checkbox].g_"+D.match(E)[1],C.form):[C];G=new v2.CheckboxElement(F)}else{G=new v2.InputElement(C)}}}}return(v2.InputElement.__fields[H]=G)}});v2.$f=v2.InputElement.get;v2.RadioElement=v2.InputElement.extend({constructor:function(A){this.base(A,["click","change"])},getValue:function(){for(var B=0,A;(A=this.__elements[B]);B++){if(A.checked){return A.value}}return null},getLabel:function(){var B=this.__elements[0].parentNode;if(B.tagName.toLowerCase()==="li"){return v2.$(B.parentNode).previous()}var A=v2.$(this.__elements[0]).previous();return A||this.base()},getParent:function(){var A=this.__elements[0].parentNode;return A.tagName.toLowerCase()==="li"?A.parentNode.parentNode:A}});v2.SelectElement=v2.InputElement.extend({constructor:function(A){this.base([A],"change")},getValue:function(){var A=this.__elements[0];if(!A.multiple){return A.options[A.selectedIndex].value}var B=[];for(var C=0,D;(D=A.options[C]);C++){if(D.selected){B.push(D.value)}}return B}});v2.TextareaElement=v2.InputElement.extend({});v2.CheckboxElement=v2.RadioElement.extend({getValue:function(){var A=[],B,C;for(B=0,C;(C=this.__elements[B]);B++){if(C.checked){A.push(C.value)}}return A}});v2.Message=Base.extend({constructor:function(B,C,A){this.message=B;this.params=C||[];this.values=A||[]},copy:function(){return new v2.Message(this.message,this.params,this.values)},toString:function(){var C=this.message+"";for(var A=0,B=null;(B=this.params[A]);A++){C=C.replace("${"+B+"}",this.values[A])}return C}});v2.Validator=Base.extend({constructor:function(B,C,D,E,A){this.__name=B;this.__test=C;this.__message=new v2.Message(D||"${field} does not pass "+B+" validator",E);this.__aliases=v2.array(A);this.acceptEmpty=true},test:function(C,E,D){D=typeof D==="undefined"?false:D;var B=C.getValue();var A=(this.acceptEmpty&&B==="")||this.__test(C,B,E);return(A&&!D)||(!A&&D)},getName:function(){return this.__name},getMessage:function(){return this.__message},setMessage:function(A){this.__message.message=A}},{validators:{},add:function(B){if(!B.name||!B.fn){throw new TypeError("Options object should contain name and fn")}B=v2.Object.extend({params:[],aliases:[],acceptEmpty:true},B,false);var F=v2.array(B.params);var D=new v2.Validator(B.name,B.fn,B.message,F,B.aliases);D.acceptEmpty=B.acceptEmpty;var E=v2.array(B.aliases).concat([B.name]);for(var C=0,A;(A=E[C]);C++){v2.Validator.validators[A]=D}return D},reg:function(B,C,F,D,A,E){return v2.Validator.add({name:B,fn:C,message:D,params:F,aliases:A,acceptEmpty:E})},get:function(A){var B;if(A.constructor===v2.Validator){return A}if((B=v2.Validator.validators[A])){return B}return null}});v2.$v=function(A){return v2.Validator.get(A)};v2.$msg=function(){if(arguments.length===2){return v2.Validator.get(arguments[0]).setMessage(arguments[1])}for(var A in arguments[0]){try{v2.Validator.get(A).setMessage(arguments[0][A])}catch(B){}}};v2.Field=v2.CompositeFormItem.extend({validateHidden:false,instant:false,instantWhenValidated:true,type:"field",constructor:function(B,A,C){this.base();this.__monitored=false;this.element=v2.$f(B);this.instant=typeof A!=="undefined"?A:this.instant;this.instantWhenValidated=typeof C!=="undefined"?C:this.instantWhenValidated;this.__monitor(this.instant)},test:function(){if(!this.validateHidden&&!this.element.visible()){return true}return this.base()},validate:function(){this.__monitor(this.instantWhenValidated&&!this.__monitored);return this.base()},addValidator:function(A,E,C){var B=v2.$v(A);if(B===null){throw new Error(A+" is not a valid validator")}if(typeof C!=="undefined"&&C!==null){C=new v2.Message(C,B.getMessage().params)}var D=new v2.FieldValidator(this.element,B,v2.array(E),C);this.add(D);return D},getParent:function(){return this.element.getParent()},__monitor:function(C){if(!C||this.__monitored){return }this.__monitored=true;var A=this.parent&&this.parent.type==="fieldset"?this.parent:this;var B=A.validate.bind(this);this.element.monitor(function(D){B(D)})}});v2.Fieldset=v2.CompositeFormItem.extend({type:"fieldset",constructor:function(A){this.base();this.element=A},getParent:function(){return this.element}});v2.FieldValidator=Base.extend({invert:false,constructor:function(C,A,E,D){this.__field=C;this.__validator=A;this.__params=v2.array(E);this.__message=D||A.__message.copy();var B=this.__message.params;if(B.length<1||B[0]!=="field"){this.__message.params=["field"].concat(B)}this.__message.values=[this.__field.getName()].concat(this.__params)},test:function(){return this.__validator.test(this.__field,this.__params,this.invert)},validate:function(){return this.test()},getInvalid:function(){return !this.test()?this:null},setMessage:function(A){this.__message.message=A},getMessages:function(){return[this.__message.toString()]},add:function(){},remove:function(){},get:function(){},passOnAny:function(){},onSuccess:function(){},onFailure:function(){}});v2.Form=v2.CompositeFormItem.extend({type:"form",constructor:function(A){this.base();this.__form=v2.$(A);this.__form.observe("submit",this.validate.bind(this));this.__buttons=[];this.__activeButton=null},addButton:function(A){this.__buttons.push(A);v2.Element.observe(A,"click",(function(B){this.__activeButton=A}).bind(this))},validate:function(){var D=arguments.length>0?arguments[0]:null;var C=this.__buttons;var A=this.__activeButton;this.__activeButton=null;if(C.length>0&&C.indexOf(A)<0){return true}var B=this.base();if(!B&&D){D.preventDefault();D.returnValue=false}return B}},{forms:{},get:function(C){var B=v2.$(C),A;if(B===null||B.tagName.toLowerCase()!=="form"){throw new ArgumentError("idOrElement should represent a form element")}if(!v2.empty(A=v2.Form.forms[B.id])){return A}return(v2.Form.forms[B.id]=new v2.Form(B))}});(function(){var A=v2.Validator;A.reg("alpha",function(C,B,D){return/^[a-zA-Z\u00A1-\uFFFF]*$/.test(B)});A.reg("alphanum",function(C,B,D){return/^([a-zA-Z\u00A1-\uFFFF0-9])*$/.test(B)});A.reg("confirmation-of",function(C,B,D){return B===v2.$f(D[0]).getValue()},"field-id","${field} should be an exact match",null,false);A.reg("email",function(C,B,D){return/^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(B)});A.reg("max-length",function(C,B,D){return B.length<D[0]},"max");A.reg("max-val",function(C,B,D){return B<=D[0]},"max");A.reg("min-length",function(C,B,D){return B.length>=D[0]},"min");A.reg("min-val",function(C,B,D){return B>=D[0]},"min");A.reg("numeric",function(C,B,D){return/^[0-9]*(\.[0-9]+)?$/.test(B)});A.reg("required",function(C,B,D){return !v2.empty(B)&&!(typeof B.length!=="undefined"&&B.length===0)},null,null,"not-empty",false);A.reg("url",function(C,B,D){return/^(http|https|ftp):\/\/(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i.test(B)});A.reg("word",function(C,B,D){return/^([a-zA-Z\u00A1-\uFFFF0-9_\-\s\t])*$/.test(B)})})();v2.$msg({alpha:"${field} should only contain letters",alphanum:"${field} should only contain letters and numbers","car-regnum-nor":"${field} should be a valid norwegian auto registration number","confirmation-of":"${field} should be a confirmation of ${field-id}",email:"${field} should be a valid email address","max-length":"${field} should be no more than ${max} characters long","max-val":"${field} should be no bigger than ${min}","min-length":"${field} should be atleast ${min} characters long","min-val":"${field} should be atleast ${min}",numeric:"${field} should only contain numbers","phone-nor":"${field} should be a valid norwegian phone number",required:"${field} is required","ssn-nor":"${field} should be a valid norwegian social security number",url:"${field} should be a valid URL",word:"${field} should only contain letters, numbers and punctuation"});v2.dsl={__validateTemplate:function(A){return function(){var F=arguments[0];var D=F.element||(F.item?F.item.element:null)||null;if(D===null){while(!!F&&!F.element){F=F.get(0)}}var E=new v2.dsl.Form(D.getElements()[0].form);E.item.passOnAny(A);for(var C=0,B;(B=arguments[C]);C++){E.item.add(B.item||B)}return E}},__andOr:function(A){return function(){var D=new v2.dsl.Collection();D.item.passOnAny(A);for(var C=0,B;(B=arguments[C]);C++){D.item.add(B.item)}return D}}};v2.dsl.expose=function(){var A=v2.dsl;v2.Object.extend(window,{validate:A.validate,validateAll:A.validateAll,validateAny:A.validateAny,and:A.and,or:A.or},false)};v2.dsl.validateAll=v2.dsl.validate=v2.dsl.__validateTemplate(false);v2.dsl.validateAny=v2.dsl.__validateTemplate(true);v2.dsl.and=v2.dsl.__andOr(false);v2.dsl.or=v2.dsl.__andOr(true);v2.Object.extend(String.prototype,{is:function(A,C){var B=new v2.dsl.Field(this.toString());return B.addValidator(A,C)}});(function(){var A=String.prototype;A.isA=A.isAn=A.has=A.hasA=A.hasAn=A.is})();v2.dsl.Field=Base.extend({__currentValidator:null,__and:null,constructor:function(A){this.item=new v2.Field(A)},addValidator:function(A,C,B){if(typeof B!=="undefined"){if(this.__and!==null&&this.__and!==B){throw new Error("Field previously set up with "+(this.__and?"AND":"OR")+", unable to shift")}this.__and=B;this.item.passOnAny(!B)}this.__currentValidator=this.item.addValidator(A,C);return this},and:function(A,B){if(!this.__currentValidator){throw new Error("Cannot add more validators when no validators are added yet")}return this.addValidator(A,B,true)},or:function(A,B){if(!!this.__currentValidator){throw new Error("Cannot add more validators when no validators are added yet")}return this.addValidator(A,B,false)},explain:function(A){if(!this.__currentValidator){throw new Error("No active field validator")}this.__currentValidator.setMessage(A);return this},help:function(A){this.item.setMessage(A);return this},withName:function(A){this.item.element.setName(A);return this}});(function(){var A=v2.dsl.Field.prototype;A.orIs=A.orIsA=A.orIsAn=A.orHas=A.orHasA=A.orHasAn=A.or;A.andIs=A.andIsA=A.andIsAn=A.andHas=A.andHasA=A.andHasAn=A.and})();v2.dsl.Collection=Base.extend({constructor:function(){this.item=new v2.CompositeFormItem()},explain:function(A){this.item.setMessage(A)}});v2.dsl.Form=Base.extend({constructor:function(A){this.item=v2.Form.get(A)},on:function(){var B,A;for(B=0;B<arguments.length;B++){A=v2.$(arguments[B]);this.item.addButton(A.tagName.toLowerCase()!=="input"?A.getElementsByTagName("input")[0]:A)}}});v2.Object.extend(v2.Validator,{prefix:""});v2.Object.extend(v2.Form,{autoValidateClass:"validate",actionButtonClass:"action"});v2.html={validateAnyClass:"validate_any",validateAllClass:"validate_all",validatorsFromString:function(I){var E=v2.Validator.prefix;var G=new RegExp("^"+E,"");var F,H,B,D,A,C=[];I=I.split(" ");for(F=0;(H=I[F]);F++){B=false;if(!v2.empty(E)&&!G.test(H)){continue}H=H.replace(G,"");if(/^not_/.test(H)){H=H.replace(/^not_/,"");B=true}D=H.split("_");A=D.shift();if(A&&(A=v2.$v(A))){C.push({validator:A,params:D,invert:B})}}return C},applyValidators:function(A,F,D){if(!v2.empty(D)){F.setMessage(D)}for(var C=0,B,E;(B=A[C]);C++){E=F.addValidator(B.validator,B.params);E.invert=B.invert}return F}};v2.html.Form=Base.extend({constructor:function(A){this.form=v2.Form.get(A);this.__parsed={};this.parseElement(A,this.form);this.form.passOnAny(v2.$(A).hasClassName(v2.html.validateAnyClass))},parseElement:function(C,K,E){var A=v2.$$("div, fieldset, input, select, textarea",C);var H,F,B,I,G,D,L,J;this.__parsed[C.id||C.name]=true;E=E||[];for(H=0;(G=A[H]);H++){if(E.length===0&&(/^\s*$/.test(G.className)||this.__parsed[G.id||G.name])){continue}D=G.tagName.toLowerCase();if(D==="input"&&v2.Element.hasClassName(G,v2.Form.actionButtonClass)){this.form.addButton(G);continue}if(D==="div"||D==="fieldset"){this.parseBlock(G,K);continue}J=E.concat(v2.html.validatorsFromString(G.className));if(J.length>0){L=new v2.Field(G);v2.html.applyValidators(J,L,G.title);this.__parsed[G.id||G.name]=true;K.add(L)}}},parseBlock:function(C,E){var D=new v2.Fieldset(C);var B=true;v2.$(C);if(C.hasClassName(v2.html.validateAnyClass)){}else{if(C.hasClassName(v2.html.validateAllClass)){B=false}else{return }}D.passOnAny(B);var A=v2.html.validatorsFromString(C.className);this.parseElement(C,D,A);if(!/^\s*$/.test(C.title)){D.setMessage(C.title)}if(D.get(0)){E.add(D)}}});v2.addDOMLoadEvent(function(){var A=document.getElementsByTagName("form");for(var B=0,C;(C=A[B]);B++){if(v2.Element.hasClassName(C,v2.Form.autoValidateClass)){new v2.html.Form(C)}}});v2.ErrorReporting={displayErrors:-1,positionErrorsAbove:true,failureClass:"error",successClass:"",messagesClass:"messages",onFailure:function(){if(this.parent&&this.parent.type==="fieldset"){return }var I=this.onSuccess();var F="",C,G,A,J;var K=[];var B=this.getMessages();I.addClassName(this.failureClass);I.removeClassName(this.successClass);var D=this.displayErrors;var H=this.__errors.length;D=D<0||D>H?H:D;if(D===0){return }var E=document.createElement("ul");E.id=this.__getId();E.className=this.messagesClass;for(C=0;C<D;C++){G=B[C];if(!G||K.indexOf(G.toString())>=0){continue}K.push(G.toString());J=document.createElement("li");J.innerHTML=G.toString();E.appendChild(J)}if(this.positionErrorsAbove){I.insertBefore(E,I.firstChild)}else{I.appendChild(E)}},onSuccess:function(){if(this.parent&&this.parent.type==="fieldset"){return null}var A=v2.$(this.getParent());var B=v2.$(this.__getId());if(B&&A===B.parentNode){A.removeChild(B)}A.removeClassName(this.failureClass);A.addClassName(this.successClass);return A},__getId:function(){var A=this.element.getElements?this.element.getElements()[0]:null;var C=A||this.getParent();var B=C.className;var D=((C.id||C.name||B.replace(this.failureClass,""))+"_"+this.failureClass).replace(" ","_").replace(/_+/,"_");return D}};v2.Object.extend(v2.Field.prototype,v2.ErrorReporting);v2.Object.extend(v2.Fieldset.prototype,v2.ErrorReporting);v2.Object.extend(v2.Form.prototype,{scrollToFirstWhenFail:true,onFailure:function(){if(!this.scrollToFirstWhenFail){return }var B,A,D,C=this.__form;D=C.all||C.getElementsByTagName("*");for(B=0;(A=D[B]);B++){if(v2.Element.hasClassName(A,v2.ErrorReporting.failureClass)){v2.Element.scrollTo(A);return }}}});
