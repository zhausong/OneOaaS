_mf_tag = {
    "init": function () {
        var id = 'mf_div';
        var div = this.create_element(document, ['div', 'id', id]);
        if (div) {
            div.style.display = "none";
            var body = document.getElementsByTagName('body')[0].firstChild;
            if (body) body.parentNode.insertBefore(div, body);
            var mf_query_string = this.find_our_tag();
            var mf_piggy_string = "";
            if (mf_query_string.length > 0) mf_piggy_string = "?" + mf_query_string;
            if (mf_query_string.length > 0) mf_query_string = "&" + mf_query_string;
            var iframe = '<' + 'iframe src="//tags.mediaforge.com/pix/1230?type=pos' + mf_query_string + '" width="0" height="0">';
            this.inner_html(id, iframe);
            if (mf_query_string.indexOf('orderNumber') != -1) {
                var script_1628 = document.createElement('script');
                if (script_1628) {
                    script_1628.setAttribute('type', 'text/javascript');
                    script_1628.src = "//tags.mediaforge.com/js/1628" + mf_piggy_string;
                    if (body) body.parentNode.insertBefore(script_1628, body);
                }
            }
            if (mf_query_string.indexOf('orderNumber') != -1) {
                var script_2349 = document.createElement('script');
                if (script_2349) {
                    script_2349.setAttribute('type', 'text/javascript');
                    script_2349.src = "//tags.mediaforge.com/js/2349" + mf_piggy_string;
                    if (body) body.parentNode.insertBefore(script_2349, body);
                }
            }
            this.set_timeout(3000);
        }
    }, "create_element": function (doc, def, parent) {
        var el = null;
        if (typeof doc.createElementNS != "undefined") el = doc.createElementNS('http://www.w3.org/1999/xhtml', def[0]); else if (typeof doc.createElement != "undefined") el = doc.createElement(def[0]);
        if (!el) return false;
        for (var i = 1; i < def.length; i++) el.setAttribute(def[i++], def[i]);
        if (parent) parent.appendChild(el);
        return el;
    }, "set_timeout": function (t) {
        this.timeout = setTimeout('timeout_mf()', t ? t : 3000);
    }, "inner_html": function (id, html) {
        document.getElementById(id).innerHTML = html;
    }, "find_our_tag": function () {
        var query_string = "";
        var scripts = document.getElementsByTagName('script');
        for (var script_index = 0; script_index < scripts.length; script_index++) {
            script_name = scripts[script_index].src;
            if (script_name.indexOf("tags.mediaforge.com") != -1) {
                var index = script_name.indexOf("?");
                if (index > -1) {
                    query_string = script_name.substr(index + 1);
                    break;
                }
            }
        }
        return query_string;
    }
};
function timeout_mf() {
    var t = _mf_tag.timeout;
    if (t) _mf_tag.inner_html('mf_div', '');
}
_mf_tag.init();