!function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=25)}({25:function(t,e){var o={fetch:function(){var t=JSON.parse(localStorage.getItem("todos-vuejs-2.0")||"[]");return t.forEach((function(t,e){t.id=e})),o.uid=t.length,t},save:function(t){localStorage.setItem("todos-vuejs-2.0",JSON.stringify(t))}},n={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.completed}))},completed:function(t){return t.filter((function(t){return t.completed}))}},i=new Vue({data:{todos:o.fetch(),newTodo:"",editedTodo:null,visibility:"all"},watch:{todos:{handler:function(t){o.save(t)},deep:!0}},computed:{filteredTodos:function(){return n[this.visibility](this.todos)},remaining:function(){return n.active(this.todos).length},allDone:{get:function(){return 0===this.remaining},set:function(t){this.todos.forEach((function(e){e.completed=t}))}}},filters:{pluralize:function(t){return 1===t?"item":"items"}},methods:{addTodo:function(){var t=this.newTodo&&this.newTodo.trim();t&&(this.todos.push({id:o.uid++,title:t,completed:!1}),this.newTodo="")},removeTodo:function(t){this.todos.splice(this.todos.indexOf(t),1)},editTodo:function(t){this.beforeEditCache=t.title,this.editedTodo=t},doneEdit:function(t){this.editedTodo&&(this.editedTodo=null,t.title=t.title.trim(),t.title||this.removeTodo(t))},cancelEdit:function(t){this.editedTodo=null,t.title=this.beforeEditCache},removeCompleted:function(){this.todos=n.active(this.todos)}},directives:{"todo-focus":function(t,e){e.value&&t.focus()}}});function r(){var t=window.location.hash.replace(/#\/?/,"");n[t]?i.visibility=t:(window.location.hash="",i.visibility="all")}window.addEventListener("hashchange",r),r(),i.$mount(".todoapp")}});