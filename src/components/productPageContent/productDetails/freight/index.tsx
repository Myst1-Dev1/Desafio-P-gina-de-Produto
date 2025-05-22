import { maskCep } from "@/components/utils/maskCep";
import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";


export function Freight() {
    const [isCepBoxOpen, setIsCepBoxOpen] = useState(false);
    const [cep, setCep] = useState('123556-00');
    const [cepInfo, setCepInfo] = useState({
        cep: '12355-600',
        localidade: 'Rio de Janeiro',
        uf: 'RJ',
    });

    const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const maskedCep = maskCep(e.target.value);
        setCep(maskedCep);
    };

    const handleSearchCep = async () => {
        if (cep.length !== 9) {
        alert('Digite um CEP válido com 9 dígitos.');
        return;
        }

        try {
        const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await res.json();

        if (data.erro) {
            alert('CEP não encontrado.');
            return;
        }

        const formattedCep = `${data.cep.slice(0, 5)}${data.cep.slice(5)}`;
        setCepInfo({
            cep: formattedCep,
            localidade: data.localidade,
            uf: data.uf,
        });

        setIsCepBoxOpen(false);
        } catch (error) {
        alert('Erro ao buscar o CEP.');
        }
    };

    return (
        <>
            <div className="flex w-full lg:gap-0 gap-[18px] justify-between max-w-2xl">
                <h6 className="text-zinc-500">Frete</h6>
                <div className="flex gap-3 relative">
                    <FaTruck className="text-emerald-300 h-[27px]" />
                    <div className="flex flex-col gap-3">
                        <div className="text-zinc-500">Frete para</div>
                        <div className="text-zinc-500">Frete</div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div onClick={() => setIsCepBoxOpen(!isCepBoxOpen)} className="font-semibold flex items-end gap-2 cursor-pointer">
                            {cepInfo.cep} {cepInfo.localidade} {cepInfo.uf}
                            <MdKeyboardArrowDown className="flex-shrink-0 text-zinc-500 text-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="line-through">R$9,62</div>
                            <div>R$:0,00</div>
                        </div>
                    </div>
                    {isCepBoxOpen && (
                        <div className="bg-white flex gap-3 absolute right-0 -bottom-[38px] p-3 shadow-md z-10">
                            <input
                                value={cep}
                                onChange={handleCepChange}
                                type="text"
                                className="outline-none p-3 border border-gray-300"
                                placeholder="Digite um CEP"
                                maxLength={9}
                            />
                            <button
                                onClick={handleSearchCep}
                                className="cursor-pointer p-2 border-none bg-red-500 text-white transition-all duration-500 hover:brightness-90"
                            >
                                Confirmar
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}