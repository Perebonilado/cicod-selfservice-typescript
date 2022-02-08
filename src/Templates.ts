export interface ItemsTemplate {
    id: number,
    product: string,
    merchantLocation: string,
    qty: number,
    unitPrice: number,
    amount: number
}

export type MessageTemplate = {
    id?: number,
    name?: string,
    date?: string,
    time?: string,
    isReply?:boolean,
    isAttach?: boolean,
    documentName?: string,
    message: string
}

export type OrderTemplate = {
    customerName: string,
    phone: string,
    customerEmail: string,
    address: string,
    orderChannel: string,
    orderStatus: string,
    paymentMode: string,
    paymentStatus: string,
    paymentDueDate?: string,
    deliveryType: string,
    deliveryAddress: string
}

export interface StatusHistoryTemplate {
    id: number
    status: string,
    dateAndTime: string,
    comment?: string,
    isComment: boolean,
}