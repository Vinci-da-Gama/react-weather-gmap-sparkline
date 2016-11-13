import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(aryData) {
	return _.round(_.sum(aryData)/aryData.length);
}

const Chart = (props) => {
	console.log('10 -- props is: ', props);
    return (
	    <div>
	        <Sparklines height={120} width={180} data={props.ary}>
	            <SparklinesLine color={props.color} />
	            <SparklinesReferenceLine type="avg" />
	        </Sparklines>
	        <div>
	        	{average(props.ary)} {props.unit}
	        </div>
	    </div>
    );
};

export default Chart;