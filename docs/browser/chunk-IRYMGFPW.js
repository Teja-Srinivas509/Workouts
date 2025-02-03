import{a as P,b as O,c as b,d as S,e as W,f as T,g as N,h as E}from"./chunk-I5QRB5NG.js";import{$ as f,A as l,B as w,E as M,J as m,N as p,Q as n,R as t,U as _,V as d,W as r,X as c,_ as g,aa as k,la as C,ma as x,ua as y,wa as h}from"./chunk-H7GECWOW.js";function I(i,u){if(i&1&&(n(0,"small",12),r(1),t()),i&2){let e=d();l(),c(e.errors.userName)}}function F(i,u){if(i&1&&(n(0,"small",12),r(1),t()),i&2){let e=d();l(),c(e.errors.workoutType)}}function z(i,u){if(i&1&&(n(0,"small",12),r(1),t()),i&2){let e=d();l(),c(e.errors.workoutMinutes)}}function A(i,u){i&1&&(n(0,"p"),r(1,"Workout added successfully!"),t())}var v=class i{constructor(u){this.router=u}userName="";workoutType="";workoutMinutes=null;workoutAdded=!1;errors={};addWorkout(){this.errors={};let u=!1;if(this.userName.trim()||(this.errors.userName="User Name is required.",u=!0),this.workoutType||(this.errors.workoutType="Please select a workout type.",u=!0),(this.workoutMinutes===null||this.workoutMinutes<=0)&&(this.errors.workoutMinutes="Workout minutes must be greater than zero.",u=!0),u)return;let e=JSON.parse(localStorage.getItem("workouts")||"[]"),o=e.findIndex(s=>s.name===this.userName);if(o!==-1){let s=e[o].workouts.find(a=>a.type===this.workoutType);s?s.minutes+=this.workoutMinutes:e[o].workouts.push({type:this.workoutType,minutes:this.workoutMinutes})}else e.push({id:e.length+1,name:this.userName,workouts:[{type:this.workoutType,minutes:this.workoutMinutes}]});localStorage.setItem("workouts",JSON.stringify(e)),this.workoutAdded=!0,console.log("workout",e),setTimeout(()=>this.router.navigate(["/display"]),1e3)}static \u0275fac=function(e){return new(e||i)(w(y))};static \u0275cmp=M({type:i,selectors:[["app-workout-form"]],decls:31,vars:7,consts:[[1,"workout-form"],["type","text","placeholder","Enter your name",3,"ngModelChange","ngModel"],["class","error",4,"ngIf"],[3,"ngModelChange","ngModel"],["value","","disabled","","selected",""],["value","Cycling"],["value","Running"],["value","Swimming"],["value","Yoga"],["type","number","placeholder","Enter minutes",3,"ngModelChange","ngModel"],[3,"click"],[4,"ngIf"],[1,"error"]],template:function(e,o){e&1&&(n(0,"div",0)(1,"h2"),r(2,"Add Workout"),t(),n(3,"label")(4,"span"),r(5,"User Name*"),t(),n(6,"input",1),k("ngModelChange",function(a){return f(o.userName,a)||(o.userName=a),a}),t()(),m(7,I,2,1,"small",2),n(8,"label")(9,"span"),r(10,"Workout Type*"),t(),n(11,"select",3),k("ngModelChange",function(a){return f(o.workoutType,a)||(o.workoutType=a),a}),n(12,"option",4),r(13,"Select Workout Type"),t(),n(14,"option",5),r(15,"Cycling"),t(),n(16,"option",6),r(17,"Running"),t(),n(18,"option",7),r(19,"Swimming"),t(),n(20,"option",8),r(21,"Yoga"),t()()(),m(22,F,2,1,"small",2),n(23,"label")(24,"span"),r(25,"Workout Minutes*"),t(),n(26,"input",9),k("ngModelChange",function(a){return f(o.workoutMinutes,a)||(o.workoutMinutes=a),a}),t(),m(27,z,2,1,"small",2),t(),n(28,"button",10),_("click",function(){return o.addWorkout()}),r(29,"Add Workout"),t(),m(30,A,2,0,"p",11),t()),e&2&&(l(6),g("ngModel",o.userName),l(),p("ngIf",o.errors.userName),l(4),g("ngModel",o.workoutType),l(11),p("ngIf",o.errors.workoutType),l(4),g("ngModel",o.workoutMinutes),l(),p("ngIf",o.errors.workoutMinutes),l(3),p("ngIf",o.workoutAdded))},dependencies:[E,T,N,P,S,W,O,b,x,C,h],styles:[".workout-form[_ngcontent-%COMP%]{max-width:500px;margin:30px auto;padding:20px;background-color:#f4f4f4;border-radius:8px;box-shadow:0 4px 8px #0000001a}.workout-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{text-align:center;margin-bottom:20px;font-size:24px;color:#333}.workout-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:block;margin-bottom:15px}.workout-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700;display:block;margin-bottom:5px}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .workout-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:8px;margin:5px 0;border:1px solid #ccc;border-radius:4px;box-sizing:border-box;font-size:16px}.workout-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;padding:12px;background-color:#28a745;color:#fff;font-size:18px;border:none;border-radius:4px;cursor:pointer;transition:background-color .3s}.workout-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#218838}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .workout-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{outline:none;border-color:#80b3ff}.error[_ngcontent-%COMP%]{color:red;font-size:.9em;margin-top:5px;display:block}@media (max-width: 768px){.workout-form[_ngcontent-%COMP%]{max-width:100%;padding:15px}.workout-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .workout-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:14px;padding:8px}.workout-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px}}@media (max-width: 480px){.workout-form[_ngcontent-%COMP%]{max-width:100%;padding:10px}.workout-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .workout-form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:14px;padding:8px}.workout-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-size:16px;padding:10px}}"]})};export{v as WorkoutFormComponent};
