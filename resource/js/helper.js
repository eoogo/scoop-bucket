/**
 * 获取应用列表
 * @return object {"源地址": ["应用列表": ["应用名称", "版本号", "应用介绍", "开源协议"]]}
 * @throws Error 请求失败
 */
async function getAppList(resource = 'https://raw.githubusercontent.com/rasa/scoop-directory/master/by-apps.md') {
    return await $.get(resource, {})
        .then(res => {
            res = res.split('\n');
            let app_list = {};

            let catalog = {};
            let app_index = 0;
            res.forEach(function (v) {
                if (v.substr(0, 3) == '###') {
                    catalog = v.match(/\[.*?\]/)[0] || null;
                    catalog = catalog.substr(1, catalog.length - 2);
                    app_list[catalog] = [];
                    app_index = 0;
                } else {
                    if (typeof app_list[catalog] == 'object' && v.substr(0, 3) == '| [') {
                        app = v.split(/\s?\|\s?/);
                        app.shift();
                        app.pop();
                        app_list[catalog][app_index++] = app;
                    }
                }
            });
            return app_list;
        })
        .catch(err => {
            throw new Error('应用列表获取失败, 原因是 ' + err.statusText + ':' + err.statusCode);
        });
}