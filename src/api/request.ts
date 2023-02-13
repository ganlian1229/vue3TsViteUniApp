const requestHeader = 'http://www.fengyugo.com:8012/dxhrdcw/';
//post请求方法
export async function post(url: string, params: { isLonging: boolean }) {
    if (!params.isLonging) {
        uni.showLoading({
            title: '加载中'
        });
    }

    return new Promise((resolve, reject) => {
        uni.request({
            url: requestHeader + url,
            method: 'POST',
            data: params,
            header: {
                'content-type': 'application/x-www-form-urlencoded' //FROM
                // "content-type": "application/json;charset=UTF-8" //JSON
            },
            success: (res) => {
                // console.log(res.data.code)
                if ((res.data as any).code == 1) {
                    resolve(res.data);
                } else {
                    uni.showToast({
                        title: (res.data as any).msg,
                        icon: 'none'
                    });
                }
            },
            fail: (err) => {
                // 调用接口失败
                uni.showToast({
                    title: '请检查网络',
                    icon: 'none'
                });
                reject(err);
            },
            complete: () => {
                uni.hideLoading();
            }
        });
    });
}

//文件上传方法
//url:上传的地址   filePath：图片地址   fileKey：后台给的文件名  params 其余参数（对象，不是FromData()对象）
export function multiPost(url: string, filePath: any, fileKey: any, params: any) {
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: requestHeader + url,
            filePath: filePath,
            name: fileKey,
            formData: params,
            success: function (res) {
                resolve(JSON.parse(res.data));
            },
            fail: (err) => {
                uni.showToast({
                    title: '请检查网络',
                    icon: 'none'
                });
                // 调用接口失败
                reject(err);
            }
        });
    });
}
