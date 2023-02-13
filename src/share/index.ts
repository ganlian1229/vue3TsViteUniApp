const shareObj = reactive({
    title: '分享标题', // 默认为小程序名称
    path: '/pages/index/index', // 默认为当前页面路径
    imageUrl: '' // 默认为当前页面的截图
});
export default {
    onShow() {
        uni.updateShareMenu({
            withShareTicket: true,
            success() {}
        });
    },
    onShareAppMessage() {
        return {
            title: shareObj.title, // 默认为小程序名称
            path: shareObj.path, // 默认为当前页面路径
            imageUrl: shareObj.imageUrl // 默认为当前页面的截图
        };
    }
};
export { shareObj };
