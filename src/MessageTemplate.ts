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