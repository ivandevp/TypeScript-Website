(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"73Cn":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("ERkP"),l=a.n(n),r=a("Wbzz"),s=function(e){var t=function(t){return e.active&&e.active.toLowerCase()===t?"active":""};return l.a.createElement("nav",{className:"navbar-sub dev-tools"},l.a.createElement("ul",{className:"nav"},l.a.createElement("li",{className:"name"},l.a.createElement("span",null,"Developer Tools")),l.a.createElement("li",{style:{display:"none"}},l.a.createElement("a",{className:t("compiler api"),href:Object(r.withPrefix)("/dev/compiler")},"Compiler API")),l.a.createElement("li",null,l.a.createElement("a",{className:t("sandbox"),href:Object(r.withPrefix)("/dev/sandbox")},"Sandbox")),l.a.createElement("li",null,l.a.createElement("a",{className:t("twoslash"),href:Object(r.withPrefix)("/dev/twoslash")},"Twoslash")),l.a.createElement("li",null,l.a.createElement("a",{className:t("typescript vfs"),href:Object(r.withPrefix)("/dev/typescript-vfs")},"TypeScript VFS")),l.a.createElement("li",null,l.a.createElement("a",{className:t("playground plugins"),href:Object(r.withPrefix)("/dev/playground-plugins")},"Playground Plugins"))))}},"8WMy":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return p}));var n=a("ERkP"),l=a.n(n),r=a("9Dj+"),s=a("Wbzz"),o=(a("pzji"),a("GO2c")),c=a("73Cn"),i=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,{title:"Developers - TypeScript VFS",description:"Run TypeScript in the browser, or anywhere - using a virtual file-system",lang:"en",allSitePage:e.data.allSitePage},l.a.createElement("div",{id:"dev"},l.a.createElement(c.a,{active:"typescript vfs"}),l.a.createElement("div",{className:"raised content main-content-block"},l.a.createElement("div",{className:"split-sixhundred"},l.a.createElement("h1",{style:{marginTop:"20px"}},"Easy access to the compiler API"),l.a.createElement("p",null,"TypeScript VFS lets you create a self-contained TypeScript environment entirely under your control. This library is used to power the Playground, and provides the underlying tooling for ",l.a.createElement(s.Link,{to:"/dev/twoslash"},"twoslash")," code samples."),l.a.createElement("p",null,"There are 3 main uses for TypeScript VFS:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Creating a TypeScript Program as an entry-point to the compiler API"),l.a.createElement("li",null,"Running TypeScript to emit files like ",l.a.createElement("code",null,"*.js"),", ",l.a.createElement("code",null,"*.d.ts")," or ",l.a.createElement("code",null,"*.map")),l.a.createElement("li",null,"Using TypeScript's language service to make the same calls an editor would make")),l.a.createElement("p",null,"You can learn more in the ",l.a.createElement("a",{href:"https://github.com/microsoft/TypeScript-Website/blob/v2/packages/typescript-vfs/"},"TypeScript VFS README"))),l.a.createElement("div",{className:"sixhundred",style:{borderLeft:"1px solid gray",padding:"20px"}},l.a.createElement("h3",null,"Setup with TypeScript from node_modules"),l.a.createElement("pre",null,l.a.createElement("code",{className:"html-code"},"import ts from 'typescript'\nimport tsvfs from 'typescript-vfs'\n\nconst fsMap = tsvfs.createDefaultMapFromNodeModules({ target: ts.ScriptTarget.ES2015 })\nfsMap.set('index.ts', 'console.log(\"Hello World\")')\n\n// ....\n              ")),l.a.createElement("h3",null,"Use the TypeScript CDN to get your lib.d.ts files"),l.a.createElement("pre",null,l.a.createElement("code",{className:"html-code"},"import ts from 'typescript'\nimport tsvfs from 'typescript-vfs'\n\nconst fsMap = await tsvfs.createDefaultMapFromCDN(compilerOptions, ts.version, true, ts)\nfsMap.set('index.ts', 'console.log(\"Hello World\")')\n\nconst system = tsvfs.createSystem(fsMap)\nconst host = tsvfs.createVirtualCompilerHost(system, compilerOptions, ts)\n\nconst program = ts.createProgram({\n  rootNames: [...fsMap.keys()],\n  options: compilerOptions,\n  host: host.compilerHost,\n})\n\n// This will update the fsMap with new files\n// for the .d.ts and .js files\nprogram.emit()\n\n// Now I can look at the AST for the .ts file too\nconst index = program.getSourceFile('index.ts')\n              ")))))))};t.default=function(e){return l.a.createElement(o.a,{locale:"en"},l.a.createElement(i,e))};var p="2739635299"}}]);
//# sourceMappingURL=component---src-pages-dev-typescript-vfs-tsx-e265b245771babb5fba7.js.map