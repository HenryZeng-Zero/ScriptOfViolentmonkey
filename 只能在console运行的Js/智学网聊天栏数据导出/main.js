//获取智学网当前网课的名称
document.getElementsByClassName('room_name')[0].textContent
// 智学网聊天栏数据导出[All、JustName、JustText]
function sectence(Persons, Back) {
    var ClassName = Persons.className;
    console.log(Persons.getAttribute('msg-data-index'));
    if (Back == 'All') {
        if (ClassName == 'other_chat') {
            var Name = Persons.getElementsByClassName('public_chat_name')[0].textContent;
            var Text = Persons.getElementsByClassName('public_chat')[0].textContent;
            return Name + Text;
        } else if (ClassName == 'tea_chat') {
            return Persons.textContent;
        } else if (ClassName == 'assistant_chat') {
            return Persons.textContent;
        } else if (ClassName == 'system_msg') {
            return Persons.textContent;
        }
    } else if (Back == 'JustName') {
        if (ClassName == 'other_chat') {
            var Name = Persons.getElementsByClassName('public_chat_name')[0].textContent;
            return Name.slice(0, -1);
        } else if (ClassName == 'tea_chat') {
            return '[老师]';
        } else if (ClassName == 'assistant_chat') {
            return "[管理员]";
        } else if (ClassName == 'system_msg') {
            return "[系统提示]";
        }
    } else if (Back == 'JustText') {
        if (ClassName == 'other_chat') {
            var Text = Persons.getElementsByClassName('public_chat')[0].textContent;
            return Text;
        } else if (ClassName == 'tea_chat') {
            return Persons.textContent;
        } else if (ClassName == 'assistant_chat') {
            return Persons.textContent;
        } else if (ClassName == 'system_msg') {
            return Persons.textContent;
        }
    }
}
function download(Back) {
    var Length_of_List = document.getElementsByClassName('chat_room')[0].getElementsByClassName('chat_content')[0].getElementsByClassName('chat_area')[0].getElementsByTagName('p').length;
    var all = '';
    for (var i = 0; i <= Length_of_List - 1; i++) {
        var Person = document.getElementsByClassName('chat_room')[0].getElementsByClassName('chat_content')[0].getElementsByClassName('chat_area')[0].getElementsByTagName('p')[i];
        all += sectence(Person, Back) + '\n';
    }
    var name = Back + '.txt';
    var urlObject = window.URL || window.webkitURL || window; var export_blob = new Blob([all]);
    var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
}
download("All");
download("JustName");
download("JustText");
