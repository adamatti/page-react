import Link from 'next/link';
import type { ReactElement } from 'react';
import type { Video } from '~/types';

function YoutubeEmbed({ embedId }: { embedId: string }): ReactElement {
	return (
		<div>
			<iframe
				width="460"
				height="200"
				src={`https://www.youtube.com/embed/${embedId}`}
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube"
			/>
		</div>
	);
}

export default function VideoCard({
	video: v,
}: { video: Video }): ReactElement {
	return (
		<div className="card card-compact w-300 bg-base-100 shadow-xl">
			<div className="card-body">
				<YoutubeEmbed embedId={v.embedId} />
				<p className="font-bold">{v.title}</p>
				<div className="flex flex-row place-content-center gap-2">
					{v.tags.map((t) => (
						<div
							key={t}
							className="bordered rounded bg-cyan-400 text-white w-40"
						>
							{t}
						</div>
					))}
				</div>
				<p>{v.description}</p>
				<div className="card-actions justify-center">
					<Link href={v.url}>source</Link>
				</div>
			</div>
		</div>
	);
}
