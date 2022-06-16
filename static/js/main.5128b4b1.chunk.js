(this.webpackJsonpi18nifty_landingpage=this.webpackJsonpi18nifty_landingpage||[]).push([[0],{537:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(93),o=i(242),r={home:Object(a.c)("/")};Object(o.makeThisModuleAnExecutableRouteLister)(r);var s=Object(a.b)({scrollToTop:!1},r),l=s.RouteProvider,c=s.useRoute,u=s.routes,d="https://github.com/etalab/i18nifty",p="https://docs.i18nifty.dev",b="https://stackblitz.com/edit/react-ts-m4d8w7?file=components/MyComponent.tsx",g=i(54),m=Object(g.createI18nApi)()({languages:["en","fr"],fallbackLanguage:"en"},{en:{App:{documentation:"Documentation","try it":"Try it","edit this website":"Edit this website"},Home:{"hero text subtext":"Type-safe internationalization and translation in React",subTitle:"A i18n library designed to leverage TypeScript's type inference capability.","article title":"Localization is much less of a chore when assisted by intellisense.","article body":"TypeScript let you know where and what translations need to be provided while allowing you explicitly fallback to the default language.","try now":"Try in a playground","article 2 title":"Enable Copilot!","article 2 body":function(e){var t=e.copilotUrl;return"With [GitHub Copilot](".concat(t,") enabled, translation is mostly a matter of supervision, even when there is logic involved!")},"see documentation":"Documentation","production ready":"Production ready","bp title 1":"SSR Ready","bp description 1":function(e){var t=e.nextUrl,i=e.demoNextUrl;return"i18nifty features a great [Next.js](".concat(t,") integration.  \n\t\t\t\t\tFirst print in the user's language read from HTTP header Accept-Language [See for yourself](").concat(i,").")},"bp title 2":"Only the user's language translations downloaded","bp description 2":function(e){var t=e.playgroundUrl;return"i18nifty provide an option for implementing [code splitting](".concat(t,"), so that you avoid bundling every all translations for all languages\n\t\t\t\tin the main JS bundle. (Currently only available for SPAs).")},"bp title 3":"React component and JS logic","bp description 3":"Freely includes React components such as `<a/>` in your translations and involve JavaScript logic like ```message${plural?'s':''}```.","bp title 4":"Language defaults to browser preference","bp description 4":"Language default to `navigator.language` if your app is an SPA or to `ACCEPT-LANGUAGE`\n            \t\tHTTP Header if it's a Next.js app.","bp title 5":"SEO","bp description 5":function(e){var t=e.hreflangImgUrl,i=e.youtubeVideoUrl;return"i18nifty automatically generates [`hreflang` links in your `<head>`](".concat(t,") \n            \t\tto [let Google know](").concat(i,") that your site supports multiple languages.  \n            \t\tThe `?lang=xx` URL parameter works out of the box.")},"bp title 6":"Selected language persisted across reloads","bp description 6":"The language is persisted across reloads using `localStorage` for SPA and \n            \t\tusing cookie for Next.js apps."},FourOhFour:{"not found":"Page not found"}},fr:{App:{documentation:"Documentation","try it":"Essayez","edit this website":"Modifier ce site web"},Home:{"hero text subtext":"Type-safe internationalisation et traduction en React",subTitle:"Une librairie i18n con\xe7ue pour tirer profit des capacit\xe9s d'inf\xe9rence de TypeScript.","article title":"Guid\xe9e par IntelliSense, la localisation n'est plus autant une corv\xe9e.","article body":"TypeScript vous permet de savoir o\xf9 et quelles traductions sont manquantes, tout en vous laissant la possibilit\xe9 de fournir certaines traductions plus tard","try now":"Essayez dans une sandbox","article 2 title":"Activez Copilot!","article 2 body":function(e){var t=e.copilotUrl;return"Avec [GitHub Copilot](".concat(t,") activ\xe9, la traduction est g\xe9n\xe9ralement un travail de supervision, m\xeame quand il y a de la logique JavaScript!")},"see documentation":"Documentation","production ready":"Pr\xeat pour la prod","bp title 1":"Compatible avec le SSR","bp description 1":function(e){var t=e.nextUrl,i=e.demoNextUrl;return"i18nifty s'int\xe8gre parfaitement avec [Next.js](".concat(t,").  \n\t\t\t\t\tPremier print dans la langue de l'utilisateur lu depuis le HTTP header Accept-Language.\n\t\t\t\t\t[Jugez vous-m\xeame](").concat(i,").")},"bp title 2":"Selement les traductions pour une langue sont t\xe9l\xe9charg\xe9es","bp description 2":function(e){var t=e.playgroundUrl;return"i18nifty permet de mettre en \u0153uvre le [code splitting](".concat(t,") afin d'\xe9viter que toutes les traductions\n\t\t\t\tdans toutes les langues soit incluse dans le bundle JS principale (Seulement pour les SPA pour l'instant).")},"bp title 3":"Composants React et logique JS","bp description 3":"Utilisez librement des composants tels que `<a/>` dans vos traductions et faites intervenir de la logique JS tels que ```message${plural?'s':''}```.","bp title 4":"Langue par d\xe9faut selon les pr\xe9f\xe9rences navigateur.","bp description 4":"`navigator.language` est la langue par d\xe9faut si votre app est une SPA,\n\t\t\t\t\tsinon, le Header HTTP `ACCEPT-LANGUAGE` sera utilis\xe9 si vous utilisez Next.js.","bp title 5":"SEO","bp description 5":function(e){var t=e.hreflangImgUrl,i=e.youtubeVideoUrl;return"i18nifty g\xe9n\xe8re automatiquement des liens [`hreflang` dans votre `<head>`](".concat(t,") \n            \t\tafin de [faire savoir a Google](").concat(i,") que votre site est disponible dans plusieurs langues.  \n            \t\tLe param\xe8tre d'URL `?lang=xx` fonctionne par d\xe9faut.")},"bp title 6":"Les rechargements de pages n'affectent pas le choix de la langue","bp description 6":"La langue s\xe9lectionn\xe9e est conserv\xe9e via le `localStorage` dans les SPA\n\t\t\t\tet par le biais de cookies pour Next.js"},FourOhFour:{"not found":"Page non trouv\xe9e"}}}),h=m.useTranslation,f=(m.resolveLocalizedString,m.useLang),y=(m.useResolveLocalizedString,i(43)),j=i(18),v=i(71),x=i(86),O=i(108),S=i(158),w=i(52),T=i(246),L=i(249),k=i.n(L),A=i(159),P=i.n(A),U=i(247),C=i(248),G=i(107),I=Object(j.createThemeProvider)({getTypographyDesc:function(e){return Object(y.a)(Object(y.a)({},Object(j.defaultGetTypographyDesc)(e)),{},{fontFamily:'"Work Sans", sans-serif'})},palette:j.ultravioletPalette}),R=I.ThemeProvider,H=I.useTheme,F=Object(w.createMakeStyles)({useTheme:H}),E=F.makeStyles,N=(F.useStyles,Object(v.createIcon)({accessTime:k.a,sentimentSatisfied:P.a}).Icon),W=(Object(x.createIconButton)({Icon:N}).IconButton,Object(O.createButton)({Icon:N}).Button,Object(S.createText)({useTheme:H}).Text),z={Logo:Object(G.createOnyxiaSplashScreenLogo)({useTheme:H}).OnyxiaSplashScreenLogo,minimumDisplayDuration:0},B=(Object(T.createPageHeader)({Icon:N}).PageHeader,Object(U.createButtonBarButton)({Icon:N}).ButtonBarButton,Object(C.createLanguageSelect)({languagesPrettyPrint:{en:"English",fr:"Fran\xe7ais"}}).LanguageSelect),D=i(3),J=Object(n.memo)((function(){var e=h({FourOhFour:J}).t,t=q().classes;return Object(D.jsx)("div",{className:t.root,children:Object(D.jsxs)(W,{typo:"page heading",children:[e("not found")," \ud83d\ude25"]})})})),q=E({name:{FourOhFour:J}})((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:e.colors.useCases.surfaces.background}}})),V=(Object(g.declareComponentKeys)()({FourOhFour:J}).i18n,i(250)),_=i(251),M=i(160),K=i.p+"static/media/demo_1.ae7fb854.mp4",$=i.p+"static/media/demo_1.18e52eba.webm",Q=i.p+"static/media/demo_2.67a024ab.mp4",X=i.p+"static/media/demo_2.95e716b2.webm",Y=i.p+"static/media/demo_3.040dbc9e.mp4",Z=i.p+"static/media/demo_3.f722f9d8.webm",ee=i(163),te=i(255),ie=i(256);function ne(){var e=h({Home:ne}).t,t=ae().classes;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(_.GlHero,{title:Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(M.GlHeroText,{children:"i18nifty"}),Object(D.jsx)(W,{typo:"display heading",className:t.title2,children:e("hero text subtext")})]}),subTitle:e("subTitle"),illustration:{type:"video",sources:[{src:K,type:"video/mp4"},{src:$,type:"video/webm"}],hasShadow:!0},hasLinkToSectionBellow:!0,classes:{subtitle:t.heroSubtitle,imageWrapper:t.heroImageWrapper,textWrapper:t.heroTextWrapper,illustration:t.heroIllustration}}),Object(D.jsx)(ee.GlArticle,{id:"firstSection",title:e("article title"),body:e("article body"),buttonLabel:e("try now")+" \ud83d\ude80",buttonLink:{href:b},classes:{video:t.articleVideo},illustration:{type:"video",sources:[{src:Q,type:"video/mp4"},{src:X,type:"video/webm"}]},hasAnimation:!0,illustrationPosition:"left"}),Object(D.jsx)(ee.GlArticle,{title:e("article 2 title")+" \ud83e\uddbe",body:e("article 2 body",{copilotUrl:"https://copilot.github.com/"}),buttonLabel:e("see documentation"),buttonLink:{href:p},classes:{video:t.articleVideo2},illustration:{type:"video",sources:[{src:Y,type:"video/mp4"},{src:Z,type:"video/webm"}]},hasAnimation:!0,illustrationPosition:"right"}),Object(D.jsx)(ie.GlSectionDivider,{}),Object(D.jsx)(te.GlCheckList,{heading:e("production ready"),hasAnimation:!0,elements:[{title:e("bp title 1"),description:e("bp description 1",{nextUrl:"https://nextjs.org/",demoNextUrl:"https://ssr.i18nifty.dev"})},{title:e("bp title 2"),description:e("bp description 2",{playgroundUrl:"https://stackblitz.com/edit/react-ts-zgmo8u?file=i18n%252Fi18n.ts"})},{title:e("bp title 3"),description:e("bp description 3")},{title:e("bp title 4"),description:e("bp description 4")},{title:e("bp title 5"),description:e("bp description 5",{hreflangImgUrl:"https://user-images.githubusercontent.com/6702424/172121583-524a83d1-7283-4964-8fd1-a447f1a20be1.png",youtubeVideoUrl:"https://youtu.be/isW-Ke-AJJU?t=3356"})},{title:e("bp title 6"),description:e("bp description 6")}]})]})}ne.routeGroup=Object(a.a)([u.home]);Object(g.declareComponentKeys)()({Home:ne}).i18n;var ae=E({name:{Home:ne}})((function(e){return{heroIllustration:{borderRadius:10,width:function(){if(e.windowInnerWidth>535)return 450}()},articleVideo:{maxWidth:500,borderRadius:10},articleVideo2:{maxWidth:700,borderRadius:10},title2:{color:e.colors.useCases.typography.textFocus,fontStyle:"italic"},heroSubtitle:{color:e.colors.useCases.typography.textPrimary},heroImageWrapper:Object(y.a)({},e.windowInnerWidth>=j.breakpointsValues.lg?{paddingRight:30,paddingLeft:30}:{}),heroTextWrapper:Object(y.a)({},e.windowInnerWidth>=j.breakpointsValues.lg?{marginLeft:70}:{})}})),oe=i(257),re=i(161),se=i(258),le=i.p+"static/media/banner_dark.b3967ff5.png",ce=i.p+"static/media/banner_light.da3bb443.png",ue=Object(n.memo)((function(){var e=c(),t=f(),i=t.lang,a=t.setLang,o=Object(j.useSplashScreen)().hideRootSplashScreen;Object(n.useEffect)((function(){o()}),[]);var r=h({App:ue}).t,s=de(),l=s.classes,u=s.theme;return Object(D.jsx)(V.GlTemplate,{header:Object(D.jsx)(oe.GlHeader,{title:Object(D.jsx)(re.GlLogo,{logoUrl:u.isDarkModeEnabled?le:ce,width:150}),links:[{label:"GitHub",href:d},{label:r("documentation"),href:p},{label:r("try it"),href:b}],enableDarkModeSwitch:!0,githubRepoUrl:d,githubButtonSize:"large",showGithubStarCount:!0,customItemEnd:Object(D.jsx)(B,{className:l.languageSelect,language:i,onLanguageChange:a,variant:"big"})}),headerOptions:{position:"sticky",isRetracted:"smart"},footer:Object(D.jsx)(se.GlFooter,{bottomDivContent:"[GitHub](".concat(d,") - [Documentation](").concat(p,") - [").concat(r("edit this website"),"](").concat(d,"/blob/landingpage/src/ui/i18n.tsx)"),links:[{href:"https://www.npmjs.com/package/i18nifty",label:Object(D.jsx)("img",{src:"https://img.shields.io/npm/dw/i18nifty",alt:""})},{href:"".concat(d,"/blob/main/LICENSE"),label:Object(D.jsx)("img",{src:"https://img.shields.io/npm/l/i18nifty",alt:""})}]}),children:function(){var t=ne;return t.routeGroup.has(e)?Object(D.jsx)(t,{}):Object(D.jsx)(J,{})}()})})),de=(Object(g.declareComponentKeys)()({App:ue}).i18n,E({name:{App:ue}})((function(e){return{languageSelect:{display:function(){if(!(e.windowInnerWidth>=j.breakpointsValues.lg))return"none"}()}}}))),pe=i(259);Object(pe.createRoot)(document.getElementById("root")).render(Object(D.jsx)(n.StrictMode,{children:Object(D.jsx)(l,{children:Object(D.jsx)(R,{splashScreen:z,children:Object(D.jsx)(ue,{})})})}))}},[[537,1,2]]]);
//# sourceMappingURL=main.5128b4b1.chunk.js.map