import page from '../../views/page/index'
// import edit from '../../views/page/edit'
import project from '../../views/project/index'

import edit from '../../views/pages/edit'
export default {
  component: project,
  thrid: {
    '79': {
      component: page,
      append: [{
	      path: 'edit',
	      component: edit,
	      hidden: true
	    }]
	  }
  }
}

// export default {
//   component: project,
//   thrid: {
//     '79': {
//       component: page,
//       append: [{
// 	      path: 'edit',
// 	      component: edit,
// 	      hidden: true
// 	    }]
// 	  }
//   }
// }