import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
} from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { Empty, EmptyTitle, EmptyMedia } from '@/components/ui/empty';

interface RadarChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKeys: string[];
	nameKey: string;
	width?: number;
	height?: number;
}

export function RadarChartComponent({
	data,
	config,
	dataKeys,
	nameKey,
	width,
	height,
}: RadarChartProps) {
	return (
		<ChartContainer
			config={config}
			width={width}
			height={height}
			data={data}
			emptyComponent={
				<div className="flex h-full items-center justify-center">
					<Empty>
						<EmptyMedia variant="icon">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
								<line x1="12" y1="2" x2="12" y2="22" />
								<line x1="2" y1="8.5" x2="22" y2="15.5" />
								<line x1="22" y1="8.5" x2="2" y2="15.5" />
							</svg>
						</EmptyMedia>
						<EmptyTitle className="text-muted-foreground">暂无数据</EmptyTitle>
					</Empty>
				</div>
			}
		>
			<RadarChart
				data={data}
				margin={{ top: 20, right: 30, bottom: 40, left: 20 }}
			>
				<PolarGrid />
				<PolarAngleAxis dataKey={nameKey} />
				<PolarRadiusAxis />
				{dataKeys.map((key, index) => (
					<Radar
						key={key}
						dataKey={key}
						stroke={`var(--color-${key})`}
						fill={`var(--color-${key})`}
						fillOpacity={0.1 + index * 0.2}
					/>
				))}
				<ChartTooltip content={<ChartTooltipContent />} />
			</RadarChart>
		</ChartContainer>
	);
}
