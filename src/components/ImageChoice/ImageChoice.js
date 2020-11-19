import React, { useState } from 'react';
import ImagePicker from 'react-image-picker';
//import "react-image-picker/dist/index.css";

import img1 from '../../assets/one.jpg';
import img2 from '../../assets/two.jpg';
import img3 from '../../assets/three.jpg';
import img4 from '../../assets/four.jpg';

import { formatImageList } from './ImageChoiceUtils';

const imageList = [img1, img2, img3, img4];

const ImageChoice = ({ setImage }) => {
	const formattedImages = formatImageList(imageList);
	return (
		<div>
			<ImagePicker
				style={{ width: '50%', margin: 'auto' }}
				images={formattedImages}
				onPick={(image) => setImage(image)}
			/>
		</div>
	);
};

export default ImageChoice;
