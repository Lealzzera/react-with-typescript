import { NavLink } from "react-router-dom";
import { IVenda } from "../Context/DataContext";

const VendaItem = ({ venda }: { venda: IVenda }) => {
	return (
		<div className='venda box'>
			<NavLink style={{ fontFamily: "monospace" }} to={`/vendas/${venda.id}`}>
				{venda.id}
			</NavLink>
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
