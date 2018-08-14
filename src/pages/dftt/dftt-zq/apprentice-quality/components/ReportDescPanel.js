/**
 * 报表信息说明
 * @param  {[type]}    options.report [description]
 * @param  {...[type]} options.props  [description]
 * @return {[type]}                   [description]
 */

import EditorLayout from '@/components/EditorLayout';
import TimelineLayout from '@/components/TimelineLayout';

const ReportDescPanel = ({
	...props
}) => {
	let { dispatch } = props;
	return (
		<div className="report-panel">
		    <TimelineLayout/>

            <EditorLayout/>
		</div>
	)
}

export default ReportDescPanel;