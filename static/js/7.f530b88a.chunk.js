(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[7],{432:function(e,t,n){"use strict";t.a=n.p+"static/media/ava.c429bb80.png"},435:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return i}));var r=n(29),a=n(17),o=n.n(a),c=n(138),s=n(438),u=n.n(s),l=function(e,t,n,a){return function(){var s=Object(r.a)(o.a.mark((function r(s){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r){setTimeout((function(){var o={avatar:n,content:a,author:t,datetime:u()().fromNow(),userId:e.toString()};s(Object(c.b)(e.toString(),t,n)),s(Object(c.c)(o,e.toString())),r(!0)}),2e3)})));case 1:case"end":return r.stop()}}),r)})));return function(e){return s.apply(this,arguments)}}()},i=function(e,t){return function(){var n=Object(r.a)(o.a.mark((function n(r,a){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){setTimeout((function(){var o=a().authState.photos,s=a().authState.id,l={avatar:o?o.small:"",content:t,author:a().authState.login,datetime:u()().fromNow(),userId:s?s.toString():""};e&&r(Object(c.c)(l,e)),n(!0)}),2e3)})));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}},455:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(29),o=n(11),c=n(10),s=n(14),u=n(13),l=n(17),i=n.n(l),p=n(35),f=n(5),b=n(420),g=n(432),j=n(451),d=n(447),h=n(453),w=n(223),O=n(0),m=n.n(O),x=n(154),C=n(439),k=n(440),v=n(6),P=Object(O.memo)((function(e){var t=e.people,n=e.following_ID,r=e.unfollowCallback,a=e.followCallback;return Object(v.jsx)("div",{children:t.followed?Object(v.jsx)(x.a,{disabled:n.some((function(e){return e===t.id})),className:"people_followed__btn",style:{border:"none",padding:0,height:0},size:"large",onClick:function(){return r(t.id)},children:Object(v.jsx)(C.a,{})}):Object(v.jsx)(x.a,{disabled:n.some((function(e){return e===t.id})),className:"people_followed__btn",style:{border:"none",padding:0},onClick:function(){return a(t.id)},children:Object(v.jsx)(k.a,{})})})})),S=b.a.TextArea,y=Object(O.memo)((function(e){var t=e.peoples,n=e.pageSize,o=e.totalCount,c=e.onShowSizeChange,s=e.sendMessageCallback,u=e.setCurrentPageCallback,l=j.a.Meta,p=m.a.useState(!1),b=Object(f.a)(p,2),x=b[0],C=b[1],k=m.a.useState(""),y=Object(f.a)(k,2),z=y[0],_=y[1],M=m.a.useState(!1),N=Object(f.a)(M,2),F=N[0],I=N[1],T=m.a.useState(null),D=Object(f.a)(T,2),U=D[0],A=D[1],J=function(){var e=Object(a.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I(!0),!U){e.next=4;break}return e.next=4,s(U,z).then((function(){C(!1),_("")})).catch((function(){console.log("error")})).finally((function(){I(!1)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[t.map((function(t){return Object(v.jsx)("div",{children:Object(v.jsx)(j.a,{style:{width:300,margin:"20px 10px"},cover:Object(v.jsx)("img",{alt:"example",src:t.photos.large||g.a}),actions:[Object(v.jsx)(w.a,{onClick:function(){return function(e){A(e),C(!0)}(t)}},"edit"),Object(O.createElement)(P,Object(r.a)(Object(r.a)({},e),{},{people:t,key:"".concat(t.id,"-followUnfollow")}))],children:Object(v.jsx)(l,{title:t.name,description:t.status})})})})),Object(v.jsx)(d.a,{style:{marginTop:"20px"},total:o,pageSize:n,onChange:u,onShowSizeChange:c}),Object(v.jsx)(h.a,{title:"Send message ".concat(U?U.name:"User name"),visible:x,onOk:J,confirmLoading:F,onCancel:function(){return C(!1)},children:Object(v.jsx)(S,{onChange:function(e){return _(e.currentTarget.value)},rows:4,placeholder:"Write message",maxLength:200,value:z})})]})})),z=n(51),_=n(57),M=n(141),N=n(82),F=n(149),I=function(e){return e.peoplesPage.peoples},T=function(e){return e.peoplesPage.totalCount},D=function(e){return e.peoplesPage.currentPage},U=function(e){return e.peoplesPage.countPeoplesOnPage},A=function(e){return e.peoplesPage.isFetching},J=function(e){return e.peoplesPage.flag},L=function(e){return e.peoplesPage.isFollowing},W=function(e){return e.peoplesPage.following_ID},E=n(415),q=n(435),B=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),u=0;u<o;u++)s[u]=arguments[u];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.getPeoples(e.props.pageSize,e.props.currentPage)},e.sendNewMessageCallback=function(){var t=Object(a.a)(i.a.mark((function t(n,r){var a,o,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.id,o=n.name,c=n.photos,t.next=3,e.props.sendNewMessage(a,o,c.small,r);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),e.setCurrentPageCallback=function(t){return e.props.getPeoples(e.props.pageSize,t)},e.setSizePageCallback=function(t,n){e.props.setCountPeoplesOnPage(t,n)},e.followCallback=function(t){return e.props.follow(t,!e.props.flag)},e.unfollowCallback=function(t){return e.props.unfollow(t,!e.props.flag)},e.render=function(){return Object(v.jsxs)(v.Fragment,{children:[e.props.isFetching&&Object(v.jsx)(E.a,{size:"large"}),Object(v.jsx)(y,Object(r.a)(Object(r.a)({},e.props),{},{sendMessageCallback:e.sendNewMessageCallback,followCallback:e.followCallback,unfollowCallback:e.unfollowCallback,onShowSizeChange:e.setSizePageCallback,setCurrentPageCallback:e.setCurrentPageCallback}))]})},e}return Object(o.a)(n)}(m.a.PureComponent);t.default=Object(N.c)(Object(p.b)((function(e){return{peoples:I(e),totalCount:T(e),currentPage:D(e),pageSize:U(e),isFetching:A(e),flag:J(e),isFollowing:L(e),following_ID:W(e)}}),{follow:function(e,t){return function(){var n=Object(a.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(M.a)(e,t,r,_.d.setFollow(e),z.b);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},unfollow:function(e,t){return function(){var n=Object(a.a)(i.a.mark((function n(r){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(M.a)(e,t,r,_.d.setUnfollow(e),z.h);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getPeoples:function(e,t){return function(){var n=Object(a.a)(i.a.mark((function n(r){var a;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_.d.getUsers(e,t);case 3:a=n.sent,r(Object(z.f)(a.items)),r(Object(z.g)(a.totalCount)),r(Object(z.d)(t)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log("peoplesThunk -> getPeoples ",n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}()},setCountPeoplesOnPage:z.c,sendNewMessage:q.b}),F.a)(B)}}]);
//# sourceMappingURL=7.f530b88a.chunk.js.map