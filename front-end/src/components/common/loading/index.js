import load from './ILoading';

const ILoading = {};

ILoading.install = function (Vue, options) {
    let el = document.createElement('div');
    el.id = 'i_loading';
    document.body.appendChild(el);
    let Loading = Vue.extend(load);
    let loadVm = new Loading();
    loadVm.$mount('#i_loading');
    Vue.prototype.$ILoading = loadVm;
};

export default ILoading;
