declare type Nullable<T> = T | null

declare type Recordable<T = any> = Record<string, T>

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface LabelValueOption<T = any> {
  label: string
  value: T
  [key: string]: any
}
