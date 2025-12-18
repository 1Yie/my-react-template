import { Bar, Line, ComposedChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { Empty, EmptyTitle, EmptyMedia } from '@/components/ui/empty';

interface ComposedChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	xAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	barKeys: string[];
	lineKeys: string[];
	width?: number;
	height?: number;
}

export function ComposedChartComponent({
	data,
	config,
	xAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	barKeys,
	lineKeys,
	width,
	height,
}: ComposedChartProps) {
	return (
		<ChartContainer
			config={config}
			data={data}
			width={width}
			height={height}
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
								<path d="M3 3v18h18" />
								<path d="M18 17V9" />
								<path d="M13 17V5" />
								<path d="M8 17v-3" />
								<path d="M21 9H3" />
							</svg>
						</EmptyMedia>
						<EmptyTitle className="text-muted-foreground">暂无数据</EmptyTitle>
					</Empty>
				</div>
			}
		>
			<ComposedChart
				data={data}
				margin={{ top: 20, right: 30, bottom: 40, left: 20 }}
			>
				<XAxis
					dataKey={xAxisKey}
					label={{ value: xAxisLabel, position: 'insideBottom', offset: -5 }}
				/>
				<YAxis
					label={{ value: yAxisLabel, angle: -90, position: 'insideLeft' }}
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
				{barKeys.map((key) => (
					<Bar key={key} dataKey={key} fill={`var(--color-${key})`} />
				))}
				{lineKeys.map((key) => (
					<Line
						key={key}
						type="monotone"
						dataKey={key}
						stroke={`var(--color-${key})`}
						strokeWidth={2}
					/>
				))}
			</ComposedChart>
		</ChartContainer>
	);
}
