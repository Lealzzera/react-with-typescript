import { IVenda } from "../Context/DataContext";

const VendaItem = ({ venda }: { venda: IVenda }) => {
	return (
		<div className='venda box'>
			<a style={{ fontFamily: "monospace" }} href=''>
				{venda.id}
			</a>
			<div>
				<span>{venda.nome}</span>
			</div>
			<div>
				<span>
					{venda.preco.toLocaleString("pt-BR", {
						style: "currency",
						currency: "BRL",
					})}
				</span>
			</div>
		</div>
	);
};

export default VendaItem;
