type BaseButtonType = { onClick?: (<T>(params:T) => void) | undefined,
                       size?:string,
                       children: any}

export type ColorButtonType = BaseButtonType

export type ButtonType = BaseButtonType & { className: string }