/**
 * 获取应用列表
 * @param resource 资源列表，如果为空自动获取 https://raw.githubusercontent.com/eoogo/scoop-bucket/master/bucket.md 中的列表
 *  资源格式以 https://raw.githubusercontent.com/rasa/scoop-directory/master/by-apps.md 作为标准
 * @return object {"源地址": ["应用列表": ["应用名称", "版本号", "应用介绍", "开源协议"]]}
 * @throws Error 处理失败
 */
async function getAppList(resource = null) {
    let app_list = JSON.parse(localStorage.getItem('app_list'));
    if (!app_list || typeof app_list != 'object' || Object.keys(app_list).length < 1) {
        if (!resource) {
            resource = await $.get('https://raw.githubusercontent.com/eoogo/scoop-bucket/master/source_list.md')
                .then(source_list => source_list.split('\n'))
                .catch(err => {
                    throw new Error('Software source, Because ' + err.statusText + ':' + err.statusCode);
                });
        }
        if (typeof resource != 'object') resource = [resource];
        let res = '';
        for (item of resource) {
            res += '\n' + await $.get(item)
                .then(res => res)
                .catch(err => {
                    throw new Error(item + ' List fetch failed, Because ' + err.statusText + ':' + err.statusCode);
                });
        }
        res = res.split('\n').filter(v => !!v);
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
        localStorage.setItem('app_list', JSON.stringify(app_list));
        return app_list;
    }
    return app_list;
}