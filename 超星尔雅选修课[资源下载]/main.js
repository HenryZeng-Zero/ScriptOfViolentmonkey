// ==UserScript==
// @name        超星尔雅选修课[资源下载]
// @namespace   Violentmonkey Scripts
// @match       *://mooc1.chaoxing.com/*
// @grant       none
// @version     1.0
// @description 超星尔雅选修课[资源下载]工具
// @run-at document-idle
// ==/UserScript==

function GetUrl(Data) {
    var patt1 = new RegExp("\\|.*?\\_\\$");
    return patt1.exec(Data).toString().slice(1, -2);
}

function Flip_character(Data) {
    var Flipcharacter_ = '';
    for (var i = Data.length - 1; i >= 0; i--) {
        Flipcharacter_ += Data[i];
    }
    return Flipcharacter_;
}

function AddNewChoose(id, Url) {
    document.getElementsByClassName('resourse clearfix')[0].getElementsByTagName('li')[id].getElementsByClassName('download')[0].innerHTML = '<a href="' + Url + '" target="_blank">下载资源</a>';
}
function Check(Data) {
    var Fc = Flip_character(Data);
    var Get_file_type = new RegExp(".*?\\.");
    var Fc_file_type = '';
    try {
        Fc_file_type = Flip_character(Get_file_type.exec(Fc).toString());
        var check_data = new RegExp("pdf|doc|ppt|mp|md|txt|wps|jpg|jpeg|gif|bmp|png|tif|psd|swf|avi|mpg|mpeg|mov|rm|rmvb|zip|rar|7z|ht|xl");
        return check_data.test(Fc_file_type);
    } catch (error) {
        return false;
    }
}

(
    function () {
        var Length_of_List = document.getElementsByClassName('resourse clearfix')[0].getElementsByTagName('li').length;
        for (var i = 0; i <= Length_of_List-1; i++) {
            var Data_ = document.getElementsByClassName('resourse clearfix')[0].getElementsByTagName('li')[i].attributes.data.value;
            var Text_ = document.getElementsByClassName('resourse clearfix')[0].getElementsByTagName('li')[i].getElementsByClassName('font14 course_font_14')[0].text;
            var DownLoadUrl = GetUrl(Data_)
            if (Check(Text_)) {
                AddNewChoose(i, DownLoadUrl);
            }
        }
    }
)();