function redirect()
    { 
      window.location.href= "indexForm.html";
    }
const splash = () => {
window.setTimeout("redirect()",2000)}
window.onload= splash; 