type DateStyle = Intl.DateTimeFormatOptions['dateStyle']
type TimeStyle = Intl.DateTimeFormatOptions['timeStyle']

export function formatDate(
  date: string, 
  dateStyle: DateStyle = 'medium', 
  timeStyle: TimeStyle = 'short', 
  locales = 'en'
) {
  // Directly pass the ISO string to Date constructor
  const dateToFormat = new Date(date)

  // Check if the date is valid
  if (isNaN(dateToFormat.getTime())) {
    throw new RangeError('Invalid date')
  }

  // DateFormatter with both dateStyle and timeStyle
  const dateFormatter = new Intl.DateTimeFormat(locales, { 
    dateStyle, 
    timeStyle, 
    hour12: true // Convert to 12-hour time format with AM/PM
  })

  return dateFormatter.format(dateToFormat).replace(',', '')
}