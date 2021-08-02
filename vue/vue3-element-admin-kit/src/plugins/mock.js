export default {
    install: () => {
        const setting = require("@/setting");
        if (setting.pro_mock && VE_ENV.MODE === "production") {
            const Mock = require("mockjs"); //引入

            const files = require.context("@/api/modules", false, /\.js$/);
            files.keys().forEach(key => {
                let obj = files(key);
                Object.keys(obj).forEach(item => {
                    Mock.mock(
                        obj[item].url,
                        obj[item].type,
                        obj[item].response
                    );
                });
            });
        }
    }
};
