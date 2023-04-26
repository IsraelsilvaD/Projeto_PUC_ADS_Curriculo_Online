const sections =  document.querySelectorAll('.section');
const secBtns =  document.querySelectorAll('.controls');
const secBtn =  document.querySelectorAll('.control');
const allSections =  document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < secBtn.length; i++){
        secBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn'
        })
    }

    //sections active class

    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the others btns
            secBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sextions
            sections.forEach((section) =>{
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();

function custom_template(obj){
  var data = $(obj.element).data();
  var text = $(obj.element).text();
  if(data && data['img_src']){
      img_src = data['img_src'];
      template = $("<div><img src=\"" + img_src + "\" style=\"width:100%;height:150px;\"/><p style=\"font-weight: 700;font-size:14pt;text-align:center;\">" + text + "</p></div>");
      return template;
  }
}
var options = {
'templateSelection': custom_template,
'templateResult': custom_template,
}
$('#id_select2_example').select2(options);