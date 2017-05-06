export var List = [{
	id:'0',
	to:'',
	component:'Hello',
	msg:'首页',
	children:null	
},{
	id:'1',
	to:'changePanelDemo',
	component:'ChangePanelDemo',
	msg:'可调整大小面板',
	children:null	
},{
	id:'2',
	to:'popupDemo',
	component:'PopUpDemo',
	msg:'弹出层效果',
	children:null	
},{
	id:'3',
	to:'staticBarOnRight',
	component:'PopUpDemo',
	msg:'固定边栏滚动效果',
	children:[{
		id:'3_1',
		to:'StaticBarWithJquery',
		component:'StaticBarWithJquery',
		msg:'固定边栏滚动效果，使用jQuery',
		children:null	
	},{
		id:'3_2',
		to:'StaticBarWithJs',
		component:'StaticBarWithJquery',
		msg:'固定边栏滚动效果，使用js',
		children:null	
	}]
},{
	id:'4',
	to:'dateClock',
	component:'DateClock',
	msg:'倒计时效果',
	children:[{
		id:'4_1',
		to:'dateClockOne',
		component:'DateClockOne',
		msg:'demo one',
		children:null	
	},{
		id:'4_2',
		to:'dateClockTwo',
		component:'DateClockTwo',
		msg:'demo Two',
		children:null	
	},{
		id:'4_3',
		to:'dateClockThree',
		component:'DateClockThree',
		msg:'demo three',
		children:null	
	}]
}]
