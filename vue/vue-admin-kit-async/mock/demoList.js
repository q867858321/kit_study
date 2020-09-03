
let demoList = {
    status: 200,
    message: 'success',
    data: {
        total: 100,
        'rows|10': [{
            id: '@guid',
            name: '@cname',
            'age|20-30': 23,
            'job|1': ['前端工程师1', '后端工程师2', 'UI工程师3', '需求工程师4']
        }]
    }
};
export default {
    'get|parameter/query': option => {
        return {
            status: 200,
            message: 'success',
            data: [{
                id: 1,
                name: 'zs',
                age: '23',
                job: '前端工程师'
            }, {
                id: 2,
                name: 'ww',
                age: '24',
                job: '后端工程师'
            }]
        };
    },
    'get|parameter/query/aa': demoList
}