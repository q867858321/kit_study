const roles = [{
  name: '首页',
  role: 'index',
  isHidden: true,
  api: [
    '/api/admin/index',
    '/api/admin/income/indexStatistic'
  ]
}, {
  name: '论坛',
  role: 'bbsparent',
  children: [{
    name: '版块管理',
    role: 'fourmlist',
    api: [
      '/api/admin/forum/listGroupByCategory',
      '/api/admin/category/list',
      '/api/admin/forum/list',
      '/api/admin/forum/get'
    ],
    children: [{
      name: '修改',
      role: 'fourmedit',
      api: [
        '/api/admin/forum/batchupdate',
        '/api/admin/category/o_priority_update',
        '/api/admin/forum/update',
      ]
    }, {
      name: '添加',
      role: 'fourmadd',
      api: [
        '/api/admin/forum/batchupdate'
      ]
    }, {
      name: '删除',
      role: 'fourmdelete',
      api: [
        '/api/admin/category/delete',
        '/api/admin/forum/delete',
      ]
    }]
  }, {
    name: '热帖推送管理',
    role: 'hot-topic',
    api: [
      '/api/admin/topic/hot/list'
    ],
    children: [{
      name: '添加',
      role: 'hot-topic-add',
      api: [
        '/api/admin/topic/hot/batchupdate'
      ]
    }, {
      name: '删除',
      role: 'hot-topic-delete',
      api: [
        '/api/admin/topic/hot/delete'
      ]
    }]
  }, {
    name: '推荐贴推送管理',
    role: 'recommend-topic',
    api: [
      '/api/admin/topic/recommend/list'
    ],
    children: [{
      name: '添加',
      role: 'hot-topic-add',
      api: [
        '/api/admin/topic/recommend/batchupdate'
      ]
    }, {
      name: '删除',
      role: 'hot-topic-delete',
      api: [
        '/api/admin/topic/recommend/delete'
      ]
    }]
  }, {
    name: '话题分类管理',
    role: 'topictypelist',
    api: [
      '/api/admin/topicType/tree',
      '/api/admin/topicType/list',
      '/api/admin/topicType/get'
    ],
    children: [{
      name: '修改',
      role: 'topictypeedit',
      api: [
        '/api/admin/topicType/update'
      ]
    }, {
      name: '添加',
      role: 'topictypeadd',
      api: [
        '/api/admin/topicType/save'
      ]
    }, {
      name: '删除',
      role: 'topictypedelete',
      api: [
        '/api/admin/topicType/delete'
      ]
    }]
  }, {
    name: '敏感词管理',
    role: 'sensitivitylist',
    api: [
      '/api/admin/sensitivity/list',

    ],
    children: [{
      name: '修改',
      role: 'sensitivityedit',
      api: [
        '/api/admin/sensitivity/batchupdate'
      ]
    }, {
      name: '添加',
      role: 'sensitivityadd',
      api: [
        '/api/admin/sensitivity/save',
        '/api/admin/sensitivity/batch_save'
      ]
    }, {
      name: '删除',
      role: 'sensitivitydelete',
      api: [
        '/api/admin/sensitivity/delete'
      ]
    }]
  }, {
    name: '用户举报管理',
    role: 'reportlist',
    api: [
      '/api/admin/report/list',
      '/api/admin/report/get'
    ],
    children: [{
      name: '修改',
      role: 'reportedit',
      api: [
        '/api/admin/report/process'
      ]
    }, {
      name: '删除',
      role: 'reportdelete',
      api: [
        '/api/admin/report/delete'
      ]
    }]
  }]
}, {
  name: '运营',
  role: 'operation',
  children: [{
    name: '数据中心',
    role: 'forumstatisticlist',
    api: [
      '/api/admin/data/forumstatistic_list'
    ],
    children: [{
      name: '导出',
      role: 'forumstatisticlistexport',
    }]
  }]
}, {
  name: '用户',
  role: 'user',
  children: [{
    name: '用户组管理',
    role: 'usergroup',
    api: [
      '/api/admin/group/list',
      '/api/admin/group/get'
    ],
    children: [{
      name: '添加',
      role: 'usergroupadd',
      api: [
        '/api/admin/upload/o_upload',
        '/api/admin/group/save'
      ]
    }, {
      name: '修改',
      role: 'usergroupedit',
      api: [
        '/api/admin/upload/o_upload',
        '/api/admin/group/update'
      ]
    }, {
      name: '删除',
      role: 'usergroupdelete',
      api: [
        '/api/admin/group/delete'
      ]
    }]
  }, {
    name: '用户管理',
    role: 'userlist',
    api: [
      '/api/admin/user/list',
      '/api/admin/user/get'
    ],
    children: [{
      name: '添加',
      role: 'useradd',
      api: [
        '/api/admin/user/save'
      ]
    }, {
      name: '修改',
      role: 'useredit',
      api: ['/api/admin/user/update']
    }, {
      name: '删除',
      role: 'userdelete',
      api: [
        '/api/admin/user/delete'
      ]
    }]
  }, {
    name: '管理员管理',
    role: 'adminlist',
    api: [
      '/api/admin/admin/list',
      '/api/admin/user/get'
    ],
    children: [{
      name: '添加',
      role: 'adminadd',
      api: [
        '/api/admin/admin/save'
      ]
    }, {
      name: '修改',
      role: 'adminedit',
      api: [
        '/api/admin/admin/update'
      ]
    }, {
      name: '删除',
      role: 'admindelete',
      api: [
        '/api/admin/admin/delete'
      ]
    }]
  }, {
    name: '官网团队账户',
    role: 'officiallist',
    api: [
      '/api/admin/user/official_list',
      '/api/admin/group/list',
      '/api/admin/user/get'
    ],
    children: [{
      name: '添加',
      role: 'officialadd',
      api: [
        '/api/admin/user/save'
      ]
    }, {
      name: '修改',
      role: 'officialedit',
      api: [
        '/api/admin/user/update'
      ]
    }, {
      name: '删除',
      role: 'officialdelete',
      api: [
        '/api/admin/user/delete'
      ]
    }]
  }, {
    name: '账户绑定',
    role: 'useraccountlist',
    api: [
      '/api/admin/account/list'
    ],
    children: [{
      name: '删除',
      role: 'useraccountdelete',
      api: [
        '/api/admin/account/delete'
      ]
    }]
  }, {
    name: '角色管理',
    role: 'rolelist',
    api: [
      '/api/admin/role/list',
      '/api/admin/role/get'
    ],
    children: [{
      name: '添加',
      role: 'roleadd',
      api: [
        '/api/admin/role/save'
      ]
    }, {
      name: '修改',
      role: 'roleedit',
      api: [
        '/api/admin/role/update'
      ]
    }, {
      name: '删除',
      role: 'roledelete',
      api: [
        '/api/admin/role/delete'
      ]
    }]
  }, {
    name: '系统消息',
    role: 'systemmessagelist',
    api: [
      '/api/admin/message/sys_list'
    ],
    children: [{
      name: '添加',
      role: 'systemmessageadd',
      api: [
        '/api/admin/message/sendSys',
        '/api/admin/group/list',
      ]
    }, {
      name: '删除',
      role: 'systemmessagedelete',
      api: [
        '/api/admin/message/delete'
      ]
    }]
  }]
}, {
  name: '设置',
  role: 'settingConfig',
  children: [{
    name: '定时任务管理',
    role: 'job-list',
    api: [
      '/api/manage/job/list'
    ],
    children: [{
      name: '暂停',
      role: 'job-pause',
      api: [
        '/api/manage/job/pause'
      ]
    }, {
      name: '恢复',
      role: 'job-resume',
      api: [
        '/api/manage/job/resume'
      ]
    }, {
      name: '修改',
      role: 'job-edit',
      api: [
        '/api/manage/job/update'
      ]
    }, {
      name: '添加',
      role: 'job-add',
      api: [
        '/api/manage/job/save'
      ]
    }, {
      name: '删除',
      role: 'job-delete',
      api: [
        '/api/manage/job/delete'
      ]
    }]
  }, {
    name: '全局设置',
    role: 'siteconfig',
    api: [
      '/api/admin/site_config/system_get',
    ],
    children: [{
      name: '修改',
      role: 'siteconfigedit',
      api: [
        '/api/admin/site_config/system_update'
      ]
    }]
  }, {
    name: '站点设置',
    role: 'baseconfig',
    api: [
      '/api/admin/site_config/base_get'
    ],
    children: [{
      name: '修改',
      role: 'baseconfigedit',
      api: [
        '/api/admin/site_config/base_update',
      ]
    }]
  }, {
    name: '论坛设置',
    role: 'bbsconfig',
    api: [
      '/api/admin/bbs_config/get',
      '/api/admin/group/list'
    ],
    children: [{
      name: '修改',
      role: 'bbsconfigedit',
      api: [
        '/api/admin/bbs_config/update',
      ]
    }]
  }, {
    name: '登录设置',
    role: 'loginconfig',
    api: [
      '/api/admin/bbs_config/login_get'
    ],
    children: [{
      name: '修改',
      role: 'loginconfigedit',
      api: [
        '/api/admin/bbs_config/login_update',
      ]
    }]
  }, {
    name: '积分设置',
    role: 'pointconfig',
    api: [
      '/api/admin/bbs_config/creditExchange_get'
    ],
    children: [{
      name: '修改',
      role: 'pointconfigedit',
      api: [
        '/api/admin/bbs_config/creditExchange_update',
      ]
    }]
  }, {
    name: '消息提示设置',
    role: 'messageconfig',
    api: [
      '/api/admin/bbs_config/message_get'
    ],
    children: [{
      name: '修改',
      role: 'messageconfigedit',
      api: [
        '/api/admin/bbs_config/message_update',
      ]
    }]
  }, {
    name: '第三方登录设置',
    role: 'thirdloginconfig',
    api: [
      '/api/admin/bbs_config/api_get'
    ],
    children: [{
      name: '修改',
      role: 'thirdloginconfigedit',
      api: [
        '/api/admin/bbs_config/api_update',
      ]
    }]
  }, {
    name: '单点登录设置',
    role: 'ssoconfig',
    api: [
      '/api/admin/bbs_config/sso_get'
    ], children: [{
      name: '修改',
      role: 'thirdloginconfigedit',
      api: [
        '/api/admin/bbs_config/sso_update'
      ]
    }]
  }, {
    name: '接口管理',
    role: 'webservicelist',
    api: [
      '/api/admin/webservice/list',
      '/api/admin/webservice/get'
    ],
    children: [{
      name: '添加',
      role: 'addwebservice',
      api: [
        '/api/admin/webservice/save'
      ]
    }, {
      name: '修改',
      role: 'editwebservice',
      api: [
        '/api/admin/webservice/update'
      ]
    }, {
      name: '删除',
      role: 'webservicedelete',
      api: [
        '/api/admin/webservice/delete'
      ]
    }]
  }, {
    name: '接口用户管理',
    role: 'webserviceauthlist',
    api: [
      '/api/admin/webserviceAuth/list',
      '/api/admin/webserviceAuth/get'
    ],
    children: [{
      name: '添加',
      role: 'addwebserviceauth',
      api: [
        '/api/admin/webserviceAuth/save'
      ]
    }, {
      name: '修改',
      role: 'editwebserviceauth',
      api: [
        '/api/admin/webserviceAuth/update'
      ]
    }, {
      name: '删除',
      role: 'webserviceauthedit',
      api: [
        '/api/admin/webserviceAuth/delete'
      ]
    }]
  }, {
    name: '限制Id',
    role: 'bbslimitlist',
    api: [
      '/api/admin/bbslimit/list',
      '/api/admin/bbslimit/get'
    ],
    children: [{
      name: '添加',
      role: 'addbbslimit',
      api: [
        '/api/admin/bbslimit/save'
      ]
    }, {
      name: '修改',
      role: 'editbbslimit',
      api: [
        '/api/admin/bbslimit/update'
      ]
    }, {
      name: '删除',
      role: 'bbslimitdelete',
      api: [
        '/api/admin/bbslimit/delete'
      ]
    }]
  }, {
    name: 'API接口管理',
    role: 'webapilist',
    api: [
      '/api/admin/apiInfo/list',
      '/api/admin/apiInfo/get'
    ],
    children: [{
      name: '添加',
      role: 'addapiinfo',
      api: [
        '/api/admin/apiInfo/save'
      ]
    }, {
      name: '修改',
      role: 'editapiinfo',
      api: [
        '/api/admin/apiInfo/update'
      ]
    }, {
      name: '删除',
      role: 'apiinfodelete',
      api: [
        '/api/admin/apiInfo/delete'
      ]
    }]
  }, {
    name: 'API接口账户管理',
    role: 'webapiaccountlist',
    api: [
      '/api/admin/apiAccount/list',
      '/api/admin/apiAccount/get'
    ],
    children: [{
      name: '添加',
      role: 'addapiinfoaccount',
      api: [
        '/api/admin/apiAccount/save',
        '/api/admin/config_api_pwd/validate'
      ]
    }, {
      name: '独立密码修改',
      role: 'apiinfoaccountupdate',
      api: [
        '/api/admin/config_api_pwd/update'
      ]
    }]
  }, {
    name: 'API接口记录',
    role: 'webapirecordlist',
    api: [
      '/api/admin/apiRecord/list'
    ],
    children: [{
      name: '列表',
      role: '/webapirecordlist',
      api: [
        '/api/admin/apiRecord/list'
      ]
    }, {
      name: '删除',
      role: 'webapirecordlistdelete',
      api: [
        '/api/admin/apiRecord/delete'
      ]
    }]
  }]
}];
export default roles;
