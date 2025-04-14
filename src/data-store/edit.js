// import { __ } from "@wordpress/i18n";
// import { useBlockProps } from "@wordpress/block-editor";
// import "./editor.scss";
// export default function Edit() {
// 	return (
// 		<div {...useBlockProps()}>
// 			<h2>{wp.data.select("core/editor").getEditedPostAttribute("title")}</h2>
// 			<input
// 				value={wp.data.select("core/editor").getEditedPostAttribute("title")}
// 			onChange={(e)=>wp.data.dispatch('core/editor').editPost({title: e.target.value })}
// 			/>
// 		</div>
// 	);
// }

import { useBlockProps } from '@wordpress/block-editor';
import "./editor.scss";
import { useSelect, useDispatch } from '@wordpress/data';

export default function Edit() {
	const title = useSelect((select) => {
		return select('core/editor')

			.getEditedPostAttribute('title');
	});
	const { editPost } = useDispatch('core/editor');
	return (
		<div {...useBlockProps()}>
			<h2>{title}</h2>
			<input
				value={title}
				onChange={(e) => editPost({ title: e.target.value })}
			/>
		</div>
	);
}


