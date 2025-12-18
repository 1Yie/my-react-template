import { RadialBar, RadialBarChart, PolarAngleAxis, PolarGrid } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { Empty, EmptyTitle, EmptyMedia } from '@/components/ui/empty';

interface RadialBarChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKey: string;
	width?: number;
	height?: number;
}

export function RadialBarChartComponent({
	data,
	config,
	dataKey,
	width,
	height,
}: RadialBarChartProps) {
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
								<circle cx="12" cy="12" r="10" />
								<path d="M12 2a10 10 0 0 1 0 20" />
								<path d="M12 2a10 10 0 0 0 0 20" />
							</svg>
						</EmptyMedia>
						<EmptyTitle className="text-muted-foreground">暂无数据</EmptyTitle>
					</Empty>
				</div>
			}
		>
			<RadialBarChart
				cx="50%"
				cy="50%"
				innerRadius="10%"
				outerRadius="80%"
				barSize={10}
				data={data}
				margin={{ top: 20, right: 30, bottom: 40, left: 20 }}
			>
				<PolarGrid gridType="polygon" />
				<PolarAngleAxis
					type="number"
					domain={[0, 100]}
					dataKey={dataKey}
					tick={false}
				/>
				<RadialBar
					label={{ position: 'insideStart', fill: '#fff' }}
					background
					dataKey={dataKey}
					fill="var(--chart-1)"
				/>
				<ChartTooltip content={<ChartTooltipContent />} />
			</RadialBarChart>
		</ChartContainer>
	);
}
