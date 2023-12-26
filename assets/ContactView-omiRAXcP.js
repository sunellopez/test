import{r as l,o as r,c as n,b as e,w as c,v as m,u as i,i as b,a as d}from"./index-G5nt8ksW.js";const u={class:"flex-shrink-0"},v={class:"py-5"},f={class:"container px-5"},p={class:"bg-light rounded-4 py-5 px-4 px-md-5"},h=d('<div class="text-center mb-5"><div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"><i class="bi bi-envelope"></i></div><h1 class="fw-bolder">Get in touch</h1><p class="lead fw-normal text-muted mb-0">Let&#39;s work together!</p></div>',1),g={class:"row gx-5 justify-content-center"},_={class:"col-lg-8 col-xl-6"},x={id:"contactForm","data-sb-form-api-token":"API_TOKEN"},k={class:"form-floating mb-3"},y=e("label",{for:"name"},"Full name",-1),q=e("div",{class:"invalid-feedback","data-sb-feedback":"name:required"},"A name is required.",-1),w=d('<div class="form-floating mb-3"><input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email"><label for="email">Email address</label><div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div><div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div></div><div class="form-floating mb-3"><input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required"><label for="phone">Phone number</label><div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div></div><div class="form-floating mb-3"><textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height:10rem;" data-sb-validations="required"></textarea><label for="message">Message</label><div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div></div><div class="d-none" id="submitSuccessMessage"><div class="text-center mb-3"><div class="fw-bolder">Form submission successful!</div> To activate this form, sign up at <br><a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a></div></div><div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div><div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>',6),B={__name:"ContactView",setup(E){let s=l(""),o=()=>{console.log(s.value)};return(A,a)=>(r(),n("main",u,[e("section",v,[e("div",f,[e("div",p,[h,e("div",g,[e("div",_,[e("form",x,[e("div",k,[c(e("input",{onChange:a[0]||(a[0]=(...t)=>i(o)&&i(o)(...t)),"onUpdate:modelValue":a[1]||(a[1]=t=>b(s)?s.value=t:s=t),class:"form-control",id:"name",type:"text",placeholder:"Enter your name...","data-sb-validations":"required"},null,544),[[m,i(s)]]),y,q]),w])])])])])])]))}};export{B as default};