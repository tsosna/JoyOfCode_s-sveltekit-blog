type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locals = 'pl') {
	const formaterr = new Intl.DateTimeFormat(locals, { dateStyle })
	return formaterr.format(new Date(date))
}
