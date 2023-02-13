<template>
    <view class="content">
        <view class="text-area" @click="test">
            <text class="title">{{ title }}</text>
        </view>
        <view class="test" @click="setTestMsg('changeTest')">
            {{ testMsg }}
        </view>
        <u-button @click="setTestMsg('changeTest2')">设置</u-button>
        <u-button @click="setTestMsg('changeTest3')" text="设置"></u-button>
        <u--image :src="src" width="200rpx" height="200rpx"></u--image>
        <view class="test-back"></view>
    </view>
</template>

<script setup lang="ts">
import { shareObj } from '@/share';
import store from '@/store';
// console.log("shareObj", shareObj)
let { testMsg } = storeToRefs(store.mainStore);
let { setTestMsg } = store.mainStore;
let src = ref('/static/wx-login.png');
const title = ref('Hello');
const test = () => {
    console.log('1111', 111);
};
shareObj.title = '分享首页';
console.log('shareObj', shareObj);
</script>

<style lang="scss" scoped>
$bgimg: '~@/static/';
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
        font-size: 36rpx;
        color: #8f8f94;
    }
    .test-back {
        margin: 0 auto;
        width: 319rpx;
        height: 135rpx;
        background: url($bgimg + 'choice-befor-img.png') no-repeat center/100%;
    }
}
</style>
