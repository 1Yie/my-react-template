import { Line, LineChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { Empty, EmptyTitle, EmptyMedia } from '@/components/ui/empty';

interface LineChartProps {
	data: Array<Record<string, unknown>>;
	config: ChartConfig;
	xAxisKey: string;
	xAxisLabel?: string;
	yAxisLabel?: string;
	lineKeys: string[];
	lineType?: 'linear' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter';
	width?: number;
	height?: number;
}

export function LineChartComponent({
	data,
	config,
	xAxisKey,
	xAxisLabel = 'X 轴',
	yAxisLabel = 'Y 轴',
	lineKeys,
	lineType = 'monotone',
	width,
	height,
}: LineChartProps) {
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
								<path d="M3 3v18h18" />
								<path d="m19 9-5 5-4-4-3 3" />
							</svg>
						</EmptyMedia>
						<EmptyTitle className="text-muted-foreground">暂无数据</EmptyTitle>
					</Empty>
				</div>
			}
		>
			<LineChart
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
				{lineKeys.map((key) => (
					<Line
						key={key}
						type={lineType}
						dataKey={key}
						stroke={`var(--color-${key})`}
						strokeWidth={2}
					/>
				))}
			</LineChart>
		</ChartContainer>
	);
}
