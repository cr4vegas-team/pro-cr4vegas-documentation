(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(90)),c={title:"Control Remoto"},l={unversionedId:"remote-control/app",id:"remote-control/app",isDocsHomePage:!1,title:"Control Remoto",description:"Aplicaci\xf3n8880",source:"@site/docs/remote-control/app.md",slug:"/remote-control/app",permalink:"/pro-cr4vegas-documentation/remote-control/app",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/remote-control/app.md",version:"current",sidebar:"docs",previous:{title:"Camaras",permalink:"/pro-cr4vegas-documentation/remote-control/camaras"},next:{title:"Getting Started",permalink:"/pro-cr4vegas-documentation/docusaurus/getting-started"}},i=[{value:"Puntos de acceso",id:"puntos-de-acceso",children:[]},{value:"Archivos de despliegue",id:"archivos-de-despliegue",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Aplicaci\xf3n:"))," cr4v-remote.local \xf3 192.168.1.134:8880"),Object(o.b)("h2",{id:"puntos-de-acceso"},"Puntos de acceso"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Broker MQTT:"),": ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"mqtt://blogdeldesarrollador.com:1883"),Object(o.b)("li",{parentName:"ul"},"mqtts://blogdeldesarrollador.com:8883"),Object(o.b)("li",{parentName:"ul"},"ws://blogdeldesarrollador.com:8083"),Object(o.b)("li",{parentName:"ul"},"wss://blogdeldesarrollador.com:8084"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Broker MQTT Panel"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"http://blogdeldesarrollador.com:18083"},"http://blogdeldesarrollador.com:18083")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://blogdeldesarrollador.com:18084"},"https://blogdeldesarrollador.com:18084")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"DB"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"192.168.1.134:3310"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Backend API"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"192.168.1.134:8881"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Backend Sockets"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"192.168.1.134:8882")))),Object(o.b)("h2",{id:"archivos-de-despliegue"},"Archivos de despliegue"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"docker-compose.yml")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\nservices:\n  db:\n    container_name: remote-db\n    image: mariadb\n    restart: always\n    command: --default-authentication-plugin=mysql_native_password\n    environment:\n      MYSQL_ROOT_PASSWORD: XxX\n      MYSQL_USER: XxX\n      MYSQL_PASSWORD: XxX\n      MYSQL_DATABASE: XxX\n    volumes:\n      - db:/var/lib/mysql\n    ports:\n      - 3310:3306\n\n  backend:\n    container_name: remote-backend\n    image: rubenfgr/remote-backend:latest\n    restart: always\n    depends_on:\n      - db\n    environment:\n      CR4VEGAS_BACK_APP_PORT: XxX\n      CR4VEGAS_BACK_APP_GLOBAL_PREFIX: XxX\n      CR4VEGAS_BACK_JWT_SECRET: XxX\n      CR4VEGAS_BACK_MULTER_DEST: XxX\n      CR4VEGAS_BACK_MQTT_URL: XxX\n      CR4VEGAS_BACK_DB_TYPE: XxX\n      CR4VEGAS_BACK_DB_HOST: XxX\n      CR4VEGAS_BACK_DB_PORT: XxX\n      CR4VEGAS_BACK_DB_USERNAME: XxX\n      CR4VEGAS_BACK_DB_PASSWORD: XxX\n      CR4VEGAS_BACK_DB_DATABASE: XxX\n      CR4VEGAS_BACK_DB_SYNCHRONIZE: XxX\n      CR4VEGAS_MQTT_HOST: XxX\n    volumes:\n      - backend:/usr/src/app/upload\n    ports:\n      - 8881:8881\n      - 8882:8882\n\n  frontend:\n    container_name: remote-frontend\n    image: rubenfgr/remote-frontend:latest\n    restart: always\n    ports:\n      - 8880:80\n    depends_on:\n      - backend\n\nvolumes:\n  db: {}\n  backend: {}\n")))}b.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),m=r,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?a.a.createElement(d,l(l({ref:t},p),{},{components:n})):a.a.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);