export type FormType = { onClick?: (arg:React.MouseEvent<HTMLButtonElement>)=>void, children?: any}
export type FormItemType = { onChange?: (arg:React.ChangeEvent<HTMLInputElement>)=>void,
                             id: string, labelText:string, type?:string }