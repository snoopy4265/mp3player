(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(8),r=t.n(i),l=(t(15),function(){return c.a.createElement("div",{className:"artist"},c.a.createElement("img",{src:"https://picsum.photos/540",alt:"artist",className:"ui fluid image"}),c.a.createElement("div",{className:"ui huge header"},"Richard Green"),c.a.createElement("div",{className:"ui bottom aligned grid"},c.a.createElement("div",{className:"four wide column"},c.a.createElement("h3",null,"FOLLOWERS"),c.a.createElement("div",{className:"sub header"},"5,790")),c.a.createElement("div",{className:"twelve wide column"},c.a.createElement("button",{className:"ui black basic huge button"},"FOLLOW"),c.a.createElement("button",{className:"ui orange huge button"},"PLAY"))))}),s=t(2),o=t(3),u=t(5),m=t(4),d=t(1),h=t(6),p=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).convertTime=function(e){var a=Math.floor(e/60),t=e-60*a;return t<10&&(t="0"+t),e=a+":"+t},t.state={},t.convertTime=t.convertTime.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.percentage;return c.a.createElement("div",{className:"progress-bar"},c.a.createElement("div",{className:"filler",style:{width:"".concat(e,"%")}}))}}]),a}(c.a.Component),v=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).play=function(){t.setState({play:!0}),t.audio=new Audio(t.props.track.url),t.audio.play(),t.interval=setInterval(function(){t.setState({currentTime:t.state.currentTime+1,percentage:t.state.percentage+1})},1e3)},t.pause=function(){t.setState({play:!1}),t.audio.pause(),clearInterval(t.interval)},t.state={play:!1,currentTime:0,percentage:0},t.play=t.play.bind(Object(d.a)(t)),t.pause=t.pause.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.percentage,a=this.play,t=this.pause,n=this.props.track;return c.a.createElement("div",{className:"ui middle aligned grid current-track-container"},c.a.createElement("div",{className:"two wide column current-track-cover",style:{backgroundImage:"url(".concat(n.cover,")")}}),c.a.createElement("div",{className:"four wide column current-track-info"},c.a.createElement("p",{className:"ui big header"},n.title),c.a.createElement("p",{className:"ui subheader"},n.artist)),c.a.createElement("div",{className:"eight wide column current-track-control"},c.a.createElement("button",{className:"ui icon black big button",style:{background:"none"}},c.a.createElement("i",{className:"step backward icon"})),this.state.play?c.a.createElement("button",{className:"ui icon button cta",onClick:t},c.a.createElement("i",{className:"pause icon"})):c.a.createElement("button",{className:"ui icon button cta",style:{paddingRight:"8px"},onClick:a},c.a.createElement("i",{className:"play icon"})),c.a.createElement("button",{className:"ui icon black big button",style:{background:"none"}},c.a.createElement("i",{className:"step forward icon"}))),c.a.createElement(p,{percentage:e}))}}]),a}(c.a.Component),b=[{id:1,url:"http://k006.kiwi6.com/hotlink/z840lvfmit/green_day_-_wake_me_up_when_september_ends_chris_.mp3",album:"Itself",cover:"https://picsum.photos/id/1050/200",title:"Great Pleasure",artist:"Richard Green",duration:"4:04"},{id:2,url:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3",album:"Solo",cover:"https://picsum.photos/id/1083/200",title:"Mistaken Idea",artist:"Richard Green",duration:"3:12"},{id:3,url:"http://k003.kiwi6.com/hotlink/qfj1afql68/blue_moon_cover_-_Mikael_Levan_and_Julie_London.mp3",album:"Solo",cover:"https://picsum.photos/id/1083/200",title:"Explorer Of The Truth",artist:"Richard Green",duration:"2:29"},{id:4,url:"http://k003.kiwi6.com/hotlink/qfj1afql68/blue_moon_cover_-_Mikael_Levan_and_Julie_London.mp3",album:"Happiness",cover:"https://picsum.photos/id/1038/200",title:"Master Builder",artist:"Richard Green",duration:"2:29"},{id:5,url:"http://k003.kiwi6.com/hotlink/qfj1afql68/blue_moon_cover_-_Mikael_Levan_and_Julie_London.mp3",album:"No More Excuses",cover:"https://picsum.photos/id/1068/200",title:"Because It Is Pain",artist:"Richard Green",duration:"2:29"}],E=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(m.a)(a).call(this,e))).state={currentTrack:b[0],isActive:!1},t.handleMusicOnChange=t.handleMusicOnChange.bind(Object(d.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleMusicOnChange",value:function(e){this.setState({currentTrack:e,isActive:!this.state.isActive})}},{key:"render",value:function(){var e=this.handleMusicOnChange,a=this.state,t=a.currentTrack,n=a.isActive,i="item";return c.a.createElement("div",null,c.a.createElement("div",{className:"track-list block"},c.a.createElement("h1",{className:"ui header"},"Top Songs"),c.a.createElement("div",{className:"ui ordered huge middle aligned divided list"},b.map(function(a){return c.a.createElement("div",{className:n&&a.id===t.id?i+=" active":i,onClick:function(){return e(a)}},c.a.createElement("img",{src:a.cover,alt:"albumcover",className:"ui mini rounded image"}),c.a.createElement("div",{className:"content"},a.title),c.a.createElement("div",{className:"right floated content"},a.duration,c.a.createElement("button",{className:"ui icon black button",style:{background:"none",color:"black"}},c.a.createElement("i",{className:"play icon"}))))}))),c.a.createElement(v,{track:t}))}}]),a}(c.a.Component),k=function(){return c.a.createElement("div",{className:"block"},c.a.createElement("h1",{className:"ui header"},"Albums"),c.a.createElement("div",{className:"ui middle aligned grid"},b.map(function(e){return c.a.createElement("div",{className:"five wide column"},c.a.createElement("img",{src:e.cover,alt:"albumcover",className:"ui image"}),c.a.createElement("div",{className:"ui header"},e.album))})))};var g=function(){return c.a.createElement("div",{className:"ui grid stackable container"},c.a.createElement("div",{className:"eight wide column"},c.a.createElement("div",{className:"shade"}),c.a.createElement("div",{className:"wrapper"},c.a.createElement(l,null))),c.a.createElement("div",{className:"eight wide column"},c.a.createElement("div",{className:"wrapper"},c.a.createElement(E,null),c.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a483f043.chunk.js.map