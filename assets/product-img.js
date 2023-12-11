
$(function(){


    $('.ss_nl').css('display','inline-block')


    if(getQueryString('sku') != '' && getQueryString('sku') !=undefined){

      let sku = getQueryString('sku')
        let jep  = getQueryString('sku').split('66')
        if(jep[0] == 's'){
            $('.pro_block_first .blo_li:first-child').trigger("click")
        }else if(jep[0] == 'r'){
            $('.pro_block_first .blo_li:nth-child(2)').trigger("click")
        }else if(jep[0] == 'x'){
            $('.pro_block_first .blo_li:nth-child(3)').trigger("click")
        }
    
        if(jep[1]== 'nl'){
            $('.pro_block_sec .blo_li:first-child').trigger("click")
        }else if(jep[1]== 'lf'){
            $('.pro_block_sec .blo_li:nth-child(2)').trigger("click")
        }else if(jep[1]== 'ut'){
            $('.pro_block_sec .blo_li:nth-child(3)').trigger("click")
        }
        else if(jep[1]== 'mn'){
            $('.pro_block_sec .blo_li:nth-child(4)').trigger("click")
        }

        $('.'+sku).children('input').trigger("click")
    
    
    }else{
    $('.pro_block_sec .blo_li:first-child').trigger("click")

    }



})

function isShowTitle(){



        for(var i=0;i<$('.HERO').length ;i++){
        let dis = $('.HERO').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.HERO').eq(0).prev().show()
        break

        }else{
            $('.HERO').eq(0).prev().hide()
        }
    }


    for(var i=0;i<$('.LEGEND').length ;i++){
        let dis = $('.LEGEND').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.LEGEND').eq(0).prev().show()
        break

        }else{
            $('.LEGEND').eq(0).prev().hide()
        }
    }



    for(var i=0;i<$('.HUNTER').length ;i++){
        let dis = $('.HUNTER').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.HUNTER').eq(0).prev().show()
        break

        }else{
            $('.HUNTER').eq(0).prev().hide()
        }
    }


    
    for(var i=0;i<$('.DEFENDER').length ;i++){
        let dis = $('.DEFENDER').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.DEFENDER').eq(0).prev().show()
        break

        }else{
            $('.DEFENDER').eq(0).prev().hide()
        }
    }

    for(var i=0;i<$('.GLADIATOR').length ;i++){
        let dis = $('.GLADIATOR').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.GLADIATOR').eq(0).prev().show()
        break

        }else{
            $('.GLADIATOR').eq(0).prev().hide()
        }
    }


    for(var i=0;i<$('.COMMANDER').length ;i++){
        let dis = $('.COMMANDER').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.COMMANDER').eq(0).prev().show()
        break

        }else{
            $('.COMMANDER').eq(0).prev().hide()
        }
    }


    for(var i=0;i<$('.ASSASSIN').length ;i++){
        let dis = $('.ASSASSIN').eq(i).css('display')


        if(dis == 'inline-block'){
    $('.ASSASSIN').eq(0).prev().show()
        break

        }else{
            $('.ASSASSIN').eq(0).prev().hide()
        }
    }


}


// 调取url参数
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return null;
 }



$('.pro_block_first .blo_li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    let first_index = $(this).index()
    if(first_index == 0){
        $('.pro_block_sec .blo_li:first-child').trigger("click")
        $('.pro_block_sec .blo_li:last-child').hide()
    }else if(first_index == 1){
        $('.pro_block_sec .blo_li:first-child').trigger("click")
        $('.pro_block_sec .blo_li:last-child').hide()
    }else if(first_index == 2){
        $('.pro_block_sec .blo_li:first-child').trigger("click")
        $('.pro_block_sec .blo_li:last-child').show()
    }
})

