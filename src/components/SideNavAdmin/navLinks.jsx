import { ListIcon, ListPlusIcon, ListStarIcon, ReceiptIcon } from "@phosphor-icons/react";

export const navLinks = [
    {
        id: 1,
        label: 'Pedidos',
        path: '/admin/pedidos',
        icon: <ReceiptIcon size={32} weight="duotone" />
    },
    {
        id: 2,
        label: 'Produtos',
        path: '/admin/produtos',
        icon: <ListIcon size={32} />
    },
    {
        id: 3,
        label: 'Novo Produto',
        path: '/admin/novo-produto',
        icon: <ListPlusIcon size={32} />
    },
    {
        id: 4,
        label: 'Nova Categoria',
        path: '/admin/nova-categoria',
        icon: <ListStarIcon size={32} weight="duotone"/>
    },
]