(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[801],{8212:function($,h,a){"use strict";a.d(h,{Z:function(){return m}});var u=a(28991),v=a(67294),e={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},J=e,T=a(27029),y=function(H,le){return v.createElement(T.Z,(0,u.Z)((0,u.Z)({},H),{},{ref:le,icon:J}))};y.displayName="EditOutlined";var m=v.forwardRef(y)},70347:function(){},47828:function(){},39144:function($,h,a){"use strict";a.d(h,{Z:function(){return dt}});var u=a(96156),v=a(22122),e=a(67294),J=a(94184),T=a.n(J),y=a(98423),m=a(65632),S=function(i,C){var O={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&C.indexOf(s)<0&&(O[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(i);p<s.length;p++)C.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(i,s[p])&&(O[s[p]]=i[s[p]]);return O},H=function(C){var O=C.prefixCls,s=C.className,p=C.hoverable,Ee=p===void 0?!0:p,ie=S(C,["prefixCls","className","hoverable"]);return e.createElement(m.C,null,function(te){var se=te.getPrefixCls,ce=se("card",O),V=T()("".concat(ce,"-grid"),s,(0,u.Z)({},"".concat(ce,"-grid-hoverable"),Ee));return e.createElement("div",(0,v.Z)({},ie,{className:V}))})},le=H,oe=function(i,C){var O={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&C.indexOf(s)<0&&(O[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(i);p<s.length;p++)C.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(i,s[p])&&(O[s[p]]=i[s[p]]);return O},q=function(C){return e.createElement(m.C,null,function(O){var s=O.getPrefixCls,p=C.prefixCls,Ee=C.className,ie=C.avatar,te=C.title,se=C.description,ce=oe(C,["prefixCls","className","avatar","title","description"]),V=s("card",p),Ue=T()("".concat(V,"-meta"),Ee),Se=ie?e.createElement("div",{className:"".concat(V,"-meta-avatar")},ie):null,ge=te?e.createElement("div",{className:"".concat(V,"-meta-title")},te):null,Me=se?e.createElement("div",{className:"".concat(V,"-meta-description")},se):null,_e=ge||Me?e.createElement("div",{className:"".concat(V,"-meta-detail")},ge,Me):null;return e.createElement("div",(0,v.Z)({},ce,{className:Ue}),Se,_e)})},Z=q,U=a(90642),ee=a(71230),d=a(15746),xe=a(97647),Ve=function(i,C){var O={};for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&C.indexOf(s)<0&&(O[s]=i[s]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,s=Object.getOwnPropertySymbols(i);p<s.length;p++)C.indexOf(s[p])<0&&Object.prototype.propertyIsEnumerable.call(i,s[p])&&(O[s[p]]=i[s[p]]);return O};function ut(i){var C=i.map(function(O,s){return e.createElement("li",{style:{width:"".concat(100/i.length,"%")},key:"action-".concat(s)},e.createElement("span",null,O))});return C}var $e=e.forwardRef(function(i,C){var O,s,p=e.useContext(m.E_),Ee=p.getPrefixCls,ie=p.direction,te=e.useContext(xe.Z),se=function(we){var ue;(ue=i.onTabChange)===null||ue===void 0||ue.call(i,we)},ce=function(){var we;return e.Children.forEach(i.children,function(ue){ue&&ue.type&&ue.type===le&&(we=!0)}),we},V=i.prefixCls,Ue=i.className,Se=i.extra,ge=i.headStyle,Me=ge===void 0?{}:ge,_e=i.bodyStyle,We=_e===void 0?{}:_e,ze=i.title,Qe=i.loading,De=i.bordered,ft=De===void 0?!0:De,Xe=i.size,Ye=i.type,ke=i.cover,He=i.actions,ae=i.tabList,qe=i.children,Le=i.activeTabKey,et=i.defaultActiveTabKey,vt=i.tabBarExtraContent,pt=i.hoverable,tt=i.tabProps,yt=tt===void 0?{}:tt,mt=Ve(i,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),P=Ee("card",V),Ne=We.padding===0||We.padding==="0px"?{padding:24}:void 0,W=e.createElement("div",{className:"".concat(P,"-loading-block")}),Et=e.createElement("div",{className:"".concat(P,"-loading-content"),style:Ne},e.createElement(ee.Z,{gutter:8},e.createElement(d.Z,{span:22},W)),e.createElement(ee.Z,{gutter:8},e.createElement(d.Z,{span:8},W),e.createElement(d.Z,{span:15},W)),e.createElement(ee.Z,{gutter:8},e.createElement(d.Z,{span:6},W),e.createElement(d.Z,{span:18},W)),e.createElement(ee.Z,{gutter:8},e.createElement(d.Z,{span:13},W),e.createElement(d.Z,{span:9},W)),e.createElement(ee.Z,{gutter:8},e.createElement(d.Z,{span:4},W),e.createElement(d.Z,{span:3},W),e.createElement(d.Z,{span:16},W))),at=Le!==void 0,Ie=(0,v.Z)((0,v.Z)({},yt),(O={},(0,u.Z)(O,at?"activeKey":"defaultActiveKey",at?Le:et),(0,u.Z)(O,"tabBarExtraContent",vt),O)),nt,rt=ae&&ae.length?e.createElement(U.Z,(0,v.Z)({size:"large"},Ie,{className:"".concat(P,"-head-tabs"),onChange:se}),ae.map(function(Ze){return e.createElement(U.Z.TabPane,{tab:Ze.tab,disabled:Ze.disabled,key:Ze.key})})):null;(ze||Se||rt)&&(nt=e.createElement("div",{className:"".concat(P,"-head"),style:Me},e.createElement("div",{className:"".concat(P,"-head-wrapper")},ze&&e.createElement("div",{className:"".concat(P,"-head-title")},ze),Se&&e.createElement("div",{className:"".concat(P,"-extra")},Se)),rt));var gt=ke?e.createElement("div",{className:"".concat(P,"-cover")},ke):null,Ct=e.createElement("div",{className:"".concat(P,"-body"),style:We},Qe?Et:qe),bt=He&&He.length?e.createElement("ul",{className:"".concat(P,"-actions")},ut(He)):null,ht=(0,y.Z)(mt,["onTabChange"]),lt=Xe||te,Ot=T()(P,(s={},(0,u.Z)(s,"".concat(P,"-loading"),Qe),(0,u.Z)(s,"".concat(P,"-bordered"),ft),(0,u.Z)(s,"".concat(P,"-hoverable"),pt),(0,u.Z)(s,"".concat(P,"-contain-grid"),ce()),(0,u.Z)(s,"".concat(P,"-contain-tabs"),ae&&ae.length),(0,u.Z)(s,"".concat(P,"-").concat(lt),lt),(0,u.Z)(s,"".concat(P,"-type-").concat(Ye),!!Ye),(0,u.Z)(s,"".concat(P,"-rtl"),ie==="rtl"),s),Ue);return e.createElement("div",(0,v.Z)({ref:C},ht,{className:Ot}),nt,gt,Ct,bt)});$e.Grid=le,$e.Meta=Z;var dt=$e},58024:function($,h,a){"use strict";var u=a(38663),v=a.n(u),e=a(70347),J=a.n(e),T=a(18106),y=a(13062),m=a(89032)},15746:function($,h,a){"use strict";var u=a(21584);h.Z=u.Z},89032:function($,h,a){"use strict";var u=a(38663),v=a.n(u),e=a(6999)},71230:function($,h,a){"use strict";var u=a(92820);h.Z=u.Z},13062:function($,h,a){"use strict";var u=a(38663),v=a.n(u),e=a(6999)},97272:function($,h,a){"use strict";a.d(h,{Z:function(){return kt}});var u=a(22122),v=a(96156),e=a(67294),J=a(94184),T=a.n(J),y=a(42550),m=a(65632),S=a(21687),H=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(l[n[o]]=t[n[o]]);return l},le=function(r,l){var n=r.prefixCls,o=r.component,g=o===void 0?"article":o,L=r.className,x=r["aria-label"],A=r.setContentRef,K=r.children,N=H(r,["prefixCls","component","className","aria-label","setContentRef","children"]),Q=l;return A&&((0,S.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),Q=(0,y.sQ)(l,A)),e.createElement(m.C,null,function(z){var ne=z.getPrefixCls,_=z.direction,X=g,B=ne("typography",n),M=T()(B,(0,v.Z)({},"".concat(B,"-rtl"),_==="rtl"),L);return e.createElement(X,(0,u.Z)({className:M,"aria-label":x,ref:Q},N),K)})},oe=e.forwardRef(le);oe.displayName="Typography";var q=oe,Z=q,U=a(90484),ee=a(98423),d=a(28481),xe=a(21770),Ve=a(50344),ut=a(20640),$e=a.n(ut),dt=a(8212),i=a(79508),C=a(99165),O=a(48717),s=a(8410),p=a(42051),Ee=a(34952),ie=a(79370),te=a(69713),se=a(15105),ce=a(28991),V={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ue=V,Se=a(27029),ge=function(r,l){return e.createElement(Se.Z,(0,ce.Z)((0,ce.Z)({},r),{},{ref:l,icon:Ue}))};ge.displayName="EnterOutlined";var Me=e.forwardRef(ge),_e=a(45839),We=a(96159),ze=function(r){var l=r.prefixCls,n=r["aria-label"],o=r.className,g=r.style,L=r.direction,x=r.maxLength,A=r.autoSize,K=A===void 0?!0:A,N=r.value,Q=r.onSave,z=r.onCancel,ne=r.onEnd,_=r.enterIcon,X=_===void 0?e.createElement(Me,null):_,B=e.useRef(),M=e.useRef(!1),G=e.useRef(),de=e.useState(N),I=(0,d.Z)(de,2),Pe=I[0],fe=I[1];e.useEffect(function(){fe(N)},[N]),e.useEffect(function(){if(B.current&&B.current.resizableTextArea){var w=B.current.resizableTextArea.textArea;w.focus();var b=w.value.length;w.setSelectionRange(b,b)}},[]);var Ae=function(b){var D=b.target;fe(D.value.replace(/[\n\r]/g,""))},Ce=function(){M.current=!0},R=function(){M.current=!1},Y=function(b){var D=b.keyCode;M.current||(G.current=D)},F=function(){Q(Pe.trim())},Re=function(b){var D=b.keyCode,ve=b.ctrlKey,pe=b.altKey,Fe=b.metaKey,Be=b.shiftKey;G.current===D&&!M.current&&!ve&&!pe&&!Fe&&!Be&&(D===se.Z.ENTER?(F(),ne==null||ne()):D===se.Z.ESC&&z())},Ke=function(){F()},be=T()(l,"".concat(l,"-edit-content"),(0,v.Z)({},"".concat(l,"-rtl"),L==="rtl"),o);return e.createElement("div",{className:be,style:g},e.createElement(_e.Z,{ref:B,maxLength:x,value:Pe,onChange:Ae,onKeyDown:Y,onKeyUp:Re,onCompositionStart:Ce,onCompositionEnd:R,onBlur:Ke,"aria-label":n,rows:1,autoSize:K}),X!==null?(0,We.Tm)(X,{className:"".concat(l,"-edit-content-confirm")}):null)},Qe=ze;function De(t,r){return e.useMemo(function(){var l=!!t;return[l,(0,u.Z)((0,u.Z)({},r),l&&(0,U.Z)(t)==="object"?t:null)]},[t])}var ft=function(t,r){var l=e.useRef(!1);e.useEffect(function(){l.current?t():l.current=!0},r)};function Xe(t){var r=(0,U.Z)(t);return r==="string"||r==="number"}function Ye(t){var r=0;return t.forEach(function(l){Xe(l)?r+=String(l).length:r+=1}),r}function ke(t,r){for(var l=0,n=[],o=0;o<t.length;o+=1){if(l===r)return n;var g=t[o],L=Xe(g),x=L?String(g).length:1,A=l+x;if(A>r){var K=r-l;return n.push(String(g).slice(0,K)),n}n.push(g),l=A}return t}var He=0,ae=1,qe=2,Le=3,et=4,vt=function(r){var l=r.enabledMeasure,n=r.children,o=r.text,g=r.width,L=r.rows,x=r.onEllipsis,A=e.useState([0,0,0]),K=(0,d.Z)(A,2),N=K[0],Q=K[1],z=e.useState(He),ne=(0,d.Z)(z,2),_=ne[0],X=ne[1],B=(0,d.Z)(N,3),M=B[0],G=B[1],de=B[2],I=e.useState(0),Pe=(0,d.Z)(I,2),fe=Pe[0],Ae=Pe[1],Ce=e.useRef(null),R=e.useRef(null),Y=e.useMemo(function(){return(0,Ve.Z)(o)},[o]),F=e.useMemo(function(){return Ye(Y)},[Y]),Re=e.useMemo(function(){return!l||_!==Le?n(Y,!1):n(ke(Y,G),G<F)},[l,_,n,Y,G,F]);(0,s.Z)(function(){l&&g&&F&&(X(ae),Q([0,Math.ceil(F/2),F]))},[l,g,o,F,L]),(0,s.Z)(function(){var b;_===ae&&Ae(((b=Ce.current)===null||b===void 0?void 0:b.offsetHeight)||0)},[_]),(0,s.Z)(function(){var b,D;if(fe){if(_===ae){var ve=((b=R.current)===null||b===void 0?void 0:b.offsetHeight)||0,pe=L*fe;ve<=pe?(X(et),x(!1)):X(qe)}else if(_===qe)if(M!==de){var Fe=((D=R.current)===null||D===void 0?void 0:D.offsetHeight)||0,Be=L*fe,Te=M,re=de;M===de-1?re=M:Fe<=Be?Te=G:re=G;var xt=Math.ceil((Te+re)/2);Q([Te,xt,re])}else X(Le),x(!0)}},[_,M,de,L,fe]);var Ke={width:g,whiteSpace:"normal",margin:0,padding:0},be=function(D,ve,pe){return e.createElement("span",{"aria-hidden":!0,ref:ve,style:(0,u.Z)({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none"},pe)},D)},w=function(D,ve){var pe=ke(Y,D);return be(n(pe,!0),ve,Ke)};return e.createElement(e.Fragment,null,Re,l&&_!==Le&&_!==et&&e.createElement(e.Fragment,null,be("lg",Ce,{wordBreak:"keep-all",whiteSpace:"nowrap"}),_===ae?be(n(Y,!1),R,Ke):w(G,R)))},pt=vt,tt=function(r){var l=r.title,n=r.enabledEllipsis,o=r.isEllipsis,g=r.children;return!l||!n?g:e.createElement(te.Z,{title:l,visible:o?void 0:!1},g)},yt=tt,mt=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(l[n[o]]=t[n[o]]);return l};function P(t,r){var l=t.mark,n=t.code,o=t.underline,g=t.delete,L=t.strong,x=t.keyboard,A=t.italic,K=r;function N(Q,z){!Q||(K=e.createElement(z,{},K))}return N(L,"strong"),N(o,"u"),N(g,"del"),N(n,"code"),N(l,"mark"),N(x,"kbd"),N(A,"i"),K}function Ne(t,r,l){return t===!0||t===void 0?r:t||l&&r}function W(t){return Array.isArray(t)?t:[t]}var Et="...",at=e.forwardRef(function(t,r){var l=t.prefixCls,n=t.className,o=t.style,g=t.type,L=t.disabled,x=t.children,A=t.ellipsis,K=t.editable,N=t.copyable,Q=t.component,z=t.title,ne=mt(t,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),_=e.useContext(m.E_),X=_.getPrefixCls,B=_.direction,M=(0,p.E)("Text")[0],G=e.useRef(null),de=e.useRef(null),I=X("typography",l),Pe=(0,ee.Z)(ne,["mark","code","delete","underline","strong","keyboard","italic"]),fe=De(K),Ae=(0,d.Z)(fe,2),Ce=Ae[0],R=Ae[1],Y=(0,xe.Z)(!1,{value:R.editing}),F=(0,d.Z)(Y,2),Re=F[0],Ke=F[1],be=R.triggerType,w=be===void 0?["icon"]:be,b=function(c){var f;c&&((f=R.onStart)===null||f===void 0||f.call(R)),Ke(c)};ft(function(){var E;Re||(E=de.current)===null||E===void 0||E.focus()},[Re]);var D=function(c){c==null||c.preventDefault(),b(!0)},ve=function(c){var f;(f=R.onChange)===null||f===void 0||f.call(R,c),b(!1)},pe=function(){var c;(c=R.onCancel)===null||c===void 0||c.call(R),b(!1)},Fe=De(N),Be=(0,d.Z)(Fe,2),Te=Be[0],re=Be[1],xt=e.useState(!1),St=(0,d.Z)(xt,2),ot=St[0],Zt=St[1],Pt=e.useRef(),Rt=function(){clearTimeout(Pt.current)},Ht=function(c){var f;c==null||c.preventDefault(),c==null||c.stopPropagation(),$e()(re.text||String(x)||""),Zt(!0),Rt(),Pt.current=setTimeout(function(){Zt(!1)},3e3),(f=re.onCopy)===null||f===void 0||f.call(re)};e.useEffect(function(){return Rt},[]);var Gt=e.useState(!1),Tt=(0,d.Z)(Gt,2),Mt=Tt[0],Ft=Tt[1],Jt=e.useState(!1),_t=(0,d.Z)(Jt,2),Dt=_t[0],Vt=_t[1],Qt=e.useState(!1),Lt=(0,d.Z)(Qt,2),Xt=Lt[0],Yt=Lt[1],qt=e.useState(!1),Nt=(0,d.Z)(qt,2),It=Nt[0],ea=Nt[1],ta=e.useState(!1),wt=(0,d.Z)(ta,2),At=wt[0],aa=wt[1],na=De(A,{expandable:!1}),Kt=(0,d.Z)(na,2),he=Kt[0],j=Kt[1],ye=he&&!Xt,Bt=j.rows,je=Bt===void 0?1:Bt,it=e.useMemo(function(){return!ye||j.suffix!==void 0||j.onEllipsis||j.expandable||Ce||Te},[ye,j,Ce,Te]);(0,s.Z)(function(){he&&!it&&(Ft((0,ie.G)("webkitLineClamp")),Vt((0,ie.G)("textOverflow")))},[it,he]);var me=e.useMemo(function(){return it?!1:je===1?Dt:Mt},[it,Dt,Mt]),jt=ye&&(me?At:It),ra=ye&&je===1&&me,st=ye&&je>1&&me,la=function(c){var f;Yt(!0),(f=j.onExpand)===null||f===void 0||f.call(j,c)},oa=e.useState(0),$t=(0,d.Z)(oa,2),ia=$t[0],sa=$t[1],ca=function(c){var f=c.offsetWidth;sa(f)},ua=function(c){var f;ea(c),It!==c&&((f=j.onEllipsis)===null||f===void 0||f.call(j,c))};e.useEffect(function(){var E=G.current;if(he&&me&&E){var c=st?E.offsetHeight<E.scrollHeight:E.offsetWidth<E.scrollWidth;At!==c&&aa(c)}},[he,me,x,st]);var ct=j.tooltip===!0?x:j.tooltip,Ut=e.useMemo(function(){var E=function(f){return["string","number"].includes((0,U.Z)(f))};if(!(!he||me)){if(E(x))return x;if(E(z))return z;if(E(ct))return ct}},[he,me,z,ct,jt]);if(Re)return e.createElement(Qe,{value:typeof x=="string"?x:"",onSave:ve,onCancel:pe,onEnd:R.onEnd,prefixCls:I,className:n,style:o,direction:B,maxLength:R.maxLength,autoSize:R.autoSize,enterIcon:R.enterIcon});var da=function(){var c=j.expandable,f=j.symbol;if(!c)return null;var k;return f?k=f:k=M.expand,e.createElement("a",{key:"expand",className:"".concat(I,"-expand"),onClick:la,"aria-label":M.expand},k)},fa=function(){if(!!Ce){var c=R.icon,f=R.tooltip,k=(0,Ve.Z)(f)[0]||M.edit,Oe=typeof k=="string"?k:"";return w.includes("icon")?e.createElement(te.Z,{key:"edit",title:f===!1?"":k},e.createElement(Ee.Z,{ref:de,className:"".concat(I,"-edit"),onClick:D,"aria-label":Oe},c||e.createElement(dt.Z,{role:"button"}))):null}},va=function(){if(!!Te){var c=re.tooltips,f=re.icon,k=W(c),Oe=W(f),Je=ot?Ne(k[1],M.copied):Ne(k[0],M.copy),ma=ot?M.copied:M.copy,Ea=typeof Je=="string"?Je:ma;return e.createElement(te.Z,{key:"copy",title:Je},e.createElement(Ee.Z,{className:T()("".concat(I,"-copy"),ot&&"".concat(I,"-copy-success")),onClick:Ht,"aria-label":Ea},ot?Ne(Oe[1],e.createElement(i.Z,null),!0):Ne(Oe[0],e.createElement(C.Z,null),!0)))}},pa=function(c){return[c&&da(),fa(),va()]},ya=function(c){return[c&&e.createElement("span",{"aria-hidden":!0,key:"ellipsis"},Et),j.suffix,pa(c)]};return e.createElement(O.Z,{onResize:ca,disabled:!ye||me},function(E){var c;return e.createElement(yt,{title:ct,enabledEllipsis:ye,isEllipsis:jt},e.createElement(Z,(0,u.Z)({className:T()((c={},(0,v.Z)(c,"".concat(I,"-").concat(g),g),(0,v.Z)(c,"".concat(I,"-disabled"),L),(0,v.Z)(c,"".concat(I,"-ellipsis"),he),(0,v.Z)(c,"".concat(I,"-single-line"),ye&&je===1),(0,v.Z)(c,"".concat(I,"-ellipsis-single-line"),ra),(0,v.Z)(c,"".concat(I,"-ellipsis-multiple-line"),st),c),n),style:(0,u.Z)((0,u.Z)({},o),{WebkitLineClamp:st?je:void 0}),component:Q,ref:(0,y.sQ)(E,G,r),direction:B,onClick:w.includes("text")?D:null,"aria-label":Ut,title:z},Pe),e.createElement(pt,{enabledMeasure:ye&&!me,text:x,rows:je,width:ia,onEllipsis:ua},function(f,k){var Oe=f;f.length&&k&&Ut&&(Oe=e.createElement("span",{key:"show-content","aria-hidden":!0},Oe));var Je=P(t,e.createElement(e.Fragment,null,Oe,ya(k)));return Je})))})}),Ie=at,nt=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(l[n[o]]=t[n[o]]);return l},rt=function(r){var l=r.ellipsis,n=nt(r,["ellipsis"]),o=e.useMemo(function(){return l&&(0,U.Z)(l)==="object"?(0,ee.Z)(l,["expandable","rows"]):l},[l]);return(0,S.Z)((0,U.Z)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),e.createElement(Ie,(0,u.Z)({},n,{ellipsis:o,component:"span"}))},gt=rt,Ct=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(l[n[o]]=t[n[o]]);return l},bt=function(r,l){var n=r.ellipsis,o=r.rel,g=Ct(r,["ellipsis","rel"]);(0,S.Z)((0,U.Z)(n)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var L=e.useRef(null);e.useImperativeHandle(l,function(){return L.current});var x=(0,u.Z)((0,u.Z)({},g),{rel:o===void 0&&g.target==="_blank"?"noopener noreferrer":o});return delete x.navigate,e.createElement(Ie,(0,u.Z)({},x,{ref:L,ellipsis:!!n,component:"a"}))},ht=e.forwardRef(bt),lt=a(93355),Ot=function(t,r){var l={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(l[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(l[n[o]]=t[n[o]]);return l},Ze=(0,lt.a)(1,2,3,4,5),we=function(r){var l=r.level,n=l===void 0?1:l,o=Ot(r,["level"]),g;return Ze.indexOf(n)!==-1?g="h".concat(n):((0,S.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),g="h1"),e.createElement(Ie,(0,u.Z)({},o,{component:g}))},ue=we,Wt=function(r){return e.createElement(Ie,(0,u.Z)({},r,{component:"div"}))},zt=Wt,Ge=Z;Ge.Text=gt,Ge.Link=ht,Ge.Title=ue,Ge.Paragraph=zt;var kt=Ge},402:function($,h,a){"use strict";var u=a(38663),v=a.n(u),e=a(47828),J=a.n(e),T=a(22385),y=a(47673)},20640:function($,h,a){"use strict";var u=a(11742),v={"text/plain":"Text","text/html":"Url",default:"Text"},e="Copy to clipboard: #{key}, Enter";function J(y){var m=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return y.replace(/#{\s*key\s*}/g,m)}function T(y,m){var S,H,le,oe,q,Z,U=!1;m||(m={}),S=m.debug||!1;try{le=u(),oe=document.createRange(),q=document.getSelection(),Z=document.createElement("span"),Z.textContent=y,Z.style.all="unset",Z.style.position="fixed",Z.style.top=0,Z.style.clip="rect(0, 0, 0, 0)",Z.style.whiteSpace="pre",Z.style.webkitUserSelect="text",Z.style.MozUserSelect="text",Z.style.msUserSelect="text",Z.style.userSelect="text",Z.addEventListener("copy",function(d){if(d.stopPropagation(),m.format)if(d.preventDefault(),typeof d.clipboardData=="undefined"){S&&console.warn("unable to use e.clipboardData"),S&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var xe=v[m.format]||v.default;window.clipboardData.setData(xe,y)}else d.clipboardData.clearData(),d.clipboardData.setData(m.format,y);m.onCopy&&(d.preventDefault(),m.onCopy(d.clipboardData))}),document.body.appendChild(Z),oe.selectNodeContents(Z),q.addRange(oe);var ee=document.execCommand("copy");if(!ee)throw new Error("copy command was unsuccessful");U=!0}catch(d){S&&console.error("unable to copy using execCommand: ",d),S&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(m.format||"text",y),m.onCopy&&m.onCopy(window.clipboardData),U=!0}catch(xe){S&&console.error("unable to copy using clipboardData: ",xe),S&&console.error("falling back to prompt"),H=J("message"in m?m.message:e),window.prompt(H,y)}}finally{q&&(typeof q.removeRange=="function"?q.removeRange(oe):q.removeAllRanges()),Z&&document.body.removeChild(Z),le()}return U}$.exports=T},79370:function($,h,a){"use strict";a.d(h,{G:function(){return J}});var u=a(98924),v=function(y){if((0,u.Z)()&&window.document.documentElement){var m=Array.isArray(y)?y:[y],S=window.document.documentElement;return m.some(function(H){return H in S.style})}return!1},e=function(y,m){if(!v(y))return!1;var S=document.createElement("div"),H=S.style[y];return S.style[y]=m,S.style[y]!==H};function J(T,y){return!Array.isArray(T)&&y!==void 0?e(T,y):v(T)}},11742:function($){$.exports=function(){var h=document.getSelection();if(!h.rangeCount)return function(){};for(var a=document.activeElement,u=[],v=0;v<h.rangeCount;v++)u.push(h.getRangeAt(v));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return h.removeAllRanges(),function(){h.type==="Caret"&&h.removeAllRanges(),h.rangeCount||u.forEach(function(e){h.addRange(e)}),a&&a.focus()}}}}]);
