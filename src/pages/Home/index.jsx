import { useState } from 'react'
import { HomeContainer, HeaderHome, OpenCloseButton, MainHome, LeftSection, RightSection, TotalOrders} from './styles.js'
import { AiOutlinePoweroff, AiOutlineFieldTime, AiOutlineShoppingCart } from "react-icons/ai"
import { IoTimeOutline } from "react-icons/io5"

export default function Home() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <HomeContainer>
            <HeaderHome>
                <h2>Gerenciar pedidos</h2>
                {
                    isOpen ? 
                    <OpenCloseButton isOpen={isOpen} onClick={()=> setIsOpen(!isOpen)}>
                        <AiOutlinePoweroff size={15} />
                        FECHAR LOJA
                    </OpenCloseButton>
                    :
                    <OpenCloseButton isOpen={isOpen} onClick={()=> setIsOpen(!isOpen)}>
                        <AiOutlinePoweroff size={15} />
                        ABRIR LOJA
                    </OpenCloseButton>
                }
                
            </HeaderHome>
            <MainHome>
                <div>
                    <TotalOrders>
                        <div>
                            <AiOutlineShoppingCart size={30} color="#fa5b0f"/>
                            <p>14</p>
                        </div>
                        <h3>Total de Pedidos</h3>
                    </TotalOrders>

                    <TotalOrders>
                        <div>
                            <IoTimeOutline size={30} color='#1A932E'/>
                            <p>9</p>
                        </div>
                        <h3>Ped. Entregues</h3>
                    </TotalOrders>

                    <TotalOrders>
                        <div>
                            <IoTimeOutline size={30} color='#3a31bf'/>
                            <p>2</p>
                        </div>
                        <h3>Pedidos em rota</h3>
                    </TotalOrders>

                    <TotalOrders>
                        <div>
                        <IoTimeOutline size={30} color='#94860a'/>
                            <p>3</p>
                        </div>
                        <h3>Ped. em Produção</h3>
                    </TotalOrders>

                    <TotalOrders>
                        <div>
                            <AiOutlineFieldTime size={30} color="#fa5b0f"/>
                            <p>36 m</p>
                        </div>
                        <h3>Tempo de Entrega</h3>
                    </TotalOrders>

                </div>
                <div>
                    <LeftSection>
                        sessão 1
                    </LeftSection>
                    <RightSection>sessão 2</RightSection>                    
                </div>
            </MainHome>

        </HomeContainer>
    )
}