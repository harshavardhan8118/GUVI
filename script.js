


document.getElementById('btn1').addEventListener( 'click', () => {

    var kur=document.getElementById('chapter').value;

            var url = 'https://api-thirukkural.vercel.app/api?num=1';
            var pageNum = parseInt( url.split("=").pop(),10 );
            var nextPage = 'https://api-thirukkural.vercel.app/api?num='+(kur);
            console.log(nextPage);

            fetch(nextPage)
            .then(res => res.json())
        
           .then((result) => {
            var num=document.createElement('div');
            num.setAttribute("class","texxt")
            num.innerHTML = "number: "+result.number;

            var sec=document.createElement('div');
            sec.setAttribute("class","xt")
            sec.innerHTML = "Section: "+result.sect_tam;

            var chgr=document.createElement('div');
            chgr.setAttribute("class","xt")
            chgr.innerHTML = "Chapter group: "+result.chapgrp_tam;

            var chtm=document.createElement('div');
            chtm.setAttribute("class","xt");
            chtm.innerHTML = "Tamil: "+result.chap_tam;

            var ln1=document.createElement('div');
            ln1.setAttribute("class","xti")
            ln1.innerHTML = result.line1;
            var ln2=document.createElement('div');
            ln2.setAttribute("class","xti")
            ln2.innerHTML = result.line2;

            var tamExp=document.createElement('div');
            tamExp.setAttribute("class","xt")
            tamExp.innerText=result.tam_exp;

            var chapter=document.createElement('h3');
            chapter.setAttribute("class","tt")
            chapter.innerHTML = "Chapter: "+result.chap_eng;

            var engli=document.createElement('div');
            engli.setAttribute("class","xt")
            engli.innerHTML = "English: "+result.eng;

            var engExp=document.createElement('div');
            engExp.setAttribute("class","xt")
            engExp.innerText=result.eng_exp;

            var engExp=document.createElement('div');
            engExp.setAttribute("class","xt")
            engExp.innerText=result.eng_exp;

            var slokBody=document.getElementById('slok2');
            slokBody.append(num,sec,chgr,chtm,ln1,ln2,chapter,engli,engExp,tamExp,engExp);
            })
            
            .catch(err => console.log(err));
        })
