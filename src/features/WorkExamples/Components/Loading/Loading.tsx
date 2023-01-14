import React from 'react';
import style from './Loading.module.scss';
import LoadingImg from './assets/loading.svg';

const Loading = () => {
	return (
		<div>
			<img src={LoadingImg} alt='Loading' className={style.Image} />
		</div>
	);
};

export default Loading;
