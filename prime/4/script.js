let contact = document.querySelector(".block_contact");

let btn_contact = document.querySelector(".contact_btn");

let exit_contact = document.querySelector(".btn_exit");

let menu_exit = document.querySelector(".menu_exit");

let burger = document.querySelector(".burger_mneu");

let menu = document.querySelector(".block_menu");

let one = document.querySelector(".one");

one.onclick = push_contact;


burger.onclick = push_up_menu;

menu_exit.onclick = push_close_menu;

btn_contact.onclick = push_contact;


exit_contact.onclick = push_exit;

function push_exit(){
     contact.style.display = "none";
}

function push_contact(){
    contact.style.display = "block";
};

function push_up_menu(){
   menu.style.display = "block";
}


function push_close_menu(){
   menu.style.display = "none";
}
