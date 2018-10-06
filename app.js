document.getElementById('Data').style.visibility='hidden';
window.addEventListener('load',init);
function init(){
  var video = document.querySelector('#v'), canvas = document.querySelector('#c'), btn = document.querySelector('#t'), img = document.querySelector('#img');

  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUSerMedia || navigator.msGetUserMedia);

  if(navigator.getUserMedia){
    navigator.getUserMedia({video:true},function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    },function(e){console.log(e)});

    video.addEventListener('loadedmetadata',function(){canvas.width = video.videoWidth, canvas.height = video.videoHeight;},false);
    btn.addEventListener('click',function(){
      canvas.getContext('2d').drawImage(video,0,0);
      let imgData = canvas.toDataURL();
      img.setAttribute('src',imgData);

      document.getElementById('registro').addEventListener('click', () => { 
        
        firebase.database().ref(document.getElementById('nombre').value)
      
        .set({
               nombre :document.getElementById('nombre').value,
               correo : document.getElementById('correo').value,
               fecha: new Date().getDate() + '/' + new Date().getMonth() + '/' + new Date().getFullYear(),
               hora: new Date().getHours() + 'h ' + new Date().getMinutes() + 'min ' + new Date().getSeconds() + 'sec',
               fotografia: imgData
            })
            
        });
        
    });


  }else{
  }}

  
 
   document.getElementById('admi').addEventListener('click',function(){
    document.getElementById('Data').style.visibility = 'visible';
    document.getElementById('form').style.visibility ='hidden';
        const getData = firebase.database().ref();
        getData.on('child_added', function(data) {
            data.val()
            console.log(data.val())
            const p = document.getElementById('Data');
            const div = document.createElement('div');
            const img = document.createElement('img');
            const pN = document.createElement('p');
            const pC = document.createElement('p');
            const pF = document.createElement('p');
            const pH = document.createElement('p');
            const text1 = document.createTextNode('Nombre :'+' '+ data.val().nombre );
            const text2 = document.createTextNode('Correo :'+ data.val().correo );
            const text3 = document.createTextNode('Fecha :'+ data.val().fecha );
            const text4 = document.createTextNode('Hora :'+ data.val().hora );
            img.setAttribute('src',data.val().fotografia)
            pN.setAttribute('id','N',)
            pC.setAttribute('id','C',)
            pF.setAttribute('id','F',)
            pH.setAttribute('id','H',)
            pN.appendChild(text1);
            pC.appendChild(text2);
            pF.appendChild(text3);
            pH.appendChild(text4);
            div.appendChild(img);
            div.appendChild(pN);
            div.appendChild(pC);
            div.appendChild(pF);
            div.appendChild(pH);
            p.appendChild(div);
    })
});

