/**
 * @module calendar
 */

/**
 * 日期元素模型结构
 */
export interface DaysModel {
  /**
   * 显示值
   */
  value: string | number
  /**
   * 字符串格式
   */
  id: string
  /**
   * 完成日期信息
   */
  date: Omit<Date, SymbolConstructor['toPrimitive']>
  /**
   * 年
   */
  year: number
  /**
   * 月
   */
  month: number
  /**
   * 日
   */
  day: number
  /**
   * 星期
   */
  week: number
  /**
   * 是否为今天
   */
  isToday: boolean
  /**
   * 是否为本月日期
   */
  isCurrentMonth: boolean
  /**
   * 是否为上个月日期
   */
  isPrevMonth: boolean
  /**
   * 是否为下个月日期
   */
  isNextMonth: boolean
}

/**
 * 日历类配置项
 */
export interface OptionsModel {
  /**
   * 第一列是否为星期日，否则为星期一
   */
  startInSunday: boolean
  /**
   * 日历类型
   */
  type: 'month' | 'week'
  /**
   * 是否分割成多行
   */
  rows: boolean
  /**
   * 格式化展示日期
   */
  formatValue: (value: number, date: Date) => string | number
  /**
   * 格式化星期
   */
  formatWeek: (week: string) => string
}

/**
 * @category 日历处理
 * 日历类
 */
export class Calendar {
  /**
   * 创建Calendar实例
   *
   * @param {Partial<OptionsModel>} [config={}] 配置项
   */
  constructor(config: Partial<OptionsModel> = {}) {
    this.options = { ...this.options, ...config }
    if (!this.options.startInSunday) {
      const sunday = this.weeks.shift() as string
      this.weeks.push(sunday)
    }
  }

  private weeks = ['日', '一', '二', '三', '四', '五', '六']

  private options: OptionsModel = {
    startInSunday: true,
    type: 'month',
    rows: true,
    formatValue: (value) => value,
    formatWeek: (week) => week,
  }

  private days: DaysModel[] = []

  private currentDate!: Date

  /**
   * 获取日期信息
   */
  private getDateInfo(date: Date = new Date()) {
    const d = new Date(date)
    const year = d.getFullYear()
    const month = d.getMonth() - 0 + 1
    const day = d.getDate()
    const week = d.getDay()
    return {
      year,
      month,
      day,
      week,
    }
  }

  /**
   * 获取指定年月的第一天是星期几
   */
  private getFirstDayIndex(date: Date = new Date()) {
    const { year, month } = this.getDateInfo(date)
    return new Date(`${year}/${this.formatTime(`${month}`)}/01`).getDay()
  }

  /**
   * 获取指定年月的天数
   */
  private getDayCount(date: Date = new Date()) {
    const { year, month } = this.getDateInfo(date)
    return new Date(year, month, 0).getDate()
  }

  private formatTime(val: string) {
    const str = `00${val}`
    return str.slice(str.length - 2, str.length)
  }

  /**
   * 创建日历元素
   */
  private createDay(date = new Date(), type: -1 | 0 | 1): DaysModel {
    const { year, month, day, week } = this.getDateInfo(date)
    const { year: y, month: m, day: d } = this.getDateInfo(new Date())
    const id = `${year}/${this.formatTime(`${month}`)}/${this.formatTime(`${day}`)}`
    const todayId = `${y}/${this.formatTime(`${m}`)}/${this.formatTime(`${d}`)}`
    return {
      value: this.options.formatValue(day, date),
      id,
      date,
      year,
      month,
      day,
      isToday: id === todayId,
      isCurrentMonth: type === 0,
      isPrevMonth: type === -1,
      isNextMonth: type === 1,
      week,
    }
  }

  /**
   * 生成当前月日子信息
   */
  private createCurrentMonthDays(date: Date = new Date()) {
    const { year, month } = this.getDateInfo(date)
    const dayCount = this.getDayCount(date)
    for (let i = 0; i < dayCount; i++) {
      const currentDay = i + 1
      const id = `${year}/${this.formatTime(`${month}`)}/${this.formatTime(`${currentDay}`)}`
      const currentDate = new Date(id)
      this.days.push(this.createDay(currentDate, 0))
    }
  }

