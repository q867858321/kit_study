import header from '../components/header'
import body from '../components/body'
import error from '../components/404'
import work from '../views/work'

const login = resolve => {
  require(['../components/login.vue'], resolve)
};

/**
 * 论坛
 * @param resolve
 */
const forumList = resolve => {
  require(['../views/bbs/forum/forum.vue'], resolve)
};

const forumEdit = resolve => {
  require(['../views/bbs/forum/forumEdit.vue'], resolve)
};

const topicTypeList = resolve => {
  require(['../views/bbs/topicType/list.vue'], resolve)
};

const topicTypeEdit = resolve => {
  require(['../views/bbs/topicType/edit.vue'], resolve)
};

const topicTypeTree = resolve => {
  require(['../views/bbs/topicType/tree.vue'], resolve)
};

const hotTopicList = resolve => {
  require(['../views/bbs/topic/hot/list.vue'], resolve)
};

const recommendTopicList = resolve => {
  require(['../views/bbs/topic/recommend/list.vue'], resolve)
};

const sensitivityList = resolve => {
  require(['../views/bbs/sensitivity/list.vue'], resolve)
};

const sensitivityEdit = resolve => {
  require(['../views/bbs/sensitivity/edit.vue'], resolve)
};

const reportList = resolve => {
  require(['../views/bbs/report/list.vue'], resolve)
};

const reportEdit = resolve => {
  require(['../views/bbs/report/edit.vue'], resolve)
};
const forumStatisticList = resolve => {
  require(['../views/operation/order/forumStatistic/list.vue'], resolve)
};
const userGruop = resolve => {
  require(['../views/users/userGroup/usergroup.vue'], resolve)
};
const userGruopList = resolve => {
  require(['../views/users/userGroup/userGroupList.vue'], resolve)
};
const userGruopEdit = resolve => {
  require(['../views/users/userGroup/edit.vue'], resolve)
};
const userList = resolve => {
  require(['../views/users/user/list.vue'], resolve)
};
const userEdit = resolve => {
  require(['../views/users/user/edit.vue'], resolve)
};
const userAdd = resolve => {
  require(['../views/users/user/add.vue'], resolve)
}; //
const adminList = resolve => {
  require(['../views/users/admin/list.vue'], resolve)
}; //
const adminEdit = resolve => {
  require(['../views/users/admin/edit.vue'], resolve)
}; //
const adminAdd = resolve => {
  require(['../views/users/admin/add.vue'], resolve)
}; //
const officialList = resolve => {
  require(['../views/users/official/list.vue'], resolve)
}; //
const officialEdit = resolve => {
  require(['../views/users/official/edit.vue'], resolve)
}; //
const officialAdd = resolve => {
  require(['../views/users/official/add.vue'], resolve)
}; //
const roleList = resolve => {
  require(['../views/users/role/list.vue'], resolve)
}; //
const roleEdit = resolve => {
  require(['../views/users/role/edit.vue'], resolve)
}; //
const userAccountList = resolve => {
  require(['../views/users/account/list.vue'], resolve)
}; //三方用户绑定
const systemMessageList = resolve => {
  require(['../views/users/systemMessage/list.vue'], resolve)
}; //系统消息
const systemMessageAdd = resolve => {
  require(['../views/users/systemMessage/add.vue'], resolve)
};

const resourceTree = resolve => {
  require(['../views/interface/resource/tree.vue'], resolve)
}; //
const resourceList = resolve => {
  require(['../views/interface/resource/list.vue'], resolve)
}; //
const resourceEdit = resolve => {
  require(['../views/interface/resource/edit.vue'], resolve)
}; //
const resourceReName = resolve => {
  require(['../views/interface/resource/rename.vue'], resolve)
}; //

