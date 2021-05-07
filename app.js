const listBtn = document.querySelector('.list'),
      cards = document.querySelectorAll('.card')
      listItems= document.querySelectorAll('.list_item')

      console.log(listItems);


     

      function filter(){
       listBtn.addEventListener('click',e=>{
         const targetId = e.target.dataset.id
         const target = e.target
        
// делаем переключение кнопок
       if(target.classList.contains('list_item')){
        listItems.forEach(item=>{
          item.classList.remove('activ_btn')
        })

        target.classList.add('activ_btn')
       }
        //  console.log(targetId);
         switch(targetId){
           case 'all':
            getItems('card')
             break
           case 'winter':
            cards.forEach(item=>{
              if(item.classList.contains('winter')){
                item.style.display='block'
              }else {
                item.style.display='none'
              }
            })
             break
       //  =================
             case 'spring':
              getItems(targetId)
               break 
// =======================
               case 'summer':
                getItems(targetId)
                 break 

                 case 'autumn':
                  getItems(targetId)
                   break 

               
         }
       })
      }

      filter()


      // модернизация

      function getItems (className){
        cards.forEach(item=>{
          if(item.classList.contains(className)){
            item.style.display='block'
          }else {
            item.style.display='none'
          }
        })
      }

     