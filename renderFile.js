var fs = require('fs');
var path = require('path');

// 创建目录
function mkdir(dirpath, dirname){  
	//判断是否是第一次调用  
	if(typeof dirname === "undefined"){   
		if(fs.existsSync(dirpath)){  
			return;  
		}else{
			mkdir(dirpath,path.dirname(dirpath));  
		}
	}else{
		//判断第二个参数是否正常，避免调用时传入错误参数  
		if(dirname !== path.dirname(dirpath)){   
			mkdir(dirpath);  
			return;  
		}
		if(fs.existsSync(dirname)){  
			fs.mkdirSync(dirpath)  
		}else{  
			mkdir(dirname,path.dirname(dirname));  
			fs.mkdirSync(dirpath);  
		}
	}
}


// 创建文件写入内容
function mkfile(filename, content) {
	fs.exists(filename, function(exists) {
		if(!exists) {
			// 如果文件不存在则写入
			fs.writeFile(filename, content, function (err) {

			})
		} else {
			// 如果文件存在则不用写入防止覆盖
			return 
		}
	})
}

// 首字母大写
function fu (f) {
	return f.substr(0,1).toUpperCase()+f.slice(1)
}

// 首字母小写
function fl (f) {
	return f.substr(0,1).toLowerCase()+f.slice(1)
}

/**
 * 写入文件模板
 */
 //  model模板
var modelTemplate = function (f) {
	return `import api_${f} from './service';

export default {
	namespace: "${f}",

	state: {
	},

	subscriptions: {
	},

	effects: {
		*fetch({ payload }, { call, put, select }) {

		},
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	`
}

// service模板
var serviceTemplate = function (f) {
	return `import { J } from '@/configs/request';

export default {
	// testapi
	test: data => J('', data),
};
`
}

// 视图模板
var viewTemplate = function (f) {
	return `import PropTypes from 'prop-types';
import { connect } from 'dva';
import FormInlineLayout from '@/components/FormInlineLayout';
import TableLayout from '@/components/TableLayout';

import { Form, DatePicker, Input, Select, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const ${f} = ({
	${fl(f)}
}) => {
	return (
		<div>
			${f} Page
		</div>
	)
};

${f}.propTypes = {
	${fl(f)}: PropTypes.object,
};

export default connect(({ ${fl(f)} }) => ({ ${fl(f)} }))(${f});
	`
}

// scss模板
var scssTemplate = function (f) {
	return `/**
 * ${f} scss
 */

@charset 'utf-8';
`
}

// 创建文件夹和目录
function mkall(item) {
	var last = item.lastIndexOf('/'),
		// dir = path.join('src', 'pages', item.substr(0, last)),
		dir = path.join('src', 'pages', item),
		file = item.substr(last+1, item.length);
	// mkdir(dir+'/models');
	// mkdir(dir+'/services');
	// mkdir(dir+'/scss');
	// mkdir(dir+'/views');

	console.log(dir);

	// 如果最后文件名是中横线转为首字母小写的驼峰命名
	if(file.indexOf('-') > -1) {
		file = file.split('-').map((l,i) => i ? fu(l) : l).join('');
	}
	// mkfile(dir + '/models/' + file + '.js', modelTemplate(file))
	// mkfile(dir + '/services/' + file + '.js', serviceTemplate(file))
	// mkfile(dir + '/scss/' + file + '.scss', scssTemplate(file))
	// mkfile(dir + '/views/' + fu(file) + '.js', viewTemplate(fu(file)))

	mkdir(dir);
	mkfile(dir + '/index.js', viewTemplate(fu(file)));
	mkfile(dir + '/service.js', serviceTemplate(fu(file)));
	mkfile(dir + '/model.js', modelTemplate(fu(file)));
}

var argv = require('yargs').argv

/**
 * 如果带参数--file 则单独生成文件 如 node renderFile.js --file=/songheng/product/dftt-zq/test1,/songheng/product/dftt-zq/test2
 * 否则遍历page.js中的routes
 */
if(argv.file) {
	var pages = argv.file.split(',')
} else {
	var { routes } = require('./src/configs/pages.js');
	var pages = routes.map(l => l.url)
}

for (var i = 0; i < pages.length; i++) {
	mkall(pages[i])
}