const templateTree = resolve => {
  require(['../views/interface/template/tree.vue'], resolve)
}; //
const templateList = resolve => {
  require(['../views/interface/template/list.vue'], resolve)
}; //
const templateEdit = resolve => {
  require(['../views/interface/template/edit.vue'], resolve)
}; //
const templateReName = resolve => {
  require(['../views/interface/template/rename.vue'], resolve)
}; //
const templateSetting = resolve => {
  require(['../views/interface/template/setting.vue'], resolve)
};
/*全局*/
//打赏设置
//打赏设置
//弟三方登录设置
//单点登录设置
//模型列表
//修改添加模型
//单点登录设置
//接口管理列表
//接口修改添加模型
//接口管理列表
//接口修改添加模型
//限制id
//限制id
//api接口管理
//api接口修改
//站点设置
const siteConfig = resolve => {
  require(['../views/systemConfig/siteConfig/list.vue'], resolve)
};
//站点设置
const siteEdit = resolve => {
  require(['../views/systemConfig/siteConfig/edit.vue'], resolve)
};
//全局设置
const baseConfig = resolve => {
  require(['../views/systemConfig/baseConfig/edit.vue'], resolve)
};
//论坛设置
const bbsConfig = resolve => {
  require(['../views/systemConfig/bbsConfig/edit.vue'], resolve)
};
//登录设置
const loginConfig = resolve => {
  require(['../views/systemConfig/loginConfig/edit.vue'], resolve)
};
//积分设置
const pointConfig = resolve => {
  require(['../views/systemConfig/pointConfig/edit.vue'], resolve)
}; //
const chargeConfig = resolve => {
  require(['../views/systemConfig/chargeConfig/edit.vue'], resolve)
}; //
const messageConfig = resolve => {
  require(['../views/systemConfig/messageConfig/edit.vue'], resolve)
}; //
const apiConfig = resolve => {
  require(['../views/systemConfig/thirdLoginConfig/edit.vue'], resolve)
}; //
const ssoConfig = resolve => {
  require(['../views/systemConfig/ssoConfig/edit.vue'], resolve)
}; //
const modelConfig = resolve => {
  require(['../views/systemConfig/modelConfig/list.vue'], resolve)
}; //
const modelConfigEdit = resolve => {
  require(['../views/systemConfig/modelConfig/edit.vue'], resolve)
}; //
const adConfig = resolve => {
  require(['../views/systemConfig/adConfig/edit.vue'], resolve)
}; //
const webserviceConfig = resolve => {
  require(['../views/systemConfig/webserviceConfig/list.vue'], resolve)
}; //
const webserviceConfigEdit = resolve => {
  require(['../views/systemConfig/webserviceConfig/edit.vue'], resolve)
}; //
const webserviceAuthConfig = resolve => {
  require(['../views/systemConfig/webserviceAuthConfig/list.vue'], resolve)
}; //
const webserviceAuthEdit = resolve => {
  require(['../views/systemConfig/webserviceAuthConfig/edit.vue'], resolve)
}; //
const bbsLimit = resolve => {
  require(['../views/systemConfig/bbsLimit/list.vue'], resolve)
}; //
const bbsLimitEdit = resolve => {
  require(['../views/systemConfig/bbsLimit/edit.vue'], resolve)
}; //
const apiInfoList = resolve => {
  require(['../views/systemConfig/apiInfo/list.vue'], resolve)
}; //
const apiInfoEdit = resolve => {
  require(['../views/systemConfig/apiInfo/edit.vue'], resolve)
}; //

const apiAccountList = resolve => {
  require(['../views/systemConfig/apiAccount/list.vue'], resolve)
}; //
const apiAccountEdit = resolve => {
  require(['../views/systemConfig/apiAccount/edit.vue'], resolve)
}; //
const apiAccountUpdate = resolve => {
  require(['../views/systemConfig/apiAccount/updatePwd.vue'], resolve)
}; //

const apiRecordList = resolve => {
  require(['../views/systemConfig/apiRecord/list.vue'], resolve)
}; //