$('.pro_block_sec .blo_li').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
    let first_index = $(this).index()

    let siClass,faClass,allClass;
    siClass = $('.pro_block_first .blo_li.active').attr('ss')
    faClass = $('.pro_block_sec .blo_li.active').attr('ll')

    allClass = siClass+'_'+faClass
    console.log(allClass)
    $('.variant-input').css('display','none')
    $('.'+allClass).css('display','inline-block')
    $('.'+allClass).eq(0).children('input').trigger("click")

    isShowTitle()

   
    // if(first_index == 0){
    //         $('.'+allClass).css('display','inline-block')
    //     // $('.pro_block_sec .blo_li:first-child').trigger("click")
    //     // $('.pro_block_sec .blo_li:last-child').hide()
    // }else if(first_index == 1){
    //     // $('.pro_block_sec .blo_li:first-child').trigger("click")
    //     // $('.pro_block_sec .blo_li:last-child').hide()
    // }else if(first_index == 2){
    //     // $('.pro_block_sec .blo_li:first-child').trigger("click")
    //     // $('.pro_block_sec .blo_li:last-child').show()
    // }else if(first_index == 3){
    //     // $('.pro_block_sec .blo_li:first-child').trigger("click")
    //     // $('.pro_block_sec .blo_li:last-child').show()
    // }
})


$('.variant-input').click(function(){
    let img_show = $(this).attr('data-value').toLowerCase().replace(/\s+/g,'_')
    $('.product__thumb-item').hide()
    $('.'+img_show).show()

    let associate_id = $(this).attr('acc-id')


    if(associate_id != '' && associate_id != undefined && associate_id != null){
        let imageDom1 = document.querySelector('.flickity-slider .'+img_show)
        let active = 1
        let allCount = 8
        let images = []
    
    
        
        for (i = 0; i < allCount; i++) {  
            images[i] = new Image()  
                    
            images[i].src = `https://cdn.shopify.com/s/files/1/0716/8842/1681/files/${associate_id}_${i+1}.png`
      
      
            imageDom1.addEventListener('mousemove',(e)=>{
            let right = imageDom1.getBoundingClientRect().right
            let left = imageDom1.getBoundingClientRect().left
            let persent = (e.screenX - left)/(right - left)
            let acc =  Math.ceil(persent * allCount)
          
            if(acc < 1) {
              acc = 1
            } else if (acc > allCount) {
              acc = allCount
            }
      
            if(acc != active) {
              active = acc;
              imageDom1.querySelector('img').src = `https://cdn.shopify.com/s/files/1/0716/8842/1681/files/${associate_id}_${acc}.png`
            }
          })
    }
    
    // if(img_show == 'lava_grey'){

    
    // for (i = 0; i < allCount; i++) {  
    //   images[i] = new Image()  
              
    //   images[i].src = `https://cdn.shopify.com/s/files/1/0505/9392/3272/files/8177669472522_${i+1}.png`


    //   imageDom1.addEventListener('mousemove',(e)=>{
    //   let right = imageDom1.getBoundingClientRect().right
    //   let left = imageDom1.getBoundingClientRect().left
    //   let persent = (e.screenX - left)/(right - left)
    //   let acc =  Math.ceil(persent * allCount)
    
    //   if(acc < 1) {
    //     acc = 1
    //   } else if (acc > allCount) {
    //     acc = allCount
    //   }

    //   if(acc != active) {
    //     active = acc;
    //     imageDom1.querySelector('img').src = `https://cdn.shopify.com/s/files/1/0505/9392/3272/files/8177669472522_${acc}.png`
    //   }
    // })
    // }  

    // }else if(img_show == 'lava_orange'){

        
    }

})




    // let imageDom = document.querySelector('.flickity-slider .image-wrap')
    // let active = 1
    // let allCount = 8
    // let images = []
    
    // for (i = 0; i < allCount; i++) {  
    //   images[i] = new Image()  
              
    //   images[i].src = `https://cdn.shopify.com/s/files/1/0505/9392/3272/files/{{product.id}}_${i+1}.png`
    // }  


    // imageDom.addEventListener('mousemove',(e)=>{
    //   let right = imageDom.getBoundingClientRect().right
    //   let left = imageDom.getBoundingClientRect().left
    //   let persent = (e.screenX - left)/(right - left)
    //   let acc =  Math.ceil(persent * allCount)
    
    //   if(acc < 1) {
    //     acc = 1
    //   } else if (acc > allCount) {
    //     acc = allCount
    //   }

    //   if(acc != active) {
    //     active = acc;
    //     imageDom.querySelector('img').src = `https://cdn.shopify.com/s/files/1/0505/9392/3272/files/{{product.id}}_${acc}.png`
    //   }
    // })