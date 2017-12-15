import Index from '../pages/Index.vue'
import About from '../pages/About.vue'
import Center from '../pages/Center.vue'
import Trade from '../pages/Trade.vue'
import Project from '../pages/project/Project.vue'
import ProjectDetail from '../pages/project/ProjectDetail.vue'
import Job from '../pages/job/Job.vue'
import JobDetailByCompany from '../pages/job/JobDetailByCompany.vue'
import JobDetail from '../pages/job/JobDetail.vue'
import EstimateHome from '../pages/estimate/EstimateHome.vue'
import PracticeHome from '../pages/practice/PracticeHome.vue'
import PracticeDetail from '../pages/practice/PracticeDetail.vue'
import EditQuestion from '../pages/exam/question/EditQuestion.vue'
import StudentHome from '../pages/center/student/Home.vue'
import StudentProject from '../pages/center/student/Project.vue'
import StudentResume from '../pages/center/student/Resume.vue';
import StudentFavorite from '../pages/center/student/Favorite.vue';
import StudentJob from '../pages/center/student/Job.vue';
import StudentPreviewResume from '../pages/center/student/PreviewResume.vue';
import StudentNews from '../pages/center/student/News.vue';
import CompanyHome from "../pages/center/company/Home.vue";
import CompanyProject from "../pages/center/company/Project.vue";
import CompanyJob from "../pages/center/company/Job.vue";
import CompanyBrief from "../pages/center/company/Brief.vue";
import CompanySaveJob from "../pages/center/company/SaveJob.vue";
import CompanyJobApply from '../pages/center/company/JobApply.vue';
import CompanyJobApplyDetail from '../pages/center/company/JobApplyDetail.vue';
import DemoTable from '../pages/demo/DemoTable.vue'
import DemoPop from '../pages/demo/DemoPop.vue'
import DemoTable2 from '../pages/demo/DemoTable2.vue'
import DemoLayer from '../pages/demo/DemoLayer.vue'
import Company from '../pages/center/company/Company.vue'
import Exam from '../pages/center/company/Exam.vue'
import papersAdd from '../pages/exam/papers/Edit.vue'
import papersPreview from '../pages/exam/papers/Preview.vue'
import DoExam from '../pages/exam/papers/DoExam.vue'
import Cart from '../pages/trade/Cart.vue'
import Pay from '../pages/trade/Pay.vue'
import StudentPractice from '../pages/center/student/Practice.vue'
import NotFond from '../pages/404.vue'
import StudentPracticeProgress from '../pages/center/student/PracticeProgress'
import EstimateResult from '../pages/estimate/EstimateResult.vue'
import StudentTradeOrder from '../pages/center/student/Order.vue'
import StudentViewReport from '../pages/center/student/ViewReport'
import Finish from '../pages/trade/Finish.vue'
import ProjectReportList from '../pages/center/company/ProjectReportList.vue'
import ProjectApplyList from '../pages/center/company/ProjectApplyList.vue'
import ProjectAdd from '../pages/center/company/ProjectAdd.vue'
var routes = [
		{
			path: '*',
			component: NotFond,
			meta: { requiresAuth: false }
		},
		{
			path:'/',
			title: '职塑云平台',
			component: Index,
			meta: { requiresAuth: false, topMenu: 'index' }
		},
		{
			path:'/about',
			component: About,
			meta: { requiresAuth: false, topMenu: 'about' }
		},
		{
			path:'/project',
			component: Project,
			meta: { requiresAuth: false, topMenu: 'project' }
		},
		{
			path:'/projectDetail/:id',
			component: ProjectDetail,
			meta: { requiresAuth: true, topMenu: 'project' }
		},
		{
			path:'/job',
			component: Job,
			meta: { requiresAuth: false, topMenu: 'job' }
		},
		{
			path:'/jobDetailByCompany/:id',
			component: JobDetailByCompany,
			meta: { requiresAuth: false, topMenu: 'job' }
		},
		{
			path:'/jobDetail/:id',
			component: JobDetail,
			meta: { requiresAuth: true, topMenu: 'job' }
		},
		{
			path:'/estimate',
			component: EstimateHome,
			meta: { requiresAuth: false, topMenu: 'estimate' }
		},
		{
			path:'/estimate/result/:estimateUserId',
			component: EstimateResult,
			meta: { requiresAuth: false, topMenu: 'estimate' }
		},
		{
			path:'/practice',
			title:'实训营',
			component: PracticeHome,
			meta: { requiresAuth: false, topMenu: 'practice' }
		},
		{
			path:'/practice/:id',
			component: PracticeDetail,
			meta: { requiresAuth: false, topMenu: 'practice' }
		},
		{
			path:'/center',
			title: '用户中心',
			component: Center,
			meta: { requiresAuth: true },
			// Center主要是提供左边菜单，下面的子路由将会复用左边菜单
			children: [
				{
					path:'student/404',
					component: NotFond,
					meta: { requiresAuth: true }
				},
				{
					path:'company/project',
					component: CompanyProject,
					meta: { requiresAuth: true }
				},
                {
                    path:'company/project/reportList/:projectId/:projectName',
                    component: ProjectReportList,
                    meta: { requiresAuth: true }
                },
                {
                    path:'company/project/applyList/:projectId/:projectName',
                    component: ProjectApplyList,
                    meta: { requiresAuth: true }
                },
                {
                    path:'company/project/projectAdd',
                    component: ProjectAdd,
                    meta: { requiresAuth: true }
                },
				{
					path:'company/home',
					component: CompanyHome,
					meta: { requiresAuth: true }
				},
				{
					path:'company/job',
					component: CompanyJob,
					meta: { requiresAuth: true }
				},
				{
					path:'company/brief',
					component: CompanyBrief,
					meta: { requiresAuth: true }
				},
				{
					path:'company/jobApply/:id',
					component: CompanyJobApply,
					meta: { requiresAuth: true }
				},
				{
					path:'company/jobApplyDetail/:userId/:resumeId/:applyId/:positionId',
					component: CompanyJobApplyDetail,
					meta: { requiresAuth: true }
				},
				{
					path:'company/saveJob/:id',
					component: CompanySaveJob,
					meta: { requiresAuth: false }
				},
				{
					path:'student/project',
					component: StudentProject,
					meta: { requiresAuth: true }
				},
				{
					path:'student/job',
					component: StudentJob,
					meta: { requiresAuth: true }
				},
				{
					path:'student/resume',
					component: StudentResume,
					meta: { requiresAuth: true }
				},
				{
					path:'student/previewResume/:id',
					component: StudentPreviewResume,
					meta: { requiresAuth: true }
				},
				{
					path:'student/news',
					component: StudentNews,
					meta: { requiresAuth: true }
				},
				{
					path:'student/favorite',
					component: StudentFavorite,
					meta: { requiresAuth: true }
				},
				{
					path:'student/home',
					component: StudentHome,
					meta: { requiresAuth: true }
				},
				{
					path:'table',
					component: DemoTable,
					meta: { requiresAuth: true }
				},
				{
					path:'pop',
					component: DemoPop,
					meta: { requiresAuth: true }
				},
				{
					path:'table2',
					component:DemoTable2,
					meta: { requiresAuth: true }
				},
				{
					path:'layer',
					component: DemoLayer,
					meta: { requiresAuth: true }
				},
				{
					path:'company',
					component: Company,
					meta: { requiresAuth: true }
				},
				{
					path:'company/exam/list',
					component: Exam,
					meta: { requiresAuth: true }
				},
				{
					path:'company/exam/editPaper',
					component: papersAdd,
					meta: { requiresAuth: true }
				},
				{
					path:'student/practice',
					component: StudentPractice,
					meta: {requiresAuth: true}
				},
				{
					path:'student/practice/practices',
					component: StudentPractice,
					meta: {requiresAuth: true}
				},
				{
					path:'student/practice/progress/:planId',
					component: StudentPracticeProgress,
					meta: {requiresAuth: true}
				},
				{
					path:'student/trade/orders',
					component: StudentTradeOrder,
					meta: {requiredsAuth:true}
				},
                {
                    path:'student/project/viewReport/:reportId',
                    component: StudentViewReport,
                    meta: {requiredsAuth:true}
                },
			]
		},
		{
			path:'/exam/editQuestion/:facadeId',
			component: EditQuestion,
			meta: { requiresAuth: true }
		},
		{
			path:'/exam/preview/:facadeId',
			component: papersPreview,
			meta: { requiresAuth: true }
		},
		{
			path:'/exam/doExam/:myPaperId',
			component: DoExam,
			meta: { requiresAuth: true }
		},
		{
			path:'/trade',
			title: '交易',
			component: Trade,
			meta: { requiresAuth: false, topMenu: 'practice' },
			children: [
				{
					path:'cart',
					component: Cart,
					meta: { requiresAuth: false, topMenu: 'practice' }
				},
				{
					path:'pay/:orderIds',
					component: Pay,
					meta: { requiresAuth: false, topMenu: 'practice' }
				},
				{
					path:'finish/:orderNo',
					component: Finish,
					meta: { requiresAuth: false, topMenu: 'practice' }
				},
			  ]
		}
		
	]
export default routes;