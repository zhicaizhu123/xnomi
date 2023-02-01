declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number

declare type TimeoutHandle = ReturnType<typeof setTimeout>

declare type Nullable<T> = T | null

declare type Recordable<T = any> = Record<string, T>

declare type TargetContext = '_self' | '_blank'

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface LabelValueOption<T = any> {
  label: string
  value: T
  [key: string]: any
}
