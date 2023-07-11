import { SideBar, StyledLink, SmallSideBar, SmallStyledLink } from './styles.js'
import {BiBell} from 'react-icons/bi'
import {MdOutlineSportsMotorsports} from 'react-icons/md'
import {PiStorefront} from 'react-icons/pi'
import {GoGear} from 'react-icons/go'
import {BsLightbulb, BsCreditCard2Back} from 'react-icons/bs'
import {TbTicket, TbReceiptTax} from 'react-icons/tb'
import { useState } from 'react'


export default function Menu({ onItemClick, toggleMenu }) {

    const [active, setActive] = useState('pedidos')

    if(!toggleMenu) {return (
        <SmallSideBar className='menuLeft'>
            <SmallStyledLink to="/" active={active === 'pedidos'} onClick={()=> setActive('pedidos')}>
                <BiBell size={25} />
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'motoboys'} onClick={()=> setActive('motoboys')}>
                <MdOutlineSportsMotorsports size={20} />  
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'cupons'} onClick={()=> setActive('cupons')}>
                <TbTicket size={20} /> 
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'site'} onClick={()=> setActive('site')}>
                <PiStorefront size={20} />
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'taxas'} onClick={()=> setActive('taxas')}>
                <TbReceiptTax size={20} />
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'pagamentos'} onClick={()=> setActive('pagamentos')}>
                <BsCreditCard2Back size={18} />
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'configuracoes'} onClick={()=> setActive('configuracoes')}>
                <GoGear size={18} />  
            </SmallStyledLink>
            <SmallStyledLink to="/" active={active === 'ajuda'} onClick={()=> setActive('ajuda')}>
                <BsLightbulb size={18} />
            </SmallStyledLink>
        </SmallSideBar>
    )} else return (
        <SideBar className='menuLeft' >
            <StyledLink to="/" active={active === 'pedidos'} onClick={()=> setActive('pedidos')}>
                <BiBell size={20} />
                Pedidos
            </StyledLink>
            <StyledLink to="/" active={active === 'motoboys'} onClick={()=> setActive('motoboys')}>
                <MdOutlineSportsMotorsports size={20} />            
                Motoboys
            </StyledLink>
            <StyledLink to="/" active={active === 'cupons'} onClick={()=> setActive('cupons')}>
                <TbTicket size={20} /> 
                Cupons
            </StyledLink>
            <StyledLink to="/" active={active === 'site'} onClick={()=> setActive('site')}>
                <PiStorefront size={20} />
                Meu Site
            </StyledLink>
            <StyledLink to="/" active={active === 'taxas'} onClick={()=> setActive('taxas')}>
                <TbReceiptTax size={20} />
                Taxas de Entrega
            </StyledLink>
            <StyledLink to="/" active={active === 'pagamentos'} onClick={()=> setActive('pagamentos')}>
                <BsCreditCard2Back size={18} />            
                Pagamentos
            </StyledLink>
            <StyledLink to="/" active={active === 'configuracoes'} onClick={()=> setActive('configuracoes')}>
                <GoGear size={18} />  
                Configurações
            </StyledLink>
            <StyledLink to="/" active={active === 'ajuda'} onClick={()=> setActive('ajuda')}>
                <BsLightbulb size={18} />
                Ajuda
            </StyledLink>
        </SideBar>
    )
}
