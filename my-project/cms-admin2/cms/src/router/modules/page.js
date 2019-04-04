import page from '../../views/page/index'
import edit from '../../views/page/edit'
import project from '../../views/project/index'
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
