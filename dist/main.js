(()=>{function n(n,e,t,r,o,i,u){try{var c=n[i](u),a=c.value}catch(n){return void t(n)}c.done?e(a):Promise.resolve(a).then(r,o)}function e(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var u=e.apply(t,r);function c(e){n(u,o,i,c,a,"next",e)}function a(e){n(u,o,i,c,a,"throw",e)}c(void 0)}))}}function t(){return(t=e(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,console.log("hola");case 2:case"end":return n.stop()}}),n)})))).apply(this,arguments)}console.log("hello"),function(){t.apply(this,arguments)}()})();