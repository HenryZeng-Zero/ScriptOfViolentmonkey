function download() {
    var Length_of_List = document.getElementsByClassName('chat_room')[0].getElementsByClassName('chat_content')[0].getElementsByClassName('chat_area')[0].getElementsByTagName('p').length;
    var all = '';
    for (var i = 0; i <= Length_of_List - 1; i++) {
        var Person = document.getElementsByClassName('chat_room')[0].getElementsByClassName('chat_content')[0].getElementsByClassName('chat_area')[0].getElementsByTagName('p')[i];
        var Name = Person.getElementsByClassName('public_chat_name')[0].textContent;
        var Text = Person.getElementsByClassName('public_chat')[0].textContent;
        all += Name + Text + '\n';
    }
    var name = 'Chat.txt';
    var urlObject = window.URL || window.webkitURL || window; var export_blob = new Blob([all]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
}
download();
