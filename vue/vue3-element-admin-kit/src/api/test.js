import request from "@/axios-config/request";

export function getList(data) {
    return request({
        url: "/api/user/list",
        method: "get",
        data
    });
}
