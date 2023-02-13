<template>
    <view class="container my">
        <u-button @click="getUserProfile" text="登录"></u-button>
    </view>
</template>
<script setup lang="ts">
/**
 * @description: //获取用户信息
 * @return {*}
 */
function getUserProfile() {
    uni.getUserProfile({
        desc: '用于完善用户资料',
        success: function (infoRes: any) {
            console.log(infoRes);
        }
    });
}
</script>
