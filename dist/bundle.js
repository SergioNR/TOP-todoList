(()=>{"use strict";const t=(document.querySelector(".todoListContainer"),()=>{document.querySelector(".todoListContainer").innerHTML="";let t=(()=>{let t=localStorage.getItem("todoList");return null===t?(console.log("no todolist available in local storage - retrievedTodoListFromLocalStorage()"),null):JSON.parse(t)})();const e=document.querySelector(".todoListContainer");if(null===t||t.length<=0){console.log("no todos in this list");const t=document.createElement("p");t.innerText="Congratulations, no toDos left!",t.classList.add("noTodosText"),e.append(t)}else t.forEach((t=>{e.append((t=>{console.log(t);const e=document.createElement("div");return e.classList.add("todoItemCard"),e.append((t=>{const e=document.createElement("h1");return e.innerText=t,e.classList.add("todoTitle"),e})(t.title)),e.append((t=>{const e=document.createElement("p");return e.innerText=t,e.classList.add("todoDescription"),e})(t.description)),e.append((t=>{const e=document.createElement("p");return e.innerText=t,e.classList.add("todoDueDate"),e})(t.dueDate)),e.append((t=>{const e=document.createElement("p");return e.innerText=t,e.classList.add("todoPriority"),e})(t.priority)),e.append((t=>{const e=document.createElement("p");return e.innerText=t,e.classList.add("todoNotes"),e})(t.notes)),e.append((t=>{const e=document.createElement("p");return e.innerText=t,e.classList.add("todoProjects"),e})(t.project)),e.append((t=>{const e=document.createElement("p");return e.innerText=t,e.classList.add("todoCompletionStatus"),e})(t.completionStatus)),e})(t))}))});let e=[];window.addEventListener("load",(()=>{if(null===localStorage.getItem("todoList"))console.log("no todolist available in local storage"),e=[];else{let t=localStorage.getItem("todoList");e=JSON.parse(t)}}));class o{constructor(t="no title",e="no description",o="no due date",n="no priority",r="no notes for now",s,l=!1){this.title=t,this.description=e,this.dueDate=o,this.priority=n,this.notes=r,this.project=["Default"].concat(s),this.completionStatus=l}}document.querySelector(".newTodoForm").addEventListener("submit",(n=>{n.preventDefault(),console.log(e);let r=new o(n.target.newTodoTitle.value,n.target.newTodoDescription.value,n.target.newTodoDueDate.value,n.target.newTodoPriority.value,void 0,n.target.newTodoProject.value,!1);console.log(r),(o=>{e.push(o),(e=>{localStorage.setItem("todoList",JSON.stringify(e)),t()})(e)})(r)})),document.querySelector(".deleteAllTodosButton").addEventListener("click",(()=>{e=[],localStorage.removeItem("todoList"),t()})),t()})();