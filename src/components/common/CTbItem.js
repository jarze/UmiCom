import React from 'react';
import moment from 'moment';

const CTbItem = ({
	type = "",
	value
}) => {
	switch (type) {
		case 'img':
		case 'pic':
			return <a href={value} target="_blank"><img src={value} alt="" style={{ maxHeight: 100, maxWidth: 150 }} /></a>;
		case 'a':
		case 'uploadFile':
			return <a href={value} target="_blank">{value}</a>;
		case 'textarea':
			return <div style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{value}</div>;
		case 'content':
			return <div dangerouslySetInnerHTML={{ __html: value || '' }} />;
		case 'uploadVideo':
			return (
				value && value.length ?
					<video width="200px" controls>
						<source src={value} type="video/mp4" />
						Your browser does not support HTML5 video.
          </video>
					: null
			);
		default:
			if (type && type.indexOf('unix_time') >= 0) {
				if (type.indexOf('utc') >= 0) {
					return (value && Number(value) ? moment(value, 'X').utc().format('YYYY-MM-DD HH:mm:ss') : value);
				}
				return (value && Number(value) ? moment(value, 'X').format('YYYY-MM-DD HH:mm:ss') : value);
			}
			return <span>{value}</span>;
	}
};

export default CTbItem;
