import React from 'react';

export const PartList = ({ total, path, set, selected, zoom = 1, top = '50%' }) => {
	let parts = [];
	for (let i = 0; i < total; i++) {
		parts.push(
			<div key={path + i} className={selected === i ? 'selected clickable square' : 'clickable square'} onClick={() => set(i)}>
				<img src={`character/${path}/${i + 1}.png`} alt="" height={60 * zoom} className="img-center" style={{ top }} />
			</div>
		);
	}
	return <div className="list">{parts}</div>;
};
