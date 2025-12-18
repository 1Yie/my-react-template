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

interface RadarChartProps {
	data: Record<string, string | number>[];
	config: ChartConfig;
	dataKeys: string[];
	nameKey: string;
}

export function RadarChartComponent({
	data,
	config,
	dataKeys,
	nameKey,
}: RadarChartProps) {
	return (
		<ChartContainer config={config}>
			<RadarChart data={data}>
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
