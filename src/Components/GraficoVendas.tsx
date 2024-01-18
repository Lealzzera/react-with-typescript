import {
	Legend,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
} from "recharts";
import { IVenda } from "../Context/DataContext";

const dadosGrafico = [
	{
		data: "2023-01-06",
		pago: 30,
		processando: 300,
		falha: 200,
	},
	{
		data: "2023-01-07",
		pago: 50,
		processando: 4,
		falha: 1000,
	},
	{
		data: "2023-01-08",
		pago: 500,
		processando: 40,
		falha: 10,
	},
	{
		data: "2023-01-09",
		pago: 5000,
		processando: 400,
		falha: 10,
	},
	{
		data: "2023-01-10",
		pago: 5000,
		processando: 8000,
		falha: 1070,
	},
];

type VendaDia = {
	data: string;
	pago: number;
	processando: number;
	falha: number;
};

function transformData(data: Array<IVenda>): VendaDia[] {
	const dias = data.reduce((acc: { [key: string]: VendaDia }, item) => {
		const dia = item.data.split(" ")[0];
		if (!acc[dia]) {
			acc[dia] = {
				data: dia,
				pago: 0,
				falha: 0,
				processando: 0,
			};
		}
		acc[dia][item.status] += item.preco;

		return acc;
	}, {});

	return Object.values(dias).map((dia) => ({
		...dia,
		data: dia.data.substring(5),
	}));
}

const GraficoVendas = ({ data }: { data: IVenda[] }) => {
	const transformedData = transformData(data);
	return (
		<ResponsiveContainer width='99%' height={400}>
			<LineChart data={transformedData}>
				<XAxis dataKey='data' />
				<Tooltip />
				<Legend />
				<Line type='monotone' dataKey='pago' stroke='#A36AF9' strokeWidth={3} />
				<Line
					type='monotone'
					dataKey='processando'
					stroke='#FBCB21'
					strokeWidth={3}
				/>
				<Line
					type='monotone'
					dataKey='falha'
					stroke='#000000'
					strokeWidth={3}
				/>
			</LineChart>
		</ResponsiveContainer>
	);
};

export default GraficoVendas;