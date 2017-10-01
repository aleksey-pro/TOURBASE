import sendAjaxJson from './sendAjax';

export default function prepareSend(url, form, data, cb) {
  
  
  // function strip(html)
  // {
  //   let tmp = document.createElement("DIV");
  //   tmp.innerHTML = html;
  //   return tmp.textContent || tmp.innerText;
  // }
    
  let resultContainer = form.querySelector('.status');
  resultContainer.innerHTML = 'Sending...';
  
  sendAjaxJson(url, data, function (data) {
    form.reset();
    resultContainer.innerHTML = data;
    if (cb) {
      cb(data);
    }
  });
}

