const e=document.querySelector(".feedback-form"),t=document.querySelector('[name="email"]'),a=document.querySelector('[name="message"]');document.querySelector("button");e.addEventListener("input",(function(e){const l={email:t.value,message:a.value};localStorage.setItem("feedback-form-state",JSON.stringify(l))})),e.addEventListener("submit",(function(n){n.preventDefault(),(""===t.value||""===a.value)&&alert("Please fill in all the fields!");localStorage.clear(),console.log(l),e.reset()})),e.addEventListener("input",n),n();const l={email:t.value,message:a.value};function n(e){const l=localStorage.getItem("feedback-form-state"),n=JSON.parse(l);l&&(t.value=n.email,a.value=n.message)}
//# sourceMappingURL=03-feedback.64b24167.js.map