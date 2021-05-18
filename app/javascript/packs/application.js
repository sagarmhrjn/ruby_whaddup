// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "semantic-ui-sass"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

export function scroll_bottom(){
    if($('#messages').length > 0){
        $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }
}

function submit_message(){
    $('#message_body').on('keydown',function(e){
        if(e.key != undefined){
            if(e.key === "Enter"){
                $('button').trigger("click");
                e.target.value = "";
            }
        }
    })
}
$(document).on('turbolinks:load', function(){
    $('.ui.dropdown').dropdown();
    $('.message .close').on('click', function(){
        $(this).closest('.message').transition('fade');
    });
    submit_message();
    scroll_bottom();
})