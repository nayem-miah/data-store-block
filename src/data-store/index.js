
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';


registerBlockType(metadata.name, {
	icon: {
		src: "database",
		background: "#FFFFFF",
		foreground: "#ff6900",
	},
	edit: Edit,
});
