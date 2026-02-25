// console.log('yes');


const allFilterBtn = document.getElementById('btn-filter-all');
const interviewFilterBtn = document.getElementById('btn-filter-interview');
const rejectedFilterBtn = document.getElementById('btn-filter-rejected');

// console.log(allFilterBtn ,interviewFilterBtn , rejectedFilterBtn);


function toggleFilterBtns(event) {
    
    
    //  option 1
    // if (id == 'btn-filter-interview') {
        
    //     interviewFilterBtn.classList.add('btn-info' , 'text-white');
    //     interviewFilterBtn.classList.remove('text-gray-500');
        
    //     allFilterBtn.classList.remove('btn-info' , 'text-white');
    //     interviewFilterBtn.classList.add('text-gray-500');

    //     rejectedFilterBtn.classList.remove('btn-info' , 'text-white');
    //     rejectedFilterBtn.classList.add('text-gray-500')

    // } else if (id == 'btn-filter-all') {

    //     allFilterBtn.classList.add('btn-info' , 'text-white');
    //     interviewFilterBtn.classList.remove('text-gray-500');
        
    //     interviewFilterBtn.classList.remove('btn-info' , 'text-white');
    //     interviewFilterBtn.classList.add('text-gray-500');

    //     rejectedFilterBtn.classList.remove('btn-info' , 'text-white');
    //     rejectedFilterBtn.classList.add('text-gray-500')


    // } else if (id == 'btn-filter-rejected') {


    //     rejectedFilterBtn.classList.add('btn-info' , 'text-white');
    //     rejectedFilterBtn.classList.remove('text-gray-500')

    //     interviewFilterBtn.classList.remove('btn-info' , 'text-white');
    //     interviewFilterBtn.classList.add('text-gray-500');

    //     allFilterBtn.classList.remove('btn-info' , 'text-white');
    //     interviewFilterBtn.classList.add('text-gray-500');
    // }



    // option 2

    // allFilterBtn.classList.add('text-gray-500');
    // interviewFilterBtn.classList.add('text-gray-500');
    // rejectedFilterBtn.classList.add('text-gray-500');

    // allFilterBtn.classList.remove('btn-info' ,'text-white');
    // interviewFilterBtn.classList.remove('btn-info' ,'text-white');
    // rejectedFilterBtn.classList.remove('btn-info' ,'text-white');


    // const selected = document.getElementById(id);
    // selected.classList.add('btn-info' ,'text-white');
    // selected.classList.remove('text-gray-500')

    
    console.log(event);
    

    const btns = [allFilterBtn , interviewFilterBtn , rejectedFilterBtn];
    
    for (const btn of btns){
        
        
        // // console.log(btn.id);
        // console.log(event , 'current id');
        // console.log(btn.id , 'btn id');


        const currentId = btn.id === event ;

        console.log(currentId);
        
        
        
        btn.classList.toggle('text-gray-500', !currentId );


        btn.classList.toggle('btn-info', currentId );
        btn.classList.toggle('text-white' , currentId);
    }

}