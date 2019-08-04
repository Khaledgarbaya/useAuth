import e,{useContext as t,useReducer as o}from"react";import n from"auth0-js";function a(e,t){switch(t.type){case"login":var o=t.authResult,n=t.user,a=1e3*o.expiresIn+(new Date).getTime();return"undefined"!=typeof localStorage&&(localStorage.setItem("access_token",o.accessToken),localStorage.setItem("id_token",o.idToken),localStorage.setItem("expires_at",JSON.stringify(a)),localStorage.setItem("user",JSON.stringify(n))),{user:n,expiresAt:a};case"logout":return"undefined"!=typeof localStorage&&(localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("user")),{user:{},expiresAt:null};default:return e}}var r="undefined"!=typeof window?window.location.protocol+"//"+window.location.host:"https://spark-joy.netlify.com/",i=e.createContext(null),s=function(e){var t=e.children,s=e.navigate,l=new n.WebAuth({domain:"sparkjoy.auth0.com",clientID:"GGfO12E5R8iHPBPh87bym5b3gzmdaYY9",redirectUri:r+"/auth0_callback",audience:"https://sparkjoy.auth0.com/api/v2/",responseType:"token id_token",scope:"openid profile email"}),u=o(a,{user:"undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("user")):{},expiresAt:"undefined"!=typeof localStorage?JSON.parse(localStorage.getItem("expires_at")):null});return h(i.Provider,{value:{state:u[0],dispatch:u[1],auth0:l,navigate:s}},t)};export default function(){var e=t(AuthContext),o=e.state,n=e.dispatch,a=e.auth0,r=e.navigate;return{isAuthenticated:function(){return o.expiresAt&&(new Date).getTime()<o.expiresAt},user:o.user,userId:o.user?o.user.sub:null,login:function(){a.authorize()},logout:function(){n({type:"logout"}),r("/")},handleAuthentication:function(){"undefined"!=typeof window&&a.parseHash(function(e,t){t&&t.accessToken&&t.idToken?function(e){a.client.userInfo(e.accessToken,function(t,o){t?console.log(t):n({type:"login",authResult:e,user:o}),r("/")})}(t):e&&console.log(e)})}}}export{s as AuthProvider};
//# sourceMappingURL=index.mjs.map
