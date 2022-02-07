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