import { defineStore } from 'pinia';
export default defineStore({
    id: 'mainStore', // id必填，且需要唯一
    state: () => {
        return {
            testMsg: 'testMsg'
        };
    },
    actions: {
        setTestMsg(data: any) {
            this.testMsg = data;
        }
    }
});
