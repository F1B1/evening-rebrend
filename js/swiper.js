export const allSwiper = ()=>{
    const smallTablet = matchMedia('(max-width: 768px)');


    const scrollSwiper = new Swiper('.primary__controls',{
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 8,
    })


    let serviceSwiper = null

    const startResizeFunc = ()=>{
        if(innerWidth < 767){
            serviceSwiper = new Swiper('.service__swiper', {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".service__next",
                    prevEl: ".service__prev",
                  },
            });
        } else{
            if(serviceSwiper){
                serviceSwiper.destroy()
                serviceSwiper = null
            }
        }
    }

    startResizeFunc()

    smallTablet.addEventListener('change',()=>{
        if(innerWidth < 767){
            serviceSwiper = new Swiper('.service__swiper', {
                slidesPerView: 1,
                navigation: {
                    nextEl: ".service__next",
                    prevEl: ".service__prev",
                  },
            });
        } else{
            if(serviceSwiper){
                serviceSwiper.destroy()
                serviceSwiper = null
            }
        }
    })
}