  /**
   * 生成上个月日子信息
   */
  private createPrevMonthDays(date: Date = new Date()) {
    const firstDayIndex = this.getFirstDayIndex(date)
    const { year, month } = this.getDateInfo(date)
    const prevYear = month - 1 <= 0 ? year - 1 : year
    const prevMonth = month - 1 <= 0 ? 12 : month - 1
    const prevDayCount = this.getDayCount(
      new Date(`${prevYear}/${this.formatTime(`${prevMonth}`)}/01`)
    )
    const restCount = this.options.startInSunday ? firstDayIndex : firstDayIndex - 1
    for (let i = 0; i < restCount; i++) {
      const day = prevDayCount - i
      const id = `${prevYear}/${this.formatTime(`${prevMonth}`)}/${this.formatTime(`${day}`)}`
      const prevDate = new Date(id)
      this.days.unshift(this.createDay(prevDate, -1))
    }
  }

  /**
   * 生成下个月日子信息
   */
  private createNextMonthDays(date: Date = new Date()) {
    const restCount = 42 - this.days.length
    const { year, month } = this.getDateInfo(date)
    const nextYear = month + 1 > 12 ? year + 1 : year
    const nextMonth = month + 1 > 12 ? 1 : month + 1
    for (let i = 0; i < restCount; i++) {
      const day = i + 1
      const id = `${nextYear}/${this.formatTime(`${nextMonth}`)}/${this.formatTime(`${day}`)}`
      const nextDate = new Date(id)
      this.days.push(this.createDay(nextDate, 1))
    }
  }

  /**
   * 设置日历
   *
   * @param {*} [date=new Date()] 日期
   */
  setCalendar(date = new Date()) {
    this.days = []
    this.currentDate = new Date(date)
    this.createCurrentMonthDays(date)
    this.createPrevMonthDays(date)
    this.createNextMonthDays(date)
  }

  /**
   * 获取日历信息
   *
   * @param {*} [date=new Date()] 日期
   * @return {DaysModel[][]}
   */
  getCalendar(date = new Date()) {
    this.setCalendar(date)
    const days = this.days.reduce((acc, item, index) => {
      const currentRow = Math.floor(index / 7)
      const currentCol = index % 7
      if (!acc[currentRow]) {
        acc[currentRow] = []
      }
      acc[currentRow][currentCol] = item
      return acc
    }, [] as DaysModel[][])
    return days
  }

  /**
   * 获取下一个日历信息
   *
   * @return {DaysModel[][]}
   */
  getNextCalendar() {
    const { year, month, day } = this.getDateInfo(this.currentDate)
    const nextYear = month + 1 > 12 ? year + 1 : year
    const nextMonth = month + 1 > 12 ? 1 : month + 1
    return this.getCalendar(
      new Date(`${nextYear}/${this.formatTime(`${nextMonth}`)}/${this.formatTime(`${day}`)}`)
    )
  }

  /**
   * 获取上一个日历信息
   *
   * @return {DaysModel[][]}
   */
  getPrevCalendar() {
    const { year, month, day } = this.getDateInfo(this.currentDate)
    const prevYear = month - 1 <= 0 ? year - 1 : year
    const prevMonth = month - 1 <= 0 ? 12 : month - 1
    return this.getCalendar(
      new Date(`${prevYear}/${this.formatTime(`${prevMonth}`)}/${this.formatTime(`${day}`)}`)
    )
  }

  /**
   * 获取今天所出日历
   *
   * @return {DaysModel[][]}
   */
  getCalendarInToday() {
    return this.getCalendar(new Date())
  }

  /**
   * 获取指定日期的日历信息
   *
   * @param {Date} [date=new Date()] 日期
   * @return {DaysModel}
   */
  getDay(date: Date = new Date()) {
    return this.createDay(date, 0)
  }

  /**
   * 获取星期列表
   *
   * @return {string[]}
   */
  getCalendarWeeks() {
    return this.weeks.map((week) => this.options.formatWeek(week))
  }
}

/**
 * @category 日历处理
 * 生成日历
 *
 * @param {Partial<OptionsModel>} [config={}] 日历配置
 * @return {Calendar}
 */
export function createCalendar(config: Partial<OptionsModel> = {}) {
  return new Calendar(config)
}
