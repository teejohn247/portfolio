    let all =document.querySelector('.ali');
    let web =document.querySelector('.webb');
    let web1 =document.querySelectorAll('.website');
    let graphbtn =document.querySelector('.graphic');

    let graph =document.querySelectorAll('.graphics');
    let all1 = document.querySelectorAll('.all1');
    let hide = document.querySelector('.hide'); 
    let now1 = document.querySelector('.now'); 
    console.log(Array.from(web1))
    let arr = Array.from(graph);
    // arr.map(b => {
    //     b.style.display = 'none'
    // })


//    $(document).ready(function(){
//        $('.ali').click(function(){
//            $('.graphics').show('fast')
//            $('.website').show('fast')
//        })
//        $('.webb').click(function(){
//         $('.graphics').hide()
//     })
//     $('.graphic').click(function(){
//         $('.website').fadeOut('fast')
//     })
//    })



     all.addEventListener('click', () => {
         Array.from(web1).map(a => {
             arr.map(b => b.style.display = "block")
            a.style.display = 'block';
         })
     })
     web.addEventListener('click', () => {
         Array.from(web1).map(a => {
             arr.map(b => b.style.display = "none")
             a.style.display = 'block';
         })
     })
     graphbtn.addEventListener('click', () => {
         Array.from(graph).map(a => {
             Array.from(web1).map(b => b.style.display = "none")
             a.style.display = 'block';
         })
    })