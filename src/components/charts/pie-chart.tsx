import { Pie, PieChart, Cell } from 'recharts';
import {
	ChartContainer,
	ChartTooltipContent,
	ChartTooltip,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';
import { Empty, EmptyTitle, EmptyMedia } from '@/components/ui/empty';

interface PieChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKey: string;
	nameKey: string;
	colors?: string[];
	width?: number;
	height?: number;
}

export function PieChartComponent({
	data,
	config,
	dataKey,
	nameKey,
	colors = [
		'var(--chart-1)',
		'var(--chart-2)',
		'var(--chart-3)',
		'var(--chart-4)',
		'var(--chart-5)',
	],
	width,
	height,
}: PieChartProps) {
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
								<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
								<path d="M22 12A10 10 0 0 0 12 2v10z" />
							</svg>
						</EmptyMedia>
						<EmptyTitle className="text-muted-foreground">暂无数据</EmptyTitle>
					</Empty>
				</div>
			}
		>
			<PieChart>
				<Pie
					data={data}
					dataKey={dataKey}
					nameKey={nameKey}
					cx="50%"
					cy="50%"
					outerRadius={80}
					label
				>
					{data.map((_, index) => (
						<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
					))}
				</Pie>
				<ChartTooltip content={<ChartTooltipContent />} />
			</PieChart>
		</ChartContainer>
	);
}
