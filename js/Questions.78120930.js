(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Questions"],{"66ba":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"questions",attrs:{id:"question"}},[0==e.counter?o("h1",[e._v("Et c'est parti pour la première question")]):o("h1",[e._v(" Vous etes question : "+e._s(e.counter+1))]),o("question",{key:e.questions[e.counter].id,attrs:{libelle:e.questions[e.counter].libelle,reponse:e.questions[e.counter].reponse,optionReponse:e.questions[e.counter].optionReponse,correctAnswer:e.questions[e.counter].bonneRep},on:{nextQuestion:e.getResponse}})],1)},s=[],i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("h1",[e._v(e._s(e.libelle))]),e._l(e.optionReponse,(function(n){return o("md-checkbox",{attrs:{value:n},model:{value:e.reponse,callback:function(n){e.reponse=n},expression:"reponse"}},[e._v(e._s(n))])})),e.fin?o("b-alert",{attrs:{show:""}},[e._v("Votre score est : "+e._s(e.score)+" / "+e._s(e.questions.length))]):e._e(),o("br"),o("md-button",{staticClass:"md-raised md-primary",on:{click:function(n){e.$emit("nextQuestion",e.checkResponse())}}},[e._v("Suivante →")]),o("br"),o("br"),o("br"),o("br"),e._v(e._s(e.reponse)+"\n")],2)},r=[],l={name:"question",props:{libelle:String,reponse:String,optionReponse:Array,correctAnswer:String},data:function(){return{}},methods:{checkResponse:function(){var e=!0;return-1===this.reponse.indexOf(this.correctAnswer)&&(e=!1),e}}},u=l,a=o("2877"),p=Object(a["a"])(u,i,r,!1,null,null,null),c=p.exports,d={name:"questionnaire",components:{question:c},data:function(){return{index:0,score:0,questions:[{libelle:"Combien font 2 + 2 ?",optionReponse:["4","3","8"],reponse:[],bonneRep:"4"},{libelle:"Qui a gagné la coupe du monde 2018 de football ?",optionReponse:["Croatie","France","Belgique"],reponse:[],bonneRep:"France"},{libelle:"Quelles sont les date de la seconde guerre mondiale ?",optionReponse:["14-18","39-45","la Seconde guerre mondiale a été inventé"],reponse:[],bonneRep:"39-45"},{libelle:"Quel est le prénom du président Hollande ?",optionReponse:["François","Nicolas","Stéphane"],reponse:[],bonneRep:"François"},{libelle:"Combien font 4 + 5 * 2 ?",optionReponse:["18","14","Trop compliqué"],reponse:[],bonneRep:"14"},{libelle:"Quel est la couleur du cheval blanc de Heri IV ?",optionReponse:["blanc","noir","vert"],reponse:[],bonneRep:"blanc"},{libelle:"Quel joueur de football a déja mordu ces adversaires ?",optionReponse:["Crisitiano Ronaldo","Lionel Messi","Luis Suárez"],reponse:[],bonneRep:"Luis Suárez"},{libelle:"Quel joueur de football a volontairement donné un coup de tête à son adversaire ?",optionReponse:["Olivier Giroud","N'Golo Kanté","Zinédine Zidane"],reponse:[],bonneRep:"Zinédine Zidane"},{libelle:"Qu'est ce que la Guerre Froide ?",optionReponse:["La guerre pendant l'hiver","Un conflit sans arme"],reponse:[],bonneRep:"Un conflit sans arme"},{libelle:"Avez-vous aimez ce questionnaire ?",optionReponse:["oui","non"],reponse:[],bonneRep:"oui"}],counter:0,max_question:0,correcteAnswer:0}},mounted:function(){this.max_question=this.questions.length},methods:{action:function(e){e==this.questions[this.index].bonneRep&&this.score++},getResponse:function(e){e&&this.correcteAnswer++,this.counter++}},watch:{counter:function(e){this.counter==this.max_question&&this.$router.push({path:"/result",query:{score:this.correcteAnswer,total:this.max_question}})}}},b=d,h=Object(a["a"])(b,t,s,!1,null,null,null);n["default"]=h.exports}}]);
//# sourceMappingURL=Questions.78120930.js.map