const jobList = resolve => {
  require(['../views/bbs/job/list.vue'], resolve)
};
const jobAdd = resolve => {
  require(['../views/bbs/job/add.vue'], resolve)
};
const jobEdit = resolve => {
  require(['../views/bbs/job/edit.vue'], resolve)
};
export const routes = [{
  path: '/login',
  name: '登录',
  component: login,
  hidden: true
}, {
  path: '/error',
  name: '服务器关闭',
  component: error,
  hidden: true
}, {
  path: '/',
  component: header,
  iconCls: 'bbs-iconfontdesktop',
  leaf: true, //只有一个节点
  redirect: '/work',
  children: [{
    path: '/work',
    name: '工作台',
    component: work,
    hidden: true
  }]
}];
export const ansycRoutes = [{
  path: '/bbs',
  name: '论坛',
  component: header,
  redirect: '/fourm',
  iconCls: 'bbs-appstoreo',
  meta: {
    role: 'bbsparent'
  },
  children: [{
    path: '/forum',
    name: '版块管理',
    component: body,
    meta: {
      role: 'forumlist'
    },
    children: [{
      path: '/',
      name: '版块列表',
      component: forumList,
      meta: {
        role: 'forumlist'
      }
    }, {
      path: '/forum-edit',
      name: '版块修改',
      component: forumEdit,
      hidden: true,
      meta: {
        role: 'forumedit'
      }
    }]
  }, {
    path: '/hot-topic',
    meta: {
      role: 'hot-topic'
    },
    name: '热帖推送管理',
    component: body,
    children: [{
      name: '热帖推送列表',
      path: '/',
      meta: {
        role: 'hot-topic-list'
      },
      component: hotTopicList
    }]
  }, {
    path: '/recommend-topic',
    meta: {
      role: 'recommend-topic'
    },
    name: '推荐贴推送管理',
    component: body,
    children: [{
      name: '推荐贴推送列表',
      path: '/',
      meta: {
        role: 'recommend-topic-list'
      },
      component: recommendTopicList
    }]
  }, {
    path: '/topictypelist',
    meta: {
      role: 'topictypelist'
    },
    name: '话题管理',
    component: body,
    children: [{
      name: '话题管理列表',
      path: '/',
      meta: {
        role: 'topictypelist'
      },
      component: topicTypeList
    }, {
      path: '/topictypeadd',
      meta: {
        role: 'topictypeadd'
      },
      name: '添加话题',
      component: topicTypeEdit,
      hidden: true
    }, {
      path: '/topictypeedit',
      meta: {
        role: 'topictypeedit'
      },
      name: '修改话题信息',
      component: topicTypeEdit,
      hidden: true
    }]
  }, {
    path: '/sensitivitylist',
    name: '敏感词管理',
    meta: {
      role: 'sensitivitylist'
    },
    component: body,
    children: [{
      path: '/',
      name: '敏感词管理列表',
      meta: {
        role: 'sensitivitylist'
      },
      component: sensitivityList
    }, {
      path: '/sensitivityedit',
      meta: {
        role: 'sensitivityadd'
      },
      name: '批量添加敏感词',
      component: sensitivityEdit,
      hidden: true
    }]
  }, {
    path: '/reportlist',
    meta: {
      role: 'reportlist'
    },
    name: '用户举报管理',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'reportlist'
      },
      name: '用户举报列表',
      component: reportList
    }, {
      path: '/reportedit',
      meta: {
        role: 'reportedit'
      },
      name: '用户举报详情',
      component: reportEdit,
      hidden: true
    }]
  }]
}, {
  path: '/',
  meta: {
    role: 'operation'
  },
  name: '运营',
  component: header,
  iconCls: 'bbs-barschart',
  children: [{
    path: '/forumstatisticlist',
    meta: {
      role: 'forumstatisticlist'
    },
    name: '数据中心',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'forumstatisticlist'
      },
      component: forumStatisticList
    }]
  }]
}, {
  path: '/',
  name: '用户',
  meta: {
    role: 'user'
  },
  component: header,
  iconCls: 'bbs-user',
  children: [{
    path: '/usergroup',
    meta: {
      role: 'usergroup'
    },
    name: '用户组管理',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'usergroup'
      },
      component: userGruop
    }, {
      path: '/usergrouplist',
      meta: {
        role: 'usergroup'
      },
      name: '用户组管理列表',
      component: userGruopList,
      hidden: true
    }, {
      path: '/usergroupadd',
      meta: {
        role: 'usergroupadd'
      },
      name: '添加用户头衔',
      component: userGruopEdit,
      hidden: true
    }, {
      path: '/usergroupedit',
      meta: {
        role: 'usergroupedit'
      },
      name: '修改用户头衔',
      component: userGruopEdit,
      hidden: true
    }]
  }, {
    path: '/userlist',
    meta: {
      role: 'userlist'
    },
    name: '用户管理',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'userlist'
      },
      component: userList
    }, {
      path: '/useradd',
      meta: {
        role: 'useradd'
      },
      name: '添加用户',
      component: userAdd,
      hidden: true
    }, {
      path: '/useredit',
      meta: {
        role: 'useredit'
      },
      name: '修改用户信息',
      component: userEdit,
      hidden: true
    }]
  }, {
    path: '/adminlist',
    meta: {
      role: 'adminlist'
    },
    name: '管理员管理',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'adminlist'
      },
      component: adminList
    }, {
      path: '/adminadd',
      meta: {
        role: 'adminadd'
      },
      name: '添加管理员',
      component: adminAdd,
      hidden: true
    }, {
      path: '/adminedit',
      meta: {
        role: 'adminedit'
      },
      name: '修改管理员信息',
      component: adminEdit,
      hidden: true
    }]
  }, {
    path: '/officiallist',
    meta: {
      role: 'officiallist'
    },
    name: '官网团队账户',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'officiallist'
      },
      component: officialList
    }, {
      path: '/officialadd',
      meta: {
        role: 'officialadd'
      },
      name: '添加官网账户',
      component: officialAdd,
      hidden: true
    }, {
      path: '/officialedit',
      meta: {
        role: 'officialedit'
      },
      name: '修改官网账户信息',
      component: officialEdit,
      hidden: true
    }]
  }, {
    path: '/useraccountlist',
    meta: {
      role: 'useraccountlist'
    },
    name: '账户绑定',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'useraccountlist'
      },
      component: userAccountList
    }]
  }, {
    path: '/rolelist',
    meta: {
      role: 'rolelist'
    },
    name: '角色管理',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'rolelist'
      },
      component: roleList
    }, {
      path: '/roleadd',
      meta: {
        role: 'roleadd'
      },
      name: '添加角色',
      component: roleEdit,
      hidden: true
    }, {
      path: '/roleedit',
      meta: {
        role: 'roleedit'
      },
      name: '修改角色信息',
      component: roleEdit,
      hidden: true
    }]
  }, {
    path: '/systemmessagelist',
    meta: {
      role: 'systemmessagelist'
    },
    name: '系统消息',
    component: body,
    children: [{
      path: '/',
      meta: {
        role: 'systemmessagelist'
      },
      component: systemMessageList
    }, {
      path: '/systemmessageadd',
      meta: {
        role: 'systemmessageadd'
      },
      name: '发送系统消息',
      component: systemMessageAdd,
      hidden: true
    }]
  }]
}, {
  path: '/',
  name: '设置',
  meta: { role: 'settingConfig' },
  component: header,
  iconCls: 'bbs-setting',
  children: [{
    path: '/job-list',
    meta: {
      role: 'job-list'
    },
    name: '定时任务管理',
    component: body,
    children: [{
      name: '定时任务列表',
      path: '/',
      meta: {
        role: 'job-list'
      },
      component: jobList
    }, {
      path: '/job-add',
      meta: {
        role: 'job-add'
      },
      name: '添加任务',
      component: jobAdd,
      hidden: true
    }, {
      path: '/job-edit',
      meta: {
        role: 'job-edit'
      },
      name: '修改任务',
      component: jobEdit,
      hidden: true
    }]
  }, {
    path: '/baseconfig', meta: { role: 'baseconfig' },
    name: '全局设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'baseconfig' },
      component: baseConfig,
      hidden: true
    }]
  }, {
    path: '/siteconfig', meta: { role: 'siteconfig' },
    name: '站点设置',
    component: body,
    children: [{
      path: '/',
      meta: { role: 'siteconfig' },
      component: siteConfig,
      hidden: true
    }, {
      path: '/site-add',
      meta: {
        role: 'siteadd'
      },
      name: '添加站点',
      component: siteEdit,
      hidden: true
    }, {
      path: '/site-edit',
      meta: {
        role: 'siteedit'
      },
      name: '修改站点',
      component: siteEdit,
      hidden: true
    }]
  }, {
    path: '/bbsconfig', meta: { role: 'bbsconfig' },
    name: '论坛设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'bbsconfig' },
      component: bbsConfig,
      hidden: true
    }]
  }, {
    path: '/loginconfig', meta: { role: 'loginconfig' },
    name: '登录设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'loginconfig' },
      component: loginConfig,
      hidden: true
    }]
  }, {
    path: '/pointconfig', meta: { role: 'pointconfig' },
    name: '积分设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'pointconfig' },
      component: pointConfig,
      hidden: true
    }]
  }, {
    path: '/messageconfig', meta: { role: 'messageconfig' },
    name: '消息提示设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'messageconfig' },
      component: messageConfig,
      hidden: true
    }]
  }, {
    path: '/thirdloginconfig', meta: { role: 'thirdloginconfig' },
    name: '第三方登录设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'thirdloginconfig' },
      component: apiConfig,
      hidden: true
    }]
  }, {
    path: '/ssoconfig', meta: { role: 'ssoconfig' },
    name: '单点登录设置',
    component: body,
    children: [{
      path: '/', meta: { role: 'ssoconfig' },
      component: ssoConfig,
      hidden: true
    }]
  }, {
    path: '/webservicelist', meta: { role: 'webservicelist' },
    name: '接口管理',
    component: body,
    children: [{
      path: '/', meta: { role: 'webservicelist' },
      component: webserviceConfig,
      hidden: true
    }, {
      path: '/addwebservice', meta: { role: 'addwebservice' },
      name: '添加接口',
      component: webserviceConfigEdit,
      hidden: true
    }, {
      path: '/editwebservice', meta: { role: 'editwebservice' },
      name: '修改接口',
      component: webserviceConfigEdit,
      hidden: true
    }]
  }, {
    path: '/webserviceauthlist', meta: { role: 'webserviceauthlist' },
    name: '接口用户管理',
    component: body,
    children: [{
      path: '/', meta: { role: 'webserviceauthlist' },
      component: webserviceAuthConfig,
      hidden: true
    }, {
      path: '/addwebserviceauth', meta: { role: 'addwebserviceauth' },
      name: '添加接口用户',
      component: webserviceAuthEdit,
      hidden: true
    }, {
      path: '/editwebserviceauth', meta: { role: 'editwebserviceauth' },
      name: '修改接口用户',
      component: webserviceAuthEdit,
      hidden: true
    }]
  }, {
    path: '/bbslimitlist', meta: { role: 'bbslimitlist' },
    name: '限制Id',
    component: body,
    children: [{
      path: '/', meta: { role: 'bbslimitlist' },
      component: bbsLimit,
      hidden: true
    }, {
      path: '/addbbslimit', meta: { role: 'addbbslimit' },
      name: '添加限制用户',
      component: bbsLimitEdit,
      hidden: true
    }, {
      path: '/editbbslimit', meta: { role: 'editbbslimit' },
      name: '修改限制用户',
      component: bbsLimitEdit,
      hidden: true
    }]
  }, {
    path: '/webapilist', meta: { role: 'webapilist' },
    name: 'API接口管理',
    component: body,
    children: [{
      path: '/', meta: { role: 'webapilist' },
      component: apiInfoList,
      hidden: true
    }, {
      path: '/addapiinfo', meta: { role: 'addapiinfo' },
      name: '添加api接口',
      component: apiInfoEdit,
      hidden: true
    }, {
      path: '/editapiinfo', meta: { role: 'editapiinfo' },
      name: '修改api接口',
      component: apiInfoEdit,
      hidden: true
    }]
  }, {
    path: '/webapiaccountlist', meta: { role: 'webapiaccountlist' },
    name: 'API接口账户管理',
    component: body,
    children: [{
      path: '/', meta: { role: 'webapiaccountlist' },
      component: apiAccountList,
      hidden: true
    }, {
      path: '/addapiinfoaccount', meta: { role: 'addapiinfoaccount' },
      name: '添加api接口账户',
      component: apiAccountEdit,
      hidden: true
    }, {
      path: '/editapiinfoaccount', meta: { role: 'editapiinfoaccount' },
      name: '修改api接口账户',
      component: apiAccountEdit,
      hidden: true
    },
    {
      path: '/apiinfoaccountupdate', meta: { role: 'apiinfoaccountupdate' },
      name: '独立密码修改',
      component: apiAccountUpdate,
      hidden: true
    }]
  }, {
    path: '/webapirecordlist', meta: { role: 'webapirecordlist' },
    name: 'API接口记录',
    component: body,
    children: [{
      path: '/', meta: { role: 'webapirecordlist' },
      component: apiRecordList,
      hidden: true
    }]
  }]
}, {
  path: '/401',
  name: '401',
  component: error,
  meta: {
    role: 'index'
  },
  hidden: true
}, {
  path: '*',
  name: '404',
  component: error,
  meta: {
    role: 'index'
  },
  hidden: true
}];
